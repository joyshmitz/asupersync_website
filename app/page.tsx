"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Github,
  ArrowRight,
  Rocket,
  Package,
  Activity,
  Sparkles,
  Key,
  Network,
  Droplets,
  Layers,
  GitMerge,
  Zap,
  Bomb,
  Search,
  Calculator,
  GitCompare,
  LineChart,
  Flame,
  GitCommit,
  Braces,
} from "lucide-react";
import { motion } from "framer-motion";

import SectionShell from "@/components/section-shell";
import StatsGrid from "@/components/stats-grid";
import GlowOrbits from "@/components/glow-orbits";
import FeatureCard from "@/components/feature-card";
import ComparisonTable from "@/components/comparison-table";
import RustCodeBlock from "@/components/rust-code-block";
import Timeline from "@/components/timeline";
import RobotMascot from "@/components/robot-mascot";
import GlitchText from "@/components/glitch-text";
import { SyncContainer } from "@/components/sync-elements";
import { Magnetic, BorderBeam } from "@/components/motion-wrapper";
import { Tooltip } from "@/components/tooltip";
import {
  siteConfig,
  heroStats,
  features,
  codeExample,
  changelog,
} from "@/lib/content";

const AgentFlywheel = dynamic(() => import("@/components/agent-flywheel"), { ssr: false });
const RegionTreeViz = dynamic(() => import("@/components/viz/region-tree-viz"), { ssr: false });
const CancelProtocolViz = dynamic(() => import("@/components/viz/cancel-protocol-viz"), { ssr: false });
const LabRuntimeViz = dynamic(() => import("@/components/viz/lab-runtime-viz"), { ssr: false });
const ObligationFlowViz = dynamic(() => import("@/components/viz/obligation-flow-viz"), { ssr: false });
const CapabilitySecurityViz = dynamic(() => import("@/components/viz/capability-security-viz"), { ssr: false });
const TwoPhaseEffectsViz = dynamic(() => import("@/components/viz/two-phase-effects-viz"), { ssr: false });
const FountainCodeViz = dynamic(() => import("@/components/viz/fountain-code-viz"), { ssr: false });
const SpectralDeadlockViz = dynamic(() => import("@/components/viz/spectral-deadlock-viz"), { ssr: false });
const SporkOtpViz = dynamic(() => import("@/components/viz/spork-otp-viz"), { ssr: false });
const CalmViz = dynamic(() => import("@/components/viz/calm-theorem-viz"), { ssr: false });
const LyapunovPotentialViz = dynamic(() => import("@/components/viz/lyapunov-potential-viz"), { ssr: false });
const Exp3SchedulerViz = dynamic(() => import("@/components/viz/exp3-scheduler-viz"), { ssr: false });
const CancellationInjectionViz = dynamic(() => import("@/components/viz/cancellation-injection-viz"), { ssr: false });
const TestOraclesViz = dynamic(() => import("@/components/viz/test-oracles-viz"), { ssr: false });
const MacaroonCaveatViz = dynamic(() => import("@/components/viz/macaroon-caveat-viz"), { ssr: false });
const BudgetAlgebraViz = dynamic(() => import("@/components/viz/budget-algebra-viz"), { ssr: false });
const FoataFingerprintViz = dynamic(() => import("@/components/viz/foata-fingerprint-viz"), { ssr: false });
const ConformalCalibrationViz = dynamic(() => import("@/components/viz/conformal-calibration-viz"), { ssr: false });
const CancelFuelViz = dynamic(() => import("@/components/viz/cancel-fuel-viz"), { ssr: false });
const TraceReplayStabilityViz = dynamic(() => import("@/components/viz/trace-replay-stability-viz"), { ssr: false });
const SagaCompensationViz = dynamic(() => import("@/components/viz/saga-compensation-viz"), { ssr: false });
const SmallStepSemanticsViz = dynamic(() => import("@/components/viz/small-step-semantics-viz"), { ssr: false });

