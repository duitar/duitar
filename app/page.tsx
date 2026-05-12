"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import {
  Globe,
  Sparkles,
  FileCode,
  Users,
  Layout,
  AlertTriangle,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Check,
  Terminal,
  Search,
  GitBranch,
  Upload,
  Languages,
  BookOpen,
  HardDrive,
  HelpCircle,
  Lock,
  FileText,
  Code2,
  Layers,
  RefreshCw,
  Play,
  UserPlus,
  CheckCircle2,
  Clock,
  Cpu,
  Eye,
  Zap,
  ShieldCheck,
  BarChart3,
  Gauge,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  INLINE SVG BRAND ICONS                                             */
/* ------------------------------------------------------------------ */

function GithubIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function TwitterIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedinIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitLabIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.386 9.452.044 13.587a.924.924 0 00.331 1.023L12 23.054l11.625-8.443a.92.92 0 00.33-1.024" />
    </svg>
  )
}

function BitbucketIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 00.77-.646l3.27-20.03a.768.768 0 00-.768-.892zM14.52 15.53H9.522L8.17 8.466h7.561z" />
    </svg>
  )
}

function AzureIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M5.483.314l6.781 6.03-4.66 8.083L.6 21.567h7.244l3.328 2.119H24L5.483.314zM16.037 5.537L24 21.567H10.249l5.788-16.03z" />
    </svg>
  )
}

function SlackIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 01-2.52-2.523 2.526 2.526 0 012.52-2.52h6.313A2.527 2.527 0 0124 15.165a2.528 2.528 0 01-2.522 2.523h-6.313z" />
    </svg>
  )
}

function NotionIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.07 2.16c-.42-.326-.98-.7-2.054-.607L3.01 2.86c-.467.047-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.166V6.354c0-.606-.233-.933-.748-.886l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933zM2.633 1.38L16.18.1c1.682-.14 2.1.093 2.8.606l3.876 2.707c.467.326.607.42.607.793v17.7c0 1.073-.374 1.7-1.682 1.793L5.927 24.56c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V3.14c0-.84.374-1.54 1.59-1.76z" />
    </svg>
  )
}

function ConfluenceIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M.87 18.257c-.248.382-.53.875-.763 1.245a.764.764 0 00.255 1.04l4.965 3.054a.764.764 0 001.058-.26c.199-.332.487-.838.79-1.38 1.575-2.85 3.149-2.482 6.349-1.162l3.396 1.398a.764.764 0 001.004-.432l2.108-5.208a.764.764 0 00-.381-1.003c-.924-.39-2.596-1.1-3.503-1.476-5.2-2.149-9.24-1.97-15.278 4.184zM23.131 5.743c.249-.383.53-.875.764-1.246a.764.764 0 00-.256-1.04L18.674.404a.764.764 0 00-1.058.26c-.199.332-.487.838-.79 1.38-1.575 2.85-3.149 2.482-6.35 1.162L7.083 1.808a.764.764 0 00-1.004.432L3.971 7.448a.764.764 0 00.382 1.003c.924.39 2.596 1.1 3.503 1.476 5.2 2.149 9.24 1.97 15.275-4.184z" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  ANIMATION HELPERS                                                   */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1500
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  CONSTANTS                                                          */
/* ------------------------------------------------------------------ */

const ROLLING_WORDS = ["KNOWLEDGE BASES", "API DOCS", "HARDWARE MANUALS", "SETUP GUIDES", "CHANGELOGS"]

