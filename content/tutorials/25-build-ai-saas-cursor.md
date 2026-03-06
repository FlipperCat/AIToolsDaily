---
title: "How to Build a SaaS Product with Cursor AI in a Weekend"
date: 2024-11-15
updated: 2026-02-28
categories: ["Tutorials"]
tags: ["cursor", "ai-coding", "saas", "full-stack", "startup"]
description: "Step-by-step guide to building a functional SaaS product using Cursor AI IDE. From idea to deployed product in 48 hours with AI-assisted development."
---

Cursor AI has changed how fast you can build software. This tutorial shows how to go from idea to deployed SaaS in a weekend.

## What We're Building

A simple but complete SaaS: a URL shortener with analytics. It includes:
- User authentication
- URL creation and management
- Click tracking and analytics
- Stripe billing integration

## Prerequisites

- Cursor IDE installed
- Node.js 18+
- A Vercel account (free)
- A Stripe account (free test mode)

## Part 1: Project Setup (Hour 1)

### Create Project Structure

Open Cursor and use Composer (Cmd/Ctrl + I):

```
Create a Next.js 14 project with:
- App Router
- TypeScript
- Tailwind CSS
- Prisma with PostgreSQL
- NextAuth.js for authentication
- shadcn/ui components

Set up the project structure with auth, dashboard, and API routes.
```

Cursor will generate the entire project scaffolding.

### Environment Configuration

Ask Cursor:
```
Set up environment variables for:
- DATABASE_URL for PostgreSQL
- NEXTAUTH_SECRET and NEXTAUTH_URL
- STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET
- Add a .env.example file
```

## Part 2: Authentication (Hour 2-3)

### Set Up Auth

In Composer:
```
Implement NextAuth.js with:
- Email magic link login
- Google OAuth
- Session handling
- Protected routes middleware

Create login and signup pages using shadcn/ui components.
```

### Test Auth Flow

Run the dev server and verify:
- Magic link emails send
- OAuth redirects work
- Sessions persist

## Part 3: Core Features (Hours 4-8)

### Database Schema

Ask Cursor:
```
Create Prisma schema for:
- User model (linked to NextAuth)
- Link model (shortCode, originalUrl, userId, createdAt)
- Click model (linkId, timestamp, referrer, country, device)

Run migration after generating.
```

### URL Shortening API

```
Create API routes for:
- POST /api/links - Create shortened URL
- GET /api/links - List user's links
- DELETE /api/links/[id] - Delete a link
- GET /[shortCode] - Redirect and track click

Include proper error handling and validation.
```

### Dashboard UI

```
Build a dashboard page with:
- Form to create new short links
- Table of user's links with click counts
- Copy-to-clipboard functionality
- Delete link button with confirmation

Use shadcn/ui components throughout.
```

## Part 4: Analytics (Hours 9-12)

### Click Tracking

```
Enhance the redirect route to track:
- Timestamp
- Referrer URL
- Country (from IP using free geo API)
- Device type (from user agent)

Store in Click model.
```

### Analytics Dashboard

```
Create an analytics page for each link showing:
- Total clicks
- Clicks over time chart
- Top referrers
- Geographic distribution
- Device breakdown

Use Recharts for visualizations.
```

## Part 5: Billing (Hours 13-16)

### Stripe Integration

```
Implement Stripe subscription:
- Free tier: 10 links, basic analytics
- Pro tier ($9/mo): Unlimited links, full analytics
- Checkout session creation
- Webhook handling for subscription events
- Billing portal for management
```

### Enforce Limits

```
Add middleware to check subscription status.
Free users limited to 10 links.
Show upgrade prompts when limits reached.
```

## Part 6: Polish and Deploy (Hours 17-20)

### Landing Page

```
Create a marketing landing page with:
- Hero section explaining the product
- Feature highlights
- Pricing comparison table
- FAQ section
- Call-to-action buttons
```

### Deploy to Vercel

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Final Testing

- Full user flow from signup to creating links
- Billing flow in Stripe test mode
- Analytics accuracy

## Tips for Cursor-Assisted Development

### Be Specific in Prompts

Bad: "Add analytics"
Good: "Add click tracking that records timestamp, referrer, and country for each link redirect"

### Use Composer for Multi-File Changes

Composer understands your entire codebase and can modify multiple files coherently.

### Iterate Through Chat

Use the chat panel for quick questions, debugging, and small changes.

### Review Generated Code

AI-generated code needs review. Check for:
- Security issues
- Performance problems
- Edge cases

## What You've Built

In roughly 20 hours of active development, you have:
- Full authentication system
- Core product functionality
- Analytics dashboard
- Subscription billing
- Deployed production site

## Next Steps

- Add custom domains
- Implement link expiration
- Build API for integrations
- Add team features

This is the power of AI-assisted development: building in days what previously took weeks.
