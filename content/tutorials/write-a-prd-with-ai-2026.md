---
title: "How to Write a PRD with AI (2026): A Product Manager's Workflow That Doesn't Produce Fluff"
description: "Step-by-step guide to writing product requirements documents with ChatGPT, Claude, or Gemini: context setup, prompts, testable requirements, and review."
date: 2026-09-18
updated: 2026-09-18
categories: ["Tutorials"]
tags: ["product management", "prd", "chatgpt", "claude", "gemini", "documentation"]
affiliate_disclosure: true
faqs:
  - question: "Which AI assistant is best for writing PRDs?"
    answer: "ChatGPT, Claude, and Gemini all do this well; the workflow matters more than the model. Claude tends to follow long templates and keep a consistent tone across long documents, ChatGPT is quick at iterating and structuring, and Gemini fits well if your team's research and specs live in Google Docs and Drive. Pick the one your company has approved for confidential material."
  - question: "Is it safe to put product plans into an AI chatbot?"
    answer: "Only on a plan with appropriate data controls. Business and enterprise tiers of the major assistants generally don't train on your data by default and add admin controls, while consumer plans vary by settings. Check your company's AI policy before pasting roadmaps, customer data, or unreleased features."
  - question: "Can AI write the whole PRD for me?"
    answer: "It can produce a full draft, but a PRD is a record of decisions, and the AI hasn't made any. Without your problem framing, constraints, and data, the draft will be generic. Use AI to interview you, structure your thinking, generate edge cases, and critique the draft, and make the product decisions yourself."
  - question: "How long should a PRD be?"
    answer: "As short as it can be while still letting engineering and design start work without constant questions. For most features that's two to five pages plus a one-paragraph summary. AI makes it easy to write too much, so explicitly ask it to cut."
---

Ask any AI assistant to "write a PRD for a referral program" and you'll get something that looks finished in 20 seconds: goals, personas, user stories, success metrics, risks. It'll also be almost useless. The goals will be generic, the personas invented, the metrics made up, and the scope larger than you ever intended.

The problem isn't the model. A product requirements document is a record of decisions, and the AI hasn't made any. The workflow below uses ChatGPT, Claude, or Gemini to do the parts AI is good at, like interviewing you, structuring your thinking, finding edge cases, and critiquing, while you make the decisions. For a broader look at the PM tool stack, see our [roundup of AI tools for product managers](/best-ai-tools-for-product-managers/).

## Step 1: Set up a reusable context space

Before writing anything, give the assistant a permanent home for your product context. Both ChatGPT and Claude support projects with shared files and instructions. Our guides to [Claude Projects](/tutorials/how-to-use-claude-projects-2024/) and [ChatGPT Projects](/tutorials/how-to-use-chatgpt-projects-2025/) walk through the setup.

Upload:

- Your team's PRD template (or a clean example of a PRD you liked)
- Two or three past PRDs that were well received
- A short product and strategy overview: who the customers are, what the product does, this year's priorities
- A glossary of internal terms

Then add project instructions along these lines:

> You help me write product requirements documents. Follow the attached template exactly. Never invent data, metrics, customer quotes, or research findings; if something is needed that I haven't provided, write [NEEDS INPUT: description]. Prefer short, plain sentences. Flag scope creep when you see it.

The `[NEEDS INPUT]` rule matters most. It turns hallucinations into visible gaps.

## Step 2: Start with a problem brief, not a prompt

Write five to ten rough lines yourself before you involve the AI:

- What problem are we solving, and for whom?
- How do we know it's a problem? (tickets, interviews, data, sales feedback)
- Why now?
- What does success look like, even roughly?
- What's definitely out of scope?
- Known constraints: deadline, platforms, dependencies, compliance

Messy is fine. These notes come from you, and they're what keeps the final document from sounding generic.

## Step 3: Let the AI interview you

Paste your brief and ask to be questioned before any drafting:

> Here's my rough brief for a new feature. Before writing anything, ask me the 10 questions a skeptical engineering lead and a skeptical designer would ask. Ask them one at a time and wait for my answer.

This is the highest-value step in the process. Good questions are things like "What happens to users who are mid-flow when this launches?" or "Is this a new permission or an extension of an existing one?" They expose decisions you haven't made yet. If you can't answer one, that's an open question for the PRD, not something to let the AI fill in.

