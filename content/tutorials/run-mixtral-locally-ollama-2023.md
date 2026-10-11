---
title: "How to Run Mixtral 8x7B Locally with Ollama (2023): Hardware, Setup, and Pitfalls"
description: "Step-by-step guide to running Mistral AI's Mixtral 8x7B on your own Mac or Linux machine with Ollama, including RAM requirements, quantization choices, and LM Studio as an alternative."
date: 2023-12-21
updated: 2025-06-11
categories: ["Tutorials"]
tags: ["mixtral", "mistral-ai", "ollama", "local-llm", "open-source-ai", "lm-studio"]
affiliate_disclosure: true
faqs:
  - question: "How much RAM do I need to run Mixtral locally?"
    answer: "The default 4-bit build Ollama downloads is roughly 26 GB, and you want headroom beyond that for the operating system and context. 48 GB or more of unified memory on a Mac, or 64 GB of system RAM on a PC, is comfortable. 32 GB machines can work with a smaller quantization, but expect swapping and slow responses on long prompts."
  - question: "Why is Mixtral fast for its size?"
    answer: "Mixtral is a sparse mixture-of-experts model. It has about 47 billion parameters in total, but only two of its eight expert blocks activate for each token, so roughly 13 billion parameters do the work at any moment. You pay the memory cost of a 47B model but get generation speed closer to a 13B model."
  - question: "Can I run Mixtral on Windows?"
    answer: "As of December 2023 Ollama ships for macOS and Linux only, so Windows users need WSL2 with Ubuntu. LM Studio has a native Windows build and added Mixtral support in mid-December, which makes it the simpler path on Windows right now."
---

Mistral AI released Mixtral 8x7B this month, first as a bare torrent link and then with proper weights under the Apache 2.0 license. The company's own benchmarks put it ahead of Llama 2 70B and roughly level with GPT-3.5 on most tests. Treat those numbers as vendor claims, but after a week of using it locally we can say this: it is the first open model that feels like a genuine ChatGPT substitute for everyday work, and it runs on hardware a lot of people already own.

This guide gets Mixtral running through Ollama, the simplest local runner available right now, and covers what to do when your machine is not quite big enough.

## What you are downloading

Mixtral is a sparse mixture-of-experts model. Instead of one dense network, it has eight "expert" feed-forward blocks per layer, and a small router picks two of them for every token. The total parameter count is about 46.7 billion, but only around 12.9 billion are active for any given token.

Two consequences follow:

- **Memory cost is that of a 47B model.** Every expert has to be loaded, even though only two fire at a time.
- **Speed is closer to a 13B model.** Fewer active parameters per token means faster generation than a dense 70B model like Llama 2 70B.

It also has a 32K token context window and handles English, French, German, Spanish, and Italian well. If you want background on how it stacks up against Meta's models, our [Mixtral vs Llama 2 comparison](/compare/mixtral-vs-llama-2-2023/) covers that.

Mistral released two versions: a base model and an instruct-tuned chat model. For a local assistant you want the instruct version. That is what Ollama's default `mixtral` tag points to.

## Hardware check

Be honest about your machine before you start a 26 GB download.

| Setup | Experience |
|---|---|
| Mac with 64 GB+ unified memory (M1/M2 Max or Ultra) | Comfortable. Conversational speed, room for long context. |
| Mac with 32 GB unified memory | Works with a smaller quantization (q3 or q2). Slower, less headroom. |
| Mac with 16 GB or less | Not realistic. Use Mistral 7B instead. |
| PC with 24 GB GPU (RTX 3090/4090) + 64 GB RAM | Good. Ollama offloads what fits to the GPU and runs the rest on CPU. |
| PC with 64 GB RAM, no capable GPU | Runs, but slowly. A few tokens per second. Fine for batch tasks, tedious for chat. |
| Linux server with an A100 or two | Excellent, and the main reason to run the full-precision weights. |

A quick way to sanity-check: the default 4-bit file is about 26 GB. If your free memory after booting is not comfortably above that, choose a smaller quantization in step 3.

## Step 1: Install Ollama

Ollama is a single-binary runner that wraps llama.cpp, manages model downloads, and exposes a local API.

**macOS:** download the app from ollama.ai and drag it into Applications. It installs a menu bar item and the `ollama` command-line tool.

**Linux:** run the one-line installer from the site:

```bash
curl https://ollama.ai/install.sh | sh
```

It will detect an Nvidia GPU if the drivers are present.

**Windows:** there is no native build yet. Install WSL2 with Ubuntu, then follow the Linux steps inside it. GPU passthrough works on recent Windows 11 builds with current Nvidia drivers, but expect some friction.

Confirm it works:

```bash
ollama --version
```

## Step 2: Pull and run Mixtral

```bash
ollama run mixtral
```

