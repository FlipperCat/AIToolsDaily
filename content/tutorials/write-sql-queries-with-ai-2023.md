---
title: "How to Write and Debug SQL Queries with AI (2023 Guide)"
description: "A practical 2023 workflow for writing, fixing, and optimizing SQL with ChatGPT, Claude, and Copilot — including the schema prompt that makes results usable."
date: 2023-09-19
updated: 2026-02-17
categories: ["Tutorials"]
tags: ["sql", "chatgpt", "data-analysis", "productivity", "developers"]
affiliate_disclosure: true
faqs:
  - question: "Can ChatGPT write SQL that actually runs?"
    answer: "Often yes, but only if you give it your schema. Without table and column names it invents plausible ones, and the query fails on the first run. Paste your CREATE TABLE statements or a column list first and the hit rate improves dramatically."
  - question: "Is it safe to paste my database schema into an AI tool?"
    answer: "Schema alone is usually lower risk than data, but it still reveals how your business is structured. Check your company's policy, strip anything sensitive, and never paste real customer rows. Use a handful of fake sample rows instead when you need to show data shape."
  - question: "Which AI tool is best for SQL in 2023?"
    answer: "ChatGPT with GPT-4 is the strongest general choice for writing and explaining queries. Claude 2 handles very long schemas well because of its large context window, and GitHub Copilot is better if you're writing SQL inside an editor and want inline completions."
  - question: "Will AI optimize a slow query for me?"
    answer: "It can suggest common fixes — indexes, avoiding SELECT *, rewriting correlated subqueries as joins — but it cannot see your query plan or data distribution. Always run EXPLAIN yourself and treat the AI's advice as a checklist of things to test, not an answer."
---

SQL is the perfect task for a language model: rigid syntax, well-documented, endless examples in the training data, and an immediate feedback loop when you run it. If you write queries occasionally — an analyst pulling numbers, a developer who touches the database twice a month — AI assistance is the difference between twenty minutes of Stack Overflow archaeology and ninety seconds.

But most people use it badly. They type "write me a SQL query to find top customers," get a beautiful query referencing tables that don't exist, and conclude the whole thing is overhyped. The fix is almost entirely about what you feed the model first.

Here's the workflow that actually works, as of late 2023.

## Step 1: Give It Your Schema First

This is the whole ballgame. A model that doesn't know your column names will hallucinate them — that's not a bug, it's the only thing it can do.

Start every SQL session by pasting your schema. The cleanest version is the DDL:

```sql
CREATE TABLE orders (
  id            BIGINT PRIMARY KEY,
  customer_id   BIGINT REFERENCES customers(id),
  status        TEXT,          -- 'pending','paid','refunded'
  total_cents   INTEGER,
  created_at    TIMESTAMPTZ
);

CREATE TABLE customers (
  id         BIGINT PRIMARY KEY,
  email      TEXT,
  plan       TEXT,             -- 'free','pro','enterprise'
  signup_at  TIMESTAMPTZ
);
```

Two details matter more than they look. First, the inline comments listing possible values — without them the model will happily filter on `status = 'complete'` when your data says `'paid'`. Second, tell it your database: "This is PostgreSQL 15." Date functions are where dialects diverge hardest, and a MySQL `DATE_SUB` in a Postgres console is an instant error.

If your schema is enormous, paste only the relevant tables. Claude 2's large context window makes it the more comfortable option when you genuinely need to dump fifty tables at once — see our [Claude review](/reviews/claude-review/) for where that context advantage shows up elsewhere.

## Step 2: Ask in Business Terms, Not SQL Terms

Once the schema is loaded, describe the *question*, not the query you imagine. Bad prompt: "join orders and customers and group by month." Good prompt:

> Using the schema above (PostgreSQL), give me monthly revenue for the last 12 full months, counting only paid orders, broken out by customer plan. Return month, plan, order count, and revenue in dollars.

Note what that includes: the time window, the filter condition, the grouping, and the output format. Ambiguity is where wrong answers come from, and "revenue in dollars" quietly saves you from getting `total_cents` reported as if it were dollars — a mistake that has survived to production more than once.

