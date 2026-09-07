---
title: "How to Use Inpainting in Stable Diffusion (2023): Fix Hands, Swap Objects, Extend Images"
description: "Step-by-step 2023 guide to Stable Diffusion inpainting in AUTOMATIC1111: masks, denoising strength, inpainting checkpoint, and fixing faces and hands."
date: 2023-02-21
updated: 2026-03-03
categories: ["Tutorials"]
tags: ["stable diffusion", "inpainting", "automatic1111", "ai art", "image editing"]
affiliate_disclosure: true
faqs:
  - question: "Do I need a special model for inpainting in Stable Diffusion?"
    answer: "You can inpaint with any checkpoint, but results are far better with a dedicated inpainting model such as the Stable Diffusion 1.5 inpainting checkpoint from RunwayML. Regular models tend to ignore the surrounding image at high denoising strength and produce visible seams. Download the inpainting version and switch to it before you start."
  - question: "What denoising strength should I use for inpainting?"
    answer: "Start around 0.4 if you want to tweak what is already there, such as cleaning up a hand or changing a color. Use 0.75 or higher when you want to replace the masked area with something new. Anything below 0.3 barely changes the image, and 1.0 ignores the original pixels completely."
  - question: "Why does my inpainted region look blurry or low resolution?"
    answer: "You are probably inpainting the whole picture, which means a small mask gets a tiny share of the 512-pixel canvas. Switch Inpaint area to Only masked so the masked region is rendered at full resolution and then scaled back into place. This one setting fixes most blurry face and hand results."
---

Text-to-image gets the attention, but inpainting is where Stable Diffusion becomes a real editing tool. It lets you mask part of an image and regenerate only that region: fix a mangled hand, swap a red jacket for a blue one, remove a stray object, or extend a canvas past its original edges. DALL-E 2 popularized the idea in 2022; running it locally in Stable Diffusion gives you unlimited attempts and full control over the settings.

This guide uses the AUTOMATIC1111 web UI. If you do not have it running yet, follow our [local Stable Diffusion setup guide](/tutorials/run-stable-diffusion-locally-automatic1111/) first and come back.

## Step 1: Download an Inpainting Checkpoint

Regular checkpoints can inpaint, but they were never trained to reconcile new pixels with existing ones. The dedicated inpainting models were, and the difference is night and day.

1. Download the **Stable Diffusion 1.5 inpainting** checkpoint published by RunwayML on Hugging Face. There is also a 2.x inpainting model from Stability AI if you prefer the 2.1 base.
2. Drop the file into the `models/Stable-diffusion` folder of your AUTOMATIC1111 install.
3. Refresh the checkpoint dropdown at the top of the UI and select it.

Many community models on [Civitai](/tutorials/civitai-models-loras-automatic1111-2023/) now ship an inpainting variant too. If you generated the original image with a specific style model, look for its inpainting version so the fill matches the style.

## Step 2: Load Your Image into the Inpaint Tab

Go to the **img2img** tab and pick the **Inpaint** sub-tab. Either upload an image or, if you just generated one in txt2img, click **Send to inpaint** under the result. Sending keeps the prompt and seed, which saves time.

Resolution matters. SD 1.5 models work best around 512 by 512 pixels, and 2.x models around 768. If your source is much larger, the UI will scale it, and small masked details can get lost. We will handle that in Step 5.

## Step 3: Paint the Mask

Use the brush to paint over the region you want to change. A few rules of thumb:

- **Mask generously.** Cover a little beyond the object. A tight mask forces the model to blend inside a space that is too small.
- **Mask blur** (default 4) softens the edge of the mask so the new pixels feather into the old. Raise it to 8 or more if you see hard seams.
- **Inpaint masked** regenerates inside your mask. **Inpaint not masked** does the opposite, which is handy for keeping a subject and regenerating the entire background.

If your mask is complex, you can also upload a black-and-white mask image via the **Inpaint upload** tab instead of painting by hand.

## Step 4: Choose the Masked Content Setting

This setting decides what the model sees under the mask before it starts denoising. It is the most misunderstood control in the whole tab.

