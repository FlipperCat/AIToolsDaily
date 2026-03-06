---
title: "Aider"
type: "tool"
date: 2023-06-01
updated: 2026-02-28
website: "https://aider.chat"
affiliate_link: "https://aider.chat"
logo: "/images/tools/aider.svg"
rating: 4.3
pricing:
  free_tier: true
  starting_price: "$0"
  pricing_model: "Open Source (BYOK)"
categories: ["AI Coding", "CLI Tools", "Open Source"]
features:
  - "Terminal-based pair programming"
  - "Multi-file editing"
  - "Git integration"
  - "Multiple LLM support"
  - "Voice coding mode"
  - "Open source"
pros:
  - "Free and open source"
  - "Use any LLM provider"
  - "Excellent git integration"
  - "Active development"
cons:
  - "Requires API keys"
  - "Terminal-only"
  - "Setup required"
best_for: ["Open Source Enthusiasts", "Terminal Users", "Budget-conscious Developers"]
alternatives: ["Claude Code", "Cursor", "GitHub Copilot"]
description: "Aider is an open-source AI pair programming tool for the terminal. Use GPT-4, Claude, or local models to edit code with automatic git commits."
---

Aider is a free, open-source AI coding assistant that brings pair programming to your terminal.

## What is Aider?

Aider is a command-line tool that lets you pair program with LLMs. It can edit multiple files, understand your codebase, and automatically commit changes to git.

## Key Features

### LLM Flexibility

Use any model:
- GPT-4 and GPT-4 Turbo
- Claude 3.5 Sonnet/Opus
- Local models via Ollama
- Any OpenAI-compatible API

### Git Integration

Automatic version control:
- Commits each change
- Meaningful commit messages
- Easy to review and revert
- Branch awareness

### Multi-File Editing

Work across your codebase:
- Add files to context
- Edit multiple files at once
- Understand dependencies
- Refactor across modules

### Voice Mode

Code by speaking:
- Voice-to-code
- Hands-free programming
- Accessibility feature
- Natural conversation

## Installation

```bash
pip install aider-chat
export OPENAI_API_KEY=your-key
aider
```

## Pricing

Aider itself is free. You pay only for API usage:
- GPT-4: ~$0.03/1K tokens
- Claude: ~$0.015/1K tokens
- Local models: Free

## Best Use Cases

### Budget AI Coding
Use your own API keys with no subscription markup.

### Open Source Projects
Free tool for open-source development.

### Model Experimentation
Try different models to find what works best.

### Privacy-Conscious Development
Run local models for sensitive codebases.

## Aider vs Cursor

| Feature | Aider | Cursor |
|---------|-------|--------|
| Price | Free (BYOK) | $20/mo |
| Interface | Terminal | IDE |
| Open Source | Yes | No |
| Model Choice | Any | Claude/GPT-4 |
| Git Integration | Excellent | Good |

## Tips for Effective Use

1. **Start small** - Add only relevant files to context
2. **Be specific** - Clear instructions get better results
3. **Review commits** - Check the auto-generated changes
4. **Use `/help`** - Explore available commands