## Step 3: Read the Query Before You Run It

Run this check on every generated query, in order:

1. **Do all tables and columns exist?** Fastest failure to catch.
2. **Is the date boundary right?** `>= date_trunc('month', now()) - interval '12 months'` behaves differently from `> now() - interval '365 days'`. Models pick one arbitrarily.
3. **Are the joins the type you want?** An INNER JOIN silently drops customers with no orders. If your number looks low, this is usually why.
4. **Does the aggregation double-count?** Joining a one-to-many table before a SUM inflates totals. This is the single most common AI SQL bug, and it produces a query that runs perfectly and reports garbage.
5. **Is it destructive?** Never run a generated `UPDATE` or `DELETE` without wrapping it in a transaction you can roll back, or converting it to a `SELECT` first to see the affected rows.

That last one deserves emphasis. Treat every generated write statement as untrusted input.

## Step 4: Debug by Pasting the Error Verbatim

When a query fails, don't paraphrase. Paste the whole error, including the position marker:

```
ERROR: column "o.created" does not exist
LINE 4:   WHERE o.created >= now() - interval '30 days'
                ^
HINT: Perhaps you meant to reference the column "o.created_at".
```

Database errors are unusually informative, and models are good at acting on them. The fix comes back correct on the first try the overwhelming majority of the time. The same applies to logic bugs — describe the symptom concretely: "This returns 4,812 orders but the dashboard says 3,109. The difference is roughly the number of refunded orders."

## Step 5: Use It to Explain Inherited SQL

The underrated use case. Paste a 200-line query somebody wrote in 2019 and ask: "Explain what this does in plain English, then list the assumptions it makes about the data."

That second half is the valuable part. It surfaces things like "this assumes every order has exactly one shipment" — assumptions the original author held silently and never wrote down. It's the same technique that makes AI useful for [summarizing long documents](/tutorials/summarize-documents-with-ai/), applied to code.

## Step 6: Optimization — With Real Limits

You can ask for performance help, but be clear about what the model can and can't see. It cannot see your indexes, row counts, or query plan. What it *can* do is spot common inefficiencies: functions applied to indexed columns in a WHERE clause, `SELECT *` pulling wide columns you don't need, correlated subqueries that should be joins, missing `LIMIT` on exploratory queries.

The workflow that works: run `EXPLAIN ANALYZE`, paste the plan output alongside the query, and ask what the expensive step is. With the plan in hand its suggestions get considerably more grounded. Without it, you're getting generic advice.

## Choosing a Tool

- **ChatGPT (GPT-4)** — the best all-round choice for writing, explaining, and debugging. Advanced Data Analysis is a bonus if you're working with CSVs rather than a live database. Our [ChatGPT review](/reviews/chatgpt-review/) covers the plan differences.
- **Claude 2** — best when the schema is huge, thanks to its context window.
- **GitHub Copilot** — best inside an editor. Write a comment describing the query and let it complete; the tight loop beats tab-switching to a chat window.
- **Phind** — worth a look for developer-flavored answers with sources; see our [Phind review](/reviews/phind-review-2023/).

## Pitfalls Worth Repeating

**Confident wrongness.** A query that runs is not a query that's correct. Sanity-check the magnitude of every number against something you already know.

**Dialect drift.** Ask for one database and it'll occasionally answer in another. String functions and date arithmetic are the tells.

**Schema staleness.** In a long chat, the model gradually forgets your schema. Re-paste it when answers start referencing columns you don't recognize.

**Data privacy.** Schema is usually fine; rows usually aren't. Fabricate five sample rows if you need to demonstrate shape.

## The Bottom Line

The mental model that works: AI is a fast, well-read colleague who has never seen your database and never runs anything. You provide the context, it provides the syntax, and you verify the result. Used that way it reliably saves hours a week — the same shift already happening with spreadsheets, which we covered in our guide to [using ChatGPT for Excel formulas](/tutorials/use-chatgpt-for-excel-formulas/).

Used the other way — pasting queries into production because they looked right — it will eventually cost you an afternoon explaining a wrong number to someone important.
