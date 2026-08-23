---
title: "How to Edit Photos With Gemini's Nano Banana (2025): A Practical Step-by-Step Guide"
description: "Learn to edit and combine photos with Gemini 2.5 Flash Image (Nano Banana): setup, natural-language edits, character consistency, multi-image fusion, and pitfalls."
date: 2025-09-16
updated: 2026-06-03
categories: ["Tutorials"]
tags: ["gemini", "nano-banana", "ai-image-editing", "google", "image-generation", "photo-editing"]
affiliate_disclosure: true
faqs:
  - question: "What is Nano Banana?"
    answer: "Nano Banana is the nickname for Gemini 2.5 Flash Image, Google's image generation and editing model released in late August 2025. The name came from its anonymous listing on a public model-testing leaderboard before launch. It is built into the Gemini app and available to developers through Google AI Studio and the Gemini API."
  - question: "Is Nano Banana free to use?"
    answer: "Yes, with limits. As of September 2025, free Gemini app users can generate and edit a limited number of images per day, and paid Google AI Pro subscribers get higher limits. Developers pay per image through the API, roughly a few cents per output image, though pricing is subject to change."
  - question: "Does Nano Banana keep faces consistent across edits?"
    answer: "Character consistency is its headline strength. It preserves a person's face, hair, and build across outfit changes, new backgrounds, and different poses far better than most prior editors. It is not perfect — very small faces and extreme angle changes still drift — but it is reliable enough for product mockups and social content."
  - question: "Are Nano Banana images watermarked?"
    answer: "Images made in the Gemini app carry a small visible Gemini watermark plus an invisible SynthID watermark that identifies them as AI-generated. API output includes SynthID but not the visible mark. You cannot turn SynthID off."
---

## How to Edit Photos With Gemini's Nano Banana (2025): A Practical Step-by-Step Guide

For the past few weeks, the most-shared AI images online have not come from Midjourney or ChatGPT. They have come from a Google model with a silly name. Gemini 2.5 Flash Image — universally called "Nano Banana" after its anonymous leaderboard handle — launched in late August and immediately became the default tool for a specific job: editing an existing photo with plain English while keeping the subject recognizable.

That last part is what matters. Plenty of tools can generate a picture of a person. Very few can take *your* photo, put you in a different outfit on a different street, and still have it look like you. This guide walks through how to use it well.

## What You Need

- A Google account. The free Gemini app tier works; Google AI Pro gives higher daily limits.
- The Gemini app on web (gemini.google.com), Android, or iOS.
- Source photos. Clear, well-lit images with the subject reasonably large in frame produce far better edits.

Developers and power users can also use the model in Google AI Studio, which exposes the same capabilities with fewer interface guardrails and no visible watermark. This tutorial uses the consumer Gemini app since that is where most people will start.

## Step 1: Start an Image Edit

1. Open Gemini and start a new chat.
2. Click the **+** (or paperclip) icon and upload your photo. You can drag an image straight into the prompt box on desktop.
3. Type a plain description of the change you want. Keep the first one simple to confirm the model understood the image: *"Change the background to a beach at sunset. Keep everything else the same."*
4. Press enter. Generation takes roughly ten to twenty seconds.

If the model responds with text instead of an image, your prompt was ambiguous. Add "edit this image" or "generate an image" to the request — the same Gemini chat handles text and images, so it sometimes guesses wrong.

## Step 2: Make Targeted Edits Without Masks

Traditional editors make you paint a mask over the region to change. Nano Banana figures out the region from your words. This is where it pulls ahead of the inpainting workflow we covered in the [ChatGPT image generation guide](/tutorials/chatgpt-image-generation-guide-2025/).

Effective edit prompts name the object, the change, and what should stay fixed:

- *"Remove the person on the left. Fill in the background naturally."*
- *"Change the red jacket to a navy wool coat. Keep the face, pose, and lighting unchanged."*
- *"Replace the coffee cup with a glass of orange juice."*
- *"Make it nighttime with the streetlights on. Keep the composition."*

The phrase "keep everything else the same" is doing real work. Without it, the model sometimes "improves" areas you did not ask about — smoothing skin, brightening the sky, straightening a tilt. Be explicit about what is off-limits.

