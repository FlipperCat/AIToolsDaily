---
title: "How to Analyze Long Documents with Claude 2 (2023): A Practical Workflow"
description: "Use Claude 2's 100K context window to analyze contracts, reports, and research papers. Step-by-step prompts, verification tactics, and the pitfalls to avoid."
date: 2023-11-08
updated: 2026-02-16
categories: ["Tutorials"]
tags: ["claude", "claude-2", "document-analysis", "ai-research", "productivity"]
affiliate_disclosure: true
faqs:
  - question: "How long a document can Claude 2 actually handle?"
    answer: "Claude 2 supports a context window of roughly 100,000 tokens, which works out to somewhere around 75,000 words depending on the text. In practice that's a few hundred pages, or several medium-length documents at once. You'll hit file-size and upload limits before you hit the token ceiling in most real workflows."
  - question: "Is Claude 2 better than ChatGPT for long documents?"
    answer: "For sheer document length, yes — the context window is much larger, so you can put an entire report in one conversation instead of chunking it. For general reasoning and writing polish the two are close enough that your preference matters more than the benchmark."
  - question: "Can I trust Claude's page numbers and citations?"
    answer: "Not without checking. Claude is reliable at quoting text that actually appears in your document, but page numbers, section labels, and reference formatting are frequently invented. Ask for verbatim quotes and search for them yourself — the quote will usually be real even when the citation around it isn't."
  - question: "Do I need Claude Pro for this?"
    answer: "The free tier can do document analysis, but you'll run into usage limits quickly on long documents because each message re-processes the full context. Claude Pro (around $20/month) gives substantially more headroom and is worth it if you're doing this more than occasionally."
---

Claude 2's large context window is its most practically useful feature, and it's the one most people underuse. Instead of chopping a 90-page report into chunks and stitching summaries together, you can put the whole thing in front of the model and interrogate it.

This is the workflow I use for contracts, research papers, board decks, and long transcripts. It takes about ten minutes to learn and saves hours per document — but only if you build verification into the process, because the failure modes are subtle rather than obvious.

## What you need

- Access to Claude at claude.ai (free tier works; Pro gives you more room to work)
- Your document as a text-based PDF, .txt, .docx, or .csv
- A clear question you actually want answered

That last item matters more than the tooling. "Summarize this" produces a summary you won't use. "What are the termination conditions and which of them can the other party trigger unilaterally" produces something you can act on.

## Step 1: Prepare the document properly

Most bad results trace back to a bad input, not a bad prompt.

**Check that your PDF has a text layer.** If you can't select and copy text in a PDF viewer, it's a scanned image and Claude cannot read it. Run it through OCR first. This is the single most common reason document analysis "doesn't work."

**Strip the noise.** Headers, footers, page numbers repeated 200 times, and boilerplate legal disclaimers all consume context and dilute attention. If it's easy to remove, remove it.

**Split genuinely enormous files.** Upload limits mean very large documents may need splitting anyway. When you split, split at logical boundaries — chapters, sections, dated entries — never mid-argument.

**Keep tables in mind.** Complex multi-column tables often flatten badly when extracted from PDFs. If a table is central to your question, paste it in separately as clean text or CSV.

## Step 2: Open with an anchor prompt

Your first message sets the frame for everything after. Don't waste it on "here's a document."

```
I'm attaching a [type of document]: [one-line description of what it is
and who produced it].

My goal: [the actual decision or question you're working on].

Before analyzing anything, give me:
1. A structural outline — what sections exist and what each covers
2. Any parts that look incomplete, ambiguous, or unusually worded
3. Three questions I should be asking about this document that I
   probably haven't thought to ask
```

That third item is the highest-value line in the prompt. It routinely surfaces things I wouldn't have asked about — an indemnity clause with no cap, a methodology footnote that undercuts the headline finding, a date inconsistency between two sections.

The structural outline also serves as a sanity check: if the outline doesn't match your document, something went wrong in extraction and you should fix that before going further.

## Step 3: Ask for quotes before conclusions

This is the discipline that makes the whole workflow trustworthy.

Never ask "does this contract allow X." Ask:

```
Quote verbatim every passage relevant to [X]. Include enough surrounding
text that I can locate each one. Do not interpret yet — just extract.
```

