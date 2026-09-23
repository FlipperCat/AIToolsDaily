---
title: "How to Set Up Open WebUI With Ollama (2026): A Private ChatGPT-Style Workspace"
description: "Step-by-step guide to running Open WebUI on top of Ollama: install, first model, document chat, multi-user access, and the pitfalls that trip people up."
date: 2026-09-19
updated: 2026-09-19
categories: ["Tutorials"]
tags: ["open-webui", "ollama", "local-llm", "self-hosted", "privacy", "rag"]
affiliate_disclosure: true
faqs:
  - question: "Do I need a GPU to run Open WebUI?"
    answer: "Open WebUI itself is just a web app and runs fine on a CPU. The GPU question is about the models behind it. Small models in the 3-8B range run acceptably on a modern laptop or an Apple Silicon Mac; bigger models need a GPU with plenty of VRAM or a lot of patience."
  - question: "Is Open WebUI free?"
    answer: "Yes, it is free to self-host. Your costs are hardware and electricity. If you connect paid cloud APIs as well, you pay those providers per token as usual. Read the project's license if you plan to rebrand it for a commercial product, because the terms around branding have changed over time."
  - question: "Is my data really private with Open WebUI and Ollama?"
    answer: "With local models only, prompts and documents stay on your machine or server. Privacy breaks down when you enable cloud model connections or web search integrations, since those send content to third parties. Check which connections are switched on in the admin settings."
  - question: "Can several people share one Open WebUI server?"
    answer: "Yes. It has user accounts, roles, and an admin approval flow for new sign-ups. One reasonably powerful machine can serve a small team, though concurrent requests to the same local model will queue and slow down."
---

