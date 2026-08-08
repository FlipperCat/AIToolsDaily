---
title: "How to Use ControlNet with Stable Diffusion (2024): Pose, Depth, and Line Control"
description: "Install ControlNet in AUTOMATIC1111 and learn which preprocessor to use for pose, depth, edges, and scribbles — plus the settings that fix most bad results."
date: 2024-02-21
updated: 2025-11-04
categories: ["Tutorials"]
tags: ["controlnet", "stable-diffusion", "automatic1111", "ai-art", "image-generation"]
affiliate_disclosure: true
faqs:
  - question: "Do I need ControlNet if my prompts already work?"
    answer: "Only if you need the output to match a specific composition. Prompts control what appears in an image; ControlNet controls where it appears. If you are generating freely and like what you get, you do not need it. If you keep regenerating because the pose or framing is wrong, ControlNet solves exactly that problem."
  - question: "Which ControlNet model should I start with?"
    answer: "Start with Canny and Depth. Canny is the most forgiving for preserving the shape of a reference image, and Depth is the most useful for keeping a scene's spatial layout while changing its style. Add OpenPose once you are comfortable, since pose work has more failure modes."
  - question: "Will ControlNet run on a 6GB GPU?"
    answer: "Usually yes for a single ControlNet unit at 512x512 with SD 1.5 models, though you may need low-VRAM mode enabled in settings. SDXL ControlNets are considerably heavier and are uncomfortable below roughly 10-12GB. Multi-ControlNet with two or three units stacked increases memory use significantly."
---

## How to Use ControlNet with Stable Diffusion (2024)

Prompting tells Stable Diffusion *what* to draw. ControlNet tells it *where*. That is the entire pitch, and once it clicks, the number of times you reroll a generation drops through the floor.

ControlNet works by taking a reference image, extracting some structural signal from it — an edge map, a depth map, a stick-figure skeleton — and constraining the diffusion process to follow that structure. You keep the composition and change everything else.

This guide assumes you already have Stable Diffusion running locally. If you don't, start with our walkthrough on [running Stable Diffusion locally with AUTOMATIC1111](/tutorials/run-stable-diffusion-locally-automatic1111/) and come back.

## Step 1: Install the ControlNet Extension

In AUTOMATIC1111, go to **Extensions → Available → Load from**, find `sd-webui-controlnet`, and click Install. If it doesn't appear, use **Extensions → Install from URL** and paste the repository URL directly.

Restart the web UI completely — not just "Apply and restart UI," but a full stop and start of the process. Half the "ControlNet isn't showing up" reports come from a partial reload.

After restarting you should see a collapsible **ControlNet** panel below the generation parameters in both txt2img and img2img.

## Step 2: Download the Models

The extension is just the plumbing. You need the actual ControlNet model weights, and they go in:

```
stable-diffusion-webui/extensions/sd-webui-controlnet/models/
```

Download the ControlNet 1.1 models from Hugging Face. You do not need all of them. Start with four:

- **canny** — edge detection, best all-round starting point
- **depth** — spatial layout and distance
- **openpose** — human body pose
- **lineart** — clean line extraction, excellent for illustration work

Each full model is roughly 1.4GB. Pruned or fp16 versions are around 700MB and work fine for nearly everyone — grab those if disk space matters.

**Critical:** your ControlNet models must match your base model family. SD 1.5 ControlNets do not work with SDXL checkpoints and vice versa. Mismatched pairs produce noise or throw dimension errors.

After copying the files in, hit the refresh arrow next to the model dropdown in the ControlNet panel.

## Step 3: Understand Preprocessor vs Model

This is the single most common source of confusion, so be clear on it:

- The **preprocessor** converts your reference image into a control map (edges, depth, skeleton).
- The **model** is the trained network that reads that control map and steers generation.

They must correspond. Preprocessor `canny` pairs with model `control_v11p_sd15_canny`. Preprocessor `depth_midas` pairs with `control_v11f1p_sd15_depth`. Mixing them — a depth preprocessor with a canny model — produces garbage that is hard to diagnose because nothing errors out.

If you already have a control map (say, an OpenPose skeleton someone shared), set preprocessor to **none** and feed the map in directly.

## Step 4: Your First Generation

Let's do the simplest useful case — restyle a photo while keeping its exact composition.

