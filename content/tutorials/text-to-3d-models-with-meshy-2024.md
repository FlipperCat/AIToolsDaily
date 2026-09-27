---
title: "How to Create 3D Models with Meshy (2024): Text and Image to 3D, Step by Step"
description: "Hands-on Meshy tutorial: generate 3D models from text or images, retexture them, clean them up in Blender, and export game-ready files without modeling skills."
date: 2024-05-21
updated: 2026-03-04
categories: ["Tutorials"]
tags: ["meshy", "3d modeling", "text to 3d", "game development", "blender"]
affiliate_disclosure: true
faqs:
  - question: "Are Meshy models good enough for real games?"
    answer: "For background props, prototypes, and indie projects, often yes after some cleanup. For hero assets and characters that need animation, you'll usually want to retopologize or use the output as a starting point for a hand-built model. Meshes tend to be dense and topology is irregular."
  - question: "Can I use Meshy models commercially?"
    answer: "As of May 2024, paid plans include commercial use of generated assets, while free-tier output comes with more restrictive terms. Terms change, so read Meshy's current licensing page before shipping anything in a commercial product."
  - question: "What file formats does Meshy export?"
    answer: "Common formats including GLB, FBX, OBJ, and USDZ, which cover Blender, Unity, Unreal, and most web and AR viewers. GLB is usually the easiest choice because it bundles geometry and textures in one file."
  - question: "Do I need Blender to use Meshy?"
    answer: "No, you can generate and download models entirely in the browser. But a short pass in Blender or another 3D tool to reduce polygon count, fix scale, and check textures makes a big difference to how usable the asset is."
---

Making a 3D model used to mean hours in Blender learning topology, UV unwrapping, and texture painting. AI text-to-3D tools compress the first draft into minutes. **Meshy** is one of the most accessible: a browser app that turns a text prompt or a reference image into a textured 3D model you can download and drop into a game engine.

The output isn't perfect, and this guide is honest about that. But used the right way, Meshy is a fast way to fill a scene with props, prototype a game, or give a 3D artist a head start. Here's the full workflow as of May 2024.

## What You'll Need

- A free Meshy account (meshy.ai)
- Optionally, reference images, which can come from a photo or an AI image generator like [Leonardo](/reviews/leonardo-ai-review-2023/) or [Stable Diffusion](/reviews/stable-diffusion-review/)
- Optionally, Blender (free) for cleanup
- A target: a game engine, a 3D viewer, or a 3D printer

## Step 1: Understand Credits Before You Start

Meshy runs on credits. Every generation, refinement, and retexture costs some. The free tier gives a modest monthly allowance, enough to learn the tool and make a handful of finished models. Paid plans (starting around $20/month as of May 2024, approximate) add far more credits, faster queues, and commercial rights.

The practical rule: **previews are cheap, refinements are expensive.** Generate several previews, pick the best, and only refine that one.

## Step 2: Choose Text-to-3D or Image-to-3D

Meshy offers two main entry points:

- **Text to 3D:** best when you don't have a reference and the object is generic, like "wooden treasure chest with iron bands" or "sci-fi fuel canister."
- **Image to 3D:** best when you need a specific look. Upload a clean image of a single object and Meshy infers the 3D shape.

As a rule of thumb, image-to-3D gives more predictable results for anything with a distinctive design, while text-to-3D is faster for filler props.

## Step 3: Write a Prompt That 3D Models Well

3D prompts need different habits from image prompts:

1. **Describe one object.** "A medieval lantern" works. "A medieval street with lanterns and a cart" doesn't; you'll get a mushy blob.
2. **Specify materials.** "Brass frame, frosted glass panels, rusted edges" drives both shape and texture.
3. **Pick an art style.** Meshy offers style options (realistic, cartoon, low-poly, and others). Match your project's look from the start.
4. **Use the negative prompt.** Add things like "base, platform, multiple objects, text" to avoid common artifacts.
5. **Keep it symmetrical when possible.** Symmetric objects such as chests, bottles, and helmets reconstruct far better than irregular organic shapes.

