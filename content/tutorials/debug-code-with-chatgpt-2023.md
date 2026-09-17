---
title: "How to Debug Code with ChatGPT (2023): A Practical Workflow That Avoids the Traps"
description: "A step-by-step method for debugging code with ChatGPT: how to share errors, shrink the problem, verify fixes, and avoid confident but wrong answers."
date: 2023-01-12
updated: 2025-08-19
categories: ["Tutorials"]
tags: ["chatgpt", "debugging", "ai-coding", "programming", "developer-productivity"]
affiliate_disclosure: true
faqs:
  - question: "Can ChatGPT run my code to find the bug?"
    answer: "No. ChatGPT can't execute code. It reads what you paste and predicts a likely explanation and fix. That's why you need to run every suggested fix yourself and report the actual result back, rather than assuming the answer is correct."
  - question: "Is it safe to paste company code into ChatGPT?"
    answer: "Treat it with caution. ChatGPT is a research preview, and OpenAI's terms note that conversations may be reviewed and used to improve its systems. Don't paste secrets, credentials, customer data, or proprietary code your employer hasn't approved for use with third-party services."
  - question: "Why does ChatGPT suggest functions that don't exist?"
    answer: "It generates plausible-looking code based on patterns, and its training data stops in 2021. It can invent methods, mix up library versions, or reference options that were renamed. Always check suggested APIs against the official documentation for the version you're running."
---

ChatGPT has been out for about six weeks, and developers have already figured out it's one of the better rubber ducks ever made. You paste a stack trace, it explains what went wrong, and it often proposes a fix. It also, with equal confidence, invents library functions and "fixes" bugs by quietly changing what your code does.

The difference between those outcomes is mostly how you ask. Below is the workflow that has worked reliably for us across Python, JavaScript, and SQL, plus the pitfalls to watch for. If you haven't used the tool much yet, our [ChatGPT review](/reviews/chatgpt-review/) covers the basics.

## What ChatGPT is (and isn't) good at for debugging

**Good at:**
- Explaining cryptic error messages in plain language
- Spotting common mistakes: off-by-one errors, wrong variable scope, mutating a list while iterating, missing `await`
- Suggesting likely causes when you describe symptoms clearly
- Writing a small reproduction or test case

**Not good at:**
- Anything that depends on running the code. It can't execute anything.
- Very recent library versions. Its knowledge stops in 2021.
- Large codebases. It only sees what you paste, and long conversations push early context out of its memory.
- Bugs caused by environment, config, or data it can't see.

Keep that list in mind and you'll know when to reach for it and when to open the debugger.

## Step 1: Reproduce the bug before you ask

It's tempting to paste the whole file and type "why doesn't this work?" Resist it. First confirm you can trigger the bug reliably and note:

- The exact command or action that triggers it
- The **full** error message and stack trace
- What you expected vs. what actually happened
- Language, framework, and version numbers

That last point matters more than you'd think. A pandas 0.25 answer can be wrong for pandas 1.5, and ChatGPT will not ask which one you're on.

## Step 2: Shrink the problem

ChatGPT's context window is limited, and answers get worse as you paste more. Cut the code down to the smallest piece that still shows the bug:

1. Remove unrelated functions, imports, and UI code.
2. Replace database calls or API requests with hard-coded sample data.
3. Rerun the trimmed version to confirm the bug still happens.

Half the time, this step alone reveals the bug. The other half, you now have a snippet short enough for ChatGPT to reason about properly.

## Step 3: Use a structured prompt

Here's a template that consistently gets better answers than a bare code dump:

```
I'm debugging a Python 3.10 script using requests 2.28.

Goal: fetch paginated results and combine them into one list.

Expected: 250 items total.
Actual: I get 50 items, and the loop exits after the first page.

Code:
[paste minimal snippet]

Full error / output:
[paste output]

Explain the most likely cause before suggesting a fix.
Don't change the function's behavior beyond fixing this bug.
```

Two lines in there do most of the work:

- **"Explain the most likely cause before suggesting a fix"** makes it reason about the problem instead of jumping to a rewrite. You also get an explanation you can check.
- **"Don't change the function's behavior beyond fixing this bug"** stops it from "improving" your code by renaming variables, restructuring logic, or swapping libraries, which makes the real change hard to spot.

## Step 4: Ask for multiple hypotheses on hard bugs

For intermittent or confusing bugs, one confident answer is risky. Ask instead:

> List three plausible causes for this behavior, ranked by likelihood, and for each one tell me what I could log or check to confirm or rule it out.

This turns ChatGPT from an oracle into a debugging partner. You run the checks, report back what you found, and narrow it down together. It's slower per message but much faster overall, because you're not chasing a wrong fix.

## Step 5: Verify every fix, then report back

Never paste a suggested fix into your project without:

1. **Reading the diff.** Compare it to your original line by line. Did it change more than it said?
2. **Checking any unfamiliar function** against official docs. Invented methods are the most common failure we see.
3. **Running it,** ideally with a test that failed before the fix.

If it doesn't work, say so specifically: "That removed the error, but now the list contains duplicates. Here's the new output." Vague replies like "still broken" lead to random guessing.

A quick tip: if the answer cuts off mid-code block, type "continue" and it will usually pick up where it stopped.

## Step 6: Use it to write the regression test

Once the bug is fixed, ask:

> Write a minimal pytest test that would have caught this bug.

It's good at this, and the test protects you from the bug coming back. It also acts as a final check: if the test it writes doesn't fail against your old code, one of you misunderstood the bug.

## Prompts worth saving

- **Explain an error:** "Explain this error message to me like I'm new to [language]. What usually causes it?"
- **Read a stack trace:** "Which line in this stack trace is in my code rather than the library, and what's happening there?"
- **Add logging:** "Add print/log statements to this function so I can see where the value becomes None. Don't change any logic."
- **Check an assumption:** "In [library + version], does [function] modify the object in place or return a new one?" (Then verify in the docs.)
- **Compare versions:** "Here's a version that works and one that doesn't. What's the meaningful difference?"

## Pitfalls to avoid

**Hallucinated APIs.** ChatGPT will cheerfully suggest `df.remove_duplicates()` when the real method is `drop_duplicates()`. If it doesn't ring a bell, look it up.

**Fixing the symptom.** Wrapping a crash in `try/except: pass` makes the error go away and the bug stay. If a fix silences an error without explaining why the error happened, push back.

**Outdated patterns.** Answers sometimes use deprecated syntax or older library conventions. That's especially common with fast-moving JavaScript frameworks.

**Pasting secrets.** Strip API keys, passwords, connection strings, and customer data before pasting anything. This is a public research preview, not an internal tool.

**Posting its answers as your own.** Stack Overflow has already banned ChatGPT-generated answers, because so many plausible-looking ones turned out to be wrong. Use it to understand the problem, not to outsource judgment.

**Capacity errors.** Demand is high, and at peak hours you may see "ChatGPT is at capacity." Save your structured prompt somewhere so you can paste it again when you get back in.

## Where ChatGPT fits alongside other tools

ChatGPT works best as a conversation *about* your code, not inside it. In-editor tools like GitHub Copilot and [Amazon CodeWhisperer](/compare/github-copilot-vs-codewhisperer-2023/) are better at completing code as you type, but they don't explain things or accept "why is this happening?" questions the way a chat interface does. Many developers are settling into using both: autocomplete for writing code, chat for figuring out why it broke.

If your bugs are mostly in database queries, see our guide to [writing and debugging SQL with AI](/tutorials/write-sql-queries-with-ai-2023/) for prompts built around schemas and query plans.

## The bottom line

ChatGPT won't replace a debugger, logs, or understanding your own code. But with a reproduced bug, a trimmed snippet, and a prompt that asks for reasoning before fixes, it can cut the time spent staring at a stack trace. Treat every answer as a hypothesis to test, and it's a genuinely useful partner.
