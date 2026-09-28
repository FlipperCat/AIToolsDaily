---
title: "How to Write Excel VBA Macros with ChatGPT (2023): A Safe, Step-by-Step Workflow"
description: "Use ChatGPT to write Excel VBA macros that actually run: how to describe your workbook, test on a copy, fix errors, and avoid macros that destroy data."
date: 2023-02-16
updated: 2025-10-02
categories: ["Tutorials"]
tags: ["chatgpt", "excel", "vba", "macros", "automation", "spreadsheets"]
affiliate_disclosure: true
faqs:
  - question: "Do I need to know VBA to use ChatGPT for macros?"
    answer: "No, but you need to know enough to test the result. You should be able to open the VBA editor, paste code into a module, run it, and read an error message. This guide covers those basics. You don't need to write VBA from scratch."
  - question: "Can a ChatGPT macro damage my workbook?"
    answer: "Yes. Macros can delete rows, overwrite cells, and change many sheets at once, and Excel's undo does not reverse most macro actions. Always run a new macro on a copy of the file first, and ask ChatGPT to add a confirmation prompt before any destructive step."
  - question: "Why does the macro work on ChatGPT's example but fail on my file?"
    answer: "Usually because ChatGPT assumed a sheet name, column layout, or header row that doesn't match your workbook. Give it the exact sheet names, the columns, and a few sample rows, and ask it not to hard-code the last row."
  - question: "Is the free version of ChatGPT good enough for VBA?"
    answer: "For most everyday macros, yes. The free version handles loops, formatting, filtering, and simple reports well. ChatGPT Plus gives faster responses and better availability at busy times, but it uses the same kind of model, so don't expect it to remove the need for testing."
---

VBA is the language behind Excel macros. It's old, it's quirky, and it still runs a huge amount of office work. It's also a near-perfect fit for ChatGPT: the tasks are small, the language is well documented, and there are decades of example code online for the model to have learned from.

The catch is that a macro can change hundreds of cells in a second, and Excel's undo button usually can't reverse it. So the workflow below emphasizes testing as much as prompting. If you've used ChatGPT for other code, the approach will feel familiar. It builds on our [guide to debugging code with ChatGPT](/tutorials/debug-code-with-chatgpt-2023/).

## Before You Start

You need:

- Excel for Windows or Mac with the **Developer** tab enabled (File > Options > Customize Ribbon > check Developer).
- A ChatGPT account. The free version works fine for this.
- A **copy** of the workbook you want to automate. Never test a new macro on the only copy of real data.

To save a workbook with macros, use the `.xlsm` format. A regular `.xlsx` file drops VBA code when you save.

## Step 1: Describe the Workbook, Not Just the Task

The most common failure is a macro written for a workbook that doesn't exist. ChatGPT can't see your file, so it guesses sheet names and columns. Give it the facts up front:

> I have an Excel workbook with a sheet named "Orders". Row 1 is headers. Columns: A = Order ID, B = Order Date, C = Customer, D = Region, E = Amount. The data has about 5,000 rows, and the number changes every week.
>
> Write a VBA macro that copies every row where Region is "West" to a new sheet named "West Orders", including the header row. If "West Orders" already exists, clear it first. Don't hard-code the last row.

Three details matter here:

1. **Exact sheet names and column letters.** Spelling matters, including capitals and spaces.
2. **How the data changes.** "The row count changes weekly" stops ChatGPT from writing `Range("A1:E5000")`.
3. **What happens on the second run.** Macros run repeatedly. Tell ChatGPT what to do if the output already exists.

## Step 2: Ask for Comments and a Safety Check

Add this to your prompt, or send it as a follow-up:

> Add comments explaining each section. Before deleting or clearing anything, show a Yes/No message box asking me to confirm. Use Option Explicit and declare all variables.

`Option Explicit` makes VBA reject undeclared variables, which catches typos that would otherwise fail silently. The confirmation box is your safety net if you run the macro on the wrong sheet.

## Step 3: Paste the Code Into a Module

1. Open your **copy** of the workbook.
2. Press **Alt + F11** (Windows) or **Option + F11** (Mac, may vary by keyboard) to open the VBA editor.
3. In the left panel, right-click your workbook name, then choose **Insert > Module**.
4. Paste the code into the blank module.
5. Close the editor.

Run the macro from **Developer > Macros**, select it, then click **Run**.

