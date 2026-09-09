---
title: "DALL-E 2 Review (2023): Still the Easiest AI Image Generator, But No Longer the Best"
description: "DALL-E 2 review for early 2023: image quality, inpainting and outpainting, credits, API, commercial rights, and how it stacks up against Midjourney."
date: 2023-01-24
updated: 2026-04-08
categories: ["Reviews"]
tags: ["dall-e", "openai", "ai-art", "image-generation", "creative-tools"]
affiliate_disclosure: true
faqs:
  - question: "Is DALL-E 2 free to use?"
    answer: "Partly. As of January 2023, new accounts get 50 free credits in the first month and 15 free credits each month after that. One credit covers a single prompt (four images) or one edit or variation request. Beyond that, credits cost about $15 for 115, which works out to roughly 13 cents per generation."
  - question: "Can I use DALL-E 2 images commercially?"
    answer: "Yes. Since mid-2022 OpenAI grants users full usage rights to reprint, sell, and merchandise images they create, subject to the content policy. You cannot generate images of public figures, and OpenAI keeps a visible watermark strip in the corner of downloads that you are allowed to remove."
  - question: "Is DALL-E 2 better than Midjourney?"
    answer: "For ease of use and editing tools, DALL-E 2 wins. For raw visual quality on artistic and cinematic prompts, Midjourney's V4 model, released in November 2022, is now ahead in most side-by-side tests. DALL-E 2 remains better at literal, product-style prompts and at editing existing photos."
---

## DALL-E 2 Review (2023): Still the Easiest AI Image Generator, But No Longer the Best

Nine months ago DALL-E 2 was the AI image generator. The waitlist was the hottest ticket in tech, the outputs went viral daily, and nothing else came close. That has changed fast. Stable Diffusion went open source in August, Midjourney shipped its V4 model in November, and DALL-E 2 opened to everyone in late September with a credit system that made people think twice about every prompt.

So where does DALL-E 2 stand at the start of 2023? I have used it steadily since the beta, and this review covers what it does well, where the competition has overtaken it, and whether it is still worth your credits.

## What DALL-E 2 is

DALL-E 2 is OpenAI's text-to-image model, accessible through a web app at labs.openai.com and, since November 2022, through an API. You type a description, and it returns four 1024 by 1024 images. There is no waitlist anymore. You sign up, get your free credits, and start generating within a minute.

The web app is deliberately minimal: a prompt box, a results grid, and a handful of tools per image. That simplicity is a large part of its appeal, especially compared with running [Stable Diffusion](/reviews/stable-diffusion-review/) locally or learning Midjourney's Discord commands.

## Key features

**Text-to-image.** The core feature. DALL-E 2 is strong at understanding literal compositions: "a red bicycle leaning against a blue wall, product photography" comes back correct far more often than it does in Stable Diffusion 2.1. It also handles combining unusual concepts well, which is where the early viral images came from.

**Edit (inpainting).** Upload an image or use a generated one, erase a region with the brush, describe what should go there, and DALL-E fills it in. This is the feature I use most. Swapping a background, removing an object, or adding a prop to a product shot takes seconds.

**Outpainting.** Added in August 2022, this lets you extend an image beyond its original borders. Because DALL-E 2 only outputs square images, outpainting is also the only way to get a landscape or portrait aspect ratio. It works well for backgrounds and scenery and less well when it has to invent detailed new subjects.

**Variations.** Click any image to get four riffs on it. Useful for narrowing in on a composition you like before spending credits on prompt tweaks.

**Collections and history.** Every generation is saved to your account, and you can group images into collections. Small feature, genuinely convenient.

**API.** Launched in November 2022 with per-image pricing that undercuts the consumer credits. Microsoft's new Designer app uses it under the hood, and several Shopify and Canva-style tools have started adding DALL-E buttons.

## Pros

- Easiest on-ramp of any image generator. No Discord, no GPU, no settings.
- Best-in-class editing: inpainting and outpainting are more polished than anything in the open-source ecosystem right now.
- Strong prompt adherence for literal, descriptive requests.
- Clear commercial usage rights, which matters for client work.
- Faces are allowed again after the September policy change, so portraits and stock-style people images are back on the table.
- API pricing is cheap enough to build products on.

## Cons and limitations

- **Visual quality has been overtaken.** Midjourney V4 produces more striking, better-lit, more "finished" images for artistic prompts. DALL-E 2 output often looks slightly soft, washed out, or cartoonish by comparison.
- **Square only.** 1024 by 1024, no aspect ratio control. Outpainting is a workaround, not a fix.
- **Text rendering is hopeless.** Ask for a sign or logo with words on it and you will get letter-shaped gibberish. Every generator struggles here, but DALL-E 2 is no better than the rest.
- **Hands, eyes, and anatomy** still go wrong in a noticeable share of generations, especially with multiple people.
- **Credits create friction.** At roughly 13 cents per prompt, experimenting freely feels expensive, and the free monthly allowance dropped from 50 to 15 after the first month. Stable Diffusion is free if you have the hardware.
- **Strict content filter.** No public figures, no violence, and it rejects a fair number of harmless prompts on keyword matches. Frustrating when you are generating a fantasy battle scene.
- **No style controls.** There is no negative prompt, no seed, no model choice, and no way to tune how closely it follows the prompt. What you type is all you get.

## Pricing

Approximate, as of January 2023:

- **Free:** 50 credits in your first month, then 15 credits per month.
- **Paid credits:** about $15 for 115 credits, which do not expire for 12 months.
- **API:** around 2 cents per 1024 by 1024 image, less for smaller sizes.

One credit equals one prompt (four images), one edit, or one variation request. Failed generations are not charged.

## Who it's for

**Good fit:**

- Marketers and small businesses who need occasional product mockups, blog illustrations, or social graphics without a learning curve.
- Anyone who edits existing images more than they generate from scratch.
- Developers who want an image API with predictable output and clear licensing.
- Beginners who want to understand how these tools work before committing to Midjourney or a local setup. Our [plain-language explainer](/04-ai-image-generation-explained-simply/) is a good companion.

**Poor fit:**

- Artists and designers chasing the most beautiful output per prompt. Midjourney V4 is the current leader there.
- High-volume users. Credits add up quickly, and Stable Diffusion costs nothing per image.
- Anyone who needs non-square images, consistent characters, or fine control over style.

## How it compares

We ran a detailed head-to-head in [DALL-E 2 vs Stable Diffusion](/compare/dalle-2-vs-stable-diffusion-2023/). The short version: DALL-E 2 is easier and better at editing, Stable Diffusion is free, uncensored, and endlessly customisable if you are willing to tinker. Midjourney sits in between on effort and ahead of both on aesthetics right now, and our [image generator roundup](/ai-image-generators-2023-guide/) covers the wider field.

The wildcard is OpenAI itself. The company has not announced a successor model, but the pace of the last year suggests DALL-E 2 will not stay in its current form for long.

## Verdict

DALL-E 2 in early 2023 is the image generator I recommend to people who want results in five minutes and do not care about winning an art contest. Its editing tools are still the best available, its prompt understanding is reliable, and the licensing is clean.

But it is no longer the quality leader, the square-only constraint is increasingly hard to defend, and the credit system discourages the experimentation that makes these tools fun. If you already have a Midjourney subscription or a gaming GPU, DALL-E 2 is now a specialist tool for edits rather than your first stop.

**Rating: 3.5 out of 5.** Excellent usability and editing, held back by a model that the competition has caught up with.