export default function HomePage() {
  return (
    <main id="main-content">
      {/* ================================================================
          1. LIVING HERO
          ================================================================ */}
      <section className="relative flex flex-col items-center pt-24 pb-32 overflow-hidden text-left">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[100px]" />
          <GlowOrbits />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-2xl px-6 lg:px-8 w-full mt-12 md:mt-0">
          <div className="flex flex-col items-start max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-8"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-ping" />
              V0.2.6 on Crates.io
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,10vw,7rem)] font-black tracking-tight leading-[0.85] text-white mb-10 text-left"
            >
              The <br />
              <span className="text-blue-500">
                Cancel-Correct
              </span> <br />
              Async Runtime.
            </motion.h1>

            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mb-12">
              Structured concurrency with first-class cancellation for Rust.
              Three-phase cancel protocol, linear obligations, capability security,
              and deterministic testing — all enforced by the runtime.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Magnetic strength={0.1}>
                <Link
                  href="/showcase"
                  data-magnetic="true"
                  className="relative px-10 py-5 rounded-2xl bg-blue-500 text-white font-black text-lg hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(59,130,246,0.3)] active:scale-95"
                >
                  <span className="absolute inset-0 rounded-2xl animate-pulse bg-blue-400/20" />
                  <Sparkles className="relative h-5 w-5" />
                  <span className="relative">INTERACTIVE DEMOS</span>
                </Link>
              </Magnetic>
              <Magnetic strength={0.1}>
                <Link
                  href="/getting-started"
                  data-magnetic="true"
                  className="px-10 py-5 rounded-2xl bg-white/5 border border-blue-500/20 text-white font-black text-lg hover:bg-blue-500/10 hover:border-blue-500/40 transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  <Rocket className="h-5 w-5 text-blue-400" />
                  GET STARTED
                </Link>
              </Magnetic>
              <Magnetic strength={0.1}>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-magnetic="true"
                  className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  <Github className="h-5 w-5" />
                  VIEW SOURCE
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Hero Visual — Robot Mascot + Illustration */}
          <div className="relative mt-16 w-full max-w-[1200px] mx-auto group">
            {/* Floating Robot Mascot */}
            <div className="absolute -top-8 right-4 md:top-[-60px] md:right-[8%] z-20 w-20 h-28 md:w-28 md:h-40 animate-float">
              <RobotMascot />
            </div>

            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <SyncContainer withNodes={false} className="relative glass-modern p-0 overflow-hidden shadow-2xl w-full">
              <BorderBeam />

              {/* Architecture preview diagram */}
              <div className="relative bg-[#020a14] p-8 md:p-16 overflow-hidden min-h-[300px] md:min-h-[400px]">
                <svg viewBox="0 0 800 350" className="w-full h-auto" aria-label="Asupersync architecture overview">
                  {/* Region Tree */}
                  <text x="400" y="30" textAnchor="middle" fill="#60A5FA" fontSize="14" fontWeight="bold" fontFamily="monospace">ASUPERSYNC RUNTIME</text>

                  {/* Root Region */}
                  <rect x="300" y="50" width="200" height="40" rx="8" fill="#0A1628" stroke="#3B82F6" strokeWidth="1.5" />
                  <text x="400" y="75" textAnchor="middle" fill="#93C5FD" fontSize="11" fontFamily="monospace">Root Region</text>

                  {/* Lines from root to children */}
                  <line x1="350" y1="90" x2="200" y2="130" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
                  <line x1="400" y1="90" x2="400" y2="130" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
                  <line x1="450" y1="90" x2="600" y2="130" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />

                  {/* Child Regions */}
                  <rect x="120" y="130" width="160" height="35" rx="6" fill="#0A1628" stroke="#60A5FA" strokeWidth="1" />
                  <text x="200" y="152" textAnchor="middle" fill="#93C5FD" fontSize="10" fontFamily="monospace">Server Region</text>

                  <rect x="320" y="130" width="160" height="35" rx="6" fill="#0A1628" stroke="#60A5FA" strokeWidth="1" />
                  <text x="400" y="152" textAnchor="middle" fill="#93C5FD" fontSize="10" fontFamily="monospace">Worker Region</text>

                  <rect x="520" y="130" width="160" height="35" rx="6" fill="#0A1628" stroke="#F97316" strokeWidth="1" />
                  <text x="600" y="152" textAnchor="middle" fill="#FB923C" fontSize="10" fontFamily="monospace">Cancel Protocol</text>

                  {/* Tasks in Server Region */}
                  <circle cx="160" cy="195" r="6" fill="#22c55e" opacity="0.8" />
                  <circle cx="185" cy="195" r="6" fill="#22c55e" opacity="0.8" />
                  <circle cx="210" cy="195" r="6" fill="#22c55e" opacity="0.6" />
                  <circle cx="235" cy="195" r="6" fill="#fbbf24" opacity="0.6" />
                  <text x="200" y="220" textAnchor="middle" fill="#475569" fontSize="8" fontFamily="monospace">tasks (active)</text>

                  {/* Three-Lane Scheduler */}
                  <rect x="100" y="250" width="600" height="80" rx="10" fill="#0A1628" stroke="#3B82F6" strokeWidth="1" opacity="0.8" />
                  <text x="400" y="272" textAnchor="middle" fill="#60A5FA" fontSize="11" fontWeight="bold" fontFamily="monospace">THREE-LANE SCHEDULER</text>

                  {/* Lanes */}
                  <rect x="130" y="282" width="150" height="30" rx="4" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="0.5" />
                  <text x="205" y="301" textAnchor="middle" fill="#f87171" fontSize="9" fontFamily="monospace">Cancel Lane</text>

                  <rect x="310" y="282" width="150" height="30" rx="4" fill="#fbbf24" fillOpacity="0.15" stroke="#fbbf24" strokeWidth="0.5" />
                  <text x="385" y="301" textAnchor="middle" fill="#fbbf24" fontSize="9" fontFamily="monospace">Timed Lane</text>

                  <rect x="490" y="282" width="150" height="30" rx="4" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="0.5" />
                  <text x="565" y="301" textAnchor="middle" fill="#4ade80" fontSize="9" fontFamily="monospace">Ready Lane</text>

                  {/* Cancel Protocol Steps */}
                  <text x="600" y="188" textAnchor="middle" fill="#FB923C" fontSize="9" fontFamily="monospace">Request → Drain → Finalize</text>

                  {/* Cx capability context */}
                  <rect x="340" y="185" width="120" height="30" rx="6" fill="#F97316" fillOpacity="0.1" stroke="#F97316" strokeWidth="0.5" />
                  <text x="400" y="204" textAnchor="middle" fill="#FB923C" fontSize="9" fontFamily="monospace">Cx (capabilities)</text>
                </svg>

                {/* HUD overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 opacity-60 group-hover:opacity-100 transition-opacity">
                  <Activity className="h-3.5 w-3.5 text-blue-500" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Runtime_Architecture</span>
                </div>
              </div>
            </SyncContainer>

            {/* Embedded Stats Card */}
            <div className="absolute -bottom-6 left-4 md:-bottom-10 md:left-6 z-30 glass-modern p-4 md:p-6 rounded-2xl border border-blue-500/20 shadow-2xl animate-float flex">
              <div className="flex flex-col text-left">
                <span className="text-2xl md:text-4xl font-black text-blue-400 tabular-nums tracking-tighter">3φ</span>
                <span className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Cancel Protocol</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero stats */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <StatsGrid stats={heroStats} />
      </div>

      {/* ================================================================
          2. DEEP DIVE: INTERACTIVE ARCHITECTURE
          ================================================================ */}
      <section className="relative py-24 md:py-32 overflow-hidden border-y border-white/5 bg-white/[0.01]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-950/10 blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-24">
            <GlitchText trigger="hover" intensity="medium">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
                Radically Innovative <br className="hidden md:block" /> <span className="text-blue-500">Concurrency</span>
              </h2>
            </GlitchText>
            <p className="text-lg md:text-xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
              Asupersync replaces manual &quot;developer discipline&quot; with strict runtime guarantees. It forces you to write, reason about, and test async code differently, embedding safety directly into the <Tooltip term="Cancel-Correct">runtime itself</Tooltip>.
            </p>
          </div>

          <div className="space-y-32">
            {/* Concept 1: Cancel Protocol */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-orange-400">
                  <Activity className="h-3 w-3" /> Core Protocol
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  The <Tooltip term="Three-Phase Cancel Protocol">Three-Phase Cancel Protocol</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  In standard async Rust, dropping a future instantly stops its execution. The resulting &quot;silent drop&quot; leaves database connections open and files half-written.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Asupersync requires a mandatory 3-phase shutdown. Tasks receive a <Tooltip term="Budget">time budget</Tooltip> to gracefully <Tooltip term="Drain Phase">drain</Tooltip> their connections and flush buffers before the runtime enforces <Tooltip term="Finalize Phase">finalization</Tooltip>.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#F97316" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-orange-900/20">
                   <CancelProtocolViz />
                </SyncContainer>
              </div>
            </div>

            {/* Concept 2: Linear Obligations */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-green-400">
                  <Package className="h-3 w-3" /> Type System
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <Tooltip term="Linear Obligations">Linear Obligations</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Every time you spawn a task or borrow a resource, you get a <Tooltip term="Permit">Permit</Tooltip> or a <Tooltip term="Lease">Lease</Tooltip>. The Rust compiler strictly enforces their usage.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  You must explicitly await, detach, or cancel these tokens. Dropping one by mistake triggers a compilation error, preventing resource leaks entirely.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#22C55E" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-green-900/20">
                   <ObligationFlowViz />
                </SyncContainer>
              </div>
            </div>

            {/* Concept 3: Region Tree */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                  <Rocket className="h-3 w-3" /> Concurrency
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  The <Tooltip term="Region Tree">Region Tree</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Asupersync enforces structural integrity. Every task is born into a <Tooltip term="Region">Region</Tooltip>, and regions form a strict parent-child hierarchy.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  When a parent Region finishes or gets cancelled, the cancellation cleanly cascades down the entire tree. This cascade guarantees no &quot;zombie&quot; tasks keep running after their parent terminates.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#3B82F6" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-blue-900/20">
                   <RegionTreeViz />
                </SyncContainer>
              </div>
            </div>

            {/* Concept 4: Lab Runtime */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">
                  <Sparkles className="h-3 w-3" /> Testing
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  Deterministic <Tooltip term="Lab Runtime">Lab Runtime</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Race conditions are notoriously hard to test because standard runtimes behave chaotically. Asupersync provides a deterministic testing environment to solve this.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  By providing a <Tooltip term="Seed">Seed</Tooltip>, the Lab Runtime systematically explores different thread interleavings using <Tooltip term="DPOR">DPOR</Tooltip> to find the exact combination that triggers a bug. You can then reproduce the exact bug reliably, every single time.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#A855F7" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-purple-900/20">
                   <LabRuntimeViz />
                </SyncContainer>
              </div>
            </div>

            {/* Concept 5: Capability Security */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-teal-400">
                  <Key className="h-3 w-3" /> Zero Trust Concurrency
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <Tooltip term="Capability Security">Capability Security</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  In most runtimes, any task can perform any action at any time. A background worker can unexpectedly open a network connection or read the file system. Asupersync restricts this by default.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Every task receives a <Tooltip term="Cx">Cx token</Tooltip> that explicitly grants it permissions. If a buggy or hijacked task attempts an operation without the right key on its ring, the runtime instantly blocks it. You maintain absolute control over what each component of your system can actually do.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#14B8A6" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-teal-900/20">
                   <CapabilitySecurityViz />
                </SyncContainer>
              </div>
            </div>

            {/* Concept 6: Two-Phase Effects */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400">
                  <Package className="h-3 w-3" /> State Consistency
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <Tooltip term="Two-Phase Effect">Two-Phase Effects</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Traditional async code often crashes midway through an operation, leaving the system in an inconsistent state. For instance, money might be deducted from one account but never added to the other.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Asupersync introduces a Reserve/Commit pattern. Side-effects are first staged as reversible reservations. If cancellation strikes during this window, the runtime seamlessly rolls back the hold. Only when it is entirely safe do the effects permanently commit.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#EAB308" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-yellow-900/20">
                   <TwoPhaseEffectsViz />
                </SyncContainer>
              </div>
            </div>
            
            {/* Concept 7: Spectral Deadlock Detection */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-rose-400">
                  <Network className="h-3 w-3" /> System Lifeline
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <Tooltip term="Spectral Wait-Graph Analysis">Spectral Deadlock Detection</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Deadlocks usually freeze systems silently. Asupersync treats deadlock detection as an active telemetry problem, monitoring a real-time <Tooltip term="Wait-Graph">Wait-Graph</Tooltip> of all tasks.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  The scheduler calculates the <Tooltip term="Fiedler Value">Fiedler Value</Tooltip> (the second-smallest eigenvalue of the graph&apos;s Laplacian matrix). When this value plummets, it signals an impending traffic jam. The runtime can then intervene proactively before a catastrophic freeze occurs.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#F43F5E" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-rose-900/20">
                   <SpectralDeadlockViz />
                </SyncContainer>
              </div>
            </div>
            
            {/* Concept 8: Fountain Codes */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-sky-400">
                  <Droplets className="h-3 w-3" /> Resilient Data
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <Tooltip term="RaptorQ">RaptorQ Fountain Codes</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Moving data across lossy networks usually requires endless back-and-forth acknowledgments (ACKs) and retransmissions. This degrades performance significantly when connections drop.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Asupersync uses a <Tooltip term="Fountain Code">rateless erasure code</Tooltip> protocol. The sender emits an infinite stream of encoded droplets. The receiver only needs to catch a sufficient number of these droplets to perfectly reconstruct the file, completely eliminating the need for retransmission requests.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#0EA5E9" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-sky-900/20">
                   <FountainCodeViz />
                </SyncContainer>
              </div>
            </div>
            
            {/* Concept 9: Spork (OTP in Rust) */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">
                  <Layers className="h-3 w-3" /> Actor System
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <Tooltip term="Spork">Spork</Tooltip> (OTP without the flaws)
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Erlang&apos;s OTP architecture is legendary, but it relies on developer discipline. Actors can silently crash, messages can accumulate boundlessly in mailboxes until OOM, and servers can forget to reply, leaving clients hanging forever.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Asupersync provides <Tooltip term="Spork">Spork</Tooltip>—a <Tooltip term="GenServer">GenServer</Tooltip> and <Tooltip term="Supervisor">Supervisor</Tooltip> implementation that enforces strict guarantees at compile time. Mailboxes apply explicit backpressure, and every client request generates a linear Reply Obligation. The server mathematically cannot &quot;forget&quot; to reply.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#6366F1" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-indigo-900/20">
                   <SporkOtpViz />
                </SyncContainer>
              </div>
            </div>
            
            {/* Concept 10: CALM Theorem */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">
                  <GitMerge className="h-3 w-3" /> Mathematical Scalability
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <Tooltip term="CALM Analysis">CALM Analysis</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Traditional runtimes sprinkle Mutex locks everywhere to prevent data races, destroying concurrent performance as cores contend for the same cache lines.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Asupersync uses the formal CALM theorem to eliminate locks. Operations are categorized mathematically. <Tooltip term="Monotone Operation">Monotone operations</Tooltip> (like appending data) never require locks because they do not rely on checking absences. The runtime batches these entirely coordination-free, drastically scaling multi-core throughput.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#10B981" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-emerald-900/20">
                   <CalmViz />
                </SyncContainer>
              </div>
            </div>

            {/* Concept 11: Lyapunov Potential */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-fuchsia-400">
                  <Activity className="h-3 w-3" /> Formal Progress
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <Tooltip term="Lyapunov Potential">Lyapunov Potential</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  How do you mathematically prove an async program won&apos;t just spin in infinite loops during shutdown?
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Asupersync calculates a 4-component energy function in real-time. This function aggregates live tasks, pending obligation age, draining regions, and deadline pressure. Because the runtime mechanics mathematically guarantee this &quot;potential energy&quot; always decreases over time, the system acts as a supermartingale—proving it makes strictly monotonic progress toward <Tooltip term="Quiescence">quiescence</Tooltip>.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#D946EF" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-fuchsia-900/20">
                   <LyapunovPotentialViz />
                </SyncContainer>
              </div>
            </div>

            {/* Concept 12: EXP3 Adaptive Scheduler */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
                  <Zap className="h-3 w-3" /> AI Scheduling
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <Tooltip term="EXP3 Scheduler">EXP3 Adaptive Scheduler</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Hardcoded scheduler heuristics break under adversarial workloads. If a flood of cancellations arrives, a static scheduler might starve normal tasks entirely.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Asupersync replaces static thresholds with an online machine learning algorithm (EXP3). It maintains five &quot;arms&quot; representing different cancel-streak limits. By continuously measuring regret, the scheduler dynamically shifts its probability weights to adapt to the current workload—converging on the optimal strategy without any human tuning.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#EC4899" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-pink-900/20">
                   <Exp3SchedulerViz />
                </SyncContainer>
              </div>
            </div>

            {/* Concept 13: Cancellation Injection */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-orange-400">
                  <Bomb className="h-3 w-3" /> Chaos Engineering
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  Systematic Cancellation Testing
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Traditional tests run your code to completion. They cannot catch bugs that only surface when your code is cancelled halfway through execution.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Asupersync provides a deterministic Cancellation Injector. It systematically re-runs your test suite, dropping a &quot;cancel bomb&quot; at a different await point on every run to mathematically prove your application survives interruption without leaking resources.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#F97316" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-orange-900/20">
                   <CancellationInjectionViz />
                </SyncContainer>
              </div>
            </div>

            {/* Concept 14: E-Process Oracles */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">
                  <Search className="h-3 w-3" /> Automated Auditing
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <Tooltip term="E-Process">E-Process Test Oracles</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Instead of writing manual assertions, the Lab Runtime is continuously monitored by independent <Tooltip term="Test Oracle">Oracles</Tooltip> that act as automated auditors.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  These Oracles use a statistical method called an E-Process (a betting martingale) to continuously evaluate runtime invariants like task leaks and quiescence. Because it is anytime-valid, the Oracle can instantly halt a test the moment evidence of a bug crosses the rejection threshold.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#10B981" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-emerald-900/20">
                   <TestOraclesViz />
                </SyncContainer>
              </div>
            </div>

            {/* Concept 15: Macaroon Caveats */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                  <Key className="h-3 w-3" /> Delegation Security
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <Tooltip term="Macaroon">Attenuating Capabilities</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  When a parent task spawns an untrusted child, handing over raw capabilities (like full network access) is dangerous.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Asupersync capabilities behave like Macaroons. A parent can attach cryptographic caveats (like &quot;expires in 50ms&quot; or &quot;read-only&quot;) before delegating the token. The child can use the token or add further restrictions, but the math prevents them from ever stripping the parent&apos;s constraints away.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#3B82F6" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-blue-900/20">
                   <MacaroonCaveatViz />
                </SyncContainer>
              </div>
            </div>

            {/* Concept 16: Budget Algebra */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-orange-400">
                  <Calculator className="h-3 w-3" /> Algebraic Composition
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <Tooltip term="Budget Algebra">Cancel Budget Algebra</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  In a deep hierarchy of tasks, how do you resolve conflicting timeouts? If a child requests 15 seconds to run, but its parent is shutting down in 5 seconds, chaos ensues.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Asupersync resolves this using a <Tooltip term="Product Semiring">Product Semiring</Tooltip>. Cancel budgets mathematically compose downwards across nested regions. The runtime clamps child deadlines to the parent&apos;s minimum, while propagating maximum priorities upward. A child mathematically cannot outlive the region it was born in.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#F97316" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-orange-900/20">
                   <BudgetAlgebraViz />
                </SyncContainer>
              </div>
            </div>
            
            {/* Concept 17: Foata Fingerprint */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">
                  <GitCompare className="h-3 w-3" /> Trace Theory
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <Tooltip term="Foata Fingerprint">Foata Fingerprints</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Exhaustively testing concurrency is impossible because thread interleavings explode factorially. However, many of those interleavings are functionally identical because the swapped operations never actually interact.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Asupersync collapses this search space by converting execution traces into a canonical Foata Normal Form. If the runtime sees that two traces belong to the same <Tooltip term="Mazurkiewicz Trace">Mazurkiewicz equivalence class</Tooltip>, they map to the exact same fingerprint, allowing the DPOR algorithm to safely prune the redundant test run.

                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#6366F1" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-indigo-900/20">
                   <FoataFingerprintViz />
                </SyncContainer>
              </div>
            </div>

            {/* Concept 18: Conformal Calibration */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-sky-400">
                  <LineChart className="h-3 w-3" /> Statistical Bounds
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <Tooltip term="Conformal Calibration">Conformal Calibration</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  How do you set a timeout for a task if you don&apos;t know what the normal distribution of execution times looks like? Standard deviations fail completely if the underlying data isn&apos;t a perfect bell curve.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Asupersync&apos;s Lab Runtime uses a formal statistical technique called Conformal Prediction. By analyzing historical traces, it draws a mathematically strict boundary that is guaranteed to contain 99% of future tasks—entirely distribution-free. If a task breaks this bound, the runtime knows with mathematical certainty that it represents a true anomaly, not just statistical noise.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#0EA5E9" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-sky-900/20">
                   <ConformalCalibrationViz />
                </SyncContainer>
              </div>
            </div>

            {/* Concept 19: Cancel Fuel */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-orange-400">
                  <Flame className="h-3 w-3" /> Termination Proof
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <Tooltip term="Cancel Fuel">Cancel Fuel</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  When you initiate a shutdown across thousands of nested tasks, how do you mathematically prove that the cancellation cascade will actually finish and not get stuck in an infinite cycle?
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Asupersync injects a finite amount of &quot;Cancel Fuel&quot; into the top of the Region Tree. Every time cancellation propagates to a sub-region or a child task, it consumes exactly one unit of fuel. Because the fuel strictly decreases and cannot drop below zero, the runtime guarantees absolute termination.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#F97316" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-orange-900/20">
                   <CancelFuelViz />
                </SyncContainer>
              </div>
            </div>

            {/* Concept 20: Trace Replay Stability */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">
                  <GitCommit className="h-3 w-3" /> Replay Correctness
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  Trace Replay Stability
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  If five background nodes crash simultaneously during a test, traditional runtimes report those crashes to the supervisor in a random, chaotic order governed by thread races. A bug caused by one specific arrival order might never reproduce locally.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Asupersync resolves concurrent races mathematically. When simultaneous events occur, the runtime applies a strict deterministic tie-breaker (sorting by virtual timestamp, then by Task ID). Replaying the exact same trace ten thousand times guarantees the exact same arrival order ten thousand times.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#6366F1" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-indigo-900/20">
                   <TraceReplayStabilityViz />
                </SyncContainer>
              </div>
            </div>

            {/* Concept 21: Distributed Sagas */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">
                  <ArrowRight className="h-3 w-3" /> Orchestration
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <Tooltip term="Saga">Distributed Sagas</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  When a transaction spans multiple microservices, you cannot hold a single database lock. If the workflow fails on step 4, how do you undo the side-effects of steps 1, 2, and 3?
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Asupersync provides a first-class Saga engine. You define a forward action and a backward (compensating) action for each step. If any step fails—or if cancellation strikes mid-flight—the runtime automatically walks backward up the tree, executing the compensations in strict LIFO order to restore the system to a clean state.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#10B981" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-emerald-900/20">
                   <SagaCompensationViz />
                </SyncContainer>
              </div>
            </div>

            {/* Concept 22: Small-Step Semantics */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                  <Braces className="h-3 w-3" /> Formal Verification
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <Tooltip term="Small-Step Semantics">Small-Step Semantics</Tooltip>
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Most runtimes are built on an &quot;it compiles, ship it&quot; mentality. Asupersync&apos;s core behavior is strictly defined by a set of formal mathematical rules written in Lean 4.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Every evaluation step, cancellation cascade, and obligation transfer corresponds to a specific Transition Rule. These semantics mathematically prove the soundness of the runtime&apos;s guarantees before they are ever translated into Rust code.
                </p>
              </div>
              <div className="flex-1 w-full max-w-2xl">
                <SyncContainer withPulse={true} accentColor="#3B82F6" className="p-4 md:p-8 bg-black/40 shadow-2xl shadow-blue-900/20">
                   <SmallStepSemanticsViz />
                </SyncContainer>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================
          3. WHY ASUPERSYNC (Feature Cards)
          ================================================================ */}
      <SectionShell
        id="features"
        icon="sparkles"
        eyebrow="Why Asupersync"
        title="Built Different"
        kicker="Asupersync is a ground-up async runtime providing cancel-correctness guarantees, structured concurrency, and algorithms borrowed directly from formal verification."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </SectionShell>

      {/* ================================================================
          4. HOW IT COMPARES
          ================================================================ */}
      <SectionShell
        id="comparison"
        icon="gitCompare"
        eyebrow="How It Compares"
        title="Runtime Comparison"
        kicker="Asupersync bakes correctness guarantees into the runtime layer. Features that require manual discipline in other runtimes are enforced by the architecture."
      >
        <ComparisonTable />
      </SectionShell>

      {/* ================================================================
          5. THE CODE
          ================================================================ */}
      <SectionShell
        id="code"
        icon="terminal"
        eyebrow="The Code"
        title="Clean API, Cancel-Safe"
        kicker="A cancel-correct server in under 25 lines. Regions scope task lifetimes, Cx controls capabilities, and Permits enforce resource cleanup."
      >
        <SyncContainer withPulse={true} accentColor="#3B82F6" className="p-1 md:p-2 bg-black/40">
          <RustCodeBlock code={codeExample} title="examples/server.rs" />
        </SyncContainer>
      </SectionShell>

      {/* ================================================================
          6. ARCHITECTURE PREVIEW (Timeline)
          ================================================================ */}
      <SectionShell
        id="architecture-preview"
        icon="clock"
        eyebrow="Development Timeline"
        title="From Theory to crates.io"
        kicker="Built on formal foundations. Every phase documented, every guarantee proven."
      >
        <Timeline items={changelog.slice(0, 3)} />

        <div className="mt-10 flex justify-center">
          <Link
            href="/architecture"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-slate-300 transition-all hover:border-blue-500/30 hover:bg-white/10 hover:text-white"
          >
            View Full Architecture
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </SectionShell>

      {/* ================================================================
          7. GET STARTED CTA
          ================================================================ */}
      <section className="relative overflow-hidden py-28 md:py-36 lg:py-44">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-900/60 bg-gradient-to-br from-blue-950/80 to-blue-900/50 text-blue-400 shadow-lg shadow-blue-900/10">
              <Rocket className="h-6 w-6" />
            </div>
          </div>

          <GlitchText trigger="hover" intensity="medium">
            <h2 className="font-bold tracking-tighter text-white text-4xl md:text-6xl">
              Ready to Build?
            </h2>
          </GlitchText>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl font-medium">
            Add Asupersync to your Rust project with a single command. Ship
            async systems with cancel-correctness guarantees from day one.
          </p>

          {/* Install command */}
          <div className="mx-auto mt-10 max-w-md">
            <div className="glow-blue overflow-hidden rounded-2xl border border-blue-500/20 bg-black/60 shadow-xl shadow-blue-950/30">
              <div className="flex items-center gap-3 border-b border-white/5 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-blue-500/60" />
                </div>
                <span className="text-xs text-slate-600 font-bold uppercase tracking-widest">terminal</span>
              </div>

              <div className="px-6 py-5">
                <div className="flex items-center gap-3 font-mono text-sm">
                  <span className="select-none text-blue-500 font-bold">$</span>
                  <code className="text-slate-200 font-bold tracking-tight">cargo add asupersync</code>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <Package className="h-3 w-3 text-blue-400" />
              MIT License &middot; Free &amp; Open Source
            </div>

            <Link
              href="/getting-started"
              data-magnetic="true"
              className="glow-blue group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-900/30 transition-all hover:from-blue-500 hover:to-blue-400 hover:shadow-blue-800/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020a14]"
            >
              <Rocket className="h-5 w-5" />
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          8. AGENT FLYWHEEL + AUTHOR CREDIT (Grand Finale)
          ================================================================ */}
      <section id="flywheel" className="relative border-t border-white/5">
        <AgentFlywheel />
      </section>

    </main>
  );
}