---
title: "Stable Audio Review (2023): Stability AI's Music Generator, Three Weeks In"
description: "Stable Audio review after three weeks of use: sound quality, prompt control, the 90-second ceiling, licensing, free vs Pro pricing, and who it actually suits."
date: 2023-10-05
updated: 2025-08-19
categories: ["Reviews"]
tags: ["stable audio", "stability ai", "ai music generation", "sound design", "background music", "content creation"]
affiliate_disclosure: true
faqs:
  - question: "Can Stable Audio generate songs with vocals?"
    answer: "Not usefully. If you prompt for vocals you get vocal-like textures and mumbled syllables rather than lyrics. It is built for instrumental music and sound effects. For anything that needs a singer, you are still looking at a human performer or a separate vocal tool."
  - question: "Can I use Stable Audio tracks commercially?"
    answer: "Only on the paid Pro plan. The free tier is limited to non-commercial use. Pro tracks can go into videos, podcasts, and other content you monetize, though the terms restrict use in training other AI models. Read the current license before shipping anything, because these terms are new and could change."
  - question: "How long can a Stable Audio track be?"
    answer: "Free accounts get up to 45 seconds per generation and Pro accounts get up to 90 seconds. There is no way to extend a clip past that inside the tool, so longer pieces mean generating multiple clips and editing them together yourself, which rarely sounds seamless."
  - question: "How does it compare to AIVA or Soundraw?"
    answer: "Stable Audio produces more textured, realistic-sounding audio from open-ended text prompts, while AIVA and Soundraw give you structured, editable compositions with more control over length and arrangement. If you need a finished background track of a specific length today, the older tools are still more practical. If you want sound design and short atmospheric loops, Stable Audio is more interesting."
---

Stability AI made its name with Stable Diffusion, the image model that put local, uncensored generation on everyone's graphics card. Stable Audio, released in mid-September, is its first serious step into sound. It is not open source, at least not yet. It is a hosted web app with a free tier and a paid plan, and it generates music and sound effects from text prompts.

I have spent about three weeks using it for what I actually need: short background beds for videos, intro stings for a podcast, and ambient loops for a demo. Some of it went straight into published work. A lot of it did not. Here is the honest picture.

## What Stable Audio Is

Stable Audio is a latent diffusion model for audio, conceptually similar to how Stable Diffusion works for images. You type a description, such as "warm lo-fi hip hop beat, vinyl crackle, 80 BPM, mellow Rhodes piano," set a duration, and it generates a stereo 44.1 kHz clip in a matter of seconds.

The model was trained on a licensed library from a stock music provider, which Stability is careful to emphasize. That is a deliberate contrast with the murky training data behind some other music generators, and it matters if you plan to use the output commercially.

Two things define the product right now. First, it does instrumental music and sound effects, not songs with lyrics. Second, everything is capped at 90 seconds on the paid plan and 45 seconds on the free plan. Those two limits shape every use case.

## Key Features

- **Text-to-audio in seconds.** Generation is fast enough that iterating on prompts feels like iterating on image prompts. You try five variations, pick one, refine.
- **Structured prompting.** The model responds well to genre, instruments, mood, tempo in BPM, and production descriptors like "reverb-heavy" or "dry drums." Timing words like "intro" and "build" have some effect on the shape of the clip.
- **Sound effects and ambience.** This is quietly the strongest part. Rain on a tin roof, a crowded café, a spaceship hum, a door creak: the results are often better than digging through a free effects library.
- **Duration control.** You pick the exact length up to the cap, which is handy for stings and transitions.
- **Stereo, full-bandwidth output.** Clips sound like real audio rather than the muffled, low-sample-rate output of earlier research models.
- **Commercial license on Pro.** Paid output can go into monetized content.

## What It Sounds Like

On genres well represented in stock libraries, results are impressive. Lo-fi beats, cinematic ambient pads, corporate acoustic guitar, electronic loops, and orchestral swells all come out sounding like something a stock site would sell. Drums are tight and mixes are balanced. If you handed someone a good clip without context, they would assume it was a library track.

Where it falls apart is anything with a real melodic argument. Ask for a memorable melody and you get pleasant noodling. Ask for a song structure with verse and chorus and you get 90 seconds that drift. Solo instruments exposed in the mix, especially piano and strings, sometimes reveal a smeared, slightly underwater quality. And vocals are not a feature; they are a glitch. Prompt for singing and you get ghostly syllables.

Consistency is also a gamble. The same prompt produces very different clips, which is fine for exploration and annoying when you want a matching set of cues for one project.

## Pros

- Genuinely good audio quality for ambient, electronic, and lo-fi styles
- Excellent sound effects and environmental ambience, better than expected
- Fast iteration and a simple interface with nothing to learn
- Licensed training data, which makes the commercial story cleaner than most rivals
- Precise duration control is perfect for stings, bumpers, and transitions
- A usable free tier for trying it properly before paying

## Cons and Limitations

- The 90-second ceiling makes full background tracks a manual stitching job
- No vocals, no lyrics, no way around it
- Melodies are generic; it produces texture, not tunes
- No editing after generation, no stems, no way to adjust one element
- Same-prompt output varies wildly, so matched sets are hard
- Web app only, with no API and no local model to download
- Free tier is non-commercial, so anything you publish for money needs Pro

The lack of stems or any post-generation control is the limitation I ran into most. When a clip is 80 percent right, you cannot fix the 20 percent. You regenerate and hope. Tools like Soundraw, which we looked at in our [Soundraw review](/reviews/soundraw-review-2023/), let you adjust arrangement and energy after the fact, and I missed that constantly.

## Pricing

Approximate, as of early October 2023:

- **Free:** 20 generations per month, up to 45 seconds each, non-commercial use only.
- **Pro:** About $12 per month for 500 generations, up to 90 seconds each, with a commercial license.

Twenty free generations is enough to learn whether it suits you but not enough to finish a project. Five hundred on Pro is generous; I used well under half in a busy month. Compared with a stock music subscription, Pro is cheap, but remember you are paying for generation attempts, not finished tracks, and a good clip often takes several tries.

## Who It's For

**Video editors and YouTubers** who need short, atmospheric beds and transitions will get the most out of it. A 60-second intro loop or a mood bed under a talking segment is exactly its sweet spot.

**Podcasters** can use it for stings and intros. If you also want editing and voice tools in the same workflow, pair it with something like Descript, which we covered in our guide to [editing a podcast with Descript](/tutorials/edit-a-podcast-with-descript-2023/).

**Game and app developers** prototyping sound effects and ambience will find it faster than searching libraries, with the caveat that the commercial terms need a careful read.

**Musicians** looking for a composition partner will be disappointed. It does not write songs, it does not export MIDI, and it does not give you parts to build on.

**Anyone needing full-length background music** should still look at composition-style tools. Our [AIVA review](/reviews/aiva-review-2023/) covers the more structured approach, and our guide to [creating AI-generated music content](/tutorials/22-create-ai-generated-music-content/) walks through fitting these tools into a real workflow.

## Verdict

Stable Audio is the best-sounding text-to-music tool I have used, and it is also the most limited. The quality of the raw audio is a real step forward, and the licensed training data gives it a commercial story that competitors lack. But the 90-second cap, the absence of any editing, and the generic melodies mean it is a sound design and short-cue tool, not a music production tool.

If you make video or podcasts and spend time hunting for short cues, the Pro plan is easy to justify. If you need full tracks, songs, or anything with a vocal, wait. Given how fast Stability iterated on image models, I would expect longer clips and more control before long. For now, use the free tier, see whether the 45-second clips fit your work, and only pay when you know they do.
