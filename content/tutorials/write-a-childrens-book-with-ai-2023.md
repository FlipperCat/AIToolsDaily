---
title: "How to Write and Illustrate a Children's Book with AI (2023): ChatGPT + Midjourney Workflow"
description: "A practical 2023 workflow for drafting a picture book with ChatGPT and illustrating it with Midjourney or DALL-E 2, plus copyright and quality pitfalls."
date: 2023-02-27
updated: 2025-06-19
categories: ["Tutorials"]
tags: ["chatgpt", "midjourney", "dall-e 2", "children's books", "self-publishing", "ai art"]
affiliate_disclosure: true
faqs:
  - question: "Can I copyright a children's book made with AI?"
    answer: "Partly. In its February 2023 letter on the comic Zarya of the Dawn, the US Copyright Office said the author's text and the selection and arrangement of images could be protected, but the individual Midjourney images could not. Text you write or heavily rewrite yourself is on much firmer ground than raw AI output. If ownership matters to your business, talk to a publishing or IP lawyer."
  - question: "Can ChatGPT write a good picture book on its own?"
    answer: "It can write a competent one, which is not the same as a good one. First drafts tend to rhyme awkwardly, explain the lesson out loud, and end on a moral. Treat ChatGPT as a brainstorming partner and line editor, and expect to rewrite most of the final text yourself."
  - question: "How do I keep the same character across every illustration?"
    answer: "This is the hardest part with current image tools. Use one fixed character description in every prompt, keep the style keywords identical, pick a simple design with distinctive colors, and generate many options per page. Expect to fix small inconsistencies in an image editor."
  - question: "Is Midjourney or DALL-E 2 better for picture book art?"
    answer: "Midjourney v4 usually produces more polished, painterly results, and its niji mode suits anime-style art. DALL-E 2 is easier to use and its inpainting tool helps fix individual details. Many creators draft in Midjourney and patch problems with DALL-E 2's edit feature."
---

AI picture books have been everywhere since December, when a designer's book made with ChatGPT and Midjourney went viral and drew both excitement and a sharp backlash from illustrators. Since then, plenty of people have tried to make their own.

The tools can help you produce a book. They can't produce a *good* book unless you do real editorial work. This guide covers a realistic workflow as of February 2023, including the parts that go wrong.

## What You Need

