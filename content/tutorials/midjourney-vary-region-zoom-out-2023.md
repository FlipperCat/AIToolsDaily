---
title: "Midjourney Vary (Region) and Zoom Out (2023): Fix and Expand Any Image"
description: "Learn Midjourney inpainting with Vary (Region), plus Zoom Out and Pan, to fix hands, swap objects, and turn a square crop into a full scene."
date: 2023-10-17
updated: 2025-12-08
categories: ["Tutorials"]
tags: ["midjourney", "ai art", "inpainting", "image editing", "tutorial"]
affiliate_disclosure: true
faqs:
  - question: "Do I need Remix mode turned on for Vary (Region)?"
    answer: "You do not strictly need it, but you want it. With Remix off, Vary (Region) regenerates the selected area using your original prompt. With Remix on, you get a prompt box and can tell Midjourney what should go in that region instead. That is the difference between re-rolling a spot and actually directing it."
  - question: "Why does my Zoom Out result look blurry or duplicated?"
    answer: "Zooming out repeatedly compounds the problem. Each pass renders the original image smaller inside a larger canvas, so detail per pixel drops and Midjourney starts inventing repeated elements to fill space. Limit yourself to one or two zoom steps, and upscale the final frame rather than the intermediate ones."
  - question: "Does Vary (Region) cost extra GPU time?"
    answer: "It uses your normal fast GPU allowance like any other generation, so each attempt draws down your monthly minutes. Region edits are full renders, not free touch-ups. If you are on the lowest plan, budget for several attempts per fix, because the first region result is rarely the keeper."
---

Most people stop using Midjourney the moment an image is 90% right. The composition works, the lighting is good, and then there is one broken hand, an object that should not be there, or a crop that cuts off the subject's feet. The old workflow was to re-roll the prompt and hope. The current one is to fix the image you already have.

As of late 2023, Midjourney has three tools that turn a finished render into a starting point: **Vary (Region)** for editing inside the frame, **Zoom Out** for expanding the canvas outward, and **Pan** for extending in one direction. This guide walks through all three, in the order you would actually use them.

Everything here runs in Discord, which is still the main way to use Midjourney. If you are new to the tool entirely, start with our [Midjourney basics tutorial](/tutorials/01-create-ai-art-midjourney/) and come back — this guide assumes you already know how to prompt and upscale.

## Step 1: Turn on Remix mode first

Before anything else, type `/settings` in Discord and make sure **Remix mode** is highlighted. This single toggle changes what half the buttons below do.

With Remix off, Vary (Region) rerolls your selection using the original prompt. With Remix on, every region edit opens a prompt box so you can specify what belongs there. You want the second behavior almost always.

While you are in `/settings`, note which model version you are on. Version 5.2 is the current default and the one these tools were built around.

## Step 2: Upscale before you edit

Vary (Region) only appears on an **upscaled** image, not on the initial 2x2 grid. So the flow is always:

1. Run your prompt with `/imagine`
2. Pick the best of the four results with `U1`–`U4`
3. Now you get the editing buttons

Under the upscaled image you will see a row including **Vary (Subtle)**, **Vary (Strong)**, **Vary (Region)**, **Zoom Out 2x**, **Zoom Out 1.5x**, **Custom Zoom**, and the four arrow buttons for Pan.

## Step 3: Use Vary (Region) to fix one thing

Click **Vary (Region)**. An editor opens with your image and two selection tools at the bottom left: a rectangle and a freehand lasso.

Select the area you want to change, type what should be there, and submit. A few rules that matter more than they sound:

**Select generously.** A selection that hugs the object too tightly gives Midjourney no room to blend. If you are replacing a hat, include some hair and forehead around it. Tight selections produce hard seams.

**Do not select tiny areas.** Regions smaller than roughly 20% of the frame tend to produce mush. Midjourney needs enough canvas to render something coherent. If you want to fix a single finger, select the whole hand and wrist.

**Describe the whole region, not just the change.** If you lasso a table and type "a coffee cup," you may get a cup floating in void. Type "a ceramic coffee cup on a dark wooden table, morning light" and you get something that sits in the scene.

**One change at a time.** Two scattered selections in a single pass fight each other. Fix the hand, submit, then fix the background in the next round.

