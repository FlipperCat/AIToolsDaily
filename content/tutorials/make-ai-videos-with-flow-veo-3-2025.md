---
title: "How to Make AI Videos With Google Flow and Veo 3 (2025): A Practical Walkthrough"
description: "Step-by-step guide to Google's Flow and Veo 3: setup, prompting for video with sound, extending clips in Scene Builder, and avoiding credit-burning mistakes."
date: 2025-07-09
updated: 2026-05-20
categories: ["Tutorials"]
tags: ["veo-3", "google-flow", "ai-video", "video-generation", "google"]
affiliate_disclosure: true
faqs:
  - question: "Do I need the $250 Ultra plan to use Veo 3?"
    answer: "No. The Google AI Pro plan (around $20/month as of mid-2025) includes Veo 3 Fast in Flow with a monthly credit allowance. Ultra gets you the higher-quality Veo 3 model, more credits, and early features like ingredients-to-video, but Pro is plenty for learning and light production."
  - question: "How long are Veo 3 clips?"
    answer: "Individual generations are about 8 seconds. Longer videos are made by chaining clips together in Flow's Scene Builder — extending shots or jumping to new ones — and then exporting the sequence."
  - question: "Does Veo 3 really generate sound and dialogue?"
    answer: "Yes, and it's the headline feature. Veo 3 natively generates ambient noise, sound effects, and spoken dialogue synced to characters' lips. Quality varies — dialogue occasionally garbles — but it's the first mainstream video model where audio comes out of the box."
---

Veo 3 changed the "AI video is a silent movie" rule. Google's latest model, unveiled at I/O in May, generates video *with sound* — ambient noise, effects, and lip-synced dialogue — and Flow is the filmmaking workspace Google built around it. Two months in, the tooling has settled down enough to write a proper workflow guide.

This tutorial takes you from zero to a finished multi-shot clip: plans and setup, prompting (including audio cues), Scene Builder, and the mistakes that quietly eat your monthly credits.

## What you need

Flow lives at labs.google/flow and requires a paid Google AI plan (as of July 2025, approximately):

- **Google AI Pro** (~$20/month) — Flow access with **Veo 3 Fast**, a lower-cost, quicker variant, plus a monthly credit allowance in the ~1,000 range.
- **Google AI Ultra** (~$250/month) — the full-quality **Veo 3** model, a much larger credit pool, and early-access features like ingredients-to-video.

Credits are the real constraint. Every generation costs credits, higher-quality models cost more, and failed experiments cost the same as keepers. Start on Pro; upgrade only if Veo becomes part of paid work.

A note on expectations: clips are ~8 seconds each, 16:9, and 720p-class output on most settings. You're making shots, not films — the craft is in chaining them.

## Step 1: Set up a project in Flow

1. Go to **labs.google/flow** and sign in with the Google account holding your plan.
2. Create a **new project**. Projects keep your generations, prompts, and scenes together — treat one project as one video, not a dumping ground.
3. Check the model picker before generating anything. On Pro you'll typically choose between **Veo 3 Fast** (cheaper, with audio) and older **Veo 2** options (cheaper still, but silent). Make sure you're on a Veo 3 variant if you want sound.

## Step 2: Write a prompt that earns its credits

Veo 3 rewards specific, filmic prompts. A structure that consistently works:

**[Shot type] + [subject and action] + [setting and lighting] + [camera movement] + [audio]**

Weak prompt:

> "A fisherman on a boat in a storm."

Strong prompt:

> "Close-up shot of a weathered fisherman gripping the wheel of a small trawler in a night storm, rain streaking across the windows, cabin lit by a single red instrument glow. Handheld camera, slight shake. Audio: roaring wind, rain hammering metal, creaking hull. He mutters: 'Almost home.'"

Three audio-specific rules:

- **Put dialogue in quotes** and keep it short — one line per 8-second clip. Long speeches get rushed or garbled.
- **Describe the soundscape explicitly** (wind, room tone, footsteps). If you don't, Veo improvises — sometimes brilliantly, sometimes with baffling background music.
- **Say "no subtitles."** Veo 3 has a habit of burning captions into the frame when characters speak; explicitly excluding them usually works.

