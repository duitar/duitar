"use client"

import {
  FileText,
  GitBranch,
  Globe,
  Mail,
  MessageSquare,
  BarChart3,
  Plus,
  ArrowRight,
  Search,
  CheckCircle2,
  ChevronRight,
  Settings,
  LogOut,
  Bell,
} from "lucide-react"

// ─── Mock data ──────────────────────────────────────────────────

const recentReleases = [
  { id: "rn_a1b2c3", repo: "theazo/theazo-node", tag: "v2.3.0", status: "published", audience: "developer", date: "2 hours ago", views: 147 },
  { id: "rn_d4e5f6", repo: "theazo/theazo-node", tag: "v2.2.1", status: "draft", audience: "product", date: "5 hours ago", views: 0 },
  { id: "rn_g7h8i9", repo: "bishal/duitar", tag: "v0.9.0", status: "published", audience: "developer", date: "1 day ago", views: 89 },
  { id: "rn_j0k1l2", repo: "bishal/portfolio", tag: "v1.4.0", status: "published", audience: "external", date: "3 days ago", views: 234 },
  { id: "rn_m3n4o5", repo: "theazo/theazo-node", tag: "v2.2.0", status: "published", audience: "developer", date: "5 days ago", views: 312 },
]

const repos = [
  { name: "theazo/theazo-node", releases: 12, lastRelease: "2 hours ago", status: "active" },
  { name: "bishal/duitar", releases: 8, lastRelease: "1 day ago", status: "active" },
  { name: "bishal/portfolio", releases: 4, lastRelease: "3 days ago", status: "active" },
]

const stats = [
  { label: "Total Releases", value: "24", change: "+3 this week" },
  { label: "Changelog Views", value: "1,847", change: "+12% vs last week" },
  { label: "Subscribers", value: "89", change: "+7 this week" },
  { label: "Repos Connected", value: "3", change: "" },
]

// ─── Status dot ─────────────────────────────────────────────────

function StatusDot({ status }: { status: string }) {
  const color = status === "published" ? "#50e3c2" : status === "draft" ? "#f5a623" : "#ee0000"
  return (
    <span className="flex items-center gap-2 text-[13px]">
      <span className="h-2 w-2 rounded-full" style={{ background: color }} />
      <span style={{ color: status === "published" ? "#888" : color }}>{status}</span>
    </span>
  )
}

// ─── Sidebar ────────────────────────────────────────────────────

const sidebarNav = [
  { label: "Overview", icon: BarChart3, active: true },
  { label: "Releases", icon: FileText, active: false },
  { label: "Repos", icon: GitBranch, active: false },
  { label: "Changelog", icon: Globe, active: false },
  { label: "Subscribers", icon: Mail, active: false },
  { label: "Integrations", icon: MessageSquare, active: false },
]

