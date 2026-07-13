---
title: "How to Build Your First Automation in Make.com (2025 Beginner Guide)"
description: "A step-by-step Make.com tutorial for beginners: build a real automated workflow from scratch, connect apps, add AI, and avoid the mistakes that break scenarios."
date: 2025-03-18
updated: 2026-05-22
categories: ["Tutorials"]
tags: ["make", "automation", "no-code", "workflow", "productivity"]
affiliate_disclosure: true
---

Make (formerly Integromat) is one of the most powerful no-code automation platforms available, and its visual, drag-the-dots interface makes it easier to *understand* what your automation is doing than most competitors. But that power comes with a learning curve. The first time you open a blank canvas, it is not obvious where to start.

This guide fixes that. We will build a genuinely useful automation from scratch — one that watches for new form submissions, uses AI to draft a reply, and logs everything to a spreadsheet — while explaining the core concepts as we go. By the end you will understand modules, scenarios, mapping, and filters well enough to build your own.

## What we're building

Our example **scenario** (Make's word for an automation) will:

1. Trigger when a new response lands in a form or spreadsheet row.
2. Send the response text to an AI model to draft a personalized reply.
3. Save the draft and the original response to a Google Sheet for review.

It is simple enough to finish in one sitting and realistic enough to adapt to real work — support triage, lead follow-up, content intake, and more.

## Step 1: Understand the three core concepts

Before clicking anything, get these three words straight — everything in Make is built from them.

- **Scenario** — the whole automation, start to finish. One workflow = one scenario.
- **Module** — a single step inside a scenario. Each app you connect (Gmail, Sheets, an AI model) contributes modules. A module either *triggers* the scenario or *performs an action*.
- **Connection** — the authenticated link between Make and an app, created once and reused. This is where you log in to Google, your form tool, and so on.

Make draws scenarios as a chain of circular modules connected by lines. Data flows left to right, and the visual layout is the whole point: you can literally see the path your data takes.

## Step 2: Create the scenario and set a trigger

From your Make dashboard, click **Create a new scenario**. You will get a blank canvas with a single large "+" button.

Click it and choose your **trigger app** — the event that starts everything. For our example, pick your spreadsheet or form tool and a trigger like *Watch New Rows* or *Watch Responses*. Make will ask you to create a connection (log in and authorize), then to pick the specific sheet or form to watch.

Two important trigger settings:

- **Polling vs. instant.** Some triggers check on a schedule (polling); others fire instantly via webhooks. Instant is faster but not every app supports it. For a first build, polling every 15 minutes is fine.
- **Where to start.** Make asks whether to process existing rows or only new ones from now on. Choose *from now on* so you do not accidentally blast every historical row.

Click **OK**, then run a quick test so Make pulls in one real record. This matters — you cannot map data you have not fetched yet.

## Step 3: Add the AI module

Hover over the right edge of your trigger module and drag out to add the next module. Search for your AI provider (for example an [OpenAI](/reviews/chatgpt-review/) or [Claude](/reviews/claude-review/) module) and choose an action like *Create a Completion* or *Create a Chat Message*.

Create the connection with your API key when prompted, then build the prompt. This is where **mapping** comes in — the single most important skill in Make.

When you click into the prompt field, a panel pops up showing all the data from previous modules, organized by module number. Click a field — say, the form respondent's message — and Make inserts a colored token into your prompt. That token is a *reference*, not fixed text: every time the scenario runs, it gets replaced with that run's actual value.

A workable prompt looks like:

> "Write a friendly, concise reply to this customer message. Keep it under 120 words. Message: `{{the mapped message field}}`"

Mapping is what turns a static template into a living automation. If you ever see a module output the literal word "message" instead of the customer's actual text, you typed it instead of mapping it.

## Step 4: Save the result to a Google Sheet

Drag out one more module and choose **Google Sheets → Add a Row**. Connect your Google account, select the destination sheet, and map each column:

- Original message → map from the trigger module.
- AI draft → map from the AI module's output.
- Timestamp → use Make's built-in `now` variable.

Run the scenario once with the **Run once** button. Make executes it live, and little bubbles appear over each module showing exactly what data passed through. If something is wrong, you can click those bubbles to inspect the payload — this is the best debugging tool in the product.

## Step 5: Add a filter so you don't automate garbage

Right now the scenario processes *every* new row. You rarely want that. Click the wrench/line between two modules and add a **filter** — a condition that must be true for data to continue.

For example: only continue if the message field *exists* and *is not empty*, or only if a "status" column equals "new." Filters are how you keep automations from firing on test data, blank rows, or records that are not ready. Getting comfortable with them early saves a lot of cleanup later.

## Step 6: Schedule and turn it on

Finally, set the scenario's schedule (the clock icon at the bottom) — every 15 minutes, hourly, or on a specific cadence — and toggle the scenario **ON**. It now runs on its own.

Keep an eye on your **operations** usage. Make bills partly by operations (roughly, each module run counts as one), so a scenario that polls frequently across many rows can consume your plan faster than expected. Start conservative and watch the usage dashboard for the first few days.

## Common beginner mistakes to avoid

- **Typing instead of mapping.** If the output is literal placeholder text, you forgot to map. Always insert the colored token.
- **Not running a test first.** You cannot map fields Make has not fetched. Run the trigger once before building downstream modules.
- **Skipping filters.** Without them, test rows and blanks trigger real actions — including emails to real people.
- **Ignoring operations cost.** Frequent polling over large data sets burns through your plan. Match the schedule to how time-sensitive the task really is.
- **Over-building on day one.** Get a three-module scenario working end to end before adding routers, iterators, and error handling.

## Where to go next

Once this clicks, the natural next steps are **routers** (send data down different paths based on conditions), **iterators and aggregators** (handle lists of items), and **error handlers** (retry or reroute when something fails). Each is just another module you drag onto the same canvas.

If you are still deciding whether Make is the right platform, our [Make review](/reviews/make-review/) covers its strengths and rough edges, and the [Zapier vs Make comparison](/compare/zapier-vs-make/) weighs it against the most popular alternative. Newcomers who want the gentlest possible on-ramp might start with our [Zapier beginner guide](/tutorials/zapier-beginner-guide/) first, then graduate to Make when they need more control. For a broader menu of ideas, see our roundup of [AI workflow automation](/best-ai-automation-tools/).

Build the three-module version today, let it run for a week, and you will understand automation better than any amount of reading could teach you.