const TERMINAL_LINES = [
  { text: "$ duitar init --template product-docs", delay: 0, type: "command" as const },
  { text: "", delay: 600, type: "blank" as const },
  { text: "Connecting to acme/backend (GitHub)...", delay: 900, type: "info" as const },
  { text: "Scanning repository structure...", delay: 1400, type: "info" as const },
  { text: "", delay: 1800, type: "blank" as const },
  { text: "Found: 4 releases, 23 endpoints, 2 config files", delay: 2100, type: "file" as const },
  { text: "Generating documentation...", delay: 2600, type: "info" as const },
  { text: "", delay: 3100, type: "blank" as const },
  { text: "Changelog", delay: 3400, type: "heading" as const },
  { text: "  v2.3.0 \u2014 Session Limits & Stability", delay: 3600, type: "subheading" as const },
  { text: "  v2.2.0 \u2014 Webhook Overhaul", delay: 3800, type: "content" as const },
  { text: "", delay: 4000, type: "blank" as const },
  { text: "API Reference", delay: 4200, type: "heading" as const },
  { text: "  POST /sessions \u2014 Create a new session", delay: 4400, type: "subheading" as const },
  { text: "  GET  /users/:id \u2014 Retrieve user details", delay: 4600, type: "content" as const },
  { text: "", delay: 4800, type: "blank" as const },
  { text: "Configuration Guide", delay: 5000, type: "heading" as const },
  { text: "  12 options documented from config.yaml", delay: 5200, type: "content" as const },
  { text: "", delay: 5500, type: "blank" as const },
  { text: "\u2713 Docs live at acme-docs.duitar.dev", delay: 5800, type: "success" as const },
  { text: "\u2713 AI search enabled. MCP server ready.", delay: 6100, type: "success" as const },
]

const STATS = [
  { value: 7, suffix: "", label: "Project templates" },
  { value: 12, suffix: "+", label: "Import sources" },
  { value: 4, suffix: "", label: "SCM providers" },
  { value: 24, suffix: "", label: "PRD sections shipped" },
]

const PROBLEM_ITEMS = [
  "Write release notes manually",
  "Maintain a separate docs site",
  "Build an API reference from scratch",
  "Set up changelog hosting",
  "Build search over your docs",
  "Create an in-app widget",
  "Send email digests to subscribers",
  "Keep docs in sync with code changes",
  "Validate links and code examples",
  "Support multiple doc versions",
  "Translate docs to other languages",
  "Detect stale documentation",
]

const PLATFORM_LAYERS = [
  {
    icon: Globe,
    label: "The Docs Home",
    subtitle: "Where the world finds your docs",
    features: [
      { icon: Search, text: "AI search + chat" },
      { icon: Cpu, text: "llms.txt & MCP server" },
      { icon: Eye, text: "Dark / light mode" },
      { icon: Layers, text: "Versioned docs" },
      { icon: Globe, text: "Custom domains" },
      { icon: Gauge, text: "Health score badge" },
    ],
  },
  {
    icon: Sparkles,
    label: "The Creation Engine",
    subtitle: "How docs get made",
    features: [
      { icon: FileCode, text: "AI from code diffs" },
      { icon: Zap, text: "Rich editor + AI co-author" },
      { icon: Upload, text: "PDF / upload parsing" },
      { icon: RefreshCw, text: "Import from 12 platforms" },
      { icon: Play, text: "API playground" },
      { icon: Languages, text: "AI translation" },
    ],
  },
]

const TEMPLATES = [
  { icon: RefreshCw, name: "Changelog", description: "Release notes from your repo.", color: "#15803d" },
  { icon: BookOpen, name: "Product Docs", description: "Guides, tutorials, configuration.", color: "#3b82f6" },
  { icon: Code2, name: "API Reference", description: "Endpoints, parameters, examples.", color: "#8b5cf6" },
  { icon: HardDrive, name: "Hardware Manual", description: "Specs, calibration, firmware.", color: "#d97706" },
  { icon: HelpCircle, name: "Knowledge Base", description: "Help articles, FAQs, how-tos.", color: "#06b6d4" },
  { icon: Lock, name: "Internal Docs", description: "Runbooks, procedures, onboarding.", color: "#ec4899" },
  { icon: FileText, name: "Blank", description: "Start from scratch.", color: "#888888" },
]

