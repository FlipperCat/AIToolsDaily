---
title: "How to Create Flowcharts with AI Using Whimsical (2023): Step-by-Step Guide"
description: "Turn a plain-English description into a flowchart or mind map in seconds with Whimsical AI and its ChatGPT plugin. Steps, prompts, tips, and pitfalls."
date: 2023-10-24
updated: 2025-06-12
categories: ["Tutorials"]
tags: ["whimsical", "flowcharts", "diagrams", "chatgpt-plugins", "productivity"]
affiliate_disclosure: true
faqs:
  - question: "Can Whimsical create a flowchart from text automatically?"
    answer: "Yes. Whimsical's AI features let you describe a process in plain language and generate a flowchart or mind map on the board. You can also generate diagrams from inside ChatGPT with the Whimsical plugin, which returns an editable link. The results are first drafts that usually need some cleanup."
  - question: "Is Whimsical AI free?"
    answer: "As of October 2023 Whimsical offers a free plan with a limited number of boards and a limited allowance of AI actions. Paid plans, roughly $10 per editor per month billed annually, raise those limits. Pricing is approximate and subject to change, so check Whimsical's site before committing."
  - question: "What's the difference between using Whimsical AI and asking ChatGPT for Mermaid code?"
    answer: "ChatGPT can write Mermaid syntax that renders into a diagram in tools that support it, which is free and version-controllable but fiddly to style. Whimsical produces a visual, drag-and-drop diagram you can edit and share immediately. Use Mermaid for docs-as-code and Whimsical for collaborative, presentation-ready diagrams."
  - question: "How complex a process can the AI handle?"
    answer: "It works best for processes of roughly 5 to 20 steps with a few decision points. Very large or deeply nested processes tend to come out cluttered or lose branches. Break big processes into several linked diagrams instead of one giant chart."
---

Drawing flowcharts by hand is one of those tasks everyone agrees is useful and nobody enjoys. You know the process in your head. Getting boxes, arrows, and decision diamonds lined up is the tedious part.

**Whimsical**, a popular tool for flowcharts, wireframes, and mind maps, now uses AI to handle the first draft. You describe the process in plain English and get an editable diagram back. It also offers a **ChatGPT plugin**, so ChatGPT Plus users can generate diagrams without leaving the chat.

This guide walks through both methods, with prompts that work and the mistakes to avoid.

## What You'll Need

- A free Whimsical account (whimsical.com)
- Optional: a ChatGPT Plus subscription with plugins enabled, for Method 2
- A process you actually want to map. Real examples give better results than hypothetical ones

## Method 1: Generate a Flowchart Inside Whimsical

### Step 1: Create a New Board

Log in and create a new board. Whimsical boards are infinite canvases that can hold flowcharts, mind maps, sticky notes, and wireframes side by side.

### Step 2: Open the AI Generator

Look for the AI option in the toolbar or the insert menu (the sparkle icon). Choose **flowchart** as the output type. You can also choose **mind map** if you're brainstorming rather than mapping a sequence.

### Step 3: Describe Your Process

This is where results are won or lost. Vague prompts produce vague charts. Compare:

**Weak prompt:**
> Customer support process

**Strong prompt:**
> Flowchart for handling a customer refund request. Start: customer submits request. Check if purchase was within 30 days. If no, send a polite denial with store credit offer. If yes, check if item was used. If used, route to manager review. If unused, approve refund automatically and email confirmation. End after confirmation or denial is sent.

The strong prompt gives the AI a clear **start**, explicit **decision points** (phrased as yes/no questions), and a clear **end**. That's the structure a flowchart needs.

### Step 4: Generate and Review

Generate the chart. In a few seconds you'll have boxes and arrows laid out on the canvas. Check it straight away for:

- **Missing branches.** Every decision diamond needs both a "yes" and a "no" path.
- **Dead ends.** Every path should reach an end state.
- **Merged steps.** The AI sometimes combines two actions into one box.

### Step 5: Edit by Hand

Everything is editable: drag boxes, rename labels, add connectors, and change shapes. Tidy up the layout with Whimsical's auto-alignment. Add colors to separate roles, for example blue for customer actions and green for staff actions.

### Step 6: Share or Export

