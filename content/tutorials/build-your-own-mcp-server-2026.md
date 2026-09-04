---
title: "How to Build Your Own MCP Server (2026): Give Claude Code and Cursor Tools They Don't Have"
description: "Build a custom MCP server in Python with FastMCP: define tools, test with the Inspector, and connect it to Claude Code, Claude Desktop, and Cursor."
date: 2026-09-02
updated: 2026-09-02
categories: ["Tutorials"]
tags: ["mcp", "claude-code", "cursor", "python", "developer-tools", "ai-agents"]
affiliate_disclosure: true
faqs:
  - question: "Do I need to know TypeScript to build an MCP server?"
    answer: "No. The official Python SDK with FastMCP is the fastest route for most people, and it is what this guide uses. There is an equally capable TypeScript SDK if you prefer Node, and community SDKs exist for other languages. The protocol is the same regardless of language, so a client like Claude Code cannot tell the difference."
  - question: "Can I use a custom MCP server with ChatGPT or other clients?"
    answer: "Most major AI clients now support MCP, including Claude Desktop, Claude Code, Cursor, Windsurf, and VS Code with Copilot. ChatGPT supports remote MCP servers as custom connectors on some plans, which means your server needs to run over HTTP with authentication rather than local stdio. Check your client's docs for the exact config format, but the server code stays the same."
  - question: "Is it safe to give an AI model access to my files through MCP?"
    answer: "It is as safe as the tools you expose. A read-only search tool scoped to one folder is low risk. A tool that deletes files or runs shell commands is high risk, because the model can call it based on text it read from a document or web page. Keep tools narrow, validate every input, and require confirmation in the client for anything destructive."
---

Installing someone else's MCP server takes five minutes, and our [guide to setting up MCP servers in Claude](/tutorials/set-up-mcp-servers-claude/) covers that. But the moment you want Claude Code or Cursor to reach into something specific to you, an internal API, a folder of notes, a database with your own schema, you need to write a server yourself.

The good news is that a useful one is about forty lines of Python. This tutorial builds a "notes" server that lets any MCP client search and read a folder of markdown files, then connects it to Claude Code, Claude Desktop, and Cursor. Swap the file logic for your own API calls and you have a template for anything.

## What you'll need

- Python 3.10 or newer and the `uv` package manager. Plain `pip` works too, but `uv` makes the client configs simpler.
- At least one MCP client: Claude Code, Claude Desktop, or Cursor.
- Node.js, only for the MCP Inspector testing tool.
- A folder of markdown files to point the server at. Any notes folder will do.

## Step 1 — Understand the three primitives

An MCP server exposes up to three kinds of things:

- **Tools** are functions the model can call. This is what you will use most.
- **Resources** are read-only data the client can attach to context, like a file or a status page.
- **Prompts** are reusable templates the user can invoke, often surfaced as slash commands.

Servers talk to clients over a transport. **Stdio** runs the server as a local subprocess and is what every desktop client expects for local tools. **Streamable HTTP** is for servers running somewhere else, shared by a team or reachable from a phone. Start with stdio. You can switch later with one line.

## Step 2 — Set up the project

```bash
uv init notes-mcp
cd notes-mcp
uv add "mcp[cli]"
```

The `cli` extra pulls in the developer tooling, including the command that launches the Inspector.

## Step 3 — Write the server

Create `server.py` with the following:

```python
import os
from pathlib import Path
from mcp.server.fastmcp import FastMCP

NOTES_DIR = Path(os.environ.get("NOTES_DIR", "~/notes")).expanduser().resolve()
mcp = FastMCP("notes")


def _safe_path(relative: str) -> Path:
    target = (NOTES_DIR / relative).resolve()
    if NOTES_DIR not in target.parents and target != NOTES_DIR:
        raise ValueError("Path is outside the notes folder")
    return target


@mcp.tool()
def search_notes(query: str, limit: int = 5) -> list[dict]:
    """Search markdown notes for a keyword (case-insensitive).
    Returns the relative path and a short snippet for each match."""
    results = []
    needle = query.lower()
    for path in NOTES_DIR.rglob("*.md"):
        text = path.read_text(encoding="utf-8", errors="ignore")
        idx = text.lower().find(needle)
        if idx == -1:
            continue
        snippet = text[max(0, idx - 80): idx + 120].replace("\n", " ")
        results.append({"path": str(path.relative_to(NOTES_DIR)), "snippet": snippet})
        if len(results) >= limit:
            break
    return results


@mcp.tool()
def read_note(path: str, max_chars: int = 8000) -> str:
    """Read one note by its relative path. Output is truncated to max_chars."""
    target = _safe_path(path)
    if not target.is_file():
        return f"No note found at {path}"
    return target.read_text(encoding="utf-8", errors="ignore")[:max_chars]


if __name__ == "__main__":
    mcp.run()
```

Three details matter here. The function names become tool names, so keep them descriptive. The type hints become the JSON schema the model sees, so use real types and defaults. The docstring becomes the tool description, and it is the only thing the model reads to decide when to call your tool. Write it like an instruction, not a comment.

## Step 4 — Test with the MCP Inspector

Before touching any client config, run:

```bash
NOTES_DIR=~/notes uv run mcp dev server.py
```

This starts the server and opens the Inspector in your browser. You can list tools, call `search_notes` with a query, and see exactly what JSON comes back. If something is wrong, you find out here rather than through a vague error inside Claude.

