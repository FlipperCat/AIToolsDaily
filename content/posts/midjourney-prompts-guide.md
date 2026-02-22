---
title: "Midjourney Prompts: Complete Guide to Better Images"
description: "After 1000+ Midjourney generations, here are the prompt techniques that actually work. Structures, parameters, and examples."
date: 2024-10-02
categories: ["Tutorials"]
tags: ["midjourney", "ai images", "prompts", "image generation", "ai art"]
affiliate_disclosure: true
faqs:
  - question: "How do I write good Midjourney prompts?"
    answer: "Be specific about subject, style, and mood. Include artist or style references. Use parameters like --ar for aspect ratio and --stylize for creativity level. Iterate based on results."
  - question: "What are the best Midjourney parameters?"
    answer: "Most useful: --ar (aspect ratio), --stylize (creativity), --chaos (variation), --no (exclude elements). Start with defaults, add parameters as needed."
  - question: "Why do my Midjourney images look bad?"
    answer: "Usually vague prompts. Add specific style references, lighting descriptions, and composition details. Also try lowering --stylize if results are too abstract."
---

# Midjourney Prompts: From Basic to Professional

After 1000+ generations, I've learned what works. Here's everything about Midjourney prompts.

## The Basic Structure

Every prompt has these elements (in rough order of importance):

```
[Subject] [Style] [Mood/Atmosphere] [Technical details] [Parameters]
```

**Example:**
```
Portrait of a cyberpunk hacker, neon lighting, moody atmosphere,
cinematic photography, 85mm lens --ar 2:3 --stylize 100
```

## Subject: What You Want

Be specific. Vague subjects = vague results.

**Bad:** "A person"
**Better:** "A young woman with short red hair"
**Best:** "A young woman in her 20s with short crimson hair, wearing a leather jacket, confident expression"

### Subject Tips

**Describe:**
- Age/appearance
- Clothing/accessories
- Expression/pose
- Action (if any)

**For objects:**
- Materials
- Condition (old, new, weathered)
- Context/placement

## Style: How It Looks

Style references transform results. Options:

### Art Styles
- Watercolor
- Oil painting
- Digital art
- Pixel art
- Sketch
- Photorealistic

### Artist References
```
in the style of [artist name]
```

**Works well:**
- Studio Ghibli
- Moebius
- Art Nouveau
- Baroque painting
- Wes Anderson

### Photography Styles
```
portrait photography, 85mm lens, shallow depth of field
product photography, white background, studio lighting
street photography, candid, natural light
```

### Era/Aesthetic
```
1980s aesthetic
Victorian era
Cyberpunk
Art Deco
Minimalist
```

## Mood and Atmosphere

Mood words change everything:

**Lighting:**
- Golden hour lighting
- Dramatic lighting
- Soft diffused light
- Neon lighting
- Moody, low-key lighting

**Atmosphere:**
- Ethereal
- Gritty
- Dreamy
- Ominous
- Peaceful
- Chaotic

**Color:**
- Muted colors
- Vibrant colors
- Monochromatic
- Warm tones
- Cool tones

## Technical Details

### Camera/Lens
```
shot on Hasselblad
35mm photography
macro photography
drone shot
wide-angle lens
tilt-shift
```

### Composition
```
rule of thirds
centered composition
bird's eye view
worm's eye view
close-up
full body shot
```

### Quality Modifiers
```
highly detailed
photorealistic
8k resolution
sharp focus
intricate details
```

## Essential Parameters

### Aspect Ratio (--ar)

```
--ar 1:1    (square, default)
--ar 16:9   (landscape/widescreen)
--ar 9:16   (portrait/mobile)
--ar 2:3    (portrait photos)
--ar 3:2    (landscape photos)
```

### Stylize (--stylize or --s)

Controls how much Midjourney interprets your prompt.

```
--stylize 0      (literal, follows prompt closely)
--stylize 100    (default, balanced)
--stylize 250    (more artistic interpretation)
--stylize 500    (highly stylized)
--stylize 1000   (maximum interpretation)
```

**Start low** if you need specific results.

### Chaos (--chaos or --c)

How varied the four results are.

```
--chaos 0    (similar results)
--chaos 50   (moderate variation)
--chaos 100  (maximum variation)
```

