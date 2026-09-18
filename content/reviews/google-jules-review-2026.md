---
title: "Google Jules Review (2026): Is Google's Async Coding Agent Worth Adding to Your Workflow?"
description: "Our Google Jules review covers how the async coding agent works, where it saves time, where it struggles, pricing tiers, and how it compares to Codex."
date: 2026-09-15
updated: 2026-09-15
categories: ["Reviews"]
tags: ["google-jules", "ai-coding-agent", "gemini", "github", "developer-tools"]
affiliate_disclosure: true
faqs:
  - question: "Is Google Jules free?"
    answer: "Jules has a free tier with a daily cap on tasks and a limit on how many can run at once. Higher limits come bundled with Google's paid AI subscriptions (Google AI Pro and AI Ultra). Limits have changed several times since launch, so check the current numbers on the Jules site before you plan around them."
  - question: "Does Jules work with GitLab or Bitbucket?"
    answer: "Jules is built around GitHub. You connect your GitHub account, choose a repository and branch, and Jules works in a cloud copy of that repo before pushing a branch or opening a pull request. Teams on other Git hosts will need a mirror or a different tool."
  - question: "Does Google train on my code if I use Jules?"
    answer: "Google has stated that Jules does not train on code from private repositories. Your code does run in Google's cloud environment while a task is in progress, so review Google's current terms and your company's policies before you connect sensitive repos."
  - question: "How is Jules different from Gemini CLI?"
    answer: "Gemini CLI is an interactive agent that runs in your terminal on your own machine, and you watch and steer it in real time. Jules is asynchronous: you hand it a task, it works in a cloud VM while you do something else, and you review the result as a diff or pull request."
---

Most AI coding tools want your attention. You watch the agent in your terminal or editor, approve each step, and correct it as it goes. **Jules**, Google's coding agent, takes the opposite approach. You describe a task, it goes off to a cloud machine, and it comes back later with a plan, a diff, and a pull request.

That asynchronous model is now common. OpenAI's [Codex](/reviews/openai-codex-review-2026/) and GitHub's Copilot coding agent work the same way. Jules is still one of the easiest to try because of its free tier and its close ties to Gemini. We ran it against a handful of real repositories over the past few weeks, including a Python API, a TypeScript front end, and a small CLI tool, to see where it helps and where it gets in the way.

## What is Jules?

Jules is an autonomous coding agent from Google Labs, powered by Google's Gemini models. It connects to GitHub, clones your repository into a secure cloud virtual machine, and works on a task you give it in plain language, such as "add pagination to the /orders endpoint and update the tests" or "upgrade this project to the current version of the testing framework."

The workflow looks like this:

1. Pick a repo and branch, then describe the task.
2. Jules reads the codebase and proposes a **plan**.
3. You approve the plan or adjust it.
4. Jules makes the changes, runs whatever build and test commands it can, and shows you a **diff**.
5. You send feedback or accept, and Jules pushes a branch and can open a **pull request**.

You don't need a local environment, editor plugin, or open terminal. That's the main appeal.

## Key Features

### Plan-first execution

Before touching code, Jules writes out what it intends to do. This is the most useful part of the product. A bad plan is quick to spot and cheap to fix, and a two-line correction ("don't touch the migrations, and use the existing pagination helper") often saves a whole wasted run.

### Parallel, background tasks

You can queue several tasks at once, each in its own VM, up to your plan's concurrency limit. On a Friday afternoon we queued a dependency bump, a test-coverage task, and a docs cleanup, and had three reviewable PRs waiting afterward. This is where async agents earn their keep: small, well-defined chores you'd otherwise keep postponing.

### Steering mid-task

You can message Jules while it works, correcting direction or adding context without restarting. It responds reasonably well to mid-course corrections, though large changes of direction usually go better as a fresh task.

### Environment setup

Jules tries to install dependencies and run your tests on its own. For standard projects (a `requirements.txt`, a `package.json` with a test script) this mostly just works. For anything unusual, you can supply setup commands so the VM matches what your code expects. Getting this right is the single biggest factor in output quality: when Jules can run your tests, its results are much more reliable.

### CLI and API access

