---
title: "How to Write an Incident Postmortem with AI (2026): Blameless, Fast, and Actually Useful"
description: "Step-by-step guide to writing incident postmortems with ChatGPT, Claude, or Gemini: timelines, root cause analysis, blameless wording, and action items."
date: 2026-10-22
updated: 2026-10-22
slug: "write-incident-postmortem-with-ai-2026"
categories: ["Tutorials"]
tags: ["incident postmortem", "devops", "sre", "chatgpt", "claude", "documentation"]
affiliate_disclosure: true
faqs:
  - question: "Can AI find the root cause of an incident?"
    answer: "Not on its own. AI is good at organizing evidence, spotting gaps in a timeline, and asking 'why' questions you might skip. It can't verify what actually happened in your systems. Use it to structure the analysis, and let the engineers who investigated make the call on causes."
  - question: "Is it safe to paste incident logs into an AI assistant?"
    answer: "Only after redaction and only on an approved plan. Logs often contain customer data, IP addresses, tokens, and internal hostnames. Strip secrets and personal data first, and use a business or enterprise tier that doesn't train on your data by default. Follow your security team's AI policy."
  - question: "Which AI assistant is best for postmortems?"
    answer: "ChatGPT, Claude, and Gemini all handle this well. Claude is strong with long pasted logs and following a fixed template, ChatGPT is quick at structuring and iterating, and Gemini fits teams whose incident docs live in Google Workspace. The workflow matters more than the model."
  - question: "How long should a postmortem be?"
    answer: "Long enough that someone who wasn't there understands what happened, why, and what's changing. For most incidents that's one to three pages plus a timeline. AI tends to pad, so ask it to cut, and keep the summary to one paragraph."
---

The worst time to write a postmortem is right after an incident, when everyone is tired and wants to move on. The second worst time is two weeks later, when nobody remembers the details. That's why so many postmortems end up as a vague paragraph and three action items nobody owns.

AI assistants are a good fit for this job, with one caveat. They're excellent at the tedious parts: turning a messy incident channel into a clean timeline, structuring the document, suggesting questions, and rewriting blame-heavy language. They're bad at the part that matters most, which is knowing what actually happened. This workflow uses ChatGPT, Claude, or Gemini for the first set of jobs and keeps engineers in charge of the second.

If you already use AI for other engineering docs, the approach will feel familiar. It's the same principle as our [guide to writing a PRD with AI](/tutorials/how-to-write-a-prd-with-ai-2026-a-product-managers-workflow-that-doesnt-produce-fluff/): the AI structures and critiques, and humans make the decisions.

## Step 1: Collect and Redact the Raw Material

Before you open a chat window, gather everything in one place:

- The incident channel export or chat history
- Alert and paging history
- Deploy, config change, and feature-flag logs from the incident window
- Relevant dashboard screenshots or metric summaries
- Any customer support tickets or status page updates

Then **redact**. Remove API keys, tokens, passwords, customer names, emails, IP addresses, and anything else your security policy flags. Replace them with placeholders like `[CUSTOMER_A]` or `[SERVICE_DB_PRIMARY]`. This takes ten minutes and prevents the most serious mistake you can make with this workflow.

Use an approved business or enterprise plan for anything internal. If you're choosing between assistants, our [ChatGPT vs Claude comparison](/compare/chatgpt-vs-claude/) covers how they handle long documents.

## Step 2: Build the Timeline

The timeline is where AI saves the most time. Paste your redacted material and use a prompt like this:

```
You are helping write a blameless incident postmortem. Below are redacted
chat logs, alerts, and deploy logs from an incident.

Build a timeline in UTC with one row per event: timestamp, event, source
(chat/alert/deploy), and who or what triggered it (role, not name).

Rules:
- Only include events that appear in the material. Do not infer or invent.
- If timestamps conflict or are missing, flag them with [CHECK].
- Mark these moments clearly: first symptom, detection, escalation,
  mitigation, resolution.
- At the end, list gaps: periods with no recorded activity, and questions
  the logs don't answer.
```

The "do not invent" rule and the gaps list are the important parts. Models like to smooth over missing information, and an invented timeline entry is worse than an empty one. Check every row against the source, especially the detection and mitigation times, since those drive your time-to-detect and time-to-resolve numbers.

## Step 3: Draft the Summary and Impact

Write the impact facts yourself: how long it lasted, which customers or regions were affected, what failed, and any SLA implications. Then let the AI turn them into a clear summary:

```
Using the timeline and these impact facts, write a 4-6 sentence incident
summary for a mixed audience of engineers and managers. Plain language,
no jargon without explanation, no speculation about cause beyond what's
stated. Impact facts: [paste your numbers and scope]
```

Never let the model estimate impact numbers. If you don't have a metric, write "unknown" and add an action item to find out.

## Step 4: Use AI as a Root Cause Facilitator

This is where teams most often misuse AI. Don't ask "What was the root cause?" Ask the AI to help you investigate:

```
Here is the timeline and our current understanding of the cause:
[your team's explanation].

Act as an experienced SRE facilitating a blameless review. Ask me
"why" questions to move from the triggering event to underlying
contributing factors. Cover technical causes, process gaps, monitoring
gaps, and anything that made detection or recovery slower. Ask one
question at a time.
```

Answer the questions with the engineers who were involved. A five-whys exercise with an AI facilitator often surfaces the factors teams skip, like "why didn't the alert fire earlier?" or "why did the rollback take 40 minutes?" Those are usually where the real fixes are.

Most incidents have several contributing factors rather than one root cause. Ask the AI to organize your answers into a contributing-factors section, grouped by category.

## Step 5: Do a Blameless Language Pass

Even well-meaning writers slip into blame: "Engineer X deployed a bad config." AI is good at catching this:

```
Review this postmortem draft for blameless language. Flag any sentence
that attributes failure to an individual rather than a system, process,
or tool, and suggest a rewrite. Also flag hindsight phrasing like
"should have known" or "obviously."
```

"A config change passed review and validation, but the validation did not check for X" points toward a fix. "Sam broke production" points toward a person, and it makes the next incident harder to investigate honestly.

## Step 6: Write Action Items That Will Actually Get Done

Ask the AI to propose action items from the contributing factors, then edit hard:

```
Based on the contributing factors, propose action items. For each:
a specific change, the problem it prevents, a priority (P1/P2/P3), and
whether it's prevention, detection, or mitigation. Prefer fewer, concrete
items over many vague ones. No items like "be more careful."
```

Then do the human work: assign an owner and a due date to each item, delete the ones nobody will do, and create real tickets. A postmortem with three owned actions beats one with twelve wishes.

## Step 7: Critique the Draft Before Review

Before the postmortem meeting, have the AI read the full document as a skeptical reviewer:

```
Read this postmortem as a senior engineer who wasn't involved. What's
unclear? What questions would you ask? Where does the analysis jump to
conclusions? Which action items don't connect to a contributing factor?
Is anything longer than it needs to be?
```

This catches the gaps that are invisible to people who lived through the incident.

## Step 8: Create the Customer-Facing Version

If the incident affected customers, you'll often need a public summary for a status page or account managers. Ask the AI to adapt the internal draft:

```
Write a customer-facing incident summary from this postmortem: what
happened, when, who was affected, what we did, and what we're changing.
Calm and direct. No internal system names, no blame, no promises we
haven't committed to. Under 250 words.
```

Have whoever owns customer communication approve it. Legal review may be required for serious incidents.

## Step 9: Turn the Workflow Into a Reusable Template

Once this works, make it repeatable. Save your postmortem template and the prompts above in a Claude Project, a custom GPT, or a Gemini Gem with instructions like "Always use this template, never invent facts, flag gaps with [CHECK]." Store the template alongside your runbooks. The same pattern works for operational docs; see our guide on [writing SOPs with AI](/tutorials/how-to-write-sops-with-ai-2025-from-messy-know-how-to-clear-procedures/).

## Common Pitfalls

- **Invented timeline entries.** The most dangerous failure. Check every timestamp against a source.
- **Confident causes from thin evidence.** If the AI's explanation sounds plausible but no one can confirm it, it doesn't go in the doc.
- **Unredacted logs.** Redact before pasting, every time.
- **Padding.** AI-written postmortems drift toward five pages. Cut to what someone needs to understand and act.
- **Skipping the meeting.** The document supports the review conversation. It doesn't replace it.
- **Action items without owners.** If it doesn't have a name and a date, it isn't an action item.

## The Bottom Line

AI won't run your incident review, but it can cut the time to a solid draft dramatically. Let it build the timeline, structure the document, ask uncomfortable "why" questions, and police blameless language. Keep humans responsible for facts, causes, and commitments. You'll get postmortems written while the details are still fresh, and fixes that actually prevent the next one.