## Step 3: Chain Edits in One Conversation

Because the editor lives inside a chat, each edit builds on the last. You do not need to re-upload. After the background change, you can say *"now add sunglasses"* and then *"make the sunglasses tortoiseshell"* and the model carries the image forward.

Two tips for chaining:

- **Check for drift every three or four steps.** Small distortions compound. If the face has started to change, go back to an earlier result (click it and continue from there) rather than trying to fix it forward.
- **Save intermediate results you like.** Download them — Gemini's chat history is not a reliable asset library.

## Step 4: Use Character Consistency for Series Content

This is the feature that makes Nano Banana useful for real work rather than just fun. Upload a clear photo of a person, product, or character, then ask for variations:

*"Using this same person, show her giving a presentation in a modern office, then walking through an airport, then at an outdoor cafe. Keep her face and hair identical in each."*

You can ask for several scenes in a single prompt or one at a time. For product work — say, a pair of headphones — the same approach generates lifestyle shots without a photo shoot. The approach is the same one we walked through for [AI product photos](/tutorials/create-ai-product-photos/), but with far less prompt engineering needed to keep the product from morphing.

For pets, mascots, and illustrated characters, the model is about as good as the [Midjourney character reference workflow](/tutorials/midjourney-consistent-characters-2024/), with the advantage that you can start from a real photo instead of a Midjourney generation.

## Step 5: Combine Multiple Images

Upload two or more photos in one message and describe how to merge them:

- Person + clothing item: *"Put the dress from the second image on the woman in the first image."*
- Product + background: *"Place this bottle on the marble counter from the second photo, matching the lighting."*
- Two people: *"Put both of these people in the same frame, standing together at a wedding."*

Results are best with two or three images. Beyond that, the model starts to lose track of which element came from where. Tell it explicitly: "the first image," "the second image."

## Step 6: Use Real-World Knowledge

Because the model is backed by Gemini, it understands context a pure diffusion model does not. You can ask it to *"put this room in 1970s decor"* or *"show what this garden would look like in autumn"* or *"color in this line drawing using a realistic palette"* and it draws on actual knowledge of what those things look like. Hand-drawn diagrams and sketches can be turned into finished illustrations the same way.

## Step 7: Export and Handle the Watermark

Hover over a result and click download. Images come out at roughly 1024 pixels on the long side — fine for social and web, too small for print. Run them through an upscaler if you need more resolution.

Every image from the Gemini app has a small visible Gemini mark in a corner and an invisible SynthID watermark. The visible one can be cropped; SynthID cannot be removed and is the right thing to leave alone if you are publishing commercially. Disclose AI editing where your platform or client expects it.

## Tips That Make a Difference

- **Lead with the subject, end with constraints.** "A photo of [subject], [change], keep [X, Y, Z] the same" is the most reliable structure.
- **One change per prompt when precision matters.** Batch several edits only for rough drafts.
- **Describe lighting when compositing.** "Match the warm side lighting from the original" prevents pasted-on looks.
- **Ask for photographic terms.** "85mm portrait, shallow depth of field" nudges output toward realism.
- **Use the higher-limit tier for batch work.** Free-tier daily caps run out fast once you start iterating.

## Pitfalls to Watch For

- **Text is still unreliable.** Signs, labels, and logos often come back misspelled. Add text in a real editor afterward.
- **Small faces drift.** If the subject is a small part of the frame, crop in first, edit, then composite back.
- **It refuses some edits involving real people.** Requests that look like impersonation, explicit content, or altering public figures get declined. Editing your own photos is fine.
- **Aspect ratio follows the input.** The model tends to output in the source image's ratio; asking for a different one sometimes works and sometimes gets ignored. For guaranteed control, crop the input first.
- **Not every result is an improvement.** The model can over-polish. Compare against the original before you ship.

## When to Use Something Else

Nano Banana is an editor first. For generating entirely new images from text, [Flux](/reviews/flux-ai-review-2024/), Midjourney, and ChatGPT's image model all still have stronger aesthetics and more style control. For professional retouching with layers, masks, and print resolution, Photoshop remains the tool. Where Nano Banana wins is the middle: quick, convincing edits to real photos, with a subject that stays itself. For that job, as of September 2025, nothing else is as fast or as easy.