Beyond the web app, Google offers a command-line tool and an API, so you can start Jules tasks from scripts, CI jobs, or your terminal. That makes it practical to wire up things like "open a Jules task for every issue labeled `good-first-fix`."

### Change summaries

Each task ends with a written summary of what changed and why, which makes reviewing PRs faster. Jules can also produce short audio summaries of recent changes, which is a novelty for most people but occasionally handy for catching up on a busy repo.

## Pros

- **No local setup.** Works entirely from the browser and GitHub.
- **Plan approval catches mistakes early,** before compute and review time are spent.
- **Parallelism fits chore work well:** dependency updates, test backfills, lint fixes, small refactors, docs.
- **PR-native output** fits existing code review workflows without new tooling.
- **Free tier** is enough to evaluate it properly, which isn't true of every competitor.
- **Gemini's long context** helps on medium-sized codebases where the agent needs to read across many files.

## Cons and Limitations

- **GitHub only.** No native GitLab or Bitbucket support.
- **Latency.** Spinning up a VM, installing dependencies, and running tests takes minutes. For a two-line fix, doing it yourself or using an interactive agent is faster.
- **Weak on environment-heavy work.** Tasks that need a running database, private services, secrets, GPUs, or a browser UI often stall or produce untested code.
- **Review burden moves, it doesn't disappear.** Five PRs arriving at once is five PRs to review carefully. Jules occasionally makes changes outside the task's scope, so read every diff.
- **Less control than a terminal agent.** If you like steering every step, tools like [Claude Code](/reviews/claude-code-review/) or [Gemini CLI](/reviews/gemini-cli-review-2025/) will feel more natural.
- **Labs product, moving target.** Features, limits, and the underlying models have changed repeatedly. That's good for capability, but less good if you need predictability.

## Pricing (as of September 2026)

Pricing is approximate and changes often, so confirm on Google's site.

- **Free:** A limited number of tasks per day with low concurrency. Enough to test it on real work.
- **Google AI Pro (~$20/month):** Substantially higher daily task and concurrency limits, bundled with Google's broader Gemini subscription.
- **Google AI Ultra (~$250/month):** The highest limits, aimed at developers running Jules heavily across many repos.

If you already pay for Google AI Pro for Gemini, Jules is effectively a free add-on. If you don't, the question is whether it's the async agent you want, compared with Codex through a ChatGPT plan or the Copilot coding agent through a GitHub plan.

## Jules vs. the alternatives

- **OpenAI Codex:** The closest competitor, with the same cloud-task, PR-output model. Codex fits better if your team already lives in ChatGPT, and Jules if you're in Google's ecosystem. Our [Claude Code vs OpenAI Codex comparison](/compare/claude-code-vs-openai-codex-2026/) covers the async-versus-interactive tradeoff in more depth.
- **GitHub Copilot coding agent:** Assign an issue and get a PR, all within GitHub. It has the tightest GitHub integration, which matters for teams standardized on [GitHub Copilot](/reviews/github-copilot-review-2026/).
- **Claude Code / Gemini CLI:** Interactive terminal agents. They're better for exploratory work, debugging, and anything that needs your local environment.

Many developers end up using both types: an interactive agent for the work in front of them, and an async agent for the backlog.

## Who it's for

**A good fit for:**

- Solo developers and small teams with a backlog of well-defined chores
- Maintainers who want to hand off test backfills, dependency bumps, and docs updates
- Teams already paying for Google AI Pro or Ultra
- Anyone curious about async agents who wants a free way to try one

**Less suited to:**

- Teams on GitLab or Bitbucket
- Work that depends on complex local infrastructure or secrets
- Developers who prefer to steer every change interactively

## Verdict

Jules is a capable, low-friction async coding agent. Its plan-first workflow and free tier make it one of the easiest ways to learn how this style of tool fits your process. It's at its best on clearly scoped, testable tasks in well-configured repos, and weakest when the work needs your local environment or constant judgment calls. Treat it like a fast junior contributor: give it tightly scoped tasks, make sure it can run your tests, and review every PR it opens. Used that way, it's a real time saver, especially if Google AI Pro already covers it.
