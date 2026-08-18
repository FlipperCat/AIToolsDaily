---
title: "Getting Started with Claude Code (2026): A Practical Beginner's Guide"
description: "Step-by-step guide to installing Claude Code, running your first session, writing a CLAUDE.md, and avoiding the mistakes most beginners make."
date: 2026-08-18
updated: 2026-08-18
categories: ["Tutorials"]
tags: ["claude code", "anthropic", "ai coding", "terminal", "developer tools"]
affiliate_disclosure: true
faqs:
  - question: "Do I need to know the terminal to use Claude Code?"
    answer: "You need to be comfortable opening a terminal and navigating to a folder, but not much more. Claude Code handles the actual commands — you describe what you want in plain English. That said, being able to read what it's about to run is important, because you'll be approving its actions."
  - question: "How much does Claude Code cost?"
    answer: "It's included with Claude's paid subscription plans, with usage limits that vary by tier — heavier plans allow more usage before you hit a cap. You can alternatively pay per token through an API account. As of August 2026, most individuals start with a subscription because the cost is predictable; check Anthropic's pricing page for current tiers."
  - question: "Is it safe to let Claude Code loose on my codebase?"
    answer: "Reasonably, if you use the guardrails. By default it asks permission before editing files or running commands, and git gives you an undo button for anything it changes. The real risks are approving things without reading them and running it in auto-accept mode on code you can't easily restore. Work on a branch, review diffs, and it's no more dangerous than any fast-moving collaborator."
---

Claude Code is Anthropic's AI coding agent that lives in your terminal. Unlike autocomplete-style assistants, you give it a task in plain English — "fix this failing test," "add dark mode to settings" — and it reads your codebase, makes a plan, edits files, and runs commands until the job is done, asking permission along the way.

It's one of the most capable coding tools you can use right now (our full [Claude Code review](/reviews/claude-code-review/) goes deeper on why), but the terminal-first design intimidates people. This guide gets you from zero to productive.

## 1. Install it

You'll need a terminal (Terminal on macOS, PowerShell or WSL on Windows, anything on Linux) and, for real work, git.

The quickest route on macOS/Linux is the install script from Anthropic's docs; npm also works if you have Node.js:

```
npm install -g @anthropic-ai/claude-code
```

Windows users can run it natively or inside WSL. Once installed, `claude --version` should print a version number. If it doesn't, your PATH needs fixing — the installer output usually tells you the line to add.

## 2. Sign in

Run `claude` in any folder. On first launch it walks you through authentication in the browser. You have two options:

- **Claude subscription (Pro or higher)** — flat monthly fee, usage limits by tier. The predictable-cost option most individuals should start with.
- **API account** — pay per token. Better for occasional use or team infrastructure, but costs scale with how hard you push it.

## 3. Run your first session

Navigate to a real project — Claude Code is dramatically more useful with actual code to work on:

```
cd ~/projects/my-app
claude
```

You'll get an interactive prompt. Good first tasks:

1. **Ask it to explain the codebase:** "Give me an overview of this project — structure, main components, how it fits together." This is zero-risk and shows off the codebase-reading ability that makes agents different from chatbots.
2. **Fix something small:** point it at a real bug or a failing test. Watch how it searches files, forms a plan, and proposes edits.
3. **Let it do a chore:** "Add JSDoc comments to the functions in utils.js" or "write unit tests for the date helpers."

When Claude wants to edit a file or run a command, it shows you the diff or command and asks for approval. **Read these, especially at first.** It's how you build a sense of what the tool does well and where it needs steering.

## 4. Create a CLAUDE.md

This is the highest-leverage five minutes in the whole setup. A `CLAUDE.md` file at your project root is loaded into every session — it's standing instructions for the agent. Run the built-in `/init` command to generate one, then trim it to things like:

- How to run tests and the dev server
- Code style rules that matter to you ("no default exports," "use the existing logger")
- Which folders are off-limits or auto-generated
- Gotchas a new contributor would trip over

Keep it short and specific. A tight CLAUDE.md noticeably reduces the number of times you have to correct the same mistake twice.

## 5. Learn the commands that matter

You only need a handful at the start:

- `/help` — list commands
- `/clear` — wipe the conversation and start fresh (do this between unrelated tasks; long sessions accumulate confusion)
- `/compact` — condense a long conversation while keeping the important context
- **Shift+Tab** — cycle permission modes, including plan mode (Claude proposes an approach without touching files — great for big changes) and auto-accept (Claude stops asking for each edit — great for trusted chores, dangerous as a default)
- **Esc** — interrupt Claude mid-action when it's heading the wrong way

## 6. Work in small, verifiable chunks

The pattern that separates happy Claude Code users from frustrated ones:

1. **One task per session.** "Refactor the auth module" — then `/clear` — then the next thing. Kitchen-sink prompts produce kitchen-sink results.
2. **Commit early and often.** Ask Claude to commit after each working milestone. Git is your undo button; use it liberally.
3. **Make it prove its work.** End tasks with "run the tests" or "run the build and fix any errors." An agent that can verify its own output is far more reliable than one that just claims success.
4. **Plan first for anything structural.** For multi-file changes, start in plan mode and approve the approach before any edits happen.

## 7. Extend it when you're ready

Once the basics feel natural, two upgrades are worth exploring. **MCP servers** connect Claude Code to outside systems — browsers, databases, issue trackers — and our [MCP setup guide](/tutorials/set-up-mcp-servers-claude/) covers the process. **Custom slash commands and skills** let you package repeated workflows ("review this PR our way") into one-word invocations. Neither is required on day one.

## Common pitfalls

- **Approving without reading.** Permission prompts train you as much as they protect you. Rubber-stamping everything wastes the safety model.
- **Marathon sessions.** Quality degrades as context fills with stale detail. `/clear` is not admitting defeat; it's hygiene.
- **No git safety net.** Running an editing agent on un-versioned code is how horror stories start. `git init` takes two seconds.
- **Vague prompts.** "Make it better" gets you a random walk. "Reduce the bundle size — start by analyzing what's biggest" gets you results.
- **Burning usage on trivia.** Renaming a variable yourself is faster than asking. Save the agent for work that's actually tedious.

## Where to go from here

Give it a week of real tasks before judging — the workflow feels alien for a day or two and then becomes hard to give up. If you're still choosing between tools, we've compared it against the big alternatives: [Claude Code vs Cursor](/compare/claude-code-vs-cursor-2026/) for people who want an AI-native IDE instead of a terminal, and [Gemini CLI vs Claude Code](/compare/gemini-cli-vs-claude-code/) if you're weighing Google's free-tier competitor.

The short version: install it, point it at a real project, keep the tasks small, and read the diffs. Everything else is refinement.
