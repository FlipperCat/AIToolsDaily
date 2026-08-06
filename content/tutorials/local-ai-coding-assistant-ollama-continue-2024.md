---
title: "Build a Local AI Coding Assistant with Ollama and Continue (2024)"
description: "Step-by-step guide to running a private AI coding assistant on your own machine using Ollama and the Continue extension for VS Code — no code leaves your laptop."
date: 2024-07-18
updated: 2026-03-05
categories: ["Tutorials"]
tags: ["ollama", "continue", "local-ai", "coding-assistants", "privacy", "vs-code"]
affiliate_disclosure: true
faqs:
  - question: "Is a local coding assistant as good as GitHub Copilot?"
    answer: "Not quite, as of mid-2024. The best local code models are strong at single-file completion, explanation, and refactors, but they lag the hosted frontier models on long, multi-file reasoning. The trade is real: you give up some capability and get privacy, offline use, and no per-seat subscription."
  - question: "What hardware do I need?"
    answer: "A 7B or 8B model quantized to 4-bit needs roughly 5-6 GB of free RAM or VRAM and runs comfortably on an Apple Silicon Mac with 16 GB or a PC with a mid-range GPU. Larger 33B+ models want 24 GB or more. Everything in this guide is built around models that fit on ordinary hardware."
  - question: "Does any of my code get sent to a server?"
    answer: "No, provided you configure only Ollama providers. Ollama runs models locally and Continue talks to it over localhost. Continue does collect anonymous usage telemetry by default, which you can turn off in its settings, and it can also be pointed at cloud providers — so double-check your config has no API keys in it."
  - question: "Can I use this in JetBrains IDEs instead of VS Code?"
    answer: "Yes. Continue ships a JetBrains plugin alongside the VS Code extension and reads the same config file, so the setup below works for IntelliJ, PyCharm, and the rest with only the install step changed."
---

Hosted AI coding assistants are excellent, but they all have the same asterisk: your source code goes to someone else's server. For client work under NDA, regulated codebases, or just personal preference, that's a dealbreaker.

The local alternative got genuinely usable in 2024. This guide sets up a private coding assistant that runs entirely on your machine — chat, inline edits, and tab autocomplete — using [Ollama](/local-ai-models-guide/) to serve the models and the Continue extension to wire them into your editor. Budget about 30 minutes, most of it waiting on downloads.

## What You're Building

Two pieces:

- **Ollama** — a local model runner. It downloads open-weight models, handles quantization, and exposes an API on `localhost:11434`.
- **Continue** — an open-source VS Code / JetBrains extension that provides the assistant UI: a chat sidebar, inline edit commands, and autocomplete. It's provider-agnostic, so you point it at Ollama instead of a cloud API.

You'll run three models, because one model can't do all three jobs well:

| Job | Model | Why |
|---|---|---|
| Chat & edits | `llama3:8b` or `deepseek-coder-v2:16b` | Needs reasoning quality |
| Autocomplete | `starcoder2:3b` | Needs to respond in under ~300 ms |
| Codebase search | `nomic-embed-text` | Embeddings for `@codebase` queries |

## Step 1: Install Ollama

Download the installer from ollama.com for macOS, Windows, or Linux. On Linux, the one-liner works:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

Confirm it's alive:

```bash
ollama --version
```

Ollama runs as a background service once installed. If you ever need to start it manually, `ollama serve` does it.

## Step 2: Pull Your Models

Each pull is a multi-gigabyte download, so start them and go do something else.

```bash
ollama pull llama3:8b
ollama pull starcoder2:3b
ollama pull nomic-embed-text
```

If you have 24 GB+ of memory and want noticeably better code reasoning, add a dedicated code model:

```bash
ollama pull deepseek-coder-v2:16b
```

Check what landed:

```bash
ollama list
```

Test the chat model directly before involving your editor — this isolates problems later:

```bash
ollama run llama3:8b "Write a Python function that debounces a callback."
```

If that returns sensible code at a readable speed, the hard part is done.

## Step 3: Install Continue

In VS Code, open the Extensions panel, search for **Continue**, and install it. A sidebar icon appears. For JetBrains, install the Continue plugin from the marketplace instead — the rest of this guide is identical.

