---
title: "How to Run OpenAI's gpt-oss Models Locally (2025): Ollama, LM Studio, and What to Expect"
description: "Step-by-step guide to running gpt-oss-20b and gpt-oss-120b on your own machine with Ollama or LM Studio, including hardware requirements, reasoning settings, and common pitfalls."
date: 2025-08-13
updated: 2026-03-02
categories: ["Tutorials"]
tags: ["gpt-oss", "openai", "local-llm", "ollama", "lm-studio", "open-source-ai"]
affiliate_disclosure: true
faqs:
  - question: "Which gpt-oss model should I download?"
    answer: "Start with gpt-oss-20b. It is designed to run in about 16 GB of memory, which covers most recent Macs and any PC with a 16 GB GPU. The 120b model needs roughly 60 to 80 GB and is realistic only on a high-end workstation, a Mac Studio with lots of unified memory, or a single data-center GPU."
  - question: "Is gpt-oss really free to use commercially?"
    answer: "Yes. Both models are released under the Apache 2.0 license, which allows commercial use, modification, and redistribution. OpenAI also publishes a usage policy it asks users to follow. The weights are downloadable from Hugging Face and mirrored by Ollama and LM Studio."
  - question: "How does gpt-oss compare to ChatGPT?"
    answer: "OpenAI's own reporting positions gpt-oss-120b close to o4-mini and gpt-oss-20b close to o3-mini on reasoning tasks. Treat those as vendor claims. In practice you lose ChatGPT's built-in browsing, memory, and image features unless you wire up tools yourself, and responses are slower on consumer hardware. What you gain is privacy, zero per-token cost, and offline use."
---

On August 5, 2025, OpenAI released its first open-weight language models since GPT-2: gpt-oss-120b and gpt-oss-20b, both under the Apache 2.0 license. Within a day, Ollama, LM Studio, llama.cpp, and vLLM all supported them. This guide gets the models running on your own hardware and explains what to expect once they are.

## What you're actually downloading

Both models are mixture-of-experts designs, which means only a fraction of the parameters fire for any given token. That is why they run on far less memory than their headline sizes suggest.

- **gpt-oss-20b**: about 21 billion total parameters, roughly 3.6 billion active per token. Ships in OpenAI's MXFP4 4-bit format and targets around 16 GB of memory.
- **gpt-oss-120b**: about 117 billion total parameters, roughly 5.1 billion active. Targets a single 80 GB GPU, or a Mac with comparable unified memory.

Both models offer a 128k token context window, adjustable reasoning effort (low, medium, high), visible chain-of-thought, and native support for tool calling through OpenAI's "harmony" chat format. They are text-only. There is no image input.

## Step 1: Check your hardware

| Model | Minimum | Comfortable |
|---|---|---|
| gpt-oss-20b | 16 GB RAM or VRAM | 24 to 32 GB Apple unified memory, or a 16 GB+ GPU (RTX 4080, 4090, 3090) |
| gpt-oss-120b | About 64 GB | 80 GB GPU (H100 class), or a Mac Studio with 96 GB+ |

Apple Silicon is the easiest path for the 20b model because unified memory lets the whole thing sit in one place. On Windows or Linux with an 8 to 12 GB GPU, the 20b model will still run, but layers will spill onto the CPU and generation slows to a crawl. Close browsers and other heavy apps before loading either model on a 16 GB machine.

## Step 2 (easiest path): Ollama

[Ollama](/reviews/ollama-review-2024/) had gpt-oss support on launch day and is the fastest way to get a prompt in front of the model.

1. Install Ollama from ollama.com. It supports macOS, Windows, and Linux, and recent versions include a simple desktop chat window alongside the command line.
2. Open a terminal and run:

```
ollama run gpt-oss:20b
```

3. The first run downloads roughly 13 GB. Once it finishes, you are in a chat prompt. Type `/bye` to exit.
4. For the large model, if your hardware allows it:

```
ollama run gpt-oss:120b
```

That download is around 65 GB, so make sure you have the disk space.

Ollama also exposes an API on `localhost:11434`, including an OpenAI-compatible endpoint under `/v1`. That means any tool that lets you set a custom OpenAI base URL can talk to gpt-oss without code changes:

```python
from openai import OpenAI
client = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")
r = client.chat.completions.create(
    model="gpt-oss:20b",
    messages=[{"role": "user", "content": "Explain MoE models in two sentences."}],
)
print(r.choices[0].message.content)
```

## Step 3 (GUI path): LM Studio

