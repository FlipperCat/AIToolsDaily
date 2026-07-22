---
title: "How to Run Stable Diffusion Locally with AUTOMATIC1111 (2023 Guide)"
description: "Step-by-step guide to installing Stable Diffusion on your own PC with the AUTOMATIC1111 web UI: requirements, models, settings, and common fixes."
date: 2023-08-09
updated: 2025-06-14
categories: ["Tutorials"]
tags: ["stable-diffusion", "automatic1111", "ai-art", "local-ai", "image-generation"]
affiliate_disclosure: true
faqs:
  - question: "What GPU do I need to run Stable Diffusion locally?"
    answer: "An NVIDIA card with at least 4GB of VRAM will run Stable Diffusion 1.5, though 8GB or more makes life much easier. AMD cards work with extra setup steps, and Apple Silicon Macs can run it too, just slower. SDXL wants 8GB+ to be comfortable."
  - question: "Is running Stable Diffusion locally free?"
    answer: "Yes, completely. The model weights and the AUTOMATIC1111 web UI are free to download, and generation costs nothing beyond electricity. That's the core appeal versus paying per-image or per-month for cloud services."
  - question: "Can I use images from my local Stable Diffusion commercially?"
    answer: "Generally yes — the model license permits commercial use of outputs. Be sensible about it: avoid generating recognizable people, trademarked characters, or imitations of living artists' styles for commercial work, since the legal landscape is still unsettled."
---

Cloud image generators are convenient, but running Stable Diffusion on your own machine gets you unlimited generations, total privacy, no content filter false-positives, and access to a huge ecosystem of community models. The most popular way to do it is the AUTOMATIC1111 web UI — a free, browser-based interface that has become the de facto standard.

This guide takes you from nothing to generating images locally, based on setting this up on a mid-range gaming PC. Budget 30–60 minutes, most of it download time.

## What you need

- **GPU:** An NVIDIA card with 4GB+ VRAM minimum; 8GB+ recommended. A GTX 1660 will work; an RTX 3060 (12GB) is a sweet spot for the price. AMD and Apple Silicon are possible but need different install steps — this guide assumes NVIDIA on Windows.
- **Disk:** ~10GB for the software plus 2–7GB per model you download.
- **RAM:** 16GB system RAM recommended.

If your hardware falls short, stick with cloud options — our [Stable Diffusion review](/reviews/stable-diffusion-review/) covers the hosted ways to use the same model.

## Step 1: Install Python 3.10.6 and Git

AUTOMATIC1111 is picky about Python versions. Install **Python 3.10.6** specifically — newer 3.11 builds cause dependency failures.

1. Download Python 3.10.6 from python.org.
2. During install, **check "Add Python to PATH"**. This is the single most common setup mistake.
3. Install Git from git-scm.com with default options.

Verify both in a fresh Command Prompt: `python --version` should print 3.10.6, and `git --version` should print a version number.

## Step 2: Clone the web UI

Pick a location with room (not a cloud-synced folder like OneDrive), then:

```
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
```

This pulls down the interface but not the model itself — that's next.

## Step 3: Download a model checkpoint

The "model" is a checkpoint file containing the trained weights. Two sensible starting points:

- **Stable Diffusion 1.5** (`v1-5-pruned-emaonly.safetensors`, ~4GB) — the workhorse. Fast, runs on modest GPUs, and nearly all community extensions and fine-tunes target it.
- **SDXL 1.0** — Stability AI's new flagship, released a couple of weeks ago. Noticeably better hands, text, and composition, but it wants 8GB+ VRAM and generates more slowly.

Download from Hugging Face (search the model name; prefer `.safetensors` files over `.ckpt` — same content, safer format). Drop the file into:

```
stable-diffusion-webui\models\Stable-diffusion\
```

Later, browse Civitai for community fine-tunes — photorealistic models, anime models, illustration styles. Quality varies wildly, but the top-rated ones outperform base SD 1.5 for their niche.

## Step 4: First launch

Double-click `webui-user.bat` in the cloned folder. The first run installs several gigabytes of dependencies — let it grind. When you see `Running on local URL: http://127.0.0.1:7860`, open that address in your browser.

