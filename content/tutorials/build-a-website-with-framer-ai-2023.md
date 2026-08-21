---
title: "How to Build a Website With Framer AI (2023): From Prompt to Published Site"
description: "Step-by-step guide to building and publishing a real website with Framer AI in 2023 — prompts, editing, CMS basics, pitfalls, and publishing tips."
date: 2023-09-19
updated: 2026-06-11
categories: ["Tutorials"]
tags: ["framer", "ai-website-builder", "web-design", "no-code", "landing-pages"]
affiliate_disclosure: true
faqs:
  - question: "Is Framer AI free to use?"
    answer: "You can generate and edit sites on the free plan, which publishes to a framer.app subdomain with a small Framer badge. Connecting a custom domain requires a paid site plan, which starts at roughly $5–$15 per month as of September 2023 depending on tier."
  - question: "Can Framer AI build a multi-page website?"
    answer: "The AI generator produces a single page per prompt, but you can add more pages manually and generate sections with AI as you go. For blogs or listing pages, Framer's built-in CMS handles collections like posts or projects without code."
  - question: "Do I own the website Framer AI creates, and can I export the code?"
    answer: "You own your content and can use the site commercially, but Framer does not export clean standalone code — sites are hosted on Framer's infrastructure. If you need portable code, treat Framer as a fast prototyping and hosting platform rather than a code generator."
---

Framer added AI site generation earlier this year, and it's one of the few "type a prompt, get a website" tools where the output is actually usable — because it drops you into a real design canvas afterward instead of a rigid template editor. In this tutorial we'll go from a one-sentence prompt to a published site with a custom look, and cover the pitfalls we hit along the way.

If you're still deciding whether Framer is the right tool, our [Framer AI review](/reviews/framer-ai-review-2023/) covers how it stacks up as a product; this guide assumes you're ready to build.

## What you'll need

- A free Framer account (framer.com)
- 30–60 minutes
- Real content if you have it — your actual headline, offer, and a few images beat placeholder text every time
- Optional: a logo. If you don't have one, our guide to [designing a logo with AI](/tutorials/design-a-logo-with-ai-2023/) pairs well with this workflow.

## Step 1: Write a prompt that describes the business, not the design

From the Framer dashboard, choose the AI generation option and you'll get a single prompt box. The mistake most people make is describing aesthetics ("modern, clean, minimalist") and nothing else. Framer's AI is decent at layout on its own — what it needs from you is *content direction*.

A weak prompt: *"A modern minimalist website."*

A better prompt: *"A landing page for a mobile dog-grooming service in Austin called TidyPup. Sections: hero with booking call-to-action, three-step 'how it works', pricing for three packages, testimonials, FAQ. Friendly but professional tone."*

Name the business, list the sections you want, and state the tone. The generator writes real copy from this, and specific prompts produce noticeably less generic text.

## Step 2: Generate, then shuffle before you edit

Framer generates a full page in under a minute: layout, copy, fonts, and a color palette. Before touching anything manually, use the shuffle controls to cycle through style variations — fonts, palettes, and layout treatments. This is cheap exploration. Reroll a few times until the overall direction feels right, because changing the foundation later is more work than changing it now.

Don't chase perfection here. You're picking a direction, not a final design.

## Step 3: Replace the AI copy with your copy

The generated text is coherent but padded — every AI site tool shares this problem, and Framer is no exception. Click into each text block and rewrite:

1. **Hero headline**: say what you do and for whom in under ten words.
2. **Body sections**: cut the generated text by half. AI copy loves phrases like "unlock your potential" — delete them.
3. **Calls to action**: make every button say something concrete ("Book a groom", not "Get started").

This step is where a generated site stops looking generated. Budget more time for it than for the design.

## Step 4: Edit the design on the canvas

This is Framer's real advantage over one-shot generators like Durable (which we covered in our [Durable review](/reviews/durable-ai-website-builder-review-2023/)): the AI output is a fully editable Framer project, not a locked template.

- **Sections**: hover between sections to insert new ones — you can generate individual sections with AI or pick from the library.
- **Layout**: elements sit in stacks (Framer's auto-layout). Resist pixel-nudging; adjust the stack's spacing and alignment instead, and the design stays responsive.
- **Images**: swap the stock photos for your own. Drag and drop directly onto an image fill.
- **Effects**: subtle scroll and hover effects are built in. One or two look professional; five look like a demo reel.

## Step 5: Check the tablet and phone breakpoints

Framer generates desktop, tablet, and phone breakpoints automatically, and they're usually 90% right. Click each breakpoint at the top of the canvas and scan for the usual suspects: headlines wrapping badly, images cropping the wrong way, buttons crowding on small screens. Fixes made on a smaller breakpoint don't break the desktop layout, so you can adjust freely.

Do not skip this. Most of your traffic will be on phones, and the 10% the AI gets wrong is always visible.

## Step 6: Add pages and CMS collections (optional)

The AI generates one page per prompt, but real sites need more:

- **Static pages** (About, Contact): add a page, then build it from AI-generated sections or duplicates of your existing sections for consistency.
- **Blog or portfolio**: use Framer's CMS. Create a collection (e.g., "Posts") with fields for title, cover image, and body, then design one detail-page template that every entry flows through. It's the same concept as any headless CMS, minus the code.

Keep navigation in a shared component so adding a page doesn't mean editing five headers.

## Step 7: Set the basics before publishing

In site settings, spend five minutes on things the AI won't do for you:

- **Page titles and meta descriptions** — write them per page; the defaults are weak.
- **Social preview image** — upload one; link shares look broken without it.
- **Favicon** — upload your mark.
- **Accessibility pass** — check text contrast against those AI-picked palette colors; light gray on white is a recurring offender.

## Step 8: Publish

Hit publish and your site is live on a `framer.app` subdomain within seconds — free plan included, with a small Framer badge. For a custom domain you'll need a paid site plan (roughly $5–$15/month as of September 2023, depending on tier and traffic needs; check current pricing). Connecting a domain is a standard DNS pointing exercise and Framer's instructions are clear.

## Pitfalls to avoid

- **Shipping the AI copy unedited.** It reads fine in a skim and hollow on a real read. Rewrite it (Step 3).
- **Fighting the stacks.** If you drag elements to absolute positions, responsiveness suffers. Work with auto-layout, not against it.
- **Assuming you can take the code elsewhere.** Framer hosts your site; there's no clean code export. Fine for most sites, a dealbreaker if your endgame is a custom codebase.
- **Over-generating.** Each AI reroll replaces work. Once you start manual editing, stop shuffling.

## The bottom line

Framer AI is the strongest prompt-to-website workflow we've tested this year — not because the first generation is perfect, but because everything after the generation happens in a genuinely good design tool. Expect the AI to get you 60% of the way in five minutes, and expect the remaining 40% — your copy, your images, breakpoint checks — to take the rest of the hour. That's still a same-day website, and it won't look like it came from a template mill.
