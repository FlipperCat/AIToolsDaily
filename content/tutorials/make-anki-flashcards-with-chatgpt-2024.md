---
title: "How to Make Anki Flashcards With ChatGPT (2024): A Workflow That Survives Contact With Exams"
description: "Turn lecture notes, PDFs, and textbook chapters into clean Anki decks with ChatGPT. Prompt templates, import settings, and the mistakes that make AI-generated cards useless."
date: 2024-09-17
updated: 2025-11-12
categories: ["Tutorials"]
tags: ["chatgpt", "anki", "flashcards", "studying", "productivity"]
affiliate_disclosure: true
faqs:
  - question: "Will ChatGPT make up facts on my flashcards?"
    answer: "Yes, sometimes, and that is the main risk of this workflow. It is most likely when you ask it to generate cards from memory rather than from text you pasted in. Always give it the source material, ask it to only use what is in the source, and read every card before you import. A wrong card studied for a month is worse than no card."
  - question: "Should I use Basic cards or Cloze deletions?"
    answer: "Cloze for anything that lives naturally in a sentence: definitions, mechanisms, lists, dates. Basic question-and-answer cards for things you would be asked directly, like 'what drug class is X' or 'what is the formula for Y'. Most decks end up mostly cloze with a minority of basic cards. ChatGPT can produce either format if you show it the syntax."
  - question: "Does this work with Claude or Gemini instead of ChatGPT?"
    answer: "Yes. The prompt templates here work with any capable chat model. Claude is slightly better at sticking to the source text without adding outside facts, and it handles long PDFs well. The Anki import steps are identical regardless of which model wrote the cards."
---

## How to Make Anki Flashcards With ChatGPT (2024): A Workflow That Survives Contact With Exams

Making flashcards is the part of spaced repetition that everybody hates. Writing good cards takes longer than studying them, and most students give up on Anki somewhere around the third chapter because the card backlog outgrows the reviewing.

ChatGPT removes the writing bottleneck. What it does not remove is the judgment. An AI will happily generate 200 cards from a chapter, of which maybe 60 are worth studying. This tutorial is about getting the 60 and skipping the 140, then importing them without spending an evening fighting CSV formatting.

I have used this workflow for a pharmacology module, a language course, and a professional certification. The steps are the same each time.

## What makes a flashcard worth studying

Before touching ChatGPT, it helps to know what you are asking it for. Two rules cover most of it.

**One fact per card.** A card that asks "list the four causes of X" is four cards pretending to be one. You will fail it on the third cause for months. Split it.

**The answer should be short.** If the back of a card is a paragraph, you will grade yourself on vibes. Aim for a word, a number, a short phrase, or a single sentence.

Everything below is designed to push ChatGPT toward cards that obey those two rules, because left to its own devices it produces the opposite.

## Step 1: Gather the source text

ChatGPT generates far better cards from text you give it than from what it remembers about a topic. Its memory is where the fabricated facts come from.

Your options, roughly in order of convenience:

- **Paste your notes directly.** Best for lecture notes and anything under a few thousand words.
- **Upload the PDF.** ChatGPT accepts file uploads on paid plans, and it can read a textbook chapter straight from the file. Our [ChatGPT review](/reviews/chatgpt-review/) covers which plans include file handling.
- **Use a PDF chat tool first.** For a long textbook, a tool like [ChatPDF](/reviews/chatpdf-review-2023/) or Google's [NotebookLM](/reviews/notebooklm-review/) lets you pull out the relevant sections before you generate cards. NotebookLM in particular is good at answering "what are the key concepts in chapter 7" with citations, which gives you a clean outline to feed forward.

Work in chunks. One lecture, one chapter section, or one topic at a time. Quality degrades noticeably when you paste in twenty pages and ask for everything at once.

## Step 2: Use a prompt that enforces the format

The prompt is doing three jobs: constraining the content to the source, constraining the card style, and producing output Anki can import without cleanup. Here is the template I use for cloze cards.

```
You are helping me make Anki flashcards from the text below.

Rules:
- Use ONLY information in the text. Do not add facts from outside it.
- One fact per card. If a sentence contains a list, make one card per item.
- Write each card as a single complete sentence with the key term wrapped in Anki cloze syntax, like this: The capital of France is {{c1::Paris}}.
- Keep sentences under 20 words.
- Skip trivia, examples, and anything that is only context.
- Output ONLY the cards, one per line, with no numbering, no headers, and no blank lines.

Text:
[paste here]
```