If you would rather click than type, [LM Studio](/reviews/lm-studio-review-2024/) is the better fit.

1. Download and install LM Studio.
2. Open the Discover tab and search for "gpt-oss". Pick the official `openai/gpt-oss-20b` listing. LM Studio serves GGUF builds for Windows and Linux and MLX builds for Apple Silicon; choose whichever it recommends for your machine.
3. Click download, then load the model from the chat screen. Watch the memory indicator in the corner. If it turns red, you are over budget.
4. Start chatting. The reasoning trace shows up in a collapsible "thinking" block above each answer.
5. To use the model from other apps, open the Developer tab and start the local server. It exposes the same OpenAI-compatible API shape as Ollama, on a different port.

Not sure which app to pick? Our [Ollama vs LM Studio](/compare/ollama-vs-lm-studio/) comparison covers the tradeoffs. The short version: Ollama for scripting and integrations, LM Studio for browsing models and adjusting settings visually.

## Step 4: Set the reasoning effort

This is the setting most people miss. gpt-oss reads its reasoning level from the system prompt. Add a line like this:

```
Reasoning: high
```

Options are `low`, `medium`, and `high`. Medium is the default.

- **Low** answers quickly with minimal thinking. Use it for chat, summarization, and rewriting.
- **Medium** is a sensible default for general questions.
- **High** produces long reasoning traces and can take a while on consumer hardware, but it measurably helps on math, logic, and multi-step coding problems.

In Ollama you can set this once by creating a Modelfile with a SYSTEM line, or just paste it into the chat. In LM Studio, drop it into the system prompt field in the right-hand panel.

## Step 5: Plug it into your tools

Because both Ollama and LM Studio speak the OpenAI API, gpt-oss slots into most existing workflows:

- **Coding**: point the Continue extension in VS Code at your local server. We walked through that setup in our [local AI coding assistant guide](/tutorials/local-ai-coding-assistant-ollama-continue-2024/); swap the model name for `gpt-oss:20b`.
- **Chat interface**: Open WebUI gives you a ChatGPT-style front end with history, file uploads, and multiple models.
- **Agents and scripts**: any framework with a configurable base URL, including LangChain, the OpenAI SDKs, and most no-code automation tools.

Function calling works through the standard tools parameter. gpt-oss was trained with tool use in mind, so it is noticeably better at deciding when to call a function than most open models of its size.

## Tips for better results

- **Keep the context modest.** The 128k window is real, but the memory for that context comes out of the same pool as the model. A 16 GB machine will not comfortably hold 100k tokens of conversation.
- **Do not quantize further.** The official MXFP4 weights are already 4-bit. Third-party 2-bit or 3-bit builds degrade quality noticeably and save little memory.
- **Compare it to the alternatives.** Qwen3, Gemma 3, and the DeepSeek R1 distills are all strong at similar sizes. Our [DeepSeek review](/reviews/deepseek-review-2025/) covers the other big open-weight release of the year. Run your own prompts through two or three before settling.
- **Use the reasoning trace.** When the model gets something wrong, the visible thinking usually shows where it went off track, which makes prompt fixes faster.

## Pitfalls to avoid

- **16 GB is a floor, not a target.** Expect swapping and slowdowns on a machine with exactly 16 GB and anything else open.
- **Chat template mismatches.** If you run the raw weights through llama.cpp or another low-level tool, you must use the harmony chat template or the model produces garbage. Ollama and LM Studio handle this for you.
- **Hallucinations are still real.** OpenAI's own model card notes that the 20b model hallucinates more than larger models on factual questions. Verify anything that matters.
- **No browsing unless you add it.** Ask about today's news and the model may confidently invent an answer. It has tool-calling ability, but you have to supply the tools.
- **Windows GPU detection.** If Ollama falls back to CPU on Windows, update your NVIDIA drivers and confirm the GPU appears in Ollama's log output before assuming the model is slow.
- **License is permissive, but read the policy.** Apache 2.0 allows commercial use. OpenAI's separate usage policy still asks you not to use the models for certain harmful applications.

## Is running gpt-oss locally worth it?

For most people, ChatGPT or another hosted service remains more convenient. The local case is specific but strong: sensitive documents that cannot leave your machine, high-volume workloads where per-token pricing adds up, offline environments, and developers who want a capable model to build against with no rate limits.

gpt-oss-20b is the first OpenAI model you can run on a laptop, and it holds up well against the best open models in its class. If you have the memory, it is worth an afternoon.
