---
title: "Shortwave Review (2025): The AI Email Client That Actually Reads Your Inbox"
description: "A hands-on Shortwave review — AI search, thread summaries, drafting in your voice, and the Gmail-only catch. Real limitations and approximate pricing."
date: 2025-07-15
updated: 2026-04-22
categories: ["Reviews"]
tags: ["shortwave", "email", "gmail", "ai assistant", "productivity"]
affiliate_disclosure: true
faqs:
  - question: "Does Shortwave work with Outlook or iCloud mail?"
    answer: "No. Shortwave is built specifically on Gmail and Google Workspace. If your work email is on Microsoft 365 or anything else, it's not an option — that constraint is the single biggest reason people bounce off it."
  - question: "Is Shortwave better than Superhuman?"
    answer: "They optimize for different things. Superhuman is built around keyboard speed and triage discipline; Shortwave is built around an AI assistant that can search and reason over your whole mailbox. If you want to move fast, Superhuman. If you want to ask questions of your inbox, Shortwave."
  - question: "Does Shortwave read all my email to train AI?"
    answer: "Shortwave indexes your mail so its AI search and assistant can retrieve from it, and it's explicit that customer email isn't used to train third-party models. If your organization has strict data-handling requirements, read the current security documentation and involve IT before rolling it out."
---

Most "AI email" products in 2025 do one of two things: summarize a thread, or write a reply you'd be embarrassed to send. **Shortwave** is one of the few that tried something harder — building an assistant that can search, reason across, and act on your entire mailbox. Having used it as my daily client for a few months, it mostly works, and the places it doesn't are pretty specific.

## What it is

Shortwave is an email client for Gmail and Google Workspace, built by a team that came out of Google Inbox. That heritage matters: the interface is organized around bundles, split-inbox sections, and aggressive triage rather than a flat chronological list. It runs on web, macOS/Windows desktop apps, and iOS/Android.

The AI layer sits on top of an index of your mail. Rather than only seeing the thread you have open, the assistant can retrieve across years of messages, which is what separates it from the AI features bolted onto conventional clients.

## Key features

**AI search.** The headline feature and the one that changed how I use email. You ask in plain language — "what did the vendor quote for the March event, and who signed off?" — and it returns an answer with the source threads linked. Traditional Gmail search requires you to remember a sender, a keyword, or a date. Shortwave lets you describe what you half-remember. It's not perfect on ambiguous phrasing, but on "I know this conversation happened, roughly when, and roughly with whom" it's dramatically faster than operators.

**The AI assistant.** A chat panel that can pull from your inbox and act. Useful patterns in practice: "summarize everything from this client in the last month," "find every unanswered email where someone asked me a direct question," "draft a reply declining this but leaving the door open." It can also chain a couple of steps — search, then draft based on what it found — which is where it earns its keep.

**Thread summaries.** One-click condensation of a 40-message reply-all. Reliable, unglamorous, and probably the feature you'll use most without noticing.

**AI drafting in your voice.** Shortwave learns from your sent mail and drafts in something approximating how you write. "Approximating" is doing real work in that sentence — it captures length and formality reasonably and misses idiosyncrasy entirely. Good enough for scheduling, acknowledgments, and polite declines. Not good enough for anything that carries relationship weight.

**Triage machinery.** Bundles group newsletters and notifications, split inbox separates what needs you from what doesn't, and snooze, send-later, and reminders all behave properly. The AI gets attention, but this is the layer that actually shrinks the inbox.

**Instant sync and speed.** It's fast — the kind of fast where you stop noticing the client. Search results, thread loading, and cross-device sync are all snappy enough that it competes with native apps.

## Pros