On first launch Continue offers to set you up with a cloud provider. Skip that. You're going to write the config by hand, which takes two minutes and avoids accidentally leaving a cloud model in the rotation.

## Step 4: Point Continue at Ollama

Open the config file at `~/.continue/config.json` (`%USERPROFILE%\.continue\config.json` on Windows). You can also reach it from the gear icon in the Continue sidebar. Replace the models section with this:

```json
{
  "models": [
    {
      "title": "Llama 3 8B",
      "provider": "ollama",
      "model": "llama3:8b"
    },
    {
      "title": "DeepSeek Coder V2",
      "provider": "ollama",
      "model": "deepseek-coder-v2:16b"
    }
  ],
  "tabAutocompleteModel": {
    "title": "StarCoder2 3B",
    "provider": "ollama",
    "model": "starcoder2:3b"
  },
  "embeddingsProvider": {
    "provider": "ollama",
    "model": "nomic-embed-text"
  },
  "allowAnonymousTelemetry": false
}
```

Save. Continue picks up changes without a restart. Only list the models you actually pulled — a reference to a missing model produces a confusing error on first use rather than at save time.

## Step 5: Use It

**Chat.** Open the Continue sidebar and ask questions. Highlight code first and it goes into the context automatically.

**Inline edit.** Select a block, press `Cmd/Ctrl + I`, and describe the change — "convert this to async/await," "add error handling for the network call." You get a diff to accept or reject rather than a wall of replacement text. This is the feature you'll use most.

**Autocomplete.** Just type. StarCoder2 3B suggests completions inline; `Tab` accepts.

**Codebase questions.** Type `@codebase` in chat followed by your question. Continue embeds your repo locally with `nomic-embed-text` and retrieves relevant chunks. The first index of a large repo takes a few minutes.

Other context providers worth knowing: `@file` to pull in a specific file, `@diff` to ask about your uncommitted changes, and `@terminal` to paste in the last command output — that last one is excellent for debugging a stack trace without leaving the editor.

## Tuning for Speed

If autocomplete feels laggy, in order of impact:

1. **Shrink the autocomplete model.** `starcoder2:3b` is already small; if it's still slow, a 1.3B code model will beat it on latency at some cost in quality.
2. **Keep the model warm.** Ollama unloads models after a few minutes idle, so the first completion after a break is slow. Setting the `OLLAMA_KEEP_ALIVE` environment variable to something like `30m` keeps it resident at the cost of held memory.
3. **Don't run chat and autocomplete on the same large model.** Two big models swapping in and out of VRAM will thrash.
4. **Close other memory hogs.** Docker, a browser with 60 tabs, and a 16B model do not coexist happily on 16 GB.

## Pitfalls Worth Knowing

**Context windows are smaller than you think.** Local models default to modest context lengths, so dumping an entire large file into chat can silently truncate. Ask about specific functions rather than whole modules.

**Autocomplete models and chat models are not interchangeable.** Autocomplete needs fill-in-the-middle training, which general chat models lack. Using `llama3:8b` for `tabAutocompleteModel` produces chatty, wrong suggestions.

**Check licenses before commercial use.** Open weights don't automatically mean open license. Some code models — Codestral among them, as of mid-2024 — ship under non-production or research-restricted terms. Read before you ship.

**Battery and heat.** Sustained local inference on a laptop is a real power draw. On a plane, expect the fans and watch the battery.

**Verify the output anyway.** Local models hallucinate APIs at least as often as hosted ones. Everything in our [guide to verifying AI-generated content](/10-ways-to-verify-ai-generated-content/) applies here.

## Is It Worth It?

If you already pay for a hosted assistant and have no privacy constraints, this setup won't replace it outright — the frontier models are still better at large multi-file changes, and the [Copilot-vs-Codeium comparison](/compare/github-copilot-vs-codeium/) covers those options.

Where local wins is everything else: code under NDA never leaves the machine, it works on a plane, and there's no per-seat cost. Plenty of developers now run both — local for day-to-day completion and anything sensitive, hosted for the hard problems. For a broader look at that trade-off, see [local AI vs cloud AI](/local-ai-vs-cloud-ai/), and if you want to go deeper on running models themselves, our [local LLM setup guide](/tutorials/local-llm-setup-guide/) picks up where this one stops.
