---
title: "How to Write a Business Plan with AI (2024): A Step-by-Step Workflow"
description: "A step-by-step workflow for writing a real business plan with AI — market research, financials, competitor analysis, and what you must write yourself."
date: 2024-09-24
updated: 2026-02-18
categories: ["Tutorials"]
tags: ["business plan", "chatgpt", "claude", "startups", "ai writing"]
affiliate_disclosure: true
faqs:
  - question: "Can AI write a business plan that a bank will accept?"
    answer: "It can write the document, but not the substance. Lenders and investors care about your numbers, your customer evidence, and your assumptions — none of which AI knows. Use it to structure, draft, and pressure-test; supply the real inputs yourself."
  - question: "Which AI tool is best for a business plan?"
    answer: "There's no single best. In practice you want a research tool with citations for market data, a long-context model for drafting and critique, and a spreadsheet for the financials. A dedicated 'AI business plan generator' usually gives you a polished template with hollow content."
  - question: "How long should this take?"
    answer: "A focused weekend for a first complete draft if you already know your business. The research and financial modeling steps take the longest. The writing itself — the part people dread — is the fastest part once the inputs exist."
---

Most "write a business plan with AI" advice ends at *paste this prompt into ChatGPT*. What you get back is thirty paragraphs of confident, generic filler: a TAM you didn't calculate, competitors that may not exist, and revenue projections with no model behind them. It reads well and it's worthless the second anyone asks a question.

Here's a workflow that actually produces a plan you can defend. The rule underneath it: **AI drafts and critiques, you decide and verify.**

## Before you start: gather your inputs

Open a plain document and write down, in fragments, whatever you already know:

- What you sell, to whom, and at what price
- How many customers or conversations you've actually had
- Your real costs — the ones you've paid, not the ones you estimate
- Who else does this and why anyone would pick you
- How much money you need and what it's for

This messy file is the single most important artifact in the process. Everything AI produces later is only as good as what's in it. If a section is blank, that's a research task, not a prompting task.

## Step 1 — Pick a structure first, not a prompt

Business plans have conventional shapes, and which one you use depends on your reader. A bank loan application wants a traditional plan with detailed financials. An investor wants a narrative plus a market thesis. An internal plan can be a one-pager.

Ask your model of choice to lay out the section list for your specific case:

> "I'm applying for a $150k SBA loan for a two-location coffee roastery. List the sections a traditional business plan needs for this reader, in order, with one sentence on what each section has to prove. Don't write the plan yet."

You now have a table of contents and, more usefully, a checklist of claims you'll have to support. Save it.

## Step 2 — Do the market research with a tool that cites sources

This is where generic AI drafting fails hardest. A chat model will happily invent a market size figure. Use a research tool that shows its sources instead — Perplexity is the fastest option here, and our [guide to automating research with Perplexity](/tutorials/automate-research-with-perplexity/) covers the workflow in depth.

Ask narrow, checkable questions:

- "What is the average annual revenue of an independent coffee roastery in the US? Cite sources."
- "How many specialty coffee shops operate in [your metro area]?"
- "What are typical gross margins on wholesale vs. retail coffee?"

Then **click through to the sources**. Every number that ends up in your plan should have a link you've personally opened saved next to it. If a figure has no traceable source, it doesn't go in the plan.

For sizing your market, don't ask for "TAM." Build it: units × price × realistic capture rate, with each input sourced. AI is genuinely good at *checking* that arithmetic and stress-testing the capture assumption. It's terrible at inventing it honestly.

## Step 3 — Competitor analysis you can verify

List your real competitors yourself — the ones you've visited, called, or bought from. Then use AI to structure what you found rather than to find it.

A prompt that works:

> "Here are five competitors and my notes on each [paste]. Build a comparison table with columns: positioning, price point, apparent target customer, visible weakness. Then tell me which of my claimed differentiators is weakest and why."

That last clause matters more than the table. Asking a model to attack your differentiation surfaces the objection an investor will raise, while you still have time to fix it.

## Step 4 — Build the financial model in a spreadsheet, not in prose

Never let AI narrate numbers it didn't compute. Build a simple three-statement-lite model in Sheets or Excel:

1. **Revenue** — units per month × price, ramping by a growth rate you can justify
2. **COGS** — direct cost per unit
3. **Operating expenses** — rent, payroll, software, insurance, marketing, listed line by line
4. **Cash flow** — the monthly balance, including your starting capital and the loan

AI helps in two specific ways here. First, formula writing — describe the calculation in plain language and get the formula back (our [ChatGPT for Excel formulas guide](/tutorials/use-chatgpt-for-excel-formulas/) covers this pattern). Second, assumption review: paste your assumption list and ask, "Which of these is most likely to be wrong, and what happens to the cash flow if it's off by 30%?"

Build three scenarios — conservative, expected, optimistic — and put the conservative one in the plan. Nobody has ever been penalized for underpromising in a business plan.

## Step 5 — Draft section by section, feeding real inputs

Now, finally, drafting. Do it one section at a time, and paste in your actual material each time. A good drafting prompt has four parts: role, audience, source material, and constraints.

> "You're helping me write the Operations section of a business plan for an SBA loan officer. Here are my notes on staffing, equipment, suppliers, and daily workflow [paste]. Write 400–500 words in plain, concrete language. Use only the facts I gave you. If something important is missing, list it at the end as a question instead of inventing it."

That final instruction is the whole trick. It converts hallucination into a to-do list. Models with large context windows handle this well — [Claude](/reviews/claude-review/) is particularly good at long, document-grounded drafting, and [ChatGPT](/reviews/chatgpt-review/) is fine if you keep sections short.

Write the **executive summary last**, from the finished plan. It's the only section most readers finish, and it can only be honest if the rest exists first.

## Step 6 — Adversarial review

Before anyone else reads it, run the draft through a hostile pass:

> "You are a skeptical loan officer. Read this plan and list the ten questions you'd ask that it fails to answer, ordered by how likely they are to sink the application."

Do the same from a second angle — a competitor, a potential customer, an accountant. You'll get overlap and some noise, but the questions that appear in every pass are the real holes. Fix those.

If you have a large pile of source material — market reports, supplier quotes, transcripts of customer conversations — loading it into a grounded workspace like [NotebookLM](/reviews/notebooklm-review/) makes this review step considerably more accurate, since answers are tied to your documents instead of the model's memory.

## Step 7 — Rewrite in your own voice

AI drafts share a texture: balanced, hedged, faintly corporate. Readers who see a lot of plans notice it. Go through the whole document and do three things by hand:

- Cut every sentence that could appear in anyone's plan
- Replace abstractions with specifics ("strong local demand" → "42 of 60 people we surveyed at the farmers market said they'd pay $18/bag")
- Add the things only you know — the failed first attempt, the supplier relationship, the reason you're doing this

## Pitfalls to avoid

- **Fabricated statistics.** The single most common failure. If you can't click a source, delete the number.
- **Projections with no model.** "We expect $1.2M in year three" without a spreadsheet behind it reads as a guess, because it is one.
- **One giant prompt.** Asking for the whole plan at once guarantees shallow, repetitive sections. Section by section, always.
- **Skipping the primary research.** No amount of prompting substitutes for twenty conversations with potential customers.
- **Pasting confidential data into a consumer account.** Check the data-retention settings on whatever tool you use before uploading financials or contracts.

## What you end up with

A plan whose numbers you can trace, whose weaknesses you've already been asked about, and whose voice sounds like a person who knows the business. AI did the structuring, the formula wrangling, the first drafts, and the hostile review — maybe 60% of the hours. The 40% you kept is the 40% that makes it credible.
