---
title: "How to Use Copilot Pro in Word, Excel, and PowerPoint (2024): A Practical Setup Guide"
description: "Step-by-step guide to Copilot Pro in Word, Excel, PowerPoint, and Outlook: requirements, setup, prompts that work, and the limits to know in 2024."
date: 2024-02-14
updated: 2025-09-22
categories: ["Tutorials"]
tags: ["microsoft-copilot", "copilot-pro", "microsoft-365", "excel", "word", "productivity"]
affiliate_disclosure: true
faqs:
  - question: "Do I need a Microsoft 365 subscription to use Copilot Pro?"
    answer: "For the in-app features, yes. Copilot Pro on its own gives you the standalone Copilot chat with priority model access and extra image credits. Copilot inside Word, Excel, PowerPoint, Outlook, and OneNote only appears if you also have a Microsoft 365 Personal or Family subscription on the same account."
  - question: "Does Copilot Pro work with my work or school account?"
    answer: "No. Copilot Pro is for personal Microsoft accounts such as outlook.com, hotmail.com, or live.com. Work and school accounts need Copilot for Microsoft 365, which is sold to organizations at a higher per-user price. This mismatch is the most common reason people pay for Copilot Pro and then see nothing in their Office apps."
  - question: "Why can't I see Copilot in Excel?"
    answer: "As of February 2024, Copilot in Excel is a preview with strict conditions. Your file must be saved to OneDrive with AutoSave turned on, your data must be formatted as an Excel table, and the language must be English. Check all three, update Excel to the latest version, and restart the app."
---

Copilot Pro launched in mid-January, and it is the first time individuals can get Microsoft's AI assistant inside Word, Excel, PowerPoint, and Outlook without an enterprise contract. It costs $20 a month, the same as ChatGPT Plus, but the setup requirements are confusing enough that a lot of people are paying and then wondering why nothing shows up.

This guide walks through what you need, how to turn it on, and what actually works in each app right now. It is based on three weeks of daily use on Windows and Mac.

## What you'll need

- **A Microsoft 365 Personal or Family subscription.** Copilot Pro on its own only unlocks the standalone Copilot chat. The in-app features require a consumer Microsoft 365 plan on the same account.
- **A personal Microsoft account.** Outlook.com, Hotmail, or Live addresses. Work and school accounts are a different product, Copilot for Microsoft 365, with a different price and licensing model.
- **A Copilot Pro subscription**, $20 per user per month as of February 2024. It is per person, not per family, even on a Family plan.
- **Updated Office apps.** Copilot appears on Windows, Mac, the web, and mobile, but features roll out unevenly. Update to the latest version before troubleshooting anything else.
- **Files saved to OneDrive with AutoSave on.** This is mandatory for Excel and needed for Word to reference other documents.

## Step 1 — Buy Copilot Pro and confirm it activated

Buy Copilot Pro from the Microsoft Store page while signed in with the same Microsoft account that holds your Microsoft 365 subscription. That last part matters. If you use one account for Microsoft 365 and another for Copilot Pro, the apps will never connect the two.

After purchase, open Word. A Copilot button should appear on the Home ribbon and a small Copilot icon should float in the left margin of a blank document. If it does not, sign out of the app, sign back in, and restart. Activation can take a little while to propagate. If it still does not appear after a day, check your account page to confirm both subscriptions are on the same address.

## Step 2 — Word: drafting, rewriting, and summarizing

Word is where Copilot Pro is most polished, and where you should start.

**Draft with Copilot.** In a blank document, click the margin icon and type what you want. Be specific about audience, length, tone, and structure. "Write a 300-word welcome email for new gym members, friendly tone, three short paragraphs, end with a call to book an intro session" produces something usable. "Write a welcome email" produces filler.

**Reference your own files.** Type a forward slash in the draft prompt to attach up to three documents from OneDrive. Copilot pulls facts and phrasing from them. This is the feature that separates Copilot from pasting into a chatbot: "Draft a one-page summary of /Q4-report.docx for the board" works without copying anything.

**Rewrite selected text.** Highlight a paragraph, click the Copilot icon, and choose Rewrite. You get three variants and can nudge the tone toward casual, professional, or concise. There is also a Visualize as a Table option that turns a list into a table, which is handy for turning meeting notes into a tracker.

**Chat with the document.** Open the Copilot pane from the ribbon and ask questions about what is on the page. "Summarize this document in five bullets," "list every action item," or "where should I add a section on pricing" all work well on documents up to a few dozen pages.

Copilot's drafts still read like a competent generalist wrote them. Plan on editing everything. The win is that you start from a structured page rather than a blank one.

## Step 3 — Excel: what works, and the big caveat

Copilot in Excel is labeled preview, and it behaves like one. Before it will do anything:

1. Save the workbook to OneDrive and turn on AutoSave.
2. Format your data as an Excel table. Select the range and press Ctrl+T or Cmd+T.
3. Use English. Other languages are not supported yet.

Once those are true, the Copilot pane can do four useful things:

- **Highlight, sort, and filter.** "Highlight the ten rows with the highest revenue" or "filter to orders from March" apply formatting and filters to the table.
- **Add formula columns.** "Add a column that calculates margin as profit divided by revenue" proposes a formula, explains it, and inserts it when you approve. This is the standout feature. It gets the formula right most of the time and explains its logic, so you can catch mistakes.
- **Insights and charts.** "Show me sales by region as a chart" or "what trends do you see" produce a chart or a short analysis. Results are hit or miss on anything beyond simple aggregation.
- **Explain formulas.** Select a cell and ask what the formula does.

What it will not do: edit cells outside a table, write VBA macros, pull data from other workbooks, or make sense of sheets with merged headers and notes scattered around the data. If your spreadsheet is messy, clean it first or Copilot will refuse or guess.

If you mainly want formula help and your data is not in OneDrive, our guide to [using ChatGPT for Excel formulas](/tutorials/use-chatgpt-for-excel-formulas/) still covers the faster route for one-off questions.

## Step 4 — PowerPoint: build a deck from a document

PowerPoint is the second-strongest app, and it has one trick that saves real time.

**Create a presentation from a Word document.** Open a new deck, open the Copilot pane, and type "Create a presentation from" followed by a slash to pick a file from OneDrive. Copilot builds an outline, slides, and speaker notes from the document. It works best when the Word file uses proper heading styles, because Copilot uses them to decide where slides break.

**Create from a prompt.** "Create a presentation about onboarding remote employees" produces a serviceable deck with stock imagery. It is generic, but it is a start.

**Edit an existing deck.** "Add a slide about pricing tiers," "organize this presentation" (which adds section dividers), and "summarize this deck" all work. Designer suggestions appear alongside, so layouts stay reasonably clean.

The main pitfall: Copilot does not respect your custom template well when generating from scratch. Apply your template to a blank deck first, then ask Copilot to create the presentation inside it.

## Step 5 — Outlook and OneNote

**Outlook** support is the most restricted. Copilot works in the new Outlook for Windows, Outlook on the web, Mac, and mobile, and only for personal accounts. Classic Outlook on Windows does not have it. Once you are in a supported client you get Draft with Copilot for writing replies, Coaching by Copilot for feedback on tone and clarity of a draft, and thread summaries at the top of long conversations. The summaries are the feature I use most.

**OneNote** gets a Copilot pane that can summarize a page or section, create a to-do list from notes, and rewrite passages. It is useful for turning messy meeting notes into a clean recap.

## Step 6 — The standalone Copilot and Designer

Copilot Pro also upgrades the standalone Copilot app and website. You get priority access to GPT-4 Turbo during busy periods and a faster response mode, plus 100 daily boosts for image generation in Designer, which runs on DALL-E 3. If you have been using the free Copilot and hitting slowdowns, this alone is a noticeable change. Our [Microsoft Copilot vs ChatGPT comparison](/compare/microsoft-copilot-vs-chatgpt-2024/) goes deeper on how the standalone chat stacks up.

## Prompts that work

- "Summarize this document for someone who has not read it, in five bullets, then list open questions."
- "Rewrite the selected text to be half as long without losing the numbers."
- "Add a column that flags any row where the due date is before today."
- "Create a presentation from /project-brief.docx with no more than eight slides."
- "Summarize this email thread and tell me what I have been asked to do."

The pattern is the same everywhere: name the output, give a length, and point at a file when you can.

## Pitfalls to avoid

- **Wrong account type.** Work accounts will never see Copilot Pro features. Check this first.
- **Excel's preview limits.** No table, no OneDrive, no Copilot.
- **Uneven rollout.** A feature on Windows may not be on Mac or the web yet. Check the other platform before assuming it is broken.
- **Confident summaries.** Copilot summaries occasionally invent an action item or drop a number. Verify anything you forward.
- **Total cost.** Copilot Pro plus Microsoft 365 Personal comes to roughly $27 per month as of February 2024. Budget for both.

## Is it worth it compared to ChatGPT Plus?

If your work lives in Office files, Copilot Pro does something no chatbot does: it edits the document you are already in and reads the files you already have. If most of your AI use is brainstorming, coding, or research, ChatGPT Plus is the more capable general assistant, and our [ChatGPT Plus value breakdown](/is-chatgpt-plus-worth-20-dollars/) covers that case. Google's [Gemini Advanced](/reviews/gemini-advanced-review/), which launched last week, promises similar Workspace integration but has not shipped it yet.

The honest summary after three weeks: Word and PowerPoint earn the money, Excel is promising but not ready, and Outlook is useful only if you have already moved to the new client.