Then, in a follow-up message, ask for the interpretation. Separating extraction from analysis does two things: it gives you something you can independently verify with Ctrl+F, and it stops the model from building an argument on a passage that doesn't quite say what the argument needs it to say.

When Claude can't find anything relevant, a well-framed extraction request will usually say so — whereas an interpretation request will often produce a confident, plausible answer assembled from adjacent material.

## Step 4: Run targeted extraction passes

Rather than one giant question, run several narrow ones. Each pass has a defined output shape:

**For contracts and agreements:**
```
List every obligation that falls on [party], with the triggering
condition, the deadline, and the consequence of failure. Output as a
table. Mark any row where the document is vague with "AMBIGUOUS".
```

**For research papers:**
```
Extract: the specific claim being made, the sample or dataset,
the method, the stated limitations, and any claim in the abstract or
conclusion that the results section doesn't fully support.
```

**For reports and decks:**
```
List every quantitative claim with its stated source. Flag any figure
that appears without a source, and any two figures that appear
inconsistent with each other.
```

**For long transcripts:**
```
List every commitment made, who made it, and any deadline attached.
Then separately list open questions nobody answered.
```

That last line in each — the flagging instruction — is what turns a summary into an analysis. Asking a model to find gaps is far more useful than asking it to restate content.

## Step 5: Compare documents against each other

The context window is big enough for multiple documents, which enables the most valuable use case: differential analysis.

```
Document A is our standard template. Document B is the counterparty's
redline. List every substantive difference — ignore formatting and
wording changes that don't alter meaning. For each, state which party
the change favors and why.
```

The same pattern works for two versions of a policy, two vendor proposals, or this quarter's report against last quarter's. Explicitly telling it to ignore cosmetic changes is essential, or you'll get thirty rows of comma placement.

## Step 6: Verify before you rely on anything

Non-negotiable, and it takes two minutes:

1. **Spot-check three quotes.** Search for them in the original. If a quote doesn't exist verbatim, treat the entire response as suspect and restart with a tighter extraction prompt.
2. **Ignore page numbers.** Claude invents these freely. Use the quote text to locate passages yourself.
3. **Probe the negative.** Ask "what in this document argues against the conclusion you just gave me?" A good answer strengthens your confidence; a weak or evasive one tells you the conclusion was thin.
4. **Re-ask important questions in a fresh conversation.** If the answer materially changes, you've found an unstable finding worth investigating manually.

## Pitfalls worth knowing

**The middle gets less attention.** Content buried in the middle of a very long document is more likely to be skimmed than material near the start or end. For critical sections, ask about them directly by name rather than trusting a whole-document sweep to catch them.

**Long conversations drift.** After a dozen exchanges, earlier context competes with your accumulated chat. When answers start feeling generic, open a fresh conversation and re-attach the document.

**Usage limits arrive faster than you expect.** Every message reprocesses the entire attached document, so ten questions about a 200-page PDF is a lot of work. Batch related questions into single messages instead of firing them one at a time.

**Some content triggers refusals.** Long excerpts of published, copyrighted material can prompt Claude to decline. Reframing toward analysis rather than reproduction usually resolves it.

**It won't tell you what isn't there.** A model asked to summarize will summarize what it was given. If page 40 failed to extract, you'll get a confident summary of a document with a hole in it. Hence the structural outline in Step 1.

## Where this fits alongside other tools

Dedicated document chat tools like [ChatPDF](/reviews/chatpdf-review-2023/) and [Humata](/reviews/humata-ai-review-2023/) have nicer interfaces for casually querying a single PDF, and they handle citation linking better. What they don't do well is cross-document reasoning or holding several long files in mind at once — that's where Claude 2's context window is genuinely differentiated.

For academic literature specifically, [Elicit](/reviews/elicit-ai-review-2023/) is better at finding and screening papers, and Claude is better at deeply reading the handful you've decided matter. They're complements, not competitors.

For a fuller picture of Claude's strengths and weak spots beyond document work, see our [Claude review](/reviews/claude-review/).

## The short version

Prepare a clean text-based file. Open with a structural outline and a "what should I be asking" request. Extract verbatim quotes before asking for interpretation. Run narrow passes with defined output shapes and explicit flagging instructions. Verify three quotes and ignore every page number.

Do that and you'll get a genuinely useful first read of a long document in under fifteen minutes — plus a list of the specific things worth reading yourself.
