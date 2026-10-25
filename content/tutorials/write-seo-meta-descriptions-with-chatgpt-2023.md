---
title: "How to Write SEO Meta Descriptions With ChatGPT (2023): A Repeatable Workflow"
description: "A step-by-step workflow for writing click-worthy SEO meta descriptions with ChatGPT, with prompt templates, length checks, and bulk tips for big sites."
date: 2023-03-23
updated: 2026-10-18
slug: "write-seo-meta-descriptions-with-chatgpt-2023"
categories: ["Tutorials"]
tags: ["chatgpt", "seo", "meta-descriptions", "content-marketing", "prompts"]
affiliate_disclosure: true
faqs:
  - question: "Do meta descriptions still matter for SEO?"
    answer: "They are not a direct ranking factor, but they shape the snippet people see in search results, which affects whether they click. Google often rewrites descriptions, especially when the query does not match yours, but a good description is still used regularly and is worth writing for your important pages."
  - question: "How long should a meta description be?"
    answer: "Aim for roughly 140 to 160 characters. Google truncates by pixel width rather than a fixed character count, so treat this as a guideline. Put the most important information in the first 120 characters so it survives truncation on mobile."
  - question: "Can ChatGPT count characters accurately?"
    answer: "Not reliably. It often misjudges length by 10 to 30 characters, so always check the final text with a character counter or a spreadsheet LEN() formula. Ask for a range and verify the output yourself."
  - question: "Should I use GPT-4 or GPT-3.5 for meta descriptions?"
    answer: "GPT-3.5 handles this task well and is fast, which matters when you are writing dozens. GPT-4, available to ChatGPT Plus subscribers, follows constraints like length and keyword placement more consistently, so it is worth using for your most important pages."
---

Meta descriptions are small, tedious, and easy to skip. They are also one of the few places where you get to pitch your page directly to someone scanning a search results page. On a site with hundreds of pages, writing them by hand rarely happens, so many pages ship with nothing and Google pulls whatever text it finds.

ChatGPT is well suited to this job. The output is short, the rules are clear, and you can check every result in seconds. This tutorial walks through a workflow we use for single pages and for bulk batches, including the places where ChatGPT tends to go wrong.

## What you need

- A ChatGPT account. The free version works. [ChatGPT Plus](/compare/chatgpt-plus-vs-free-2023/) gives you access to GPT-4, which follows formatting rules more reliably.
- A list of pages with their URL, target keyword, and a short summary or the page's opening paragraphs.
- A spreadsheet (Google Sheets or Excel) for length checks and bulk work.

## Step 1: Gather the page facts first

ChatGPT writes generic descriptions when it gets generic input. Before you prompt, collect four things for each page:

1. **Primary keyword.** The phrase you want the page to rank for.
2. **Searcher intent.** Are they trying to learn, compare, buy, or find a specific page?
3. **The page's real promise.** What does the reader actually get? A checklist, a price comparison, a free template?
4. **One differentiator.** Something specific that sets this page apart, such as "tested on 12 tools," "includes a free template," or "updated pricing."

The differentiator matters most. Without it, every description sounds like "Learn everything you need to know about X."

## Step 2: Use a structured prompt

Here is a prompt template that works well. Paste it into a new chat:

```
You are an SEO copywriter. Write 3 meta description options for the page below.

Rules:
- 140-155 characters each, including spaces
- Include the keyword "[KEYWORD]" naturally, ideally in the first half
- Match the searcher's intent: [INTENT]
- Mention this specific benefit: [DIFFERENTIATOR]
- Active voice, no clickbait, no quotation marks
- Do not start with "Discover" or "Learn"
- After each option, show its character count

Page title: [TITLE]
Page summary: [2-4 SENTENCES OR OPENING PARAGRAPH]
```

Asking for three options gives you something to choose from, and it shows you how the model is reading the page. Banning overused openers like "Discover" pushes it away from the most repetitive patterns.

## Step 3: Verify the length yourself

This is the step most people skip, and it is where ChatGPT is weakest. Language models process text in tokens, not characters, so the counts it reports are often wrong, sometimes by 20 characters or more.

Paste each option into a spreadsheet cell and use `=LEN(A2)` in the next column. Anything under about 120 characters wastes space; anything over about 160 risks being cut off. If an option is too long, ask:

```
Option 2 is 178 characters. Shorten it to 145-155 characters
without removing the keyword or the benefit.
```

