# AI Tools Daily - Remaining Tasks

Use this file in a new Claude session: "Execute tasks from TASKS.md for the aitoolsdaily website"

---

## Priority 1: SEO Improvements

### Task 1.1: Add Meta Descriptions to Remaining Posts
**Status:** ~175 posts still need descriptions
**Action:** Add `description:` field to frontmatter (120-155 chars)
**Path:** `content/posts/`
**Command to find missing:**
```bash
grep -L "^description:" content/posts/*.md
```

### Task 1.2: Internal Linking
**Status:** In progress
**Action:** Add contextual links between related articles
**Focus areas:**
- Link tool reviews to comparison articles
- Link tutorials to related tools
- Link news articles to deeper guides
- Add "Related Articles" suggestions in content

---

## Priority 2: Enhanced Article Images

### Task 2.1: Improve SVG Article Image Generator
**File:** `layouts/partials/article-image.html`
**Current:** Basic gradient + dots + single icon
**Goal:** Rich, SaaS-style illustrations with:
- Multiple layered icons (2-3 per image based on tags)
- Abstract tech shapes (hexagons, circuit lines, nodes)
- Floating geometric elements at various opacities
- Glowing/blur effects via SVG filters
- Category-specific styles:
  - Reviews: Star ratings, tool showcase
  - Tutorials: Step indicators
  - Comparisons: VS badge, split design
  - Lists: Numbered elements, stacks
  - News: Breaking/urgent accents

---

## Priority 3: Content Gaps

### Task 3.1: Create More 2026 News Articles
**Path:** `content/news/`
**Need:** More recent news to show site is active
**Topics to cover:**
- Recent AI model releases
- Industry updates
- Tool updates and new features

### Task 3.2: Add More Tool Reviews
**Path:** `content/tools/`
**Missing tools to review:**
- Cursor (AI code editor)
- v0 by Vercel
- Bolt.new
- Lovable
- Gamma
- Recent updates to existing tools

---

## Priority 4: Technical Improvements

### Task 4.1: Schema Markup
**Action:** Add JSON-LD structured data for:
- Articles (Article schema)
- Reviews (Review schema with ratings)
- FAQs (FAQPage schema)
- Organization info

### Task 4.2: Performance
**Check:**
- Image optimization
- CSS/JS minification
- Lazy loading
- Core Web Vitals

---

## Quick Reference

### Site Structure
```
aitoolsdaily/
├── content/
│   ├── posts/          # 370+ articles
│   ├── tools/          # 50+ tool pages
│   ├── news/           # 115+ news articles
│   ├── comparisons/    # 40+ comparisons
│   ├── case-studies/   # 7 case studies
│   └── industry/       # 7 industry guides
├── layouts/
│   ├── index.html      # Homepage
│   └── partials/       # Components
└── static/             # Assets
```

### Current Stats
- Total content: 686+ pieces
- Homepage shows: 685+ articles, 50+ tools, 3 years coverage

### Key Files
- `layouts/index.html` - Homepage
- `layouts/partials/article-image.html` - SVG generator
- `content/about.md` - About page
- `hugo.toml` or `config.toml` - Site config

---

## Completed Tasks (Reference)

- ✅ Created 50+ backdated articles (2023-2026)
- ✅ Fixed date mismatches in articles
- ✅ Added FAQs to key articles
- ✅ Updated site stats to 685+
- ✅ Created Reddit/Twitter content
- ✅ Created Product Hunt package

---

## How to Use This File

In a new Claude session, say something like:
- "Work on Task 1.1 from TASKS.md - add meta descriptions"
- "Implement Task 2.1 - enhance the article image generator"
- "What's the next highest priority task from TASKS.md?"

This keeps context minimal and focused.
