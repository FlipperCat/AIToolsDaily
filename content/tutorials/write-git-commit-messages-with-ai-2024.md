---
title: "How to Write Better Git Commit Messages with AI (2024 Guide)"
description: "A practical 2024 guide to generating clear git commit messages with AI: editor buttons, CLI tools, prompts that work, and the mistakes to avoid."
date: 2024-12-03
updated: 2026-09-30
categories: ["Tutorials"]
tags: ["git", "commit messages", "github copilot", "developer tools", "ai coding"]
affiliate_disclosure: true
faqs:
  - question: "Should I let AI write every commit message?"
    answer: "Let it write the first draft, not the final one. AI is good at summarizing what changed in a diff, but it can't know why you made the change unless you tell it. Always add or check the reason before you commit."
  - question: "Is it safe to send my diffs to an AI tool?"
    answer: "That depends on your company's policy and the tool's data handling. Editor integrations under business plans often have stricter data terms than consumer chatbots. For proprietary code, check with your security team, and never paste diffs that contain secrets or credentials."
  - question: "Can AI follow the Conventional Commits format?"
    answer: "Yes, reliably, if you ask for it explicitly or configure your tool to use it. Give the format and the list of allowed types (feat, fix, docs, refactor, and so on) in your prompt or tool settings, and it will usually comply."
  - question: "Why does the AI message describe things I didn't change?"
    answer: "Usually because it saw unstaged changes or a much larger diff than you meant to commit. Stage only what belongs in the commit and generate the message from the staged diff."
---

Commit messages are the documentation people actually read. They show up in `git log`,
in `git blame`, and in every code review. They're also the thing most developers rush,
which is how a history fills up with "fix," "wip," and "updates."

AI is a good fit for this job. A diff is structured input, and a commit message is a
short, structured summary of it. In 2024 you can generate messages from a button in your
editor, from a CLI tool, or from a chat assistant. This guide covers all three, plus a
prompt that works and the habits that keep AI-written history useful.

## Step 1: Agree on what a good commit message looks like

The AI will copy whatever standard you give it, so set one first. A widely used
convention:

```
<type>(<optional scope>): <short summary in imperative mood>

<body: what changed and why, wrapped around 72 characters>

<footer: issue references, breaking changes>
```

For example:

```
fix(auth): refresh expired tokens before retrying requests

Requests made right after a token expired failed with 401 and were not
retried. The client now refreshes the token once and retries the request.

Closes #482
```

Key rules: a subject line under about 50–72 characters, imperative mood ("add," not
"added"), and a body that explains the **why**. The why is the part AI can't infer
alone.

## Step 2: Stage only what belongs together

AI summaries are only as focused as the diff you feed them. Before you generate
anything:

```bash
git add -p        # stage hunks interactively
git diff --staged # review exactly what will be committed
```

If the staged diff contains two unrelated changes, the message will be muddled. Split
the change into two commits. This step improves AI output more than any prompt tweak.

## Step 3: Use your editor's built-in generator

The easiest route is the one inside your editor.

- **VS Code with GitHub Copilot.** The Source Control panel has a sparkle icon in the
  commit message box that drafts a message from your staged changes. If you're deciding
  between assistants, our [Cursor vs GitHub Copilot](/compare/cursor-vs-github-copilot/)
  comparison and [GitHub Copilot review](/github-copilot-review-2024/) cover the wider
  tradeoffs.
- **Cursor.** Cursor offers a similar generate button in its source control view.
- **JetBrains IDEs.** The JetBrains AI Assistant can generate commit messages from the
  commit dialog.

Editor generators are fast but generic by default. Many let you add custom
instructions, so put your convention (types, length, tone) there once and every
generated message follows it.

## Step 4: Or use a CLI tool

If you live in the terminal, small open-source tools such as `aicommits` and
`opencommit` read your staged diff, call a model, and propose a message. The general
pattern:

```bash
git add -p
aicommits          # or: oco (opencommit)
# review, edit, accept
```

You can also build a one-liner with any CLI that sends text to a model. For example,
with Simon Willison's `llm` tool:

```bash
git diff --staged | llm -s "Write a Conventional Commits message for this diff. \
Subject under 60 chars, imperative mood. Body explains why in 1-3 lines."
```

CLI tools usually need an API key and bill per use, so check cost and data policy
before you wire them into every commit.

## Step 5: Use a prompt that asks for the why

Whether you use a chatbot or a CLI, this prompt template works well:

```
You are writing a git commit message.

Format: Conventional Commits. Allowed types: feat, fix, refactor, docs, test, chore, perf.
Subject: imperative mood, under 60 characters, no trailing period.
Body: 1-3 short lines explaining WHY the change was made, wrapped at 72 chars.
Do not describe code that is not in the diff. Do not invent issue numbers.

Context from me (the reason for this change): <one sentence>

Diff:
<paste staged diff>
```

The "context from me" line matters most. One sentence like "users on slow networks hit
timeouts during checkout" turns a mechanical summary into a message that's useful a year
later. General chat assistants like ChatGPT and Claude both handle this well. See
[ChatGPT vs Claude](/compare/chatgpt-vs-claude/) if you're choosing between them.

## Step 6: Review before you commit

Read the draft against the diff and check for:

1. **Hallucinated scope.** Mentions of files or behavior that aren't in the change.
2. **Wrong type.** A refactor labeled `fix`, or a breaking change without a note.
3. **"What" without "why."** If the body only restates the diff, add the reason.
4. **Invented references.** Fake issue numbers or ticket IDs.
5. **Length.** Trim long subject lines, which get truncated in many UIs.

Editing takes ten seconds. Skipping it is how AI-generated history becomes noise.

## Tips

- **Commit smaller.** Small, focused commits produce clearer AI messages and are easier
  to review and revert.
- **Use squash-merge messages carefully.** For a PR squash, give the AI the PR
  description too, not just the combined diff.
- **Teach the convention in one place.** Store instructions in the tool's settings or a
  shared prompt snippet so the whole team gets the same format.
- **Pair it with commit linting.** A tool like `commitlint` in a git hook catches format
  errors whether a human or an AI wrote the message.
- **Generate other things from the same diff.** The diff-plus-context pattern also
  works for PR descriptions, changelog entries, and test ideas. For tests, see
  [writing unit tests with ChatGPT](/tutorials/write-unit-tests-with-chatgpt-2023/).

## Common Pitfalls

- **Generating from unstaged changes.** The message describes work you didn't commit.
- **Giant diffs.** Very large diffs get summarized vaguely or cut off. Split the commit.
- **Leaking secrets.** Never paste `.env` files, keys, or customer data into an
  external tool.
- **Trusting the tone blindly.** Some generators produce chatty, emoji-heavy messages.
  Set the tone in your instructions.
- **Letting it hide bad commits.** A well-written message on a commit that mixes five
  changes is still a bad commit.

## Wrapping Up

AI makes good commit messages cheap. Stage focused changes, use your editor's generator
or a small CLI tool, give it one sentence of context about why, and review the draft
before committing. Your future self, and every reviewer running `git blame`, will be
able to read the history.
