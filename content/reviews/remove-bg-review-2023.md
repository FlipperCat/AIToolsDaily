---
title: "Remove.bg Review (2023): Still the Fastest Way to Cut Out a Background?"
description: "Our remove.bg review: cutout quality on hair, products, and cars, how the credit pricing really works, free-tier limits, and the alternatives worth a look."
date: 2023-01-26
updated: 2025-03-11
categories: ["Reviews"]
tags: ["remove-bg", "background-removal", "ai-photo-editing", "product-photography", "image-tools"]
affiliate_disclosure: true
faqs:
  - question: "Is remove.bg free?"
    answer: "Partly. You can remove backgrounds for free as often as you like, but free downloads are limited to a small preview size that's fine for a chat avatar or a thumbnail and too small for print or a product page. Full-resolution downloads cost credits, with one credit per image. Check the pricing page for current limits, since they change."
  - question: "How does remove.bg pricing work?"
    answer: "It's credit-based: one credit buys one full-resolution image. You can buy credits through a monthly subscription, which is cheaper per image and lets unused credits roll over up to a cap, or as pay-as-you-go packs that cost more per image. As of January 2023, subscriptions start at roughly $9 a month for 40 credits."
  - question: "Is remove.bg better than Photoshop for removing backgrounds?"
    answer: "For speed, yes. It handles a typical portrait or product shot in about five seconds with no manual selection. Photoshop's Remove Background and Select Subject tools have improved a lot and give you far more control for refining edges, so designers who already pay for Creative Cloud may not need a separate tool except for bulk jobs."
  - question: "Can remove.bg process images in bulk?"
    answer: "Yes. The desktop app for Windows, Mac, and Linux lets you drag in whole folders, and the API handles automated pipelines. Both use the same credits as the website, so a batch of 500 product photos costs 500 credits at full resolution."
---

Cutting a subject out of a photo used to be the task that separated people who knew Photoshop from people who didn't. The pen tool, layer masks, and an hour of zooming in on stray hairs were the price of a clean product shot or a profile picture on a white background.

Remove.bg turned that into a five-second upload when it launched a few years ago, and it's been the default answer to "how do I remove a background" ever since. But the field has filled in around it. Photoshop, Canva, and even the iPhone now have one-click cutouts. We ran several hundred images through remove.bg, including portraits, e-commerce products, pets, cars, and awkward edge cases, to see whether it still earns a place in your toolkit and your budget.

## What it is

Remove.bg is a web tool, desktop app, and API that does one thing: it detects the foreground subject of an image and deletes everything else, leaving a transparent PNG. There's no prompt, no brush, and no settings to choose. You upload a photo and get a cutout.

It's built by Kaleido, an Austrian company that Canva acquired in 2021, which is why Canva Pro's background remover behaves so similarly. Unlike generators such as [DALL-E 2](/reviews/dall-e-2-review-2023/) or avatar apps like [Lensa](/reviews/lensa-ai-review-2023/), there's nothing generative on show here. This is segmentation: the model classifies each pixel as subject or background and estimates transparency along the edges.

## Key features

**One-step removal.** Drag in a JPG or PNG and the cutout appears in a few seconds. The model handles people, products, animals, cars, and graphics without you telling it which is which.

**A light editor.** After removal you can drop in a solid color, pick a stock background, upload your own, or blur the original background for a fake shallow depth of field. An erase/restore brush lets you fix mistakes, though it's basic.

**Desktop app for bulk work.** The Windows, Mac, and Linux app processes whole folders at once with consistent settings for output size and background color. For anyone with a catalog of product photos, this is the feature that matters.

**Photoshop plugin.** The extension adds a one-click remove button inside Photoshop and returns the result as a layer mask, so you can refine the edge by hand instead of starting from scratch.

**API and integrations.** A simple REST API takes an image and returns a cutout, with options for output size, cropping to the subject, and adding a background color. There are ready-made connectors for Zapier and Make, a Figma plugin, and community plugins for the major e-commerce platforms.

**Car-specific handling.** Vehicles get special treatment through the API, including semi-transparent windows and an optional ground shadow, which is aimed squarely at dealerships and listing sites.

## How good are the cutouts?

On the photos it was designed for, very good. A person or product against a reasonably distinct background comes out clean nearly every time, and it gets there faster than any manual method.

**Hair** is the classic test, and remove.bg does better than most. Loose strands against a plain wall are preserved with soft, believable transparency. Frizzy hair against a busy or similarly colored background is where it loses detail, either trimming the hair into a helmet shape or leaving a faint halo of the old background color.

