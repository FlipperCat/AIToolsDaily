---
title: "How to Edit a Podcast in Descript (2023): The Full Workflow"
description: "A step-by-step 2023 workflow for editing a podcast in Descript — transcription, text-based cuts, filler words, Studio Sound, and export settings."
date: 2023-11-08
updated: 2026-02-16
categories: ["Tutorials"]
tags: ["descript", "podcasting", "audio editing", "transcription", "workflow"]
affiliate_disclosure: true
faqs:
  - question: "How long does it take to edit an episode in Descript?"
    answer: "Once you know the workflow, a clean 45-minute interview usually takes 45 to 90 minutes to edit — roughly 1x to 2x the runtime. Traditional waveform editing for the same episode often runs 3x to 4x. The savings come from cutting by deleting text rather than hunting for the right moment in a waveform."
  - question: "Do I need to record inside Descript?"
    answer: "No. Descript can record directly, but most people record elsewhere and import. Import separate audio files for each speaker rather than a single mixed track — Descript handles multitrack projects well, and per-speaker tracks let you fix one person's audio without touching the other."
  - question: "Is Descript's transcription accurate enough to edit from?"
    answer: "For clean audio with clear speakers, accuracy is high enough that you can trust the transcript for editing decisions. It still mangles proper nouns, technical jargon, and heavily accented speech. Always spot-check any section you plan to quote or publish as show notes."
---

Descript's core idea is simple: it transcribes your recording, then lets you edit the audio by editing the transcript. Delete a sentence in the text and the corresponding audio disappears. For interview podcasts — where most of the work is cutting tangents, false starts, and dead air — this is dramatically faster than dragging regions around a waveform.

This is the workflow I use for a two-person interview show, start to finish. It assumes you have already recorded and have separate audio files for each speaker.

## Step 1: Set Up the Project Correctly

Create a new project and import your audio. The critical decision happens here.

**Import each speaker as a separate track.** If you hand Descript one mixed file, it will still transcribe it and still let you edit by text — but you lose the ability to process voices independently. Host audio and guest audio almost never need the same treatment, especially when one of you was on a laptop mic.

In the Composition, use **Add speaker tracks** and assign each file. Descript will detect that these are simultaneous tracks and align them rather than laying them end to end.

Set the project to your target format now: audio-only for a standard podcast, or a video composition if you are also publishing clips. Changing this later is annoying.

## Step 2: Transcribe and Clean the Speaker Labels

Transcription runs automatically on import. Give it a few minutes for a long episode.

When it finishes, do this before anything else: **fix the speaker labels.** Descript names them "Speaker 1" and "Speaker 2" by default. Rename them to real names. This takes ten seconds and it makes the rest of the edit — and your show notes — far more readable.

Then skim the transcript for obvious misrecognitions in the first two minutes. If your guest's company name is consistently transcribed wrong, use **Find and Replace** to fix all instances at once. Correcting text does not change the audio, but it keeps you from getting confused later and it cleans up any transcript you publish.

If you want a second opinion on transcript accuracy for anything you plan to quote, tools like [Otter](/reviews/16-otter-ai-review/) are worth cross-checking against, though for editing purposes Descript's own transcript is fine.

## Step 3: Make the Rough Cut by Deleting Text

This is where the time savings live.

Read through the transcript and delete the parts you do not want. Select the text, hit delete, the audio goes with it. The parts worth cutting on a first pass:

- The pre-roll small talk before the real conversation starts
- Tangents that go nowhere
- Repeated answers where the guest circled back and said it better the second time
- Anything where you interrupted yourself and restarted the question

Work fast and do not agonise. You can undo anything, and Descript keeps the removed audio available — deleted text is struck through rather than destroyed if you use **Ignore** instead of delete, which is useful when you are unsure.

A useful discipline: do the entire rough cut before you touch a single audio setting. Editing content and processing audio at the same time is how a two-hour edit becomes a five-hour edit.

## Step 4: Remove Filler Words and Shorten Gaps

Now run the automated cleanup passes.

