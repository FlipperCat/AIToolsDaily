---
title: "How to Write User Stories With ChatGPT (2023): Prompts, Acceptance Criteria, and Pitfalls"
description: "Use ChatGPT to draft user stories, acceptance criteria, and story splits faster. A step-by-step workflow for product managers, with prompts and pitfalls."
date: 2023-01-11
updated: 2025-09-22
categories: ["Tutorials"]
tags: ["chatgpt", "user stories", "product management", "agile", "productivity"]
affiliate_disclosure: true
faqs:
  - question: "Can ChatGPT write user stories on its own?"
    answer: "It can produce well-formatted drafts in seconds, but it has no idea what your users actually need, what your system already does, or what your team agreed to last sprint. Use it to draft, split, and stress-test stories, then edit every one before it goes into the backlog."
  - question: "What format should I ask ChatGPT to use?"
    answer: "Ask for the classic 'As a [user], I want [goal], so that [benefit]' template plus acceptance criteria written as Given/When/Then scenarios. Naming the exact format in your prompt gives you consistent output that pastes cleanly into Jira, Linear, or Trello."
  - question: "Is it safe to paste product specs into ChatGPT?"
    answer: "Be careful. ChatGPT is currently a free research preview, and OpenAI says conversations may be reviewed to improve its systems. Don't paste unreleased roadmaps, customer data, or anything covered by an NDA. Describe the feature in generic terms instead; the model doesn't need your company name to write a good story."
---

Writing user stories is one of those jobs that looks simple and eats a whole afternoon. The template is easy. Getting the scope right, writing acceptance criteria a developer can test against, and splitting a fat epic into pieces that fit in a sprint is the hard part.

ChatGPT, which OpenAI opened to the public as a free research preview at the end of November, is surprisingly useful here. User stories are structured, formulaic writing, and that's exactly where the model is strongest. It's also where its weaknesses (inventing requirements and sounding confident about them) can quietly cause problems later.

This guide walks through a workflow we've been using to draft stories faster without letting the model make product decisions. If you haven't used the tool much, our [ChatGPT review](/reviews/chatgpt-review/) covers the basics.

## What ChatGPT is good (and bad) at here

**Good at:**

- Turning a rough feature description into consistently formatted stories
- Writing Given/When/Then acceptance criteria
- Suggesting ways to split large stories
- Listing edge cases and error states you forgot

**Bad at:**

- Knowing what your users actually want
- Knowing what your product already does
- Estimating effort
- Saying "I don't know." It will fill gaps with plausible-sounding requirements.

Keep that second list in mind through every step below.

## Step 1: Write a context block before you ask for anything

The biggest quality jump comes from giving the model context up front. Write a short block you can paste at the start of every conversation:

```
Context: I'm a product manager on a web app for independent
fitness studios. Users: studio owners (admin), instructors,
and members. Members book classes on mobile web.
Feature: a waitlist for full classes. When a spot opens,
the first person on the waitlist gets it automatically.
Constraints: no native app, notifications by email only,
studios on our Basic plan can't use this feature.
```

Keep it generic enough to share safely. You don't need real company names or customer data. Save this block in a doc so you can reuse it across features.

## Step 2: Ask for stories in a fixed format

Now ask for a first draft, and be explicit about the format and the number of stories:

```
Using the context above, write 6-8 user stories for the
waitlist feature. Use the format:
"As a [role], I want [action], so that [benefit]."
Cover all three roles. Number them. Don't add features
I haven't described; if something is unclear, list it
as an open question at the end instead.
```

That last instruction matters. Without it, ChatGPT tends to invent scope: SMS notifications, an analytics dashboard, a loyalty program. Asking it to park unknowns as open questions gives you a useful list of things to clarify with stakeholders instead of hidden assumptions.

A typical result looks like this:

> **3.** As a member, I want to join the waitlist for a full class, so that I can still attend if someone cancels.

Fine as a start. Expect to rewrite the "so that" clauses. The model's default benefits are often generic ("so that I have a better experience"), and a vague benefit makes prioritization harder.

## Step 3: Add acceptance criteria in Given/When/Then

Pick the stories you're keeping and ask for criteria one story at a time. Batching ten stories into one request produces thinner criteria.

```
For story 3, write acceptance criteria as Given/When/Then
scenarios. Include the happy path, at least two error
cases, and one permissions case.
```

You'll get something like:

