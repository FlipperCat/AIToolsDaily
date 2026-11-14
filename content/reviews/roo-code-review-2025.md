---
title: "Roo Code Review (2025): The Open-Source Coding Agent for People Who Want Control"
description: "Our Roo Code review for 2025: modes, custom agents, bring-your-own-model flexibility, real API costs, and who should pick it over Cursor or Copilot."
slug: "roo-code-review-2025"
date: 2025-12-09
updated: 2026-10-21
categories: ["Reviews"]
tags: ["roo-code", "ai-coding", "vs-code", "coding-agents", "open-source"]
affiliate_disclosure: true
faqs:
  - question: "Is Roo Code free?"
    answer: "The extension itself is free and open source. What costs money is the model you connect it to: you bring your own API key from a provider like Anthropic, OpenAI, Google, or OpenRouter, and pay that provider per token. You can also run local models through Ollama or LM Studio for no per-token cost, though local models are noticeably weaker at agentic coding."
  - question: "What's the difference between Roo Code and Cline?"
    answer: "Roo Code started as a fork of Cline and the two still share a lot of DNA: both are VS Code agents that read files, edit code, and run commands with your approval. Roo Code's main distinction is its mode system, with separate personas like Architect, Code, Ask, Debug, and Orchestrator, plus heavy customization. Cline tends to feel simpler out of the box; Roo Code offers more knobs."
  - question: "Is Roo Code better than Cursor?"
    answer: "It's different rather than strictly better. Cursor is a polished, subscription-based editor with fast inline completions and predictable pricing. Roo Code is an agent that lives inside your existing VS Code setup, gives you full choice of models, and charges nothing itself, but it doesn't do tab completion and your costs depend entirely on usage."
  - question: "Which model works best with Roo Code?"
    answer: "As of late 2025, frontier models from Anthropic, OpenAI, and Google give the most reliable results for multi-step agent work, because they handle tool calls and long contexts well. Cheaper or local models are fine for Ask mode and small edits but tend to stumble on longer autonomous tasks. Many users pair a strong model for planning with a cheaper one for routine edits."
---

## Roo Code Review (2025): The Open-Source Coding Agent for People Who Want Control

Most AI coding tools in 2025 ask you to make a deal: pick our editor, pay our subscription, use the models we've chosen, and accept our limits. Roo Code makes the opposite pitch. It's a free, open-source extension that turns VS Code into an agentic coding environment, connects to almost any model you want, and lets you reshape how the agent behaves.

That flexibility is its biggest strength and the source of most of its friction. We used Roo Code across several weeks of real work on a mid-sized TypeScript web app, a Python data pipeline, and some small greenfield scripts, to see where it beats the subscription tools and where it doesn't.

## What Roo Code Is

Roo Code is a VS Code extension that gives you an AI agent in a sidebar panel. You describe a task; the agent reads relevant files, proposes edits as diffs, runs terminal commands, and iterates, asking for your approval along the way unless you tell it not to.

It began as a fork of Cline, another open-source coding agent, and has since grown into its own project with a large community and a fast release cadence. Because it runs inside VS Code (and compatible forks), you keep your existing extensions, keybindings, and settings.

You supply the model. Roo Code connects to Anthropic, OpenAI, Google, OpenRouter, AWS Bedrock, and many other providers, plus local runtimes such as Ollama and LM Studio.

## Key Features

**Modes.** This is Roo Code's signature feature. Instead of one general-purpose agent, you switch between personas with different instructions and permissions:

- **Architect** plans and discusses design, and is restricted from editing most code files
- **Code** writes and edits code
- **Ask** answers questions about your codebase without changing anything
- **Debug** focuses on diagnosing problems methodically
- **Orchestrator** breaks a large task into subtasks and delegates them to other modes

In practice, starting a feature in Architect, approving a plan, then switching to Code produces noticeably better results than asking a single agent to "just build it."

**Custom modes.** You can define your own modes with their own system instructions, allowed file types, and tool permissions. A "Docs Writer" mode that can only touch Markdown, or a "Test Writer" mode limited to test directories, takes a few minutes to set up and works well.

**Per-mode model selection.** Each mode can use a different model. Use an expensive frontier model for Architect and a cheaper, faster one for routine Code tasks, and your bill drops without much quality loss.

**Granular approvals.** You decide what the agent can do without asking: read files, write files, run specific commands, use the browser. Start cautious; loosen as trust builds.

**Checkpoints.** Roo Code snapshots your workspace as the agent works, so you can roll back a bad sequence of edits without relying on Git discipline mid-task.

