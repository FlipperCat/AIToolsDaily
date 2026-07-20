---
title: "How to Set Up MCP Servers in Claude (2026): Connect Your Tools"
description: "Step-by-step guide to setting up MCP servers in Claude Desktop and Claude Code, with config examples, useful servers to try, and security tips."
date: 2026-07-18
updated: 2026-07-18
categories: ["Tutorials"]
tags: ["mcp", "claude", "claude code", "automation", "developer tools"]
affiliate_disclosure: true
faqs:
  - question: "What is an MCP server in plain English?"
    answer: "It's a small connector program that gives an AI assistant a specific capability — reading your files, querying a database, searching the web. MCP (Model Context Protocol) is the open standard that defines how the assistant and connector talk, so any MCP-compatible tool works with any MCP-compatible assistant."
  - question: "Do I need to know how to code to use MCP servers?"
    answer: "Not to use existing ones. Installing a server is mostly copying a JSON snippet into a config file or running a one-line command. Building your own server requires programming, but thousands of ready-made servers cover the common use cases."
  - question: "Are MCP servers safe?"
    answer: "They run with real access to whatever you connect, so treat them like any software you install. Stick to official or well-known servers, grant the narrowest access that works (specific folders, read-only keys), and be cautious connecting untrusted data sources and powerful tools at the same time."
---

Out of the box, a chat assistant can only talk. The Model Context Protocol (MCP) is what lets Claude actually *do* things — read your project folder, query your database, check your issue tracker — through small connector programs called MCP servers.

MCP started as an Anthropic open standard and has since been adopted across the industry, which means the servers you set up today work with a growing list of clients. This guide gets you from zero to working servers in both Claude Desktop and Claude Code, then covers the servers worth trying and the mistakes to avoid.

## What you'll need

- **Claude Desktop** (free or paid plan) and/or **Claude Code** — if you're weighing plans, our [Claude Pro review](/reviews/claude-pro-review-2026/) breaks down the tiers
- **Node.js** installed (many servers run via `npx`) — some servers use Python (`uvx`) instead
- Ten minutes and a terminal

## Step 1 — Understand the moving parts

Three pieces are involved:

1. **The client** — Claude Desktop or Claude Code (the app the AI lives in)
2. **The server** — a small program exposing tools, e.g. "filesystem" exposes read/write-file tools
3. **The config** — a JSON entry telling the client how to launch or reach the server

Servers can run **locally** (launched as a subprocess on your machine — most common for personal use) or **remotely** (a URL you connect to, used by SaaS integrations).

## Step 2 — Add your first server to Claude Desktop

We'll start with the filesystem server, the classic first server: it lets Claude read and edit files in folders you choose.

1. Open Claude Desktop → **Settings** → **Developer** → **Edit Config**. This opens `claude_desktop_config.json`.
2. Add the server entry:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/yourname/Documents/projects"
      ]
    }
  }
}
```

3. Replace the path with a folder you actually want Claude to access. On Windows, use double backslashes: `"C:\\Users\\yourname\\projects"`.
4. **Restart Claude Desktop completely** (quit, not just close the window).
5. Look for the tools indicator in the chat input area. Click it and you should see the filesystem tools listed.

Test it: ask *"List the files in my projects folder."* Claude will request permission the first time it uses a tool — that per-tool approval is your safety net, so don't reflexively click "always allow" on everything.

## Step 3 — Add servers to Claude Code

Claude Code has a friendlier path — a CLI command instead of hand-editing JSON:

```bash
claude mcp add my-filesystem -- npx -y @modelcontextprotocol/server-filesystem ~/projects
```

Useful variations:

- `claude mcp list` — see configured servers and their status
- `claude mcp add --scope project ...` — save the server to a `.mcp.json` in the repo so teammates get it too
- `claude mcp remove <name>` — clean up

Inside a session, type `/mcp` to check connection status and see available tools. If you're new to Claude Code entirely, start with our [Claude Code review](/reviews/claude-code-review/) for the lay of the land.

## Step 4 — Add a server that needs an API key

Most useful servers talk to external services and need credentials. These go in an `env` block. Example shape (GitHub-style server):

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_yourtoken"
      }
    }
  }
}
```

Two habits to adopt immediately:

- **Use scoped, minimal tokens.** A read-only token if you only need reads; a token limited to specific repos if possible.
- **Remember this file is plaintext.** Don't paste your most powerful credentials into it; create dedicated tokens you can revoke.

## Step 5 — Servers worth trying first

A starter menu, roughly in order of universal usefulness:

- **Filesystem** — the gateway drug; turns Claude into a real assistant for your documents and code
- **Fetch / web search servers** — let Claude pull live web content instead of relying on training data
- **GitHub** — triage issues, summarize PRs, draft release notes
- **Database servers** (Postgres, SQLite) — "ask your data questions" without writing SQL; start read-only
- **Memory / knowledge-base servers** — persistent notes across conversations

Browse the official MCP servers repository and your favorite tools' docs — by now most major SaaS products ship an MCP integration. Automation fans coming from visual tools will find the concept familiar: MCP is to chat assistants roughly what connectors are to [n8n](/reviews/n8n-review-2026/) or [Zapier](/reviews/zapier-review/).

## Step 6 — Troubleshooting

The four failures that account for nearly every problem:

1. **Server never appears.** Almost always invalid JSON — a trailing comma or missing brace. Paste your config into a JSON validator. Then confirm you fully restarted the app.
2. **"Command not found."** Node isn't installed or isn't on the PATH the desktop app sees. Install Node LTS; on Mac, launching the app from a terminal can reveal PATH issues.
3. **Server appears but tools fail.** Usually credentials (wrong env var name, expired token) or permissions (path outside the allowed folder).
4. **Windows-specific weirdness.** Backslashes must be escaped in JSON, and some servers need `cmd /c npx ...` as the command. Check the server's README for a Windows section.

Claude Desktop's **Settings → Developer** panel shows logs per server — read the actual error before guessing.

## Security tips (don't skip)

- **Narrow scope beats convenience.** Point the filesystem server at one project folder, not your home directory.
- **Beware the "lethal trifecta."** A server reading untrusted content (web pages, emails) + access to private data + ability to send data out = prompt-injection risk. Avoid combining all three in one session, and keep permission prompts on for consequential actions.
- **Prefer official servers** from the tool's vendor or the reference repository over random packages with similar names.
- **Review project-scoped configs** in repos you clone — `.mcp.json` runs commands on your machine; Claude Code asks you to approve them for exactly this reason.

## Where to go next

Once servers click, the natural next step is chaining them: a session where Claude checks your issue tracker, reads the relevant code, and drafts a fix touches three servers in one conversation. For more on Claude's agentic side, see our guide to [Claude's computer use](/claude-computer-use-guide-2026/), and if you'd rather build multi-step automations visually first, our [n8n AI agent workflow tutorial](/tutorials/build-ai-agent-workflow-n8n/) is a good on-ramp.

Set up one server today — filesystem is the right first pick — and add more only when a real task demands it. A lean, trusted toolbox beats a sprawling one every time.