**Products** with hard edges, such as boxes, bottles, shoes, and electronics, are close to flawless. Trouble starts with transparent or reflective items. Glassware, clear plastic packaging, and jewelry with fine chains often come back with chunks missing or with the background still visible through them.

**Pets and fur** hold up well, with the same caveat as hair: contrast with the background matters more than anything else.

**Group shots and cluttered scenes** are a coin flip. The model has to guess what the subject is, and you can't tell it. In a photo of someone holding a bicycle in front of a fence, you might get the person and bike, the person alone, or the person plus half the fence. Other tools let you click to add or subtract regions. Here your only fix is the manual brush.

Overall, in our testing the large majority of ordinary photos needed no touch-up at all, and most failures were predictable from looking at the original.

## Pros

- **Fast.** Around five seconds per image on the web, and there's nothing to learn.
- **Edge quality on hair and fur** is among the best of the automatic tools we've tried.
- **Workflow options.** The desktop app, Photoshop plugin, and API cover hobbyists, designers, and developers with the same engine.
- **No account needed** for free preview downloads.
- **Predictable.** There are no settings, so results are consistent across a batch.

## Cons and limitations

- **The free tier is preview-only.** Free downloads are capped at a low resolution, roughly a quarter of a megapixel. That's enough for a profile icon and not much else.
- **Credits get expensive at volume.** One credit per image is simple, but a store with thousands of SKUs will feel it.
- **No way to pick the subject.** When the model guesses wrong in a multi-object scene, you're stuck with a crude brush.
- **Transparent and reflective objects** remain a weak spot.
- **A single-purpose tool.** No object removal, no upscaling, no retouching. You'll need other apps for those.
- **Cloud processing.** Images are uploaded to remove.bg's servers. For client work under NDA or photos of people who haven't consented, read the privacy terms first.

## Pricing

Prices below are approximate as of January 2023. Check the site before buying, since plans change.

- **Free:** unlimited low-resolution preview downloads on the website, one free credit when you sign up, and a small monthly allowance of free preview-size API calls.
- **Subscription:** starts at roughly $9 a month for 40 credits, with larger tiers bringing the per-image price down to around 20 cents or less. Unused credits roll over as long as you stay subscribed, up to a multiple of your monthly allowance. Paying yearly is cheaper.
- **Pay as you go:** credit packs with no subscription. A single credit costs around $2, and bulk packs bring that under a dollar per image. Pay-as-you-go credits stay valid for a long time, which suits occasional users.

One credit covers one image at full resolution, whether you use the website, desktop app, plugin, or API.

The math is worth doing before you subscribe. If you need ten cutouts a year, a small pay-as-you-go pack beats any subscription. If you process a few dozen images a month, the entry subscription is the best deal. Above a few thousand images a month, compare the API pricing against competitors, because the gap adds up.

## Alternatives worth knowing

- **Canva Pro** includes a background remover built on the same company's technology. If you already pay for Canva, try it before buying remove.bg credits.
- **Photoshop** has a Remove Background quick action and Select Subject. Results are close on easy images, and you get full manual control afterward.
- **Adobe Express** offers a free one-click remover with a generous download size, though with less edge finesse on hair.
- **PhotoRoom** and **Pixelcut** are mobile-first apps that pair background removal with templates for marketplace listings.
- **Clipdrop** bundles background removal with relighting and object cleanup tools.
- **iOS 16** lets you long-press a subject in the Photos app to lift it out. It's free, and it's good enough for casual use.

## Who it's for

**Good fit:** e-commerce sellers standardizing product photos, marketers who need quick cutouts for ads and thumbnails, car dealerships and marketplaces, developers who want background removal inside their own app without training a model, and anyone who needs an occasional high-quality cutout without learning an editor.

**Poor fit:** designers who already live in Photoshop and need pixel-level control, Canva Pro subscribers (you already have most of this), and people who only need small images, since the free preview size or a phone's built-in tool may be enough.

## Verdict

Remove.bg is no longer the only one-click background remover, but it's still the benchmark the others are measured against. Its edge handling on hair and fur is a step ahead of most free options, and the desktop app and API make it practical for bulk work.

Its weak points are the pricing model and the lack of control. Per-image credits punish high volume, the free tier is a demo rather than a usable plan, and when the AI picks the wrong subject there's little you can do about it.

Our recommendation: use the free preview to test it on your actual images, especially your hardest ones. If the results hold up and you need more than a handful of full-resolution cutouts a month, the entry subscription is fair value. If you already pay for Canva Pro or Creative Cloud, start with what you have.

**Rating: 4 out of 5.** It does one job very well, and charges accordingly.
