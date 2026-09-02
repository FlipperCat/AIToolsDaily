---
title: "Stable Diffusion XL 1.0 Review (2023): The Open-Source Image Model Finally Catches Up"
description: "SDXL 1.0 reviewed: image quality vs SD 1.5 and Midjourney, the base-plus-refiner workflow, hardware needs, ecosystem gaps, and whether to switch now."
date: 2023-07-29
updated: 2025-06-21
categories: ["Reviews"]
tags: ["stable-diffusion", "sdxl", "stability-ai", "ai-image-generation", "open-source", "comfyui"]
affiliate_disclosure: true
faqs:
  - question: "Can I run SDXL on my GPU?"
    answer: "Stability AI suggests 8GB of VRAM as a practical minimum, and that holds for the base model at 1024x1024 with half-precision weights, though it is slow. Adding the refiner in the same session pushes you toward 12GB for a comfortable experience. If you are on a 4GB or 6GB card, stick with SD 1.5 for now or use a hosted service like Clipdrop or DreamStudio."
  - question: "Is SDXL better than Midjourney?"
    answer: "On default settings with a short prompt, Midjourney v5.2 still produces a more polished image more often. SDXL closes most of the gap, and it wins on control: you can run it locally, tune every parameter, fine-tune it, and use it commercially without a subscription. If you value convenience, Midjourney. If you value control and cost, SDXL is now a real alternative."
  - question: "Do I need to use the refiner model?"
    answer: "No. The base model alone produces complete images, and many outputs look fine without the second pass. The refiner improves fine detail, skin texture, and small elements in the last portion of the denoising process. It is worth using for portraits and detailed scenes, and worth skipping for quick iteration or if VRAM is tight."
---

Stability AI released Stable Diffusion XL 1.0 on July 26, and after three days of generating everything from product mockups to fantasy landscapes, the short version is this: the open-source image model is no longer the one you use because it is free and tolerable. It is the one you use because it is good.

That was not true of SD 1.5, which needed a stack of community fine-tunes, a paragraph of negative prompts, and a fair amount of luck to compete with Midjourney. SDXL 1.0 changes the baseline. Here is what it does well, where it still trails, and whether it is time to switch.

## What It Is

SDXL 1.0 is the newest open-weights text-to-image model from Stability AI, the successor to SD 1.5 and the largely ignored SD 2.x line. It generates at a native 1024x1024, four times the pixels of SD 1.5's 512x512, and it uses a much larger backbone: the base model is roughly 3.5 billion parameters, and it pairs two text encoders instead of one, which is a big part of why it understands prompts better.

The release ships as two models. The **base** model generates the image. The optional **refiner** model takes over for the final steps of denoising to add detail. You can run base alone, or hand off to the refiner for the last 20 percent or so of steps.

A 0.9 preview went out to researchers in June. The 1.0 release is the first version with open weights for everyone, under the CreativeML Open RAIL++-M license, which allows commercial use. The weights are on Hugging Face, and the model is also available hosted through Clipdrop, DreamStudio, and the Stability API.

## Key Features

**Prompts in plain language.** This is the biggest day-to-day change. SD 1.5 rewarded a prompt dialect of comma-separated tags and quality incantations ("masterpiece, best quality, 8k, highly detailed"). SDXL responds to sentences. "A ceramic coffee mug on a wooden desk, morning light from a window on the left, shallow depth of field" gets you what you asked for, with the light where you put it. Negative prompts help less than they used to and are no longer mandatory.

**Legible text, sometimes.** SD 1.5 could not write a word. SDXL can produce short words and simple signage correctly a reasonable fraction of the time. It is not reliable, and anything longer than a couple of words degrades fast, but for a logo concept or a storefront sign it is usable in a way that was impossible before. If text is the whole point, you are still better off adding it in a design tool afterward.

**Better anatomy.** Hands are improved. Not solved, but the ratio of usable hands in a batch of eight portraits went from roughly one in four with 1.5 to more than half. Faces at a distance, which 1.5 mangled, come out coherent.

