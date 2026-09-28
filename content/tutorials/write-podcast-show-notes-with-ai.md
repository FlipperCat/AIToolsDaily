---
title: "How to Write Podcast Show Notes with AI (2026): A Repeatable 30-Minute Workflow"
description: "Turn a podcast episode into accurate show notes, timestamps, and a newsletter blurb with AI, plus the fact-checks that stop hallucinated quotes and links."
date: 2026-09-25
updated: 2026-09-25
categories: ["Tutorials"]
tags: ["podcasting", "show-notes", "ai-writing", "transcription", "content-repurposing"]
affiliate_disclosure: true
faqs:
  - question: "Which AI tool is best for podcast show notes?"
    answer: "Any strong general-purpose assistant, such as ChatGPT or Claude, works well once you give it a clean transcript. Podcast editors like Descript and Riverside also generate show notes inside the app, which is faster but less customizable. The transcript quality matters more than which model you use."
  - question: "Can AI generate accurate timestamps?"
    answer: "Only if the transcript it reads includes timestamps. If you paste plain text, the model will guess, and the guesses are often wrong. Export a transcript with timecodes, and still spot-check three or four chapter markers against the audio."
  - question: "Will AI-written show notes hurt my podcast SEO?"
    answer: "Not if they're accurate and specific to the episode. Generic, interchangeable summaries don't help anyone. Notes that name the guest, the specific topics, and the resources mentioned give search engines and listeners something useful."
  - question: "How long should podcast show notes be?"
    answer: "For most shows, a 2-3 sentence hook, 5-8 key takeaways, chapter timestamps, and a links section is enough, roughly 250-500 words. Interview shows with lots of references can run longer. Put the most important information first because podcast apps truncate descriptions."
---

Show notes are the least exciting part of publishing a podcast, and the part most likely to get skipped. Podcast apps show them, search engines index them, and listeners use them to find the book or tool a guest mentioned. Writing them by hand can take an hour per episode.

AI can take that to about 30 minutes, including review. The steps below work with any capable assistant. The prompts matter less than the order of operations: transcript first, extraction second, writing third, and fact-checking last.

## What You'll Need

- **The episode audio or video file**
- **A transcription tool** that exports timestamps: Descript, Riverside, a Whisper-based app, or your hosting platform's built-in transcripts
- **An AI assistant** with a large context window, such as ChatGPT or Claude. A one-hour episode transcript is roughly 9,000 to 12,000 words, which current models handle in one pass.
- **Your show notes template**, even if it's just an old episode you liked

## Step 1: Get a Clean, Timestamped Transcript

Everything downstream depends on this. A transcript with misheard names and no speaker labels produces show notes with misspelled guests and misattributed quotes.

Export the transcript with:

- **Speaker labels** (host vs. guest, by name)
- **Timestamps** at least every paragraph, ideally every 30 to 60 seconds
- **Custom vocabulary fixed**, including the guest's name, company, and any product names

Most editors let you correct words in a few clicks. Spend five minutes fixing proper nouns now. It prevents most of the errors you'd catch later. If you edit in Descript, our [Descript review](/reviews/04-descript-review/) covers its transcript tools, and we compare it with a common alternative in [Descript vs Riverside](/compare/descript-vs-riverside-2024/).

## Step 2: Extract Facts Before Writing Anything

Don't ask for show notes in the first prompt. Ask the model to pull out the raw material, so you can check it before it becomes polished prose.

> Here's the transcript of episode 142 of [Show Name], an interview with [Guest Name], [Guest Title] at [Company].
>
> Extract the following. Only use what's in the transcript. If something is unclear, write "UNCLEAR" instead of guessing.
>
> 1. The 5-8 main topics discussed, each with the timestamp where it starts
> 2. Every book, tool, website, person, or company mentioned, with the timestamp
> 3. 3-5 direct quotes from the guest that would work as pull quotes, copied word for word with timestamps
> 4. Any specific numbers or claims the guest made

The "UNCLEAR" instruction is important. Without it, models tend to fill gaps with plausible guesses, such as a URL that looks right but doesn't exist.

## Step 3: Review the Extraction (5 Minutes)

Scan the list against your memory of the episode:

