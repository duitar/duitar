"use client"

import { useState } from "react"
import {
  Zap,
  Download,
  KeyRound,
  FileText,
  Users,
  Send,
  GitBranch,
  MessageSquare,
  Mail,
  Webhook,
  Code2,
  Bell,
  ArrowRight,
  Info,
  Terminal,
  ChevronRight,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  GitHub SVG icon (lucide removed brand icons)                       */
/* ------------------------------------------------------------------ */

function GithubIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface SidebarItem {
  label: string
  id: string
  icon: React.ReactNode
}

interface SidebarSection {
  title: string
  items: SidebarItem[]
}

/* ------------------------------------------------------------------ */
/*  Sidebar data                                                       */
/* ------------------------------------------------------------------ */

const sidebarSections: SidebarSection[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Quick Start", id: "quick-start", icon: <Zap size={14} strokeWidth={1.8} /> },
      { label: "Installation", id: "installation", icon: <Download size={14} strokeWidth={1.8} /> },
      { label: "Authentication", id: "authentication", icon: <KeyRound size={14} strokeWidth={1.8} /> },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { label: "Release Notes", id: "release-notes", icon: <FileText size={14} strokeWidth={1.8} /> },
      { label: "Audience Modes", id: "audience-modes", icon: <Users size={14} strokeWidth={1.8} /> },
      { label: "Publish Targets", id: "publish-targets", icon: <Send size={14} strokeWidth={1.8} /> },
    ],
  },
  {
    title: "Integrations",
    items: [
      { label: "GitHub", id: "github", icon: <GitBranch size={14} strokeWidth={1.8} /> },
      { label: "Slack", id: "slack", icon: <MessageSquare size={14} strokeWidth={1.8} /> },
      { label: "Email", id: "email", icon: <Mail size={14} strokeWidth={1.8} /> },
      { label: "Webhooks", id: "webhooks", icon: <Webhook size={14} strokeWidth={1.8} /> },
    ],
  },
  {
    title: "API Reference",
    items: [
      { label: "REST API", id: "rest-api", icon: <Code2 size={14} strokeWidth={1.8} /> },
      { label: "Webhook Events", id: "webhook-events", icon: <Bell size={14} strokeWidth={1.8} /> },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Code block component                                               */
/* ------------------------------------------------------------------ */

function CodeBlock({ filename, children }: { filename: string; children: React.ReactNode }) {
  return (
    <div className="border border-[#222] bg-[#111] overflow-hidden my-4">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#222] bg-[#0a0a0a]">
        <Terminal size={13} strokeWidth={1.8} className="text-[#555]" />
        <span className="text-[12px] font-mono text-[#777]">{filename}</span>
      </div>
      <pre className="p-4 overflow-x-auto text-[13px] leading-relaxed font-mono">
        <code>{children}</code>
      </pre>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Callout component                                                  */
/* ------------------------------------------------------------------ */

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-3 border border-[#0fa968]/20 bg-[#0fa968]/5 p-4 border-l-[3px] border-l-[#0fa968]">
      <Info size={18} strokeWidth={1.8} className="text-[#0fa968] shrink-0 mt-0.5" />
      <p className="text-[13px] text-[#a1a1aa] leading-relaxed">{children}</p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Next-up card component                                             */
/* ------------------------------------------------------------------ */

function NextCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <button className="group text-left border border-[#222] bg-[#0a0a0a] p-4 hover:border-[#333] transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#0fa968]">{icon}</span>
        <span className="text-[14px] font-medium text-[#ededed] group-hover:text-white transition-colors">
          {title}
        </span>
        <ArrowRight
          size={14}
          strokeWidth={1.8}
          className="text-[#555] ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <p className="text-[13px] text-[#777] leading-relaxed">{description}</p>
    </button>
  )
}

/* ------------------------------------------------------------------ */
/*  Syntax highlighting helpers                                        */
/* ------------------------------------------------------------------ */

function Kw({ children }: { children: React.ReactNode }) {
  return <span className="text-blue-600">{children}</span>
}

function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-[#15803d]">{children}</span>
}

function Cmt({ children }: { children: React.ReactNode }) {
  return <span className="text-[#555]">{children}</span>
}

function Fn({ children }: { children: React.ReactNode }) {
  return <span className="text-[#ededed]">{children}</span>
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */

export default function DocsPage() {
  const [activeItem, setActiveItem] = useState("quick-start")

  return (
    <div className="min-h-screen bg-black text-[#ededed] font-sans">
      {/* ---- Top navbar ---- */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-[#222] bg-black/80 backdrop-blur-md">
        <div className="h-full max-w-[1440px] mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <a href="/" className="text-[15px] font-semibold tracking-tight text-white">
            Duitar
          </a>

          {/* Center nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Product", "Pricing", "Docs"].map((link) => (
              <a
                key={link}
                href={link === "Docs" ? "/docs" : link === "Product" ? "/#product" : `/${link.toLowerCase()}`}
                className={`text-[13px] uppercase tracking-[0.5px] font-mono transition-colors ${
                  link === "Docs"
                    ? "text-[#15803d]"
                    : "text-[#ededed] hover:text-[#15803d]"
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#777] hover:text-[#ededed] transition-colors"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="/login"
              className="btn-grid text-[13px] font-mono uppercase tracking-[0.5px] px-4 py-1.5 border-none hover:-translate-y-0.5 transition-all"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* ---- Body ---- */}
      <div className="flex pt-14">
        {/* ---- Left sidebar ---- */}
        <aside className="fixed top-14 left-0 bottom-0 w-[220px] border-r border-[#222] bg-black overflow-y-auto">
          <div className="py-6 px-4">
            {sidebarSections.map((section) => (
              <div key={section.title} className="mb-6">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#555] mb-2 px-2">
                  {section.title}
                </h4>
                <ul className="space-y-0.5">
                  {section.items.map((item) => {
                    const isActive = activeItem === item.id
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => setActiveItem(item.id)}
                          className={`w-full flex items-center gap-2.5 px-2 py-1.5 text-[13px] transition-colors ${
                            isActive
                              ? "text-[#0fa968] border-l-2 border-[#0fa968] pl-[6px] bg-[#0fa968]/5"
                              : "text-[#777] hover:text-[#ededed] border-l-2 border-transparent pl-[6px]"
                          }`}
                        >
                          {item.icon}
                          {item.label}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* ---- Main content ---- */}
        <main className="ml-[220px] flex-1 min-h-[calc(100vh-56px)]">
          <div className="max-w-[720px] mx-auto px-8 py-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-[12px] text-[#555] mb-8">
              <span>Docs</span>
              <ChevronRight size={12} strokeWidth={1.8} />
              <span>Getting Started</span>
              <ChevronRight size={12} strokeWidth={1.8} />
              <span className="text-[#a1a1aa]">Quick Start</span>
            </div>

            {/* Heading */}
            <h1 className="text-[32px] font-semibold tracking-tight text-[#0fa968] mb-3">
              Get started with Duitar
            </h1>
            <p className="text-[16px] text-[#a1a1aa] leading-relaxed mb-10">
              Generate your first AI-powered release notes in under 60 seconds.
            </p>

            {/* Callout */}
            <Callout>
              You need a Duitar API key. Sign up at{" "}
              <a href="https://duitar.dev" className="text-[#0fa968] underline underline-offset-2">
                duitar.dev
              </a>{" "}
              to get one.
            </Callout>

            {/* ---- Step 1 ---- */}
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-7 h-7 border border-[#222] bg-[#0a0a0a] text-[12px] font-mono text-[#0fa968]">
                  1
                </span>
                <h2 className="text-[18px] font-semibold text-[#ededed]">Connect your repo</h2>
              </div>
              <p className="text-[14px] text-[#a1a1aa] leading-relaxed mb-4 pl-10">
                Authorize Duitar to read your repository. We use GitHub OAuth so we never store your
                credentials directly.
              </p>
              <div className="pl-10">
                <CodeBlock filename="connect.ts">
                  <Cmt>{"// Redirect the user to GitHub OAuth"}</Cmt>
                  {"\n"}
                  <Kw>{"import"}</Kw>
                  <Fn>{" { Duitar } "}</Fn>
                  <Kw>{"from"}</Kw>
                  {" "}
                  <Str>{'"duitar"'}</Str>
                  {"\n\n"}
                  <Kw>{"const"}</Kw>
                  <Fn>{" client = "}</Fn>
                  <Kw>{"new"}</Kw>
                  <Fn>{" Duitar({ "}</Fn>
                  {"\n"}
                  <Fn>{"  apiKey: "}</Fn>
                  <Fn>{"process.env."}</Fn>
                  <Fn>{"DUITAR_API_KEY"}</Fn>
                  {"\n"}
                  <Fn>{"})"}</Fn>
                  {"\n\n"}
                  <Cmt>{"// Generate the OAuth URL for the user"}</Cmt>
                  {"\n"}
                  <Kw>{"const"}</Kw>
                  <Fn>{" authUrl = "}</Fn>
                  <Kw>{"await"}</Kw>
                  <Fn>{" client.repos.connect({"}</Fn>
                  {"\n"}
                  <Fn>{"  provider: "}</Fn>
                  <Str>{'"github"'}</Str>
                  <Fn>{","}</Fn>
                  {"\n"}
                  <Fn>{"  redirectUri: "}</Fn>
                  <Str>{'"https://app.example.com/callback"'}</Str>
                  {"\n"}
                  <Fn>{"})"}</Fn>
                  {"\n\n"}
                  <Fn>{"console.log(authUrl)"}</Fn>
                  {"\n"}
                  <Cmt>{"// => https://github.com/login/oauth/authorize?client_id=..."}</Cmt>
                </CodeBlock>
              </div>
            </div>

            {/* ---- Step 2 ---- */}
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-7 h-7 border border-[#222] bg-[#0a0a0a] text-[12px] font-mono text-[#0fa968]">
                  2
                </span>
                <h2 className="text-[18px] font-semibold text-[#ededed]">Generate release notes</h2>
              </div>
              <p className="text-[14px] text-[#a1a1aa] leading-relaxed mb-4 pl-10">
                Run a single CLI command to analyze your commits and generate human-readable release
                notes powered by AI.
              </p>
              <div className="pl-10">
                <CodeBlock filename="terminal">
                  <Cmt>{"# Generate release notes for tag v1.0.0"}</Cmt>
                  {"\n"}
                  <Fn>{"$ "}</Fn>
                  <Kw>{"npx"}</Kw>
                  <Fn>{" duitar generate v1.0.0"}</Fn>
                  {"\n\n"}
                  <Cmt>{"# Output:"}</Cmt>
                  {"\n"}
                  <Fn>{"  Analyzing 47 commits..."}</Fn>
                  {"\n"}
                  <Fn>{"  Detected 12 features, 8 fixes, 3 breaking changes"}</Fn>
                  {"\n"}
                  <Fn>{"  Generating release notes..."}</Fn>
                  {"\n\n"}
                  <Str>{"  Release notes generated successfully."}</Str>
                  {"\n"}
                  <Fn>{"  Preview: "}</Fn>
                  <Str>{"https://duitar.dev/preview/rn_abc123"}</Str>
                </CodeBlock>
              </div>
            </div>

            {/* ---- Step 3 ---- */}
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-7 h-7 border border-[#222] bg-[#0a0a0a] text-[12px] font-mono text-[#0fa968]">
                  3
                </span>
                <h2 className="text-[18px] font-semibold text-[#ededed]">Publish</h2>
              </div>
              <p className="text-[14px] text-[#a1a1aa] leading-relaxed mb-4 pl-10">
                Publish your release notes to every channel at once &mdash; GitHub Releases, Slack,
                email, your docs site, or anywhere via webhooks.
              </p>
              <div className="pl-10">
                <CodeBlock filename="publish.ts">
                  <Cmt>{"// Publish to all configured targets"}</Cmt>
                  {"\n"}
                  <Kw>{"const"}</Kw>
                  <Fn>{" result = "}</Fn>
                  <Kw>{"await"}</Kw>
                  <Fn>{" client.releases.publish({"}</Fn>
                  {"\n"}
                  <Fn>{"  releaseId: "}</Fn>
                  <Str>{'"rn_abc123"'}</Str>
                  <Fn>{","}</Fn>
                  {"\n"}
                  <Fn>{"  targets: ["}</Fn>
                  <Str>{'"github"'}</Str>
                  <Fn>{", "}</Fn>
                  <Str>{'"slack"'}</Str>
                  <Fn>{", "}</Fn>
                  <Str>{'"email"'}</Str>
                  <Fn>{"],"}</Fn>
                  {"\n"}
                  <Fn>{"  audience: "}</Fn>
                  <Str>{'"external"'}</Str>
                  {"\n"}
                  <Fn>{"})"}</Fn>
                  {"\n\n"}
                  <Fn>{"console.log(result.published)"}</Fn>
                  {"\n"}
                  <Cmt>{"// => { github: true, slack: true, email: true }"}</Cmt>
                </CodeBlock>
              </div>
            </div>

            {/* ---- Divider ---- */}
            <div className="border-t border-[#222] mt-14 mb-10" />

            {/* ---- Next up cards ---- */}
            <h3 className="text-[16px] font-semibold text-[#ededed] mb-5">Next up</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <NextCard
                icon={<FileText size={16} strokeWidth={1.8} />}
                title="Release Notes"
                description="Learn how AI analyzes your diffs and generates structured, human-readable changelogs."
              />
              <NextCard
                icon={<Users size={16} strokeWidth={1.8} />}
                title="Audience Modes"
                description="Tailor tone and detail level for developers, product managers, or end users."
              />
              <NextCard
                icon={<Send size={16} strokeWidth={1.8} />}
                title="Publish Targets"
                description="Configure GitHub Releases, Slack channels, email lists, and custom webhooks."
              />
              <NextCard
                icon={<GithubIcon size={16} />}
                title="GitHub Integration"
                description="Connect repos, auto-detect tags, and publish directly to GitHub Releases."
              />
            </div>

            {/* Footer spacer */}
            <div className="h-20" />
          </div>
        </main>
      </div>
    </div>
  )
}
