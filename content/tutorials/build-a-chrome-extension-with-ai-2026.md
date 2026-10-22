---
title: "How to Build a Chrome Extension With AI (2026): From Idea to Working Manifest V3"
description: "Build a working Manifest V3 Chrome extension with an AI coding tool: write the spec, prompt the scaffold, audit permissions, debug, and publish it."
date: 2026-10-21
updated: 2026-10-21
slug: "build-a-chrome-extension-with-ai-2026"
categories: ["Tutorials"]
tags: ["chrome-extensions", "claude-code", "cursor", "vibe-coding", "javascript", "manifest-v3"]
affiliate_disclosure: true
faqs:
  - question: "Can I build a Chrome extension with AI if I don't know JavaScript?"
    answer: "Yes, for small single-purpose extensions. The AI writes the code, but you still need to load it, test it, and read error messages back to the AI. Expect to learn a little about the manifest file and the browser's developer tools along the way. Anything that handles logins, payments, or other people's data deserves a review from someone who can read the code."
  - question: "Which AI tool is best for building Chrome extensions?"
    answer: "Agentic tools that can create and edit files directly, such as Claude Code or Cursor, are the most efficient because an extension is several files that have to agree with each other. A chat assistant works too, but you will copy and paste more and lose track of which file version is current."
  - question: "Why does AI-generated extension code often fail to load?"
    answer: "The most common reason is that the model mixes in older Manifest V2 patterns, such as background pages, browserAction, or inline scripts in the popup. Chrome no longer accepts Manifest V2 extensions, so tell the AI explicitly to target Manifest V3 and paste the exact error from chrome://extensions when something breaks."
  - question: "How much does it cost to publish on the Chrome Web Store?"
    answer: "Google charges a small one-time developer registration fee, which has been $5 for years, with no per-extension listing fee. Check the current developer dashboard before you sign up, since policies and fees can change. Private extensions you load yourself in developer mode are free."
---

Chrome extensions are one of the best first projects for AI-assisted coding. They are small, they run on your own machine, and you can see the result in seconds. They also have just enough platform rules to trip up an AI that is working from stale examples.

This guide walks through building a real extension, a "Highlight Saver" that stores selected text from any page and lists it in a popup, using an AI coding tool. The same workflow applies to tab managers, page tweakers, and quick productivity tools.

## What You Need