- **ChatGPT** (free or the new $20/month Plus plan) for brainstorming, drafting, and editing. New to it? Start with our [ChatGPT beginner's guide](/getting-started-with-chatgpt-2023/).
- **An image generator.** Midjourney (via Discord, paid plans from roughly $10/month as of this writing) or DALL-E 2 (credit-based). Our [DALL-E 2 vs Stable Diffusion comparison](/compare/dalle-2-vs-stable-diffusion-2023/) covers the tradeoffs if you are deciding.
- **A basic image editor** for cleanup: Photoshop, Affinity Photo, GIMP, or Photopea.
- **A layout tool** such as Canva, Affinity Publisher, or InDesign.
- **Several weeks**, not one weekend. The viral "made in a weekend" stories skip the revision work.

## Step 1: Decide the Format Before You Write

Picture books follow conventions that affect everything else:

- **Page count:** traditional picture books are usually 32 pages, including front matter. That leaves room for roughly 12–14 spreads.
- **Word count:** most modern picture books run 300–800 words. Short is a feature.
- **Age range:** a book for 2–4 year olds reads very differently from one for 6–8 year olds.
- **Trim size:** pick a print size early (for example 8.5" × 8.5") so your illustrations use the right aspect ratio.

Write these constraints down. You'll paste them into nearly every prompt.

## Step 2: Brainstorm the Story with ChatGPT

Use ChatGPT for many ideas, then choose. Don't ask for one finished story. Try a prompt like this:

> I'm writing a 32-page picture book for ages 4–6, about 500 words. Give me 10 story premises about a small animal facing a fear common to preschoolers. For each, give the character, the problem, and a surprising but satisfying ending. Avoid stories that end with a stated moral.

Pick the premise with the clearest problem and the most visual ending. Then ask for a page-by-page outline:

> Break premise #4 into 13 spreads. For each spread, write one sentence describing what happens and one sentence describing what the illustration shows. The text and image should add different information, not repeat each other.

That last instruction matters. In good picture books, the art carries part of the story. ChatGPT tends to describe in the text exactly what the picture shows, which makes for flat books.

## Step 3: Draft the Text, Then Rewrite It Yourself

Ask ChatGPT to draft the text for each spread against your outline. Then expect to rewrite heavily. Common problems in AI drafts:

- **Forced rhyme.** ChatGPT will rhyme on request, but meter is often uneven and word choices get bent to fit the rhyme. Prose is safer unless you're confident with verse.
- **Stating the lesson.** "And Benny learned that being brave means..." Cut these lines. Let the story show it.
- **Adult vocabulary.** Ask it to flag any words a five-year-old might not know.
- **Sameness.** Many drafts open and close the same way. Push for specific details.

Useful editing prompts:

> Read this aloud mentally. Mark any line where the rhythm stumbles or a word feels too advanced for a 5-year-old.

> Suggest three funnier alternatives for the line on spread 7. Keep it under 15 words.

The final text should be yours. That makes for a better book, and it also helps with copyright (see Step 7).

## Step 4: Design One Character and Lock the Description

Character consistency is the biggest technical weakness of AI image tools right now. Neither Midjourney nor DALL-E 2 remembers your character between images. Reduce the problem:

1. **Keep the design simple.** A small fox with a yellow scarf is far easier to repeat than a child with detailed clothing and a specific hairstyle.
2. **Write one fixed description** and paste it word-for-word into every prompt: *"a small round orange fox cub with a bright yellow striped scarf and big black eyes."*
3. **Fix the style keywords** too: *"soft watercolor children's book illustration, gentle pastel palette, white background."*
4. **Generate a character sheet first.** Make dozens of attempts and pick the version you'll match everything else to.

In Midjourney, reusing the same prompt structure and style words helps a lot. Some creators also feed a reference image URL into the prompt to pull results toward their chosen design. Results improve, but they're still not reliable.

## Step 5: Generate the Illustrations Spread by Spread

For each spread, combine three parts: the fixed character description, the scene from your outline, and the fixed style keywords. Set the aspect ratio to match your trim size (`--ar` in Midjourney).

Practical tips:

- **Generate many options per page.** Plan on 20–50 generations for some spreads. That uses up credits fast, so budget for it.
- **Avoid complex hands and multiple characters.** Current models often get fingers wrong and blend characters together. Simple compositions work better.
- **Leave space for text.** Ask for "empty sky in the upper third" or a plain background area where words will go.
- **Use DALL-E 2's edit tool for fixes.** Erase a bad paw or a wrong-colored scarf and regenerate just that region.
- **Try Midjourney's niji mode** if you want a more anime or manga-influenced look.

Keep a spreadsheet with the spread number, final prompt, and chosen image file. You'll need it when you redo images.

## Step 6: Clean Up and Lay Out

AI images almost always need cleanup:

- Fix stray artifacts, extra limbs, and garbled text-like shapes. Current models can't render readable words, so add all text in your layout tool.
- Match colors across spreads so the scarf is the same yellow on every page.
- Upscale for print. Many outputs are too small for a sharp print at 300 DPI, so check your print provider's requirements.

Then place text and images in your layout tool. Choose a large, readable font and check that text contrast holds up against the art.

## Step 7: Understand the Rights Before You Publish

This is still unsettled, but there's one recent data point. In February 2023, the US Copyright Office wrote about *Zarya of the Dawn*, a comic illustrated with Midjourney. It said the author's text and the arrangement of images could be protected, but the individual AI-generated images could not, because a human did not control what Midjourney produced.

What that means in practice:

- Your **text** is your strongest asset, especially if you wrote or substantially rewrote it.
- The **AI illustrations** may not be protected, so others could reuse them.
- Check each tool's **terms of service** for commercial use. Midjourney's terms, for example, differ by plan.
- Be honest with readers and platforms about how you made the book. Some illustrators and readers object strongly, and reviews can turn on that.

## Common Pitfalls

- **Publishing the first draft.** The flood of low-effort AI books makes a carefully edited one stand out. It also means readers are getting more skeptical.
- **Too many characters.** Every extra character multiplies consistency problems.
- **Ignoring the read-aloud test.** Read every page out loud to an actual child if you can.
- **Underestimating cleanup time.** Image fixing and layout often take longer than writing.

## Verdict

ChatGPT and Midjourney can take a picture book from idea to print-ready files much faster than before, especially if you can't draw. But the tools handle the volume, not the judgment. The books worth reading come from people who rewrite the text, cut weak images, and fix inconsistencies by hand. If you want a deeper grounding in what ChatGPT can and can't do, read our explainer on [what ChatGPT is](/what-is-chatgpt-explained-2023/), and compare image tools in our [DALL-E 2 review](/reviews/dall-e-2-review-2023/).