const FEATURES = [
  { icon: FileCode, label: "Code-aware AI", color: "#3b82f6", description: "Reads actual diffs, not commit messages. Understands what changed semantically." },
  { icon: Users, label: "Multi-audience", color: "#8b5cf6", description: "Developer changelog, product update, end-user \"what's new\". Same change, three versions." },
  { icon: CheckCircle2, label: "Docs CI/CD", color: "#15803d", description: "Link validation, code syntax checks, style guide enforcement. Docs tested like code." },
  { icon: Search, label: "AI search + chat", color: "#06b6d4", description: "Users ask questions, get answers grounded in your docs. Semantic search built in." },
  { icon: GitBranch, label: "Multi-SCM", color: "#d97706", description: "GitHub, GitLab, Bitbucket, Azure DevOps. One interface, four providers." },
  { icon: Layout, label: "In-app widget", color: "#ec4899", description: "Drop a script tag. \"What's New\" button with unread count. Under 15KB." },
  { icon: AlertTriangle, label: "Stale detection", color: "#dc2626", description: "AI maps docs to source code. When code changes, stale pages flagged automatically." },
  { icon: UserPlus, label: "Collaborative editing", color: "#6366f1", description: "Real-time cursors, inline comments, threaded review. Built on Yjs." },
  { icon: Languages, label: "i18n / translations", color: "#0ea5e9", description: "AI-assisted translation. Locale URLs. Staleness tracking when source page updates." },
  { icon: Upload, label: "Import & migrate", color: "#f59e0b", description: "One-click import from Mintlify, GitBook, Docusaurus, Notion, Confluence, and 7 more." },
  { icon: Layers, label: "Versioned docs", color: "#14b8a6", description: "v1, v2, v3 with version selector. Version diffing shows what changed." },
  { icon: Play, label: "API playground", color: "#a855f7", description: "Interactive \"Try it\" panel. Users test endpoints from the docs. No proxy needed." },
]

const IMPORT_SOURCES = [
  "Mintlify", "GitBook", "Docusaurus", "ReadMe", "Notion",
  "Confluence", "GitHub", "Markdown", "OpenAPI", "PDF", "HTML",
]

const PRICING_TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "",
    highlight: false,
    dashed: false,
    badge: null,
    features: ["1 project, 20 pages", "10 AI generations / mo", "Hosted docs site", "AI search + chat", '"Powered by Duitar" badge'],
    cta: "Start free",
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    highlight: true,
    dashed: false,
    badge: "Popular",
    features: ["10 projects, unlimited pages", "200 AI generations / mo", "Custom domain, no badge", "Widget + email digest", "3 team seats"],
    cta: "Start building",
  },
  {
    name: "Team",
    price: "$149",
    period: "/mo",
    highlight: false,
    dashed: false,
    badge: null,
    features: ["Unlimited projects", "1,000 AI generations / mo", "Docs CI/CD + health score", "All publish targets", "Collaborative editing, 20 seats"],
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    highlight: false,
    dashed: true,
    badge: null,
    features: ["SSO / SAML", "Documentation federation", "Audit log + compliance", "On-prem / self-hosted", "Dedicated support + SLA"],
    cta: "Contact sales",
  },
]

/* ------------------------------------------------------------------ */
/*  SCRAMBLE TEXT HOOK                                                  */
/* ------------------------------------------------------------------ */

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"

function useScrambleText(text: string) {
  const [display, setDisplay] = useState(text)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const scramble = useCallback(() => {
    let iteration = 0
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, idx) => {
            if (char === " ") return " "
            if (idx < iteration) return text[idx]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join("")
      )
      iteration += 1 / 2
      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setDisplay(text)
      }
    }, 30)
  }, [text])

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setDisplay(text)
  }, [text])

  return { display, scramble, reset }
}