Ollama makes running a local model a one-line job, but its terminal chat is bare. [Open WebUI](https://openwebui.com) fills that gap: a self-hosted, browser-based interface that feels close to ChatGPT, with chat history, document upload, model switching, and user accounts. It talks to Ollama on the back end, and it can also talk to any OpenAI-compatible API.

This guide takes you from nothing to a working private workspace in about 20 minutes. It assumes you're comfortable pasting commands into a terminal. If you haven't picked a local runtime yet, read our [Ollama review](/reviews/ollama-review-2024/) or the [Ollama vs LM Studio comparison](/compare/ollama-vs-lm-studio/) first.

## What You'll Need

- A machine with at least 16 GB of RAM. 8 GB works for tiny models but feels cramped.
- Ollama installed and running.
- Docker (recommended) or Python 3.11 if you'd rather install with pip.
- Around 10-20 GB of free disk space for a couple of models.

## Step 1: Install Ollama and Pull a Model

Install Ollama from its website for macOS or Windows, or use the install script on Linux. Then pull a model:

```bash
ollama pull llama3.1:8b
```

An 8B general-purpose model is a sensible starting point: small enough for most laptops, capable enough for drafting, summarizing, and Q&A. Confirm Ollama is serving:

```bash
curl http://localhost:11434
```

You should see "Ollama is running." If you don't, start the Ollama app or run `ollama serve`. Our [local LLM setup guide](/tutorials/local-llm-setup-guide/) covers model sizing in more depth.

## Step 2: Run Open WebUI in Docker

Docker is the cleanest option because it keeps Open WebUI's dependencies away from the rest of your system and makes upgrades painless:

```bash
docker run -d -p 3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data \
  --name open-webui --restart always \
  ghcr.io/open-webui/open-webui:main
```

What those flags do:

- `-p 3000:8080` exposes the app on port 3000 of your machine.
- `--add-host=host.docker.internal:host-gateway` lets the container reach Ollama running on the host.
- `-v open-webui:/app/backend/data` puts your chats, users, and uploaded documents in a named volume, so they survive container upgrades.
- `--restart always` brings it back after a reboot.

**Without Docker:** `pip install open-webui` then `open-webui serve`. It listens on port 8080 by default. This route works but is more fragile, because Python version conflicts are the most common cause of broken installs.

## Step 3: Create the Admin Account

Open `http://localhost:3000`. The first account you create becomes the administrator, so create yours right away and don't leave a fresh install exposed on a network where someone else could claim it first.

Once you're logged in, the model picker at the top should list `llama3.1:8b`. If it's empty, go to **Admin Panel → Settings → Connections** and check that the Ollama URL is `http://host.docker.internal:11434` (Docker) or `http://localhost:11434` (pip install).

## Step 4: Chat, and Tune the Model Settings

Start a chat and test it with a real task, like rewriting an email or summarizing some notes. Then look at the per-chat controls:

- **System prompt:** sets standing instructions, like "answer concisely, use British spelling."
- **Temperature:** lower (0.2-0.4) for factual or extraction work, higher for brainstorming.
- **Context length:** Ollama's default context window is conservative. If long documents seem to get "forgotten," raise it in the advanced parameters, but know that bigger contexts use more memory.

For setups you'll reuse, go to **Workspace → Models** and create a custom model preset: a base model plus a system prompt and parameters, saved under a friendly name like "Contract Summarizer." It's the local equivalent of a custom GPT, and one of Open WebUI's most useful features.

## Step 5: Chat With Your Documents

Open WebUI has built-in retrieval-augmented generation (RAG). There are two ways to use it:

1. **One-off:** drag a PDF or text file into the chat box and ask questions about it.
2. **Knowledge collections:** under **Workspace → Knowledge**, create a collection (for example, "HR Policies") and upload a set of files. In any chat, type `#` to attach the collection.

Behind the scenes, documents are split into chunks, embedded, and searched for each question. That has consequences:

- It's good at "what does the policy say about X?" questions.
- It's weak at "summarize this entire 200-page report," because only the top-matching chunks reach the model. For full-document summaries, paste the text directly into a long-context model instead.
- Scanned PDFs without a text layer come through empty. Run OCR on them first.

If answers seem to miss obvious passages, try adjusting chunk size and the number of retrieved chunks under **Admin Panel → Settings → Documents**, and consider switching to a stronger embedding model.

## Step 6: Add Users (Optional)

For a household or small team, open **Admin Panel → Users**. By default, new sign-ups sit in a "pending" state until an admin approves them, which is exactly what you want. You can also:

- Restrict which models each group can see.
- Turn off sign-ups entirely once everyone is onboarded.
- Put Open WebUI behind a reverse proxy (Caddy or Nginx) with HTTPS if people will reach it from outside your local network.

Performance note: Ollama processes requests to a model largely one at a time unless you configure parallelism. Three people hitting a single 8B model at once will each see slower responses. For a team of more than a handful, budget for a real GPU.

## Step 7: Mix In Cloud Models (If You Want)

Under **Connections**, you can add any OpenAI-compatible endpoint with an API key. That lets you keep sensitive work on local models while switching to a frontier cloud model for harder reasoning, all in the same interface. If you go this route, see our [OpenRouter vs direct API comparison](/compare/openrouter-vs-direct-api-2026/) for how to route requests.

The tradeoff is obvious but easy to forget: once a cloud model is selected, that chat is no longer private. Consider giving cloud-backed presets clearly labeled names so nobody pastes a client contract into one by accident.

## Upgrading Without Losing Data

With Docker, upgrading means pulling the new image and recreating the container:

```bash
docker pull ghcr.io/open-webui/open-webui:main
docker stop open-webui && docker rm open-webui
# re-run the docker run command from Step 2
```

Because your data lives in the `open-webui` volume, chats and users carry over. Back up that volume before major upgrades, because the project moves fast and database migrations occasionally go wrong.

## Common Pitfalls

- **"No models available."** This is almost always a connection URL problem. Inside Docker, `localhost` means the container itself, not your machine. Use `host.docker.internal`.
- **Painfully slow responses.** The model is too big for your hardware and is spilling out of GPU memory into system RAM. Drop to a smaller model or a more aggressive quantization.
- **Forgetting the first-user rule.** Whoever signs up first becomes admin. Don't expose a fresh install to the internet.
- **Assuming RAG reads the whole file.** It only retrieves chunks. Ask targeted questions.
- **Web search leaking data.** If you enable a web search provider, your queries go to that provider. Decide deliberately.

## Is It Worth It?

For privacy-sensitive work, like client documents, internal notes, or anything you wouldn't paste into a consumer chatbot, Open WebUI plus Ollama is the most polished free way to get a ChatGPT-style experience that stays under your control. The honest limitation is model quality: a local 8B model is useful, but it won't match a top cloud model on complex reasoning or long-form writing. Many people settle on a hybrid, with local models for the everyday, sensitive, high-volume work and a cloud model for the hard problems.
