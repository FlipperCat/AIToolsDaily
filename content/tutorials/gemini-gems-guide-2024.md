---
title: "How to Use Gemini Gems (2024): Build Your Own Custom AI Assistants"
description: "Step-by-step guide to Gemini Gems: create custom AI assistants with instructions, use Google's premade Gems, and avoid the common setup mistakes."
date: 2024-11-06
updated: 2026-05-27
categories: ["Tutorials"]
tags: ["gemini", "gems", "google", "custom-assistants", "productivity"]
affiliate_disclosure: true
faqs:
  - question: "Do I need a paid plan to use Gemini Gems?"
    answer: "Yes. As of November 2024, creating and using custom Gems requires Gemini Advanced, which is part of the Google One AI Premium plan at roughly $20/month. Free-tier Gemini users can chat with the standard assistant but can't build Gems."
  - question: "How are Gems different from custom GPTs?"
    answer: "They're the same core idea: a saved system prompt that turns a general chatbot into a specialized assistant. The main differences are ecosystem — Gems live inside Gemini and lean on Google's models, while custom GPTs live in ChatGPT and can be shared through a public store. Gems currently have no public marketplace."
  - question: "Can a Gem access my Gmail or Google Drive?"
    answer: "Not directly within a Gem as of late 2024. Gemini's Google Workspace extensions work in regular chats, but custom Gems are built around your written instructions rather than live connections to your accounts. Paste relevant context into the instructions or the conversation instead."
---

If you've ever found yourself pasting the same three paragraphs of context into Gemini before every request — "you're an editor, here's my style, here's my audience" — Gems are the fix. Rolled out to Gemini Advanced subscribers this year, **Gems are custom versions of Gemini** with your instructions baked in permanently.

This guide walks through creating your first Gem, what the premade ones are good for, and the instruction-writing techniques that separate a genuinely useful Gem from a novelty.

## What you'll need

- A **Gemini Advanced** subscription (via Google One AI Premium, about $20/month as of November 2024 — see our [Gemini Advanced review](/reviews/gemini-advanced-review/) for whether it's worth it overall)
- A desktop browser for the setup — Gems are easiest to create on the web at gemini.google.com, then usable on mobile afterward

## Step 1: Try the premade Gems first

Before building anything, open the Gem manager (left sidebar → **Gem manager**) and test Google's premade Gems. As of this writing there are five:

- **Learning coach** — explains concepts step by step, quizzes you
- **Brainstormer** — idea generation with follow-up prompting
- **Career guide** — resume, interview, and career-planning help
- **Writing editor** — feedback on clarity, grammar, and structure
- **Coding partner** — walks through code and debugging

These matter for two reasons. First, some are genuinely useful — Writing editor is a solid everyday tool. Second, you can **view and copy their instructions** as a starting template, which teaches you more about effective Gem design than any blog post.

## Step 2: Create a new Gem

1. Go to **gemini.google.com** → **Gem manager** → **New Gem**.
2. Give it a short, functional name. You'll be picking it from a list, so "Cold Email Editor" beats "Emailbot 3000."
3. Write the instructions (the important part — next step).
4. Use the **preview pane** on the right to test as you write. This tight loop is the best feature of the editor: tweak an instruction, immediately see how responses change.
5. Save. The Gem now appears in your sidebar, and every chat you start with it carries your instructions automatically.

## Step 3: Write instructions that actually work

This is where most people's Gems fail. "You are a helpful marketing assistant" produces the same generic output as no Gem at all. Structure your instructions in four blocks:

**Role and expertise.** One or two sentences: *"You are a senior email copywriter for a B2B software company. You specialize in short, direct cold outreach."*

**Context it should always know.** This replaces the paragraphs you used to paste in: your product, audience, tone rules, terminology. Be concrete. *"Our product is a scheduling tool for dental clinics. Readers are practice managers with no technical background. Never use the words 'leverage' or 'seamless.'"*

**Output format.** Gems follow format rules reliably when they're explicit: *"Always produce 3 subject line options, then a body under 120 words, then one P.S. line. Use plain text, no markdown headers."*

**Behavioral rules.** The edge cases: *"If information is missing, ask one clarifying question rather than inventing details. Always write at a 9th-grade reading level."*

A note on length: instructions can be long, and detailed usually beats brief — but every rule you add is a rule to maintain. Start with 150–300 words and expand only when the preview shows a gap.

## Step 4: Feed context per conversation, not per Gem

Gems as they exist today are instruction-based — you can't attach a knowledge base of documents the way you might expect. The workaround is simple: put *stable* context in the Gem instructions, and paste *situational* context into the conversation.

For example, a "Meeting Prep" Gem holds your role, your company, and the brief format you want. Then each morning you paste in the attendee list and agenda, and it produces the brief. Gemini's long context window handles large pastes — full documents, long email threads — without complaint.

This split matters: if you bake situational details into the instructions, your Gem quietly goes stale.

## Step 5: Build a small stable, not one mega-Gem

The temptation is to build one "Work Assistant" Gem with fifteen jobs. Resist it — instructions for different tasks contaminate each other, and you'll get email formatting rules leaking into your meeting notes. Better pattern: **one Gem per repeated task.** A realistic starter set:

1. **Style-matched editor** — your writing rules, banned words, target reading level
2. **Meeting prep brief** — paste agenda, get a structured brief
3. **Weekly report formatter** — paste bullet points, get your report template filled
4. **Explain-it-to-a-client** — translates technical detail into client-friendly language

Each takes ten minutes to build and pays back daily. This mirrors the approach that works with [Claude Projects](/tutorials/how-to-use-claude-projects-2024/) and custom GPTs — the ecosystem differs, the discipline doesn't.

## Common pitfalls

- **Vague instructions, vague output.** If your Gem's responses feel generic, the fix is almost always more concrete context, not a different model. Show it an example of the output you want, inside the instructions.
- **Testing with softball prompts.** In the preview pane, test with your *hardest* real case — the ambiguous request, the missing information — not the easy one.
- **Forgetting Gems exist.** Genuinely the most common failure. Pin your top two or three in the sidebar and make them your default entry point for those tasks.
- **Expecting live account access.** A Gem won't read your inbox or Drive on its own. Paste what it needs.
- **Set-and-forget rot.** Revisit instructions monthly. When your product, audience, or role changes, your Gems should too.

## Are Gems worth the effort?

If you already subscribe to Gemini Advanced, yes — unambiguously. Ten minutes of setup per repeated task removes the context-pasting tax forever, and the preview-pane editing loop makes iteration fast. If you're choosing between ecosystems, the Gem system alone probably shouldn't decide it; the underlying assistant quality matters more, and our [Claude vs Gemini comparison](/compare/claude-vs-gemini/) covers that matchup in depth.

But the deeper takeaway applies to every AI assistant: **stop re-explaining yourself to your tools.** Whether it's Gems, Projects, or custom GPTs, the people getting outsized value from AI in 2024 are the ones who invested an hour in packaging their context once — then spent the savings every single day.
