"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import {
  GitBranch,
  Sparkles,
  Send,
  FileCode,
  Users,
  Globe,
  Layout,
  AlertTriangle,
  Mail,
  MessageSquare,
  BarChart3,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Check,
  Terminal,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  INLINE SVG BRAND ICONS (removed from lucide-react v1.x)            */
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

/* ------------------------------------------------------------------ */
/*  CONSTANTS                                                          */
/* ------------------------------------------------------------------ */

const ROLLING_WORDS = ["DEVELOPERS", "MAINTAINERS", "TEAMS", "EVERYONE"]

const TERMINAL_LINES = [
  { text: "$ duitar generate v2.3.0", delay: 0, type: "command" as const },
  { text: "", delay: 600, type: "blank" as const },
  { text: "Analyzing 3 PRs between v2.2.0..v2.3.0", delay: 900, type: "info" as const },
  { text: "", delay: 1200, type: "blank" as const },
  { text: "PR #237: Add per-user cost limits (+182 -12)", delay: 1500, type: "file" as const },
  { text: "PR #234: Fix session race condition (+47 -23)", delay: 1900, type: "file" as const },
  { text: "PR #239: Bump dependencies (lockfile only)", delay: 2300, type: "file" as const },
  { text: "", delay: 2700, type: "blank" as const },
  { text: "Generating release notes...", delay: 3000, type: "info" as const },
  { text: "", delay: 3500, type: "blank" as const },
  { text: "## 2.3.0 \u2014 Session Limits & Stability", delay: 3800, type: "heading" as const },
  { text: "", delay: 4100, type: "blank" as const },
  { text: "### New", delay: 4300, type: "subheading" as const },
  { text: "- **Per-user cost limits** \u2014 Set daily caps.", delay: 4600, type: "content" as const },
  { text: "  Agents auto-pause when limits are hit.", delay: 4900, type: "content" as const },
  { text: "", delay: 5200, type: "blank" as const },
  { text: "### Fixed", delay: 5400, type: "subheading" as const },
  { text: "- Agent loop no longer hangs during", delay: 5700, type: "content" as const },
  { text: "  parallel tool execution (#230)", delay: 6000, type: "content" as const },
  { text: "", delay: 6300, type: "blank" as const },
  { text: "\u2713 Draft ready. Review at duitar.dev/draft/2.3.0", delay: 6600, type: "success" as const },
]

const FEATURES = [
  {
    icon: FileCode,
    label: "Code-aware AI",
    color: "#3b82f6",
    description: "Reads actual diffs, not commit messages. Understands what changed semantically.",
  },
  {
    icon: Users,
    label: "Audience modes",
    color: "#8b5cf6",
    description: 'Developer changelog, product update, end-user "what\'s new". Three versions, one click.',
  },
  {
    icon: Globe,
    label: "Hosted changelog",
    color: "#15803d",
    description: "Beautiful changelog page at yourproject.duitar.dev. Dark theme, searchable, RSS feed.",
  },
  {
    icon: Layout,
    label: "In-app widget",
    color: "#d97706",
    description: "Drop a script tag. \"What's New\" button appears. Shows unread count.",
  },
  {
    icon: AlertTriangle,
    label: "Breaking changes",
    color: "#dc2626",
    description: "Auto-detects removed exports, changed signatures, schema changes. Flags with warnings.",
  },
  {
    icon: Mail,
    label: "Email digest",
    color: "#06b6d4",
    description: "Per-release or weekly digest. Subscribers sign up via changelog page.",
  },
  {
    icon: MessageSquare,
    label: "Slack integration",
    color: "#ec4899",
    description: "Posts to your channel when release is published. Rich formatting.",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    color: "#6366f1",
    description: "Views per release, email open rates, subscriber growth.",
  },
]

