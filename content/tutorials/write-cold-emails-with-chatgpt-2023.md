---
title: "How to Write Cold Emails with ChatGPT (2023): A Step-by-Step Workflow That Doesn't Sound Like a Bot"
description: "Use ChatGPT to draft short, personalized cold emails and follow-ups. Covers context blocks, prompts, editing, compliance basics, and common pitfalls."
date: 2023-02-09
updated: 2026-10-09
slug: "write-cold-emails-with-chatgpt-2023"
categories: ["Tutorials"]
tags: ["chatgpt", "cold email", "sales", "outreach", "prompts", "small business"]
affiliate_disclosure: true
faqs:
  - question: "Can ChatGPT research my prospects for me?"
    answer: "No. ChatGPT can't browse the web, and its knowledge stops at its training cutoff, so it knows nothing about a prospect's recent news, hires, or launches. Do the research yourself, paste the relevant notes in, and let ChatGPT turn them into a sentence."
  - question: "Will prospects be able to tell the email was written by AI?"
    answer: "They can if you send the first draft. Unedited ChatGPT emails tend to open with pleasantries, overuse words like 'streamline' and 'leverage', and run too long. A two-minute edit that cuts the opener, adds one specific detail, and shortens the ask fixes most of that."
  - question: "Is it worth paying for ChatGPT Plus for cold email?"
    answer: "Probably not just for this. The free version writes cold emails fine. Plus, at about $20 a month, mainly buys faster responses and access when the free tier is at capacity, which matters if you draft in bulk during busy hours."
---

Cold email is a good fit for ChatGPT. The emails are short, the structure repeats, and the hardest part is getting started on a blank page. It is also a bad fit if you let ChatGPT do the whole job, because the default output reads like every other generic sales email in your prospect's inbox.

This guide shows a workflow that uses ChatGPT for drafting and variations while you supply the research, the judgment, and the final edit. It works with the free version of ChatGPT. If you are new to the tool, start with our [explainer on what ChatGPT is and how it works](/what-is-chatgpt-everything-you-need-to-know-2023/).

## Before you open ChatGPT: know what you're selling and to whom

ChatGPT cannot fix a vague offer. Before writing a single prompt, answer three questions in plain language:

1. **Who exactly is this for?** "Marketing managers" is too broad. "Marketing leads at 20-100 person B2B software companies who just hired their first SDR" is something you can write to.
2. **What problem do they have right now?** Name a specific pain, not a category.
3. **What is the smallest next step you want?** A 15-minute call, a reply, permission to send a sample. Smaller asks get more replies.

Write these down. You'll paste them into every session.

## Step 1: Build a reusable context block

ChatGPT doesn't remember anything between conversations, so you need to re-supply your context every time. Keep a short text file with a context block like this:

```
About me: I run [company], which helps [audience] with [outcome].
Offer: [one sentence on what you provide and the result].
Proof: [one real result or client type, no exaggeration].
Ask: [the small next step].
Tone: plain, friendly, direct. No buzzwords. No "I hope this finds you well".
Length: under 120 words. Short paragraphs. No bullet lists.
```

Paste this at the start of each new chat. It's the single biggest improvement you can make to output quality, because it stops ChatGPT from guessing.

## Step 2: Gather 2-3 real details per prospect

Personalization is what separates a cold email that gets a reply from one that gets deleted. ChatGPT can't find this for you. Spend a few minutes per prospect on:

- Their company site (recent launches, hiring pages, pricing changes)
- A recent post, talk, or article by the person
- Something concrete about their situation that connects to your offer

Write these as short notes. For example: "Posted a job for a second support hire last week. Their help center has 40+ articles but no search."

## Step 3: Prompt for the first draft

With the context block in place, give a specific instruction:

```
Using the context above, write a cold email to [name], [role] at [company].
Prospect notes: [paste your 2-3 notes].
Structure: one-line observation based on the notes, one sentence on the
likely problem, one sentence on how we help, one low-pressure ask.
Give me 3 versions with different opening lines.
```

Asking for a structure keeps the email tight. Asking for three versions gives you options to pick and combine, which beats regenerating the same prompt over and over.

## Step 4: Generate subject lines separately

Subject lines get better when they're their own task:

```
Write 10 subject lines for this email. Under 6 words each. Lowercase is fine.
No clickbait, no exclamation marks, no fake "Re:" or "Fwd:".
```

Pick something that sounds like a colleague wrote it. Short and specific subject lines tend to beat clever ones.

## Step 5: Edit like a human

This step decides whether your email works. Read the draft out loud and fix these common ChatGPT habits:

- **Throat-clearing openers.** Delete "I hope this email finds you well" and "I came across your profile and was impressed."
- **Inflated vocabulary.** Swap "leverage," "streamline," "synergy," and "revolutionize" for plain words.
- **Over-claiming.** ChatGPT will happily promise "2x results." Remove anything you can't back up.
- **Length.** If it runs past about 120 words, cut. Most cold emails get read on a phone.
- **Made-up details.** Check that every fact about the prospect came from your notes, not from ChatGPT filling gaps.

A good test: would you send this exact email to a peer you respect? If it would feel awkward, rewrite it.

## Step 6: Write the follow-up sequence

Most replies come from follow-ups, not the first email. Ask ChatGPT for a short sequence:

```
Write 3 follow-up emails for the email above, to be sent 3, 7, and 14 days later.
Each under 60 words. Each adds something new (a short example, a useful link
idea, a different angle). The last one should be a polite close-the-loop.
Don't guilt-trip or say "just bumping this up".
```

Then edit these with the same checklist. Swap any "useful link idea" placeholders for real resources you have.

## Step 7: Save what works as templates

After a week of sending, you'll see which openers and angles get replies. Save the winners, along with the prompts that produced them, in a shared doc. That's the same approach we use in our guide to [writing customer support macros with ChatGPT](/tutorials/how-to-write-customer-support-macros-with-chatgpt-2023-guide/): AI drafts the first version, and you keep the ones that work.

## Compliance and deliverability: what ChatGPT won't handle

ChatGPT writes text. It doesn't make your campaign legal or get it into the inbox.

- **Laws vary by country.** In the US, CAN-SPAM requires accurate sender information, a physical mailing address, and a working way to opt out. EU and UK rules under GDPR are stricter about contacting individuals. If you're unsure, get advice before sending at volume.
- **Authenticate your domain.** Set up SPF, DKIM, and DMARC records. Many teams send cold email from a separate domain to protect their main one.
- **Send in small batches.** Sudden high volume from a new domain is a fast way into the spam folder.
- **Don't paste sensitive data.** OpenAI says ChatGPT conversations may be reviewed and used to improve its models. Keep customer lists, personal phone numbers, and confidential deal details out of your prompts.

## Common pitfalls

- **Generating 500 emails and sending them unread.** Volume without editing burns your domain reputation and your market.
- **Personalization that isn't personal.** "I saw you work at [company]" is not personalization. Use something only that prospect would recognize.
- **Letting ChatGPT pick your offer.** If you ask "what should I sell to dentists?", you'll get generic ideas. Decide your offer yourself.
- **Trusting facts from ChatGPT.** It can confidently state things about companies that are outdated or wrong. Only use details you've verified.
- **Writing in a second language without a check.** If English isn't your first language, ChatGPT helps, but run the final version through a careful proofread or a tool like [DeepL Write](/reviews/deepl-write-review-2023-can-the-translation-giant-fix-your-writing/) to catch awkward phrasing.

## Should you use a dedicated marketing AI instead?

Tools built for marketers, like [Jasper Chat](/reviews/jasper-chat-review-2023-a-chatgpt-alternative-built-for-marketers/), add templates, brand voice settings, and team features. If you're a team producing a lot of copy, those can be worth paying for. For a founder or small sales team writing a few dozen targeted emails a week, free ChatGPT and a solid context block cover most of what you need.

## The short version

1. Define audience, problem, and ask before prompting.
2. Keep a reusable context block and paste it into every chat.
3. Research 2-3 real details per prospect yourself.
4. Ask for structure and multiple versions.
5. Edit hard: cut the opener, the buzzwords, and the over-claims.
6. Build a short, useful follow-up sequence.
7. Handle compliance and deliverability outside ChatGPT.

Used this way, ChatGPT gets you from blank page to a sendable draft in minutes, while the email still sounds like it came from a person who did their homework.
