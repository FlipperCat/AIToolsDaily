---
title: "Auphonic Review (2023): The Set-and-Forget Audio Engineer for Podcasters"
description: "Auphonic review: automatic leveling, loudness normalization, noise reduction, multitrack processing, pricing, and where it falls short of an editor."
date: 2023-04-18
updated: 2026-08-12
categories: ["Reviews"]
tags: ["auphonic", "podcasting", "audio-editing", "noise-reduction", "loudness-normalization", "transcription"]
affiliate_disclosure: true
faqs:
  - question: "Is Auphonic free to use?"
    answer: "Auphonic has a free tier that covers roughly two hours of processed audio per month as of April 2023, which is enough for a short weekly show or a monthly long-form one. Beyond that you buy either a recurring monthly allowance or one-time credits you can use whenever you need them. The free allowance resets monthly and unused time does not roll over, so it suits a steady schedule better than occasional big batches."
  - question: "Does Auphonic edit my podcast for me?"
    answer: "No. Auphonic is a post-production processor, not an editor. It balances levels, normalizes loudness, reduces noise, and encodes your files, but it does not cut mistakes, remove tangents, or rearrange segments. You still do the content edit in a tool like Descript, Audacity, or a DAW, then send the result through Auphonic as the final step."
  - question: "What loudness target should I use for a podcast?"
    answer: "Most podcast platforms recommend something in the neighborhood of -16 LUFS for stereo files, and Auphonic offers that as a preset target alongside broadcast standards such as -23 LUFS. The important thing is consistency from episode to episode, which is exactly what automated normalization gives you. If you publish to a specific network, check its spec sheet and match it."
  - question: "Is Auphonic better than Adobe Podcast Enhance?"
    answer: "They solve different problems. Adobe's Enhance tool reconstructs speech to make a poor recording sound studio-like, which can be dramatic but occasionally artificial. Auphonic is more conservative: it balances, cleans, and standardizes without resynthesizing the voice. For a decent recording that needs polish, Auphonic is the safer choice; for a rescue job on a laptop-mic recording, try Enhance first."
---

Most AI audio tools launched in the last year want to be your whole podcast studio. Auphonic has a narrower job and has been doing it for about a decade: you hand it a finished edit, and it hands back a file that sounds level, clean, and loud enough — with the metadata filled in and the upload already done.

It is not flashy, and the interface looks like it was designed by audio engineers, because it was. But for anyone who publishes spoken-word audio on a schedule, it is one of the highest-value automations available. Here is what it does well, what it does not do at all, and whether the credit-based pricing makes sense for you.

## What Auphonic Is

Auphonic is a web service (with companion desktop and mobile apps) that performs automatic audio post-production. You upload a file or point it at cloud storage, choose which algorithms to apply, and it processes the audio on its servers. A typical episode comes back in a few minutes.

The core idea is that the tedious, technical last 10% of podcast production — compression, levelling, loudness compliance, noise cleanup, encoding, tagging, distribution — is rule-based enough to automate well. Auphonic analyzes the content of your audio (speech versus music versus noise, who is talking, how loud each segment is) and makes the decisions a mastering engineer would make, without asking you to learn what a threshold or a ratio is.

It sits at the end of a workflow, not the start. If you are looking for somewhere to record and cut, look at [Podcastle](/reviews/podcastle-review-2023/) or a text-based editor instead, then come back to Auphonic for the finishing pass.

## Key Features

### Intelligent Leveler

This is the feature most people stay for. The leveler evens out volume differences between speakers, between speech and music, and within a single speaker who drifts toward and away from the mic. Unlike a simple compressor, it classifies segments first, so it does not pump up background noise during pauses or crush your intro music.

On a two-person interview where one side is noticeably quieter, the difference is immediate: you stop riding the volume knob while listening.

### Loudness Normalization

Auphonic normalizes the final file to a loudness target you choose, measured in LUFS, with a true-peak limiter to prevent clipping. There are presets for common podcast targets and for broadcast standards. The practical benefit is that every episode you publish lands at the same perceived volume, and at the same volume as other well-produced shows in a listener's queue.

### Noise and Hum Reduction

The noise reduction handles steady background problems — fan noise, hiss, electrical hum — by analyzing each segment and removing what it identifies as non-speech noise. You can leave the amount on automatic or set it manually. It is deliberately conservative by default, which avoids the underwater artifacts that aggressive denoisers produce.

A separate filtering step removes low-frequency rumble such as desk bumps and plosives' low end.

### Multitrack Processing

If you record each speaker on a separate track, the multitrack mode processes them individually and then mixes down. It adds a few things single-file processing cannot do: automatic ducking of music under speech, an adaptive noise gate, and crosstalk removal, which reduces the bleed of one speaker's voice into another's microphone. For in-person recordings with two mics in one room, that last one matters.