// ─── Page ───────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-[#ededed] font-sans flex">
      {/* ─── Sidebar ─────────────────────────────────────────── */}
      <aside className="w-[220px] h-screen border-r border-[#222] flex flex-col fixed left-0 top-0 z-50 bg-black">
        {/* Brand */}
        <div className="px-4 pt-4 pb-3 flex items-center gap-2">
          <div className="w-6 h-6 bg-[#15803d] flex items-center justify-center">
            <span className="text-[10px] font-bold text-white">D</span>
          </div>
          <span className="text-sm font-semibold text-[#ededed]">Duitar</span>
        </div>

        {/* Search */}
        <div className="mx-3 mb-2 px-2.5 py-1.5 border border-[#222] flex items-center gap-1.5 text-[#555] text-[13px] cursor-text">
          <Search className="w-3.5 h-3.5" strokeWidth={1.8} />
          <span>Find...</span>
          <span className="ml-auto text-[11px] text-[#444] border border-[#333] px-1 font-mono">/</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 py-1 overflow-y-auto">
          {sidebarNav.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-2.5 px-2.5 py-[6px] text-[13px] transition-colors ${
                item.active
                  ? "text-[#ededed] bg-[#1a1a1a] font-medium"
                  : "text-[#888] hover:text-[#ededed] hover:bg-[#111]"
              }`}
            >
              <item.icon className="w-[15px] h-[15px]" strokeWidth={1.8} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-[#222] px-2 py-2">
          <button className="w-full flex items-center gap-2.5 px-2.5 py-[6px] text-[13px] text-[#888] hover:text-[#ededed] hover:bg-[#111] transition-colors">
            <Settings className="w-[15px] h-[15px]" strokeWidth={1.8} />
            Settings
          </button>
          <button className="w-full flex items-center gap-2.5 px-2.5 py-[6px] text-[13px] text-[#888] hover:text-[#ededed] hover:bg-[#111] transition-colors">
            <LogOut className="w-[15px] h-[15px]" strokeWidth={1.8} />
            Logout
          </button>
        </div>
      </aside>

      {/* ─── Main content ────────────────────────────────────── */}
      <main className="ml-[220px] flex-1">
        {/* Topbar */}
        <div className="h-12 border-b border-[#222] flex items-center justify-between px-6">
          <span className="text-[14px] font-semibold">Overview</span>
          <div className="flex items-center gap-3">
            <button className="text-[#888] hover:text-[#ededed] transition-colors">
              <Bell className="w-4 h-4" strokeWidth={1.8} />
            </button>
            <button className="btn-grid text-[12px] font-mono uppercase tracking-[0.5px] px-3 py-1 border-none flex items-center gap-1.5">
              <Plus className="w-3 h-3" strokeWidth={2} />
              New Release
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* ─── Stats ───────────────────────────────────────── */}
          <div className="grid grid-cols-4 gap-px border border-[#222] bg-[#222] mb-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-black px-5 py-4">
                <p className="text-[12px] text-[#555] mb-1">{stat.label}</p>
                <p className="text-[24px] font-semibold text-[#ededed] tabular-nums">{stat.value}</p>
                {stat.change && (
                  <p className="text-[12px] font-mono text-[#50e3c2] mt-1">{stat.change}</p>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* ─── Recent Releases ───────────────────────────── */}
            <div className="col-span-2 border border-[#222]">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#222]">
                <span className="text-[13px] font-medium">Recent Releases</span>
                <button className="text-[12px] text-[#888] hover:text-[#ededed] flex items-center gap-1 transition-colors">
                  View all <ArrowRight className="w-3 h-3" strokeWidth={1.8} />
                </button>
              </div>

              {recentReleases.map((release) => (
                <div
                  key={release.id}
                  className="flex items-center px-4 py-2.5 border-b border-[#222] last:border-b-0 hover:bg-[#111] transition-colors cursor-pointer group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-mono text-[#ededed]">{release.repo}</span>
                      <span className="text-[13px] font-mono text-[#555]">{release.tag}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-0.5">
                      <StatusDot status={release.status} />
                      <span className="text-[12px] font-mono text-[#555]">{release.audience}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[12px] font-mono text-[#555]">{release.date}</p>
                    {release.views > 0 && (
                      <p className="text-[12px] font-mono text-[#555]">{release.views} views</p>
                    )}
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#333] ml-3 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.8} />
                </div>
              ))}
            </div>

            {/* ─── Right column ──────────────────────────────── */}
            <div className="space-y-6">
              {/* Repos */}
              <div className="border border-[#222]">
                <div className="flex items-center justify-between px-4 py-3 border-b border-[#222]">
                  <span className="text-[13px] font-medium">Connected Repos</span>
                  <button className="text-[#888] hover:text-[#ededed] transition-colors">
                    <Plus className="w-3.5 h-3.5" strokeWidth={1.8} />
                  </button>
                </div>

                {repos.map((repo) => (
                  <div
                    key={repo.name}
                    className="flex items-center px-4 py-2.5 border-b border-[#222] last:border-b-0 hover:bg-[#111] transition-colors cursor-pointer"
                  >
                    <GitBranch className="w-3.5 h-3.5 text-[#555] mr-2.5 shrink-0" strokeWidth={1.8} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-mono text-[#ededed] truncate">{repo.name}</p>
                      <p className="text-[11px] font-mono text-[#555]">{repo.releases} releases · {repo.lastRelease}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick actions */}
              <div className="border border-[#222]">
                <div className="px-4 py-3 border-b border-[#222]">
                  <span className="text-[13px] font-medium">Quick Actions</span>
                </div>

                {[
                  { icon: Plus, label: "Generate release notes", desc: "From latest tag" },
                  { icon: Globe, label: "View changelog page", desc: "yourproject.duitar.dev" },
                  { icon: Settings, label: "Configure targets", desc: "Slack, email, widget" },
                ].map((action) => (
                  <button
                    key={action.label}
                    className="w-full flex items-center gap-3 px-4 py-2.5 border-b border-[#222] last:border-b-0 hover:bg-[#111] transition-colors text-left"
                  >
                    <div className="w-7 h-7 border border-[#222] flex items-center justify-center shrink-0">
                      <action.icon className="w-3.5 h-3.5 text-[#888]" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-[13px] text-[#ededed]">{action.label}</p>
                      <p className="text-[11px] text-[#555]">{action.desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Activity */}
              <div className="border border-[#222]">
                <div className="px-4 py-3 border-b border-[#222]">
                  <span className="text-[13px] font-medium">Activity</span>
                </div>

                {[
                  { icon: CheckCircle2, text: "v2.3.0 published to GitHub, Slack, email", time: "2h ago", color: "#50e3c2" },
                  { icon: FileText, text: "v2.2.1 draft generated", time: "5h ago", color: "#f5a623" },
                  { icon: GitBranch, text: "theazo/theazo-node connected", time: "1d ago", color: "#0070f3" },
                  { icon: Mail, text: "3 new email subscribers", time: "2d ago", color: "#888" },
                ].map((event, i) => (
                  <div key={i} className="flex items-start gap-3 px-4 py-2.5 border-b border-[#222] last:border-b-0">
                    <span className="h-[6px] w-[6px] rounded-full mt-1.5 shrink-0" style={{ background: event.color }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] text-[#888]">{event.text}</p>
                      <p className="text-[11px] font-mono text-[#555]">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