- Google Chrome (or another Chromium browser such as Edge or Brave)
- A code editor and an AI coding tool. An agentic tool like Claude Code or Cursor is easiest because it writes files directly. If you have not used one before, start with our [Claude Code beginner's guide](/tutorials/getting-started-with-claude-code-2026-a-practical-beginners-guide/).
- An empty project folder
- About an hour for a first build

## Step 1: Write a One-Paragraph Spec

The fastest way to get bad extension code is to prompt "make me a Chrome extension that saves highlights." The AI will guess at the UI, the storage, and the permissions, and it will usually guess generously.

Write a short spec first:

> A Manifest V3 Chrome extension called Highlight Saver. When the user selects text on any page and right-clicks, a context menu item "Save highlight" stores the text, the page URL, and a timestamp in chrome.storage.local. Clicking the toolbar icon opens a popup listing saved highlights, newest first, each with a delete button and a link to the source page. No content scripts, no remote code, minimal permissions.

That last sentence does a lot of work. Chrome's Web Store review favors extensions with a single clear purpose and narrow permissions, so it is worth constraining the AI from the start.

## Step 2: Prompt for the Scaffold

Paste the spec into your AI tool and add a few guardrails:

> Target Manifest V3 only. Use a service worker for the background script. No inline JavaScript in HTML files. Render user content with textContent, never innerHTML. List every permission you request and explain why it's needed.

Asking the AI to justify each permission is the single most useful habit in this workflow. It forces the model to reason about what it actually needs.

A good result for this spec looks roughly like this `manifest.json`:

```json
{
  "manifest_version": 3,
  "name": "Highlight Saver",
  "version": "0.1.0",
  "description": "Save highlighted text from any page and review it in the popup.",
  "permissions": ["storage", "contextMenus"],
  "background": { "service_worker": "background.js" },
  "action": { "default_popup": "popup.html" }
}
```

And a `background.js` along these lines:

```js
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "save-highlight",
    title: "Save highlight",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info) => {
  if (info.menuItemId !== "save-highlight") return;
  const { highlights = [] } = await chrome.storage.local.get("highlights");
  highlights.unshift({ text: info.selectionText, url: info.pageUrl, savedAt: Date.now() });
  await chrome.storage.local.set({ highlights });
});
```

Plus a `popup.html` that loads a separate `popup.js`, which reads `highlights` from storage and builds the list.

## Step 3: Audit the Permissions Before You Run Anything

Open the manifest and read every permission line. Common over-reach from AI tools:

- **`"tabs"` just to read the page URL.** For a context menu click, `info.pageUrl` already contains it.
- **`"<all_urls>"` host permissions or a content script on every site.** Only needed if the extension has to read or change page content on its own.
- **`"scripting"` with no clear use.** Often left over from an approach the model abandoned.

Each unnecessary permission adds a scarier install warning for users and more scrutiny at review time. Ask the AI to remove anything it cannot justify in one sentence.

## Step 4: Load the Extension Unpacked

1. Go to `chrome://extensions`.
2. Turn on **Developer mode** (top right).
3. Click **Load unpacked** and select your project folder.
4. Pin the extension from the puzzle-piece menu so the icon stays visible.

If the manifest has a problem, Chrome shows an error on the card right away. Copy the full error text into your AI tool rather than describing it. The exact message almost always points to the fix.

## Step 5: Test the Real Flow

Select text on a normal web page, right-click, choose **Save highlight**, then open the popup. Then test the edges, because this is where AI-written code usually breaks:

- Very long selections and selections with line breaks
- Pages where the context menu should not work, such as `chrome://` pages and the Web Store itself
- Deleting the last item, and opening the popup when nothing is saved yet
- Text that contains HTML characters like `<script>`. It should display as plain text.

## Step 6: Debug With the Right DevTools Window

Extensions have several separate consoles, and beginners often look in the wrong one:

- **Background service worker:** click the "service worker" link on the extension's card in `chrome://extensions`.
- **Popup:** right-click inside the open popup and choose **Inspect**.
- **Content scripts** (if you add any later): the normal DevTools console of the web page.

When something fails, give the AI three things: what you did, what you expected, and the console output from the correct window. That beats "it doesn't work" every time.

## Step 7: Respect the Service Worker Lifecycle

This is the Manifest V3 detail AI tools get wrong most often. The background service worker does not run forever. Chrome shuts it down when it is idle and starts it again on the next event.

That means:

- **Do not keep state in global variables.** Anything stored in a variable disappears when the worker stops. Use `chrome.storage`.
- **Register event listeners at the top level**, not inside callbacks or after an `await`, so they exist when the worker wakes up.
- **Do not use `setInterval` for long-running timers.** Use the `chrome.alarms` API instead.

If your extension works for a minute and then quietly stops responding, suspect this first.

## Step 8: Add Features One at a Time

Once the core loop works, extend it in small, testable steps: an export-to-Markdown button, a search box in the popup, a keyboard shortcut using the `commands` key in the manifest. Commit to git after each working step so you can roll back when the AI makes a sweeping change that breaks something.

If you are deciding which tool to use for this kind of iterative work, our [Claude Code vs Cursor comparison](/compare/claude-code-vs-cursor-2026-which-ai-coding-tool-should-you-use/) covers how the terminal-agent and IDE approaches differ in practice.

## Step 9: Package and Publish (Optional)

For personal use, loading unpacked is enough. To publish:

1. Register a Chrome Web Store developer account (a one-time fee applies).
2. Add proper icons (16, 48, and 128 px) and a short, accurate description.
3. Write a privacy disclosure. Even "all data stays in local browser storage" counts, and you must state it.
4. Zip the folder contents (not the folder itself) and upload.

Review times vary from a day to several weeks. Narrow permissions and a clear single purpose tend to make it faster.

## Pitfalls to Watch For

- **Manifest V2 leftovers.** `background.page`, `browserAction`, and `chrome.extension.getBackgroundPage()` are signs the model is drawing on outdated examples.
- **Inline scripts.** Manifest V3's content security policy blocks `<script>` blocks and `onclick` attributes in extension pages. Everything goes in separate `.js` files.
- **Remote code.** Loading JavaScript from a CDN is not allowed. Bundle libraries locally, or better, avoid them for small tools.
- **innerHTML with page content.** Selected text comes from arbitrary websites. Treat it as untrusted.
- **Silent scope creep.** Agentic tools sometimes "helpfully" add analytics, sync, or settings pages. Review the diff after each request.

## The Bottom Line

AI makes Chrome extensions approachable for people who have never written one, and much faster for people who have. The workflow that works is boring on purpose: a tight spec, explicit Manifest V3 guardrails, a permission audit, and testing in the real browser after every change. Do that and a working, publishable extension in an afternoon is realistic. For a broader look at AI editors, see our [Cursor Pro review](/reviews/cursor-pro-review-2026-is-the-ai-ide-still-worth-it/).