**High chaos** for exploration. **Low chaos** when you know what you want.

### No (--no)

Exclude elements.

```
--no text, watermark
--no people
--no blur
```

### Quality (--quality or --q)

Rendering quality (affects credits used).

```
--quality .25   (draft, cheap)
--quality .5    (medium)
--quality 1     (default, full quality)
```

### Version (--v)

Midjourney version.

```
--v 5.2   (current default)
--v 6     (latest)
--niji    (anime style)
```

## Prompt Formulas

### Portrait Formula
```
[Type] portrait of [subject description], [expression],
[lighting], [background], [style] --ar 2:3
```

**Example:**
```
Cinematic portrait of an elderly fisherman with weathered skin,
contemplative expression, golden hour lighting, ocean background,
shot on medium format film --ar 2:3
```

### Product Formula
```
[Product] [material/finish], [background], product photography,
studio lighting, [camera] --ar 4:3
```

**Example:**
```
Luxury watch with rose gold finish, dark marble background,
product photography, dramatic studio lighting, macro lens --ar 4:3
```

### Landscape Formula
```
[Scene description], [time of day], [weather/atmosphere],
[style], [composition] --ar 16:9
```

**Example:**
```
Misty mountain range at dawn, fog rolling through valleys,
ethereal atmosphere, romantic landscape painting style,
panoramic view --ar 16:9
```

### Concept Art Formula
```
[Subject/scene], [genre] concept art, [artist reference],
[mood], detailed, [color palette]
```

**Example:**
```
Ancient temple ruins overgrown with vines, fantasy concept art,
in the style of Feng Zhu, mysterious mood, detailed,
warm earth tones
```

## Advanced Techniques

### Multi-Prompt (::)

Weight different elements.

```
portrait of a woman :: flowers :: 0.5
```

The woman gets more emphasis than flowers.

### Image Prompts

Use images as references by pasting URLs at the start.

```
[image URL] portrait in this style, [additional details]
```

### Remix Mode

Enable in settings. Lets you modify prompts while keeping composition.

### Permutations

Generate multiple variations.

```
a {red, blue, green} car
```

Creates three images with different colors.

## Common Problems and Fixes

### "Results Don't Match My Vision"

**Fix:** Be more specific. Add style references. Lower --stylize.

### "Hands Look Wrong"

**Fix:** Crop hands out with aspect ratio, or regenerate until you get good ones. AI hands are still problematic.

### "Too Abstract/Artistic"

**Fix:** Lower --stylize. Add "photorealistic" or "photograph."

### "Too Literal/Boring"

**Fix:** Increase --stylize. Add mood words. Reference artists.

### "Text in Images"

**Fix:** Use --no text. Midjourney struggles with text.

### "Inconsistent Characters"

**Fix:** Use seed values. Or accept that consistency across images is limited.

## My Workflow

1. **Start simple:** Basic subject + style
2. **Generate four:** See what direction Midjourney takes
3. **Upscale favorites:** Get full resolution
4. **Variation:** Use V buttons on promising results
5. **Refine prompt:** Add/remove based on results
6. **Repeat:** Until satisfied

## Prompt Library

### Quick Styles to Try

**Cinematic:**
```
cinematic scene, dramatic lighting, movie still, anamorphic
```

**Editorial:**
```
editorial photography, Vogue magazine, high fashion, studio
```

**Vintage:**
```
vintage photograph, film grain, muted colors, 1970s aesthetic
```

**Fantasy:**
```
fantasy art, magical atmosphere, ethereal lighting, painterly
```

**Minimal:**
```
minimalist, clean, simple composition, negative space, modern
```

### Copy-Paste Suffixes

Add these to any prompt:

**Quality boost:**
```
, highly detailed, sharp focus, professional
```

**Cinematic look:**
```
, cinematic lighting, dramatic, movie still, 35mm
```

**Painterly:**
```
, oil painting style, brushstrokes visible, classical
```

## Final Tips

1. **Iterate.** First result is rarely final.
2. **Study results.** Learn what words do.
3. **Save good prompts.** Build your library.
4. **Try artist combos.** "Style of X and Y" creates new looks.
5. **Use Discord community.** Learn from others' prompts.

Better prompts = better images. Practice the patterns, then break the rules.
