---
title: "How to Restore Old Photos With AI (2023): A Step-by-Step Guide"
description: "Step-by-step guide to restoring old family photos with AI: scanning, damage repair, face enhancement, upscaling, and colorization tools."
date: 2023-11-07
updated: 2026-04-10
categories: ["Tutorials"]
tags: ["photo restoration", "ai photo editing", "upscaling", "colorization", "photoshop"]
affiliate_disclosure: true
faqs:
  - question: "Can AI really fix badly damaged photos?"
    answer: "Mostly yes, with limits. Scratches, fading, creases, and blur respond very well to current tools. Missing pieces — a torn-off corner, a face split by a fold — require the AI to invent content, and inventions on faces are risky. Expect excellent results on 80% of damaged photos and managed expectations on the worst 20%."
  - question: "What's the best free way to restore old photos?"
    answer: "Scan with Google PhotoScan (free), run faces through a GFPGAN demo on Hugging Face or Replicate (free tiers), upscale with the open-source Upscayl app, and colorize with Palette.fm's free tier. That full pipeline costs nothing and covers most restoration jobs surprisingly well."
  - question: "Will AI restoration change what my relatives actually looked like?"
    answer: "It can, and this is the biggest pitfall. Face-enhancement models sometimes 'improve' features — straightening teeth, changing eye shape — especially at aggressive settings. Always compare the restored face against the original at high zoom, and prefer lighter enhancement settings for identity-critical photos."
---

Everyone has a shoebox — faded prints of grandparents, creased wedding photos, blurry snapshots from decades before autofocus. Until recently, restoring them meant paying a specialist $50–$100 per photo or spending years learning Photoshop's clone stamp.

In 2023, AI has collapsed that job into an afternoon. Face restoration models like GFPGAN, upscalers like Real-ESRGAN, and Photoshop's new generative tools can take a cracked, faded print and return something you'd frame. Here's the complete workflow, from shoebox to shareable — with free options at every step.

## 1. Digitize the photo properly

Restoration quality is capped by scan quality, so don't photograph a print with your phone under ceiling light and call it done.

- **Best:** a flatbed scanner at **600 DPI** for standard prints (1200 DPI for very small photos). Scan in color even for black-and-white prints — the color data helps later steps.
- **Good:** the free **Google PhotoScan** app, which combines multiple angled captures to kill glare. Genuinely impressive for a phone workflow.
- **Avoid:** single phone snapshots. Glare, perspective warp, and shadow gradients all confuse restoration models.

Save as PNG or maximum-quality JPEG, and keep an untouched copy of every original scan. You will want to redo steps later; you won't want to re-scan.

## 2. Repair physical damage

Tears, creases, stains, and missing corners come first — enhancement tools work much better on an intact image.

**If you have Photoshop:** this year's [Generative Fill](/tutorials/photoshop-generative-fill-guide-2023/) changed the game. Select the damaged area, leave the prompt empty (or describe what should be there — "wooden fence," "dark suit jacket"), and let it reconstruct the region. It handles backgrounds and clothing shockingly well. For fine scratches, the older Spot Healing Brush and the Photo Restoration Neural Filter (in beta) do quick, effective work.

**Free route:** the web demos of inpainting tools (Stable Diffusion inpainting via various free Hugging Face spaces) can patch backgrounds, though with more trial and error.

**One rule: never generatively fill a face.** If a crease runs through grandpa's eye, the AI will invent a plausible eye that isn't his. Repair around faces; let the dedicated face-restoration step handle the faces themselves.

## 3. Restore faces

This is the step that produces the "wow" moment. Face-restoration models were trained specifically to turn blurry, degraded faces into sharp ones.

- **GFPGAN** (free, open source) — the community favorite. Easiest access is through a Replicate demo or Hugging Face space: upload, wait a few seconds, download. There's also **CodeFormer**, which offers a fidelity slider — turn it toward "fidelity" for identity-critical photos.
- **Remini** (mobile, freemium) — the polished consumer version of the same idea. Extremely easy; watch for the subscription prompt after the free trial.
- **VanceAI / similar web services** — batch-friendly paid options, useful if you're doing the whole shoebox.