For basic front/back cards, swap the format rule for this:

```
- Write each card as: question<TAB>answer
- Answers must be under 10 words.
```

Two details matter here. Asking for a tab as the separator avoids the classic problem of commas and semicolons inside the answer breaking the import. And asking for no numbering or headers means you can paste the output straight into a text file.

If the model produces fewer cards than you expected, that is often correct. If it produces a wall of them, add "Limit to the 25 most important facts" and run it again.

## Step 3: Read every card and cut

This is the step people skip, and it is the one that decides whether the deck is any good.

Paste the output into a plain text editor and go line by line. You are looking for:

- **Fabrications.** A card that sounds plausible but is not in your source. Delete it.
- **Compound cards.** Two facts snuck into one sentence. Split or delete.
- **Context-dependent cards.** A cloze like "This process occurs in the {{c1::liver}}" is unanswerable without knowing which process. Rewrite with the subject named.
- **Trivia.** Page numbers, author names, example values. Delete unless your exam actually tests them.
- **Duplicates.** Models love restating the same fact in different words.

A realistic cut rate is 30 to 50 percent. A batch of 40 generated cards should come out at 20 to 28 keepers. If you are keeping almost everything, you are probably not reading carefully enough.

## Step 4: Save as a text file

Save the cleaned list as a `.txt` file with UTF-8 encoding. Most editors default to this. If you are on Windows and used Notepad, check the encoding dropdown in the save dialog, because the older ANSI default mangles accented characters, which matters for language decks.

For cloze cards, each line is one card. For basic cards, each line is `question<TAB>answer`. Do not add a header row.

## Step 5: Import into Anki

1. In Anki, choose **File > Import** and select your text file.
2. Set **Type** to **Cloze** for cloze cards or **Basic** for question/answer cards.
3. Pick the **Deck** you want the cards in. Create a new one per subject if you have not already.
4. Check the **Field separator** is set correctly. Anki usually detects tabs automatically. If the preview looks wrong, change it here.
5. Turn on **Allow HTML in fields** only if you included formatting. For plain text, leave it off.
6. Set the duplicate handling to **Update existing notes** if you plan to re-import corrected batches later. Otherwise leave the default.
7. Add a **Tag** for the chapter or lecture. This is what lets you filter the deck later.
8. Click **Import** and check the count matches the number of lines in your file.

If the import reports fewer notes than expected, the usual culprit is a stray blank line or a card missing its cloze markers. Anki skips those silently.

## Step 6: Iterate on the leeches

After a week or two of reviewing, Anki will flag "leech" cards, meaning ones you keep failing. These are usually badly written rather than genuinely hard. Copy the leeches back into ChatGPT with:

```
These flashcards are too hard to remember. For each one, rewrite it as 2-3 simpler cards, or explain why it is unanswerable as written.
```

This reliably fixes the compound-card problem you missed in step 3, and it is the point where the workflow starts to feel like it is working with you rather than just generating volume.

## Tips that make a real difference

- **Generate cards for what you got wrong on practice questions,** not for everything in the chapter. The highest-value cards are targeted at gaps.
- **Ask for reverse cards** on vocabulary and definitions. Add "Also produce a version with the term as the answer" and import both.
- **Save the prompt as a Custom GPT** or a saved prompt if you are on a paid plan. You will use it dozens of times.
- **Try Claude for dense sources.** In my experience [Claude](/reviews/claude-review/) is slightly more disciplined about staying inside the pasted text and handles long PDFs comfortably.
- **Keep batches small.** 20 to 40 cards per run. The reading step in step 3 only works if you actually do it.

## Pitfalls to avoid

**Generating without a source.** "Make me flashcards about the Krebs cycle" produces confident, occasionally wrong cards. Paste the textbook section instead.

**Trusting the count.** More cards is not more learning. A tight 200-card deck beats a sprawling 800-card one that you abandon.

**Skipping the read-through because the cards look fine.** They always look fine. The errors are subtle by design, because the model writes fluent sentences whether or not they are true.

**Semicolons and commas as separators.** Use tabs. The one time your answer contains a comma, a CSV import will split it into two fields and silently corrupt the card.

**Importing into the default deck.** You will never untangle it. One deck per subject, one tag per chapter, from the start.

Done this way, generating and cleaning a chapter's worth of cards takes about twenty minutes instead of two hours, and the deck you end up with is one you will actually keep reviewing.
