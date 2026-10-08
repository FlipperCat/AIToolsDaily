---
title: "How to Write Job Descriptions with AI (2026): A Recruiter-Tested Workflow"
description: "Write clear, inclusive, legally safer job descriptions with ChatGPT, Claude, or Gemini. A step-by-step workflow with prompts, review checks, and pitfalls."
date: 2026-10-06
updated: 2026-10-06
categories: ["Tutorials"]
tags: ["job descriptions", "recruiting", "hr", "chatgpt", "claude", "hiring"]
affiliate_disclosure: true
faqs:
  - question: "Can I use an AI-written job description as-is?"
    answer: "No. Treat the AI output as a strong first draft. A hiring manager needs to confirm the responsibilities and requirements, and someone familiar with your local employment rules should check pay disclosure, accommodation language, and any requirements that could screen out qualified people."
  - question: "Which AI tool is best for writing job descriptions?"
    answer: "Any capable general assistant (ChatGPT, Claude, or Gemini) handles the drafting well. The bigger difference comes from your inputs: a real intake from the hiring manager, your company's tone, and a saved template. Many applicant tracking systems now include a built-in JD writer, which is convenient but usually less flexible."
  - question: "Is it okay to paste internal compensation data into an AI tool?"
    answer: "Only if your company's AI policy allows it and you're using a business or enterprise plan that doesn't train on your data. A safer default is to give the model the approved salary range you plan to publish anyway, not internal band spreadsheets or employee pay data."
  - question: "How do I stop AI job descriptions from sounding generic?"
    answer: "Feed it specifics: the actual problems the person will solve in their first six months, the tools the team uses, and what makes the role different from the same title elsewhere. Then ban filler phrases like 'fast-paced environment' and 'rockstar' in your prompt."
---

Most job descriptions are bad for the same reasons. They are copied from the last posting, padded with clichés, and stuffed with a wish list of requirements that no single person meets. Candidates skim them in seconds and either bounce or apply to everything.

AI assistants are good at fixing exactly this kind of writing problem, but only if you give them real material to work with. Ask ChatGPT for "a job description for a marketing manager" and you'll get the same generic posting everyone else gets. Give it a structured intake and a few constraints, and you'll get something specific enough to attract the people you want.

This guide walks through the workflow we recommend for small teams and in-house recruiters. It works with any capable assistant. If you're still choosing one, our [ChatGPT vs Claude comparison](/compare/chatgpt-vs-claude/) covers the tradeoffs.

## Step 1: Run a 15-minute intake with the hiring manager

The single biggest quality lever is the input, not the prompt. Before you open any AI tool, get answers to these questions from the hiring manager:

- **Why does this role exist now?** (Backfill, new team, new product line?)
- **What will this person own in their first 90 days and first year?** Concrete outcomes, not duties.
- **What are the true must-haves?** Push back hard here. Aim for three to five.
- **What's nice to have but trainable?**
- **What tools, systems, or stack will they use daily?**
- **Who do they work with?** Team size, reporting line, key partners.
- **Work arrangement and location:** remote, hybrid, on-site, time zones, travel.
- **Approved pay range and benefits highlights.**

Record the call or take rough notes. Messy notes are fine. Cleaning up messy notes is what the AI is for.

## Step 2: Set up a reusable system prompt

Rather than re-explaining your preferences every time, save a reusable instruction block. In ChatGPT this can live in a Project or custom GPT; in Claude, a Project with custom instructions; in Gemini, a Gem. Here's a starting point to adapt:

```
You are an experienced recruiter writing job descriptions for [Company],
a [one-line description]. Our tone is [direct, warm, plain-spoken].

Rules:
- Write in second person ("you will...").
- Lead with what the person will accomplish, not a company history.
- Keep "Requirements" to 5 bullets max. Put everything else under
  "Nice to have."
- Avoid: rockstar, ninja, fast-paced, wear many hats, work hard play hard,
  family, and any gendered language.
- Avoid unnecessary degree requirements unless I mark them as legally or
  practically required.
- Never invent benefits, salary figures, or perks I haven't provided.
- Target length: 400-600 words.
```

The "never invent" line matters. Assistants will happily fill gaps with plausible benefits like "unlimited PTO" if you don't stop them.

## Step 3: Generate the first draft from your intake notes

Paste your intake notes under a short instruction:

```
Using the intake notes below, write a job description with these sections:
About the role, What you'll do, What you'll bring (requirements),
Nice to have, How we work, Compensation and benefits, How to apply.

Flag anything in the notes that is ambiguous or contradictory instead of
guessing.

[paste notes]
```

Asking the model to flag ambiguities is one of the most useful tricks here. It will often catch things like "must have 7+ years of experience" sitting next to a mid-level salary range, or "fully remote" alongside a requirement to attend weekly in-office meetings.

