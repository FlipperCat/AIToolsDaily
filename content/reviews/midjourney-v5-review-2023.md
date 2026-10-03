---
title: "Midjourney V5 Review (2023): A Big Leap in Realism, With Trade-offs"
description: "Hands-on Midjourney V5 review: photorealism, better hands, prompt control, the new /describe command, pricing, and how it compares to DALL-E 2 and Stable Diffusion."
date: 2023-04-26
updated: 2026-08-30
categories: ["Reviews"]
tags: ["midjourney", "ai-art", "image-generation", "text-to-image", "creative-tools"]
affiliate_disclosure: true
faqs:
  - question: "How do I use Midjourney V5?"
    answer: "In Discord, type /settings and select the V5 model, or add --v 5 to the end of any /imagine prompt. Everything else works the same as earlier versions: you prompt in a Midjourney server channel or a direct message with the bot, then pick, vary, or upscale from the image grid."
  - question: "Is Midjourney V5 free?"
    answer: "Not at the moment. Midjourney paused its free trial in late March 2023, citing heavy demand and trial abuse. As of April 2023, you need a paid plan, starting at about $10 per month for the Basic tier."
  - question: "Is Midjourney V5 better than DALL-E 2?"
    answer: "For image quality, especially photorealism, lighting, and texture, V5 is clearly ahead in our testing. DALL-E 2 is still easier to use, has a simple web interface, and offers built-in editing like inpainting. If you want the best-looking output and can live with Discord, V5 wins."
  - question: "Can Midjourney V5 generate readable text in images?"
    answer: "Rarely. Short words occasionally come out correctly, but signs, labels, and logos are usually garbled. If you need accurate text, add it afterwards in a design tool like Canva or Photoshop."
---

# Midjourney V5 Review (2023): A Big Leap in Realism, With Trade-offs

Midjourney V4 made the service the default choice for people who wanted AI images that looked *good* without much effort. On March 15, Midjourney released V5 in alpha, and within days social media was full of images that many people couldn't tell from photographs. Some of them were fake photos of public figures that spread widely before anyone pointed out they were AI-generated.

I've spent the past several weeks running V5 through portraits, product shots, illustration styles, and architectural concepts, and comparing it against V4 and the competition. Here's what changed, what didn't, and whether it's worth paying for right now.

## What Midjourney V5 is

Midjourney is a text-to-image generator that runs entirely through Discord. You type `/imagine` followed by a description, and a bot returns a grid of four images. From there you can create variations of one image or upscale it.

V5 is a new model, not a settings tweak. You opt in by choosing it in `/settings` or by adding `--v 5` to a prompt. Older models stay available, which matters because V5 behaves differently enough that some prompts written for V4 now produce worse results. If you're brand new to the service, our [Midjourney beginner guide](/midjourney-beginner-guide-2023/) covers the Discord basics.

## Key features and what's changed

### Photorealism that holds up

V5's headline improvement is realism. Skin has pores and texture instead of the airbrushed look V4 tended toward. Lighting behaves more like a real camera, with believable shadows, reflections, and depth of field. Prompts that mention specific lenses, film stocks, or lighting setups ("85mm portrait, soft window light, shot on Kodak Portra") now noticeably change the output.

For product mockups, interior concepts, and stock-style lifestyle imagery, this is the first version where results regularly look usable without heavy retouching.

### Hands (mostly) fixed

Malformed hands have been the running joke of AI art. V5 doesn't solve them completely, but most hands now have five fingers in plausible positions. Complex poses, such as hands holding small objects or interlocked fingers, still fail regularly. Plan to reroll a few times for anything hand-heavy.

### Less house style, more literal prompts

V4 had a recognizable look: dramatic, painterly, and very "Midjourney." That made bad prompts look good. V5 dials the default stylization down and follows your words more literally.

This is the biggest trade-off. Short prompts like "a castle" now return fairly plain images. To get striking results, you need to describe style, mood, lighting, and composition. Experienced prompters will love the control. Casual users may feel V5 got *worse* until they adjust. The `--stylize` parameter is still there if you want more of the artistic flavor back.

### Higher resolution and flexible aspect ratios

V5 grid images come out at around 1024×1024, a step up from V4's grids. The catch: the U (upscale) buttons now mostly separate the chosen image from the grid at that native size rather than enlarging it further. For large prints you'll still need an external upscaler.

