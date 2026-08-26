---
title: "Claude Code Subagents Guide (2026): Delegate Work Like a Tech Lead"
description: "Learn how to create and use Claude Code subagents — custom agents with their own prompts, tools, and context windows — to parallelize real coding work."
date: 2026-08-24
updated: 2026-08-24
categories: ["Tutorials"]
tags: ["claude code", "subagents", "ai coding", "anthropic", "developer tools", "agents"]
affiliate_disclosure: true
faqs:
  - question: "What is a Claude Code subagent?"
    answer: "A subagent is a secondary agent that Claude Code spawns to handle a delegated task — searching a codebase, reviewing a diff, running tests — in its own separate context window. It reports a summary back to the main agent, which keeps your primary conversation lean. You can use the built-in general-purpose agent or define custom ones with their own system prompts and tool restrictions."
  - question: "Do subagents cost extra?"
    answer: "There's no separate fee, but subagents consume tokens like any other Claude usage, and running several in parallel burns through usage limits faster. On a subscription plan that means hitting your session cap sooner; on API billing it means a larger bill. Scope subagent tasks tightly to keep costs sane."
  - question: "When should I use a subagent instead of just asking Claude Code directly?"
    answer: "Delegate when the task would flood your main context with noise you don't need to keep — broad codebase searches, log analysis, or independent parallel tasks like fixing three unrelated files. Keep work in the main thread when it's sequential, needs your feedback at each step, or depends on context already established in the conversation."
---

Most people use Claude Code like a single very fast pair programmer: one conversation, one context window, one thread of work. That works until your task gets big. Long investigations fill the context with file dumps, and by the time Claude writes the fix, it's forgotten half the constraints you gave it an hour ago.

Subagents solve this. Claude Code can spawn secondary agents that do a chunk of work in their *own* context window and report back only the conclusion. Used well, this turns Claude Code from a pair programmer into something closer to a tech lead with a small team. Here's how to actually use them.

If you're brand new to the tool, start with our [getting started with Claude Code guide](/tutorials/getting-started-with-claude-code/) first — this tutorial assumes you have it installed and have run a few sessions.

## 1. Understand what a subagent actually is

When Claude Code delegates a task, it launches a fresh agent with:

- **Its own context window.** The subagent reads whatever files it needs without polluting your main conversation.
- **A task prompt.** The main agent writes instructions describing what to do and what to return.
- **A one-shot report.** When finished, the subagent returns a summary. The intermediate noise — every file it opened, every dead end — stays in its context, not yours.

The tradeoff is symmetric: the subagent doesn't see your conversation history either. It only knows what's in its task prompt plus whatever project files it reads. This is the single most important thing to internalize, because most subagent frustration comes from assuming shared memory that doesn't exist.

## 2. Use the built-in delegation first

You don't need any configuration to benefit. Just ask for it in plain language:

```
Use a subagent to find every place we construct a database
connection outside the pool module, and report the file and
line numbers. Don't fix anything yet.
```

Claude Code dispatches the search to an agent, and your main context receives a tidy list instead of thirty screens of grep output. Good candidates for this pattern:

- "Search the codebase for X and summarize" — the classic. Searching is noisy; summaries are cheap.
- "Read these five log files and tell me when the error first appears."
- "Review the diff on this branch for security issues and list findings."

A useful mental rule: **delegate anything where you want the answer but not the evidence.**

## 3. Create a custom subagent

Custom subagents live as Markdown files in `.claude/agents/` inside your project (or `~/.claude/agents/` for all projects). Each file defines one agent: a name, a description of when to use it, optional tool restrictions, and a system prompt.

Create `.claude/agents/code-reviewer.md`:

```markdown
---
name: code-reviewer
description: Reviews diffs for bugs, security issues, and style
  violations. Use after completing a feature, before committing.
tools: Read, Grep, Glob, Bash
---

You are a strict senior code reviewer. Review the changes you are
pointed at and report:

1. Bugs or logic errors (highest priority)
2. Security problems — injection, secrets in code, unsafe input
3. Violations of this repo's conventions (check CLAUDE.md)

Be specific: file, line, problem, suggested fix. If the code is
fine, say so briefly. Do not rewrite code unless asked.
```