Share a link with teammates (view or edit access), or export as PNG or PDF for docs and slide decks.

## Method 2: Generate from ChatGPT with the Whimsical Plugin

If you already work through problems in ChatGPT, the plugin skips switching apps.

### Step 1: Enable the Plugin

In ChatGPT Plus, switch to the GPT-4 model with plugins enabled. Open the Plugin Store, search for **Whimsical**, and install it.

### Step 2: Talk Through the Process First

This is the plugin approach's hidden advantage. Before asking for a diagram, have a conversation:

> I'm designing the onboarding flow for a SaaS trial. Help me think through what happens if a user doesn't verify their email, doesn't connect an integration, or doesn't invite a teammate in the first week.

ChatGPT will surface edge cases you may have missed. See our [ChatGPT review](/reviews/chatgpt-review/) for why GPT-4 is worth using for this kind of reasoning. Our [GPT-4 vs GPT-3.5 comparison](/compare/gpt-4-vs-gpt-3-5-2023/) explains the quality gap.

### Step 3: Ask for the Diagram

> Now turn that onboarding flow into a flowchart using Whimsical.

The plugin returns an image preview and a link that opens the diagram in Whimsical, where you can edit it fully.

### Step 4: Iterate in Chat or on the Canvas

Small changes ("add a reminder email on day 3") can be made by asking ChatGPT to regenerate. For layout tweaks, open the link and edit in Whimsical directly. Regenerating can reshuffle the whole layout.

## Prompt Templates That Work

**Process flowchart:**
> Create a flowchart for [process]. Start: [trigger]. Decisions: [yes/no question 1], [yes/no question 2]. End states: [outcome A], [outcome B].

**Mind map for brainstorming:**
> Create a mind map with the central topic "[topic]". Main branches: [branch 1], [branch 2], [branch 3]. Add 3–4 sub-ideas under each.

**Troubleshooting tree:**
> Create a troubleshooting flowchart for "[problem]". Each step should be a yes/no check, ending with either a fix or "escalate to support."

## Tips for Better Diagrams

1. **Phrase decisions as yes/no questions.** "Is the order over $100?" beats "Order value check."
2. **Name the actor in each step.** "Manager approves" is clearer than "Approval."
3. **Keep each chart to one process.** Link separate charts together instead of building one enormous diagram.
4. **Use mind maps first, flowcharts second.** Brainstorm the pieces, then sequence them.
5. **Paste in existing documentation.** If you already have written SOPs or notes (for example in Notion; see our [Notion AI guide](/tutorials/how-to-use-notion-ai/)), paste them into the prompt and ask for a flowchart of that text.

## Common Pitfalls

- **Trusting the first draft.** AI-generated flowcharts look finished, which makes missing branches easy to overlook. Walk every path by hand.
- **Overloading the prompt.** Twenty-plus steps with nested decisions usually comes back cluttered. Split the process.
- **Plugin availability.** ChatGPT plugins are a beta feature for Plus users and can be slow or temporarily unavailable. Keep Method 1 as your fallback.
- **Free-plan limits.** The free plan limits boards and AI actions. Heavy users will hit the ceiling fast.

## Alternative: Mermaid Code from ChatGPT

If you'd rather keep diagrams as text, for example in a GitHub README or technical docs, ask ChatGPT:

> Write Mermaid flowchart syntax for [process].

Paste the output into any tool that renders Mermaid. It's free, diffable, and easy to version-control, but it's harder to style and less friendly for non-technical collaborators. Many teams use Mermaid for engineering docs and Whimsical for anything a stakeholder will look at.

## Pricing Note (approximate, as of October 2023)

Whimsical's free plan covers light use with capped boards and AI actions. Paid plans run roughly **$10 per editor per month** (billed annually), with higher tiers for organizations. The ChatGPT plugin requires ChatGPT Plus (about $20/month). Check both sites for current pricing.

## Wrapping Up

AI won't design your process for you, but it removes the most tedious part of diagramming: getting a clean first draft onto the canvas. Write specific prompts with clear starts, yes/no decisions, and end states, then spend your time checking and refining instead of drawing arrows. For quick process maps, onboarding flows, and troubleshooting trees, Whimsical's AI tools can turn an hour of box-pushing into about ten minutes.