## Step 4: Draft section by section

Don't ask for the whole document at once. Long one-shot drafts pad the easy sections and skim the hard ones. Go in order:

1. **Problem statement and context.** "Using only my brief and interview answers, write the problem statement in under 150 words."
2. **Goals and non-goals.** Non-goals are where AI adds real value. Ask it to "list 8 plausible things someone might assume are in scope" and pick the ones worth ruling out explicitly.
3. **Users and use cases.** Anchor these to the real segments in your strategy doc, not invented personas with names and hobbies.
4. **Requirements.** See Step 5.
5. **Success metrics.** See Step 6.
6. **Risks, dependencies, and open questions.** Ask it to pull every unresolved item from the conversation into this section.

Edit each section before moving on so later sections build on corrected earlier ones.

## Step 5: Make requirements testable

Vague requirements ("the flow should be intuitive") cause most arguments later. Use the AI to tighten them:

> Rewrite each requirement below so it is specific and testable. Use the format: "When [condition], the system [behavior]." Then write 2–3 acceptance criteria for each. Mark any requirement that is really a design decision rather than a requirement.

Then ask for edge cases:

> For these requirements, list edge cases and failure states: empty states, permissions, errors, slow networks, concurrent edits, accessibility, localization, and existing users mid-flow. Group them by severity.

You'll discard half the list, but the other half usually contains two or three cases that would otherwise have come up as bugs in QA or, worse, in production.

## Step 6: Handle metrics carefully

Metrics are where AI output is most dangerous, because invented numbers look authoritative. The assistant can suggest *what* to measure. It can't know your baselines.

A safer prompt:

> Suggest a primary success metric and 2–3 guardrail metrics for this feature. For each, explain what it would tell us and what could make it misleading. Do not propose target values.

Fill in baselines and targets yourself from your analytics. If you don't have a baseline yet, say so in the PRD and add "establish baseline" as a pre-launch task.

## Step 7: Red-team the draft

Once the draft is complete, have the AI critique it from specific perspectives:

> Review this PRD as (1) a senior engineer estimating effort, (2) a designer, (3) a support lead, and (4) a legal/privacy reviewer. For each, list the top 3 concerns or unanswered questions. Be blunt.

You can run the critique in a different assistant than the one that drafted it. A second model often catches things the first one glossed over. (Our [ChatGPT vs Claude comparison](/compare/chatgpt-vs-claude/) covers how the two differ in tone and attention to detail.) Treat the critique as a checklist, not a verdict. Some concerns will be irrelevant and some will be things you've already decided.

## Step 8: Cut it down

AI drafts run long. When the content is right, ask:

> Cut this PRD by 30% without losing any decision, requirement, or open question. Remove repetition, hedging, and generic statements that would be true of any feature.

Then generate a one-paragraph summary for leadership and a bullet version for the kickoff meeting. It's the same material presented for different readers.

## Step 9: Keep it alive

A PRD that isn't updated after kickoff causes confusion. When decisions change, paste the relevant Slack thread or meeting notes back into your project and ask:

> Update the PRD to reflect the decisions in these notes. Show me a changelog of what changed and flag anything in the notes that contradicts the current requirements.

The contradiction check is valuable. It catches cases where two conversations quietly reached different conclusions.

## Pitfalls to avoid

- **Letting the AI decide scope.** Models are eager to help and often add "nice to have" features. Check every requirement against your brief.
- **Invented evidence.** Watch for phrases like "users have expressed frustration with…" when you never gave it user research. Delete or replace them with real sources.
- **Confident tone over real uncertainty.** A PRD should say clearly what's unknown. AI prose tends to smooth over uncertainty, so keep the open questions section honest.
- **Every PRD sounding the same.** If your team starts to notice it, you're keeping too much of the default phrasing. Rewrite the problem statement and goals by hand.
- **Pasting what you shouldn't.** Customer names, contract terms, and unreleased financials belong only on plans your company has approved.

## The bottom line

AI won't make product decisions for you, and a PRD that pretends otherwise will fall apart in the first engineering review. What it does well is interviewing you, turning vague ideas into testable requirements, finding edge cases, and critiquing drafts. Give it real context, forbid it from inventing anything, and keep the decisions yourself. You'll get a sharper document in less time.
