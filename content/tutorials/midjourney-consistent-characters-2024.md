---
title: "How to Create Consistent Characters in Midjourney (2024)"
description: "A step-by-step 2024 guide to consistent characters in Midjourney using the Character Reference (--cref) feature, the --cw weight, and prompting tricks that hold."
date: 2024-06-20
updated: 2025-08-30
categories: ["Tutorials"]
tags: ["midjourney", "character-reference", "ai-art", "cref", "image-generation"]
affiliate_disclosure: true
faqs:
  - question: "Does Midjourney's Character Reference work with real photos?"
    answer: "It works best with images Midjourney itself generated. You can point --cref at a real photo or an outside image, but results are less reliable — the feature is tuned to reproduce characters born inside Midjourney, not to clone real people from a snapshot. For a dependable character, generate your reference in Midjourney first."
  - question: "What does the --cw value actually control?"
    answer: "--cw sets character weight from 0 to 100. At 100 (the default) it tries to carry over the face, hair, and clothing from your reference. Lower it toward 0 and it focuses mainly on the face, freeing you to change outfits and settings. If you want your character in a new costume, drop --cw well below 100."
  - question: "Why does my character still look slightly different each time?"
    answer: "Character Reference improves consistency dramatically but isn't pixel-perfect cloning. Lighting, angle, art style, and a busy prompt all nudge the result. Keep your style consistent, pick a strong reference image, and generate a few options per prompt — some will match closer than others."
---

Getting Midjourney to draw the *same* character twice used to be the hardest problem in AI art. You'd craft a perfect hero, then try to put them in a second scene and get a stranger who vaguely resembled them. The Character Reference feature changed that. This guide walks through using it to keep a character recognizable across a whole set of images.

If you're brand new to the tool, start with our [Midjourney review](/reviews/01-midjourney-review/) for the lay of the land, then come back here.

## What You Need First

- An active Midjourney subscription and access to the bot (via Discord or the web interface).
- A basic comfort with the `/imagine` command. If that's new, our [create AI art with Midjourney tutorial](/tutorials/01-create-ai-art-midjourney/) covers the fundamentals.
- Five minutes to generate a strong reference image before you do anything else.

## Step 1: Generate a Strong Reference Character

Character Reference works best when your reference was made *inside* Midjourney, so your first job is to create a character you love.

Prompt for a clear, well-lit, front-facing portrait. Simplicity helps — a clean background and an unambiguous face give the feature more to lock onto than a busy action shot does. For example:

```
/imagine a young woman with short curly red hair, green eyes, freckles, wearing a denim jacket, plain studio background, soft lighting --v 6
```

Generate a few sets, then upscale the single image that best captures the character you want to reuse. This upscaled image becomes your anchor for everything that follows. Spend time here — a weak reference undermines every image after it.

## Step 2: Grab the Reference Image URL

Character Reference needs a direct image URL to point at.

1. Open your upscaled reference image in Discord (or the web gallery).
2. Right-click the image and copy its link, or open it and copy the URL from your browser.
3. Keep that URL handy — you'll paste it into every prompt where you want this character to appear.

You can also drag an image into the prompt box in the web interface to get the same effect. Either way, the goal is a URL Midjourney can read.

## Step 3: Use the --cref Parameter

Here's the core move. Write a normal prompt describing the *scene* you want, then append `--cref` followed by your reference image URL:

```
/imagine the same woman sitting in a cozy coffee shop reading a book, warm afternoon light --cref https://your-image-url.png --v 6
```

Notice you no longer need to re-describe her hair, eyes, and freckles in detail — `--cref` carries the character's likeness while your prompt handles the new setting and action. Describe what she's *doing and where*, and let the reference handle who she *is*.

## Step 4: Control Consistency with --cw

The `--cw` parameter (character weight) is where you gain real control. It runs from 0 to 100:

- **--cw 100** (the default) tries to carry over the whole character — face, hair, *and* clothing.
- **--cw 0** focuses almost entirely on the face, letting you change outfit, hairstyle details, and context freely.

So if you want your red-haired character in a spacesuit instead of a denim jacket, high weight will fight you by dragging the jacket along. Lower it:

```
/imagine the same woman as an astronaut floating inside a space station --cref https://your-image-url.png --cw 20 --v 6
```

A practical rule: keep `--cw` high when you want the character to look identical head to toe, and drop it toward 0 when you want the *face* to stay constant while everything else changes.

## Step 5: Combine with Style Reference for a Cohesive Look

If you're building a series — a comic, a storybook, a brand mascot set — you want a consistent *art style* as well as a consistent character. Stack Character Reference with Style Reference (`--sref`):

```
/imagine the same woman walking through a rainy neon city at night --cref https://character-url.png --sref https://style-url.png --cw 40 --v 6
```

`--cref` locks the person; `--sref` locks the visual style. Together they give you images that genuinely look like they belong to the same project rather than a random collection.

## Step 6: Iterate and Curate

Even with all this, Character Reference isn't a perfect clone machine. Expect variation. The workflow that actually works is:

1. Run each scene prompt a couple of times.
2. Pick the generation that matches your character best.
3. Use it — or, if it's exceptionally on-model, treat *it* as a fresh reference for the next batch.

That last trick matters. As you generate more on-model images, you accumulate a small library of strong references, and your character only gets more stable over time.

## Tips for Better Consistency

- **Keep your reference clean.** Front-facing, well-lit, uncluttered images make the strongest anchors.
- **Don't over-describe the face** in your scene prompts once you're using `--cref` — you'll fight the reference. Describe the scene, not the person.
- **Match your Midjourney version.** Character Reference is built for the current model version, so keep `--v 6` (or your current version) consistent across the set.
- **Simplify busy scenes.** Complex, crowded prompts pull the model's attention away from character fidelity.

## Common Pitfalls

- **Using a real photo as the reference.** It can work, but it's unreliable — the feature is tuned for Midjourney-generated characters. Generate your reference in Midjourney first.
- **Leaving --cw at 100 when you want a new outfit.** High weight drags the original clothing along. Lower it.
- **Expecting identical faces every time.** This is guided consistency, not cloning. Generate options and curate.
- **Changing art styles mid-series.** If the lighting or rendering style shifts, the character reads as "different" even when the face matches. Lock style with `--sref`.

## Wrapping Up

Consistent characters unlock a whole tier of projects in Midjourney — illustrated stories, character-driven marketing, comics, and more — that were painfully hard before. The recipe is simple: build one strong reference, point `--cref` at it, tune `--cw` for how much you want carried over, and curate the best results into an ever-stronger reference set.

Want to sharpen the prompts feeding all of this? Our [Midjourney prompts guide](/midjourney-prompts-guide/) goes deeper on wording, and if you're still deciding which image generator fits your workflow, the [Midjourney vs DALL·E 3 comparison](/compare/midjourney-vs-dalle3/) lays out the tradeoffs.
