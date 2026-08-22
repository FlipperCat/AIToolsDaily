---
title: "How to Transcribe Audio for Free With OpenAI Whisper (2023): A Step-by-Step Guide"
description: "Transcribe interviews, podcasts, and meetings for free with OpenAI's open-source Whisper model. Install it, pick the right model size, and get clean transcripts."
date: 2023-02-14
updated: 2024-11-20
categories: ["Tutorials"]
tags: ["whisper", "openai", "transcription", "speech-to-text", "open-source", "podcasting"]
affiliate_disclosure: true
faqs:
  - question: "Is OpenAI Whisper really free?"
    answer: "Yes. Whisper is an open-source model released under the MIT license, so you can download and run it on your own computer at no cost. The only expense is your hardware and time. Third-party hosted versions exist if you'd rather not install anything, but running it locally costs nothing."
  - question: "How accurate is Whisper compared to Otter or Rev?"
    answer: "On clear English audio, the medium and large models are as accurate as most commercial services and noticeably better than many on accented speech and technical vocabulary. Where it falls short is speaker identification — Whisper doesn't label who is speaking — and on very noisy or overlapping audio."
  - question: "Do I need a GPU to run Whisper?"
    answer: "No, but it helps enormously. On a CPU, the small model runs at roughly real time or slower, and the large model can take several times the length of the audio. With a modern NVIDIA GPU, even the large model transcribes a one-hour file in a few minutes."
  - question: "Can Whisper transcribe languages other than English?"
    answer: "Yes. It was trained on dozens of languages and can also translate speech from other languages into English text. Accuracy varies by language — major European and Asian languages do well, less common languages less so. Use the multilingual model, not the English-only variant, for non-English audio."
---

Until recently, accurate transcription meant either paying per minute for a human service or subscribing to a tool like [Otter.ai](/reviews/16-otter-ai-review/). Both are still fine options. But since OpenAI released Whisper as open source last September, there's been a third path: run a state-of-the-art speech recognition model on your own machine, for free, with no upload limits and no one else seeing your audio.

The catch is that it's a command-line tool, not an app. This guide walks through installing it, running your first transcription, and avoiding the handful of pitfalls that trip most people up. You don't need to be a programmer; you do need to be willing to type a few commands.

## What You'll Need

- A computer running Windows, macOS, or Linux
- Python 3.8 or newer
- FFmpeg (a free audio toolkit Whisper relies on)
- Some audio to transcribe — MP3, WAV, M4A, and most video formats work
- Optional but highly recommended: an NVIDIA GPU with a few gigabytes of memory

If you don't have a GPU, everything below still works; it just takes longer.

## Step 1: Install Python and FFmpeg

**Python.** Download it from python.org and run the installer. On Windows, check the box that says "Add Python to PATH" — missing this step causes most of the "command not found" errors people hit.

**FFmpeg.** This is the part that gives people trouble.

- On macOS with Homebrew: `brew install ffmpeg`
- On Ubuntu or Debian: `sudo apt install ffmpeg`
- On Windows: the simplest route is a package manager like Chocolatey (`choco install ffmpeg`) or Scoop (`scoop install ffmpeg`). Otherwise, download a build from the FFmpeg site, unzip it, and add its `bin` folder to your PATH.

Confirm both work by opening a terminal and typing `python --version` and `ffmpeg -version`. If either errors, fix that before moving on.

## Step 2: Install Whisper

Open a terminal and run:

```
pip install -U openai-whisper
```

This pulls in Whisper along with PyTorch, the machine learning framework it runs on. The download is a couple of gigabytes, so give it a few minutes.

If you have an NVIDIA GPU and want to use it, you may need to install the CUDA-enabled version of PyTorch first. The PyTorch website has a selector that generates the right install command for your system. Install that, then install Whisper.

## Step 3: Run Your First Transcription

Put an audio file in a folder, open a terminal in that folder, and run:

```
whisper interview.mp3 --model small
```

The first time you use a model size, Whisper downloads it (the small model is under 500 MB). Then it starts transcribing, printing each segment with timestamps as it goes.

