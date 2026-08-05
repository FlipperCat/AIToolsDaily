---
title: "How to Write a Grant Proposal With AI (2025): A Practical Workflow"
description: "A step-by-step workflow for drafting grant proposals with AI: build a source pack, extract the funder rubric, draft section by section, verify every claim."
date: 2025-02-18
updated: 2026-04-06
categories: ["Tutorials"]
tags: ["grant-writing", "nonprofit", "claude", "chatgpt", "writing"]
affiliate_disclosure: true
faqs:
  - question: "Is it allowed to use AI to write a grant proposal?"
    answer: "Most funders have no explicit policy, and the ones that do generally require disclosure rather than prohibition. Some federal and research funders have started adding language about AI-assisted preparation. Read the solicitation carefully, and when in doubt, ask the program officer — it is a normal question in 2025 and nobody will be offended."
  - question: "Will AI-written grant applications get flagged as machine-generated?"
    answer: "Detection tools are unreliable enough that most reviewers do not use them. The bigger risk is not detection but flatness — proposals that read as generic lose on substance, not on provenance. If you use AI for structure and your own material for evidence and voice, this is not a real problem."
  - question: "Which AI tool is best for grant writing?"
    answer: "Any capable long-context assistant works. Claude tends to handle long source documents and hold a consistent voice well; ChatGPT is stronger for structured brainstorming and budget narrative math. The tool matters far less than the quality of the source pack you give it."
---

Grant writing is mostly not writing. It's assembling evidence, matching it to a funder's priorities, and saying it in the funder's own language within a word limit. AI is genuinely good at the assembly and translation parts — and genuinely dangerous at the evidence part, because it will invent a statistic that sounds exactly like the one you needed.

This workflow keeps AI where it helps and out of where it hurts. It assumes you have a real program and real data. If you don't, no tool fixes that.

## Step 1: Build a source pack before you write anything

The single biggest quality determinant is what you put in front of the model. Before drafting a word, assemble one folder containing:

- Your last 2–3 successful proposals (and one that was rejected, if you have reviewer feedback)
- Your current program description, logic model, and outcome data
- Your organization's boilerplate: mission, history, staff bios, financials
- Letters of support and partner descriptions
- The full funder solicitation or RFP, plus the funder's most recent annual report or grantee list

Load all of it into a persistent workspace — [Claude Projects](/tutorials/how-to-use-claude-projects-2024/) or a ChatGPT project both work — so you're not re-pasting context on every turn. Everything downstream draws from this pack.

**Tip:** include the rejected proposal. Asking "what did this application fail to demonstrate that the funder asked for?" against real reviewer comments produces sharper guidance than any generic grant-writing advice.

## Step 2: Turn the solicitation into a scoring rubric

Funders tell you how they score. It's usually buried across twelve pages of eligibility language.

Prompt the model with the full RFP and ask it to extract:

> Read this solicitation and produce a table with one row per required element. Columns: section name, word or page limit, exactly what the funder asks for in their words, the review criterion it maps to, and point value if stated. Flag anything ambiguous separately.

This gives you a checklist to write against and to audit the final draft with. It's the highest-value five minutes in the whole process — and it catches the attachment or certification everyone forgets until 11pm the night before the deadline.

## Step 3: Draft a proposal brief, not a proposal

Don't ask for a draft yet. Ask the model to interrogate you first:

> Based on the funder's priorities and my program materials, ask me the 10 questions a skeptical reviewer would ask that my current materials do not answer.

Answer those questions yourself, in bullet points, in your own words. That answer set becomes the actual substance of the proposal. Almost every weak AI-written application skips this step — the model fills the gaps with plausible-sounding generic nonprofit language, and reviewers can smell it immediately.

## Step 4: Draft section by section, never all at once

Ask for the whole proposal in one go and you get uniform mush. Work one section at a time, each with its own prompt and its own source material.

**Need/problem statement.** Feed it your local data and the funder's framing. Ask for a version that leads with the specific population you serve, not with national statistics. Every reviewer has read the national statistic already.

**Program description.** Give it your logic model and ask it to translate activities into the funder's outcome vocabulary. If the RFP says "evidence-based," you need to name the evidence base explicitly.

**Goals and measurable objectives.** This is where AI helps most. Paste your rough objectives and ask it to rewrite each one in strict SMART form, then to identify which lack a defined measurement instrument. It will find the vague ones you've been recycling for years.

**Evaluation plan.** Ask what data collection would credibly demonstrate each objective, then cut back to what you can actually staff. Over-promising evaluation is a classic self-inflicted wound.

**Budget narrative.** Give it your budget lines and ask for a justification paragraph per line tied to program activities. Then check the arithmetic yourself — every total, every percentage. Do not trust generated math.

**Organizational capacity.** Feed staff bios and past performance. Ask it to connect each person's experience to a specific proposal activity, rather than listing credentials.

## Step 5: Fight the word limit deliberately

Grant sections are almost always over limit on the first pass. Rather than trimming by hand:

> This section is 720 words. The limit is 500. Cut it to 490 without removing any specific number, name, or commitment. Tell me what you cut and why.

Requiring the model to report what it removed catches the case where it quietly drops your outcome data to make room for transitions.

## Step 6: Verify every factual claim

Go through the draft and highlight every number, date, citation, statistic, and named source. For each one, confirm it against your own documents or a real source you can link. If you can't trace it, delete it.

This is not optional. Fabricated citations in a grant application are worse than a weak application — they damage a relationship with a funder you'll want to approach again. Assume anything specific that you didn't supply is invented until proven otherwise. Our guide on [summarizing documents with AI](/tutorials/summarize-documents-with-ai/) covers the same verification discipline for source-grounded work generally.

## Step 7: Run an adversarial review

Before submitting, open a fresh conversation with no drafting history and paste the final proposal plus the rubric from Step 2:

> You are a reviewer scoring this against the attached criteria. Score each criterion, justify each score, and list the three weakest points. Be harsh.

A clean context matters — a model that helped write something is reluctant to criticize it. This pass reliably surfaces two or three fixable gaps, usually in evaluation or sustainability.

Then have a human read it. Preferably someone who doesn't work on the program.

## Pitfalls to avoid

- **The voice problem.** AI defaults to a register that reads as institutional and slightly hollow. Paste in two paragraphs you wrote yourself and ask it to match that voice — it helps, though you'll still need a manual pass.
- **Beneficiary privacy.** Don't paste identifiable client data into a consumer AI account. Use aggregates, or an enterprise/zero-retention plan.
- **Recycled framing.** If you use the same workflow for six applications, they'll converge. Rebuild the funder-specific framing every time.
- **Skipping the funder's actual language.** Reviewers score against criteria written in their words. Mirror that vocabulary.
- **Trusting generated numbers.** Repeated because it's the failure that actually loses grants.

## What this changes in practice

Realistically, this workflow takes a proposal from roughly 20 hours to 8–10 — mostly by eliminating blank-page time and the reformatting slog. It does not make a weak program fundable, and it doesn't replace knowing the funder.

If you're choosing a tool for this, both major assistants work well; our [ChatGPT vs Claude comparison](/compare/chatgpt-vs-claude/) covers the differences in long-document handling and writing quality, and the individual [Claude](/reviews/claude-review/) and [ChatGPT](/reviews/chatgpt-review/) reviews go deeper. For the wider nonprofit stack — donor research, reporting, communications — see our [best AI tools for nonprofit organizations](/best-ai-tools-for-nonprofit-organizations/) roundup.
