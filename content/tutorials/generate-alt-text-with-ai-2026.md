---
title: "How to Generate Image Alt Text with AI (2026): Accessible, SEO-Friendly, and Fast"
description: "Learn to write accurate alt text with ChatGPT, Claude, or Gemini: prompts, batch workflows, review rules, and the mistakes that hurt accessibility."
date: 2026-09-23
updated: 2026-09-23
categories: ["Tutorials"]
tags: ["alt text", "accessibility", "chatgpt", "claude", "seo", "image descriptions"]
affiliate_disclosure: true
faqs:
  - question: "Is AI-generated alt text good enough to publish without review?"
    answer: "Not reliably. Current vision models describe what's visible very well, but they don't know why an image is on your page, and they sometimes misread text, people, or charts. Use AI for the first draft and have a person check each description against the page context before publishing."
  - question: "How long should alt text be?"
    answer: "Usually one short sentence, often under about 125 characters. Screen reader users hear the entire description, so shorter is better as long as it conveys the image's purpose. Complex images like charts need a short alt plus a longer description or data table elsewhere on the page."
  - question: "Should I put keywords in alt text for SEO?"
    answer: "Only when they describe the image naturally. Search engines do use alt text to understand images, but keyword stuffing makes the experience worse for screen reader users and can look spammy. Accurate, specific descriptions usually help SEO more than forced keywords."
  - question: "When should an image have empty alt text?"
    answer: "Purely decorative images, such as background textures, divider graphics, or icons next to text that already says the same thing, should use an empty alt attribute (alt=\"\") so screen readers skip them. Don't omit the attribute entirely; that can cause some screen readers to read the file name."
---

Alt text is one of those jobs everyone knows they should do and almost nobody keeps up with. A blog with a few hundred posts can easily have thousands of images with missing, empty, or useless descriptions like "image1.png" or "photo."

Vision-capable AI assistants have made this much easier. [ChatGPT](/reviews/chatgpt-review/), [Claude](/reviews/claude-review/), and Gemini can all look at an image and describe it accurately in seconds. The part AI still gets wrong is *purpose*: good alt text describes what an image means on that page, not every pixel in it. This guide covers a workflow that uses AI for speed and a human for judgment.

## What good alt text actually does

Alt text is read aloud by screen readers, shown when images fail to load, and used by search engines to understand images. Good alt text:

- **Conveys the image's purpose in context.** The same photo of a laptop might be "Author working at a standing desk" in a bio and "MacBook with the Settings panel open" in a tutorial.
- **Is concise.** Usually one sentence.
- **Skips "image of" or "picture of."** Screen readers already announce it's an image.
- **Includes important text** that appears in the image, such as a button label or a sign.
- **Is empty for decorative images** so screen readers can skip them.

Keep these rules in your prompt and the AI will follow most of them.

## Step 1: Sort your images by type

Before generating anything, sort images into groups. Each needs a different approach:

1. **Informative images:** photos and illustrations that add meaning. AI handles these well.
2. **Screenshots:** UI, settings panels, code. AI does well if you tell it what the screenshot is meant to show.
3. **Charts and diagrams:** need a short alt plus a longer description or data table. AI helps with both but needs checking.
4. **Images of text:** quotes, social graphics, infographics. The alt should contain the text itself.
5. **Decorative images:** dividers, stock backgrounds, icons next to labels. Use `alt=""`. No AI needed.
6. **Functional images:** linked logos and icon buttons. Alt describes the *action* ("Search," "Go to homepage"), not the picture.

## Step 2: Write a reusable prompt that includes context

The biggest quality boost comes from giving the model the surrounding text. Here's a prompt that works well:

```
Write alt text for the attached image.

Page context: [article title + the paragraph right before
and after the image]
Image purpose: [what the reader should learn from it, if known]

Rules:
- One sentence, ideally under 125 characters.
- Describe what matters for this page's purpose, not every detail.
- Don't start with "Image of" or "Picture of".
- If the image contains meaningful text, include it exactly.
- If the image seems purely decorative, reply only: DECORATIVE
- If you're unsure about something (a person's identity,
  a number, small text), say so instead of guessing.
```

The last rule matters. Models sometimes misread small numbers in charts or confidently name a person they shouldn't. Asking them to flag uncertainty gives you a list of things to check.

