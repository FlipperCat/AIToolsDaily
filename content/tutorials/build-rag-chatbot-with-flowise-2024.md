---
title: "How to Build a RAG Chatbot with Flowise (2024): No-Code, Step by Step"
description: "Build a chatbot that answers questions from your own PDFs with Flowise: install, wire the nodes, upsert documents, tune retrieval, and embed it on a site."
date: 2024-10-15
updated: 2026-10-29
slug: "build-rag-chatbot-with-flowise-2024"
categories: ["Tutorials"]
tags: ["flowise", "rag", "langchain", "no-code", "chatbots", "open-source"]
affiliate_disclosure: true
faqs:
  - question: "Is Flowise free?"
    answer: "The open-source version is free to self-host on your own machine or server. You still pay for whatever model APIs you connect, such as OpenAI or Anthropic, unless you run models locally. One-click deploy templates for common cloud hosts also exist if you'd rather not manage a server yourself."
  - question: "Do I need to know how to code to use Flowise?"
    answer: "Not for a basic chatbot. You build flows by dragging nodes onto a canvas and connecting them. Knowing a little about how retrieval-augmented generation works (chunking, embeddings, vector stores) helps a lot when you need to debug bad answers."
  - question: "Can Flowise run fully offline?"
    answer: "Yes, if you pair it with local models. Flowise has nodes for Ollama chat models and embeddings, so your documents and questions never leave your machine. Expect slower responses and somewhat weaker answers than with top hosted models on typical hardware."
  - question: "Which vector store should I use in Flowise?"
    answer: "Use the in-memory store while you prototype because it needs no setup. For anything you plan to keep, switch to a persistent store such as Chroma, Qdrant, Pinecone, or Postgres with pgvector, so you don't have to re-embed documents every time Flowise restarts."
---

Retrieval-augmented generation (RAG) is the standard way to make a chatbot answer from *your* documents instead of from whatever the model memorized. The usual path is a Python project built on LangChain or LlamaIndex. If you want to compare those two, our [LangChain vs LlamaIndex breakdown](/compare/langchain-vs-llamaindex-2024-which-framework-should-you-actually-build-on/) covers it.

Flowise gives you the same building blocks on a visual canvas. It's open source, built on LangChain's JavaScript library, and you can go from zero to a working document chatbot in under an hour. This tutorial walks through exactly that: a bot that answers questions about a set of PDFs, cites its sources, and can be embedded on a website.

## What You'll Need

- **Node.js 18 or newer**, or Docker if you prefer containers.
- **An OpenAI API key**, or Ollama installed if you want to run everything locally.
- **A few PDFs** with real text in them, such as product docs, policies, or a handbook.
- About 45 minutes.

## Step 1: Install and Start Flowise

The quickest route is npm:

```bash
npm install -g flowise
npx flowise start
```

Open `http://localhost:3000` in your browser. If you'd rather use Docker:

```bash
docker run -d --name flowise -p 3000:3000 flowiseai/flowise
```

If the instance will be reachable from anywhere other than your laptop, set a login before you do anything else. Recent versions read `FLOWISE_USERNAME` and `FLOWISE_PASSWORD` environment variables. An unprotected Flowise instance exposes your flows and your stored API credentials to anyone who finds it.

## Step 2: Add Your Credentials

Go to **Credentials** in the left sidebar and add your OpenAI API key. Flowise stores credentials once and lets you select them from any node. This keeps keys out of the flow itself, so you can share or export a flow without leaking secrets.

## Step 3: Create a Chatflow and Add the Nodes

Click **Chatflows → Add New**. You'll get an empty canvas. Use the **+** button to add these six nodes:

1. **Document Loaders → PDF File.** Upload your PDFs. Choose "one document per page" so each page keeps its own metadata. That makes source citations far more useful.
2. **Text Splitters → Recursive Character Text Splitter.** Start with a chunk size of 1,000 characters and an overlap of 200.
3. **Embeddings → OpenAI Embeddings.** Select your credential. The `text-embedding-3-small` model is cheap and good enough for most document sets.
4. **Vector Stores → In-Memory Vector Store.** Zero setup, ideal for prototyping.
5. **Chat Models → ChatOpenAI.** Pick a model and set the temperature low, around 0 to 0.3, so answers stay close to the source text.
6. **Chains → Conversational Retrieval QA Chain.** This ties retrieval, the model, and chat history together.