Aspect ratios are more flexible than before via `--ar`, so tall phone wallpapers and wide banner formats work without awkward cropping.

### Better image prompts and /describe

Using an image URL as part of your prompt now carries the reference's style and composition over more faithfully, which helps with consistent looks across a series.

The new `/describe` command, added in early April, works in reverse: upload an image and Midjourney suggests four prompts that might produce something similar. It's useful for learning how Midjourney "reads" a style and for building a vocabulary of prompt terms. Don't expect the suggested prompts to recreate the original image; they're starting points.

## Pros

- **Best-in-class image quality** for photorealism, lighting, and texture as of spring 2023
- **Much-improved hands and anatomy** compared with V4
- **More precise control** for users willing to write detailed prompts
- **Higher native resolution** on grid images
- **/describe** is a genuinely helpful learning and ideation tool
- **Older models remain available**, so you can switch back for V4's style

## Cons and limitations

- **Discord-only workflow.** There's still no proper web app for generating images. Public channels move fast, and finding your work means using the gallery on Midjourney's website.
- **Short prompts produce plainer results** than V4, which raises the skill floor.
- **Text in images is still unreliable**, which rules out most logo and sign work.
- **No built-in editing.** Unlike DALL-E 2, there's no inpainting or outpainting yet. You can't fix a single bad hand without regenerating the whole image.
- **Public by default.** Unless you pay for stealth mode on the top plan, your images and prompts are visible in the community gallery.
- **Misuse concerns are real.** V5's realism made convincing fake photos easy, and the free trial was paused as a result. Expect tighter content rules over time.
- **Upscale buttons don't really upscale**, as noted above.

## Pricing (as of April 2023)

With the free trial suspended, a subscription is the only way in. Midjourney's plans are priced roughly as follows:

| Plan | Approx. price | What you get |
|---|---|---|
| Basic | ~$10/month | ~3.3 hours of fast GPU time (roughly 200 images) |
| Standard | ~$30/month | ~15 hours of fast GPU time plus unlimited "relaxed" generations |
| Pro | ~$60/month | ~30 hours of fast GPU time, relaxed mode, and stealth mode for private generations |

Annual billing knocks about 20% off. GPU time, not image count, is what you're buying. V5 jobs and upscales use more of it than simple grids, so heavy V5 users will burn through the Basic tier quickly. Standard is the sweet spot for anyone using Midjourney weekly, because relaxed mode removes the anxiety of running out. Prices change, so check Midjourney's current plans before subscribing.

## How V5 compares to the alternatives

**DALL-E 2** is easier to use: a clean web interface, credit-based pricing, and editing tools like inpainting that Midjourney lacks. But its image quality has fallen behind, especially for photorealism. Our [DALL-E 2 review](/reviews/dall-e-2-review-2023/) goes deeper.

**Stable Diffusion** wins on control and cost. It's open source, runs locally if you have a capable GPU, and supports custom models and fine-tuning. Getting V5-level results takes considerably more setup and know-how. See our [DALL-E 2 vs Stable Diffusion comparison](/compare/dalle-2-vs-stable-diffusion-2023/) for that trade-off.

**Adobe Firefly** (in beta) and **Bing Image Creator** both launched in March. Firefly's selling point is training on licensed content, which matters for commercial work. Bing's is free access to DALL-E technology. Neither matches V5's raw image quality yet.

## Who it's for

- **Designers, marketers, and art directors** who need high-quality concept art, mood boards, and stock-style imagery fast
- **Illustrators and hobbyists** willing to learn detailed prompting
- **Small businesses** creating social media visuals and mockups, as long as no text appears in the image

It's less suited to anyone who needs precise edits, accurate text, or a simple point-and-click interface, and to anyone uncomfortable with images being public by default.

## Verdict

Midjourney V5 is the most impressive image model you can pay for right now. The realism jump is real, hands are finally usable most of the time, and detailed prompts give you more control than any previous version. The price of that control is a steeper learning curve: V5 rewards specific prompts and punishes lazy ones in a way V4 didn't.

The surrounding product hasn't kept pace with the model. Discord is still the only way to generate, editing tools are missing, and the paused free trial means you can't test before paying. If image quality is your top priority, subscribe to the Standard plan and spend an afternoon relearning your prompts. If you want ease of use or editing, DALL-E 2 remains the friendlier option.

**Rating: 4.3 / 5**
