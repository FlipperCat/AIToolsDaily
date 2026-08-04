---
title: "How to Write Technical Documentation with AI (2024 Workflow)"
description: "A practical workflow for using AI to write API docs, READMEs and runbooks: the prompts, the review gates, and the mistakes that ship broken examples."
date: 2024-03-19
updated: 2026-01-22
categories: ["Tutorials"]
tags: ["technical-writing", "documentation", "claude", "chatgpt", "developer-tools"]
affiliate_disclosure: true
faqs:
  - question: "Can AI write accurate API documentation on its own?"
    answer: "No, not unsupervised. It writes accurate documentation when you paste in the actual source code and it writes plausible fiction when you don't. The workflow below is built entirely around that distinction — feed it real code, and treat every generated code example as unverified until you run it."
  - question: "Which model is best for documentation work?"
    answer: "As of early 2024, the large-context models are the practical choice because documentation needs whole files, not snippets. Claude 3 Opus and GPT-4 Turbo both handle enough context for a realistic module. Test both on one of your own files — the difference in house style adherence is bigger than the difference in raw capability."
  - question: "How do I stop AI docs from sounding generic?"
    answer: "Give it two or three of your best existing doc pages as style examples in the same prompt. Models match tone from examples far more reliably than from adjectives — 'match the voice of these pages' outperforms 'write in a friendly but concise tone' every time."
  - question: "Is it worth documenting legacy code this way?"
    answer: "This is arguably the best use case. Legacy code nobody wants to document is exactly where the cost-benefit works out, because a rough-but-accurate description of what a function does is enormously more valuable than the nothing you have now."
---

## How to Write Technical Documentation with AI (2024 Workflow)

Documentation is the work everyone agrees is important and nobody schedules. AI does not fix the scheduling problem, but it does collapse the blank-page cost — and for documentation specifically, the blank page is most of the resistance.

The catch is that a model asked to document code it cannot see will confidently invent parameters, return types, and endpoints. Every practical workflow is therefore built around one rule: **ground everything in real source, verify every example.** Here is the process.

## Step 1: Decide What Kind of Document You're Writing

Do not start with "write documentation." The four common types have different structures and different failure modes:

- **Reference** (API docs, function signatures) — completeness and accuracy matter, voice does not.
- **Tutorial** (getting started) — one happy path, no branches, ends with something working.
- **How-to** (task recipes) — assumes competence, solves one specific problem.
- **Explanation** (architecture, why decisions were made) — the type AI is worst at, because the reasoning lives in people's heads and old Slack threads, not the code.

Naming the type in your prompt changes the output more than any other single word you can add. "Write a how-to for rotating API keys" and "write reference documentation for the key rotation endpoint" produce genuinely different documents.

## Step 2: Feed It the Actual Code

This is the step people skip, and skipping it is why they conclude AI documentation is useless.

Paste the real source file — not a summary, not a snippet. The large-context models available now make this realistic: you can drop in a full module, its type definitions, and a couple of call sites without hitting limits. If you use an in-editor assistant like [GitHub Copilot](/github-copilot-review-2024/) or a chat-first tool like [Claude](/reviews/claude-review/), the mechanics differ but the principle is identical.

Include, in one prompt:

1. The implementation file
2. Type or schema definitions it depends on
3. One or two real call sites showing how it is used in practice
4. Any existing tests

Tests are the most underrated input. They encode the edge cases, the error conditions, and the intended usage that comments never mention.

## Step 3: Give It Your House Style as Examples

Paste two existing documentation pages you are happy with, then say: *"Match the structure, heading depth, and voice of these examples."*

This works dramatically better than describing your style in adjectives. Models are pattern matchers; give them the pattern. If your docs always open with a one-sentence summary, always show a curl example before an SDK example, and never use second person — the model will pick all of that up from two samples without being told any of it.

If you have a style guide, paste the relevant rules too, but keep it short. A five-page style guide in the prompt tends to crowd out the code.

## Step 4: Prompt for a Skeleton First, Then Fill It