/* ------------------------------------------------------------------ */
/*  SECTION HEADER                                                     */
/* ------------------------------------------------------------------ */

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  const { display, scramble, reset } = useScrambleText(title)
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
      className="text-center mb-10"
    >
      <p className="text-[10px] tracking-[1.5px] uppercase text-[#15803d] font-mono mb-3">{label}</p>
      <h2
        className="text-3xl md:text-4xl font-bold tracking-tight cursor-default"
        onMouseEnter={scramble}
        onMouseLeave={reset}
      >
        {display}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[15px] text-[#888] max-w-lg mx-auto leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  TERMINAL DEMO                                                      */
/* ------------------------------------------------------------------ */

function TerminalDemo() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [started, setStarted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!started) return
    const timers: ReturnType<typeof setTimeout>[] = []
    TERMINAL_LINES.forEach((line, idx) => {
      timers.push(setTimeout(() => setVisibleLines(idx + 1), line.delay))
    })
    return () => timers.forEach(clearTimeout)
  }, [started])

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.3 }
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight
  }, [visibleLines])

  const getLineColor = (type: string) => {
    switch (type) {
      case "command": return "text-[#ededed]"
      case "info": return "text-[#888]"
      case "file": return "text-[#6ee7b7]"
      case "heading": return "text-[#ededed] font-bold"
      case "subheading": return "text-[#15803d] font-semibold"
      case "content": return "text-[#999]"
      case "success": return "text-[#15803d] font-semibold"
      default: return ""
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="w-full max-w-2xl mx-auto mt-12"
    >
      <div className="border border-[#222] overflow-hidden bg-[#0a0a0a]">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#222] bg-[#0a0a0a]/80">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-1.5 ml-3 text-[11px] text-[#666] font-mono">
            <Terminal size={12} strokeWidth={1.8} />
            <span>duitar-cli</span>
          </div>
        </div>
        <div
          ref={containerRef}
          className="p-4 font-mono text-[13px] leading-relaxed h-[380px] overflow-y-auto scrollbar-hide"
        >
          {TERMINAL_LINES.slice(0, visibleLines).map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={`${getLineColor(line.type)} ${line.type === "blank" ? "h-4" : ""}`}
            >
              {line.text}
            </motion.div>
          ))}
          {visibleLines < TERMINAL_LINES.length && (
            <span className="inline-block w-2 h-4 bg-[#15803d] animate-pulse" />
          )}
        </div>
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  ROLLING WORD                                                       */
/* ------------------------------------------------------------------ */

function RollingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLLING_WORDS.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-block relative h-[1.15em] overflow-hidden align-bottom text-[24px] md:text-[38px] min-w-[200px] md:min-w-[420px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLLING_WORDS[index]}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute left-0 text-[#15803d]"
        >
          {ROLLING_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  FEATURE CARD                                                       */
/* ------------------------------------------------------------------ */

function FeatureCard({ icon: Icon, label, color, description }: { icon: LucideIcon; label: string; color: string; description: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="border p-3.5 transition-all duration-200 hover:-translate-y-1 hover:border-[#333] cursor-default group"
      style={{ borderColor: `${color}15`, background: `${color}05` }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon size={16} strokeWidth={1.8} style={{ color }} className="transition-transform duration-200 group-hover:scale-110" />
        <span className="text-[10px] tracking-[1.5px] uppercase font-mono font-medium" style={{ color }}>{label}</span>
      </div>
      <p className="text-[13px] text-[#888] leading-relaxed">{description}</p>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  MAIN PAGE                                                          */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#000] text-[#ededed] font-sans">
      {/* ============================================================ */}
      {/*  NAVBAR                                                       */}
      {/* ============================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#222] bg-[#000]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-6">
            {["Product", "Pricing", "Docs"].map((link) => (
              <a key={link} href={link === "Docs" ? "/docs" : `#${link.toLowerCase()}`} className="text-[13px] text-[#ededed] hover:text-[#15803d] transition-colors uppercase tracking-[0.5px] font-mono">
                {link}
              </a>
            ))}
          </div>
          <a href="/" className="absolute left-1/2 -translate-x-1/2 text-[15px] font-bold tracking-tight">Duitar</a>
          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/duitar/duitar" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-[#ededed] transition-colors"><GithubIcon size={18} /></a>
            <a href="/login" className="text-[13px] text-[#888] hover:text-[#ededed] transition-colors px-3">Sign In</a>
            <a href="/login" className="btn-grid text-[13px] px-4 py-1.5 font-mono uppercase tracking-[0.5px]">Sign Up</a>
          </div>
          <button className="md:hidden text-[#888] hover:text-[#ededed] transition-colors ml-auto" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
          </button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="md:hidden border-t border-[#222] bg-[#000] overflow-hidden">
              <div className="px-6 py-4 flex flex-col gap-4">
                {["Product", "Pricing", "Docs"].map((link) => (
                  <a key={link} href={link === "Docs" ? "/docs" : `#${link.toLowerCase()}`} className="text-[13px] text-[#888] hover:text-[#ededed]" onClick={() => setMobileMenuOpen(false)}>{link}</a>
                ))}
                <div className="flex items-center gap-3 pt-2 border-t border-[#222]">
                  <a href="/login" className="text-[13px] text-[#888] hover:text-[#ededed]">Sign In</a>
                  <a href="/login" className="btn-grid text-[13px] px-4 py-1.5 font-mono uppercase tracking-[0.5px]">Sign Up</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-block text-[10px] tracking-[1.5px] uppercase font-mono text-[#888] border border-[#222] px-3 py-1.5">
            OPEN SOURCE &middot; AI-POWERED &middot; DOCUMENTATION
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-10 text-[28px] md:text-[46px] font-medium tracking-tight leading-[1.15] uppercase">
            AI Documentation Platform for
            <br />
            <RollingWord />
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-6 text-[15px] md:text-[16px] text-[#888] max-w-2xl mx-auto leading-relaxed">
            Duitar is the open-source documentation platform that generates, hosts, and maintains your docs &mdash; AI-powered creation, stale detection, Docs CI/CD, and multi-channel publishing.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <a href="/login" className="btn-grid px-7 py-2.5 text-[13px] font-mono uppercase tracking-[0.5px] border-none hover:-translate-y-0.5 transition-all flex items-center gap-2">
              Start Free <ArrowRight size={14} strokeWidth={1.8} />
            </a>
            <a href="https://github.com/duitar/duitar" target="_blank" rel="noopener noreferrer" className="btn-grid-outline px-7 py-2.5 text-[13px] font-mono uppercase tracking-[0.5px] hover:-translate-y-0.5 transition-all flex items-center gap-2">
              <GithubIcon size={14} /> View on GitHub
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-6 flex justify-center">
            <div className="border border-[#222] bg-[#0a0a0a] px-5 py-2 inline-block">
              <code className="text-[13px] font-mono text-[#888]"><span className="text-[#555]">$</span> npx duitar init</code>
            </div>
          </motion.div>

          <TerminalDemo />
        </div>
      </section>

      {/* ============================================================ */}
      {/*  STATS BAR                                                     */}
      {/* ============================================================ */}
      <section className="border-y border-[#222]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-[#222]">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#000] px-6 py-8 text-center"
            >
              <p className="text-[32px] md:text-[40px] font-bold text-[#ededed] font-mono">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-[12px] text-[#555] mt-1 font-mono">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WORKS WITH                                                    */}
      {/* ============================================================ */}
      <section className="py-10 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-5xl mx-auto">
          <motion.p variants={fadeUp} className="text-[10px] tracking-[1.5px] uppercase font-mono text-[#555] text-center mb-6">Works with</motion.p>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {[
              { Icon: GithubIcon, name: "GitHub" }, { Icon: GitLabIcon, name: "GitLab" },
              { Icon: BitbucketIcon, name: "Bitbucket" }, { Icon: AzureIcon, name: "Azure DevOps" },
              { Icon: SlackIcon, name: "Slack" }, { Icon: NotionIcon, name: "Notion" },
              { Icon: ConfluenceIcon, name: "Confluence" },
            ].map(({ Icon, name }) => (
              <div key={name} className="flex items-center gap-2 text-[#555] hover:text-[#888] transition-colors">
                <Icon size={16} />
                <span className="text-[12px] font-mono hidden sm:inline">{name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/*  THE PROBLEM                                                   */}
      {/* ============================================================ */}
      <section className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-cross-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <SectionHeader label="The problem" title="EVERY TEAM REBUILDS THE SAME DOCS" />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl mx-auto">
            {PROBLEM_ITEMS.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex items-center gap-3 text-[13px] text-[#666] py-2 border-b border-[#222] last:border-0">
                <Clock size={12} strokeWidth={1.8} className="text-[#555] shrink-0" />
                {item}
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.4 }} className="mt-12 text-center">
            <div className="inline-block border border-[#15803d]/30 bg-[#15803d]/5 px-8 py-4">
              <p className="text-[14px] text-[#ededed]">
                With Duitar: <span className="text-[#15803d] font-mono font-semibold">5 minutes</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TWO PILLARS                                                   */}
      {/* ============================================================ */}
      <section id="product" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="The platform" title="EVERYTHING YOUR DOCS NEED" />

          <div className="grid md:grid-cols-2 gap-6">
            {PLATFORM_LAYERS.map((layer, layerIdx) => (
              <motion.div
                key={layer.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: layerIdx * 0.15 }}
                className="border border-[#222] bg-[#0a0a0a] p-6"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-[#15803d]" />
                  <span className="text-[10px] tracking-[1.5px] uppercase font-mono text-[#15803d]">{layer.label}</span>
                </div>
                <p className="text-[13px] text-[#666] mb-6">{layer.subtitle}</p>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-0">
                  {layer.features.map(({ icon: FeatureIcon, text }) => (
                    <motion.div key={text} variants={fadeUp} className="flex items-center gap-3 py-2.5 border-b border-[#222] last:border-0 group">
                      <div className="w-8 h-8 border border-[#222] flex items-center justify-center shrink-0 group-hover:border-[#333] transition-colors">
                        <FeatureIcon size={14} strokeWidth={1.8} className="text-[#888] group-hover:text-[#ededed] transition-colors" />
                      </div>
                      <span className="text-[13px] text-[#888] group-hover:text-[#ededed] transition-colors">{text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Third pillar — maintenance — full width */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border border-[#222] bg-[#0a0a0a] p-6 mt-6"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-[#15803d]" />
              <span className="text-[10px] tracking-[1.5px] uppercase font-mono text-[#15803d]">The Maintenance Engine</span>
            </div>
            <p className="text-[13px] text-[#666] mb-6">How docs stay current</p>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 md:grid-cols-3 gap-0">
              {[
                { icon: AlertTriangle, text: "Stale detection + severity alerts" },
                { icon: ShieldCheck, text: "Docs CI/CD validation pipeline" },
                { icon: Layout, text: "In-app widget publishing" },
                { icon: BarChart3, text: "Documentation health score" },
                { icon: RefreshCw, text: "Scheduled publishing" },
                { icon: Globe, text: "Email, Slack, webhook targets" },
              ].map(({ icon: FeatureIcon, text }) => (
                <motion.div key={text} variants={fadeUp} className="flex items-center gap-3 py-2.5 px-2 border-b border-[#222] group">
                  <div className="w-8 h-8 border border-[#222] flex items-center justify-center shrink-0 group-hover:border-[#333] transition-colors">
                    <FeatureIcon size={14} strokeWidth={1.8} className="text-[#888] group-hover:text-[#ededed] transition-colors" />
                  </div>
                  <span className="text-[13px] text-[#888] group-hover:text-[#ededed] transition-colors">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  DASHBOARD PREVIEW                                             */}
      {/* ============================================================ */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="One dashboard" title="EVERY DOC, EVERY PROJECT" />

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="border border-[#222] bg-[#0a0a0a] overflow-hidden">
            {/* Mock topbar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#222]">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#15803d] flex items-center justify-center"><span className="text-[8px] font-bold text-white">D</span></div>
                <span className="text-[13px] font-medium">acme-docs</span>
              </div>
              <span className="text-[10px] tracking-[1.5px] uppercase font-mono text-[#15803d]">Health: 94%</span>
            </div>

            {/* Mock stats row */}
            <div className="grid grid-cols-4 gap-px bg-[#222] border-b border-[#222]">
              {[
                { label: "Published Pages", value: "47" },
                { label: "AI Generations", value: "189" },
                { label: "Stale Alerts", value: "2" },
                { label: "Subscribers", value: "312" },
              ].map((s) => (
                <div key={s.label} className="bg-[#0a0a0a] px-4 py-3">
                  <p className="text-[11px] text-[#555]">{s.label}</p>
                  <p className="text-[18px] font-semibold font-mono tabular-nums">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Mock table */}
            <div className="text-[12px] font-mono">
              <div className="grid grid-cols-5 px-4 py-2.5 text-[#555] border-b border-[#222] text-[11px]">
                <span>Page</span><span>Type</span><span>Status</span><span>Audience</span><span className="text-right">Updated</span>
              </div>
              {[
                { page: "v2.3.0 Release Notes", type: "release_note", status: "published", audience: "developer", updated: "2h ago" },
                { page: "POST /sessions", type: "api_reference", status: "published", audience: "all", updated: "1d ago" },
                { page: "Quick Start Guide", type: "setup_guide", status: "draft", audience: "all", updated: "3h ago" },
                { page: "Config Reference", type: "config_ref", status: "published", audience: "developer", updated: "5d ago" },
                { page: "Sensor Calibration", type: "hardware_doc", status: "review", audience: "internal", updated: "1d ago" },
              ].map((row) => (
                <div key={row.page} className="grid grid-cols-5 px-4 py-2.5 border-b border-[#222] last:border-0 hover:bg-[#111] transition-colors">
                  <span className="text-[#ededed] truncate">{row.page}</span>
                  <span className="text-[#555]">{row.type}</span>
                  <span className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${row.status === "published" ? "bg-[#50e3c2]" : row.status === "draft" ? "bg-[#f5a623]" : "bg-[#0070f3]"}`} />
                    <span className={row.status === "published" ? "text-[#888]" : row.status === "draft" ? "text-[#f5a623]" : "text-[#0070f3]"}>{row.status}</span>
                  </span>
                  <span className="text-[#555]">{row.audience}</span>
                  <span className="text-[#555] text-right">{row.updated}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TEMPLATES                                                     */}
      {/* ============================================================ */}
      <section className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <SectionHeader label="Get started fast" title="START WITH A TEMPLATE" subtitle="Pick a template. Connect a source. Your docs site is live in minutes." />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {TEMPLATES.map((template) => (
              <motion.div
                key={template.name}
                variants={fadeUp}
                className="border p-4 bg-[#0a0a0a] hover:border-[#333] hover:-translate-y-1 transition-all duration-200 cursor-default group"
                style={{ borderColor: `${template.color}20` }}
              >
                <template.icon size={16} strokeWidth={1.8} style={{ color: template.color }} className="transition-transform duration-200 group-hover:scale-110" />
                <p className="text-[13px] font-medium mt-3 mb-1">{template.name}</p>
                <p className="text-[11px] text-[#666] leading-relaxed">{template.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURES GRID                                                 */}
      {/* ============================================================ */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="Features" title="EVERYTHING YOU NEED" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.label} {...feature} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  MIGRATION                                                     */}
      {/* ============================================================ */}
      <section className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-cross-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <SectionHeader label="Zero switching cost" title="MIGRATE IN MINUTES" subtitle="Already have docs elsewhere? Import with one click. We handle the conversion." />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-wrap items-center justify-center gap-3">
            {IMPORT_SOURCES.map((source) => (
              <motion.div key={source} variants={fadeUp} whileHover={{ y: -2 }} className="border border-[#222] bg-[#0a0a0a] px-4 py-2.5 hover:border-[#333] transition-colors cursor-default">
                <span className="text-[12px] font-mono text-[#888]">{source}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-6 text-[13px] text-[#555]">
            Navigation preserved. Assets re-hosted. Platform syntax auto-converted.
          </motion.p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  OPEN SOURCE                                                   */}
      {/* ============================================================ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="border border-[#15803d]/30 bg-[#15803d]/5 p-8 md:p-12 text-center">
            <p className="text-[10px] tracking-[1.5px] uppercase text-[#15803d] font-mono mb-4">Open source</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Self-hostable. No lock-in.</h2>
            <p className="text-[15px] text-[#888] max-w-md mx-auto mb-8 leading-relaxed">
              Licensed under Elastic License 2.0. Use it free, modify the source, deploy on your own infrastructure. The only restriction: you can&apos;t sell it as a managed service.
            </p>
            <div className="border border-[#222] bg-[#0a0a0a] px-5 py-3 inline-block mb-8">
              <code className="text-[13px] font-mono text-[#ededed]"><span className="text-[#888]">$</span> npx duitar init</code>
            </div>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a href="https://github.com/duitar/duitar" target="_blank" rel="noopener noreferrer" className="btn-grid px-6 py-2.5 text-[13px] font-mono uppercase tracking-[0.5px] border-none hover:-translate-y-0.5 transition-all flex items-center gap-2">
                <GithubIcon size={14} /> Star on GitHub
              </a>
              <a href="/docs" className="btn-grid-outline px-6 py-2.5 text-[13px] font-mono uppercase tracking-[0.5px] hover:-translate-y-0.5 transition-all">Self-host guide</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PRICING                                                      */}
      {/* ============================================================ */}
      <section id="pricing" className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <SectionHeader label="Pricing" title="START FREE. SCALE UP." />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRICING_TIERS.map((tier) => (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                whileHover={{ scale: 1.04, y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative p-6 bg-[#0a0a0a] cursor-default ${tier.highlight ? "border-2 border-[#15803d]" : tier.dashed ? "border border-dashed border-[#333]" : "border border-[#222]"}`}
              >
                {tier.badge && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] tracking-[1.5px] uppercase font-mono bg-[#15803d] text-white px-3 py-0.5">{tier.badge}</span>
                )}
                <p className="text-[11px] tracking-[1.5px] uppercase font-mono text-[#888] mb-3">{tier.name}</p>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-3xl font-bold font-mono">{tier.price}</span>
                  {tier.period && <span className="text-[13px] text-[#666]">{tier.period}</span>}
                </div>
                <ul className="space-y-2.5 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-[13px] text-[#888]">
                      <Check size={14} strokeWidth={1.8} className="text-[#15803d] mt-0.5 shrink-0" />{feature}
                    </li>
                  ))}
                </ul>
                <a href="/login" className={`block text-center text-[13px] font-medium py-2.5 transition-all hover:-translate-y-0.5 ${tier.highlight ? "btn-grid" : "btn-grid-outline"}`}>
                  {tier.cta}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BOTTOM CTA                                                    */}
      {/* ============================================================ */}
      <section className="py-16 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto text-center">
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold tracking-tight">
            Your docs, maintained by AI.{" "}<span className="text-[#15803d]">Starting today.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[15px] text-[#888] max-w-md mx-auto">
            Start free. Pick a template. Your docs site is live in minutes.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <a href="/login" className="btn-grid px-7 py-2.5 text-[13px] font-mono uppercase tracking-[0.5px] border-none hover:-translate-y-0.5 transition-all flex items-center gap-2">
              Start Free <ArrowRight size={14} strokeWidth={1.8} />
            </a>
            <a href="/docs" className="btn-grid-outline px-7 py-2.5 text-[13px] font-mono uppercase tracking-[0.5px] hover:-translate-y-0.5 transition-all flex items-center gap-2">
              Read the Docs <ChevronRight size={14} strokeWidth={1.8} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/*  FOOTER                                                       */}
      {/* ============================================================ */}
      <footer className="border-t border-[#222] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-4 gap-10">
            <div>
              <p className="text-[15px] font-bold tracking-tight mb-3">Duitar</p>
              <p className="text-[13px] text-[#666] leading-relaxed">The AI open-source documentation platform. Generate, host, maintain.</p>
              <div className="flex items-center gap-3 mt-4">
                <a href="https://github.com/duitar/duitar" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-[#ededed] transition-colors"><GithubIcon size={16} /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-[#ededed] transition-colors"><TwitterIcon size={16} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-[#ededed] transition-colors"><LinkedinIcon size={16} /></a>
              </div>
            </div>
            {[
              { title: "Product", links: ["Features", "Templates", "Pricing", "Changelog", "API"] },
              { title: "Developers", links: ["Documentation", "API Reference", "Self-host guide", "GitHub", "CLI"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Privacy", "Terms"] },
            ].map((col) => (
              <div key={col.title}>
                <p className="text-[11px] tracking-[1.5px] uppercase font-mono text-[#888] mb-4">{col.title}</p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}><a href="#" className="text-[13px] text-[#666] hover:text-[#ededed] transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-6 border-t border-[#222] flex items-center justify-between">
            <p className="text-[12px] text-[#444] font-mono">&copy; 2026 Duitar &middot; ELv2 License</p>
            <p className="text-[12px] text-[#444] font-mono">Built for developers, by developers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
