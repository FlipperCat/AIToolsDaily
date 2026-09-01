---
title: "Claude Code Hooks Guide (2026): Automate Formatting, Guardrails, and Alerts"
description: "Learn how to set up Claude Code hooks to auto-format code, block risky commands, and get notifications — with working examples and common pitfalls."
date: 2026-08-28
updated: 2026-08-28
categories: ["Tutorials"]
tags: ["claude-code", "hooks", "automation", "developer tools", "anthropic"]
affiliate_disclosure: true
faqs:
  - question: "What's the difference between hooks and CLAUDE.md instructions?"
    answer: "CLAUDE.md is a suggestion the model reads and usually follows; a hook is a shell command the harness always executes. If you write 'always run the formatter' in CLAUDE.md, it happens most of the time. If you put the formatter in a PostToolUse hook, it happens every time, deterministically. Use hooks for anything that must not depend on the model remembering."
  - question: "Can a hook stop Claude Code from doing something dangerous?"
    answer: "Yes. A PreToolUse hook runs before the tool executes, and if your script exits with code 2, the tool call is blocked and your script's stderr is fed back to Claude as an explanation. This is how people enforce rules like 'never run destructive git commands' or 'never edit files in this directory' regardless of what the model decides."
  - question: "Where do hook configurations live?"
    answer: "In settings files: .claude/settings.json in a project (shared with your team via git), .claude/settings.local.json for personal project-specific hooks, or ~/.claude/settings.json for hooks that apply to every project on your machine. After editing, restart the session or review hook changes so they take effect."
---

Claude Code will happily follow instructions like "run the linter after every edit" — until, twenty turns into a long session, it doesn't. Hooks fix that. A hook is a shell command that Claude Code's harness runs automatically at specific lifecycle moments, whether the model remembers to or not. Instructions are suggestions; hooks are law.

This guide walks through the hook events, the configuration format, and three practical setups we actually use: auto-formatting after edits, blocking dangerous commands, and desktop notifications when a long task finishes. If you're new to Claude Code entirely, start with our [getting started guide](/tutorials/getting-started-with-claude-code/) first.

## 1. Understand the hook events

Hooks fire at defined points in the agent loop. The ones you'll use most:

- **PreToolUse** — runs *before* a tool call (Bash, Edit, Write, etc.) executes. Can block it.
- **PostToolUse** — runs *after* a tool call succeeds. Perfect for formatters and linters.
- **UserPromptSubmit** — runs when you submit a prompt, before Claude sees it. Can inject context or block the prompt.
- **Stop** — runs when Claude finishes responding and is about to yield the turn.
- **SessionStart** — runs when a session begins; useful for loading context.
- **Notification** — runs when Claude Code sends a notification (e.g., waiting for permission).

Each hook receives JSON describing the event on stdin — for a PreToolUse hook on Bash, that includes the exact command about to run — and communicates back through exit codes: **0** means proceed, **2** means block and send stderr back to Claude as feedback.

## 2. Learn the configuration shape

Hooks live in your settings files under a `hooks` key. The structure is: event → matcher (which tools it applies to) → list of commands.

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "your-shell-command-here"
          }
        ]
      }
    ]
  }
}
```

The `matcher` is a regex matched against the tool name (`Bash`, `Edit`, `Write`, and so on). Omit it (or use `*`) to match every tool. Put project hooks in `.claude/settings.json`, personal ones in `.claude/settings.local.json` or `~/.claude/settings.json`.

## 3. Example: auto-format after every edit

The classic first hook. Whenever Claude edits or writes a file, run your formatter on it. The stdin JSON contains the file path, so a tiny script can extract and format it:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.file_path' | { read f; [[ \"$f\" == *.py ]] && black \"$f\" >/dev/null 2>&1; true; }"
          }
        ]
      }
    ]
  }
}
```

Swap `black` for `prettier --write`, `gofmt -w`, `cargo fmt`, whatever your stack uses. The payoff: no more formatting nits in review, and no more asking Claude to "remember to run prettier." For anything longer than a one-liner, put the logic in a script file (e.g., `.claude/hooks/format.sh`) and call that instead — much easier to debug than JSON-escaped shell.

## 4. Example: block dangerous commands

A PreToolUse hook on Bash can inspect every command before it runs and veto the scary ones:

```bash
#!/bin/bash
# .claude/hooks/guard.sh
cmd=$(jq -r '.tool_input.command')
if echo "$cmd" | grep -qE 'rm -rf /|git push --force|DROP TABLE'; then
  echo "Blocked by policy: $cmd" >&2
  exit 2
fi
exit 0
```

Wire it up with `"matcher": "Bash"` under `PreToolUse`. Exit code 2 blocks the call, and Claude sees your stderr message — so it understands *why* and adjusts course rather than retrying blindly. Teams use this pattern to protect production configs, enforce "no commits to main," or keep the agent out of specific directories. It's a guardrail that holds even in long autonomous runs, which is exactly when instruction-following gets shaky.

## 5. Example: notify me when it's done

For long tasks you've left running, a Stop hook turns Claude Code into something you can walk away from:

```json
{
  "hooks": {
    "Stop": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \"Claude Code finished\" with title \"Claude\"'"
          }
        ]
      }
    ]
  }
}
```

That's the macOS version; on Linux use `notify-send`, on Windows a PowerShell toast. Pair it with a Notification hook to also get pinged when Claude is blocked waiting for permission — the two moments you actually want to be pulled back to the terminal.

## Tips

- **Prefer script files over inline commands.** You get syntax highlighting, version control, and the ability to test with `echo '{...}' | ./guard.sh` outside Claude entirely.
- **Keep hooks fast.** They run synchronously in the loop. A slow linter on every edit makes the whole session feel sluggish — scope matchers tightly and background anything heavy.
- **Commit project hooks.** A guard script in `.claude/settings.json` protects every teammate's sessions, not just yours. This composes well with shared subagent setups — see our [subagents guide](/tutorials/claude-code-subagents-guide-2026/).
- **Use stderr generously when blocking.** "Blocked" teaches Claude nothing; "Blocked: use ./scripts/deploy.sh instead of raw kubectl" gets you the behavior you wanted on the next attempt.

## Pitfalls

- **Hooks don't hot-reload.** Edits to hook config apply on session start (or when you approve the change in an interactive session). Silent confusion from stale hooks is the #1 beginner report.
- **Exit code 1 is not a block.** Non-zero, non-2 exits show the error but don't stop the tool call in pre-hooks. If you mean "veto," exit 2.
- **JSON escaping will eat an evening.** Quotes inside quotes inside settings.json is misery — another argument for script files.
- **Don't over-block.** A hook that vetoes half of what the agent tries turns a fast assistant into a permission-prompt slideshow. Guard the genuinely irreversible; let the rest through.

Hooks are the difference between *hoping* your agent behaves and *knowing* the important parts are enforced. Combined with [MCP servers](/tutorials/set-up-mcp-servers-claude/) for capabilities and subagents for parallelism, they're a core piece of treating Claude Code as real infrastructure — our [full review](/reviews/claude-code-review/) covers where it fits in the broader tooling landscape.
