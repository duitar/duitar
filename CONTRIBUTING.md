# Contributing to Duitar

Thanks for your interest in contributing to Duitar. This document covers everything you need to get started.

## License

Duitar is licensed under the [Elastic License 2.0 (ELv2)](./LICENSE). By contributing, you agree that your contributions will be licensed under the same license. Every source file must include the license header:

```
// Copyright 2026 Duitar
// Licensed under the Elastic License 2.0
// https://www.elastic.co/licensing/elastic-license
```

## Before You Start

- **Check existing issues.** Someone may already be working on the same thing.
- **Open an issue first for large changes.** Bug fixes and small improvements can go straight to a PR. New features, refactors, or architectural changes should start with an issue so the approach can be discussed before you write code.
- **Don't open PRs for features not on the roadmap without an issue.** We want to keep scope focused. If you have an idea, open an issue tagged `proposal` and wait for a maintainer to confirm it's in scope.

## Setting Up Locally

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn
- A Supabase project (free tier works)
- A GitHub account (for OAuth testing)

### Steps

```bash
# Clone the repo
git clone https://github.com/your-org/duitar.git
cd duitar

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Fill in your Supabase and GitHub App credentials in .env.local

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Code Standards

### TypeScript

- **Strict mode.** No `any` types.
- **Server Components by default.** Only use `"use client"` when client interactivity is needed.
- **Server Actions for mutations.** Not API routes for dashboard operations.

### Styling

- Tailwind CSS only. No CSS modules, no styled-components.
- **Sharp corners (0px border-radius).** Exception: status dots and avatar circles.
- **Geist Sans + Geist Mono.** No other fonts.
- **13px base font size.** Dense developer-tool aesthetic.
- See `.internal/DESIGN.md` for the full design spec (maintainers only).

### Icons

- `lucide-react` only, `strokeWidth={1.8}`.
- Brand icons (GitHub, Twitter, etc.) are inline SVGs — do not import from lucide.

### Commits

- Write clear commit messages. One logical change per commit.
- Use present tense: "Add session timeout config" not "Added session timeout config".
- Reference issue numbers where applicable: "Fix stale detection for renamed files (#142)".

## Pull Request Process

### 1. Branch

Branch from `main`. Use a descriptive name:

```
fix/stale-detection-renamed-files
feat/gitlab-source-provider
docs/api-reference-webhooks
```

### 2. Make Your Changes

- Keep PRs focused. One feature or fix per PR. Don't bundle unrelated changes.
- Add or update tests if your change affects behavior.
- Run `npm run lint` and `npm run build` before pushing. Both must pass.
- Don't add unrelated formatting changes, import reordering, or whitespace cleanup — it makes review harder.

### 3. Write the PR Description

Every PR must include:

- **What** — What does this PR do? One or two sentences.
- **Why** — What problem does it solve? Link to the issue.
- **How to test** — Steps a reviewer can follow to verify the change works.
- **Screenshots** — If the change is visual, include before/after screenshots.

### 4. Review

- A maintainer will review your PR. Be patient — we review everything but it may take a few days.
- Respond to review comments. If you disagree with feedback, explain your reasoning — discussion is welcome.
- Once approved, a maintainer will merge it. Don't merge your own PRs.

### 5. What We Look For in Review

- Does the code follow the standards above?
- Is the change scoped correctly (not too broad, not too narrow)?
- Are there security implications? (SQL injection, XSS, exposed secrets, RLS bypass)
- Does it work on mobile / different screen sizes (for frontend changes)?
- Is the ELv2 license header present on new files?

## What We Accept

- Bug fixes with a clear reproduction case
- Performance improvements with benchmarks
- Documentation improvements (typos, clarity, missing sections)
- Accessibility improvements
- Test coverage improvements
- Features that are tracked in an open issue and confirmed by a maintainer

## What We Don't Accept

- Features not discussed in an issue first
- Changes that remove or weaken the ELv2 license
- PRs that wrap Duitar as a managed service (violates the license)
- Cosmetic-only changes (reformatting, reordering imports) unless part of a larger fix
- Dependencies without justification — every new dependency adds maintenance burden

## Reporting Bugs

Open an issue with:

- **Steps to reproduce** — Exact steps, starting from a clean state.
- **Expected behavior** — What should happen.
- **Actual behavior** — What actually happens.
- **Environment** — OS, browser, Node version.
- **Screenshots/logs** — If applicable.

## Security Vulnerabilities

**Do not open a public issue for security vulnerabilities.** Email security@duitar.dev with details. We will respond within 48 hours and work with you on a fix before public disclosure.

## Questions?

Open a [Discussion](https://github.com/your-org/duitar/discussions) on GitHub. Issues are for bugs and confirmed feature work — discussions are for questions, ideas, and general conversation.
