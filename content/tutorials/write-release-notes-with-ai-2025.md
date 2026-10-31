---
title: "How to Write Release Notes With AI (2025): From Git Log to Customer-Ready Changelog"
description: "A step-by-step workflow for turning commits and merged PRs into clear release notes with ChatGPT, Claude, or Gemini, with prompts, checks, and pitfalls."
date: 2025-06-18
updated: 2026-04-14
categories: ["Tutorials"]
tags: ["release notes", "changelog", "chatgpt", "claude", "developer tools", "technical writing"]
affiliate_disclosure: true
faqs:
  - question: "Which AI model is best for writing release notes?"
    answer: "Any current frontier model, such as ChatGPT, Claude, or Gemini, can do this well, because the hard part is the input, not the model. Claude tends to follow tone and format instructions closely, and ChatGPT and Gemini are equally capable with a good template. Pick the one your team already uses and invest in the prompt and the source data."
  - question: "Is it safe to paste commit history into an AI tool?"
    answer: "Check your company's AI policy first. Commit messages and PR descriptions can contain internal codenames, customer names, or security details. Use a business or enterprise plan that excludes your data from training, or strip sensitive lines before pasting."
  - question: "Should AI-generated release notes be published without review?"
    answer: "No. The model can only describe what's in the commits and PRs you give it, and it can misread intent or overstate a fix. Have the engineer or PM who owns the release check every line, especially anything about security, breaking changes, or data."
---

Release notes are the writing task nobody owns. Engineers write commit messages for other engineers, product managers are busy with the next release, and the changelog ends up as either a raw list of PR titles or nothing at all.

AI models are very good at this job. Translating terse technical changes into plain language, grouping them, and matching a template is exactly what they do well. The catch is that they can only work with what you give them. This tutorial walks through a workflow that produces accurate, readable release notes in about 15 minutes per release.

The examples use ChatGPT, Claude, and Gemini interchangeably. Any current model works.

## Step 1: Decide who the notes are for

Before you prompt anything, pick one audience per document. Most bad release notes try to serve everyone at once.

- **End users** want to know what changed in the product, why they'd care, and whether they need to do anything.
- **Developers or API customers** need breaking changes, deprecations, new endpoints or parameters, and migration steps.
- **Internal teams** like support and sales need to know what to tell customers and which known issues to watch for.

If you need two audiences, generate two documents from the same source data. It's one extra prompt.

## Step 2: Collect clean source material

The quality of your notes depends almost entirely on this step. Pull the changes since the last release:

```bash
git log v2.3.0..HEAD --no-merges --pretty=format:"%h %s"
```

Commit subjects alone are usually too thin. Better sources, in rough order of usefulness:

1. **Merged pull request titles and descriptions.** PRs usually explain the why, not just the what.
2. **Linked issue or ticket titles**, which often describe the user-facing problem.
3. **Commit messages**, especially if your team uses a convention like Conventional Commits (`feat:`, `fix:`, `chore:`).

If your commits are a mess, fix that upstream. Our guide to [writing git commit messages with AI](/tutorials/write-git-commit-messages-with-ai-2024/) helps here, and better commits make every future release easier.

Before you paste, remove anything sensitive: customer names, internal hostnames, credentials, and details of unpatched security issues.

## Step 3: Write a template the model must follow

Give the model a fixed structure rather than asking it to "write release notes." A simple user-facing template:

```
## [Version] — [Date]

### New
- **[Feature name]**: one sentence on what it does and why it helps.

### Improved
- ...

### Fixed
- ...

### Action required
- Anything users must do (only include if non-empty).
```

For developer-facing notes, add **Breaking changes**, **Deprecated**, and **Migration** sections and put breaking changes first.

If your team follows the Keep a Changelog convention (Added, Changed, Deprecated, Removed, Fixed, Security), tell the model to use those headings exactly.

## Step 4: Use a prompt with rules, not vibes

Here's a prompt that works well:

```
You are writing release notes for [product], a [one-line description].
Audience: [end users / developers / internal support].

Using ONLY the changes listed below, write release notes in this exact template:
[paste template]

Rules:
- Describe changes in terms of user benefit, not implementation.
- One sentence per item. No marketing language ("exciting", "powerful").
- Merge related changes into one item.
- Skip internal-only changes (refactors, CI, dependency bumps) unless they affect users.
- If the purpose of a change is unclear, list it under "NEEDS REVIEW" with the
  original text instead of guessing.
- Never invent features, numbers, or fixes that are not in the source.

Changes:
[paste PRs / commits]
```

The **NEEDS REVIEW** rule matters most. Without it, models fill gaps with plausible guesses. A commit like `fix race in sync` turns into "Fixed an issue where some files failed to sync," which may or may not be true.

## Step 5: Review against the source

Read the draft side by side with the change list. Check for:

- **Invented scope.** "Improved performance across the app" when the PR touched one screen.
- **Merged items that shouldn't be merged.** Two unrelated fixes collapsed into one vague line.
- **Missing breaking changes.** Models sometimes file a breaking API change under "Improved." Search the source for `BREAKING`, `remove`, `rename`, and `deprecate`.
- **Overclaimed security fixes.** Keep security notes factual and coordinated with whoever owns disclosure.
- **The NEEDS REVIEW list.** Resolve each item with the engineer who made the change.

A useful follow-up prompt: *"List every line in your release notes and the source change it came from. Flag any line without a direct source."* This makes unsupported claims easy to spot.

## Step 6: Adapt for each channel

Once the core notes are accurate, reuse them:

- **In-app "What's new"**: "Rewrite the New section as three short bullets of under 12 words each."
- **Email to customers**: "Turn these notes into a 150-word email that leads with the most useful change. Plain tone, one call to action."
- **Support macro**: "Write an internal summary for support: what changed, likely customer questions, and suggested answers."
- **Docs changelog**: keep the full version with every fix.

The facts stay the same across versions. Only the framing changes. That's the main advantage of generating the accurate version first.

## Step 7: Make it repeatable

Once the workflow is stable, cut the manual steps:

- **Save the prompt and template** as a ChatGPT project, Claude project, or Gemini Gem so the rules travel with it.
- **Generate PR summaries at merge time.** Tools like GitHub Copilot can draft PR descriptions, which gives you better source material at release time.
- **Script the collection step.** A short script that pulls merged PRs between two tags with the GitHub CLI and writes them to a text file removes most of the busywork.
- **Keep a style example.** Paste one past release note you liked into the prompt as a reference for tone and length.

Teams that already document processes with AI can fold this into their release checklist. Our guide to [writing SOPs with AI](/tutorials/write-sops-with-ai-2025/) shows how to formalize it.

## Tips

- **Batch by release, not by week.** Notes tied to a version number are easier to search and link.
- **Lead with the change users will notice most.** Order by impact, not by merge order.
- **Name features consistently.** Give the model a short glossary if your UI labels differ from internal codenames.
- **Long releases fit fine.** Current models like Claude 4 and Gemini 2.5 Pro handle long inputs, so a big release with hundreds of PRs fits in one prompt. The review step still takes longer, though.
- **For deeper docs**, see [writing technical documentation with AI](/tutorials/write-technical-documentation-with-ai-2024/).

## Common pitfalls

1. **Feeding only commit subjects.** You'll get vague notes. Include PR descriptions.
2. **Letting the model guess intent.** Always use a NEEDS REVIEW bucket.
3. **Publishing without an owner's sign-off.** Someone who knows the release must approve it.
4. **Over-polishing.** Release notes aren't marketing copy. If it reads like an ad, cut the adjectives.
5. **Leaking internal details.** Codenames, customer names, and unpatched vulnerabilities should never reach the prompt, let alone the published notes.

## Wrapping up

AI doesn't remove the need to know what shipped. It removes the tedious part: turning a pile of technical changes into something a customer can read in 30 seconds. Collect good source material, use a strict template and a no-guessing rule, and check every line against the source. Most teams find this cuts release-note time from an hour or more to about 15 minutes, with better results than the old PR-title dump.
