---
title: "How to Write Regex With ChatGPT (2023): A Practical Step-by-Step Guide"
description: "Use ChatGPT to write, explain, and debug regular expressions without memorizing syntax. A practical workflow with prompts, testing steps, and pitfalls."
date: 2023-01-19
updated: 2025-11-04
categories: ["Tutorials"]
tags: ["chatgpt", "regex", "coding", "developer tools", "productivity"]
affiliate_disclosure: true
faqs:
  - question: "Can ChatGPT write correct regular expressions?"
    answer: "Often, yes, for common patterns like emails, dates, phone numbers, and log lines. But it regularly produces patterns that are too loose, too strict, or written for the wrong regex flavor. Treat every pattern as a draft and test it against real sample data before shipping it."
  - question: "Which regex flavor should I tell ChatGPT to use?"
    answer: "Always name the engine you're running: JavaScript, Python's re module, PCRE, .NET, Java, or POSIX grep/sed. Features like lookbehind, named groups, and possessive quantifiers differ between flavors, and ChatGPT will not guess your environment reliably."
  - question: "Is it safe to paste my data into ChatGPT to build a regex?"
    answer: "Only paste sample data you're allowed to share. For logs or customer records, replace names, emails, IDs, and tokens with realistic fake values first. The structure of the text is what matters for building the pattern, not the real contents."
---

Regular expressions are one of those skills most developers use every month and remember for about ten minutes. You know a pattern exists for what you need, you vaguely remember `\d` and `+`, and then you spend half an hour on a cheat sheet and a regex tester.

ChatGPT, released at the end of 2022, turns out to be good at exactly this kind of task: turning a plain-English description into a pattern, and turning a cryptic pattern back into plain English. It is not reliable enough to trust blindly, though. This guide walks through a workflow that gets you working regex fast while catching the mistakes the model makes.

If you're new to the tool itself, start with our [ChatGPT review](/reviews/chatgpt-review/) for an overview of what it does well and where it struggles.

## Step 1: Collect real sample text first

Before you open ChatGPT, gather 10 to 20 lines of the actual text you need to match. Include:

- **Lines that should match** (the normal cases)
- **Lines that should not match** (near-misses that look similar)
- **Edge cases** (empty values, extra whitespace, unusual formats)

This is the single biggest factor in getting a good result. "Match a date" is ambiguous. "Match dates like `2023-01-19` but not `2023-1-19` or `19/01/2023`" is not.

If the text contains anything sensitive, swap in fake values that keep the same shape. `jane.doe@company.com` becomes `test.user@example.com`; a real order ID becomes a made-up one with the same length and character types.

## Step 2: Write a specific prompt

A good regex prompt has four parts: the flavor, the goal, the examples, and the output you want. Here's a template:

```
I'm using Python's re module.
Write a regex that matches order IDs in this format: two uppercase letters,
a hyphen, then exactly 6 digits (e.g. AB-123456).

Should match:
AB-123456
ZX-000001

Should NOT match:
ab-123456
AB-12345
AB-1234567
AB123456

Return the pattern, then explain each part on its own line.
```

Naming the flavor matters. JavaScript, Python, PCRE (used by PHP and many tools), .NET, and command-line tools like `grep` and `sed` all handle features differently. Lookbehind support, named-group syntax, and escaping rules vary, and a pattern that works in one engine can throw an error or silently misbehave in another.

Asking for an explanation is also important. It forces the model to reason about each piece, and it gives you something to check.

## Step 3: Read the explanation critically

ChatGPT's answer for the example above might look like this:

```
^[A-Z]{2}-\d{6}$
```

- `^` start of the string
- `[A-Z]{2}` exactly two uppercase letters
- `-` a literal hyphen
- `\d{6}` exactly six digits
- `$` end of the string

Now ask yourself: does this fit how you'll use it? The `^` and `$` anchors mean the pattern only matches when the **entire string** is an order ID. That's right for validating a form field. It's wrong if you're searching for order IDs inside a longer log line. In that case you want word boundaries instead:

```
\b[A-Z]{2}-\d{6}\b
```