In our testing, GPT-4 gets within range on the first try more often than GPT-3.5, but neither is reliable enough to skip the check. Our [GPT-4 vs GPT-3.5 comparison](/compare/gpt-4-vs-gpt-3-5-2023/) covers this instruction-following gap in more detail.

## Step 4: Edit for accuracy and voice

Read each description against the actual page. Watch for:

- **Invented claims.** ChatGPT may add "free," "updated daily," or "expert-reviewed" when the page says none of those things. Remove anything you cannot back up.
- **Keyword stuffing.** If the keyword appears twice, rewrite it to appear once.
- **Vague promises.** "Everything you need to know" says nothing. Replace it with the concrete benefit.
- **Brand voice drift.** If your site is casual and the description sounds like a press release, adjust it or add a voice note to your prompt.

A description that overpromises can get the click, but if the page does not deliver, readers go straight back to the results.

## Step 5: Scale it with a spreadsheet

For a batch of pages, set up a sheet with columns for URL, title, keyword, intent, differentiator, and summary. Then:

1. Copy 10 to 15 rows at a time into ChatGPT with this prompt:

```
For each row below, write one meta description of 140-155 characters.
Include the keyword naturally, match the intent, and mention the
differentiator. Return a table with columns: URL | Meta description.

[PASTE ROWS]
```

2. Paste the returned table back into your sheet.
3. Add a `LEN()` column and filter for anything outside 120-160.
4. Send the out-of-range rows back for revision in a single follow-up message.

Keep batches small. Long batches tend to drift: later descriptions get shorter, repeat phrasing, or ignore the differentiator column. If you are comfortable with a little scripting, OpenAI's ChatGPT API (the `gpt-3.5-turbo` model, which opened to developers this month) can run the same prompt row by row from a spreadsheet script, which keeps quality more consistent across hundreds of pages.

## Step 6: Publish, then measure

Add the descriptions in your CMS or SEO plugin, then watch click-through rate in Google Search Console over the next several weeks. Look at pages with plenty of impressions but a low CTR. Those are the best candidates for a second round of rewrites.

You can also give ChatGPT the context directly:

```
This page ranks around position 5 for "[KEYWORD]" but has a low
click-through rate. The current description is: [TEXT].
Write 3 alternatives that make the benefit clearer.
```

Remember that Google often shows its own snippet instead of yours, especially for long-tail queries. Do not panic if a description you wrote does not appear for every search.

## Tips for better results

- **Give it examples.** Paste two or three descriptions you have written and liked, then say "match this style." Few-shot examples improve consistency more than adjectives like "punchy" or "engaging."
- **Use numbers when they are real.** "Compare 7 tools" or "15-minute setup" can lift clicks, but only if the page supports them.
- **Front-load the value.** On mobile, the end of your description may be cut off. Put the keyword and the main benefit early.
- **Write unique descriptions.** Duplicate descriptions across pages show up as an issue in most SEO audit tools and waste the opportunity.
- **Reuse your prompt.** Save your best prompt in a document so you are not rebuilding it each time. The same approach works for [Instagram captions](/tutorials/write-instagram-captions-with-chatgpt-2023/) and other short-form copy.

## Common pitfalls

- **Trusting the character counts.** Covered above, and worth repeating.
- **Feeding it only the title.** Without the page summary, ChatGPT guesses at the content and often guesses wrong.
- **Ignoring intent.** A "best X" comparison page and a "how to X" tutorial need different pitches, even with similar keywords.
- **Over-automating.** Your homepage, top product pages, and highest-traffic articles deserve a human pass, not just a batch run.
- **Pasting confidential content.** Do not paste unpublished product details or client information into ChatGPT if your company has not approved it.

## Should you use a dedicated copywriting tool instead?

Tools like Copy.ai and Writesonic include meta description templates with built-in length guidance and bulk modes. If you are already paying for one, they are convenient. Our [Copy.ai vs Writesonic comparison](/compare/copy-ai-vs-writesonic-2023/) covers how they differ. But for most sites, ChatGPT plus a spreadsheet produces results that are just as good, costs less, and gives you more control over the prompt.

## Wrapping up

ChatGPT can take meta descriptions from a task you keep putting off to one you finish in an afternoon. The workflow is simple: collect real page facts, use a structured prompt, verify length outside ChatGPT, edit for accuracy, and track CTR. The model handles the drafting, and you stay responsible for accuracy and judgment.