Do not ask for a finished page in one shot. Two passes produce better results and are far easier to correct:

**Pass one:** *"Based on this code, produce an outline of the reference page: section headings only, plus a one-line note on what each section will contain. Flag anything you cannot determine from the code."*

That last clause is the important one. It surfaces the gaps — auth requirements, rate limits, deprecation status — that live outside the file. Fill those in yourself before continuing.

**Pass two:** *"Write the full page from this outline."*

Reviewing an outline takes 30 seconds. Reviewing a finished page whose structure is wrong takes 20 minutes and usually ends in a rewrite.

## Step 5: Verify Every Code Example by Running It

Treat generated examples as untested pseudocode. In practice the failure modes are consistent:

- Parameters that existed in a previous version of the library
- Import paths that look right and are not
- Error handling for exceptions the function never raises
- Auth headers in a format the API does not accept

Copy each example into a scratch file and run it. If the example cannot run standalone, it is not a good example — rewrite it until it can. This step is non-negotiable, and it is the entire difference between documentation that builds trust and documentation that destroys it. The same discipline applies to [AI-assisted code review](/tutorials/28-ai-code-review/): the model's suggestion is a hypothesis, not a result.

## Step 6: Do a Dedicated Accuracy Pass

Open the source and the generated doc side by side, and check only facts — nothing about wording:

- Every parameter name spelled exactly as in the code
- Types and optionality correct
- Default values correct
- Return shape correct, including error cases
- No described behaviour that the code does not implement

You can get a second opinion by pasting both the code and the generated doc back into a fresh session with: *"List every factual discrepancy between this documentation and this implementation. Only report discrepancies, not style issues."* A fresh session catches things the drafting session is anchored on.

## Step 7: Write the "Why" Yourself

Leave the explanation sections to humans. Why this design was chosen, what was tried and abandoned, which constraint drove the awkward interface — a model reading the final code has no access to any of that, so it will produce reasonable-sounding rationalizations. Those are worse than blank sections, because they look authoritative and quietly mislead the next engineer.

A good split: AI drafts reference and how-to content, humans write explanation and architectural context.

## Tips That Materially Improve Output

- **Ask for what's missing.** *"What questions would a developer have after reading this that the page does not answer?"* This one prompt reliably improves coverage more than any rewrite.
- **Generate the failure cases explicitly.** Ask for a table of error codes, causes, and fixes. Models produce these well and writers habitually skip them.
- **Batch related files.** Documenting six endpoints in one session yields far more consistent phrasing than six separate sessions.
- **Keep a prompt file in the repo.** Store your working documentation prompt alongside the docs so the next person gets the same output shape.
- **Regenerate on change, don't patch.** When code changes substantially, re-run the workflow rather than hand-editing stale prose. It is faster and avoids the half-updated page problem.

## Pitfalls to Avoid

**Publishing without running examples.** Covered above, and still the number one cause of documentation that developers stop trusting.

**Letting it pad.** Models love a preamble. "In today's fast-paced development environment" belongs in nothing. Instruct it to open with the first useful sentence and cut everything before that.

**Documenting intent instead of behaviour.** If the code has a bug, the docs should describe what the code does — the model will often describe what it assumes the code was meant to do.

**One giant page.** Ask for separate documents per concern rather than a single sprawling file; models will happily produce a 4,000-word monolith that nobody reads.

**Skipping the human read-through.** Run the final page past someone who has not seen the code. If they can complete the task described, it works. If they cannot, no amount of accuracy saves it.

## The Realistic Payoff

This workflow does not make documentation free. It turns a four-hour task into roughly a one-hour task, most of which is verification rather than writing — and verification is work engineers will actually do, which is why the docs get finished at all. For undocumented legacy code, the improvement is larger still, because the alternative is nothing. If you are choosing a model to run this with, our [Claude](/reviews/claude-review/) and [ChatGPT](/reviews/chatgpt-review/) reviews cover the tradeoffs on long-context work.
