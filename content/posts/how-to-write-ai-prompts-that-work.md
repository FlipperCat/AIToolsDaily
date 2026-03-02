---
title: "How to Write AI Prompts That Actually Work (With Examples)"
description: "Stop getting garbage outputs from AI. Here's the practical guide to writing prompts that get useful results every time."
date: 2024-01-07
categories: ["Tutorials"]
tags: ["prompts", "chatgpt", "claude", "ai writing", "tutorial"]
affiliate_disclosure: true
faqs:
  - question: "Why do my AI prompts give bad results?"
    answer: "Usually because they're too vague. 'Write about marketing' gives generic output. 'Write a 500-word blog post about email marketing for e-commerce stores, focusing on cart abandonment sequences' gives specific, useful output."
  - question: "What makes a good AI prompt?"
    answer: "Good prompts include: specific task, context, format/length requirements, tone, and constraints. The more specific you are, the better the output. Vague prompts = vague results."
  - question: "Do I need to buy prompt templates?"
    answer: "No. Most paid prompt packs are overpriced for basic information. Learn the principles in this guide, then create your own prompts. It takes 30 minutes to understand; prompt packs cost $50+ for the same info."
---

# How to Write AI Prompts That Actually Work

Most people get mediocre results from AI because they write mediocre prompts.

I've written thousands of prompts. Here's what actually works.

## The Core Problem

**Bad prompt:**
> Write about productivity

**Result:** Generic, unhelpful, could-be-written-by-anyone content.

**Good prompt:**
> Write a 600-word blog post about time blocking for software developers who work from home. Include a morning routine example, common mistakes, and how to handle interruptions. Tone: practical and direct, like advice from a senior colleague.

**Result:** Specific, useful, targeted content.

The difference is specificity.

## The Prompt Framework

Every good prompt has these elements:

### 1. Task (Required)
What do you want the AI to do?

- "Write a blog post about..."
- "Summarize this document..."
- "Create a list of..."
- "Analyze this data and..."
- "Draft an email to..."

Be specific about the action.

### 2. Context (Usually helpful)
What background does the AI need?

- Who is the audience?
- What's the purpose?
- What's the situation?

**Example:** "I'm a freelance designer emailing a client who hasn't paid their invoice in 30 days."

### 3. Format (Often important)
How should the output be structured?

- Length (word count, number of items)
- Structure (bullet points, paragraphs, sections)
- Style (formal, casual, technical)

**Example:** "500 words, with 3 main sections and bullet points for key takeaways"

### 4. Tone (When it matters)
How should it sound?

- Professional but friendly
- Technical and precise
- Conversational and casual
- Authoritative and confident

**Example:** "Write like you're explaining to a smart friend, not lecturing"

### 5. Constraints (Prevent problems)
What should the AI avoid?

- "Don't use jargon"
- "Don't include generic advice"
- "Don't start with 'In today's world'"
- "Must include specific examples"

## Real Prompt Examples

### For Blog Posts

**Weak:**
> Write about email marketing

**Strong:**
> Write an 800-word blog post titled "5 Email Subject Lines That Actually Get Opened"
>
> Audience: Small business owners who send their own marketing emails
>
> For each subject line type:
> - Explain why it works
> - Give 2 specific examples
> - Include one common mistake to avoid
>
> Tone: Direct and practical. No fluff. Write like a marketing consultant giving honest advice.
>
> Don't use: "In today's digital landscape", generic statistics, or obvious advice like "keep it short"

### For Emails

**Weak:**
> Write an email to a client

**Strong:**
> Write a follow-up email to a client who received a proposal 5 days ago and hasn't responded.
>
> Context: I'm a web designer. The proposal was for a website redesign at $8,000. The client seemed interested in our call but mentioned budget concerns.
>
> Goal: Get them to either accept, negotiate, or tell me they're not interested. Don't be pushy.
>
> Length: Under 100 words
> Tone: Professional but warm

### For Analysis

**Weak:**
> Analyze this data

**Strong:**
> Analyze this sales data from Q1 2026 [paste data]
>
> I need:
> 1. Top 3 trends you notice
> 2. Any concerning patterns
> 3. Recommended actions based on the data
>
> Format: Bullet points, brief explanations
> Audience: I'm presenting this to our CEO who doesn't like technical jargon

### For Code

**Weak:**
> Write a function to process users

**Strong:**
> Write a Python function that:
> - Takes a list of user dictionaries
> - Filters to users who signed up in the last 30 days
> - Returns their email addresses
>
> Input format: [{"email": "...", "signup_date": "YYYY-MM-DD", "name": "..."}]
>
> Include error handling for missing fields
> Add docstring explaining the function
> Use type hints

## Advanced Techniques

### Chain of Thought

For complex reasoning, ask AI to show its work:

> Analyze this business decision. Think through it step by step:
> 1. What are the potential benefits?
> 2. What are the risks?
> 3. What information is missing?
> 4. What's your recommendation and why?

### Role Assignment

Sometimes giving AI a role helps:

> You're a senior product manager at a SaaS company. Review this feature spec and identify any gaps or concerns a PM would typically catch.

### Few-Shot Examples

Show AI what you want by example:

> Convert these feature descriptions to user stories:
>
> Example:
> Feature: "Password reset via email"
> User story: "As a user who forgot my password, I want to receive a reset link via email so I can regain access to my account"
>
> Now convert:
> Feature: "Two-factor authentication"
> Feature: "Profile photo upload"

### Iterative Refinement

Don't expect perfection on try one. Follow up:

- "Make this more concise"
- "Add a specific example in paragraph 2"
- "The tone is too formal - make it conversational"
- "Expand on point 3"

## Common Mistakes

### 1. Being too vague
**Bad:** "Help me with marketing"
**Good:** "Create 5 Instagram captions for a coffee shop promoting their new cold brew"

### 2. Not specifying format
**Bad:** "Explain machine learning"
**Good:** "Explain machine learning in 3 paragraphs suitable for a business executive with no technical background"

### 3. Forgetting context
**Bad:** "Write a thank you email"
**Good:** "Write a thank you email to a hiring manager after a job interview for a marketing position. Mention that we discussed their upcoming product launch."

### 4. Not setting constraints
**Bad:** "Write about productivity tips"
**Good:** "Write about productivity tips. Don't include obvious advice like 'get enough sleep' or 'make a to-do list'"

### 5. One-and-done mentality
AI conversations are iterative. Your first prompt gets you started. Follow-ups get you to great.

## Quick Reference

**Basic structure:**
```
[Task]: What to do
[Context]: Background information
[Format]: Length, structure
[Tone]: Voice, style
[Constraints]: What to avoid
```

**Magic words that help:**
- "Be specific"
- "Give examples"
- "Explain your reasoning"
- "Format as..."
- "Don't include..."
- "Write as if..."

## Bottom Line

Good prompts are specific prompts. Tell AI:
- Exactly what you want
- Who it's for
- How it should be formatted
- What to avoid

The 2 minutes you spend writing a detailed prompt saves 20 minutes of editing mediocre output.

Start with the framework. Practice on real tasks. Your prompts will improve quickly.
