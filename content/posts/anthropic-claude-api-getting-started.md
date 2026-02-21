---
title: "Claude API: Getting Started Guide (With Practical Examples)"
description: "A practical guide to using the Claude API for developers. Real code examples, pricing breakdown, and tips from actual usage."
date: 2026-02-19
categories: ["Tutorials"]
tags: ["claude", "api", "anthropic", "developers", "coding", "tutorial"]
affiliate_disclosure: true
faqs:
  - question: "How much does the Claude API cost?"
    answer: "Claude 3.5 Sonnet costs $3 per million input tokens, $15 per million output tokens. Claude 3 Opus is more expensive at $15/$75. For most projects, Sonnet offers the best value. Typical use costs $5-50/month for moderate usage."
  - question: "Is Claude API better than OpenAI?"
    answer: "For long-form writing and analysis, Claude is often better. For coding and quick tasks, OpenAI is competitive. Claude handles longer contexts better (200K tokens). Best choice depends on your use case."
  - question: "How do I get Claude API access?"
    answer: "Sign up at console.anthropic.com. Add payment method. Get API key. No waitlist anymore - instant access. Free trial credits available to start."
---

# Claude API: Getting Started Guide

I've used the Claude API for various projects over the past year. Here's the practical guide I wish I had when starting.

## Getting Access

1. Go to **console.anthropic.com**
2. Create account or sign in
3. Add payment method (can use $5 free credits first)
4. Generate API key

No waitlist. Instant access now.

## The Models

As of early 2026:

| Model | Best For | Input Cost | Output Cost |
|-------|----------|------------|-------------|
| Claude 3.5 Sonnet | Best overall | $3/M tokens | $15/M tokens |
| Claude 3 Opus | Complex reasoning | $15/M tokens | $75/M tokens |
| Claude 3.5 Haiku | Fast, cheap | $0.25/M tokens | $1.25/M tokens |

**My recommendation:** Start with Sonnet. Use Haiku for high-volume simple tasks. Use Opus only when you need maximum capability.

## Basic API Call (Python)

```python
import anthropic

client = anthropic.Anthropic(api_key="your-key-here")

message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Explain recursion simply."}
    ]
)

print(message.content[0].text)
```

That's it. The simplest possible call.

## Adding System Prompts

System prompts set behavior and context:

```python
message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    system="You are a senior Python developer. Give concise, practical advice.",
    messages=[
        {"role": "user", "content": "How should I structure a Flask app?"}
    ]
)
```

System prompts are powerful. Use them to:
- Set tone and expertise level
- Define output format
- Establish constraints

## Multi-Turn Conversations

```python
messages = [
    {"role": "user", "content": "I'm building a todo app in Python."},
    {"role": "assistant", "content": "Great! What framework are you considering?"},
    {"role": "user", "content": "Flask. How should I structure the database?"}
]

message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    messages=messages
)
```

Pass the full conversation history. Claude uses it for context.

## Streaming Responses

For real-time output (chatbots, etc.):

```python
with client.messages.stream(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Write a short story."}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

Streaming makes applications feel responsive.

## Handling Long Documents

Claude's context window is huge (200K tokens). Use it:

```python
# Reading a long document
with open("long_document.txt", "r") as f:
    document = f.read()

message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=4096,
    messages=[
        {"role": "user", "content": f"Summarize this document:\n\n{document}"}
    ]
)
```

Claude handles long contexts better than most competitors.

## Practical Examples

### Code Review

```python
code = """
def get_user(id):
    user = db.query(f"SELECT * FROM users WHERE id = {id}")
    return user
"""

message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    system="You are a security-focused code reviewer.",
    messages=[
        {"role": "user", "content": f"Review this code for issues:\n\n{code}"}
    ]
)
```

### Structured Output (JSON)

```python
message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    system="Always respond in valid JSON.",
    messages=[
        {"role": "user", "content": "Extract entities from: 'Apple announced iPhone 15 in Cupertino.' Return JSON with company, product, location."}
    ]
)
```

### Content Generation

```python
message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=2048,
    system="You are a professional copywriter. Write engaging, clear content.",
    messages=[
        {"role": "user", "content": "Write product description for wireless earbuds. Features: 30hr battery, ANC, comfortable fit. Target: busy professionals."}
    ]
)
```

## Cost Optimization Tips

### 1. Use the right model

- Haiku for simple tasks (classification, extraction)
- Sonnet for most use cases
- Opus only when necessary

### 2. Limit output tokens

```python
max_tokens=500  # Don't set higher than needed
```

### 3. Be concise in prompts

More input tokens = more cost. Keep prompts focused.

### 4. Cache responses

Don't re-call API for identical queries.

### 5. Use prompt caching

For repeated system prompts, Anthropic offers prompt caching to reduce costs.

## Common Mistakes

### 1. Not handling errors

```python
try:
    message = client.messages.create(...)
except anthropic.APIError as e:
    print(f"API error: {e}")
except anthropic.RateLimitError:
    print("Rate limited, backing off...")
    time.sleep(60)
```

Always handle errors. API calls fail sometimes.

### 2. Ignoring rate limits

Don't spam requests. Implement backoff:

```python
import time

def call_with_retry(prompt, max_retries=3):
    for attempt in range(max_retries):
        try:
            return client.messages.create(...)
        except anthropic.RateLimitError:
            wait = 2 ** attempt
            time.sleep(wait)
    raise Exception("Max retries exceeded")
```

### 3. Hardcoding API keys

Use environment variables:

```python
import os
client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])
```

Never commit API keys to code.

## Monitoring Usage

Track your costs at console.anthropic.com:
- Usage dashboard shows token consumption
- Set up billing alerts
- Monitor by project if using workspace features

## When to Use Claude API vs Chat

**Use the API when:**
- Building applications
- Need programmatic access
- Processing data at scale
- Integrating with other systems

**Use Claude chat (claude.ai) when:**
- Interactive work
- One-off tasks
- Exploration and brainstorming

## Quick Reference

**Endpoint:** `https://api.anthropic.com/v1/messages`

**Headers:**
- `x-api-key: YOUR_KEY`
- `anthropic-version: 2023-06-01`
- `content-type: application/json`

**Best model for most cases:** `claude-3-5-sonnet-20241022`

**Max context:** 200,000 tokens

**Max output:** 8,192 tokens per response

## Bottom Line

The Claude API is straightforward to use. The hardest part is getting your prompts right, not the technical integration.

Start with Sonnet for most use cases. Use system prompts to shape behavior. Handle errors properly. Monitor costs.

The rest is just application logic.