Two details matter more than they look:

- **The `description` field is how Claude decides when to invoke the agent automatically.** Write it like documentation for a dispatcher: "use after completing a feature" gives Claude a trigger condition, not just a label.
- **The `tools` line is a permission boundary.** A reviewer that can only read, search, and run commands *cannot* accidentally edit your files. Restricting tools is the cheapest safety win in the whole setup.

Once the file exists, you can invoke it explicitly ("have the code-reviewer agent look at my changes") or let Claude call it on its own when the description matches the situation.

## 4. Run subagents in parallel

This is where the model earns its keep. Independent tasks can run concurrently:

```
Fix the three failing test files. They're unrelated — use a
separate subagent for each so they can run in parallel.
```

Each agent gets one test file, works in isolation, and reports back. What took three sequential investigations now overlaps. The same pattern works for multi-file refactors, batch documentation updates, or auditing several services at once.

The constraint: parallel only works when tasks don't share state. Two agents editing the same file will stomp on each other. If tasks are coupled, keep them sequential in the main thread.

## 5. Write task prompts like handoff tickets

Because subagents start cold, the quality of the delegation prompt determines everything. When you ask Claude Code to delegate, include what you'd put in a good ticket for a contractor:

- **Context the agent can't infer**: "We're migrating from REST to gRPC; the old handlers in `api/legacy/` are intentionally untouched."
- **The definition of done**: "Return a list of endpoints with their auth requirements" beats "look into the auth situation."
- **What *not* to do**: "Report only — don't modify files" prevents an overeager agent from fixing things you wanted to review first.

If you find yourself repeating the same context in every delegation, that context belongs in your project's `CLAUDE.md` — every subagent reads it automatically at startup, so it's your one channel of shared memory.

## Tips

- **Pair subagents with MCP servers.** Agents inherit access to any MCP tools you've configured, so a reviewer agent can check your issue tracker or a research agent can hit your docs. See our guide to [setting up MCP servers in Claude Code](/tutorials/set-up-mcp-servers-claude/).
- **Start with two or three agents, not ten.** A reviewer, a test-runner, and a codebase-researcher cover most workflows. A crowded `agents/` directory with overlapping descriptions makes Claude's dispatch decisions worse, not better.
- **Commit `.claude/agents/` to your repo.** Custom agents are team infrastructure. Everyone gets the same reviewer with the same standards.
- **Check the subagent's work the same way you'd check Claude's.** A subagent's summary is a claim, not a verified fact. Run the tests yourself before trusting "all tests pass."

## Pitfalls

- **Delegating conversational work.** If a task needs your feedback midway, a subagent is the wrong tool — it runs to completion without checking in. Keep interactive work in the main thread.
- **Assuming shared memory.** The subagent never saw your conversation. If the delegation prompt doesn't say it, the agent doesn't know it.
- **Token burn.** Five parallel agents each reading a large codebase adds up fast. This is the main practical argument for tight task scoping and restricted tools.
- **Over-trusting auto-dispatch.** Vague descriptions cause Claude to invoke the wrong agent or none at all. If an agent isn't firing when it should, sharpen its `description` field before blaming the model.

## Where this fits

Subagents are the feature that most separates Claude Code from autocomplete-style tools — the comparison in our [Claude Code vs Cursor breakdown](/compare/claude-code-vs-cursor-2026/) covers that divide in depth. If you're still deciding whether the tool is worth adopting at all, our full [Claude Code review](/reviews/claude-code-review/) has the bigger picture.

But if you're already using it daily, the upgrade path is clear: stop doing everything in one window. Define a reviewer, delegate your searches, parallelize your independent fixes — and keep your main context for the decisions that actually need you.
