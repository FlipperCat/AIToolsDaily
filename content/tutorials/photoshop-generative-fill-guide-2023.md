---
title: "How to Use Photoshop Generative Fill (2023): A Practical Guide"
description: "Step-by-step guide to Photoshop's Generative Fill: removing objects, extending images, writing prompts that work, and avoiding common pitfalls."
date: 2023-09-26
updated: 2026-04-14
categories: ["Tutorials"]
tags: ["photoshop", "adobe-firefly", "generative-fill", "image-editing", "design"]
affiliate_disclosure: true
faqs:
  - question: "Is Photoshop Generative Fill free to use?"
    answer: "Generative Fill is included with a Photoshop subscription, but generations consume generative credits. Paid Creative Cloud plans include a monthly credit allowance, and once you exhaust it, generations may slow down or require additional credits depending on your plan. There's no separate purchase needed to access the feature itself."
  - question: "Why do my Generative Fill results look blurry or soft?"
    answer: "Generated content is currently produced at up to 1024x1024 pixels per fill, then scaled to fit your selection. On large, high-resolution canvases a big selection gets upscaled and can look soft next to the sharp original pixels. The workaround is to fill large areas in several smaller selections instead of one huge one."
  - question: "Can I use Generative Fill output commercially?"
    answer: "Yes. With the September 2023 general release, Adobe says Firefly-powered features like Generative Fill are designed to be commercially safe, since the model is trained on Adobe Stock, licensed, and public-domain content. As with any AI output, you're still responsible for checking that the final image doesn't infringe trademarks or depict real people problematically."
---

Generative Fill is the most useful AI feature Adobe has ever shipped, and as of this month it's out of beta and available to everyone in Photoshop 25.0. Select part of an image, type what you want (or nothing at all), and Photoshop fills the area with AI-generated content that matches the lighting, perspective, and grain of your photo.

It's powered by Adobe Firefly under the hood — we covered the model family in our [Adobe Firefly review](/reviews/19-adobe-firefly-review/) — but you don't need to know anything about Firefly to use it. This guide covers the workflow that actually produces good results, because the difference between mediocre and excellent output is mostly technique.

## What you need

- **Photoshop 25.0 or later** (the 2024 release, out September 2023). Update via the Creative Cloud desktop app.
- **An internet connection.** Generation happens in Adobe's cloud, not on your machine.
- **Generative credits.** Paid Creative Cloud plans include a monthly allowance; each generation (which produces three variations) uses a credit.

## Step 1: Make a selection

Use any selection tool — Lasso, Rectangular Marquee, Object Selection — around the area you want to change. As soon as you have an active selection, the **contextual taskbar** appears with a Generative Fill button.

Selection technique matters more than prompt writing:

- **Removing an object?** Select slightly *beyond* its edges — 10–20 pixels of margin. If you trace it exactly, Photoshop often regenerates a similar object because the surrounding pixels imply one should be there.
- **Adding an object?** Select an area roughly the size and shape of what you want, positioned where perspective makes sense. A tiny selection can't hold a detailed subject.
- **Fixing a large region?** Break it into multiple medium selections rather than one giant one — more on why in the pitfalls section.

## Step 2: Prompt (or don't)

Click Generative Fill and you get a text field. Two distinct workflows here:

**Leave it empty to remove things.** An empty prompt tells Photoshop to fill the selection with content that seamlessly extends the surroundings. For removing tourists, power lines, trash, or logos, empty prompts consistently beat descriptive ones. Think of it as a dramatically smarter Content-Aware Fill.

**Describe the object, not the action.** When you do want something added, write what the filled area should *contain*, not an instruction. "Weathered wooden rowboat" works better than "add a boat to the lake." Skip words like "add," "make," or "please" — describe a noun with two or three concrete adjectives.

## Step 3: Generate and cycle variations

Hit Generate and wait a few seconds. Photoshop returns three variations, browsable from the taskbar or the Properties panel. Don't settle for the first batch — clicking Generate again produces three more while keeping the earlier ones available.

Every fill lands on its **own layer with a mask**, so the workflow is non-destructive. You can toggle it off, lower its opacity, paint on the mask, or stack multiple fills. This is a real advantage over round-tripping images through standalone generators like Midjourney — if you're choosing between the two approaches, our [Midjourney review](/reviews/01-midjourney-review/) covers where a dedicated generator still wins on pure image quality.

## Step 4: Extend your canvas with Generative Expand

The same engine powers outpainting. Grab the **Crop tool**, drag the canvas edges outward, and either press Enter with an empty prompt (Photoshop invents a plausible continuation of the scene) or type a prompt for what should appear in the new space.

This is the fastest fix I know for the classic client problem: a horizontal photo that needs to become a vertical social crop. Extend the sky and foreground instead of awkwardly cropping the subject.

## Step 5: Blend and finish

AI fills sometimes sit slightly "off" from the original — a touch too clean, or mismatched in grain. Three quick fixes:

1. **Add matching noise.** Filter > Camera Raw Filter on the fill layer, add grain to match the photo.
2. **Paint the mask edges.** Soft black brush at low opacity on the layer mask to feather the transition.
3. **Match color with an adjustment layer** clipped to the fill layer if the tones drift warm or cool.

## Common pitfalls

**The 1024-pixel softness problem.** Generated content maxes out around 1024x1024 pixels per fill. On a 6000-pixel-wide photo, one huge selection gets upscaled and looks noticeably soft. Work in smaller selections; each gets its own full-resolution generation.

**Faces, hands, and text.** Firefly, like every current image model, struggles with realistic human faces at small sizes, correct hands, and legible text. Don't fight it — plan compositions so generated regions avoid these, or expect heavy manual cleanup. For a broader look at what the current generation of tools can and can't do, see our [AI image generators guide](/ai-image-generators-2023-guide/).

**Content policy blocks.** Prompts touching brands, celebrities, or anything violent or suggestive get refused, and occasionally innocent prompts trip the filter. Rephrasing with more generic language usually gets through legitimate requests.

**Credit burn.** Each generate click costs a credit, and iterating freely is the whole point of the tool. Do your rough experimentation on a downsized duplicate of the file if you're rationing credits, then redo the winning approach on the full-resolution original.

## Is it worth building into your workflow?

Yes — with the caveat that it's a *retouching and compositing* tool, not an image generator. For object removal, background extension, and plausible scene edits, it has already replaced twenty minutes of clone-stamping with twenty seconds of selecting and typing. For generating whole images from scratch, dedicated tools still produce more striking results.

The best mental model: Generative Fill is the new Content-Aware Fill — a fundamental Photoshop skill now, not an optional novelty. Learn the selection-margin habit and the empty-prompt trick this week and it will pay for itself on the first client job.