- **The search genuinely changes behavior.** After a few weeks I stopped filing email. Retrieval got good enough that organizing became pointless, which is the highest compliment you can pay a search feature.
- **Assistant has real context.** Because it retrieves across the mailbox rather than the open thread, answers to "did we ever agree on X?" are actually possible.
- **Excellent triage design.** Bundles and split inbox are the best implementation of the Inbox-style model still shipping.
- **Strong mobile apps.** Not an afterthought — the AI search works properly on the phone, which is where you most often need to find something fast.
- **Fair free tier.** You can run the client and sample the AI without paying, which makes evaluating it low-risk.

## Cons and limitations

- **Gmail only.** No Outlook, no Microsoft 365, no IMAP. For a large share of professional users this ends the conversation immediately.
- **AI credits, not unlimited AI.** Plans meter assistant usage. Heavy users will hit ceilings and have to think about consumption, which undercuts the "just ask your inbox" promise.
- **Drafting is competent, not personal.** Voice matching gets tone roughly right and personality entirely wrong. Anything important still needs writing by hand — or drafting in a stronger general model like [Claude](/reviews/claude-review/) and pasting back.
- **Occasional retrieval misses.** When a question is ambiguous or the relevant thread is old and short, the assistant sometimes answers confidently from the wrong message. Always click through to the cited thread before acting on a number or a date.
- **Learning curve on the inbox model.** If you've used flat chronological Gmail for a decade, bundles and split inbox feel like a reorganization you didn't ask for. Give it two weeks or don't bother.
- **Privacy posture requires thought.** Indexing your entire mailbox for AI retrieval is a meaningful decision for regulated industries. The documentation is reasonable; the review still needs doing.
- **Not a full workflow tool.** It won't run sequences or automate follow-up campaigns — that's a job for the approaches in our [email follow-up automation guide](/tutorials/automate-email-follow-ups/).

## Pricing

Approximate, as of July 2025 — check current pricing before committing:

- **Free** — the full client with a limited monthly allowance of AI usage. Enough to evaluate, not enough to live on.
- **Personal / Pro tiers** — roughly the **$10–$30 per user per month** range depending on plan and billing period, with substantially higher AI limits and access to the more capable assistant features.
- **Business / team plans** — higher again, in the **$30–$50 per user per month** neighborhood, adding admin controls and team features.

The comparison people usually make is against [Superhuman](/reviews/superhuman-ai-review-2025/), which sits at a similar-to-higher price point with a different philosophy; we broke the two down directly in [Superhuman vs Shortwave](/compare/superhuman-vs-shortwave-2025/). Note that email client pricing shifted repeatedly through 2024–2025 as AI costs moved, so treat any figure — including these — as a starting point.

## Who it's for

**Worth it if you:**

- Live in Gmail or Google Workspace and aren't moving.
- Handle high volume and frequently need to *find* things, not just process them.
- Do work where the answer to "what did we agree?" is buried in email rather than a project tool.
- Are willing to adopt a bundled, split-inbox way of working.

**Skip it if you:**

- Are on Outlook or anything that isn't Gmail.
- Get 20 emails a day — the AI has nothing to dig through, and plain Gmail is free.
- Need AI to write substantive email for you rather than find and summarize it.
- Work under data rules that make full-mailbox indexing a non-starter.

If you're earlier in the process and just trying to get a handle on volume, our broader guide to [AI for email management](/ai-for-email-management/) covers cheaper starting points.

## Verdict

Shortwave is the best implementation I've used of a specific idea: your inbox as a queryable knowledge base rather than a list of tasks. The search and the retrieval-backed assistant are legitimately excellent, and the triage design underneath them is the best surviving descendant of Google Inbox.

It's also narrow. Gmail-only closes the door on a lot of people, the AI is metered in a way that occasionally reminds you it's expensive to run, and the drafting features are the weakest part of the product despite being the most marketed. Judge it on search, not on writing.

If you're a heavy Gmail user who loses time hunting for conversations, the free tier costs you nothing but a week of adjustment, and the paid tier is easy to justify. If you're on Outlook, or you were hoping AI would answer your email for you, this isn't the product — and honestly, that second product doesn't exist yet.