You will get a new 2x2 grid where only the selected region differs. Upscale the best one and continue editing from there if needed.

## Step 4: Common Vary (Region) recipes

**Broken hands.** Lasso the entire hand plus some forearm. Prompt something like "a relaxed open hand, five fingers, natural anatomy." Expect three or four attempts. This is still the hardest fix in the tool.

**Removing an object.** Select the object plus surrounding context and describe what should be there instead — "empty grass field," "plain brick wall." Do not prompt "remove the sign"; Midjourney does not think in negatives here, it thinks in replacements.

**Changing clothing or color.** Select the garment generously and describe the new version with material and fit: "a fitted navy wool coat with brass buttons." Material words do more work than color words.

**Fixing text.** Honest answer: do not. Midjourney in 2023 does not render reliable text, and region edits will not rescue it. Generate the image without text and add real type in Canva, Figma, or Photoshop afterward.

**Adding a subject.** Select empty space and describe the subject with scale and lighting cues: "a small black cat sitting, lit from the left, matching shadow." Scale cues stop the classic giant-cat problem.

## Step 5: Zoom Out to expand the frame

Zoom Out does the opposite job — it keeps your image intact and invents new content around it. This is how you turn a tight portrait into an environmental shot.

**Zoom Out 1.5x** adds a modest border. Good for giving a cramped subject breathing room or making a headshot usable as a wider crop.

**Zoom Out 2x** pulls back hard. Your original becomes the centre quarter of the new frame. Good for revealing a full body or a whole room.

**Custom Zoom** is the one worth learning. It opens a dialog with your prompt and a `--zoom` parameter between 1 and 2. Two things you can do here that the buttons cannot:

- **Edit the prompt** to steer what appears in the new space. Zoom out from a portrait while changing "studio background" to "rainy city street at night" and the surroundings follow.
- **Change aspect ratio without adding zoom.** Set `--zoom 1` and change `--ar` to `16:9`, and Midjourney extends the sides to fill the new shape without shrinking your subject. This is the cleanest way to turn a square render into a banner.

## Step 6: Pan for directional extension

The four arrow buttons extend the canvas in one direction only, which is more surgical than zooming. Press the down arrow to reveal the ground and a subject's feet. Press left or right to build a wide panorama step by step.

Two caveats. Once you pan horizontally, the vertical arrows disappear for that image — you can extend on one axis per lineage, not both. And with Remix on, each pan gives you a prompt box, which is how you make the new territory contain something specific instead of more of the same.

## Pitfalls to avoid

**Stacking too many operations.** Every pass re-renders the whole image. Five rounds of region edits and zooms leave you with softer detail and drifting style. Get the base render as close as possible first — editing is for the last 10%, not the first 50%.

**Forgetting Remix mode.** Half the "these tools do not work" complaints are Remix being off. Check `/settings` before you blame the model.

**Burning fast hours on cleanup.** Every attempt costs GPU minutes. As of October 2023, paid plans start around $10/month for Basic with roughly 200 image generations, with Standard at about $30/month adding unlimited relaxed generations. There is no free trial at the moment. Prices and allowances change — check the current plan page. If you are doing heavy iterative cleanup on the Basic plan, you will run out fast.

**Expecting Photoshop precision.** Vary (Region) is a generative fill, not a selection-based editor. It will not preserve exact pixels at the boundary, and it will sometimes change things just outside your selection. For pixel-accurate work, export and finish in a real editor.

## Where this fits in a workflow

A realistic 2023 pipeline looks like this: prompt in Midjourney until composition and mood are right, use Vary (Region) for two or three targeted fixes, use Custom Zoom to reach your final aspect ratio, then take it into an editor for text, colour grading, and any pixel-level retouching.

If you want more precise mask control than Midjourney offers, Stable Diffusion's inpainting is the alternative — it gives you real mask painting, denoising strength, and model choice, at the cost of setup. Our [Stable Diffusion inpainting guide](/tutorials/stable-diffusion-inpainting-guide-2023/) covers that path. And if you are still deciding which generator to build a workflow around in the first place, our [Midjourney vs DALL-E 3 comparison](/compare/midjourney-vs-dalle3/) breaks down where each one wins.

The short version: stop re-rolling prompts. The image you already like is usually three region edits away from being finished.
