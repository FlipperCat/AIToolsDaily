---
title: "Amazon Q Developer Review (2024): AWS's Copilot Rival Has One Killer Trick"
description: "Amazon Q Developer review: how AWS's coding assistant handles suggestions, Java upgrades, and security scans — plus pricing, IDE support, and limits."
date: 2024-06-11
updated: 2026-08-02
categories: ["Reviews"]
tags: ["amazon-q-developer", "aws", "coding assistants", "github-copilot-alternative", "developer tools"]
affiliate_disclosure: true
faqs:
  - question: "Is Amazon Q Developer the same as CodeWhisperer?"
    answer: "Essentially, yes — CodeWhisperer's inline code suggestions were folded into Amazon Q Developer when it went generally available in spring 2024. Q Developer is the bigger umbrella: it adds chat, task agents, code transformation, and AWS console integration on top of the old autocomplete."
  - question: "Is there a free tier?"
    answer: "Yes, and it's genuinely usable: inline suggestions, chat in the IDE, and a monthly allowance of agent tasks and security scans at no cost with an AWS Builder ID. The Pro tier (around $19/user/month as of mid-2024) raises limits and adds organizational management via IAM Identity Center."
  - question: "Should I pick Amazon Q Developer over GitHub Copilot?"
    answer: "If your work lives on AWS — CDK, Lambda, IAM policies, service APIs — Q Developer's AWS knowledge and console integration give it a real edge. For general-purpose coding across arbitrary stacks, Copilot still feels more polished and its suggestions more consistent. Many AWS-heavy teams justify running both."
---

Amazon was early to AI coding assistants with CodeWhisperer, and then watched GitHub Copilot take the mindshare anyway. Amazon Q Developer — generally available since the spring — is the do-over: CodeWhisperer's autocomplete absorbed into a much bigger product with chat, autonomous task agents, security scanning, and one feature nobody else has that might justify the whole thing for enterprise Java shops.

We've been using it daily in VS Code alongside AWS work. Here's the honest picture as of June 2024.

## What is Amazon Q Developer?

Amazon Q Developer is AWS's AI assistant for the software development lifecycle. In your IDE it does the familiar things: inline code completions as you type and a chat panel that answers questions about your code. Beyond that it adds:

- **Agents for software development** — describe a feature in chat (`/dev`), and it plans a multi-file implementation across your project and proposes the diffs
- **Code transformation** — an agent that upgrades entire Java 8/11 codebases to Java 17
- **Security scanning** — flags vulnerabilities and suggests remediations
- **AWS everywhere** — the same assistant appears in the AWS Console and answers account-aware questions, plus a command-line flavor for translating natural language to shell commands

It supports VS Code and JetBrains IDEs, with the old CodeWhisperer surface area (including Visual Studio) folded in. You sign in with a free AWS Builder ID or, for Pro, through your organization's identity setup.

## Key features

**Inline suggestions.** This is mature CodeWhisperer tech and it shows — completions are solid for Python, Java, TypeScript, and especially anything touching AWS SDKs, where it clearly knows the APIs better than competitors. Reference tracking flags suggestions that resemble open-source code and cites the license, which compliance teams appreciate.

**IDE chat.** Ask about your open files, request explanations, generate tests. It's competent and context-aware, though the conversation quality trails the frontier chat models — it's a coding tool, not a great conversationalist.

**The `/dev` agent.** Describe a task and Q plans and writes a multi-file change. When it works, it's a glimpse of where all these tools are heading. In practice, we found it best on well-scoped tasks in tidy codebases; on messy real-world repos it produces plans that need substantial correction. Budget review time.

**Code transformation (the killer trick).** Point the transformation agent at a Java 8 or 11 project and it upgrades it to Java 17 — dependencies, deprecated APIs, build files. Amazon has talked about using this internally on a massive scale, and it's the feature with the clearest, most measurable ROI in the entire product. If you're an enterprise sitting on a mountain of legacy Java, this alone warrants a pilot. Nothing comparable exists in [GitHub Copilot](/github-copilot-review-2024/) today.

**Security scans.** Useful, low-friction, and better than not having them — closer to a good linter with remediation suggestions than a replacement for real security review.

## Pros

- **Best-in-class AWS knowledge.** For CDK, Lambda, IAM, and service APIs, suggestions and chat answers are noticeably better than general-purpose rivals.
- **Serious free tier.** Suggestions and chat cost nothing, with monthly allowances for agent tasks and scans.
- **Java modernization is a unique, high-value capability.**
- **Enterprise-friendly:** IP indemnification on Pro, reference tracking, no training on your Pro-tier content, IAM Identity Center management.

## Cons and limitations

- **General-purpose coding trails Copilot.** Outside the AWS bubble, completions are decent but less consistently on-target, and the chat feels a step behind. Tools like [Cursor](/cursor-ai-review-coding-assistant/) offer a more fluid overall experience.
- **The `/dev` agent oversells.** Demos suggest autonomy; reality delivers a first draft that needs shepherding. Fine if expectations are set.
- **AWS-shaped worldview.** Ask an infrastructure question and the answer will be an AWS service, even when a simpler answer exists.
- **Ecosystem lock-in logic.** The product only fully makes sense if you're committed to AWS; for a team on other clouds, most differentiators evaporate.
- **Setup friction.** Builder ID vs. Identity Center vs. legacy CodeWhisperer settings confused several people on our team. It's better than it was, but Copilot's onboarding is smoother.

## Pricing

As of June 2024: a **free tier** (Builder ID sign-in) covers inline suggestions, IDE chat, and limited monthly agent tasks and security scans. **Q Developer Pro** runs about **$19 per user/month**, adding higher limits, organizational user management, IP indemnification, and integration with your AWS account context. That undercuts Copilot Business slightly, and the free tier is more generous than most. Prices and allowances shift often — verify on AWS's pricing page.

## Who is it for?

**A strong fit:** teams building primarily on AWS; enterprises with legacy Java estates (the transformation agent is the headline); organizations that want an assistant with indemnification and identity management out of the box; cost-conscious developers who'll live happily on the free tier.

**A weak fit:** developers outside the AWS ecosystem; anyone wanting the smoothest general-purpose pairing experience today — that's still Copilot or Cursor. Our [Copilot vs CodeWhisperer comparison](/compare/github-copilot-vs-codewhisperer-2023/) covered the ancestry of this rivalry, and the free-tier calculus hasn't changed much: alternatives like [Codeium](/reviews/codeium-review-2023/) also compete hard at $0.

## Verdict

Amazon Q Developer is two products wearing one trench coat. As a general coding assistant, it's a solid B: capable, well-priced, slightly behind the leaders. As an *AWS* assistant and a Java modernization machine, it's an A that nothing else currently matches.

Recommendation: if your stack is AWS-first, install it — start free, and evaluate Pro when you hit the agent limits. If you're staring down a Java upgrade backlog, pilot the transformation agent this quarter. Everyone else can keep their current assistant and lose little.