This is the most common mismatch you'll see. The model picks either anchored or unanchored matching, and it doesn't always pick the one you need. Tell it explicitly: "I'm searching inside longer text" or "I'm validating the whole input."

## Step 4: Test it outside ChatGPT

Never paste a generated pattern straight into production code. Test it in a proper regex tester (regex101 and similar sites let you choose the flavor and show matches live) or in a quick script:

```python
import re

pattern = re.compile(r"\b[A-Z]{2}-\d{6}\b")

should_match = ["AB-123456", "Order ZX-000001 shipped"]
should_not = ["ab-123456", "AB-12345", "AB-1234567", "AB123456"]

for s in should_match:
    assert pattern.search(s), f"missed: {s}"
for s in should_not:
    assert not pattern.search(s), f"false match: {s}"
print("all good")
```

Keeping this little test next to your pattern pays off later, when someone changes the regex and needs to know whether they broke it.

## Step 5: Feed failures back into the conversation

When a test fails, don't start over. Paste the failing input back:

```
Your pattern matched "AB-1234567" but it shouldn't.
Seven digits is invalid. Please fix it.
```

ChatGPT is good at incremental fixes when you give it a concrete counterexample. It's much worse when you just say "it doesn't work." Two or three rounds of this usually gets you to a pattern that passes every case.

## Using ChatGPT to explain regex you didn't write

The reverse direction is just as useful. Paste an intimidating pattern from a legacy codebase and ask:

```
Explain this JavaScript regex piece by piece, then give me three
strings it matches and three it doesn't:
/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%]{8,}$/
```

The model will break down the lookaheads and character class and generate examples. The examples are the part to trust least. Run them through a tester to confirm, because the model sometimes invents a "matching" example that doesn't match.

## Useful prompt patterns

A few prompts that consistently save time:

- **"Make this regex stricter / looser"**: paste the pattern and the case it gets wrong.
- **"Convert this regex from PCRE to JavaScript"**: helpful when moving code between languages.
- **"Rewrite this with named groups and comments"**: Python's verbose mode (`re.VERBOSE`) and similar features make long patterns readable.
- **"Write a regex and a replacement string for this find-and-replace"**: great for editor search-and-replace or `sed` one-liners.
- **"Is there a simpler way to do this without regex?"**: sometimes the honest answer is `str.split()` or a real parser.

## Pitfalls to watch for

**Email and URL validation.** ChatGPT will happily write a "complete" email regex. None of them are truly complete. For most apps, a simple pattern plus a confirmation email is better than a 200-character monster.

**Catastrophic backtracking.** Nested quantifiers like `(a+)+` or `(.*)*` can make a regex engine hang on certain inputs. Generated patterns occasionally include these. If a pattern will run on user-supplied input, ask the model specifically: "Could this pattern cause catastrophic backtracking?" and test it with long, nearly-matching strings.

**Greedy vs lazy matching.** `.*` grabs as much as possible. When extracting text between two markers, you usually want `.*?`. The model gets this right most of the time but not always.

**Parsing structured formats.** HTML, JSON, and CSV with quoted fields should be handled with a real parser. If ChatGPT offers a regex for these, treat it as a quick hack, not a solution.

**Confident wrong answers.** The model explains broken patterns just as fluently as working ones. The explanation reading well tells you nothing about whether the pattern is correct. Only testing does.

## Where this fits in your workflow

Regex is a good first task for getting comfortable with AI-assisted coding because it's small, easy to test, and the payoff is immediate. The same habits (real examples, name your environment, test outside the chat, feed failures back) carry over to bigger jobs like [writing SQL queries with AI](/tutorials/write-sql-queries-with-ai-2023/) or generating shell scripts.

## Quick checklist

1. Gather matching, non-matching, and edge-case samples.
2. Name the regex flavor in your prompt.
3. Say whether you're validating whole input or searching inside text.
4. Ask for a piece-by-piece explanation.
5. Test in a regex tester or a small script.
6. Paste failures back and iterate.
7. Keep the test cases alongside the pattern in your code.

Used this way, ChatGPT takes most of the memorization out of regex while leaving you in control of correctness, which is where you want to be.
