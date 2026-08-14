---
title: "How to Do Keyword Clustering With AI (2025): From Export to Content Plan"
description: "A practical keyword clustering workflow using AI: cleaning exports, grouping by search intent, validating with SERP overlap, and turning clusters into briefs."
date: 2025-02-19
updated: 2026-06-05
categories: ["Tutorials"]
tags: ["seo", "keyword-research", "content-strategy", "chatgpt", "embeddings"]
affiliate_disclosure: true
faqs:
  - question: "Can't I just paste my whole keyword list into ChatGPT and ask it to cluster?"
    answer: "For a couple hundred keywords, yes, and it works reasonably well. Past roughly 300–500 rows the model starts dropping keywords, inventing ones you didn't provide, and producing inconsistent groups across batches. Above that size you need either batching with a fixed cluster taxonomy or an embedding-based approach."
  - question: "Is AI clustering better than SERP-overlap clustering?"
    answer: "They answer different questions. SERP overlap tells you what Google actually treats as the same query — that is ground truth about ranking, and nothing beats it. AI clustering tells you what the keywords mean, which is what you need to write a coherent page. The strongest workflow uses AI for speed and SERP data to validate the clusters you plan to invest in."
  - question: "How many keywords should one page target?"
    answer: "There is no fixed number — a cluster can be 4 keywords or 40. What matters is that every keyword in the cluster could be satisfied by the same page without the page becoming incoherent. If you can't write one intro that honestly serves all of them, it's two clusters."
  - question: "Do I still need a paid SEO tool for this?"
    answer: "You need something to get search volume and difficulty data, so yes — the keyword source is still a paid tool for most people. The clustering itself no longer requires a dedicated product, which is the part that used to cost extra."
---

Keyword clustering is the least glamorous and most leveraged step in content SEO. Get it right and your site has a clean architecture where every page has a job. Get it wrong and you publish nine articles that compete with each other for the same query, then spend a year wondering why none of them rank.

The traditional options were slow (grouping 2,000 keywords by hand in a spreadsheet) or expensive (a dedicated clustering tool). AI has made the middle path viable: a couple of hours of setup gets you clusters that are 85% right, and your judgment fixes the rest. Here is the workflow I use.

## Step 1: Get a keyword list worth clustering

Clustering does not fix a bad list. Start by exporting keywords from your tool of choice — Ahrefs, Semrush, Search Console, or the free alternatives covered in our [AI SEO tools roundup](/9-best-ai-seo-tools/). Pull from at least three sources:

- **Your own Search Console data** (queries you already get impressions for — the highest-value input, and the one most people skip)
- **Competitor ranking keywords** for two or three sites that occupy your target space
- **Keyword suggestions** from a seed-term expansion

Aim for 500–3,000 rows. Keep these columns and drop the rest: keyword, monthly volume, difficulty, and current position if you have it. Filter out obvious junk now — branded terms for competitors, adult or unrelated drift, anything with zero volume that is not a clearly valuable long-tail phrasing.

## Step 2: Deduplicate and normalize before the AI sees it

This step costs ten minutes and improves everything downstream. In your spreadsheet:

1. Lowercase everything.
2. Trim whitespace and remove duplicate rows.
3. Strip near-duplicates that differ only by plural or stopword ("ai writing tool" / "ai writing tools" / "the ai writing tools") — keep the highest-volume variant and note the others in a column.

You are not trying to be clever here. You are reducing the row count so the model has fewer chances to lose track, and removing noise that would otherwise generate meaningless singleton clusters.

## Step 3: Label intent first, cluster second

Most clustering attempts fail because they group by topic and ignore intent, which produces clusters that cannot become a single page. "Best CRM software" and "how to set up a CRM" are the same topic and completely different pages.

So run a labeling pass first. Paste 200 keywords at a time into [ChatGPT](/reviews/chatgpt-review/) or [Claude](/reviews/claude-review/) with a prompt like:

> For each keyword below, output a row: keyword | intent | modifier.
> Intent must be exactly one of: informational, commercial, transactional, navigational.
> Modifier is one of: comparison, how-to, definition, listicle, pricing, review, tool, none.
> Do not add, remove, or rephrase any keyword. Output the same number of rows I gave you. No commentary.

Two things make this work: the fixed vocabulary (models are far more consistent when the label set is closed) and the explicit instruction to preserve the row count. Spot-check the output — if the row count is off, the batch was too big.

Now filter by intent and cluster within each intent bucket separately. Commercial keywords cluster with commercial keywords. This one change eliminates most of the incoherent clusters people complain about.