const PRICING_TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "",
    highlight: false,
    dashed: false,
    badge: null,
    features: ["1 public repo", "3 releases / month", "Hosted changelog", '"Powered by Duitar" badge'],
    cta: "Start free",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    highlight: true,
    dashed: false,
    badge: "Popular",
    features: ["5 private repos", "Unlimited releases", "Widget + email digest", "No badge", "Priority support"],
    cta: "Start building",
  },
  {
    name: "Team",
    price: "$99",
    period: "/mo",
    highlight: false,
    dashed: false,
    badge: null,
    features: ["20 repos", "Approval workflows", "Analytics dashboard", "Slack integration", "Custom domain"],
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    highlight: false,
    dashed: true,
    badge: null,
    features: ["Unlimited repos", "SSO / SAML", "Audit logs", "SLA guarantee", "Dedicated support"],
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

function SectionHeader({ label, title }: { label: string; title: string }) {
  const { display, scramble, reset } = useScrambleText(title)
  return (
    <div className="text-center mb-16">
      <p className="text-[10px] tracking-[1.5px] uppercase text-[#15803d] font-mono mb-3">{label}</p>
      <h2
        className="text-3xl md:text-4xl font-bold tracking-tight cursor-default"
        onMouseEnter={scramble}
        onMouseLeave={reset}
      >
        {display}
      </h2>
    </div>
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
      const timer = setTimeout(() => {
        setVisibleLines(idx + 1)
      }, line.delay)
      timers.push(timer)
    })
    return () => timers.forEach(clearTimeout)
  }, [started])

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.3 }
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
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
    <div className="w-full max-w-2xl mx-auto mt-12">
      <div className="border border-[#222] overflow-hidden bg-[#0a0a0a]">
        {/* Title bar */}
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

        {/* Terminal content */}
        <div
          ref={containerRef}
          className="p-4 font-mono text-[13px] leading-relaxed h-[380px] overflow-y-auto scrollbar-hide"
        >
          {TERMINAL_LINES.slice(0, visibleLines).map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
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
    </div>
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
    <span className="inline-block relative h-[1.15em] overflow-hidden align-bottom min-w-[200px] md:min-w-[320px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLLING_WORDS[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
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

function FeatureCard({
  icon: Icon,
  label,
  color,
  description,
}: {
  icon: LucideIcon
  label: string
  color: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="border p-3.5 transition-all hover:-translate-y-0.5 hover:border-[#333] cursor-default group"
      style={{
        borderColor: `${color}15`,
        background: `${color}05`,
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon size={16} strokeWidth={1.8} style={{ color }} />
        <span
          className="text-[10px] tracking-[1.5px] uppercase font-mono font-medium"
          style={{ color }}
        >
          {label}
        </span>
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
          {/* Left — nav links (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#product" className="text-[13px] text-[#ededed] hover:text-[#15803d] transition-colors uppercase tracking-[0.5px] font-mono">
              Product
            </a>
            <a href="#pricing" className="text-[13px] text-[#ededed] hover:text-[#15803d] transition-colors uppercase tracking-[0.5px] font-mono">
              Pricing
            </a>
            <a href="#" className="text-[13px] text-[#ededed] hover:text-[#15803d] transition-colors uppercase tracking-[0.5px] font-mono">
              Docs
            </a>
          </div>

          {/* Center — logo */}
          <a href="/" className="absolute left-1/2 -translate-x-1/2 text-[15px] font-bold tracking-tight">
            Duitar
          </a>

          {/* Right — actions (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] hover:text-[#ededed] transition-colors"
            >
              <GithubIcon size={18} />
            </a>
            <a href="/login" className="text-[13px] text-[#888] hover:text-[#ededed] transition-colors px-3">
              Sign In
            </a>
            <a
              href="/login"
              className="btn-grid text-[13px] px-4 py-1.5 font-mono text-[13px] uppercase tracking-[0.5px]"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#888] hover:text-[#ededed] transition-colors ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-[#222] bg-[#000] overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                <a href="#product" className="text-[13px] text-[#888] hover:text-[#ededed]" onClick={() => setMobileMenuOpen(false)}>
                  Product
                </a>
                <a href="#pricing" className="text-[13px] text-[#888] hover:text-[#ededed]" onClick={() => setMobileMenuOpen(false)}>
                  Pricing
                </a>
                <a href="#" className="text-[13px] text-[#888] hover:text-[#ededed]" onClick={() => setMobileMenuOpen(false)}>
                  Docs
                </a>
                <div className="flex items-center gap-3 pt-2 border-t border-[#222]">
                  <a href="/login" className="text-[13px] text-[#888] hover:text-[#ededed]">
                    Sign In
                  </a>
                  <a href="/login" className="btn-grid text-[13px] px-4 py-1.5 font-mono text-[13px] uppercase tracking-[0.5px]">
                    Sign Up
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background dot grid */}
        <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-[10px] tracking-[1.5px] uppercase font-mono text-[#888] border border-[#222] px-3 py-1.5">
              AI-POWERED &middot; RELEASE NOTES &middot; CHANGELOG
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]"
          >
            Release notes that
            <br />
            write themselves for
            <br />
            <RollingWord />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-[15px] md:text-[17px] text-[#888] max-w-xl mx-auto leading-relaxed"
          >
            Connect your repo. AI reads your diffs. Drafts human-readable release notes. You approve, it publishes everywhere.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <a
              href="/login"
              className="btn-grid px-7 py-2.5 text-[13px] font-mono uppercase tracking-[0.5px] border-none hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              Start Free
              <ArrowRight size={14} strokeWidth={1.8} />
            </a>
            <a
              href="#"
              className="btn-grid-outline px-7 py-2.5 text-[13px] font-mono uppercase tracking-[0.5px] hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              Read the Docs
              <ChevronRight size={14} strokeWidth={1.8} />
            </a>
          </motion.div>

          {/* Terminal demo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <TerminalDemo />
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW IT WORKS                                                 */}
      {/* ============================================================ */}
      <section id="product" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="How it works" title="THREE STEPS TO SHIP" />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: GitBranch,
                step: "01",
                title: "Connect",
                description: "Link your GitHub repo. Duitar watches for new releases and PRs.",
              },
              {
                icon: Sparkles,
                step: "02",
                title: "Generate",
                description: "AI reads actual code diffs, not just commit messages. Generates notes for developers, PMs, and end users.",
              },
              {
                icon: Send,
                step: "03",
                title: "Publish",
                description: "Changelog page, in-app widget, email digest, Slack. One click, everywhere.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="border border-[#222] p-6 bg-[#0a0a0a] hover:border-[#333] transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#15803d]/10 flex items-center justify-center">
                    <item.icon size={16} strokeWidth={1.8} className="text-[#15803d]" />
                  </div>
                  <span className="text-[11px] tracking-[1.5px] uppercase font-mono text-[#666]">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-[13px] text-[#888] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BEFORE / AFTER                                               */}
      {/* ============================================================ */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-cross-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <SectionHeader label="The difference" title="BEFORE AND AFTER" />

          <div className="grid md:grid-cols-2 gap-6">
            {/* Without Duitar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="border border-red-800/30 overflow-hidden bg-[#0a0a0a]"
            >
              <div className="px-5 py-3 border-b border-red-800/20 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-600" />
                <span className="text-[11px] tracking-[1.5px] uppercase font-mono text-red-500/80">Without Duitar</span>
              </div>
              <div className="p-5 font-mono text-[12px] leading-relaxed text-[#666]">
                <p className="text-[#555]">## Changelog</p>
                <p className="mt-3">- fix: update deps</p>
                <p>- feat: add param</p>
                <p>- chore: bump</p>
                <p>- fix: typo</p>
                <p>- wip</p>
                <p>- fix fix</p>
                <p>- Merge branch &apos;main&apos;</p>
                <p>- misc improvements</p>
                <p className="mt-3 text-[#444]">Last updated: 3 months ago</p>
              </div>
            </motion.div>

            {/* With Duitar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="border border-green-800/30 overflow-hidden bg-[#0a0a0a]"
            >
              <div className="px-5 py-3 border-b border-green-800/20 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#15803d]" />
                <span className="text-[11px] tracking-[1.5px] uppercase font-mono text-[#15803d]/80">With Duitar</span>
              </div>
              <div className="p-5 text-[13px] leading-relaxed">
                <p className="font-semibold text-[#ededed]">v2.3.0 &mdash; Session Limits &amp; Stability</p>
                <p className="text-[11px] text-[#666] font-mono mt-1">May 10, 2026</p>

                <div className="mt-4">
                  <p className="text-[11px] tracking-[1.5px] uppercase font-mono text-[#15803d] mb-2">New Features</p>
                  <p className="text-[#999] text-[13px]">
                    <span className="text-[#ededed] font-medium">Per-user cost limits</span> &mdash; Set daily spending caps per user. Agents auto-pause when limits are hit, preventing runaway costs.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-[11px] tracking-[1.5px] uppercase font-mono text-[#3b82f6] mb-2">Fixed</p>
                  <p className="text-[#999] text-[13px]">
                    <span className="text-[#ededed] font-medium">Session race condition</span> &mdash; Agent loop no longer hangs during parallel tool execution.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURES                                                     */}
      {/* ============================================================ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="Features" title="EVERYTHING YOU NEED" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.label} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PRICING                                                      */}
      {/* ============================================================ */}
      <section id="pricing" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <SectionHeader label="Pricing" title="SIMPLE, TRANSPARENT" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRICING_TIERS.map((tier, idx) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className={`
                  relative p-6 bg-[#0a0a0a] transition-all duration-200 cursor-default
                  ${tier.highlight ? "border-2 border-[#15803d]" : tier.dashed ? "border border-dashed border-[#333]" : "border border-[#222]"}
                `}
              >
                {tier.badge && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] tracking-[1.5px] uppercase font-mono bg-[#15803d] text-white px-3 py-0.5">
                    {tier.badge}
                  </span>
                )}

                <p className="text-[11px] tracking-[1.5px] uppercase font-mono text-[#888] mb-3">{tier.name}</p>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-3xl font-bold font-mono">{tier.price}</span>
                  {tier.period && <span className="text-[13px] text-[#666]">{tier.period}</span>}
                </div>

                <ul className="space-y-2.5 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-[13px] text-[#888]">
                      <Check size={14} strokeWidth={1.8} className="text-[#15803d] mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/login"
                  className={`
                    block text-center text-[13px] font-medium py-2.5 transition-all hover:-translate-y-0.5
                    ${tier.highlight ? "btn-grid" : "btn-grid-outline"}
                  `}
                >
                  {tier.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                          */}
      {/* ============================================================ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            Ship better release notes.{" "}
            <span className="text-[#15803d]">Starting today.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-[15px] text-[#888] max-w-md mx-auto"
          >
            Start free. Deploy in minutes. Your first changelog is live today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <a
              href="/login"
              className="btn-grid px-7 py-2.5 text-[13px] font-mono uppercase tracking-[0.5px] border-none hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              Start Free
              <ArrowRight size={14} strokeWidth={1.8} />
            </a>
            <a
              href="#"
              className="btn-grid-outline px-7 py-2.5 text-[13px] font-mono uppercase tracking-[0.5px] hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              Read the Docs
              <ChevronRight size={14} strokeWidth={1.8} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FOOTER                                                       */}
      {/* ============================================================ */}
      <footer className="border-t border-[#222] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <p className="text-[15px] font-bold tracking-tight mb-3">Duitar</p>
              <p className="text-[13px] text-[#666] leading-relaxed">
                AI-native release notes platform. Connect your repo, ship changelogs everywhere.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-[#ededed] transition-colors">
                  <GithubIcon size={16} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-[#ededed] transition-colors">
                  <TwitterIcon size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-[#ededed] transition-colors">
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <p className="text-[11px] tracking-[1.5px] uppercase font-mono text-[#888] mb-4">Product</p>
              <ul className="space-y-2.5">
                {["Features", "Pricing", "Changelog", "Widget", "API"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[13px] text-[#666] hover:text-[#ededed] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developers */}
            <div>
              <p className="text-[11px] tracking-[1.5px] uppercase font-mono text-[#888] mb-4">Developers</p>
              <ul className="space-y-2.5">
                {["Documentation", "API Reference", "GitHub", "Status", "CLI"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[13px] text-[#666] hover:text-[#ededed] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-[11px] tracking-[1.5px] uppercase font-mono text-[#888] mb-4">Company</p>
              <ul className="space-y-2.5">
                {["About", "Blog", "Careers", "Privacy", "Terms"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[13px] text-[#666] hover:text-[#ededed] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-6 border-t border-[#222] flex items-center justify-between">
            <p className="text-[12px] text-[#444] font-mono">&copy; 2026 Duitar</p>
            <p className="text-[12px] text-[#444] font-mono">Built for developers, by developers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