- **Original:** keeps the existing pixels as a starting point. Use this to fix or restyle something that is roughly right already, like a hand with six fingers.
- **Fill:** blurs the surrounding colors into the mask. Best for removing an object, since the model starts from a plausible background instead of the thing you want gone.
- **Latent noise:** fills the mask with random noise. Use it when you want something completely new that does not resemble what was there.
- **Latent nothing:** fills with a neutral latent. Similar to noise, slightly smoother, occasionally better for large replacements.

Pick the wrong one and no amount of prompting will save you. Removing a person with **Original** at low denoising just gives you a slightly blurrier person.

## Step 5: Set Inpaint Area to Only Masked

Under **Inpaint area**, the default **Whole picture** renders the entire image at your chosen resolution, so a small face gets maybe 60 pixels of detail. **Only masked** crops to the mask, renders that crop at full resolution, and pastes it back. This is the single biggest quality improvement for faces, hands, eyes, and small objects.

Set **Only masked padding** to 32 to 64 pixels so the model sees some surrounding context and matches lighting and perspective. Too little padding produces a patch that does not match; too much dilutes the resolution gain.

## Step 6: Dial in Denoising Strength

Denoising strength controls how far the result can drift from the starting pixels.

- **0.2 to 0.4:** subtle cleanup, color and texture tweaks, softening artifacts
- **0.4 to 0.6:** meaningful changes that still respect the original composition
- **0.7 to 0.9:** replacing the content while keeping lighting and rough shapes
- **1.0:** ignore the original entirely, which only makes sense with latent noise or fill

For hands and faces, start at 0.45 with **Original** content and run a batch of four. For object replacement, start at 0.8 with **Fill** or **Latent noise**.

## Step 7: Write a Prompt for the Masked Region Only

A common mistake is reusing the full original prompt. The model is only painting inside the mask, so describe what belongs there. Fixing a hand means prompting something like "a detailed hand, five fingers, natural pose" plus the style words from your original prompt, not the whole scene.

Keep the style and lighting terms so the patch matches. Use the negative prompt for the specific failure you are fighting: "extra fingers, deformed, blurry" for hands, "text, watermark" for backgrounds. If you use a style model or a LoRA, keep those tokens in place as well.

## Step 8: Generate a Batch and Iterate

Set **Batch count** to 4 and keep the seed random. Inpainting is a numbers game; one in four attempts is usually clearly better. Send the best result back to inpaint and refine again with a lower denoising strength. Two or three passes beat one perfect-first-try attempt almost every time.

Sampling steps around 25 to 30 with Euler a or DPM++ 2M Karras work well. CFG scale of 7 is a safe default; push it up if the model ignores your prompt, down if the patch looks oversaturated.

## Bonus: Outpainting to Extend the Canvas

Inpainting also extends images. Under the **Script** dropdown in img2img, choose **Outpainting mk2** or **Poor man's outpainting**, set the direction and pixel count, and generate. Alternatively, enlarge the canvas manually in any image editor, fill the new area with a flat color, mask it, choose **Fill**, and inpaint at 0.9 denoising. Extend in small increments of 64 to 128 pixels per pass for coherent results.

## Tips and Pitfalls

- **Seams:** raise mask blur, enlarge padding, or run a final low-strength pass over the seam with a fresh mask.
- **Color shift:** usually caused by a regular checkpoint at high denoising. Switch to the inpainting model.
- **Style mismatch:** you inpainted with a different checkpoint than the one that made the image. Match models or use its inpainting variant.
- **Faces still bad:** try **Restore faces** in combination with **Only masked**, but know that face restoration can flatten stylized art.
- **Inpaint sketch:** the sibling tab lets you paint rough colors under the mask. Great for telling the model "blue jacket here" without relying on the prompt alone.

Inpainting is what turns a lucky generation into a finished image. Once you internalize masked content, only-masked rendering, and denoising strength, most of the artifacts that make people give up on [Stable Diffusion](/reviews/stable-diffusion-review/) become ten-minute fixes. For how this compares with the hosted alternative, see our [DALL-E 2 vs Stable Diffusion](/compare/dalle-2-vs-stable-diffusion-2023/) breakdown.
