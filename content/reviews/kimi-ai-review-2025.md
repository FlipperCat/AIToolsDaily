---
title: "Kimi AI Review (2025): Moonshot's K2 Is the Open Model to Beat"
description: "Kimi K2 pairs open weights with serious agentic and coding chops — free to chat, cheap via API. Our hands-on review of Moonshot AI's flagship."
date: 2025-08-09
updated: 2026-06-02
categories: ["Reviews"]
tags: ["kimi", "moonshot ai", "kimi k2", "open source", "llm", "agentic ai"]
affiliate_disclosure: true
faqs:
  - question: "Is Kimi free to use?"
    answer: "The Kimi web app and mobile apps are free for everyday chat use, with generous limits. The API is paid per token but priced far below Western frontier models. Because K2's weights are openly released, you can also run or fine-tune the model yourself — or access it through third-party hosts — without paying Moonshot at all."
  - question: "Is Kimi the same thing as DeepSeek?"
    answer: "No — they're rivals. Both are Chinese AI labs releasing open-weight models that compete with Western frontier systems, which is why they're often mentioned together. DeepSeek's breakout was reasoning (R1, January 2025); Kimi's K2 arrived in July 2025 with a focus on agentic tool use and coding. Many developers now test both and pick per task."
  - question: "Is it safe to use Kimi for work?"
    answer: "The same caution applies as with any Chinese-hosted AI service: data sent to the official app or API is processed on servers subject to Chinese law, which some companies and governments restrict. The open weights are the escape hatch — run the model through a Western hosting provider or on your own hardware and no data touches Moonshot's servers."
---

DeepSeek spent early 2025 proving that a Chinese lab could ship an open model that rattles the frontier. This summer, **Moonshot AI** — the Beijing startup behind the Kimi chatbot — made its own version of that argument. **Kimi K2**, released in July with open weights, isn't a reasoning specialist chasing benchmark math scores. It's aimed at something more commercially interesting: being a model that can *do things* — call tools, write working code, and carry multi-step tasks — at API prices that undercut the big Western labs by a wide margin.

We've spent the weeks since launch using Kimi for coding, research, and agent-style workflows. Here's where it genuinely impresses and where it still trails.

## What it is

"Kimi" covers three things:

- **The Kimi app** (kimi.com and mobile) — a free ChatGPT-style assistant that has been one of China's most popular chatbots since 2023, known early on for its unusually long context window — the ability to swallow entire books and document sets in one conversation.
- **Kimi K2** — the flagship released in July 2025: a very large mixture-of-experts model (around a trillion total parameters, with only a small fraction — roughly 32B — active per token) whose weights are published under a permissive, modified-MIT-style license.
- **The API** — Moonshot's hosted access to K2, priced aggressively low per million tokens.

The design bet matters. K2 as launched is *not* a long-thinking reasoning model like OpenAI's o-series or [DeepSeek-R1](/reviews/deepseek-review-2025/). It answers directly, and Moonshot optimized it heavily for **agentic behavior** — deciding when to call tools, chaining steps, and finishing multi-part tasks without hand-holding.

## Key features

**Agentic tool use that actually works.** This is K2's headline act. Wire it into a tool-calling setup — a code interpreter, web search, file operations — and it makes sensible decisions about when to invoke what. Where many open models flail at multi-step tasks (calling the wrong tool, forgetting the goal by step four), K2 completes them at a rate we've otherwise only seen from top proprietary models. For anyone building agents on a budget, that's the whole ballgame.

**Strong, practical coding.** K2 has quickly become a favorite backend for AI coding tools, and after a few weeks we understand why. It writes clean, working code, handles refactors across multiple files sensibly, and its output needs less cleanup than most open models. It's not categorically better than Claude for hard debugging, but it's in the conversation — at a fraction of the cost.

**Open weights with a permissive license.** Like DeepSeek before it, Moonshot published the model for anyone to download, fine-tune, and self-host (the license adds only light conditions for very large-scale commercial deployments). The strategic effect is the same: you are never locked into Moonshot's servers. Third-party hosts already serve K2, and if you have serious hardware, our [local LLM setup guide](/tutorials/local-llm-setup-guide/) covers the general workflow — though be warned, a model this size is far beyond a hobbyist laptop; the practical self-host path is a GPU cloud or a quantized variant.

**Very low API pricing.** Moonshot's hosted API runs an order of magnitude cheaper than Western frontier APIs — output tokens priced in the low single-digit dollars per million, as of August 2025. For high-volume workloads (summarization pipelines, agent loops, batch code generation), the economics change what's feasible.

**Long-context DNA.** Kimi built its reputation on digesting huge documents, and K2 keeps that character with a 128K-token context window. Dumping a full codebase slice or a stack of PDFs into one prompt works the way it should.

## Pros

- Best-in-class agentic tool use among open models
- Genuinely competitive coding ability
- Dramatically cheaper than proprietary frontier APIs
- Open weights mean no lock-in — self-host or use any provider
- Free consumer app is generous and capable
- 128K context handles book-length inputs

## Cons and limitations

- **No native reasoning mode at launch.** For hard math and intricate logic puzzles, dedicated reasoning models (o-series, R1) still win. K2 answers fast rather than thinking long.
- **Data residency concerns.** The official app and API process data on Chinese servers under Chinese law. Plenty of organizations will (reasonably) prohibit that. The open weights mitigate this — but only if you actually use a different host.
- **Peak-hour sluggishness.** Moonshot's own API has had noticeably variable throughput since launch — success draws load. Third-party hosts are often faster.
- **No multimodal story to speak of.** No image generation, and vision support lags well behind GPT-4o-class models. This is a text-and-code specialist.
- **Thinner ecosystem.** No equivalent of ChatGPT's app polish, voice mode, memory, or plugin universe. The consumer app is functional, not delightful, and English-language docs still read like translations in places. European rivals like [Mistral's Le Chat](/reviews/mistral-le-chat-review-2025/) offer a more polished consumer wrapper, if a less capable flagship model.

## Pricing

As of August 2025 — approximate, and Moonshot has already adjusted prices once:

- **Kimi app** — free, generous limits
- **API** — pay-per-token; input tokens fractions of a dollar per million (cached input cheaper still), output in the low single digits per million — roughly 5–10x cheaper than comparable proprietary models
- **Self-hosting / third-party hosts** — free weights; you pay only compute

## Who it's for

- **Developers building agents or high-volume pipelines** — the cost-to-capability ratio is the best argument in the category right now
- **Teams that need open weights** for compliance, customization, or independence from any single provider
- **Budget-conscious coders** using K2 behind AI coding tools instead of pricier defaults
- **Anyone wanting a capable free chatbot** — with the caveat about Chinese data residency

It's the wrong choice if you need polished consumer features, image and voice capabilities, or if your organization can't touch China-hosted services and you're unwilling to route through a third-party host.

## Verdict

Kimi K2 is the most convincing open-weights release since DeepSeek-R1, and the two make a telling pair: R1 proved open models could reason; K2 proves they can *act*. The rough edges are real — variable speed, thin multimodality, the ecosystem gap — and the residency question will keep it out of some companies entirely. But judged on what it does per dollar, K2 is the open model to beat this summer.

**Score: 4.5 out of 5** for developers and agent-builders; call it 3.5 for consumers who just want a polished everyday assistant. The frontier labs' moat looks a little narrower than it did in June.
