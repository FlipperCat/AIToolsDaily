---
title: "Claude Code Skills Guide (2026): Package Your Workflows So Claude Uses Them"
description: "Build Claude Code skills: SKILL.md structure, descriptions that trigger reliably, bundled scripts, and when to use skills vs hooks or subagents."
date: 2026-09-14
updated: 2026-09-14
categories: ["Tutorials"]
tags: ["claude-code", "agent-skills", "anthropic", "ai-coding", "developer-workflow"]
affiliate_disclosure: true
faqs:
  - question: "What is the difference between a skill and CLAUDE.md?"
    answer: "CLAUDE.md loads into every session, so it should hold short, always-relevant project facts. A skill loads only its name and description up front and pulls in the full instructions when a task calls for them. Put your five-line rules in CLAUDE.md and your 200-line release checklist in a skill."
  - question: "Do skills work outside Claude Code?"
    answer: "The skill format, a folder with a SKILL.md file, is also supported in Claude's apps and through the API, though the install and sharing steps differ by surface. The frontmatter and progressive-loading model are the same, so a well-written skill usually moves between them with minor edits."
  - question: "Why isn't Claude using my skill?"
    answer: "Almost always the description. Claude decides whether to load a skill based on its description alone, so vague text like 'helps with docs' rarely matches a real request. Name the concrete tasks, file types, and phrases that should trigger it, then start a fresh session and test with a prompt that uses those words."
  - question: "Can a skill run code?"
    answer: "A skill can bundle scripts that Claude runs with its normal tools, subject to your permission settings. The script's source doesn't need to be loaded into context to run, which makes scripts a cheap way to give Claude deterministic behavior for things like validation or file conversion."
---

If you've used Claude Code for a few weeks, you've probably typed the same instructions over and over: "run the linter before committing," "follow our changelog format," "use the staging database, not prod." Some of that belongs in `CLAUDE.md`. But once the instructions get long, or only matter for certain tasks, they belong in a **skill**.

A skill is a folder containing a `SKILL.md` file plus any supporting files. Claude sees each skill's name and description at the start of a session and loads the full contents only when a task matches. You get specialized behavior without paying for it in context on every turn.

This guide walks through building one from scratch, writing a description that actually triggers, and deciding when a skill is the wrong tool. If you're new to the CLI itself, start with our [Claude Code beginner's guide](/tutorials/getting-started-with-claude-code/).

## How skills load (and why it matters)

Skills use what Anthropic calls progressive disclosure. The loading happens in three layers:

1. **Metadata.** At session start, Claude reads only the `name` and `description` from each skill's frontmatter. This costs very little, so you can have dozens installed.
2. **Instructions.** When your request matches a description, Claude reads the body of `SKILL.md`.
3. **Resources.** If the instructions point to other files, such as a reference doc, a template, or a script, Claude opens them only when it needs them.

The practical takeaway: **the description does the routing, the body does the work, and the extra files hold the bulk.** Most skill problems come from getting that split wrong.

## Step 1: Pick where the skill lives

Claude Code looks for skills in a few places:

- **Personal skills:** `~/.claude/skills/<skill-name>/SKILL.md`, available in every project on your machine.
- **Project skills:** `.claude/skills/<skill-name>/SKILL.md` inside a repo. Commit these and your whole team gets them.
- **Plugin skills:** bundled inside plugins you install.

Rule of thumb: if the skill encodes *your* habits (how you like commit messages written), keep it personal. If it encodes *the repo's* conventions (how migrations are named), put it in the project.

## Step 2: Write the SKILL.md

Here's a minimal but real example: a skill for writing database migrations in a Postgres project.

```markdown
---
name: postgres-migrations
description: Create, review, or fix Postgres schema migrations in this repo. Use when the user asks to add a table or column, change an index, write a migration, or roll back a schema change.
---

# Postgres migrations

## Rules
- Migrations live in `db/migrations/` and are named `YYYYMMDDHHMM_short_description.sql`.
- Every migration needs a matching `-- down` section.
- Never drop a column in the same deploy that stops writing to it. Split it into two migrations.
- Add indexes on large tables with `CREATE INDEX CONCURRENTLY`.

## Steps
1. Read the latest three migrations to match style.
2. Write the migration.
3. Run `scripts/check_migration.sh <file>` and fix anything it reports.
4. Summarize the change and any deploy-order risk.

For locking behavior on specific ALTER operations, see `reference/locks.md`.
```

A few format notes:

- `name` should use lowercase letters, numbers, and hyphens, and match the folder name.
- `description` has a length cap (around 1,024 characters). You rarely need half of that.
- Keep the body focused. If it's creeping past a few hundred lines, move detail into separate files and link to them.

