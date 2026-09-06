---
title: "ComfyUI Beginner's Guide (2024): From Install to Your First Flux Image"
description: "A practical ComfyUI beginner's guide for 2024: install, load SDXL and Flux models, understand the default workflow node by node, add ComfyUI Manager, and avoid common errors."
date: 2024-10-17
updated: 2026-03-02
categories: ["Tutorials"]
tags: ["comfyui", "stable diffusion", "flux", "local ai", "ai image generation", "sdxl"]
affiliate_disclosure: true
faqs:
  - question: "Is ComfyUI harder than Automatic1111?"
    answer: "The first hour is harder because you see the pipeline as nodes instead of a form. After that it is easier to understand what is actually happening, and reusing other people's workflows is far simpler. If you only ever want to type a prompt and click generate, Automatic1111 or Fooocus is less friction. If you want to learn how diffusion pipelines fit together, ComfyUI teaches you."
  - question: "What GPU do I need for ComfyUI?"
    answer: "For SD 1.5, almost any Nvidia card with 4 GB of VRAM works. SDXL is comfortable at 8 GB. Flux dev at full precision wants 16 GB or more, but the fp8 variants run on 12 GB cards and ComfyUI will offload to system RAM if it has to, at the cost of speed. AMD and Apple Silicon are supported but slower and fussier to set up."
  - question: "Why does my workflow show red nodes?"
    answer: "Red nodes mean a custom node type that is not installed. Open ComfyUI Manager and choose Install Missing Custom Nodes, restart, and reload the workflow. If the node still shows red, the custom node package may have been renamed or abandoned, and you will need to find a replacement."
  - question: "Where do I get workflows to learn from?"
    answer: "Every image ComfyUI saves embeds its full workflow in the PNG, so dragging any ComfyUI-generated image onto the canvas loads the graph that made it. Communities on Civitai, GitHub, and Reddit share images and JSON files this way. Start by loading other people's workflows and changing one thing at a time."
---

ComfyUI is the node-based interface for Stable Diffusion, Flux, and most other open image models. It has a reputation for being intimidating, and the first screenshot you see of a sprawling graph with forty wires does not help. But the core is small. Once you understand the seven nodes in the default workflow, everything else is variations on the same idea.

This guide takes you from a blank machine to generating with SDXL and then Flux, and explains what each piece does along the way. If you are still deciding between interfaces, our [ComfyUI vs Automatic1111 comparison](/compare/comfyui-vs-automatic1111-2024/) lays out the tradeoffs.

## Before you start

You need a computer with a dedicated GPU. Nvidia is the smooth path. An 8 GB card handles SDXL well, and 12 GB opens up Flux in its reduced-precision forms. You also need 30 to 60 GB of free disk space, because model files are large: an SDXL checkpoint is around 6.5 GB and Flux components add up to well over 20 GB.

If you have used Automatic1111 before, you can point ComfyUI at your existing model folders and skip re-downloading everything. Step 3 covers that.

## Step 1: Install ComfyUI

On Windows with an Nvidia GPU, the easiest route is the portable build from the ComfyUI GitHub releases page. Download the zip, extract it somewhere with plenty of space, and run the batch file for Nvidia GPUs. It includes its own Python, so nothing else needs installing. A console window opens, and after a moment it prints a local address, usually on port 8188. Open that in your browser.

On Linux or Mac, or if you prefer a standard install, clone the repository, create a Python virtual environment, install PyTorch for your platform, then install the requirements file and run the main script. The README covers the exact commands for each platform, and they change often enough that copying from there beats copying from here.

If the browser tab shows a canvas with a handful of connected boxes, you are in.

## Step 2: Install ComfyUI Manager

Do this before anything else. ComfyUI Manager is a community extension that installs and updates custom nodes, finds missing nodes in workflows you download, and pulls models from a catalog. Without it, every custom node is a manual git clone and a guessing game about dependencies.

Install it by cloning its repository into the custom_nodes folder inside your ComfyUI directory, then restart ComfyUI. A Manager button appears in the menu. If you are on the portable build, the Manager project also provides an install script that handles the embedded Python for you.

## Step 3: Add your models

ComfyUI keeps models in a models folder with subfolders by type. The ones you will use first:

- **checkpoints** for full SD 1.5 and SDXL models
- **unet** for Flux diffusion models, which ship without text encoders
- **clip** for text encoders such as the Flux CLIP and T5 files
- **vae** for standalone VAE files
- **loras** for LoRA files

For your first run, download an SDXL checkpoint and drop it into checkpoints. Any well-regarded general-purpose SDXL model from Civitai or Hugging Face will do.

If you already have an Automatic1111 install, open the extra model paths example file in the ComfyUI folder, rename it to remove the example suffix, and edit the base path to point at your Automatic1111 directory. ComfyUI will then see all of those models without copying them.

## Step 4: Understand the default workflow

Click Load Default from the menu. You get seven nodes. Read them left to right and the entire diffusion process becomes clear.

