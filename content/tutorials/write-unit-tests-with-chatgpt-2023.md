---
title: "How to Write Unit Tests With ChatGPT (2023): A Developer's Workflow"
description: "Use ChatGPT to draft unit tests faster: prompts for pytest and Jest, how to find edge cases, and how to catch tests that pass but prove nothing."
date: 2023-07-25
updated: 2025-12-03
categories: ["Tutorials"]
tags: ["chatgpt", "unit testing", "coding", "pytest", "jest"]
affiliate_disclosure: true
faqs:
  - question: "Can ChatGPT write good unit tests?"
    answer: "It writes decent first drafts quickly, especially for small, pure functions. The common problems are tests that check the wrong thing, tests that copy the code's bugs into the expected values, and missing edge cases. Review every test and run it before committing."
  - question: "Should I paste my company's code into ChatGPT?"
    answer: "Check your employer's policy first. Many companies restrict pasting proprietary code into consumer AI tools. If you're allowed, share only the function under test and the types it uses, and strip secrets, credentials, and internal URLs."
  - question: "Is ChatGPT or GitHub Copilot better for writing tests?"
    answer: "Copilot is faster for filling in tests inline while you type in your editor. ChatGPT is better for a back-and-forth discussion about what to test, edge cases, and test design. Many developers use both."
---

Most developers agree tests are worth writing. Far fewer enjoy writing them. The setup, the fixtures, and the tenth nearly-identical assertion are exactly the kind of repetitive work a language model handles well.

ChatGPT can take a function and produce a reasonable test file in seconds. The risk is that it produces tests that *look* thorough and pass, while proving very little. This guide covers a workflow that uses ChatGPT for speed without letting it lower the bar on what your tests actually check.

Examples use Python with pytest, but the same approach works for Jest, JUnit, Go's testing package, or anything else. If you're still deciding how ChatGPT fits alongside editor tools, see our [GitHub Copilot vs ChatGPT for coding](/compare/github-copilot-vs-chatgpt-coding-2023/) comparison.

## Step 1: Pick a good first target

Start with code that's easy to test:

- **Pure functions** that take input and return output
- **Parsers, validators, and formatters**
- **Business rules** such as pricing, discounts, and date calculations

Avoid starting with code that talks to databases, networks, or the file system. ChatGPT can help with those too, but mocking adds complexity that makes it harder to judge the output.

## Step 2: Give it the code and the intent

Paste the function, and explain what it's *supposed* to do in your own words. This is the most important step. If you only paste code, ChatGPT will write tests that confirm whatever the code currently does, bugs included.

```
I'm using Python 3.11 and pytest.

Here's a function that calculates shipping cost:

def shipping_cost(weight_kg: float, express: bool = False) -> float:
    if weight_kg <= 0:
        raise ValueError("weight must be positive")
    base = 5.0 if weight_kg <= 1 else 5.0 + (weight_kg - 1) * 2.0
    return round(base * 1.5, 2) if express else round(base, 2)

Intended behavior:
- Up to 1 kg costs $5
- Each additional kg (or part of a kg) costs $2
- Express multiplies the total by 1.5
- Zero or negative weight raises ValueError

Write pytest tests. Use parametrize where it helps. Before the code,
list the cases you plan to test.
```

Notice the spec says "or part of a kg." The code doesn't round partial kilograms up, so a 1.5 kg package costs $6 instead of $7. A good test suite should catch that. Tests generated from the code alone probably won't.

## Step 3: Review the test plan before the code

Asking for a list of cases first gives you a cheap checkpoint. A reasonable plan for the example might include:

- Exactly 1 kg, and just under 1 kg
- Whole kilograms above 1 (2 kg, 5 kg)
- Fractional weights above 1 (1.5 kg)
- Express vs standard for the same weight
- Zero and negative weights raising `ValueError`
- Rounding to two decimal places

If a case you care about is missing, ask for it now. It's much easier to fix the plan than to untangle a 60-line test file.

## Step 4: Check the generated tests line by line

You'll typically get something like:

```python
import pytest
from shipping import shipping_cost

@pytest.mark.parametrize("weight, expected", [
    (0.5, 5.0),
    (1.0, 5.0),
    (2.0, 7.0),
    (1.5, 7.0),   # partial kg rounds up per spec
    (5.0, 13.0),
])
def test_standard_shipping(weight, expected):
    assert shipping_cost(weight) == expected

def test_express_multiplier():
    assert shipping_cost(2.0, express=True) == 10.5

@pytest.mark.parametrize("weight", [0, -1, -0.01])
def test_invalid_weight_raises(weight):
    with pytest.raises(ValueError):
        shipping_cost(weight)
```

Now verify each expected value yourself. This is where most problems hide:

- **Wrong arithmetic.** The model sometimes miscalculates expected values. Do the math.
- **Values copied from the implementation.** If an expected value only makes sense given the current code, not the spec, it's locking in a bug.
- **Weak assertions.** `assert result is not None` or `assert isinstance(result, float)` pass for nearly any implementation. Replace them with exact expected values.

## Step 5: Run the tests and treat failures as information

Run the suite. In this example, the `1.5 kg` case fails: the function returns 6.0, the test expects 7.0. That's a real bug the test was supposed to find.

The mistake to avoid here is pasting the failure back and asking ChatGPT to "fix the test." It will often change the expected value to match the code, and your bug disappears from view. Decide first whether the test or the code is wrong, then ask for the right fix:

```
The test for 1.5 kg fails because the function doesn't round partial
kilograms up. The spec is correct. Fix the function, not the test.
```

## Step 6: Push for edge cases

Once the basics pass, ask ChatGPT to think adversarially:

```
What inputs could break this function that we haven't tested?
Consider types, boundaries, floating point, and very large values.
```

Useful suggestions tend to include floating-point boundaries (`1.0000001`), very large weights, `None`, strings, and `NaN`. Some suggestions won't be worth testing, and deciding which ones matter is your call. But this prompt reliably surfaces one or two cases people forget.

## Step 7: Ask for tests of existing code you didn't write

For legacy code without tests, a different prompt works better:

```
Here's a function from an older codebase. Before writing tests,
describe what it appears to do, including any behavior that looks
accidental or surprising. Then write characterization tests that
lock in current behavior so I can refactor safely.
```

Characterization tests deliberately capture what the code does today, bugs and all, so a refactor doesn't change behavior by accident. Asking the model to call out surprising behavior first gives you a list of possible bugs to investigate separately.

## Mocking and external dependencies

For code that calls APIs or databases, tell ChatGPT exactly which dependencies to mock and which library you use (`unittest.mock`, `pytest-mock`, Jest mocks). Watch for two failure modes:

1. **Over-mocking.** Tests that mock so much they only verify that mocks were called. If a test would still pass after you delete the function body, it isn't testing much.
2. **Wrong import paths.** In Python, mocks need to patch where a name is *used*, not where it's defined. Generated tests get this wrong often.

## Tips for better results

- **Name your framework and version.** "pytest with fixtures" and "Jest with TypeScript" produce very different output.
- **Paste an existing test file as a style example.** ChatGPT will match your naming, fixture patterns, and structure.
- **Keep sessions focused.** One module per conversation works better than an entire codebase.
- **Ask for descriptive test names.** `test_partial_kg_rounds_up` is worth more than `test_case_3` when something fails six months from now.
- **Try Code Interpreter for small experiments.** ChatGPT Plus users can now have the model run Python in a sandbox, which is handy for sanity-checking expected values on self-contained functions. It won't have your dependencies or project setup, so your local test run is still the one that counts.

The same habits carry over from other AI-assisted chores. Our guide to [writing regex with ChatGPT](/tutorials/write-regex-with-chatgpt-2023/) uses the same loop of real examples, explicit intent, and testing outside the chat.

## Pitfalls to avoid

- **Trusting green checkmarks.** Passing tests only matter if they'd fail when the code is wrong.
- **Letting the model "fix" tests to match buggy code.** Decide which side is wrong first.
- **Pasting secrets.** Strip API keys, credentials, and internal hostnames before sharing code.
- **Generating more tests than you can review.** Ten tests you've checked beat fifty you haven't.

## The bottom line

ChatGPT is a real time-saver for unit tests: it handles boilerplate, suggests edge cases, and turns a spec into a parametrized test table quickly. What it can't do is decide what correct behavior is. Give it the intent, not just the code, review every expected value, and treat failing tests as findings rather than annoyances. For more on the tool's strengths and weaknesses, read our full [ChatGPT review](/reviews/chatgpt-review/).