**MCP support.** It connects to Model Context Protocol servers, so the agent can query databases, read issue trackers, or call internal tools.

**Codebase indexing.** Optional semantic indexing helps the agent find relevant code in larger projects, rather than relying on file-name searches alone. It takes some setup.

## Pros

- **Free and open source.** No subscription, no seat fees, and you can audit what it sends.
- **Model freedom.** Switch providers when pricing or quality shifts, without changing tools.
- **Modes genuinely improve output.** Separating planning from implementation reduces the "agent sprints off in the wrong direction" problem.
- **Highly customizable.** Custom modes and rules make it adaptable to team conventions.
- **Stays in VS Code.** No need to migrate to a new editor.
- **Transparent costs.** It shows token usage and estimated cost per task, which makes spending visible.

## Cons and Limitations

- **Costs can surprise you.** Agentic tasks consume a lot of tokens. A long session on a frontier model can run several dollars an hour, and a runaway loop can cost more. Subscription tools cap this; Roo Code doesn't.
- **No inline tab completion.** Roo Code is an agent, not an autocomplete engine. Most users pair it with a separate completion tool.
- **Configuration overhead.** API keys, provider settings, mode setup, approval rules. It's a lot to learn before you're productive.
- **Quality depends on your model.** Connect a weak or local model and the agent will loop, misuse tools, or produce broken edits. The extension can't fix a model's limits.
- **Fast-moving releases.** Frequent updates bring features but occasionally change behavior or settings you relied on.
- **Large-repo performance varies.** Without indexing, the agent can burn tokens hunting for context in big codebases. Tools built around repository understanding, like [Augment Code](/reviews/augment-code-review-2025-the-ai-coding-agent-built-for-big-codebases/), handle this more gracefully.

## Pricing

Pricing is approximate as of December 2025.

- **Roo Code extension:** free.
- **Model costs:** pay-as-you-go to your provider. Light use (questions, small edits) might cost a few dollars a week; heavy daily agent use on top-tier models can reach well into the tens or hundreds of dollars per month.
- **Local models:** free to run through Ollama or LM Studio if you have the hardware, though results on complex tasks are weaker. Our [Ollama and Continue guide](/tutorials/build-a-local-ai-coding-assistant-with-ollama-and-continue-2024/) covers the local setup basics.
- **Optional cloud features:** the Roo Code team offers optional cloud services, such as task syncing and sharing. These aren't required to use the extension.

Tip: set a spending limit in your provider's dashboard before your first long session.

## How It Compares

**Versus Cursor and Windsurf:** Those are polished editors with completions, flat subscriptions, and less setup. Roo Code wins on model choice, customization, and staying in plain VS Code; it loses on convenience and predictable cost.

**Versus Gemini CLI and other terminal agents:** Terminal agents suit developers who live in the shell. Roo Code suits those who want diffs and approvals inside the editor. Google's free-tier [Gemini CLI](/reviews/gemini-cli-review-2025-googles-free-terminal-coding-agent-tested/) is cheaper to start with; Roo Code is more flexible.

**Versus free editors like Trae:** [Trae](/reviews/trae-ide-review-2025-bytedances-free-ai-editor-is-good-with-one-big-catch/) gives you capable models at no cost, with privacy questions attached. Roo Code costs money in API fees but keeps you in control of where your code goes.

## Who It's For

**Good fit:**
- Developers who want to choose and swap models freely
- Teams with specific conventions they want encoded in custom modes
- Engineers already comfortable in VS Code who don't want a new editor
- Privacy-conscious users who want local models or a specific approved provider
- Tinkerers who enjoy tuning their tools

**Poor fit:**
- Anyone who wants a polished, predictable, flat-fee experience
- Beginners who'll struggle with API keys and approval settings
- Developers who mostly want fast autocomplete rather than an agent

## Verdict

Roo Code is one of the most capable AI coding agents available in 2025, and arguably the most flexible. Its mode system is a real idea, not a gimmick: separating planning, implementation, and debugging produces better code than one do-everything agent. Pair it with a strong model and sensible approval rules, and it can handle multi-file features that would take hours by hand.

The catch is that you're the one running it. You pick the model, manage the costs, configure the modes, and absorb the occasional breaking update. For developers who want that control, Roo Code is easy to recommend. For those who'd rather pay a flat fee and never think about tokens, a subscription editor is the better choice.

**Rating: 4.3/5.** Excellent flexibility and an agent design that works, held back by setup overhead and unpredictable costs.