The first run downloads the default 4-bit quantized instruct model, around 26 GB. On a fast connection this is ten to twenty minutes. Once it finishes you land in an interactive chat prompt. Try something concrete:

```
>>> Rewrite this in plain English: "The party of the first part shall indemnify the party of the second part against all claims arising hereunder."
```

Type `/bye` to exit. The model stays cached, so subsequent launches load in seconds to a minute depending on your disk.

## Step 3: Pick the right quantization

Quantization reduces the precision of the model weights to shrink the file. Lower bits mean smaller downloads and less memory but gradually worse output. Ollama publishes Mixtral under several tags. The naming pattern looks like this:

```bash
ollama run mixtral:8x7b-instruct-v0.1-q4_0      # default, ~26 GB
ollama run mixtral:8x7b-instruct-v0.1-q3_K_M    # smaller, slight quality loss
ollama run mixtral:8x7b-instruct-v0.1-q2_K      # smallest, noticeable quality loss
ollama run mixtral:8x7b-instruct-v0.1-q6_K      # larger, near full quality
```

Check the tags page on ollama.ai for the current list before copying these exactly; names shift as new builds are published.

Rules of thumb from our testing:

- **q4 variants** are the sweet spot. You lose very little compared to full precision.
- **q3_K_M** is the right compromise for 32 GB Macs. Writing quality holds up; careful reasoning degrades a bit.
- **q2_K** is a last resort. Mixtral at q2 makes more factual slips and loses some of its multilingual polish.
- Anything above q5 only matters if you have memory to burn and are doing precise work like code generation.

## Step 4: Customize with a Modelfile

Ollama's Modelfile is a small text file that sets a system prompt and parameters, then saves the result as a new model name. Create a file called `Modelfile`:

```
FROM mixtral
PARAMETER temperature 0.3
PARAMETER num_ctx 8192
SYSTEM """You are a concise technical writing assistant. Answer directly. Use bullet points only when listing more than three items."""
```

Then build and run it:

```bash
ollama create writer -f Modelfile
ollama run writer
```

Two parameters matter most. Lower `temperature` makes output more predictable, which suits editing and summarization. `num_ctx` sets how much context the model keeps; the default is 2048 tokens, which is small for Mixtral's 32K capability, but raising it costs memory. 8192 is a reasonable step up for long documents on a 64 GB machine.

## Step 5: Use it from other apps

Ollama runs a local HTTP server on port 11434 while the app is open. Any tool on your machine can call it:

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "mixtral",
  "prompt": "Summarize the following meeting notes in three bullets: ...",
  "stream": false
}'
```

There is also a chat-style endpoint that takes a messages array if you prefer the conversational format. Several community front-ends and editor plugins already support Ollama as a backend, which turns Mixtral into a private coding or writing assistant that never sends text off your machine.

## Alternative: LM Studio

If you prefer a graphical interface, or you are on Windows, LM Studio is the other mature option. Update to the latest build, since Mixtral support arrived in mid-December, then search the in-app model browser for a GGUF build of Mixtral-8x7B-Instruct. The uploads from TheBloke on Hugging Face are the ones most people use. Pick the same quantization you would under Ollama, set GPU offload layers as high as your card allows, and chat in the built-in window or enable the local server for API access.

LM Studio is easier to configure visually. Ollama is easier to script and automate. Both are free. If you have never run a local model, our [GPT4All review](/reviews/gpt4all-review-2023/) covers the entry-level end of this space.

## Pitfalls we hit

**Silent swapping.** If memory is tight, the model loads but every response takes minutes. Check Activity Monitor or `htop` for swap usage and drop to a smaller quantization.

**The 2048 token default.** Mixtral will seem to "forget" earlier parts of a long paste because the default context is small. Raise `num_ctx` deliberately.

**Over-eager formatting.** The instruct model loves markdown headers and bullet lists. A one-line system prompt telling it to answer in prose fixes most of this.

**Old llama.cpp builds.** Mixtral's architecture needed new code paths. If a third-party tool fails with a tensor error, it has not updated yet. Support landed in llama.cpp around December 13.

**Judging it on one prompt.** Mixtral is noticeably better at structured reasoning with a clear instruction than with a vague one. Give it the format you want.

## Is it worth running locally?

For privacy-sensitive work, offline use, or anyone tired of rate limits and monthly fees, Mixtral is the first open model where the answer is clearly yes. It is not GPT-4. Multi-step logic, subtle instruction following, and long code refactors still favor OpenAI's flagship. But for drafting, summarizing, translating, and routine code help, it is close enough that we have stopped reaching for the browser tab by default.

If your hardware is not up to it, run `ollama run mistral` instead. The 7B model from the same team fits in 8 GB and is the best small model we have used this year. Our [Llama 2 explainer](/llama-2-what-you-need-to-know-2023/) is a good primer if the whole open-model landscape is new to you.
