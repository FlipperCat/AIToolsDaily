---
title: "How to Create Perplexity Pages (2024): Turn Your Research Into Publishable Articles"
description: "Step-by-step guide to Perplexity Pages in 2024: create, structure, fact-check, and publish shareable research articles — plus pitfalls to avoid."
date: 2024-07-22
updated: 2026-06-08
categories: ["Tutorials"]
tags: ["perplexity", "perplexity-pages", "ai-research", "content-creation", "tutorial"]
affiliate_disclosure: true
faqs:
  - question: "Do I need Perplexity Pro to use Pages?"
    answer: "At launch in May 2024, Pages rolled out to Pro subscribers (about $20/month) first, with wider availability promised over time. Free users may see the feature appear gradually. If you don't see the Page option yet, that's the most likely reason."
  - question: "Can other people find my Perplexity Page?"
    answer: "Yes — published Pages are public by design. They get a shareable perplexity.ai URL, can be discovered inside Perplexity, and can be indexed by search engines. Don't put anything private or client-confidential in a Page."
  - question: "Can I edit the text of a Page directly?"
    answer: "Editing is prompt-driven rather than free-form as of mid-2024. You can regenerate sections, change tone, add or remove sections, and swap media, but you can't click into a paragraph and retype it like a Google Doc. For full manual control, export your draft to a normal editor instead."
---

Perplexity quietly shipped one of its most interesting features at the end of May: **Pages**, a way to turn a research session into a formatted, shareable article with sections, images, and citations — published on a public Perplexity URL.

If you've ever finished a deep research thread and thought "I wish I could hand this to someone as a document instead of a chat log," Pages is aimed squarely at you. I've spent a few weeks making Pages for client research summaries and internal explainers. Here's the full workflow, plus the sharp edges nobody mentions.

## What Pages is (and isn't)

A Page is a structured article that Perplexity's AI drafts from a topic prompt or an existing search thread. Each section is generated with the same search-plus-citations approach as regular Perplexity answers, so claims come with source links. You curate: reorder sections, regenerate weak ones, pick images, then publish.

It is **not** a private notes tool (Pages are public), and it's not a free-form document editor — think "AI-drafted Wikipedia-style article you art-direct" rather than "Google Docs with AI."

If you're new to Perplexity itself, start with our [Perplexity review](/perplexity-ai-review-2024/) — this tutorial assumes you know the basic search experience.

## Step 1: Find the Pages entry point

Log in at perplexity.ai (Pages is best on desktop right now). In the left sidebar, open **Library** — you'll see a **Pages** tab alongside your threads. Click **Create a Page**.

Alternatively, and this is the underrated path: open any existing research thread you've already built up and use **Convert to Page**. Starting from a thread you've already steered produces noticeably better drafts than a cold prompt, because the AI inherits all that context.

## Step 2: Write a real prompt, not a keyword

The prompt box asks what your Page should be about. Treat it like a brief, not a search query:

- Weak: `intermittent fasting`
- Better: `A practical overview of intermittent fasting for busy office workers: main protocols, what the research actually supports, common mistakes, and who should avoid it`

The structure you imply in the prompt becomes the section skeleton. Specific prompts produce specific Pages; vague prompts produce encyclopedia filler.

## Step 3: Pick your audience

Pages asks who you're writing for — options along the lines of beginner, knowledgeable, or expert. This isn't cosmetic: it changes vocabulary, sentence length, and how much background each section includes. For anything client-facing, I've had the best results with the middle setting; "expert" mode tends to assume context your reader may not have.

## Step 4: Shape the draft section by section

Perplexity generates a title, header image options, and a series of sections. Now the real work starts:

1. **Cut ruthlessly.** Drafts usually include one or two sections that restate others. Delete them — a tight five-section Page reads far better than a baggy nine-section one.
2. **Regenerate weak sections.** Each section can be redrafted with a new instruction ("make this a comparison of the three main protocols, with a table"). You're prompting, not typing — steer with instructions.
3. **Add missing sections.** There's an option to append a new section with its own prompt. This is where you inject the angle the AI missed — pricing, risks, a FAQ.
4. **Fix the media.** Auto-selected images are hit-or-miss. Swap them from the suggested options or upload your own; a bad stock image undermines an otherwise credible Page.

## Step 5: Audit every citation (do not skip this)

Each section carries source citations, like regular Perplexity answers. Before publishing, click through them. In my testing, most citations genuinely support the text, but every few sections you'll find one where the source is tangential or the claim overreaches what the source says. Since your name is effectively on this public document, the ten minutes of citation-checking is the difference between "useful curated research" and "confidently wrong AI content."

Sections that summarize contested topics (nutrition, productivity science) deserve extra scrutiny — the same caution applies here as in any [AI-assisted writing](/compare/chatgpt-vs-claude/) workflow.

## Step 6: Publish and share

Hit **Publish** and your Page goes live at a public perplexity.ai URL. From there you can share the link anywhere; readers don't need an account. Pages are also discoverable within Perplexity and can end up in search engines — treat them as SEO-visible publishing, not private sharing.

To iterate after publishing, you can keep editing; changes go live on the same URL.

## Tips from a few weeks of real use

- **Thread-first beats prompt-first.** Do your actual research in a normal Perplexity thread — following up, correcting, narrowing — then convert. The Page inherits the refined context.
- **Use Pages for the 80% draft, not the final word.** For anything high-stakes, I export the substance into a real editor for a human rewrite. Prompt-only editing hits a ceiling.
- **Custom instructions don't reach Pages.** Your profile's writing preferences from the regular assistant (see our [custom instructions guide](/chatgpt-custom-instructions-guide-2024/) for the equivalent ChatGPT concept) won't reliably shape Page tone — put style requirements in the section prompts themselves.
- **Watch your quota.** Page generation and section regeneration consume Pro searches. Heavy regeneration sessions add up.

## Common pitfalls

- **Publishing without reading.** The draft looks polished, which makes it dangerously easy to ship unread. Polish is not accuracy.
- **Forgetting Pages are public.** No client names, internal numbers, or unreleased plans. Ever.
- **Fighting the editor.** If you find yourself regenerating a section six times to get exact wording, stop — copy the draft out and finish it manually. The tool rewards curation, not micromanagement.

## The bottom line

Pages is the first Perplexity feature that turns research *consumption* into research *output*, and for explainers, client briefings, and shareable topic summaries it already earns its place in a weekly workflow. Go in with the right mental model — you're the editor of a fast, well-cited, occasionally overconfident junior writer — and it's a genuine time-saver.