**Check the output critically.** These models occasionally whiten teeth, smooth wrinkles that belong there, or subtly reshape features. Compare side-by-side at 200% zoom. If the person looks like a better-looking sibling of themselves, re-run at gentler settings — CodeFormer's fidelity slider exists for exactly this.

## 4. Upscale the whole image

Face restoration sharpens faces; the rest of the photo needs its own pass. AI upscalers enlarge the image 2–4x while inventing plausible fine detail.

- **Upscayl** (free, open source) — a simple desktop app wrapping Real-ESRGAN. For most people this is all you need.
- **Real-ESRGAN** demos on Replicate/Hugging Face — same engine, no install.
- **Topaz Photo AI** (~$199 as of late 2023, one-time) — the premium option, with better handling of mixed noise, blur, and compression in one pass. Worth it for large-volume or print-destined work, overkill for occasional use.

Upscale *after* damage repair and face restoration — enlarging first just gives every later tool more pixels of damage to fight. For a deeper look at this category, see our [AI upscaling guide](/tutorials/ai-image-upscaling-guide/).

## 5. Colorize (optional)

Colorization is taste, not truth — the AI guesses colors from context, and it guesses conservatively (lots of muted browns and teals). But done well, it makes ancestors feel startlingly present.

- **Palette.fm** — the current best-in-class web tool, with multiple color-mood variants per image and a free tier.
- **MyHeritage In Color** — built for exactly this genealogy use case, free with account signup.
- **DeOldify** — the open-source pioneer; free demos are easy to find, results slightly behind the newer commercial tools.

Keep both versions. Family members split roughly 50/50 on whether colorized or original black-and-white feels more "real."

## 6. Final touches

- **Crop and straighten** — remove scanned borders and fix rotation.
- **Levels/contrast** — faded prints usually need a gentle contrast boost; any free editor (Photopea in the browser works) handles it.
- **Background cleanup** — if the backdrop is distracting or beyond repair, [background removal tools](/tutorials/remove-image-backgrounds-ai/) let you isolate the subject entirely.
- **Export smart** — a full-resolution PNG or TIFF for archiving, plus a compressed JPEG for the family group chat.

## Pitfalls to avoid

1. **Over-restoration.** The plastic, poreless look is the signature failure of this workflow. If skin looks like a smartphone beauty filter, back off the settings. Old photos are allowed to look old.
2. **Trusting AI with identity.** Repeated for emphasis: generative tools *invent*. On faces, inventions are lies. Use dedicated face-restoration models at conservative settings, never generative fill.
3. **Working destructively.** Keep the original scan untouched and save each stage separately. Better models ship every few months — the original scan is what you'll feed them next year.
4. **Subscription traps.** Several consumer apps in this space funnel you from a free trial into $5–$10/week subscriptions. For a one-off shoebox project, the free open-source pipeline (PhotoScan → GFPGAN → Upscayl → Palette.fm) covers nearly everything.
5. **Skipping the scan step.** No model can recover what a glare-streaked phone photo destroyed. Ten extra minutes of scanning saves an hour of fighting artifacts.

## The bottom line

A workflow that cost specialist money a couple of years ago is now free, fast, and mostly automatic: scan carefully, repair damage, restore faces, upscale, optionally colorize. Budget about 15–30 minutes per photo for the full pipeline, and considerably less once you've done a few.

It's also one of the most genuinely appreciated things you can do with AI this year — few tool categories produce actual family tears of joy. If this project got you curious about image AI more broadly, our [image upscaling guide](/tutorials/ai-image-upscaling-guide/) and [generative fill tutorial](/tutorials/photoshop-generative-fill-guide-2023/) are natural next steps.