## Step 4: Tighten the requirements list

Long requirement lists hurt you. Many qualified candidates, especially career changers and people who undersell themselves, won't apply unless they match nearly every bullet. Run a focused pass:

```
Review the Requirements section. For each bullet, tell me:
1. Is it truly required on day one, or trainable within 3 months?
2. Could it be phrased as a skill or outcome instead of years or a
   credential?
Then rewrite the section with 3-5 bullets.
```

Expect to see "5+ years of B2B SaaS marketing" turn into something like "You've owned a B2B demand generation program end-to-end, including budget and reporting." That version is more specific and less exclusionary.

## Step 5: Run an inclusive-language and clarity check

Ask the assistant to audit its own draft:

```
Audit this job description for:
- Gendered, age-coded, or ability-coded language
- Jargon or internal acronyms an outside candidate wouldn't know
- Vague phrases that don't tell the candidate anything
- Sentences over 25 words
Return a table of issues with suggested replacements, then a revised version.
```

Dedicated tools like Textio or the JD assistants built into applicant tracking systems do this with their own scoring models. A general assistant won't match a purpose-built tool's data, but it catches the obvious problems for free. Our roundup of [AI tools for recruiters](/best-ai-tools-for-recruiters/) covers the specialized options if you hire at volume.

## Step 6: Verify pay, legal, and accommodation language yourself

This is the step you can't hand off. Pay transparency rules now cover a large share of US job postings (several states and cities require a good-faith salary range), and the EU's Pay Transparency Directive set a June 2026 deadline for member states to adopt it into national law. Requirements differ by location, and they change.

Check that:

- The posted salary range matches what was approved, and that the AI didn't round or reformat it in a misleading way.
- Required equal-opportunity and accommodation statements are present and use your company's approved wording.
- Physical requirements, if any, are genuinely necessary for the job.
- Nothing implies a preference based on age, family status, or other protected characteristics.

When in doubt, run it past HR or counsel. AI is a drafting tool, not a compliance tool.

## Step 7: Create channel-specific versions

One master JD rarely fits every channel. Once the master is approved, ask for variants:

- **Careers page:** the full version.
- **LinkedIn post:** a 120-word hook from the hiring manager's point of view.
- **Job board summary:** a short, scannable version under the board's character limits.
- **Internal referral blurb:** two or three sentences employees can paste into a message.

Keep the facts identical across versions. Paste the approved master each time and tell the model not to add anything new.

## Tips that make a real difference

- **Show one great example.** If you have a past posting that performed well, include it as a style reference. Models copy structure and tone well from examples.
- **Write the "first 90 days" section in concrete terms.** "Ship the redesigned onboarding flow" beats "contribute to product initiatives." Candidates use this section to picture themselves in the job.
- **Ask for a candidate-eye review.** Prompt: "Read this as a skeptical senior candidate with three other offers. What would make you skip it?" The answers are often blunt and useful.
- **Version your template.** When a posting gets strong applicants, save the prompt and output together so the next role starts from a proven baseline.

## Common pitfalls

**Invented details.** The most frequent error is the model adding perks, team sizes, or tools that weren't in your notes. Read every factual claim against your intake.

**Copy-paste sameness.** If every JD at your company comes from the same prompt with thin inputs, they'll all read alike. The intake is what makes each one distinct.

**Pasting sensitive data.** Don't paste candidate resumes, employee pay data, or confidential reorg plans into a consumer AI account. If your company doesn't have rules for this yet, our guide to [writing an AI usage policy for a small business](/tutorials/ai-usage-policy-small-business-2026/) is a good place to start.

**Over-polishing.** Heavily edited AI copy tends to drift toward smooth, corporate, interchangeable prose. Keep a sentence or two in the hiring manager's own voice. It signals there's a real person behind the role.

**Skipping the hiring manager review.** The manager should read the final draft before it goes live. Mismatched expectations between the posting and the interview loop waste everyone's time.

## A realistic time budget

Once your system prompt is set up, the workflow looks roughly like this:

| Step | Time |
|------|------|
| Intake call | 15 minutes |
| First draft + ambiguity flags | 5 minutes |
| Requirements and inclusivity passes | 10 minutes |
| Human verification (pay, legal, facts) | 10-15 minutes |
| Channel variants | 5 minutes |

That's under an hour for a posting that would typically take a couple of hours to write from scratch, and the result is usually better. For a broader view of how teams are using AI across the hiring funnel, see our guide to [AI tools for HR and recruiting](/ai-tools-hr-recruiting-2026/).

## The bottom line

AI won't tell you who you should hire. It's very good at turning a hiring manager's messy notes into a clear, specific posting that respects the candidate's time. Put the effort into the intake and the final human review, and let the assistant handle the drafting in between.