## Step 4: Test With Edge Cases

A macro that works once isn't necessarily correct. Before you trust it, test the cases that break naive code:

- **An empty filter result.** What happens if no rows match "West"?
- **Blank cells** in the middle of the data.
- **Extra spaces or different capitalization**, such as "west " vs "West".
- **Running it twice in a row.** Does it duplicate data or clear and rebuild correctly?
- **A much larger dataset.** Duplicate your rows a few times and see whether it slows to a crawl.

If a case fails, describe exactly what happened to ChatGPT. "It copied the header row twice when I ran it a second time" gets a much better fix than "it doesn't work."

## Step 5: Fix Errors by Pasting the Exact Message

When VBA hits an error, it shows a dialog like "Run-time error '9': Subscript out of range" and highlights a line in yellow if you click **Debug**. Give ChatGPT all of it:

> The macro fails with "Run-time error '9': Subscript out of range" on this line:
> `Set ws = ThisWorkbook.Sheets("Order")`
> My sheet is actually named "Orders".

Some common errors and what they usually mean:

| Error | Usual cause |
|-------|-------------|
| Run-time error 9: Subscript out of range | A sheet or workbook name doesn't match |
| Run-time error 1004 | A range reference is invalid, or the sheet is protected |
| Compile error: Variable not defined | A typo in a variable name (good, `Option Explicit` caught it) |
| Run-time error 13: Type mismatch | Text in a column the macro expects to contain numbers or dates |
| Macro runs but nothing happens | The filter condition doesn't match your data exactly |

## Step 6: Ask for Speed Improvements Only After It Works

Once the macro is correct, ask ChatGPT to make it faster:

> This works but takes 40 seconds on 20,000 rows. Can you speed it up? Keep the behavior identical.

Typical improvements include turning off screen updating and automatic calculation during the run, using AutoFilter or arrays instead of looping cell by cell, and avoiding `.Select`. Re-test with your edge cases after any change. "Keep the behavior identical" is a request, not a guarantee.

## Good Tasks to Start With

These are reliable wins for a first macro:

- Split one sheet into many sheets by a column value (region, rep, month)
- Standardize formatting across every sheet in a workbook
- Delete rows that are blank or match a condition (test carefully)
- Combine the same range from multiple sheets into one summary sheet
- Export each sheet as a separate PDF or CSV
- Add a timestamp to a cell whenever a row changes

For pattern matching inside cell text, pair this workflow with our guide on [writing regular expressions with ChatGPT](/tutorials/write-regex-with-chatgpt-2023/). VBA can use regex through the VBScript RegExp library.

## Pitfalls to Avoid

**Trusting code you can't read at all.** You don't need to write VBA, but ask ChatGPT to explain any line you don't understand. If an explanation mentions deleting, saving, or closing files, read it carefully.

**Invented properties and methods.** ChatGPT sometimes produces methods that don't exist in VBA or belong to a different Office app. The compile error usually catches these. Paste the error back and ask for a standard VBA alternative.

**Hard-coded paths.** If a macro saves or opens files, it may include a path like `C:\Users\John\Desktop`. Replace it or ask ChatGPT to prompt for a folder.

**Pasting sensitive data.** Describe your columns with fake sample rows. Don't paste customer names, salaries, or financial records into ChatGPT. Conversations may be reviewed to improve the service.

**Macro security warnings.** Excel blocks macros in files from the internet or email by default. That's intentional. Don't lower your macro security settings globally just to run one file.

## When Not to Use VBA

VBA isn't always the right tool. If a formula can do the job, a formula is easier to maintain and doesn't need macro permissions. Pivot tables, Power Query, and built-in filters cover many "automation" requests without any code. You can ask ChatGPT directly: "Is there a way to do this without VBA?" It will often suggest a simpler formula-based approach.

For anything involving databases, it's often cleaner to query the data at the source with SQL than to pull it into Excel and reshape it with a macro. ChatGPT can help with SQL too, using the same describe-test-fix loop.

## The Bottom Line

ChatGPT turns VBA from "find a forum post from 2009 and adapt it" into "describe what you want and test the result." Most everyday macros take minutes instead of an afternoon. The quality of the result depends on two habits: describe your workbook precisely, and test on a copy with edge cases before you trust it. Do both, and you'll automate a lot of repetitive spreadsheet work without touching real data until the macro has earned it.
