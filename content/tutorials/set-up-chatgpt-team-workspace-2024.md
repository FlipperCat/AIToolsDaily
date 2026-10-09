---
title: "How to Set Up a ChatGPT Team Workspace (2024): Step-by-Step for Small Teams"
description: "Set up ChatGPT Team the right way: billing, inviting members, admin settings, shared GPTs, and data rules. A practical January 2024 walkthrough."
date: 2024-01-24
updated: 2026-10-01
categories: ["Tutorials"]
tags: ["chatgpt", "chatgpt-team", "openai", "custom-gpts", "team-productivity", "ai-admin"]
affiliate_disclosure: true
faqs:
  - question: "How much does ChatGPT Team cost?"
    answer: "As of January 2024, ChatGPT Team costs about $25 per user per month billed annually, or about $30 per user per month billed monthly. It requires at least two seats. Prices can change, so check OpenAI's pricing page before you commit."
  - question: "Does OpenAI train on ChatGPT Team data?"
    answer: "OpenAI says it does not use Team workspace conversations or files to train its models by default. That's one of the main differences from individual Free and Plus accounts, where you have to opt out yourself."
  - question: "Can I move my existing ChatGPT Plus account into a Team workspace?"
    answer: "You can join a Team workspace with the same email, but your personal chat history and personal GPTs generally stay with your personal account rather than merging into the workspace. Plan to recreate any important GPTs inside the workspace."
  - question: "What's the difference between ChatGPT Team and ChatGPT Enterprise?"
    answer: "Team is self-serve and aimed at small and mid-size groups: you sign up with a card and add seats yourself. Enterprise is sold through OpenAI's sales team and adds features such as SSO, domain verification, deeper admin controls, and longer context, at a negotiated price."
---

OpenAI launched **ChatGPT Team** on January 10, 2024. It gives small groups GPT-4 access, a shared workspace, and business data terms without going through an Enterprise sales process. It launched the same day as the GPT Store, which we covered in our [GPT Store launch report](/openai-gpt-store-launch-2024/).

Setup takes about 20 minutes, but a few early decisions are hard to undo later. This guide walks through each step in order, along with the mistakes we saw teams make in the first two weeks.

## What You Get with ChatGPT Team

Before you pay, confirm Team actually fits your needs. As of January 2024, it includes:

- **GPT-4** with higher message limits than an individual Plus account
- **DALL·E 3**, **browsing**, and **Advanced Data Analysis** (file uploads and code execution)
- **A shared workspace** where members can build custom GPTs and share them only with colleagues
- **An admin console** for adding and removing members and controlling workspace settings
- **No training on your data by default**

What it doesn't include: single sign-on (SSO), domain verification, and the expanded admin and security controls in Enterprise. If your IT team requires SSO, Team will likely fall short.

## Step 1: Decide Who Owns the Workspace

The person who creates the workspace becomes its **owner** and the billing contact. Don't let an intern or a contractor do this from a personal account.

Use a work email that belongs to someone who will be at the company long term, ideally an operations lead or a founder. If that person leaves, you will have to transfer ownership, which is easier if you plan for it from the start.

## Step 2: Create the Workspace and Choose Billing

1. Sign in to ChatGPT with the owner's work email.
2. Open the menu in the lower left and choose the option to add a Team workspace (or go to OpenAI's Team page directly).
3. Name the workspace. Use your company name, since members will see it every time they switch accounts.
4. Choose the number of seats. **The minimum is two.**
5. Choose annual billing (about $25/user/month as of January 2024) or monthly (about $30/user/month).

**Tip:** Start monthly for the first month or two. You'll learn quickly who actually uses it. Switch to annual once the seat count settles down.

## Step 3: Invite Members

From the workspace settings, open the **Members** section and invite people by email.

- Invite people using their **work email addresses**, not personal Gmail accounts. That keeps offboarding clean.
- Give the **admin** role only to one or two people. Admins can change workspace settings and remove members.
- If someone already has a personal Plus subscription on the same email, they can usually join the workspace and switch between personal and workspace accounts. Tell them that **personal chat history doesn't carry over**. Many people expect it to.

Once people join, they may want to cancel their personal Plus subscriptions to avoid paying twice. Remind them, because OpenAI won't cancel it automatically.

## Step 4: Configure Workspace Settings

Before anyone starts using the workspace heavily, go through the admin settings:

1. **GPT sharing.** Decide whether members can share GPTs only inside the workspace or also publish them publicly. For most businesses, **workspace-only** is the safer default. You don't want an internal "Pricing Policy Helper" GPT showing up in the public store.
2. **Third-party GPTs.** Decide whether members can use GPTs from the public GPT Store. Public GPTs can send data to outside services through Actions, so some teams turn this off at first.
3. **Plugins and actions.** Check which external connections are allowed. Keep the list short until you know what people actually need.

## Step 5: Write a One-Page Usage Policy

The tool doesn't make this step happen, but it decides whether the rollout goes well. Even though Team workspaces aren't used for training by default, you still need rules about what goes in:

- **Okay:** drafting emails, summarizing public documents, brainstorming, analyzing anonymized spreadsheets
- **Ask first:** client contracts, financial statements, anything covered by an NDA
- **Never:** passwords, API keys, customer payment data, regulated health data

Pin the policy in your team chat. Keep it to one page so people actually read it.

## Step 6: Build Two or Three Shared GPTs

Shared GPTs are where Team pays off. Instead of every person rewriting the same long prompt, you build it once and everyone uses it.

Good starter GPTs for a small company:

- **Brand voice writer.** Upload your style guide and a few strong example posts, then tell the GPT to match that voice.
- **Support reply drafter.** Upload your FAQ and refund policy. Instruct it to draft replies, not send them, and to flag anything it isn't sure about.
- **Meeting summary formatter.** Paste raw notes and get back decisions, owners, and deadlines in your standard format.

To build one, click **Explore** → **Create a GPT**, describe what you want, upload your reference files, and set sharing to **your workspace only**. Test it with real examples before announcing it.

## Step 7: Run a Two-Week Pilot

Don't roll it out to everyone and walk away. For the first two weeks:

- Ask each member to share one task where ChatGPT saved real time
- Gather the prompts that worked and turn the best ones into shared GPTs
- Watch for people who never log in. They may need a short demo, or they may not need a seat.

At the end of the pilot, cut seats nobody uses and switch to annual billing if the numbers hold up.

## Common Pitfalls

- **Assuming history migrates.** Personal chats and personal GPTs stay in the personal account. Export anything important first.
- **Too many admins.** Five admins means nobody owns the settings.
- **Public GPT sharing left on.** Check this before people start uploading internal documents to GPTs.
- **Treating "no training" as "no risk."** Data still leaves your network and sits on OpenAI's servers. The usage policy still matters.
- **Paying for everyone at once.** Start with the people who will clearly use it, then expand.

## Is Team the Right Plan?

For groups of two to roughly 50 people who want GPT-4 and shared GPTs without a sales call, Team is the most practical option OpenAI offers right now. Solo users are better off with Plus. Larger organizations with SSO and compliance requirements should talk to OpenAI about Enterprise.

If you're still weighing ChatGPT against other assistants for your team, our [ChatGPT review](/reviews/chatgpt-review/) and [ChatGPT vs Claude comparison](/compare/chatgpt-vs-claude/) cover the tradeoffs in capability and writing style.