## Step 3: Generate, then iterate deliberately

Generate your first take. Then resist the urge to immediately re-roll:

1. **Diagnose before regenerating.** Wrong mood? Adjust lighting/audio words. Wrong motion? Change the camera instruction. Random re-rolls burn credits for lottery odds.
2. **Change one variable at a time**, like any experiment.
3. **Use Veo 3 Fast for drafts**, then re-run only the winning prompt on the higher-quality model if you're on Ultra.
4. **Save anything usable.** Flow keeps your generations in the project library; even off-brief clips make good B-roll later.

## Step 4: Build sequences in Scene Builder

This is Flow's actual superpower — it's an editor built around generation:

- **Extend** continues a clip past its 8 seconds, generating the next beat from the final frames. Best for letting an action complete or a camera move finish.
- **Jump to** cuts to a new shot in the same scene, keeping visual continuity — your wide shot can cut to a close-up of the same character. This is how you fake conventional shot-reverse-shot coverage.
- Reorder, trim, and stitch clips on the timeline, then export the sequence as one video.

Practical rhythm: block your video as 4–6 shots on paper first (a one-line storyboard is enough), generate shot 1 until it's right, then extend/jump through the sequence. Building linearly keeps characters and lighting far more consistent than generating six independent prompts.

If you're on Ultra, **ingredients-to-video** helps consistency further: feed reference images of a character, prop, or setting and Flow carries them across shots.

## Step 5: Start from an image when you need control

Text-to-video is the fun mode; **frames-to-video** is the control mode. Supply a starting image — a photo, a styled frame from an image generator, a product shot — and Veo animates from it. Use this when brand look, a specific face, or scene layout matters more than serendipity. The audio prompt rules still apply.

## Step 6: Export and finish elsewhere

Export your stitched sequence, then do titles, music, color, and pacing in a normal editor (CapCut, Resolve, Premiere). Two notes:

- Veo output carries **SynthID watermarking** (invisible) and, on most consumer tiers, a small visible mark. Plan disclosure accordingly — platforms and clients increasingly ask.
- Generated audio is baked into the clip. If you want full control of the mix, prompt for ambient-only sound and add dialogue or music yourself.

For distribution-ready workflows — faceless channels, shorts pipelines — our guides to [creating faceless videos with AI](/tutorials/create-faceless-videos-with-ai/) and [turning long videos into shorts](/tutorials/turn-long-videos-into-shorts-ai/) pick up where this one ends.

## Pitfalls that eat credits and afternoons

- **Treating it like a slot machine.** The #1 budget killer. Prompt deliberately, iterate on variables, walk away from cursed shots.
- **Overloading 8 seconds.** One action, one line of dialogue, one camera move per clip. Compound instructions produce rushed mush.
- **Expecting cross-prompt character consistency.** Without ingredients or careful extend-chains, the same described character will drift between generations. Design around cuts, silhouettes, and framing if consistency is critical.
- **Garbled speech and phantom subtitles.** Both are known quirks — short dialogue, "no subtitles," and re-rolls are the current fixes.
- **Ignoring the competition for your use case.** Veo 3's audio is unique right now, but for some jobs a cheaper silent model plus stock sound is smarter — see how the other engines stack up in our [Sora vs Runway comparison](/compare/sora-vs-runway-2025/) and our [Luma Dream Machine review](/reviews/luma-dream-machine-review/).

## The bottom line

Flow plus Veo 3 is the first AI video setup that feels like *directing* rather than gambling: sound out of the box, an editor built for extending and cutting between generations, and image-anchored control when you need it. The constraints are real — 8-second beats, credit anxiety, consistency drift — but the workflow above ships watchable, sounding, multi-shot video in an afternoon. That was science fiction at this time last year.

Start with one 4-shot sequence and a storyboard on a sticky note. You'll learn more from finishing one small piece than from fifty orphaned generations.
