---
title: "Lensa AI Review (2023): Are Magic Avatars Worth the Hype and the Privacy Trade-off?"
description: "Hands-on Lensa AI review: how Magic Avatars work, what results really look like, pricing as of January 2023, privacy concerns, and who should bother."
date: 2023-01-12
updated: 2025-06-10
categories: ["Reviews"]
tags: ["lensa", "ai-avatars", "stable-diffusion", "image-generation", "mobile-apps"]
affiliate_disclosure: true
faqs:
  - question: "Is Lensa AI safe to use with my photos?"
    answer: "Prisma Labs says uploaded selfies are used only to train your personal avatar model and are deleted from its servers after processing, typically within 24 hours. That is a reasonable policy, but you are still handing a company 10-20 close-up images of your face. If that bothers you, skip it. Read the terms yourself rather than relying on screenshots circulating on social media."
  - question: "Why do some Lensa avatars have scribbles or signatures in the corner?"
    answer: "Lensa is built on Stable Diffusion, which was trained on huge sets of images scraped from the web, including signed artwork. The model sometimes reproduces signature-like marks because it learned that portraits often have them. It is a visible reminder that the underlying training data came from artists who were never asked."
  - question: "How many selfies should I upload for the best results?"
    answer: "Use the full 20 if you can. Pick tightly cropped, well-lit photos with a consistent hairstyle and no sunglasses, hats, or other people. Vary the angle and expression a little, but not the lighting. Our worst batch came from a mixed bag of old photos with different hair lengths; our best came from 20 shots taken in one sitting."
---

If your social feeds filled up with painterly portraits of your friends over the holidays, that was Lensa. Prisma Labs' photo editor has been around since 2018, but the Magic Avatars feature it added in late November turned it into the most-downloaded app in the US App Store for a stretch of December. It is the first AI image tool to go truly mainstream with people who have never heard of a prompt.

We ran three batches of avatars using different sets of selfies to answer the obvious question: is this worth a few dollars, and is it worth your face?

## What Lensa AI is

Lensa is primarily a selfie retouching app. Skin smoothing, teeth whitening, background blur and replacement, a "face retouch" tool, and a stack of filters. It competes with Facetune and does that job competently, if unremarkably.

Magic Avatars is the add-on that changed everything. You upload 10-20 selfies, pick a pack size, wait, and get back a set of stylized portraits of yourself as an astronaut, an anime character, a fantasy warrior, or an oil painting.

Under the hood it runs on Stable Diffusion, the open-source model we cover in our [Stable Diffusion review](/reviews/stable-diffusion-review/). Prisma fine-tunes a copy of the model on your photos, generates images across a set of style prompts, and then discards the personalized model. Technically, this is the same thing enthusiasts have been doing with Dreambooth on rented GPUs since the autumn. Lensa's achievement is packaging it into a two-minute phone flow.

## How Magic Avatars work in practice

The app is strict about inputs. You need close-up shots of one adult, no group photos, no sunglasses, no children. It asks for 10 to 20 images and nudges you toward variety in angle and expression.

Then you pick a pack: 50, 100, or 200 avatars, spread across roughly ten style categories with names like Fantasy, Anime, Stylish, Focus, Pop, Sci-fi, Cosmic, and Kawaii. Each style gets a handful of images.

Processing took about 20 minutes in our tests in early January. During the December peak, users reported waits of several hours, and the app was upfront about it. You get a notification when the pack is ready, and the images land in the app for download as square files.

## What the results actually look like

Here is the honest breakdown from three batches of 100:

- **Roughly one in five is genuinely good.** Striking, recognizable, the kind of image you would happily use as a profile picture.
- **Most are "close but off."** The jaw is wider, the eyes are further apart, the skin tone has drifted. It is you the way a talented stranger would paint you from memory.
- **A noticeable minority are failures.** Extra fingers, hands fused into shoulders, backgrounds that melt, and the now-famous signature-like scribbles in the corner.

Input quality mattered more than anything else. Our best batch came from 20 selfies shot in one sitting under one light source. Our worst came from a grab-bag of old photos with two hairstyles and mixed lighting, which confused the model into a blend that looked like nobody in particular.