Example prompt: *"Stylized fantasy health potion, round glass bottle, cork stopper, glowing red liquid, leather strap around the neck, game asset."*

## Step 4: Generate Previews and Pick a Winner

Meshy returns several preview models, untextured or roughly shaded. Rotate each one in the viewer and check:

- **Silhouette:** does it read clearly from every angle?
- **The back and bottom:** AI models often look great from the front and melt on the back.
- **Thin parts:** handles, straps, and blades are where generation fails most.

If none work, adjust the prompt rather than regenerating blindly. Usually a missing material or style cue is the culprit.

## Step 5: Refine and Texture

Select the best preview and run the refine step. This produces a higher-detail mesh with full textures, and it's where most of your credits go.

After refining, check the textures up close. Common problems:

- **Baked-in lighting:** shadows painted onto the texture that look wrong under your engine's lights.
- **Blurry or smeared areas**, often on the underside.
- **Seams** where texture patches meet.

Meshy's **AI texturing** feature lets you retexture an existing model with a new prompt. It's useful when the shape is right but the surface isn't, and it's also handy for making variants, such as the same crate in wood, metal, and stone.

## Step 6: Export in the Right Format

Download the model in the format your destination expects:

| Destination | Recommended format |
|---|---|
| Blender (for cleanup) | GLB or FBX |
| Unity | FBX or GLB |
| Unreal Engine | FBX |
| Web / three.js viewers | GLB |
| Apple AR Quick Look | USDZ |
| 3D printing | OBJ (then convert to STL) |

GLB is the least fussy because textures travel inside the file.

## Step 7: Clean Up in Blender (Don't Skip This)

Raw AI meshes are usually heavy and messy. A 10-minute Blender pass makes them usable:

1. **Check scale and orientation.** Imported models are often the wrong size or rotated. Apply transforms (Ctrl+A) once fixed.
2. **Reduce polygon count.** Add a **Decimate** modifier and lower the ratio until detail starts to break down. Props often survive a large reduction with little visible loss.
3. **Merge stray vertices.** In Edit Mode, use Merge by Distance to close tiny gaps.
4. **Set the origin.** Put the origin at the base of the object so it sits on the ground properly in your engine.
5. **Inspect textures in Material Preview** under neutral lighting to catch baked-in shadows.
6. **Re-export** as FBX or GLB.

For characters or anything you plan to animate, consider a remesh or manual retopology. Meshy's topology isn't built for clean deformation.

## Tips for Better Results

- **Generate concept art first.** Create a clean, front-facing image of your object on a plain background in an image generator, then run image-to-3D. This two-step pipeline gives more control than text alone. If you already run a local image setup, see our [ComfyUI vs AUTOMATIC1111 comparison](/compare/comfyui-vs-automatic1111-2024/) for picking a front end.
- **Batch similar props in one session** with a consistent style setting so your scene looks cohesive.
- **Keep a prompt log.** When a prompt works, save it. Small wording changes swing results a lot.
- **Use it for the 80%.** Let Meshy fill a scene with barrels, rocks, and furniture, and spend your manual modeling time on the few assets players actually look at.

## Common Pitfalls

- **Expecting animation-ready characters.** You'll get a statue, not a rigged character. Rigging requires extra tools and cleanup.
- **Prompting whole scenes.** One object per generation.
- **Ignoring polygon counts.** Dropping dozens of unoptimized AI meshes into a game will hurt performance fast.
- **Skipping the license check.** Free-tier assets may not be cleared for commercial use.
- **Trusting the thumbnail.** Always orbit the model and look underneath before refining.

## Is Meshy Worth It?

For indie developers, prototypers, 3D printing hobbyists, and anyone who needs "good enough" props quickly, Meshy is a real time-saver. The free tier is enough to find out whether it fits your pipeline. Professional 3D artists will find it most useful as a blockout and ideation tool rather than a replacement for hand-built hero assets.

The workflow that works best: **concept image, then Meshy, then a quick Blender cleanup, then your engine.** Stick to that and you'll get usable assets in minutes rather than hours.
