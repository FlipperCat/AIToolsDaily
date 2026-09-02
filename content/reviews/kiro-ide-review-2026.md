---
title: "Kiro Review (2026): AWS's Spec-Driven AI IDE, One Year In"
description: "Kiro review for 2026: how AWS's spec-driven agentic IDE handles real projects, where specs and hooks help, what it costs, and who should choose it."
date: 2026-08-30
updated: 2026-08-30
categories: ["Reviews"]
tags: ["kiro", "aws", "ai-coding", "agentic-ide", "spec-driven-development", "vibe-coding"]
affiliate_disclosure: true
faqs:
  - question: "Is Kiro free to use?"
    answer: "There is a free tier with a small monthly allowance of agent credits, enough to evaluate the product but not to use it daily. Paid plans are credit-based and priced in the same general range as Cursor and Claude Code subscriptions. As of August 2026 you do not need an AWS account or a credit card to start; a GitHub or Google login works."
  - question: "How is Kiro different from Cursor?"
    answer: "Cursor is optimized for fast, conversational coding inside the editor. Kiro adds a structured layer on top: before the agent writes code it produces a requirements document, a design document, and a task list you approve. That makes Kiro slower to start but easier to steer on larger features. For quick edits the two feel similar, since both are VS Code forks with agent chat."
  - question: "Do I need to be building on AWS to get value from Kiro?"
    answer: "No. Kiro works with any language or stack, and the specs, hooks, and steering files are stack-agnostic. AWS-specific knowledge shows up in its MCP integrations and in how well it handles CDK, Lambda, and IAM code, but a Next.js app with no cloud dependency gets the same core experience."
  - question: "Can I switch from Kiro back to VS Code or Cursor without losing anything?"
    answer: "Mostly. Kiro is built on Code OSS, so your extensions, keybindings, and settings import cleanly. The specs, hooks, and steering files live in a .kiro folder in your repo as plain markdown and JSON, so they travel with the project and remain readable even if you stop using Kiro."
---

Kiro launched in July 2025 with an unusual pitch for an AI coding tool: slow down. Where Cursor, Windsurf, and Claude Code compete on how fast an agent can turn a sentence into a diff, Amazon's entry asked developers to write a spec first. A year on, with the product out of preview and the pricing settled, the question is whether that structure is a genuine advantage or a speed bump most people route around.

I used Kiro as my primary editor for six weeks across three projects: a Python data service with a messy legacy codebase, a TypeScript SaaS front end, and a small serverless API deployed to AWS. Here is where it earned its place and where it did not.

## What Kiro Is

Kiro is a standalone IDE built on Code OSS, the open-source base of VS Code. It looks and behaves like VS Code, imports your extensions and settings, and adds an agent panel on the right. Sign-in is through GitHub, Google, or an AWS Builder ID. No AWS account is required.

The agent runs on Anthropic's Claude models, with newer Sonnet versions added as they ship, plus a smaller set of alternatives you can pick per task. There is also a terminal-based Kiro CLI, which replaced the old Amazon Q Developer CLI, for people who prefer working the way [Claude Code](/reviews/claude-code-review/) users do.

What makes Kiro different is not the model. It is the three project artifacts it is built around: specs, hooks, and steering.

## Key Features

**Specs.** Kiro has two chat modes. "Vibe" mode is ordinary agent chat: describe a change, watch the diff. "Spec" mode is the differentiator. You describe a feature, and Kiro drafts three markdown files in a `.kiro/specs/feature-name/` folder: requirements written as user stories with acceptance criteria in EARS notation ("WHEN a user submits an invalid email, THE SYSTEM SHALL..."), a design document with data models and sequence diagrams, and a task list broken into ordered, checkable steps. You edit and approve each stage before the agent moves on. Then you run tasks one at a time or let it work through the list.

On the legacy Python service, this was the best experience I have had with an AI agent on unfamiliar code. The requirements stage forced explicit decisions about edge cases I would have discovered three hours in. The design document surfaced two wrong assumptions about the database schema before any code was written. The task list meant I could review 30-line diffs instead of a 600-line wall.

**Hooks.** Agent hooks fire on editor events: file saved, file created, session started, or a manual trigger. Each hook is a natural-language instruction. My most useful ones were "when a file in `src/api/` is saved, update the matching test file" and "when a new component is created, add it to the Storybook index." They are stored as JSON in `.kiro/hooks/` and are committed with the repo, so teammates get them for free. If you have used [Claude Code hooks](/tutorials/claude-code-hooks-guide-2026/), the idea is the same, but Kiro's are easier to author because they are plain prompts rather than shell scripts.

