"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Copy, Check, ArrowRight, BookOpen, Shield, Blocks, Sparkles } from "lucide-react";
import { useState, useCallback, useRef, useEffect } from "react";
import SectionShell from "@/components/section-shell";
import RustCodeBlock from "@/components/rust-code-block";
import RobotMascot from "@/components/robot-mascot";
import GlitchText from "@/components/glitch-text";
import { SyncContainer } from "@/components/sync-elements";
import { faq, codeExample } from "@/lib/content";

export default function GettingStartedPage() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    const text = "cargo add asupersync";
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <main id="main-content">
      {/* Cinematic Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-28">
              <RobotMascot />
            </div>
          </div>

          <GlitchText trigger="hover" intensity="medium">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
              Get Started
            </h1>
          </GlitchText>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            Add Asupersync to your Rust project and start building cancel-correct async systems.
          </p>
        </div>
      </section>

      {/* Installation */}
      <SectionShell
        id="install"
        icon="rocket"
        eyebrow="Step 1"
        title="Install"
        kicker="Add Asupersync with a single command."
      >
        <SyncContainer className="p-6 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 font-mono text-lg">
              <span className="text-blue-500 font-bold select-none">$</span>
              <code className="text-white font-bold">cargo add asupersync</code>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-slate-400 hover:bg-white/10 hover:text-white transition-all"
            >
              {copied ? <Check className="h-4 w-4 text-blue-400" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </SyncContainer>
      </SectionShell>

      {/* Quick Example */}
      <SectionShell
        id="example"
        icon="terminal"
        eyebrow="Step 2"
        title="Write Your First Server"
        kicker="A cancel-correct TCP server in under 25 lines."
      >
        <SyncContainer withPulse={true} accentColor="#3B82F6" className="p-1 md:p-2 bg-black/40">
          <RustCodeBlock code={codeExample} title="examples/server.rs" />
        </SyncContainer>
      </SectionShell>

      {/* Three Pillars */}
      <SectionShell
        id="pillars"
        icon="shield"
        eyebrow="Core Concepts"
        title="Three Pillars"
        kicker="The foundations of cancel-correct async programming."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Blocks,
              title: "Structured Concurrency",
              desc: "Every task lives in a Region. Regions form a tree. When a Region closes, all tasks within it are cancelled and awaited. No orphaned futures.",
              color: "#3B82F6",
            },
            {
              icon: Shield,
              title: "Cancel-Correctness",
              desc: "Three-phase protocol: Request → Drain → Finalize. Tasks always get time to clean up. Resources never leak. Buffers always flush.",
              color: "#F97316",
            },
            {
              icon: Sparkles,
              title: "Deterministic Testing",
              desc: "Lab runtime with seed-controlled execution. DPOR explores interleavings systematically. Replay any bug with the same seed.",
              color: "#22c55e",
            },
          ].map((pillar) => (
            <motion.div
              key={pillar.title}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:border-blue-500/20 transition-all"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl mb-6"
                style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
              >
                <pillar.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">{pillar.title}</h3>
              <p className="text-slate-400 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      {/* FAQ */}
      <SectionShell
        id="faq"
        icon="fileText"
        eyebrow="FAQ"
        title="Common Questions"
        kicker="Answers to the most frequent questions about Asupersync."
      >
        <div className="space-y-4">
          {faq.map((item) => (
            <details key={item.question} className="group rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="flex items-center justify-between px-8 py-6 cursor-pointer text-white font-bold hover:text-blue-400 transition-colors">
                {item.question}
                <ArrowRight className="h-4 w-4 text-slate-600 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-8 pb-6 text-slate-400 leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </SectionShell>

      {/* Navigation */}
      <div className="mx-auto max-w-7xl px-6 py-20 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/architecture" className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-slate-300 hover:border-blue-500/30 hover:text-white transition-all">
          <BookOpen className="h-4 w-4" />
          Read the Architecture Guide
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <Link href="/glossary" className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-slate-300 hover:border-blue-500/30 hover:text-white transition-all">
          Browse the Glossary
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </main>
  );
}
