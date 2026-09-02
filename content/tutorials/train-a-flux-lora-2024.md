---
title: "How to Train a Flux LoRA (2024): Put Yourself, Your Product, or Your Style Into Flux"
description: "Train a Flux.1 LoRA in 2024, step by step: dataset prep, captions and trigger words, cloud vs local training, settings that work, and use in ComfyUI."
date: 2024-09-18
updated: 2026-02-11
categories: ["Tutorials"]
tags: ["flux", "lora", "black-forest-labs", "ai-image-generation", "replicate", "comfyui"]
affiliate_disclosure: true
faqs:
  - question: "How many images do I need to train a Flux LoRA?"
    answer: "For a person or a product, 10 to 20 good images is the sweet spot. Fewer than 8 and the model overfits to specific photos; more than 30 rarely helps and slows training. For an art style, 20 to 40 varied images works better because you want the model to learn what the images have in common, not any single one."
  - question: "How much does it cost to train one?"
    answer: "On a hosted trainer like Replicate or fal, a typical run of around 1,000 steps costs a few dollars, usually in the $2 to $5 range depending on settings and how long the GPU is occupied. Local training is free once you own a GPU with 24GB of VRAM, or roughly a dollar an hour on a rented cloud GPU."
  - question: "Can I use a Flux LoRA commercially?"
    answer: "It depends on the base model. Flux.1 [schnell] is Apache 2.0, so anything goes. Flux.1 [dev], which most LoRA trainers use because it produces better results, has a non-commercial license for the model itself. Hosted services like Replicate and fal have commercial arrangements for outputs generated on their platforms, so check the terms of wherever you run inference before selling the images."
---

Flux.1 has been out for about six weeks and it has already done something Stable Diffusion never quite managed: it made people stop asking whether an open model can match Midjourney. What it did not ship with was a way to teach it new things. That gap closed fast. Trainer scripts and hosted services appeared within weeks, and training a LoRA on Flux is now easier than it ever was on SDXL.

A LoRA is a small add-on file that steers a base model toward a specific subject or style without retraining the whole thing. Train one on 15 photos of yourself and Flux can put you in scenes it has never seen. Train one on your product photography and you get consistent packshots. Train one on a sketchbook and you get your line work at scale.

This guide walks through the whole process. If you have not used Flux yet, our [Flux.1 review](/reviews/flux-ai-review-2024/) covers what the model is and how the three variants differ.

## Step 1: Decide what you are actually training

The three common cases need slightly different datasets, so pick before you gather images.

- **A subject** (a person, a pet, a specific object): you want the model to learn one thing precisely. Variety in everything except the subject.
- **A product**: like a subject, but you usually care about angles and lighting consistency. Include the packaging, the label, and the product in use.
- **A style**: you want the model to learn a visual language, not a thing. Variety in subject matter, consistency in technique.

Do not try to train a subject and a style in one LoRA on your first attempt. Two LoRAs stack at inference time; one confused LoRA does not.

## Step 2: Collect and clean your images

Aim for 10 to 20 images for a subject or product, 20 to 40 for a style.

What matters more than the count:

- **Variety of angles, lighting, and backgrounds.** If every photo of you is a selfie in the same room, the model learns the room.
- **Sharpness.** Blurry or heavily compressed images produce blurry outputs. Crop tight if needed.
- **No other people.** For a subject LoRA, other faces in the frame confuse the training. Crop them out.
- **Resolution of at least 1024 on the short side.** Flux trains well at 1024, and most trainers will downscale, not upscale.

Rename the files to something simple, put them in a folder, and zip it. Every hosted trainer takes a zip.

## Step 3: Captions and the trigger word

Flux LoRAs are surprisingly forgiving about captions, which is a change from Stable Diffusion, where caption quality made or broke a run.

**Pick a trigger word.** A rare token the model has no prior association with: `TOK`, `ohwx`, your initials mashed together. You will use it in every prompt to activate the LoRA. Avoid real words and real names.

**For subjects and products,** short captions help. Each image gets a text file with the same name containing something like: `a photo of TOK, a woman with short dark hair, standing outdoors, overcast light`. Describe everything that is *not* the subject in detail and the subject itself only briefly. This teaches the model that TOK is the constant and everything else is variable.

**For styles,** many people skip captions entirely and get good results, since the model learns what is common across the set. If you do caption, describe the content of each image and let the trigger word carry the style.

Most hosted trainers will auto-caption for you using a vision model if you do not supply text files. That is fine for a first attempt.