One rule that trips up almost everyone: **never print to stdout in a stdio server.** The protocol uses stdout for messages, and a stray `print()` corrupts the stream and disconnects the client. Use Python's `logging` module, which writes to stderr by default, or write to a file.

## Step 5 — Connect to Claude Code

Claude Code has a one-line install:

```bash
claude mcp add notes -e NOTES_DIR=/absolute/path/to/notes -- uv --directory /absolute/path/to/notes-mcp run server.py
```

Use absolute paths everywhere. Run `claude mcp list` to confirm it registered, then start a session and type `/mcp` to check the connection status. Ask something like "search my notes for onboarding checklist and summarize what you find." You should see Claude call `search_notes`, then `read_note`, then answer.

By default the server is added at local scope for the current project. Add `--scope user` to make it available everywhere, or `--scope project` to commit it to a shared config for your team. If you are already using Claude Code seriously, this pairs well with the workflow in our [Claude Code subagents guide](/tutorials/claude-code-subagents-guide-2026/), since subagents inherit MCP tools.

## Step 6 — Connect to Claude Desktop and Cursor

Both use a JSON file with the same shape.

For Claude Desktop, open Settings, go to Developer, and click Edit Config to open `claude_desktop_config.json`. Add:

```json
{
  "mcpServers": {
    "notes": {
      "command": "uv",
      "args": ["--directory", "/absolute/path/to/notes-mcp", "run", "server.py"],
      "env": { "NOTES_DIR": "/absolute/path/to/notes" }
    }
  }
}
```

Restart Claude Desktop fully. The tools icon in the chat box should list your server.

For Cursor, create `.cursor/mcp.json` in your project (or `~/.cursor/mcp.json` for global use) with the identical block. Then open Cursor settings, find the MCP section, and confirm the server shows a green status. Cursor's agent mode will call your tools during a task. If you are weighing which client to make your daily driver, our [Claude Code vs Cursor comparison](/compare/claude-code-vs-cursor-2026/) covers the tradeoffs.

If a client says the server failed to start, the cause is almost always one of three things: a relative path, `uv` not being on the PATH the desktop app sees, or a print statement. Run the same command in a terminal to see the real error.

## Step 7 — Add a resource and a prompt

Tools are enough for most servers, but the other primitives are cheap to add.

```python
@mcp.resource("notes://recent")
def recent_notes() -> str:
    """The ten most recently modified notes."""
    files = sorted(NOTES_DIR.rglob("*.md"), key=lambda p: p.stat().st_mtime, reverse=True)
    return "\n".join(str(p.relative_to(NOTES_DIR)) for p in files[:10])


@mcp.prompt()
def weekly_review() -> str:
    return "Read my notes from the last seven days and write a short weekly review with wins, open loops, and next actions."
```

Resources show up in clients that let you attach context, such as the paperclip menu in Claude Desktop. Prompts appear as slash commands in Claude Code and Claude Desktop, so `/weekly_review` becomes a one-word trigger for a multi-step task.

## Step 8 — Make it safe enough to trust

A server that only reads files is low stakes. The moment you add anything that writes, sends, or deletes, apply these rules:

- **Read-only by default.** Put write operations in separate, clearly named tools like `append_to_note`, never hidden inside a general-purpose one.
- **Validate every input.** The path check in `_safe_path` exists because a model can be talked into requesting `../../.ssh/id_rsa` by text it reads in a file. Treat tool arguments as untrusted.
- **Return errors as text, don't crash.** A raised exception ends the conversation turn with a confusing message. A returned string lets the model recover.
- **Cap output size.** A tool that returns a 200KB file eats the context window. The `max_chars` default above is deliberate.
- **Keep descriptions precise.** Vague descriptions cause the model to call the wrong tool or skip the right one.

If you want a client-side safety net as well, our [Claude Code hooks guide](/tutorials/claude-code-hooks-guide-2026/) shows how to require confirmation before specific tool calls run.

## Going remote (optional)

To share the server across machines, change the last line to `mcp.run(transport="streamable-http")` and run it on a host you control. It will listen on a local port that you put behind a reverse proxy with TLS. Every serious client expects remote servers to require authentication, typically OAuth, so do not expose an unauthenticated server to the internet even for testing. For a personal tool, a stdio server on each machine is simpler and safer than a remote one.

## Tips

- **Fewer, better tools.** Five well-described tools beat twenty overlapping ones. The model picks better when the choice is obvious.
- **Return compact structures.** Lists of small dicts with clear keys are easier for the model to use than prose or giant JSON blobs.
- **Version your server.** Put it in git. Tool descriptions are prompts, and you will iterate on them.
- **Test the description, not just the code.** Ask the client a question and watch whether it picks your tool. If it does not, rewrite the docstring.

## Common pitfalls

- Relative paths in client configs.
- A different Python environment than the one that has `mcp` installed. Using `uv --directory` avoids this.
- Logging to stdout.
- Tool names that collide with another installed server's tools.
- Forgetting to restart the client after editing config.

Once the notes server works, the pattern generalizes. Replace the file walk with a call to your ticketing system, your analytics database, or your CRM, keep the same validation habits, and you have given every AI client you use a capability nobody else ships. If you are still evaluating whether Claude Code is worth centering this on, our [Claude Code review](/reviews/claude-code-review/) has the full picture.
