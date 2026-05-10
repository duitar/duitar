"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { FileText, Users, Globe, Music } from "lucide-react"

function GithubIcon({ size = 17, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// ScrambleText — inline implementation
// Randomly scrambles characters then resolves to the target string.
// ---------------------------------------------------------------------------
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*"

function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [displayed, setDisplayed] = useState(text)
  const prevText = useRef(text)
  const frameRef = useRef<number | null>(null)

  const scramble = useCallback((target: string) => {
    const length = target.length
    let iteration = 0
    const totalIterations = length * 2

    const step = () => {
      setDisplayed(
        target
          .split("")
          .map((char, i) => {
            if (char === " ") return " "
            if (i < iteration / 2) return target[i]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join("")
      )

      iteration++
      if (iteration <= totalIterations) {
        frameRef.current = requestAnimationFrame(step)
      } else {
        setDisplayed(target)
      }
    }

    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    frameRef.current = requestAnimationFrame(step)
  }, [])

  useEffect(() => {
    if (prevText.current !== text) {
      prevText.current = text
      scramble(text)
    }
  }, [text, scramble])

  // Initial scramble on mount
  useEffect(() => {
    scramble(text)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <span className={className}>{displayed}</span>
}

// ---------------------------------------------------------------------------
// Login Page
// ---------------------------------------------------------------------------
export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")

  const headingText = isSignUp ? "Create your account" : "Welcome back"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire up auth
  }

  return (
    <div className="flex min-h-screen">
      {/* ----------------------------------------------------------------- */}
      {/* Left Panel — branding, hidden on mobile                           */}
      {/* ----------------------------------------------------------------- */}
      <div className="hidden md:flex md:w-1/2 flex-col justify-between bg-black bg-dot-grid relative overflow-hidden p-10">
        {/* Logo */}
        <div className="flex items-center gap-2.5 z-10">
          <div className="w-8 h-8 rounded-md bg-[#15803d] flex items-center justify-center">
            <Music size={16} color="#fff" strokeWidth={1.8} />
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-[#ededed]">
            Duitar
          </span>
        </div>

        {/* Hero text */}
        <div className="z-10 max-w-md">
          <h1 className="text-[32px] leading-[1.2] font-semibold tracking-tight text-[#ededed] mb-8">
            Release notes that
            <br />
            write themselves
          </h1>

          <div className="flex flex-col gap-4">
            {[
              { icon: FileText, label: "AI reads your diffs" },
              { icon: Users, label: "Multiple audience modes" },
              { icon: Globe, label: "Publish everywhere" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#15803d] flex-shrink-0" />
                <Icon size={15} strokeWidth={1.8} className="text-[#888] flex-shrink-0" />
                <span className="text-[13px] text-[#888]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom trust line */}
        <p className="text-[11px] text-[#555] z-10">
          Trusted by 500+ repositories
        </p>

        {/* Fade overlay at edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Right Panel — auth form, white background                         */}
      {/* ----------------------------------------------------------------- */}
      <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center px-6 py-12 min-h-screen">
        <div className="w-full max-w-[380px]">
          {/* Mobile logo */}
          <div className="flex items-center gap-2.5 mb-10">
            <div className="w-8 h-8 rounded-md bg-[#15803d] flex items-center justify-center">
              <Music size={16} color="#fff" strokeWidth={1.8} />
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-[#1a1a1a]">
              Duitar
            </span>
          </div>

          {/* Scramble heading */}
          <h2 className="text-[22px] font-semibold tracking-tight text-[#1a1a1a] mb-6">
            <ScrambleText text={headingText} />
          </h2>

          {/* Tab toggle */}
          <div className="flex mb-8 border-b border-[#e5e5e5]">
            <button
              onClick={() => setIsSignUp(false)}
              className={`pb-2.5 px-1 mr-6 text-[13px] font-medium transition-colors relative ${
                !isSignUp
                  ? "text-[#1a1a1a]"
                  : "text-[#999] hover:text-[#666]"
              }`}
            >
              Sign In
              {!isSignUp && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#15803d]" />
              )}
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`pb-2.5 px-1 text-[13px] font-medium transition-colors relative ${
                isSignUp
                  ? "text-[#1a1a1a]"
                  : "text-[#999] hover:text-[#666]"
              }`}
            >
              Sign Up
              {isSignUp && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#15803d]" />
              )}
            </button>
          </div>

          {/* GitHub OAuth — primary CTA */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2.5 bg-[#1a1a1a] hover:bg-[#333] text-white text-[13px] font-medium h-11 rounded-none transition-colors"
          >
            <GithubIcon size={17} />
            Continue with GitHub
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#e5e5e5]" />
            <span className="text-[11px] text-[#999] uppercase tracking-wider">
              or continue with email
            </span>
            <div className="flex-1 h-px bg-[#e5e5e5]" />
          </div>

          {/* Email/Password form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {/* Full name — sign up only */}
            {isSignUp && (
              <input
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full h-11 px-3 text-[13px] bg-[#f5f5f5] border border-[#e5e5e5] rounded-none text-[#1a1a1a] placeholder:text-[#999] focus:border-[#15803d] focus:ring-0 focus:outline-none transition-colors"
              />
            )}

            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 px-3 text-[13px] bg-[#f5f5f5] border border-[#e5e5e5] rounded-none text-[#1a1a1a] placeholder:text-[#999] focus:border-[#15803d] focus:ring-0 focus:outline-none transition-colors"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-11 px-3 text-[13px] bg-[#f5f5f5] border border-[#e5e5e5] rounded-none text-[#1a1a1a] placeholder:text-[#999] focus:border-[#15803d] focus:ring-0 focus:outline-none transition-colors"
            />

            <button
              type="submit"
              className="w-full h-11 text-[13px] font-medium rounded-none btn-grid mt-1"
            >
              {isSignUp ? "Create account" : "Sign in"}
            </button>
          </form>

          {/* Toggle text */}
          <p className="text-[12px] text-[#999] mt-6 text-center">
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsSignUp(false)}
                  className="text-[#15803d] hover:underline font-medium"
                >
                  Sign in
                </button>
              </>
            ) : (
              <>
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => setIsSignUp(true)}
                  className="text-[#15803d] hover:underline font-medium"
                >
                  Sign up
                </button>
              </>
            )}
          </p>

          {/* Footer legal */}
          <p className="text-[11px] text-[#bbb] mt-8 text-center leading-relaxed">
            By signing up, you agree to our{" "}
            <a href="#" className="text-[#999] hover:text-[#666] underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#999] hover:text-[#666] underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