## Step 4: Wire Them Together

Connections follow the data:

- Text splitter → the PDF File node's splitter input
- PDF File → the vector store's document input
- OpenAI Embeddings → the vector store's embeddings input
- Vector store's retriever output → the chain's retriever input
- ChatOpenAI → the chain's model input

Every input that still needs a connection shows a red marker, so you can see at a glance what's missing. Click **Save** and give the flow a name.

## Step 5: Upsert Your Documents

"Upsert" is the step that loads, splits, embeds, and stores your documents. After saving, use the upsert button (the database icon in the top toolbar) to process them. Large PDFs take a minute. Watch for errors here. The most common one is a scanned PDF with no text layer, which gives you zero chunks and a bot that knows nothing. Run OCR on those files first.

## Step 6: Test It in the Chat Panel

Open the chat panel with the chat bubble icon at the top right and ask questions you know the answers to. Check three things:

- **Does it answer correctly?**
- **Does it say "I don't know" when the answer isn't in your documents?**
- **Can you see where the answer came from?**

For the last point, open the chain's **Additional Parameters** and turn on **Return Source Documents**. The chat panel will then show which chunks the answer was built from. This is the single most useful debugging feature in Flowise.

## Step 7: Tune Retrieval and Prompts

Most bad answers are retrieval problems, not model problems. Work through these in order:

- **Top K.** The vector store returns a fixed number of chunks per question, often four by default. If answers miss details, raise it to six or eight. If answers get confused, lower it.
- **Chunk size.** Dense technical docs often do better with smaller chunks (500–800). Narrative documents tolerate larger ones.
- **The response prompt.** In the chain's additional parameters, edit the prompt to tell the model to answer only from the provided context, to say plainly when it doesn't know, and to keep answers short. This one change removes many confident wrong answers.
- **The model.** Budget models handle most document Q&A well. Our [Claude 3 Haiku vs GPT-4o mini comparison](/compare/claude-3-haiku-vs-gpt-4o-mini-2024-which-budget-ai-model-should-you-build-on/) covers the tradeoffs. Swap in a stronger model only if reasoning across several chunks is where it fails.

## Step 8: Make It Persistent

The in-memory store forgets everything when Flowise restarts. Before you rely on the bot, replace it with a persistent vector store such as Chroma, Qdrant, Pinecone, or Postgres with pgvector. The wiring is identical: delete the in-memory node, drop in the new one, and reconnect.

If you'll update documents over time, add a **Record Manager** to the vector store. It tracks what has already been embedded, so re-upserting doesn't create duplicate chunks.

## Step 9 (Optional): Run It Fully Local

For sensitive documents, swap the OpenAI nodes for **ChatOllama** and **Ollama Embeddings**. Pull an embedding model (such as `nomic-embed-text`) and a chat model (such as Llama 3.1 8B) in Ollama first. Our [Ollama review](/reviews/ollama-review-2024-the-easiest-way-to-run-llms-locally/) covers setup and hardware expectations. Remember that changing the embedding model means re-upserting everything, because vectors from different models aren't compatible.

## Step 10: Embed It or Call It via API

Click the **</>** button on your chatflow. Flowise gives you:

- **An embed snippet** that adds a chat bubble to any website with a single script tag.
- **API examples** in Python, JavaScript, and cURL for calling the flow from your own app.
- **A shareable chatbot link** for quick internal use.

Before you make anything public, assign an API key to the chatflow so random visitors can't call it directly and run up your model bill.

## Common Pitfalls

- **Scanned PDFs.** No text layer means no chunks. Run OCR first.
- **Skipping the "I don't know" test.** A bot that invents answers is worse than no bot. Test with questions your documents can't answer.
- **Forgetting to re-upsert.** Changing files, chunk settings, or the embedding model all require a fresh upsert.
- **Leaving it open.** Self-hosted Flowise with no login and no API key is a common and expensive mistake.
- **Upgrading carelessly.** Flowise moves fast and node options change between versions. Pin a version for anything in production and test upgrades on a copy of your flows.

## When to Graduate from Flowise

Flowise is excellent for internal tools, prototypes, and small production bots. You'll outgrow it if you need complex custom logic, heavy evaluation pipelines, or fine control over every retrieval step. At that point, exporting what you learned into a code-based LangChain or LlamaIndex project is straightforward, because the concepts map one to one.