## Step 4: Cluster each bucket

For each intent bucket, feed the keywords in batches with a prompt like:

> Group these keywords into clusters where every keyword in a cluster could be satisfied by one page.
> For each cluster, output: cluster name | primary keyword (highest volume) | all keywords in the cluster.
> Prefer more, tighter clusters over fewer, broad ones. Every keyword must appear in exactly one cluster.
> If a keyword doesn't fit anywhere, put it in a cluster called UNGROUPED.

The "prefer tighter clusters" instruction matters. Left alone, models produce a handful of enormous clusters because that looks tidy — and enormous clusters are exactly what produces unfocused 4,000-word pages that rank for nothing. Splitting two clusters later is easy; discovering that your one page should have been five is not.

The UNGROUPED escape hatch is equally important. Without it, the model forces stragglers into clusters they do not belong in, quietly corrupting groups that were otherwise fine.

**For lists over ~1,000 keywords**, batching alone gets inconsistent — batch 3 invents cluster names that overlap batch 1's. Two fixes: run a first pass on a random sample to establish a cluster taxonomy, then pass that taxonomy into every subsequent batch as the allowed list; or switch to embeddings (below).

## Step 5: Use embeddings when the list is large

If you are comfortable with a little Python, embedding-based clustering is faster, cheaper, and more consistent than prompting at scale:

1. Embed every keyword with an embeddings model (OpenAI's small embedding model is cheap enough that a few thousand keywords costs cents; open-source sentence-transformer models run locally for free).
2. Cluster the vectors — agglomerative clustering with a distance threshold works better than k-means here, because you do not know the number of clusters in advance and you do not want to force one.
3. Name each cluster by sending its keywords to an LLM in one small prompt.

The tradeoff: embeddings group by *semantic similarity*, which is not identical to search intent. "Cheap CRM" and "expensive CRM" are semantically close and commercially opposite. That is why Step 3's intent labeling comes first — cluster within intent buckets and the embedding approach behaves.

## Step 6: Validate the clusters that matter with SERP overlap

AI tells you what keywords mean. Only Google tells you how it groups them. For the 10–20 clusters you actually intend to build pages for, validate:

Take the top 3 keywords in a cluster, pull the top 10 organic results for each, and count shared URLs. Three or more shared URLs across two keywords is strong evidence Google treats them as the same query — keep them together. Zero overlap means you are looking at two pages, no matter how similar the words look.

This is the step people skip, and it is the one that prevents the most expensive mistake: writing one page for two queries that Google has already decided are different.

## Step 7: Turn clusters into a content plan

A cluster is not a plan until it has a decision attached. For each one, record:

- **Primary keyword** (the page target)
- **Secondary keywords** (the H2s and natural mentions)
- **Page type** (from the intent + modifier labels — comparison, how-to, listicle, review)
- **Existing URL**, if you already have a page that half-covers it
- **Action**: create / update / consolidate

That last column is where the money is. Most sites do not need 40 new articles; they need 12 new ones and 15 consolidations of pages that have been cannibalizing each other for two years. Clustering makes cannibalization visible for the first time — if three of your existing URLs map to one cluster, you have found your highest-ROI work of the quarter.

If you want the clustering handled inside a tool rather than in spreadsheets, both platforms in our [Surfer vs Frase comparison](/compare/surfer-seo-vs-frase/) build grouping into their content workflows.

## Common pitfalls

**Trusting the clusters without reading them.** Read every cluster once. It takes 20 minutes and you will move 5–10% of keywords. That 10% is where the model was confidently wrong.

**Clustering by volume instead of meaning.** Volume decides priority *after* clustering, never membership.

**Building giant "ultimate guide" clusters.** If a cluster has 60 keywords, it is almost always three pages plus a hub.

**Ignoring the UNGROUPED bucket.** Stragglers frequently contain the most specific, lowest-competition, highest-converting long-tail queries on the whole list. Review them before deleting.

**Re-clustering from scratch every quarter.** Keep the taxonomy stable and add new keywords into existing clusters. Site architecture that changes every three months never accumulates authority.

## The realistic time budget

For 1,500 keywords: about 20 minutes cleaning, 20 minutes labeling intent, 30 minutes clustering, 45 minutes reviewing output, and an hour of SERP validation on your priority clusters. Call it three hours from export to a content plan you can hand to a writer.

Doing it by hand used to take a full day and produce worse groupings, because human patience runs out around keyword 400. The AI is not smarter than a good SEO here — it is just tireless, and that turns out to be the binding constraint.
