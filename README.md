<p align="center">
  <img src="https://img.shields.io/badge/license-ELv2-green?style=flat-square" alt="License" />
  <img src="https://img.shields.io/badge/status-early%20development-yellow?style=flat-square" alt="Status" />
  <img src="https://img.shields.io/github/stars/duitar/duitar?style=flat-square&color=green" alt="Stars" />
</p>

<h1 align="center">Duitar</h1>

<p align="center">
  <strong>The AI open-source documentation platform.</strong><br />
  Generate, host, and maintain your documentation — automatically.
</p>

<p align="center">
  <a href="https://duitar.dev">Website</a> &middot;
  <a href="https://duitar.dev/docs">Documentation</a> &middot;
  <a href="https://github.com/duitar/duitar/issues">Issues</a> &middot;
  <a href="https://github.com/duitar/duitar/discussions">Discussions</a>
</p>

---

## What is Duitar?

Duitar is a documentation platform where AI generates content from your code, you write with an AI co-author, and everything is hosted on a beautiful docs site that stays current automatically.

**Three layers, one product:**

- **The Docs Home** — Beautiful hosted docs at `yourproject.duitar.dev`. AI search + chat, llms.txt, MCP server, dark/light mode, versioned docs, custom domains.

- **The Creation Engine** — AI generates from code diffs and API specs. Rich editor with `/diagram`, `/table`, `/code` commands. Upload PDFs — AI parses into web pages. Import from Mintlify, GitBook, Notion, and 9 more.

- **The Maintenance Engine** — Connected sources watched for changes. Stale detection with severity alerts. Docs CI/CD validates links, code syntax, and style guides. Publish to widget, email, Slack, webhooks.

## Features

| Category | Features |
|---|---|
| **AI Generation** | Release notes from diffs, API docs from types/specs, config guides, setup guides, PDF parsing |
| **Multi-audience** | Developer, product, end-user, internal — same change, different versions |
| **Multi-SCM** | GitHub, GitLab, Bitbucket, Azure DevOps |
| **Hosting** | Custom domains, dark/light mode, versioned docs, SEO, RSS, OG images |
| **AI-Native** | AI search + chat, llms.txt, MCP server, content negotiation |
| **Editor** | Rich editor with AI co-author, collaborative editing, inline comments, revision diffing |
| **Docs CI/CD** | Link validation, code syntax checks, API consistency, style guide enforcement |
| **Publishing** | In-app widget, email digest, Slack, webhooks, PDF export |
| **Maintenance** | Stale detection, health score, changelog-to-docs pipeline, scheduled publishing |
| **i18n** | AI-assisted translation, locale URLs, translation staleness tracking |
| **Templates** | Changelog, Product Docs, API Reference, Hardware Manual, Knowledge Base, Internal Docs |
| **Migration** | Import from Mintlify, GitBook, Docusaurus, ReadMe, Notion, Confluence, and more |
| **Enterprise** | SSO/SAML, audit log, documentation federation, on-prem, RBAC |

## Quick Start

```bash
npx duitar init
```

Or clone and run locally:

```bash
git clone https://github.com/duitar/duitar.git
cd duitar
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

```
Next.js 14          React 18            Tailwind CSS
Tiptap              Framer Motion       Lucide React
Anthropic SDK       Vercel AI SDK       Supabase (Auth + DB + Storage)
Inngest             Octokit             Resend
Stripe              pgvector            Mermaid
```

## Project Structure

```
duitar/
├── app/
│   ├── page.tsx                    Landing page
│   ├── login/page.tsx              Auth (GitHub OAuth + email)
│   ├── docs/page.tsx               Product docs
│   ├── home/page.tsx               Dashboard
│   ├── (app)/                      Authenticated dashboard routes
│   │   ├── projects/               Project management
│   │   ├── pages/                  Doc page editor
│   │   ├── sources/                Source connections
│   │   ├── alerts/                 Stale detection alerts
│   │   ├── analytics/              Usage analytics
│   │   └── settings/               Account + billing
│   └── [projectSlug]/              Hosted docs site (public)
└── ...
```

## Self-Hosting

Duitar is licensed under the [Elastic License 2.0](LICENSE), which means you can self-host it on your own infrastructure.

```bash
# Clone the repository
git clone https://github.com/duitar/duitar.git
cd duitar

# Copy environment variables
cp .env.example .env

# Install dependencies
npm install

# Run database migrations
npx supabase db push

# Start the development server
npm run dev
```

**Requirements:**
- Node.js 18+
- PostgreSQL (with pgvector extension)
- Supabase project (or self-hosted Supabase)
- Anthropic API key (for AI features)

## Contributing

We welcome contributions. Please read our contributing guidelines before submitting a PR.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## License

Duitar is licensed under the [Elastic License 2.0 (ELv2)](LICENSE).

**You can:**
- Use Duitar for free, forever
- Modify the source code
- Self-host on your own infrastructure
- Use commercially

**You cannot:**
- Offer Duitar as a managed service to third parties
- Remove or modify the license/attribution

This is the same license used by Elasticsearch, Kibana, and CockroachDB.

## Links

- [Website](https://duitar.dev)
- [Documentation](https://duitar.dev/docs)
- [GitHub Discussions](https://github.com/duitar/duitar/discussions)
- [Issue Tracker](https://github.com/duitar/duitar/issues)
- [Changelog](https://duitar.dev/changelog)

---

<p align="center">
  <sub>Built by <a href="https://github.com/duitar">Duitar</a>. Open source under ELv2.</sub>
</p>