When it finishes, you'll find several new files next to your audio: a plain `.txt` transcript, an `.srt` and `.vtt` subtitle file with timestamps, and a `.json` with detailed segment data. For most people, the `.txt` is what you want; the `.srt` is perfect if you're captioning video.

## Step 4: Choose the Right Model Size

Whisper comes in five sizes: tiny, base, small, medium, and large. Bigger means more accurate and slower. Here's how to think about it:

- **tiny / base:** fast, rough. Fine for getting the gist of a voice memo. Expect errors on names and jargon.
- **small:** the sweet spot for CPU-only machines. Good accuracy on clear audio, tolerable speed.
- **medium:** noticeably better on accents, background noise, and technical terms. On a CPU it's slow; on a GPU it's the default I'd recommend.
- **large:** best accuracy, especially for non-English audio. Needs a GPU with around 10 GB of memory to be practical.

For English-only audio, the `.en` variants (`small.en`, `medium.en`) are slightly more accurate than the multilingual versions at the same size.

Run a five-minute sample through two sizes before committing an hour-long file. The difference between small and medium is often the difference between "needs heavy editing" and "needs a light proofread."

## Step 5: Useful Options

A few flags make a big difference:

**Set the language.** Whisper auto-detects, but telling it saves time and prevents misdetection on short clips:

```
whisper interview.mp3 --model medium --language English
```

**Translate to English.** For foreign-language audio where you want an English transcript:

```
whisper entrevista.mp3 --model medium --task translate
```

**Choose output formats.** If you only want the text file:

```
whisper interview.mp3 --model medium --output_format txt
```

**Batch process.** Whisper accepts multiple files in one command, which is handy for a folder of podcast episodes:

```
whisper ep01.mp3 ep02.mp3 ep03.mp3 --model medium
```

## Step 6: Clean Up the Transcript

Whisper produces good raw text, but it isn't a finished document. A few things to expect:

- **No speaker labels.** Whisper doesn't know who's talking. For interviews, you'll add "Q:" and "A:" markers yourself, or use a separate speaker-diarization tool.
- **Occasional hallucinated sentences** during long silences or music — usually a repeated phrase or a stray "Thanks for watching." Skim for these at the start and end of files.
- **Inconsistent punctuation** on rambling speech. It's generally sensible but not perfect.

A practical workflow: paste the raw transcript into ChatGPT with an instruction like "Clean up this transcript: fix punctuation, remove filler words, keep the meaning exact, do not summarize." It does a solid job of the tedious parts while you focus on accuracy.

## Tips for Better Results

**Improve the audio first.** Whisper is robust, but garbage in still means garbage out. A quick pass through a noise-reduction tool before transcribing measurably improves accuracy on field recordings.

**Split very long files.** Files over two or three hours sometimes cause memory issues or timestamp drift. Splitting at natural breaks is safer.

**Use the GPU if you have one.** Whisper uses it automatically when PyTorch is installed with CUDA support. If transcription feels painfully slow, check that it's actually running on the GPU — it'll say so in the output.

**Keep it local for sensitive content.** One of Whisper's biggest advantages is that nothing leaves your computer. Client calls, medical notes, legal interviews — all of that stays private, which no cloud service can fully promise.

## Common Pitfalls

- **"ffmpeg not found":** FFmpeg isn't on your PATH. Reopen the terminal after installing, or add the folder manually.
- **"Out of memory":** drop to a smaller model or, on GPU, close other applications using graphics memory.
- **Wrong language detected:** always pass `--language` for short clips.
- **Extremely slow on Windows:** confirm you installed the CUDA build of PyTorch, not the CPU-only default.

## When to Use a Paid Service Instead

Whisper is the right choice if you have volume, privacy requirements, or a tight budget. It's the wrong choice if you want speaker labels out of the box, a searchable shared workspace, or you'd rather not touch a terminal. For team meeting notes, a dedicated tool like Otter or the approaches in our guide to [transcribing meetings automatically](/tutorials/09-transcribe-meetings-automatically/) will serve you better. For podcast production, [Descript](/reviews/04-descript-review/) bundles transcription with an editor that lets you cut audio by deleting words.

But for the core job — turning a recording into accurate text — it's hard to argue with a free tool that matches or beats the commercial options. Set it up once, and you'll never pay per minute again.
