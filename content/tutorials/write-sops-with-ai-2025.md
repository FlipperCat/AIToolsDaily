---
title: "How to Write SOPs with AI (2025): From Messy Know-How to Clear Procedures"
description: "Step-by-step guide to writing standard operating procedures with ChatGPT or Claude: capture the process, draft, test, and keep SOPs current."
date: 2025-04-22
updated: 2026-08-19
categories: ["Tutorials"]
tags: ["sop", "chatgpt", "claude", "process documentation", "operations", "productivity"]
affiliate_disclosure: true
faqs:
  - question: "Can AI write an SOP from scratch?"
    answer: "It can write a plausible-looking one, but a plausible SOP is not the same as your process. AI doesn't know your tools, approvals, or edge cases. The reliable approach is to capture how the work is actually done (a recording, notes, or a walkthrough) and have AI structure and clean that up."
  - question: "Which AI tool is best for writing SOPs?"
    answer: "Any strong general assistant works: ChatGPT and Claude both produce clear procedures from rough notes. Claude handles long transcripts well; ChatGPT is convenient if your team already uses it. Screen-capture tools like Scribe are faster for click-by-click software procedures."
  - question: "Is it safe to paste internal process details into an AI chatbot?"
    answer: "Check your company's AI policy first. Business and team plans generally exclude your data from model training, while consumer plans may not by default. Strip out passwords, customer data, and anything confidential before pasting, and use placeholders instead."
  - question: "How long should an SOP be?"
    answer: "As short as it can be while someone new could still follow it without asking questions. Most task-level SOPs fit on one or two pages. If it's longer, split it into separate procedures or move background explanation into a linked reference doc."
---

Every team has procedures that live only in someone's head. Onboarding a client, closing the books at month-end, publishing a blog post, handling a refund: the steps exist, but they're written down nowhere, or in a doc from three tools ago.

AI assistants are very good at the tedious part of fixing this: turning rambling explanations into numbered steps, spotting gaps, and keeping formatting consistent. This guide shows a workflow that produces SOPs people actually follow, using [ChatGPT](/reviews/chatgpt-review/) or [Claude](/reviews/claude-review/). No special software required.

## Why AI helps (and where it doesn't)

AI is good at:
- Turning a transcript or brain dump into clean, numbered steps
- Standardizing format across dozens of SOPs
- Finding missing steps, unclear handoffs, and undefined terms
- Writing checklists, quick-reference versions, and training quizzes from the same source

AI is bad at:
- Knowing how *your* process works. It will invent reasonable-sounding steps if you let it.
- Judging which exceptions matter in practice
- Keeping SOPs current on its own

So the rule for this whole workflow: **the person who does the work supplies the facts; AI supplies the structure.**

## Step 1: Pick one process and define the boundaries

Start with a process that's done often, currently causes mistakes or questions, and belongs to someone willing to spend 30 minutes on it.

Write down four things before you open any AI tool:
1. **Name:** "Process a customer refund in Shopify"
2. **Trigger:** what starts it ("customer requests a refund by email or chat")
3. **End state:** what "done" means ("refund issued, customer notified, ticket closed")
4. **Owner:** the role responsible, not a person's name

Clear boundaries stop the SOP from becoming a vague mix of three different processes.

## Step 2: Capture how the work is actually done

This is the most important step, and the one people skip. Choose a capture method:

- **Talk it through.** Have the process owner describe the task out loud while doing it and record the audio or a video call. Transcribe it with your meeting tool or a transcription app.
- **Screen capture.** For software procedures, tools like [Scribe](/reviews/24-scribe-review/) record clicks and generate step screenshots automatically. Use AI afterward to tighten the wording and add the context those tools miss.
- **Rough notes.** If recording isn't practical, have the owner write a quick bulleted brain dump. Messy is fine.

Ask the owner to mention the "why" and the weird cases as they go: "if the order is over $500, I check with finance first." Those exceptions are what make an SOP useful.

## Step 3: Draft the SOP with a structured prompt

Paste your capture into the assistant with a prompt like this:

```
You are helping document a standard operating procedure.
Below is a transcript of [role] explaining how they [process name].

Rewrite it as an SOP using this structure:
1. Purpose (1-2 sentences)
2. Scope: when this SOP applies and when it doesn't
3. Roles involved
4. Tools and access needed
5. Procedure: numbered steps, one action per step,
   starting each step with a verb
6. Exceptions and decision points (if X, then Y)
7. Definition of done

Rules:
- Use only information in the transcript. Do not invent steps,
  tools, or policies.
- Where something is unclear or missing, insert [QUESTION: ...]
  instead of guessing.
- Write for a new team member in their first week.

Transcript:
[paste here]
```

The `[QUESTION: ...]` instruction is the key line. It turns the AI's tendency to fill gaps into a list of things you need to confirm, instead of quietly inventing them.

## Step 4: Resolve the open questions

Go through every `[QUESTION]` marker with the process owner. Typical ones:

- "Who approves refunds above the threshold?"
- "Where is the customer notification template stored?"
- "What happens if the payment processor rejects the refund?"

Paste the answers back and ask the AI to update the draft. Two rounds of this usually covers it.

## Step 5: Ask the AI to find gaps

Once the draft is complete, switch the AI into reviewer mode:

```
Review this SOP as if you were a new hire following it for the
first time with no one to ask. List:
- Steps that assume knowledge a new hire wouldn't have
- Terms or acronyms that aren't defined
- Missing handoffs between people or tools
- Places where two people might interpret a step differently
Do not rewrite the SOP; just list the issues.
```

Asking for a list instead of a rewrite keeps you in control and avoids the AI "fixing" things by inventing detail.

## Step 6: Test it with a real person

Give the SOP to someone who doesn't normally do the task and have them follow it for real, or in a test environment, while the owner watches without helping. Every time they hesitate or ask a question, note it.

Feed those notes back into the AI: "The tester got stuck at step 4 because they didn't know where to find the order ID. Update the step." Nothing replaces this test. An SOP that has never been followed by someone new is only a draft.

## Step 7: Generate the supporting formats

With a tested SOP, AI can quickly produce related material from the same source:

- **One-page checklist** for people who already know the process
- **Quick-reference card** with just decision points and thresholds
- **Five-question quiz** for onboarding
- **Short Loom or training script** walking through the steps

Each of these takes one prompt, and because they come from the same approved SOP, they stay consistent.

## Step 8: Store it and set a review date

Put the SOP where people already work: your wiki, Notion, Confluence, or a shared drive with a clear folder structure. Add at the top:

- Owner (role)
- Last reviewed date
- Next review date (every 6 to 12 months, or when tools change)

When a tool or policy changes, paste the old SOP and a description of the change into your assistant and ask for a tracked-changes-style list of edits. Updating is much faster than rewriting.

## Tips for better results

- **Build a template prompt once** and reuse it across the team so every SOP comes out in the same format.
- **One SOP per outcome.** If the draft has "Part A" and "Part B" for different situations, split it.
- **Use Projects or custom instructions** in ChatGPT or Claude to store your style rules and template, so you don't have to paste them every time. Our comparison of [Claude Projects and Custom GPTs](/compare/claude-projects-vs-custom-gpts/) covers the differences.
- **Keep screenshots current.** Outdated UI screenshots confuse people more than no screenshots.

## Common pitfalls

- **Letting AI write from a job title.** "Write an SOP for an accounts payable clerk" produces generic text that matches nobody's real process.
- **Pasting sensitive data.** Remove customer details, credentials, and internal financials before using a chatbot, and follow your company's AI policy.
- **Over-documenting.** Not every task needs an SOP. Focus on work that's frequent, risky, or handed off often.
- **Skipping the owner's review.** The final SOP should be signed off by the person accountable for the process, not the AI and not whoever ran the prompts.

## Wrapping up

AI doesn't remove the need to understand your processes, but it takes away most of the writing effort. Capture the real process, let the assistant structure it and flag the gaps, then test it with someone new. A team can document its ten most important procedures in a couple of weeks this way instead of putting it off for another year.