```
Given a class is full
And the member is not already booked or waitlisted
When the member taps "Join waitlist"
Then they are added to the end of the waitlist
And they see their position in the queue
```

This is where ChatGPT saves the most time. Writing criteria by hand is tedious, and the model rarely forgets the boring cases: duplicate sign-ups, a member who is already booked, a class that gets cancelled entirely.

Check each scenario against reality, though. If the model writes "Then the member receives a push notification" when you only send email, that's the kind of small invented detail that ends up in a sprint unnoticed.

## Step 4: Split big stories into thin slices

Epics are where teams lose the most time in planning. Give ChatGPT one oversized story and ask for splits using named patterns:

```
This story is too big for one sprint:
"As a studio owner, I want to manage waitlists for all
my classes." Split it into smaller stories using these
patterns: workflow steps, business rule variations,
happy path first, and simple/complex versions.
Each story must deliver value on its own.
```

The suggestions are usually reasonable: view the waitlist first, manual promotion before automatic promotion, a fixed waitlist size before a configurable one. You still decide which slice ships first. The model has no idea which one your biggest customers care about.

## Step 5: Hunt for edge cases and missing stories

Next, flip the model into a skeptical role:

```
Act as a QA engineer reviewing these stories. List edge
cases, error states, and missing stories. Focus on
timing, concurrency, cancellations, and permissions.
```

This regularly surfaces things worth discussing. What happens if two spots open at the same moment? What if the waitlisted member's email bounces? Does a member who gets auto-booked and doesn't show up count against a no-show policy?

Not every item belongs in the backlog. Treat the list as prompts for a conversation with engineering, not as requirements. When those stories eventually turn into code, the same approach works for [writing unit tests with ChatGPT](/tutorials/write-unit-tests-with-chatgpt-2023/).

## Step 6: Run an INVEST check

INVEST is a common checklist for good stories: **I**ndependent, **N**egotiable, **V**aluable, **E**stimable, **S**mall, **T**estable. Paste your edited stories back in and ask:

```
Review these stories against INVEST. For each story,
flag any criterion it fails and suggest a specific fix.
Be critical.
```

"Be critical" matters. Without it, the model leans toward approving whatever you wrote. With it, you'll get useful flags like "Story 5 depends on Story 2 being complete" or "Story 7 has no testable outcome."

## Step 7: Edit, then move stories into your tracker

Once you're happy with the content, ask for an output that's easy to paste:

```
Format the final stories as a table with columns:
ID, Title, Story, Acceptance Criteria, Open Questions.
```

Markdown tables paste reasonably well into Confluence and Notion. For Jira or Linear, ask for one story per block with clear headings, or a CSV you can tidy up before import.

Leave story points out of it. ChatGPT will happily suggest estimates, but it knows nothing about your codebase or your team's velocity. Estimates belong in planning poker.

## Tips that make a real difference

- **One conversation per feature.** Long threads drift, and the model starts mixing details from earlier features into new ones.
- **Paste your context block every time.** It doesn't remember previous chats.
- **Ask for rewrites by audience.** "Rewrite these for a non-technical stakeholder" is handy before a review meeting.
- **Keep your own copy.** The research preview is sometimes "at capacity" during busy hours, so draft in a doc, not only in the chat window.

## Pitfalls to watch for

- **Invented requirements.** The most common problem. Read every criterion and ask, "Did anyone actually decide this?"
- **Solution-shaped stories.** The model often writes UI details into the story ("I want a blue button in the top right"). Stories should describe needs, not layouts.
- **Generic benefits.** "So that I save time" tells nobody anything. Rewrite benefits in terms of the real user problem.
- **False confidence.** Output reads cleanly whether it's right or wrong. Polished formatting is not a sign of correctness.
- **Confidentiality.** Keep sensitive roadmap and customer details out of the prompt.

## The bottom line

ChatGPT won't replace the thinking that goes into a good backlog, but it removes a lot of the typing. The workflow that works: you supply the context and the decisions, ChatGPT drafts the format, criteria, splits, and edge-case lists, and you edit everything before it reaches the team.

Used that way, a grooming session that took an afternoon can shrink to an hour, and the edge-case pass alone tends to catch issues that would otherwise surface mid-sprint. If you're weighing ChatGPT against dedicated AI writing tools for this kind of structured work, see how [Jasper and ChatGPT compare](/compare/jasper-vs-chatgpt-2023/).