**Remove Filler Words** finds every "um," "uh," and (if you enable it) "like" and "you know," and lets you remove them in bulk. Review the list before accepting. Removing every single filler makes people sound robotic — a natural conversation has a few. I typically accept the removals for the host and leave a handful in for the guest so it still sounds human.

**Shorten Word Gaps** tightens the silences between words to a target length. Setting it around 0.4 to 0.5 seconds gives a tighter, more energetic feel without making it sound rushed. Anything under 0.3 starts to sound unnatural and removes the breathing room that makes a conversation listenable.

**Remove Retakes** is the underrated one. When someone restarts a sentence, Descript detects the near-duplicate takes and offers to keep only the last one. On an episode with a nervous guest this can cut several minutes on its own.

## Step 5: Apply Studio Sound — Carefully

Studio Sound is Descript's one-click audio enhancement: it reduces background noise, evens out levels, and makes a mediocre microphone sound considerably better.

Apply it **per track**, not globally. Your good microphone probably does not need it. Your guest's laptop mic almost certainly does.

Two warnings from experience:

- Studio Sound can introduce artifacts on already-good audio, giving it a slightly processed, hollow quality. A/B it against the original before committing.
- It struggles with music playing in the background of a recording. It will try to remove the music as noise and the result is unpleasant.

After Studio Sound, check your overall loudness. Aim for around -16 LUFS for a stereo podcast — most platforms normalise to roughly that range, and delivering wildly hotter just means your episode gets turned down with the dynamics already squashed.

## Step 6: Fix the Mistakes You Cannot Cut

Sometimes you need a word that was never said — a mispronounced name, a wrong date, a missing "not."

**Overdub** lets you type the correction and generates it in your cloned voice. Setup requires recording a training script first, which takes about ten minutes and is worth doing once. Keep corrections short: a word or two blends convincingly, a full sentence usually does not.

If Overdub is not set up, the low-tech alternative works fine — record the corrected phrase into the same mic, drop it in, and let Studio Sound match the tone.

## Step 7: Add Music, Chapters, and Clips

Drop your intro and outro music onto their own track so you can adjust levels independently. Descript's ducking will lower the music under speech, but check the transitions manually — automatic ducking is decent, not perfect.

If you are publishing to video platforms, this is the point to pull short clips. Select the text of a good 60-second exchange, and export just that selection as a separate composition. Getting three or four clips per episode out of a workflow you are already in is far more sustainable than a separate clipping session that never happens.

For show notes, copy the transcript into a general-purpose assistant like [ChatGPT](/reviews/chatgpt-review/) and ask for a summary plus timestamps. Descript gives you the raw text; the summarising is better done elsewhere.

## Step 8: Export

For the audio podcast: export **WAV** if your host re-encodes anyway, or **MP3 at 128kbps mono / 192kbps stereo** if you are uploading final files. Mono is fine and halves your file size for a conversation recorded on separate mics.

For video: export MP4 at 1080p. Descript's default export settings are reasonable; the main thing to check is that you have not accidentally exported only the selected range.

## Common Pitfalls

**Editing before transcription finishes.** Cuts made mid-transcription can misalign. Wait for the full pass.

**Trusting the transcript for names.** Always verify proper nouns before publishing show notes.

**Over-processing.** Filler removal plus aggressive gap shortening plus Studio Sound on already-clean audio produces something that sounds synthetic. Each pass is useful; all three at maximum is not.

**Working in one giant project.** Long, heavily-layered projects get sluggish. Split multi-hour recordings into separate compositions and stitch at export.

**Assuming the free tier is enough.** As of late 2023 the free plan includes a limited monthly transcription allowance, with paid tiers running roughly $12 to $24 per month billed annually for meaningfully more hours plus Overdub and higher-quality exports. Pricing changes often — check current plans before you build a workflow around a feature.

## The Short Version

Import separate tracks, fix speaker names, rough-cut by deleting text, then run filler removal and gap shortening, then Studio Sound per track, then export. The discipline that matters most is doing content edits and audio processing as separate passes.

If you are still deciding whether the tool is right for you at all, our fuller [Descript review](/reviews/04-descript-review/) covers where it fits compared to traditional editors.