## Step 3: Write a description that triggers

This is the step people underinvest in. Claude chooses skills by matching your request against descriptions, so the description should read like a list of the situations where the skill applies.

**Weak:**
> Helps with database stuff.

**Strong:**
> Create, review, or fix Postgres schema migrations in this repo. Use when the user asks to add a table or column, change an index, write a migration, or roll back a schema change.

The strong version says what the skill does *and* when to use it, in the words a user would actually type. Some tips:

- Include trigger phrases ("write a migration," "add a column").
- Mention file types or directories if relevant ("`.sql` files in `db/migrations`").
- Avoid overlap. Two skills with near-identical descriptions will compete, and Claude may pick the wrong one.
- Don't pad it with marketing language. Every word should help with matching.

## Step 4: Bundle scripts for the deterministic parts

Language models are great at judgment and inconsistent at exact procedures. If part of the workflow has a right answer, like validating a filename pattern, checking JSON against a schema, or converting a file, write a script and have the skill call it.

```
.claude/skills/postgres-migrations/
├── SKILL.md
├── reference/
│   └── locks.md
└── scripts/
    └── check_migration.sh
```

Claude runs the script with its normal tools, and your existing permission settings still apply. The script's source doesn't have to be read into context to run, so a 300-line validator costs almost nothing until it's needed. This is the single biggest quality upgrade most skills can get.

## Step 5: Restrict tools when it makes sense

Claude Code supports an `allowed-tools` field in the frontmatter that limits which tools Claude can use while the skill is active. It's useful for read-only skills:

```yaml
---
name: security-audit
description: Audit code for secrets, injection risks, and unsafe dependencies. Use when asked for a security review or vulnerability scan.
allowed-tools: Read, Grep, Glob
---
```

An audit skill that can't edit files can't "helpfully" rewrite your auth module halfway through the review.

## Step 6: Test it properly

1. **Start a new session** after adding or changing a skill, so it's picked up cleanly.
2. **Ask Claude what skills it has.** If yours isn't listed, check the path, folder name, and YAML syntax.
3. **Test with realistic prompts,** not the skill name. "Add a `last_login` column to users" should trigger the migration skill without you mentioning it.
4. **Test the negative case.** Ask something adjacent ("explain this SQL query") and confirm the skill *doesn't* fire when it shouldn't.

In recent versions you can also invoke a skill directly by typing its name as a slash command, which helps with debugging the body separately from the description. Check the Claude Code docs for your version's exact behavior, since the command and skill systems have been converging.

## Skills vs hooks vs subagents vs MCP

Claude Code now has several ways to extend it, and they're easy to confuse:

| Mechanism | What it is | Use it when |
|---|---|---|
| `CLAUDE.md` | Always-loaded project notes | Short rules that apply to nearly every task |
| Skills | On-demand instructions + files | Multi-step procedures needed only sometimes |
| [Hooks](/tutorials/claude-code-hooks-guide-2026/) | Shell commands fired on events | Something must happen every time, no model judgment |
| [Subagents](/tutorials/claude-code-subagents-guide-2026/) | Separate agents with their own context | Isolating a big side-task (research, review) from the main thread |
| [MCP servers](/tutorials/set-up-mcp-servers-claude/) | Connections to external tools and data | Claude needs access to a system it can't reach otherwise |

The key distinction is **guarantees**. A skill is guidance Claude chooses to follow. A hook is enforcement. If "run the formatter" is a nice-to-have, a skill is fine. If an unformatted commit breaks CI, use a hook.

These also combine well. A skill can tell Claude to delegate the research step to a subagent, and a skill can document how to use an MCP server's tools correctly.

## Common pitfalls

- **Stuffing everything into one skill.** A "backend" skill covering migrations, API design, and caching will trigger constantly and load a lot of irrelevant text. Split by task.
- **Duplicating CLAUDE.md.** If the same rule lives in both, they'll drift apart. Pick one home.
- **Writing a novel.** Claude doesn't need motivational context. Rules, steps, and pointers to files work better than paragraphs.
- **Trusting third-party skills blindly.** A skill can include scripts and instructions that shape what Claude does in your repo. Read any skill you didn't write before installing it, the same way you'd review a shell script from the internet.
- **Never revisiting them.** When Claude keeps making the same mistake despite a skill, the fix is usually one clearer rule in the body or a script that catches the error.

## Where to start

Don't try to build a library on day one. Look at your last week of Claude Code sessions and find the instruction you typed most often. Turn that into one skill with a sharp description and, if possible, one validation script. Use it for a week, tighten it, then build the next.

For a broader take on whether the tool is worth adopting at all, see our [Claude Code review](/reviews/claude-code-review/).