1. Open **txt2img** and write your prompt normally. Something like: `oil painting of a woman standing in a field, impressionist, thick brushstrokes, warm afternoon light`
2. Expand the **ControlNet** panel and tick **Enable**
3. Drop your reference photo into the image box
4. Set **Preprocessor** to `canny`, **Model** to the canny ControlNet
5. Click the explosion icon (💥) next to the preprocessor to preview the edge map — do this every time, it takes a second and saves you a bad generation
6. Generate

The output should follow your reference's shapes while adopting the style from your prompt.

If the edge map preview looks like a tangled mess, lower the **Canny high threshold**. If it looks nearly empty, lower the **low threshold**. Roughly 100/200 is a sane default; a busy photo may want 150/250.

## Step 5: Pick the Right Preprocessor for the Job

| Goal | Use | Notes |
|------|-----|-------|
| Keep exact outlines of a photo | canny | Most literal. Rigid but reliable. |
| Keep spatial layout, change everything else | depth | Best for interiors, landscapes, architecture. |
| Copy a human pose | openpose | Use `openpose_full` to include hands and face. |
| Turn a sketch into a finished image | scribble | Very loose — leaves the model room to interpret. |
| Clean up and color line art | lineart / lineart_anime | The anime variant is genuinely better on illustration. |
| Preserve rough composition only | seg or softedge | softedge is the forgiving middle ground between canny and scribble. |
| Upscale with added detail | tile | Pair with img2img at high resolution. |

If you're unsure, run **softedge**. It sits between canny's rigidity and scribble's looseness and fails gracefully.

## Step 6: The Three Settings That Fix Most Problems

Once ControlNet is working, almost all of your tuning happens through three sliders.

**Control Weight (default 1.0).** How hard the control map is enforced. Drop it to 0.5–0.7 when the output looks stiff, traced, or ignores your prompt's style. Push it to 1.2–1.5 when the model keeps drifting off the reference. Above about 1.6 you usually get artifacts.

**Starting/Ending Control Step (default 0 to 1).** ControlNet doesn't have to be active for the whole denoising process. Setting the end step to around 0.7 means the last 30% of steps run unconstrained, which lets the model resolve fine detail and texture naturally. This one change fixes the "looks like a coloring book" problem more often than anything else.

**Control Mode.** Three options: *Balanced*, *My prompt is more important*, *ControlNet is more important*. When your prompt is being overpowered by the reference, switch to prompt-priority. When the composition keeps wandering, switch the other way.

## Step 7: Multi-ControlNet

In **Settings → ControlNet**, raise "Multi-ControlNet: max models" to 2 or 3, then restart. You'll get tabbed units in the panel.

The genuinely useful combination is **OpenPose + Depth**: pose locks the figure's stance, depth locks the environment around them. Drop each unit's weight to roughly 0.6–0.8 when stacking, because two units at full strength fight each other and over-constrain the image.

Another good pair is **Lineart + Tile** for upscaling illustration while keeping line integrity.

## Common Pitfalls

**Hands still look wrong.** OpenPose hand keypoints are unreliable at small scales. Generate at higher resolution, or fix hands separately with inpainting.

**The output looks traced.** Weight too high, or ending control step at 1.0. Lower both.

**ControlNet appears to do nothing.** Check that Enable is actually ticked — it resets in some workflows — and confirm the preprocessor preview is producing a non-empty map.

**Out-of-memory errors.** Enable Low VRAM in the ControlNet panel, reduce the ControlNet preprocessor resolution (it doesn't need to match your output resolution), and drop to one unit.

**Colors bleed strangely with depth.** Depth maps carry no color information, so the model invents it. Be explicit about color in your prompt.

## Where This Fits

ControlNet is what moves local Stable Diffusion from "slot machine" to "tool." It is also the clearest practical advantage local generation still has over the closed hosted services — that structural control simply isn't exposed in the same way elsewhere, which is a large part of why the [Midjourney vs Stable Diffusion](/compare/midjourney-vs-stable-diffusion/) question keeps coming down to how much control you need. For a wider look at what the base model can and can't do, see our [Stable Diffusion review](/reviews/stable-diffusion-review/).

Start with canny and depth on photos you already have. Once you can reliably restyle an image while keeping its composition, everything else here is a variation on the same idea.