To avoid pasting this every time, save it as a custom GPT, a Claude Project, or a Gemini Gem. Our [custom GPT tutorial](/tutorials/30-build-custom-gpt/) walks through the setup.

## Step 3: Handle screenshots and charts properly

**Screenshots:** tell the model what the reader is supposed to notice. "This screenshot shows where the Export button is" produces "Project menu open with the Export option highlighted," which is far more useful than a description of the whole interface.

**Charts:** ask for two outputs:

```
1. Short alt text (one sentence) stating the chart type and
   its main takeaway.
2. A longer description for the body text or a details element,
   including the key values and trend.
```

Then check every number against the source data. Vision models are good at trends and less reliable at reading exact values off axes. If you have the underlying data, a small HTML table is often a better long description than prose.

## Step 4: Batch process a backlog

For a site with hundreds of images, going one by one in a chat window is slow. Options, from easiest to most technical:

- **Upload in small batches.** Most assistants accept several images per message. Upload 5 to 10 with their page titles and ask for a table of filename and alt text. Bigger batches tend to produce lazier, more generic descriptions.
- **CMS plugins.** WordPress and other CMS platforms have AI alt-text plugins that generate descriptions on upload or in bulk. They're convenient but usually don't see the page context, so review output carefully.
- **A short script.** If you're comfortable with code, loop over images, send each one to a vision model's API along with nearby text from the page, and write results to a CSV for review. Coding assistants can write this script for you in minutes. Watch the per-image cost on large libraries.

Whatever method you use, prioritize: high-traffic pages first, then images inside tutorials and product pages, then the long tail.

## Step 5: Review before publishing

Human review is where quality comes from. For each description, check:

- **Accuracy.** Does it match what's actually in the image? Watch for invented details and misread text.
- **Purpose.** Would a screen reader user get the same point a sighted reader gets?
- **Length.** Trim anything that reads like a paragraph.
- **Sensitive details.** AI may guess at race, age, gender, or disability. Include these only when they matter to the content, and never guess at someone's identity.
- **Duplication.** If the caption or surrounding text already says the same thing, shorten the alt or make it empty.

A reviewer who knows the content can check 50 to 100 AI drafts an hour, which is still much faster than writing them from scratch.

## Examples: weak vs. better

| Image | Weak (typical raw AI output) | Better (with context) |
|-------|------------------------------|-----------------------|
| Team photo on About page | "A group of people smiling in an office with plants and a whiteboard" | "The five-person support team at the Denver office" |
| Settings screenshot in a tutorial | "A software interface with menus and options" | "Privacy settings with 'Improve the model' toggled off" |
| Line chart in a report | "A line chart with blue and orange lines" | "Line chart: monthly signups roughly doubled from January to June" |
| Quote graphic | "Text on a purple background" | "Quote: 'Ship small, ship often.' – Engineering handbook" |
| Search icon button | "Magnifying glass" | "Search" |

## Tips

- **Ask for two or three options** when an image is ambiguous, then pick one.
- **Match your tone** to the site. Alt text should be plain and factual, not marketing copy.
- **Include alt text in your publishing checklist** so new images don't add to the backlog.
- **Use the same assistant for captions.** Once the model has the page context, drafting a caption takes one more line in the prompt.

## Pitfalls to avoid

- **Keyword stuffing.** "Best AI tools 2026 AI review AI software" isn't alt text. It hurts accessibility and gains you little in search.
- **Publishing unreviewed bulk output.** One confidently wrong description on a product page can mislead customers.
- **Describing decorative images.** It wastes screen reader users' time. Use `alt=""`.
- **Ignoring privacy.** Don't upload images containing customer data, private documents, or people who haven't agreed to it into consumer AI tools without checking your policy.
- **Forgetting functional images.** Linked images and icon buttons are the most common accessibility failure, and the fix is usually one word.

## Wrapping up

AI has turned alt text from a chore that never gets done into a quick review task. Give the model page context, ask it to flag uncertainty, keep batches small, and have a person approve every description. You'll improve accessibility for screen reader users and give search engines clearer signals at the same time. For more AI-assisted content workflows, see our guide to [summarizing documents with AI](/tutorials/summarize-documents-with-ai/).