You should see the txt2img tab: a prompt box, a negative prompt box, and a grid of settings.

## Step 5: Generate your first image

Sensible starting settings:

- **Sampling method:** DPM++ 2M Karras
- **Sampling steps:** 25
- **Size:** 512×512 for SD 1.5 (it was trained at this size; going much larger in one pass causes duplicated limbs and mutant compositions)
- **CFG scale:** 7

Try a structured prompt: subject, style, lighting, detail keywords —

```
portrait of an old fisherman, weathered face, dramatic side lighting,
detailed oil painting, sharp focus
```

And a basic negative prompt:

```
blurry, deformed, extra fingers, watermark, text, low quality
```

Hit Generate. On an RTX 3060, expect roughly 5–10 seconds per image. Prompting technique transfers across tools, so much of our [Midjourney beginner guide](/midjourney-beginner-guide-2023/) applies here too — the difference is that locally, iteration is free, so generate in batches of four and iterate aggressively.

## Step 6: Level up with these settings and extensions

- **Hires. fix:** The right way to get large images from SD 1.5. It generates at 512px then upscales with a second diffusion pass. Start with 2x upscale and denoising strength around 0.4.
- **xformers:** Edit `webui-user.bat` and change the arguments line to `set COMMANDLINE_ARGS=--xformers` for a meaningful speed and VRAM improvement on NVIDIA cards.
- **Low VRAM flags:** On 4–6GB cards, add `--medvram` (or `--lowvram` as a last resort) to the same line.
- **ControlNet:** The most important extension in the ecosystem. Install it from the Extensions tab, and you can control composition with a pose skeleton, depth map, or line sketch instead of gambling on prompts. If you only install one extension, make it this.
- **Image browser / PNG Info:** Every image you generate embeds its full settings. Drag any past image into the PNG Info tab to recover the exact prompt and parameters.

## Common problems and fixes

- **"Torch is not able to use GPU":** Almost always the wrong Python version or an ancient GPU driver. Confirm 3.10.6, update your NVIDIA driver, delete the `venv` folder, and relaunch.
- **Out-of-memory errors:** Lower the resolution, add `--medvram`, or close Chrome (seriously — it's often the VRAM thief).
- **Every face is garbled:** Faces small in the frame render poorly at 512px. Use Hires. fix, or check "Restore faces," or generate portraits where the face fills more of the frame.
- **Images look washed out or generic:** Base SD 1.5 is a generalist. Grab a community checkpoint tuned for your target style — it's usually the biggest single quality jump available.

## Staying organized as you go deeper

A few habits that pay off quickly once you're past your first session:

- **Update the web UI weekly.** Development moves fast right now — run `git pull` in the install folder every so often to pick up fixes and new features. If an update breaks something, `git log` plus `git checkout` of the previous commit gets you back.
- **Name your models sensibly.** Once you have five checkpoints from Civitai, "model_final_v3.safetensors" tells you nothing. Rename files by style ("photoreal-", "anime-", "illustration-") so the checkpoint dropdown stays navigable.
- **Add a VAE if colors look flat.** Some checkpoints ship without a baked-in VAE and produce desaturated, slightly foggy images. Download the standard SD 1.5 VAE, drop it in `models\VAE`, and select it under Settings → Stable Diffusion.
- **Use the X/Y/Z plot script to learn settings.** Under Scripts on the txt2img tab, this generates a grid varying one parameter per axis — the same prompt across five CFG values and four samplers, in one click. It's the fastest way to build intuition about what each dial actually does instead of cargo-culting settings from Reddit.

## Is local worth it over cloud tools?

If you generate more than a handful of images a week, yes — the economics and control are unbeatable, and ControlNet alone enables workflows the hosted tools can't match yet. The costs are setup time, disk space, and being your own tech support. For a broader look at where the hosted alternatives fit, see our [2023 AI image generator guide](/ai-image-generators-2023-guide/).

Once it's running, the rabbit hole is deep: custom checkpoints, LoRAs, inpainting, img2img. Start with the basics above, keep notes on what settings produce what, and you'll be past "random slot machine" and into actual craft within a week.