**Aspect ratios.** SDXL was trained on multiple aspect ratios around one megapixel, so wide and tall images work without the stretched-duplicate artifacts SD 1.5 produced outside its square comfort zone. A 1344x768 landscape looks like a landscape, not two squares stitched together.

**Style range.** Photography, illustration, 3D render, watercolor, pixel art: SDXL covers a wider range convincingly from the base model without needing a specialized checkpoint for each.

## Pros

- **Quality is close to Midjourney out of the box.** For the first time, the open model is a serious answer to "which one should I use" rather than a budget option.
- **Free and local.** No credits, no subscription, no content filter beyond what you choose to apply, no queue.
- **Commercial use allowed.** The license is clear, which matters for anyone doing client work.
- **Works day one in ComfyUI.** The node-based UI supports the base-plus-refiner pipeline natively. Automatic1111 added SDXL base support in its 1.5.0 release this week.
- **Shorter, saner prompts.** Less time fighting the model.

## Cons and Limitations

- **Hardware requirements jumped.** SD 1.5 ran on almost anything. SDXL wants 8GB of VRAM at minimum and is happier with 12GB or more. Generation is also two to three times slower per image at 1024x1024 than 1.5 at 512x512.
- **The ecosystem starts from zero.** Every LoRA, textual inversion, and ControlNet model built for SD 1.5 is incompatible. Community fine-tunes will come, but as of this week there are almost none. ControlNet for SDXL does not exist yet. If your workflow depends on those tools, you are not switching this month.
- **The refiner is awkward outside ComfyUI.** In Automatic1111 the refiner currently means a manual img2img pass or an extension. It works, but it is not the seamless handoff Stability describes.
- **Text is still a gamble.** Better than nothing, worse than a design tool.
- **Some outputs look over-smoothed.** The refiner in particular can produce skin and surfaces that look airbrushed. Lowering its share of steps helps.

## Pricing

The weights are free. Everything below is approximate as of late July 2023:

- **Local:** free, plus whatever GPU you own or rent.
- **DreamStudio:** credit-based. Around $10 buys roughly 1,000 credits, and a default SDXL image costs a little more per generation than SD 1.5 did, so figure a cent or two per image.
- **Clipdrop:** SDXL 1.0 is available on the free tier with limits, and a Pro plan in the low tens of dollars per month removes them. Our [Clipdrop review](/reviews/clipdrop-review-2023/) covers the rest of its toolkit.
- **Third-party platforms:** [Leonardo AI](/reviews/leonardo-ai-review-2023/) and others are rolling SDXL into their own credit systems.

## Who It's For

**People who already run Stable Diffusion locally.** Upgrade your hardware if needed and start learning the base-plus-refiner workflow now. Our guide to [running Stable Diffusion locally with Automatic1111](/tutorials/run-stable-diffusion-locally-automatic1111/) still covers the setup; swap in the SDXL checkpoint.

**Anyone doing commercial image work who does not want a subscription.** The license and the quality make this the first open model where that trade is clearly worth it.

**Midjourney users who want more control.** If you have hit the ceiling of what a Discord bot lets you adjust, SDXL is where you go next.

It is a poor fit for anyone with a low-VRAM GPU, anyone whose workflow depends on the 1.5 ecosystem of LoRAs and ControlNet, and beginners who want the easiest possible path to a good image. For that last group, the [Midjourney beginner guide](/midjourney-beginner-guide-2023/) is still the fastest route.

## Verdict

SDXL 1.0 is the most important open-source image release since the original Stable Diffusion. The quality gap with closed models has gone from obvious to arguable, prompting is simpler, and the license is friendly. The costs are a heavier hardware requirement and an ecosystem that will take months to rebuild.

If you are choosing between DALL-E 2 and Stable Diffusion, as our [earlier comparison](/compare/dalle-2-vs-stable-diffusion-2023/) framed it, the answer just got much easier. If you are choosing between SDXL and Midjourney, it is now a real choice about control versus convenience rather than quality. That is a big shift, and it happened in one release.
