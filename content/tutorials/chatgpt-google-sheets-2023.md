---
title: "How to Use ChatGPT Inside Google Sheets (2023 Guide)"
description: "Step-by-step guide to running ChatGPT inside Google Sheets in 2023 using the GPT for Sheets add-on and your OpenAI API key, with cost and accuracy tips."
date: 2023-09-12
updated: 2025-10-02
categories: ["Tutorials"]
tags: ["chatgpt", "google sheets", "openai api", "automation", "productivity"]
affiliate_disclosure: true
faqs:
  - question: "Do I need to pay for the OpenAI API to use ChatGPT in Sheets?"
    answer: "Yes. The add-on connects to OpenAI's API, which is billed separately from ChatGPT Plus and charged per token used. New accounts often get a small free credit, but after that you pay for what you run, so keep an eye on volume."
  - question: "Is this the same as ChatGPT the website?"
    answer: "Not exactly. You're calling the same underlying models through OpenAI's API, but usage is metered per request and there's no chat memory between cells. Each formula is an independent, one-shot prompt."
  - question: "Will the results always be accurate?"
    answer: "No. The model can produce confident but wrong answers, so treat generated cells as drafts. Spot-check outputs, especially for anything factual, numeric, or business-critical."
---

Copying data out of a spreadsheet, pasting it into ChatGPT, and pasting the answer back gets old fast. In 2023 you can skip that loop entirely by calling the model directly inside Google Sheets with a simple formula like `=GPT("summarize this", A2)`. This guide walks through the setup end to end, plus the cost and accuracy gotchas nobody mentions.

## What You'll Need

- A **Google account** with access to Google Sheets.
- An **OpenAI API key** (this is separate from a ChatGPT Plus subscription).
- A few minutes to install and configure a Workspace add-on.

The most popular way to do this is the **"GPT for Sheets and Docs"** add-on, which adds custom functions like `GPT` and `GPT_LIST` to your spreadsheet. There are alternatives, but this one is free to install and widely used, so we'll use it as the example.

## Step 1: Get Your OpenAI API Key

Head to your OpenAI account dashboard and open the API keys section. Create a new secret key and copy it somewhere safe — you won't be able to view it again after closing the dialog.

A word on billing: the API is **pay-as-you-go and priced per token**, which is different from the flat ChatGPT Plus fee. As of 2023, `gpt-3.5-turbo` is inexpensive (fractions of a cent per short request), while `gpt-4` costs noticeably more per token. New accounts usually receive a small trial credit. Set a monthly spending limit in your OpenAI billing settings before you start — it's the single best way to avoid a surprise bill from a runaway formula.

## Step 2: Install the Add-On

In Google Sheets, open **Extensions → Add-ons → Get add-ons**, search for "GPT for Sheets and Docs," and install it. Google will ask you to grant permissions; review them and accept.

Once installed, reopen the **Extensions** menu, find the add-on, and choose the option to open its sidebar or settings. This is where you'll paste your key.

## Step 3: Connect Your API Key

In the add-on's settings panel, paste the OpenAI API key you created in Step 1 and save. The add-on stores the key for your account so the custom functions can authenticate with OpenAI on your behalf.

Test the connection with a trivial formula in any empty cell:

```
=GPT("Say hello in one word")
```

If you get a one-word greeting back, you're connected. If you see an error, the usual culprits are a mistyped key, an account with no billing set up, or a hit rate limit — wait a moment and try again.

## Step 4: Write Your First Real Prompt

The power comes from combining a prompt with cell references. Say column A holds customer reviews. In B2, try:

```
=GPT("Classify the sentiment as Positive, Negative, or Neutral: ", A2)
```

The add-on sends your instruction plus the contents of A2 to the model and drops the answer into B2. Drag the formula down and you've just classified an entire column in one pass.

Common patterns you'll reuse constantly:

- **Categorize:** `=GPT("Assign one category from [Billing, Bug, Feature]: ", A2)`
- **Extract:** `=GPT("Extract the company name from this email signature: ", A2)`
- **Summarize:** `=GPT("Summarize in one sentence: ", A2)`
- **Translate:** `=GPT("Translate to Spanish: ", A2)`
- **Generate:** `=GPT("Write a friendly 15-word product tagline for: ", A2)`

## Step 5: Fill Down Carefully

It's tempting to select a formula and fill 5,000 rows at once. Don't — at least not on the first run. Each row is a separate API call, so a large fill can be slow, hit rate limits, and cost real money before you notice a prompt is producing junk.

Instead, run **10 to 20 rows first**, read the output, refine your wording, and only then expand. When you're happy with the results, consider **pasting the AI columns as static values** (Copy → Paste special → Values only). Otherwise the formulas can re-run and re-bill every time the sheet recalculates.

## Step 6: Choose the Right Model

The add-on lets you pick which model the functions use. In 2023, the practical tradeoff is:

- **`gpt-3.5-turbo`** — fast and cheap. Great for classification, extraction, and short generation across many rows.
- **`gpt-4`** — slower and pricier, but better at nuanced reasoning and following complex instructions. Reserve it for rows where quality matters more than volume.

A good habit is to prototype on 3.5, then selectively upgrade only the tasks that need the extra horsepower.

## Tips for Better Results

- **Be explicit about format.** If you want a single word, say "Answer with one word only." Models over-explain by default, which breaks tidy spreadsheets.
- **Give examples.** A one-line example inside the prompt dramatically improves consistency for classification tasks.
- **Keep prompts short but specific.** Vague instructions produce vague cells. Our guide on [writing better AI prompts](/how-to-write-better-ai-prompts/) applies directly here.
- **Watch your token count.** Long source cells cost more and can get truncated. Trim inputs to what the task actually needs.

## Common Pitfalls

- **Runaway costs.** A fill-down over thousands of rows with `gpt-4` adds up quickly. Set a billing limit and test small.
- **Hallucinations.** The model will confidently invent facts. Never trust generated numbers or claims without checking.
- **Rate limits.** Big batches can trip OpenAI's per-minute limits, leaving error cells. Split large jobs into smaller runs.
- **Recalculation surprises.** Live formulas re-run on edit. Convert finished columns to values to lock in results and stop re-billing.

## Where to Go Next

Once you're comfortable, this same approach scales into real workflows — cleaning data, drafting outreach, or triaging feedback at volume. If you'd rather not manage an API key, the standard [ChatGPT](/reviews/chatgpt-review/) web app still works fine for one-off tasks, and our tutorial on [using ChatGPT for Excel formulas](/tutorials/use-chatgpt-for-excel-formulas/) covers the spreadsheet-logic side. To go deeper on the API itself, see our [beginner's guide to the OpenAI API](/openai-api-guide-beginners/).

Bringing ChatGPT into Google Sheets turns a chat toy into a batch-processing engine. Start small, verify the output, keep an eye on cost, and you'll wonder how you ever tagged data by hand.
