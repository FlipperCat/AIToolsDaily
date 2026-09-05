---
title: "How to Use Civitai Models and LoRAs in Automatic1111 (2023)"
description: "Step-by-step guide to finding, vetting, installing, and using Civitai checkpoints, LoRAs, and embeddings in the Automatic1111 Stable Diffusion web UI."
date: 2023-03-09
updated: 2025-04-14
categories: ["Tutorials"]
tags: ["civitai", "stable diffusion", "automatic1111", "lora", "image generation"]
affiliate_disclosure: true
faqs:
  - question: "Is Civitai free to use?"
    answer: "Yes. Browsing and downloading models on Civitai is free, and you do not need an account to download most files. An account lets you save favorites, follow creators, post your own images, and toggle content filters. The cost is on your side: you need a machine capable of running Stable Diffusion, or a cloud GPU rental."
  - question: "What is the difference between a checkpoint and a LoRA?"
    answer: "A checkpoint is a complete Stable Diffusion model, usually 2 to 7 GB, that replaces the base model entirely. A LoRA is a small add-on file, typically 10 to 200 MB, that nudges an existing checkpoint toward a style, character, or concept. You always need a checkpoint loaded; LoRAs stack on top of it and can be mixed and weighted."
  - question: "Are .ckpt files from Civitai safe to download?"
    answer: "Not automatically. The .ckpt format uses Python pickle serialization, which can execute code when the file is loaded. Civitai scans uploads and shows a scan status, but the safer habit is to prefer .safetensors versions, which cannot contain executable code. Most popular models now offer a safetensors download."
---

If you have [Automatic1111 running locally](/tutorials/run-stable-diffusion-locally-automatic1111/), you have probably noticed that the base Stable Diffusion 1.5 model is fine at landscapes and rough concept art but mediocre at almost everything people actually want: consistent characters, clean anime, photorealistic portraits, product shots. The community fixed that problem by fine-tuning thousands of specialized models, and Civitai is where nearly all of them live.

This guide walks through the full loop: finding a model, checking that it will work with your setup, installing it in the right folder, and reproducing the sample images so you know it is working before you start experimenting.

## What Civitai actually hosts

Civitai launched in late 2022 as a sharing site for Stable Diffusion resources. Four file types matter for a beginner:

- **Checkpoints** are full models. Loading one replaces the base Stable Diffusion weights. Popular general-purpose ones right now include Deliberate, DreamShaper, and Realistic Vision, plus anime-focused models descended from Anything V3.
- **LoRAs** (Low-Rank Adaptation files) are small adapters that teach an existing checkpoint a specific style, character, outfit, or object. They are the fastest-growing category on the site because they train in under an hour on a consumer GPU.
- **Textual Inversion embeddings** are tiny files, often under 100 KB, that add a new "word" to the model. Negative embeddings such as EasyNegative, which you put in the negative prompt to clean up hands and anatomy, are the most useful kind.
- **VAEs** (variational autoencoders) affect how the final image is decoded. If your outputs look washed out and grey, you almost certainly need one.

Hypernetworks also exist but have been largely superseded by LoRAs. You can ignore them for now.

## Step 1: Read the model card before downloading anything

Every Civitai model page has a card on the right side. Three fields decide whether the download is worth your bandwidth:

1. **Base model.** This is the single most common cause of garbage output. A LoRA trained on SD 1.5 will produce noise or distorted images on an SD 2.1 checkpoint, and vice versa. Almost everything popular on Civitai today is SD 1.5-based, so unless you deliberately installed a 2.x model, look for 1.5.
2. **Trigger words.** Many LoRAs and some checkpoints only activate when a specific token appears in the prompt. The card lists them. Copy them somewhere; you will need them in Step 5.
3. **Recommended settings.** Creators usually specify a sampler, step count, CFG scale, whether to use Clip skip 2, and which VAE they used. Anime models in particular tend to expect Clip skip 2 because of their NovelAI lineage.

Then scroll through the sample images. Click any of them and you will see the full generation parameters: prompt, negative prompt, seed, sampler, and model hash. If the samples do not include generation data, be more skeptical of the model. It is a sign the creator either did not test carefully or is hiding heavy post-processing.

## Step 2: Choose the safer file format

Model files come in two formats. The `.ckpt` extension is the original PyTorch pickle format, and pickle files can run arbitrary code when loaded. The `.safetensors` format is newer and was designed specifically to prevent that. Civitai displays a scan status on each file, but scanning is not a guarantee.

The rule is simple: if a safetensors version exists, download that one. If only a pickle file is offered, check the scan status, look at the creator history and download count, and skip it if anything feels off. There are enough alternatives on the site that no single model is worth the risk.

Also note the download size. Full checkpoints are commonly 2 GB (pruned, fp16) or 4 to 7 GB (full precision). For inference in Automatic1111, the pruned fp16 version produces effectively identical images and saves disk space.

## Step 3: Put each file in the right folder

Inside your web UI directory:

```
models/Stable-diffusion/   -> checkpoints (.ckpt / .safetensors)
models/Lora/               -> LoRA files
models/VAE/                -> VAE files
embeddings/                -> textual inversion embeddings
models/hypernetworks/      -> hypernetworks (rarely needed)
```

Keep the original filenames or rename them to something descriptive, but avoid spaces and special characters. LoRA filenames matter because you reference them by name in the prompt.

One organizational tip that pays off quickly: Civitai lets you download the preview image alongside the model. Save it with the same filename as the model (for example `deliberate_v2.safetensors` and `deliberate_v2.png`) and Automatic1111 will show it as a thumbnail in the extra networks panel.

## Step 4: Load the checkpoint and VAE

Restart the web UI or click the refresh icon next to the checkpoint dropdown at the top-left. Select your new model. The first load takes a minute while weights move into VRAM.

For the VAE, go to **Settings → Stable Diffusion → SD VAE** and pick the file you placed in the VAE folder. The widely used `vae-ft-mse-840000-ema-pruned` works well with most SD 1.5 realistic models. Some checkpoints have the VAE baked in, in which case the model card will say so and you can leave this at Automatic.

If you plan to switch VAEs often, add `sd_vae` to **Settings → User Interface → Quicksettings list**. That puts a VAE dropdown next to the checkpoint selector so you stop digging through settings.

## Step 5: Add LoRAs and embeddings to your prompt

Click the small pink "Show extra networks" button under the Generate button. Tabs appear for Textual Inversion, Hypernetworks, Checkpoints, and Lora. Clicking a LoRA card inserts a tag into your prompt that looks like this:

```
<lora:filename:1>
```

The number is the weight. Start at 0.7 to 0.8 for most style LoRAs. A weight of 1.0 is frequently too strong and will override the strengths of the checkpoint itself. Character LoRAs often need 0.8 to 1.0 plus their trigger word to hold the likeness.

Embeddings are simpler. Type the embedding filename (without extension) anywhere in the prompt, or in the negative prompt for negative embeddings. Putting `EasyNegative` in the negative prompt is a near-universal quality boost on anime and semi-realistic models.

## Step 6: Reproduce a sample image first

Before experimenting, prove the setup works. Download one of the sample images from the Civitai page, open the **PNG Info** tab in Automatic1111, drop the image in, and click **Send to txt2img**. Every parameter, including the seed, populates automatically.

Generate. If your output closely matches the sample, everything is installed correctly. If it looks noticeably different, work through this list:

- Wrong base model version (SD 1.5 vs 2.x)
- Missing or wrong VAE (washed-out colors)
- Clip skip set to 1 when the model expects 2 (**Settings → Stable Diffusion → Clip skip**)
- Different sampler or step count
- A LoRA or embedding referenced in the prompt that you did not install. The UI silently ignores missing files.

Only once you match the sample should you start changing prompts. Otherwise you will not know whether a bad result is the model or your configuration.

## Tips for getting more out of Civitai

**Sort by "Most Downloaded" with a time filter of the last month.** All-time rankings are dominated by early models that newer versions have surpassed. The monthly view surfaces what people are actually using now.

**Follow a few creators instead of browsing the front page.** The front page is heavily weighted toward whatever is getting the most reactions, which is not the same as what is most useful for your work.

**Read the license and the permissions grid.** The base Stable Diffusion license is CreativeML OpenRAIL-M, but creators can add restrictions: no commercial use, no selling generations, no merging. Civitai displays these as icons on the model card. If you are producing anything for a client, check them. Compare that to the [Midjourney terms](/compare/midjourney-vs-stable-diffusion/), where the rules are set by one company rather than each model author.

**Keep a notes file.** Model name, version, VAE, Clip skip, favorite sampler, and the prompts that worked. Six weeks from now you will not remember which of your three realistic checkpoints needed Clip skip 2.

## Common pitfalls

- **Stacking too many LoRAs.** Two is usually fine, three is pushing it, and beyond that they fight each other. Lower every weight as you add more.
- **Disk space.** A dozen checkpoints at 2 to 4 GB each adds up quickly. Prune what you do not use.
- **Version drift.** Popular models get updated every few weeks. Sample images and recommended settings on the page usually reflect the newest version, so if your old download behaves differently, check whether a new version has replaced it.
- **The mature content toggle.** A large share of Civitai is NSFW. The filter in your account settings controls what you see when browsing. Leave it on if you are working somewhere that matters.

## Where to go next

Once you are comfortable swapping models, the next big capability jump is ControlNet, an extension released last month that lets you steer composition with poses, depth maps, and edge sketches rather than prompt words alone. Combined with a good Civitai checkpoint, it closes most of the remaining gap between local Stable Diffusion and the polished results you see from hosted tools. For a broader look at where the base model stands today, see our [Stable Diffusion review](/reviews/stable-diffusion-review/), and if you just want stylized selfies without any setup, an app like [Lensa](/reviews/lensa-ai-review-2023/) is still the lower-effort path.