1. **Load Checkpoint** reads the model file and outputs three things: the model itself, the CLIP text encoder, and the VAE.
2. **CLIP Text Encode (positive)** turns your prompt into conditioning the model understands.
3. **CLIP Text Encode (negative)** does the same for the things you want to avoid.
4. **Empty Latent Image** creates the blank canvas in latent space. Set width, height, and batch size here. Use 1024 by 1024 for SDXL.
5. **KSampler** is the engine. It takes the model, both conditionings, and the latent, then denoises for a set number of steps. Seed, steps, CFG, sampler, scheduler, and denoise strength all live here.
6. **VAE Decode** converts the finished latent into an actual image using the VAE.
7. **Save Image** writes it to the output folder.

The wires between them are the pipeline. Every advanced workflow you will ever see is this same chain with extra nodes inserted somewhere along it. A LoRA loader sits between the checkpoint and the sampler. An upscaler sits after the decode. ControlNet feeds extra conditioning into the sampler. Once that clicks, nothing about ComfyUI is mysterious.

## Step 5: Generate your first image

Select your SDXL checkpoint in the Load Checkpoint node. Type a prompt in the positive box and something like "blurry, low quality, text" in the negative box. Set the latent to 1024 by 1024. In the KSampler, start with 25 steps, CFG around 6, sampler dpmpp_2m, and scheduler karras.

Click Queue, or press Ctrl+Enter. Progress shows on the nodes as each one runs, and the image appears in the Save Image node when finished. First runs take longer because the model has to load into VRAM; later runs are much faster.

Change the seed and run again. Change the prompt. Get comfortable with the loop before adding anything.

## Step 6: Load Flux

Flux from Black Forest Labs is the model most people install ComfyUI for this year, and it needs a slightly different graph because the model, the text encoders, and the VAE come as separate files. Our [Flux review](/reviews/flux-ai-review-2024/) covers what it does better than SDXL and where it still struggles.

Download the Flux dev or schnell diffusion model into the unet folder. If you have 12 GB of VRAM or less, get the fp8 version. Download the two text encoders, a CLIP-L file and a T5 file, into the clip folder, again choosing fp8 for T5 if memory is tight. Download the Flux VAE into the vae folder.

Then build the graph. Replace Load Checkpoint with three nodes: **Load Diffusion Model** pointing at the Flux file, **DualCLIPLoader** with both text encoders and the type set to flux, and **Load VAE**. Wire the model into the sampler, the CLIP into your text encode nodes, and the VAE into the decode.

Flux settings differ from SDXL. Schnell wants only 4 steps and CFG of 1. Dev works well at 20 steps with CFG of 1 and guidance handled by a separate Flux Guidance node set around 3.5. Flux mostly ignores negative prompts, so you can leave that box empty. The ComfyUI examples site has a ready-made Flux workflow you can load, which is faster than wiring it by hand.

## Step 7: Add a LoRA

Once base generation works, LoRAs are the first thing worth adding. Drop the file into the loras folder, then double-click the empty canvas, search for Load LoRA, and add it. Wire the model output of your loader into the LoRA node and the LoRA node's model output into the sampler. For SDXL, route the CLIP through it as well. Set strength between 0.6 and 1.0 and include the LoRA's trigger word in the prompt.

If you want to train one of your own, our guide to [training a Flux LoRA](/tutorials/train-a-flux-lora-2024/) picks up from here.

## Tips that save hours

- **Drag any ComfyUI PNG onto the canvas** to load its workflow. This is the single best way to learn. Find an image you like, load its graph, and study it.
- **Double-click the canvas to search** for nodes by name instead of hunting through menus.
- **Right-click a node and convert a widget to an input** when you want to drive a value, like a seed or a prompt, from another node.
- **Use Manager's Install Missing Custom Nodes** whenever a downloaded workflow shows red nodes.
- **Save workflows as JSON** from the menu so you can reload them without an image.
- **Group nodes** by selecting several and using the group option, then collapse groups you are not editing. A tidy canvas is a debuggable canvas.
- **Watch the console window.** Almost every error ComfyUI shows in the browser has a more useful version in the terminal.

## Common pitfalls

**Out of memory errors** usually mean the model is too big for your card. Switch to fp8 files, reduce resolution, or launch with the low VRAM flag. ComfyUI is already better at memory than most interfaces, but Flux at full precision on an 8 GB card is not going to happen.

**Black or noisy output** almost always means the VAE is wrong for the model. SD 1.5, SDXL, and Flux each need their own VAE, and a mismatch decodes to garbage.

**Custom node conflicts** are the main way a working install breaks. Two custom node packages can require different versions of the same library. Install one thing at a time, and when something breaks, check the console for the package that failed to import.

**Prompts that worked in Automatic1111 behave differently here.** ComfyUI weights syntax like parentheses slightly differently and does not support every extension-specific token. Simplify the prompt before assuming the model is at fault.

## Where to go next

Once the default graph and Flux feel natural, the productive additions in rough order are upscaling with a model-based upscaler and a second sampling pass, ControlNet for pose and composition, inpainting with masks, and image-to-image workflows that start from a photo instead of an empty latent. Each is a few extra nodes on the chain you already understand.

If you decide the node approach is not for you after a week, that is a legitimate conclusion. Our guide to [running Stable Diffusion locally with Automatic1111](/tutorials/run-stable-diffusion-locally-automatic1111/) covers the form-based alternative, and your model files work in both. But most people who push through the first evening with ComfyUI do not go back.
