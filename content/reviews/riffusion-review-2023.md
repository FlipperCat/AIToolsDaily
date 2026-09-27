---
title: "Riffusion Review (2023): Music From Pictures of Sound"
description: "Riffusion review: how the free, open-source music generator turns text prompts into short audio loops via spectrograms, where it shines, and its limits."
date: 2023-01-19
updated: 2025-06-10
categories: ["Reviews"]
tags: ["riffusion", "ai music", "stable diffusion", "open source", "audio generation"]
affiliate_disclosure: true
faqs:
  - question: "Is Riffusion free?"
    answer: "Yes. As of January 2023, the web demo is free to use and the model weights and code are open source. You can also run it on your own GPU if you're comfortable with a Python setup. There's no paid tier at this point."
  - question: "Can I use Riffusion music commercially?"
    answer: "The legal picture is unclear. The model is openly licensed, but it's built on Stable Diffusion and trained on audio whose provenance is not fully documented. For client work or monetized videos, a licensed royalty-free library or a tool with explicit commercial terms is the safer choice for now."
  - question: "Can Riffusion generate songs with vocals and lyrics?"
    answer: "Not in any usable sense. It produces short instrumental loops, and anything that sounds like a voice is usually garbled texture rather than words. Think of it as a loop and idea generator, not a songwriter."
  - question: "How long are Riffusion clips?"
    answer: "Each generated clip is only a few seconds long. The web app chains clips together by smoothly interpolating between them, so you can listen to an evolving stream, but you won't get a structured three-minute track out of it."
---

Riffusion is one of the strangest and most interesting AI experiments of the last few months. Instead of building a new audio model from scratch, its creators fine-tuned [Stable Diffusion](/reviews/stable-diffusion-review/), the image generator, to produce *spectrograms*: images that represent sound, with time on one axis and frequency on the other. Convert that image back into audio and you have music.

It launched in December 2022 as a hobby project, went viral almost immediately, and has become a handy way to see where AI music is headed. We spent a few weeks with it. Here's what it does well and where it falls short.

## What Riffusion Is

Riffusion is a free, open-source music generator. You type a prompt like "lo-fi jazz piano with rain" or "funky bassline, 90s hip hop" and it generates a short audio clip in that style. The web app at riffusion.com plays these clips as a continuous stream, morphing from one to the next.

Under the hood, it's a Stable Diffusion checkpoint trained on spectrogram images paired with text descriptions. Because it's an image model, a lot of image tricks carry over: img2img, seeds, prompt interpolation. Those give it an unusual level of control for a tool this young.

## Key Features

### Text-to-music loops
The core feature. Describe a genre, instrument, mood, or era, and you get a clip a few seconds long. Results for clear, texture-driven prompts (ambient pads, drum grooves, synth arpeggios) are often surprisingly musical.

### Smooth interpolation between prompts
Riffusion's signature trick. You can set two prompts, say "acoustic folk guitar" and "electronic dubstep", and the app blends between them over time. This works because diffusion models have a continuous latent space, so the in-between states sound like plausible hybrids rather than a hard cut.

### Seed images for consistency
Generation starts from a "seed" spectrogram that shapes rhythm and structure. Different seeds give different grooves, and reusing a seed keeps tempo and feel roughly consistent across prompts. This is how the app keeps a stream from sounding like random noise.

### Open source everything
The model weights, inference server, and web app code are all public. Developers can run it locally, build on it, or plug it into existing Stable Diffusion tooling. If you already run a local setup like the one in our [AUTOMATIC1111 guide](/tutorials/run-stable-diffusion-locally-automatic1111/), the workflow will feel familiar, though you'll need the Riffusion-specific conversion step to get audio back out.

## Pros

- **Free and open.** No account, no credits, no paywall on the demo. The open weights mean researchers and hobbyists can experiment freely.
- **Genuinely novel approach.** Reusing an image model for audio is clever, and it shows how much transfers between domains.
- **Great for ideas and textures.** For ambient beds, drum loop ideas, or "what would a genre mashup sound like" exploration, it's fast and fun.
- **Interpolation is unique.** No other consumer tool we've tried does smooth genre-to-genre morphing this well.
- **Good hackability.** Developers can script it, batch it, and experiment with prompts and seeds.

## Cons and Limitations

- **Short clips only.** You get seconds of audio, not songs. There's no verse/chorus structure and no sense of arrangement over time.
- **Audio quality is lo-fi.** Converting a spectrogram image back to audio loses information. Expect a slightly metallic, smeared sound, especially on vocals, cymbals, and anything with sharp transients.
- **No usable vocals or lyrics.** Voice-like sounds come out as mumbled texture.
- **Inconsistent prompt adherence.** Common genres work well; niche instruments or specific production styles often don't.
- **Unclear rights.** The training data and licensing situation is murky, which matters if you want to publish the output.
- **Local setup is technical.** Running it yourself requires a capable GPU and some comfort with Python and command-line tools.

## How It Compares

Riffusion sits in a different category from tools like [Soundraw](/reviews/soundraw-review-2023/), which generate full-length, royalty-free tracks from genre and mood settings and are built for creators who need usable background music. Soundraw is the practical pick; Riffusion is the experimental one.

Compared with research systems we've read about but can't use directly, Riffusion's big advantage is simply that it's available. You can play with it today, in a browser, for free. That accessibility matters more than raw quality at this stage.

## Pricing

As of January 2023, Riffusion is free. The hosted web app has no paid plan, and the open-source release lets you run it on your own hardware at the cost of your GPU time. If you run it in the cloud, budget for GPU rental, which varies widely by provider.

Given how quickly this project took off, it wouldn't be surprising to see a hosted paid product later. For now there's nothing to buy.

## Who It's For

- **Musicians and producers** looking for sample ideas, texture beds, or odd genre combinations to resample and build on in a DAW.
- **Developers and researchers** interested in generative audio, diffusion models, or cross-domain model reuse.
- **Curious creators** who want to understand where AI music is going without spending money.

It's **not** for:
- Video creators who need finished, licensed background tracks today.
- Anyone who needs vocals, lyrics, or full song structure.
- Commercial projects where the rights to the output must be clear.

## Tips for Better Results

1. **Prompt for texture, not composition.** "Warm analog synth pad, slow" works better than "a sad song about leaving home."
2. **Name instruments and eras.** "80s drum machine" or "Rhodes piano" steer the output more reliably than mood words alone.
3. **Try several seeds.** If a prompt sounds wrong, the seed may be fighting it. Switching seeds changes rhythm more than rewording does.
4. **Use interpolation creatively.** Blending two unrelated genres often produces the most interesting clips.
5. **Treat output as raw material.** Pull clips into an audio editor, clean up the high end with EQ, and layer them with real instruments.

## Verdict

Riffusion is not a production tool, and it doesn't claim to be. What it offers is a free, open, and surprisingly musical demo of a new idea: that image diffusion models can make sound. For loop hunting, sound design, and experimentation it's worth an afternoon of anyone's time. For finished music, you'll still need a human producer or a purpose-built library.

**Rating: 3.5/5.** Brilliant as an experiment and a lot of fun, limited as a creative tool. It's worth watching closely, because the ideas it demonstrates are likely to show up in more polished products soon.
