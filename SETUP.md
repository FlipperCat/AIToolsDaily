# AIToolsDaily.org Setup Guide

Complete guide to deploying your site in ~15 minutes.

## Prerequisites

You need to create these free accounts:
- [ ] **GitHub account** — https://github.com (stores your code)
- [ ] **Netlify account** — https://netlify.com (free hosting)

## Step 1: Install Hugo (One Time)

Hugo is the static site generator that builds your site.

### Windows Installation (Recommended: Chocolatey)

**Option A: Using Chocolatey (easiest)**
```powershell
# Run PowerShell as Administrator, then:
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Then install Hugo:
choco install hugo-extended
```

**Option B: Manual Download**
1. Go to https://github.com/gohugoio/hugo/releases
2. Download `hugo_extended_X.XXX.X_windows-amd64.zip`
3. Extract to `C:\Hugo\bin`
4. Add `C:\Hugo\bin` to your PATH environment variable

**Verify installation:**
```bash
hugo version
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Name it `aitoolsdaily` (or whatever you prefer)
3. Keep it Public (required for free Netlify)
4. Don't add README or .gitignore
5. Click "Create repository"

## Step 3: Push Your Site to GitHub

Open Command Prompt/PowerShell in the site folder and run:

```bash
cd C:\Users\altst\aitoolsdaily

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial site setup"

# Add your GitHub repo as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/aitoolsdaily.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Connect Netlify

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Select your `aitoolsdaily` repository
5. Build settings (Netlify usually auto-detects):
   - Build command: `hugo`
   - Publish directory: `public`
6. Click "Deploy site"

Your site will be live at a random Netlify URL (e.g., `random-name-123.netlify.app`).

## Step 5: Connect Your Domain

1. In Netlify, go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter: `aitoolsdaily.org`
4. Follow Netlify's instructions to update your domain's DNS:
   - Usually: Add a CNAME record pointing to your Netlify URL
   - Or: Change nameservers to Netlify's

DNS propagation takes 15 minutes to 48 hours.

## Step 6: Enable HTTPS

1. In Netlify → Site settings → Domain management → HTTPS
2. Click "Verify DNS configuration"
3. Once verified, click "Provision certificate"

Free SSL certificate will be installed automatically.

---

## Publishing New Content

### Manual Publish (Double-Click)

1. I write new articles to `C:\Users\altst\aitoolsdaily\content\`
2. You run `publish.bat` (double-click it)
3. Site updates automatically in ~30 seconds

### Auto-Publish (Set and Forget)

Set up Windows Task Scheduler to run `publish.bat` daily:

1. Open Task Scheduler
2. Create Basic Task → Name: "Publish AIToolsDaily"
3. Trigger: Daily, pick a time (e.g., 6 AM)
4. Action: Start a program
5. Program: `C:\Users\altst\aitoolsdaily\publish.bat`
6. Finish

Now the site publishes daily without any action from you.

---

## Local Preview

To see changes before publishing:

```bash
cd C:\Users\altst\aitoolsdaily
hugo server
```

Open http://localhost:1313 in your browser.

---

## File Structure

```
aitoolsdaily/
├── config.toml          # Site configuration
├── content/
│   ├── posts/           # Blog posts
│   ├── reviews/         # Tool reviews
│   ├── tutorials/       # How-to guides
│   ├── comparisons/     # X vs Y articles
│   ├── about.md         # About page
│   ├── privacy.md       # Privacy policy
│   └── contact.md       # Contact page
├── layouts/             # HTML templates
├── static/              # Images, CSS, JS
└── public/              # Generated site (don't edit)
```

## Adding New Articles

Create a new `.md` file in the appropriate folder:

```markdown
---
title: "Your Article Title"
description: "SEO description, 150-160 characters"
date: 2024-02-15
categories: ["Reviews"]
tags: ["tag1", "tag2"]
affiliate_disclosure: true
---

Your content here in Markdown format.

## Heading 2

Paragraph text...
```

Save the file, then publish.

---

## Troubleshooting

**Build fails on Netlify:**
- Check Hugo version matches local
- Look at deploy logs for specific error

**Domain not working:**
- DNS takes up to 48 hours
- Verify DNS records are correct

**Changes not appearing:**
- Clear browser cache
- Wait 1-2 minutes for Netlify to rebuild

**Git push fails:**
- Make sure you're logged into GitHub
- Run `git config --global user.email "your@email.com"`
- Run `git config --global user.name "Your Name"`

---

## Support

If you get stuck, the most common issues are:
1. Hugo not installed correctly → Reinstall using Chocolatey
2. Git not configured → Run the git config commands above
3. Wrong branch → Make sure you're on `main` branch

For Netlify-specific issues, check their docs: https://docs.netlify.com