There is also a documented problem with how the model treats women. Several of our female tester's avatars came back with cleavage or partial nudity despite every input being a headshot in a sweater. Bodies were slimmed and features were Europeanized in ways she did not ask for. Male testers got knights and astronauts. This is not a quirk of our sample. It has been widely reported and it comes straight from the biases in the training data.

## Key features

- **Magic Avatars** in packs of 50, 100, or 200 across preset styles.
- **Face retouch** tools: skin, eyes, teeth, lips, with adjustable intensity.
- **Background tools**: blur, replace, and color changes.
- **Filters and presets** for one-tap edits.
- **Batch export** of avatars to your camera roll.

Everything except the avatars is standard retouching fare. If you already pay for Facetune, the editor side of Lensa gives you nothing new.

## Pros

- Cheap and fast compared to running Stable Diffusion and Dreambooth yourself, which takes a GPU, a tutorial, and an afternoon.
- Zero learning curve. No prompts, no settings, no Discord bot to wrestle with.
- Some outputs are genuinely striking and unlike anything you could get from a filter.
- Runs entirely from your phone.

## Cons and limitations

- **No creative control.** You cannot type "make me a Victorian detective." You get what the preset styles produce, and you cannot re-roll a single image.
- **Soft resolution.** The images are generated small and upscaled. They look fine on a phone screen and fall apart when printed or cropped.
- **Likeness is a coin flip.** Expect to discard most of a pack.
- **Bias and unwanted sexualization**, as described above.
- **Artist concerns.** Stable Diffusion was trained on scraped artwork without consent, and Lensa's outputs sometimes reproduce mangled signatures. Many illustrators consider the app exploitative. You should at least know that before posting your pack.
- **Subscription upsell.** The avatar checkout pushes a "free trial" of the annual editor subscription. The discounted avatar price depends on it, and if you do not cancel within seven days you get billed for a year.

## Pricing (approximate, as of January 2023)

Prices vary by region and Prisma has already changed them more than once, so treat these as ballpark:

- **Magic Avatars packs**: around $4 for 50, $6 for 100, and $8 for 200 with the subscription trial active. Without a subscription the same packs cost noticeably more.
- **Lensa subscription** for the editor: roughly $8 per month or $30-36 per year after a 7-day trial.

Cancel the trial through your App Store or Google Play subscription settings, not inside the app. Deleting the app does not cancel it.

## Privacy: the part worth thinking about

You are uploading 10-20 clear images of your face to a company's servers. Prisma's stated policy is that the photos are used solely to train your personal model, are not used to train its general models, and are deleted after the avatars are generated. Screenshots of its terms of service went viral in December because the license language reads broadly, and the company responded by clarifying its intent.

We have no reason to think Prisma is doing anything sinister. But the general rule stands: once your face data is on someone else's server, you are trusting their policy and their security. Decide whether $4 of novelty is worth that. For most people it probably is. For anyone in a sensitive job, it probably is not.

## Lensa vs doing it yourself

If you want control, the DIY route is Stable Diffusion plus Dreambooth on a rented cloud GPU or a Colab notebook. You get full-resolution output, your own prompts, and the ability to fix a bad hand. You also spend an afternoon on setup and a few dollars of compute. Our [DALL-E 2 vs Stable Diffusion comparison](/compare/dalle-2-vs-stable-diffusion-2023/) covers what the open model can and cannot do.

Midjourney, which we cover in our [Midjourney review](/reviews/01-midjourney-review/), produces far prettier images than Lensa but cannot learn your face at all. It is the better tool for art and the wrong tool for avatars. If you want to try it anyway, start with our [guide to making AI art in Midjourney](/tutorials/01-create-ai-art-midjourney/).

## Who it's for

- **Anyone who wants a fun new profile picture** and is fine with a 20 percent hit rate.
- **Curious non-technical people** who want to see what generative AI does with their own face without learning anything.

Who should skip it: anyone who needs a professional headshot (hire a photographer), anyone uncomfortable uploading face data, and anyone who shares the artist community's objections to how these models were trained.

## Verdict

Lensa's Magic Avatars are a clever, well-packaged novelty. For the price of a coffee you get a few genuinely striking portraits, a pile of near-misses, and a lesson in what image models get wrong. It is not a product you keep paying for, and the subscription flow is designed to make you forget that.

Buy one pack with 20 good selfies, cancel the trial the same day, and enjoy the good ones. Three and a half out of five.