**Steering files.** Markdown files in `.kiro/steering/` that give the agent persistent context: coding standards, architecture notes, "never touch the migrations folder." Kiro can generate a starter set by scanning the repo. You can set each file to always load, load only when matching a file glob, or load on demand. This is Kiro's equivalent of a CLAUDE.md or Cursor rules, and the glob-scoped loading is a nice touch that keeps context small.

**Autopilot vs. supervised.** Autopilot lets the agent edit files without confirmation. Supervised mode shows every change first. You can switch mid-task. I ran supervised for the first week on each project and autopilot afterward once I trusted the steering files.

**MCP support.** Kiro speaks the Model Context Protocol, so the same servers you would [set up for Claude](/tutorials/set-up-mcp-servers-claude/) work here. The AWS documentation and AWS API servers are the obvious wins if you deploy there.

**Property-based test generation.** A newer feature that reads the acceptance criteria in a spec and generates property-based tests against them. It worked well for pure functions and data validation, less well for anything involving I/O.

## Pros

- **Specs make large features reviewable.** The requirements-design-tasks pipeline turns a vague ask into a plan a human can actually check before code exists. On anything bigger than a bug fix, this saved rework.
- **Project artifacts are portable.** Everything lives in plain files in the repo. Onboarding a new teammate to the project's AI setup is a `git clone`.
- **Hooks are low-friction automation.** Writing a hook takes 30 seconds and requires no scripting.
- **Familiar editor.** Zero learning curve if you use VS Code. Extensions just work.
- **Genuinely good on AWS code.** IAM policies, CDK constructs, and Lambda handlers came out correct more often than with general-purpose tools.

## Cons and Limitations

- **Spec mode is slow for small work.** Generating and approving three documents for a one-file change is overkill, and the temptation to skip straight to vibe mode is constant. Kiro does not help you decide which mode fits.
- **Specs drift.** After a few rounds of vibe-mode edits, the design document no longer matches the code. There is no reliable "resync spec to codebase" action, and stale specs actively mislead the agent later.
- **Credit consumption is opaque.** Spec mode burns several credits per feature before writing a line, and the multiplier for larger models is easy to forget. I ran through a Pro allotment in under three weeks on heavy use.
- **Capacity limits still surface.** Preview-era waitlists are gone, but on busy afternoons I hit "high demand" throttling on the top model a few times.
- **Fewer models than competitors.** Cursor lets you pick from every major lab. Kiro's list is short and Anthropic-heavy, which is fine for quality but limits your options if you want a cheap model for boilerplate.
- **Terminal agent lags the IDE.** Kiro CLI is solid but does not yet match the depth of [Claude Code](/compare/claude-code-vs-cursor-2026/) for long autonomous runs.

## Pricing

Pricing is credit-based and approximate as of August 2026:

- **Free:** a small monthly credit allowance, enough for evaluation.
- **Pro:** around $20 per month for roughly 1,000 credits.
- **Pro+:** around $40 per month for roughly 2,000 credits.
- **Power:** around $200 per month for roughly 10,000 credits.

A credit is one agent interaction with the base model. Larger models apply a multiplier, and spec generation counts as multiple interactions. Overage is pay-as-you-go. Compare that to Cursor's usage-based Pro plan and Claude Code's subscription tiers before committing; Kiro is neither the cheapest nor the most expensive option, but the credit model rewards people who batch work into specs and punishes constant small chats.

## Who It's For

**Teams shipping features larger than a bug fix.** If your work involves multi-file changes that need design review, spec mode is a real workflow improvement, not a gimmick.

**Developers on AWS.** The MCP integrations and the model's fluency with AWS services make it the best editor-based agent for that stack.

**Anyone who wants AI context in the repo, not in a personal config.** Steering files and hooks committed alongside code are the right model for teams.

It is a weaker fit for solo developers doing rapid prototyping, where [Cursor](/reviews/cursor-ai-review/) or a lighter agent like [Cline](/cline-ai-coding-agent-review-2026/) will feel faster, and for people who want to mix and match models freely.

## Verdict

Kiro's bet on structure pays off exactly where you would expect: on work large enough that a plan matters. The spec workflow is the most thoughtful attempt yet at making agentic coding reviewable by humans, and hooks plus steering files give teams a shared AI setup that lives with the code.

The costs are real. Spec mode is friction on small tasks, specs go stale, and credits disappear faster than the pricing page suggests. If most of your day is quick edits, a faster tool serves you better. If you are shipping features that need a design conversation anyway, Kiro turns that conversation into something the agent can execute. That is worth a month of the Pro plan to find out.