### Speech Recognition and Transcripts

Auphonic can generate a transcript as part of the same job. It has long supported connecting external speech-to-text services, and it now also offers built-in transcription based on OpenAI's open-source Whisper model, which covers many languages without a separate account. Output comes as an interactive HTML transcript and standard subtitle formats.

Accuracy is good on clean speech and predictably worse on names, jargon, and crosstalk. If you want more control over the transcription step itself, our [Whisper transcription tutorial](/tutorials/transcribe-audio-with-openai-whisper-2023/) walks through running the model yourself.

### Encoding, Metadata, and Publishing

One job can output multiple formats at once — MP3 for the feed, a lossless master for the archive, a video file with a waveform for social. Auphonic writes the title, artwork, and chapter marks into the files, then pushes them to connected services such as cloud storage, podcast hosts, YouTube, SoundCloud, or an FTP server.

Combined with **presets**, this is where the real time savings come from. Set up a preset once per show, and every future episode is: upload, pick the preset, wait.

### API and Automation

There is a full API, and you can configure Auphonic to watch a cloud folder and process whatever lands in it. For networks producing many shows, or developers building a publishing pipeline, this is a genuine differentiator over newer consumer-focused tools.

## Pros

- **Consistently good results with almost no decisions.** The defaults are sensible, and the output rarely sounds over-processed.
- **Real loudness compliance.** If you deliver to a network or broadcaster with a spec, Auphonic hits it and gives you the statistics to prove it.
- **Multitrack intelligence.** Ducking and crosstalk removal are hard to do well manually and are handled automatically here.
- **End-to-end automation.** Presets plus publishing integrations collapse a 30-minute export-tag-upload ritual into one click.
- **A usable free tier.** Around two hours a month covers many hobby shows outright.
- **Transparent processing.** Each job produces a report showing what was changed and by how much, which builds trust and helps you fix recurring recording problems at the source.

## Cons and Limitations

- **It is not an editor.** There is no timeline, no cutting, and no removal of filler words or dead air as of this writing. You must finish your content edit elsewhere.
- **No instant preview.** You submit a job and wait for the result. Tweaking a setting means reprocessing, which makes experimentation slower than a real-time plugin.
- **The interface is dense.** The production form exposes a lot of options on one long page. It is logical once learned, but it is not welcoming to beginners.
- **Cannot rescue truly bad recordings.** Heavy room echo, clipping, and distorted call audio are improved only marginally. Tools that resynthesize speech, like [Adobe Podcast Enhance](/reviews/adobe-podcast-enhance-review-2023/), go further on those — with their own artifacts.
- **Credits are counted by audio duration.** Long-form shows burn through allowances quickly, and multitrack jobs are billed on the length of the production, so plan your tier around your actual monthly runtime.
- **Transcripts still need proofreading.** Built-in speech recognition is convenient, but treat it as a draft.

## Pricing

Pricing is approximate as of April 2023 and changes over time — check Auphonic's site before buying.

- **Free:** about 2 hours of processed audio per month.
- **Recurring credits:** monthly plans starting at roughly $11 for around 9 hours, scaling up through larger tiers for 20, 45, and 100 hours.
- **One-time credits:** hour bundles you buy once and use when needed, at a somewhat higher per-hour price than the subscriptions.
- **Desktop apps:** separate one-time purchases that run the leveling algorithms locally, aimed at people who cannot or will not upload their audio.

For a weekly 45-minute show, you will sit just above the free tier, which makes the smallest paid plan the realistic choice. The per-hour cost is low compared with the time it replaces.

## Who It's For

**Good fit:**

- Podcasters who already have an editing workflow and want a reliable final mastering step.
- Interview shows with uneven guest audio.
- Radio producers, audiobook narrators, and educators who must meet a loudness spec.
- Networks and developers who want to automate processing and distribution through an API.

**Poor fit:**

- Beginners who want recording, editing, and cleanup in one app.
- Anyone whose main problem is a badly recorded source rather than an unpolished one.
- Music producers — the algorithms are built around speech and mixed speech-and-music content, not mastering songs.

## Verdict

Auphonic is unglamorous and excellent. It does not try to write your show notes, clone your voice, or replace your editor. It takes the part of audio production that is most technical and least creative and makes it disappear, with results that hold up against manual processing by a non-expert — which is what most podcasters are.

The limitations are real. You need another tool for the actual edit, the interface takes a session or two to learn, and it will not save a recording made in a bathroom. But as the last step before publishing, it is hard to beat for the price, and the free tier means there is no reason not to run your next episode through it and listen to the difference.

**Rating: 4.5/5** — a specialist tool that does its one job better than most all-in-one platforms do it as a side feature.
