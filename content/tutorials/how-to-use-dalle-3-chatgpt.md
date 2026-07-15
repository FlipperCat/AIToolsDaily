---
title: "How to Use DALL·E 3 in ChatGPT (2023): A Practical Guide"
description: "Step-by-step guide to generating images with DALL·E 3 inside ChatGPT: setup, prompting techniques, refining results, and limits to know."
date: 2023-11-09
updated: 2026-06-20
categories: ["Tutorials"]
tags: ["dalle-3", "chatgpt", "image-generation", "openai", "prompting"]
affiliate_disclosure: true
faqs:
  - question: "Do I need ChatGPT Plus to use DALL·E 3?"
    answer: "Inside ChatGPT, yes — DALL·E 3 is available to Plus ($20/month) and Enterprise users. If you don't want to pay, Microsoft's Bing Image Creator also runs DALL·E 3 for free, though without the conversational refinement that makes the ChatGPT version special."
  - question: "Can I use DALL·E 3 images commercially?"
    answer: "OpenAI's terms give you ownership of the images you create, including commercial use rights. The usual caveats apply: you can't trademark what you don't have exclusive rights to, and images that accidentally resemble protected characters or brands can still create legal risk."
  - question: "Why does DALL·E 3 refuse some of my prompts?"
    answer: "OpenAI applies content policies on top of the model. It declines requests involving public figures, images in the style of living artists, and various sensitive categories. Rephrasing around a descriptive style (e.g. 'dreamlike watercolor' instead of an artist's name) usually gets you close to the look you wanted."
---

DALL·E 3 rolled out to ChatGPT Plus subscribers in October, and it changes the image generation workflow in one fundamental way: you don't write prompts anymore — you have a conversation. ChatGPT sits between you and the model, expanding your rough idea into a detailed prompt and refining it based on plain-English feedback.

That's a genuinely different experience from [Midjourney](/midjourney-beginner-guide-2023/), where prompt craft is half the skill. Here's how to get the most out of it.

## 1. Get access

You need ChatGPT Plus ($20/month) or an Enterprise account. In a new chat, select **GPT-4** and make sure **DALL·E 3** is available in the model picker — OpenAI has been merging capabilities so that GPT-4 chats can generate images directly. If you don't see it yet, check Settings for beta features; the rollout reached most Plus accounts through October.

No subscription? Bing Image Creator runs DALL·E 3 for free with a daily allotment of fast generations. You lose the conversational refinement loop, but the underlying model is the same.

## 2. Start with a plain-English description

Forget prompt syntax. Just describe what you want as if briefing a designer:

> "A cozy bookshop on a rainy evening, warm light spilling from the windows, a cat asleep on a stack of books by the door. Cinematic, slightly nostalgic feel."

ChatGPT will silently expand this into a much more detailed internal prompt and typically return a pair of variations. This is the single biggest difference from other tools: DALL·E 3's prompt-following is strong enough that *what you say is what you get*, including small details other models drop.

**Tip:** mention the elements you care about explicitly. If the cat matters, say where it is and what it's doing. DALL·E 3 rewards specificity instead of punishing it.

## 3. Refine conversationally

This is the workflow that makes the ChatGPT integration worth $20/month. After the first images appear, just keep talking:

- "Make it winter — snow instead of rain."
- "Same scene, but from across the street."
- "Warmer light, and add a hand-painted sign that says OPEN."

ChatGPT rewrites the prompt behind the scenes and regenerates. You can iterate five or six times in a couple of minutes without ever learning parameter syntax. Text rendering is a standout — DALL·E 3 is the first mainstream model that can reliably put short phrases on signs, labels, and book covers, though longer text still comes out mangled.

**Pitfall:** each generation is a fresh roll. "Keep everything the same but change X" gets you *close* to the previous image, not an edit of it. There's no true inpainting inside ChatGPT right now, so expect the whole composition to shift slightly between rounds. Lock in the elements you love by describing them precisely in your follow-ups.

## 4. Control aspect ratio and style with plain requests

DALL·E 3 supports three sizes: square (1024×1024), wide (1792×1024), and tall (1024×1792). You don't need flags — just ask:

- "Make it widescreen" → 1792×1024, great for blog headers
- "Vertical, for a phone wallpaper" → 1024×1792

For style, name a medium and mood rather than an artist: "flat vector illustration with a limited pastel palette," "35mm film photo, shallow depth of field," "isometric 3D render." OpenAI blocks styles of living artists by name, so descriptive language is both safer and more repeatable. If you want a survey of how the big models compare on style range, see our [AI image generators guide](/ai-image-generators-2023-guide/).

## 5. Reuse and remix what works

When a generation nails the look, ask ChatGPT: **"Show me the exact prompt you used for that image."** It will print the expanded prompt it sent to DALL·E 3. Save these — they're reusable templates. Next time, paste the saved prompt and change only the subject. This is how you build a consistent visual style across a blog or brand without a style-reference feature.

You can also ask ChatGPT to riff: "Give me five variations of that prompt exploring different lighting." It's a prompt-brainstorming partner and an image generator in one window.

## 6. Know the limits before you rely on it

- **Hands, complex crowds, and fine mechanical detail** still go wrong regularly. Generate multiple rounds and pick.
- **Consistent characters across images** is not really solved. Detailed, repeated descriptions help but won't give you a pixel-identical mascot. Midjourney users face the same wall.
- **Content policy is conservative.** Public figures, living artists' styles, and anything violent or suggestive get refused. Occasionally the filter false-positives on innocent requests — rewording usually fixes it.
- **Generation caps exist.** Plus accounts have usage limits that reset over time; heavy sessions can hit them.
- **No editing of uploaded images.** You can't upload a photo and have DALL·E 3 modify it inside ChatGPT — generation only.

## Which tool should you actually use?

DALL·E 3 in ChatGPT is the best choice when prompt-following and text-in-image matter, or when you want fast conversational iteration without learning a tool. Midjourney still wins on sheer aesthetic polish for artistic work, and [Stable Diffusion](/reviews/stable-diffusion-review/) remains the pick for local control, custom models, and unlimited free generation if you have the GPU. Our [Midjourney vs DALL·E 3 comparison](/compare/midjourney-vs-dalle3/) breaks this down in depth.

For most ChatGPT Plus subscribers, though, the marginal cost is zero — it's already in your subscription. Start with a real project (a blog header, a slide illustration), iterate conversationally, save the prompts that work, and you'll have a dependable image pipeline by the end of the afternoon.