- **Topics:** Are the chapter breaks in sensible places? Merge or split as needed.
- **Resources:** Is every mention real? Search each tool and book title to find the correct link yourself. **Never publish a link the AI generated without clicking it.**
- **Quotes:** Search the transcript for each quote to confirm it's verbatim. Models sometimes smooth wording or combine two sentences.
- **Claims:** If the guest cited a statistic, decide whether to include it. You're publishing it under your show's name.

This is the step that makes the workflow trustworthy. It's also faster than it sounds, because you're checking a list instead of reading prose.

## Step 4: Generate the Show Notes From the Verified List

Now paste your corrected extraction back in with your template:

> Using only the verified information below, write show notes in this format:
>
> - A 2-3 sentence episode description. Lead with what the listener will learn, not "In this episode…"
> - "What we cover" section: 5-8 bullets with timestamps
> - One pull quote
> - "Links and resources" section: use exactly the links I provide
> - A one-line guest bio
>
> Tone: conversational, specific, no hype words like "game-changing" or "deep dive."
>
> [paste verified extraction + correct links]

Include one of your past show notes as a style example. It's the fastest way to get output that sounds like your show.

## Step 5: Create the Extra Formats in the Same Session

While the context is loaded, create the other assets you need:

- **Podcast app description:** "Shorten the description to under 600 characters and put the guest name in the first sentence." Many apps truncate after the first couple of lines.
- **YouTube chapters:** "Format the timestamps as YouTube chapters, starting at 0:00, with titles under 50 characters."
- **Newsletter blurb:** "Write a 100-word newsletter section teasing this episode, ending with a link placeholder."
- **Social posts:** "Write 3 short posts, each built around one verified pull quote."

Each takes seconds, and they stay consistent because they're built from the same verified facts.

## Step 6: Final Human Pass

Read the finished notes once, from top to bottom, and check:

- Guest name, title, and company are spelled exactly right
- Every timestamp you spot-checked lands within a few seconds
- Every link works and goes where it claims
- Nothing promises content the episode doesn't deliver

Then publish.

## Tips for Better Results

**Build a reusable prompt.** Save Steps 2 and 4 as a template, or put them in a Claude Project or custom GPT with your style guide and two example episodes. After a few episodes, you'll barely edit the output.

**Keep the guest's voice.** Ask for pull quotes and short paraphrases instead of a full rewrite of what the guest said. Listeners want to hear the guest, not a model's summary of them.

**Use the transcript for SEO, not keyword stuffing.** Ask: "What specific questions does this episode answer? List them as a listener would search them." Use one or two naturally in the description.

**Batch episodes.** If you record several episodes at once, run the extraction for all of them first, verify them in one sitting, then generate notes. Verification is faster when you're in that mode.

## Common Pitfalls

**Hallucinated links.** This is the biggest risk. Models confidently generate URLs that look real and return 404s, or point to the wrong company with a similar name. Add links yourself.

**Wrong timestamps from untimed transcripts.** If your transcript has no timecodes, the model can't know where topics start. It will still produce timestamps if you ask, and they'll be fiction.

**Generic summaries.** "Jane shares her insights on leadership and growth" tells a listener nothing. If the output reads like it could describe any episode, ask for specifics: "Name the actual framework she describes and the example she gives."

**Over-long notes.** More isn't better. Put the hook and key takeaways first and cut the rest.

**Consent and sensitive content.** If a guest said something off the cuff that you edited out of the audio, make sure it isn't in the transcript you paste. Work from the transcript of the final edit, not the raw recording.

## Built-In Tools vs. a General Assistant

Descript, Riverside, and many podcast hosts now generate show notes with one click. They're convenient and fine for a first draft. For more on Riverside's version, see our [Riverside review](/reviews/riverside-review-2026/).

The tradeoff is control. One-click tools rarely separate extraction from writing, so there's no natural checkpoint for verifying quotes and links. They also don't learn your format as well as a saved prompt with examples. A good compromise is to use the built-in draft as input for Step 2, then continue with the full workflow.

## The Bottom Line

AI is good at the tedious parts of show notes: finding topic breaks, pulling resources, and reformatting one set of facts into five formats. It's bad at knowing which links are real and which quotes are exact. Split the job to match: let the model extract and draft, and keep yourself in charge of verification. Most shows can go from an hour of writing to about 30 minutes, with notes that are more accurate than the rushed version you'd write by hand.
