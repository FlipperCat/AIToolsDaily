---
title: "Prompt Engineering 101: Get Better AI Results"
date: 2025-01-27
updated: 2026-01-24
categories: ["Tutorials"]
tags: ["prompts", "prompt engineering", "chatgpt", "ai tips", "productivity"]
affiliate_disclosure: true
faqs:
  - question: "What is prompt engineering?"
    answer: "Prompt engineering is crafting inputs to AI systems to get better outputs. Small changes in how you ask can dramatically change the quality of what you receive."
  - question: "Do I need to learn prompt engineering?"
    answer: "Learning basics significantly improves results. You don't need to be an expert, but understanding core principles makes AI tools much more useful."
  - question: "Do prompting techniques work on all AI tools?"
    answer: "Core principles work everywhere. Specifics may vary - Claude responds differently than ChatGPT. But being clear, structured, and specific helps universally."
---

# Prompt Engineering 101

The difference between a good AI response and a bad one is often just how you ask.

Here's how to ask better.

## The Core Principle

**Vague input = vague output**

```
Bad: "Write about dogs"
Good: "Write a 300-word blog post about why golden retrievers make good family pets"
```

The AI doesn't know what you want unless you tell it.

## Five Essential Techniques

### 1. Be Specific

**Bad:**
```
Help me write an email
```

**Good:**
```
Write a professional email to a client explaining
that their project will be delayed by one week
due to supply chain issues. Offer a 10% discount
as compensation. Keep it under 150 words.
Tone: Apologetic but confident.
```

Include:
- What you want
- Context/background
- Constraints (length, tone, format)
- Who it's for

### 2. Give Examples

Show what you want:

```
Rewrite these sentences to be more concise:

Example:
Input: "Due to the fact that it was raining outside, we decided to stay home"
Output: "We stayed home because of the rain"

Now rewrite these:
1. "In spite of the fact that he was tired..."
2. "At this point in time, we are..."
```

Examples clarify expectations better than explanations.

### 3. Assign a Role

```
You are a senior software engineer reviewing code.
Look at this function and identify potential bugs,
performance issues, and security concerns.
```

Roles help AI:
- Adopt appropriate expertise level
- Use correct terminology
- Apply relevant knowledge

### 4. Structure Your Request

Use clear formatting:

```
Task: Write a product description

Product: Wireless earbuds
Target audience: Fitness enthusiasts
Key features:
- 8 hour battery life
- Sweat resistant
- Noise cancellation

Requirements:
- 100-150 words
- Conversational tone
- Include call to action

Output format: Plain text paragraph
```

Structure prevents misunderstanding.

### 5. Iterate and Refine

First attempt rarely perfect. Follow up:

```
Good, but:
- Make the opening stronger
- Remove the cliché in paragraph 2
- Add more specific examples
```

Work with the AI, not against it.

## Advanced Techniques

### Chain of Thought

Make AI think step by step:

```
Solve this problem step by step:

A store has 150 apples. They sell 40% on Monday,
then receive 30 more on Tuesday. How many do they
have Wednesday morning?

Show your work.
```

Forces clearer reasoning, fewer errors.

### Few-Shot Learning

Multiple examples establish patterns:

```
Convert these casual phrases to formal business language:

"Gonna need that ASAP" → "Please prioritize this for urgent delivery"
"That's a no-brainer" → "The decision is straightforward"
"Let's touch base" → "Let's schedule a meeting to discuss"

Now convert:
"We need to get on the same page"
```

### Negative Prompting

Specify what NOT to do:

```
Explain machine learning to a beginner.

Do NOT:
- Use technical jargon without explaining it
- Write more than 3 paragraphs
- Assume prior knowledge of statistics
```

Boundaries prevent unwanted output.

### System Prompts

Set persistent context:

```
System: You are a technical writer creating documentation.
You write clear, concise explanations with practical examples.
You avoid jargon unless necessary, and define terms when first used.
```

Available in ChatGPT (custom instructions) and API.

## Format Specifications

### For Structured Output

```
Respond in JSON format:
{
  "summary": "...",
  "key_points": ["...", "..."],
  "action_items": ["...", "..."],
  "sentiment": "positive/negative/neutral"
}
```

### For Lists

```
Provide your answer as a numbered list with
brief explanations for each point (2-3 sentences).
```

### For Tables

```
Present this comparison as a markdown table with columns:
Feature | Tool A | Tool B | Recommendation
```

### For Specific Length

```
Keep response to:
- 3 short paragraphs
- Under 200 words
- Tweet length (under 280 characters)
```

## By Task Type

### For Writing

```
Write a [type] about [topic].

Audience: [who will read this]
Tone: [casual/professional/technical/friendly]
Length: [word count or page equivalent]
Goal: [inform/persuade/entertain/explain]

Include:
- [required element]
- [required element]

Avoid:
- [thing to avoid]
```

### For Analysis

```
Analyze [subject/document/code/situation].

Focus on:
- [specific aspect]
- [specific aspect]

Provide:
- Key findings
- Potential issues
- Recommendations

Be direct. Don't hedge unnecessarily.
```

### For Brainstorming

```
Generate [number] ideas for [purpose].

Context: [relevant background]
Constraints: [limitations]

For each idea:
- Brief description
- Pros
- Cons
- Effort estimate

Include some unconventional options.
```

### For Problem-Solving

```
I'm trying to [goal] but [obstacle].

Background:
- [context]
- [what I've tried]
- [constraints]

Help me think through this problem.
What questions should I be asking?
What approaches might work?
```

## Common Mistakes

### Being Too Vague

**Problem:** "Make this better"

**Fix:** "Improve this by [specific criteria]. Focus on [specific aspect]."

### Over-Explaining

**Problem:** 500 words of context for a simple question

**Fix:** Include only relevant information

### Not Iterating

**Problem:** Accepting first output even when imperfect

**Fix:** Follow up with specific feedback

### Wrong Format Request

**Problem:** Asking for essay when you need bullets

**Fix:** Specify output format explicitly

### Assuming Knowledge

**Problem:** Using acronyms or internal jargon

**Fix:** Define terms, provide context

## Prompts That Work

### Content Creation

```
Write [content type] about [topic] for [audience].

Requirements:
- [length]
- [tone]
- [specific elements to include]

Make it [quality descriptor] and [quality descriptor].
```

### Code Help

```
[Language]: [what you're trying to do]

Current code:
[paste code]

Problem:
[what's happening vs. what should happen]

Help me fix this and explain what was wrong.
```

### Learning

```
Explain [concept] to me.

My background: [relevant experience level]
I learn best through: [examples/analogies/step-by-step]

Start simple, then go deeper.
```

### Decision Making

```
Help me decide between [option A] and [option B].

Context: [situation]
My priorities: [what matters most]
Constraints: [limitations]

Give me a clear recommendation with reasoning.
```

## Testing Your Prompts

### Does it work?

Run it 3 times. Are results:
- Consistently good? → Prompt is solid
- Sometimes good? → Needs refinement
- Always bad? → Rethink approach

### Quick Improvements

1. Add more specifics
2. Include examples
3. Specify format
4. Add constraints
5. Break into steps

## The Bottom Line

Good prompting is about clear communication:

1. **Know what you want** before asking
2. **Be specific** about requirements
3. **Show examples** when possible
4. **Specify format** explicitly
5. **Iterate** on results

Small improvements in prompting yield dramatic improvements in output. Worth investing 2-3 sentences of additional context.

The AI is capable. Your job is to unlock that capability with clear instructions.