## Step 4: Choose where to train

**Hosted (easiest).** Replicate's Flux dev LoRA trainer and fal.ai's fast trainer both take a zip, a trigger word, and a few settings, and return a LoRA file in 15 to 30 minutes. Civitai has added on-site Flux training as well. Cost is a few dollars per run. This is the right choice for almost everyone the first time.

**Local (cheapest at volume).** Ostris's AI Toolkit is the most widely used script and has a config file specifically for Flux dev. Kohya's training scripts added Flux support in their development branch. Both want 24GB of VRAM; a 4090 works, a 3090 works, a 12GB card mostly does not yet without aggressive tricks. Expect an hour or so per run.

**Rented GPU.** If you want local control without buying hardware, an H100 or A100 on RunPod or Vast for an hour costs a few dollars and runs AI Toolkit fine.

## Step 5: Settings that work

Every trainer exposes roughly the same knobs. Sensible defaults for Flux dev as of September 2024:

- **Steps:** 1,000 for a subject with 15 images. Go to 1,500 or 2,000 for a style with more images. Overtraining shows up as outputs that copy your training photos exactly.
- **Learning rate:** around `4e-4` (0.0004). This is higher than SD LoRA norms and it is what the Flux trainers default to for a reason.
- **LoRA rank:** 16 is the default and works. 32 captures more detail for complex styles at the cost of a larger file.
- **Resolution:** 1024, or multi-resolution training at 512, 768, and 1024 if your trainer offers it. Multi-res makes the LoRA more robust at different output sizes.
- **Batch size:** 1. Flux is memory-hungry and larger batches rarely help LoRA quality.

Leave everything else alone on your first run. Change one variable at a time afterward.

## Step 6: Test it properly

When training finishes you get a `.safetensors` file, usually 50 to 200MB. Before judging it:

1. **Generate at LoRA strength 1.0 with a plain prompt**: `a photo of TOK sitting in a cafe`. Does the subject look right?
2. **Push the scene**: `TOK as an astronaut on the moon, film photography`. A good LoRA keeps the subject and changes everything else. A bad one keeps the training background too.
3. **Sweep strength from 0.6 to 1.2.** Most Flux LoRAs look best between 0.8 and 1.0. If you need to go above 1.1 to see the subject, it is undertrained. If it looks like a collage of your training photos at 0.7, it is overtrained.
4. **Try it without the trigger word.** If the subject still appears, the LoRA has bled into the base model's general behavior, which usually means too many steps or a trigger word that was not rare enough.

If results are off, the fix is almost always the dataset, not the settings. Remove the weakest images and retrain.

## Step 7: Run it where you want

**ComfyUI** is the most complete option. Load Flux dev, add a "Load LoRA" node between the model and the sampler, point it at your file, and set strength. Our [ComfyUI vs Automatic1111 comparison](/compare/comfyui-vs-automatic1111-2024/) covers why ComfyUI is the better home for Flux right now.

**Forge**, the lighter fork of Automatic1111, added Flux support in August and loads LoRAs the same way it always has. If you set up the [original Automatic1111](/tutorials/run-stable-diffusion-locally-automatic1111/), Forge will feel familiar.

**Hosted inference.** Replicate and fal both have Flux endpoints that accept a LoRA URL, so you can train and generate without owning a GPU at all. Upload the file to Hugging Face and pass the link.

**Stacking.** Two LoRAs at once works: a subject at 0.9 plus a style at 0.6 is a common combination. Keep the total combined strength under about 1.6 or outputs get muddy.

## Common pitfalls

- **Training on dev, generating on schnell.** LoRAs trained on Flux dev do not transfer cleanly to schnell. Match them.
- **Faces at a distance.** Flux LoRAs nail close portraits but can lose likeness in wide shots. Add a few medium and full-body photos to the dataset.
- **Expecting Midjourney-style consistency for free.** Midjourney's character reference gets you part of the way with zero training, as noted in our [Midjourney v6 review](/midjourney-v6-review-2024/), but a trained LoRA is more faithful and more controllable once you have put the hour in.
- **License surprises.** Flux dev's non-commercial license covers the model, and a LoRA trained on it inherits that constraint. Read your inference provider's terms before using outputs in paid work.

The whole loop, from gathering photos to a first usable LoRA, takes under an hour on a hosted trainer. Start with a subject you know well so you can judge likeness, then move on to styles once you have a feel for how the settings behave.
