"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Trophy, BarChart2, Users, Calendar, Star, TrendingUp, Clock, Zap } from "lucide-react";

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  accent,
  delay = 0,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  sub?: string;
  accent: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card-strong p-5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/[0.15] transition-all duration-300"
    >
      <div className={`w-9 h-9 rounded-xl mb-4 flex items-center justify-center ${accent}`}>
        <Icon size={16} className="text-white" />
      </div>
      <p className="text-[11px] font-medium text-white/35 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-[28px] font-bold text-white tracking-tight leading-none">{value}</p>
      {sub && <p className="text-[11px] text-white/30 mt-1.5">{sub}</p>}
    </motion.div>
  );
}

function MobileScreen({ variant }: { variant: "home" | "session" | "stats" }) {
  if (variant === "home") {
    return (
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-[9px] text-white/30 font-medium">Good evening,</p>
            <p className="text-[14px] font-bold text-white">Mina 👋</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-[12px] font-bold text-white">
            M
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-xl p-3 border border-emerald-500/15">
          <p className="text-[9px] text-emerald-300 font-medium mb-0.5">최근 세션</p>
          <p className="text-[12px] font-bold text-white">Arclight Traders</p>
          <p className="text-[9px] text-white/40">3 players · 42 pts · 1st place</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Total Plays", value: "47" },
            { label: "This Month", value: "8" },
            { label: "Win Rate", value: "61%" },
            { label: "Games", value: "12" },
          ].map((s) => (
            <div key={s.label} className="bg-white/[0.04] rounded-xl p-2.5 border border-white/[0.05]">
              <p className="text-[16px] font-bold text-white">{s.value}</p>
              <p className="text-[8px] text-white/30 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <p className="text-[9px] text-white/30 font-medium uppercase tracking-wider">Recent Games</p>
          {["Arclight Traders", "Moon Harbor", "Forest Signal"].map((game, i) => (
            <div key={game} className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center text-[8px] font-bold text-white/40">
                {i + 1}
              </div>
              <span className="text-[11px] text-white/60">{game}</span>
              <div className="flex-1" />
              <ChevronIcon />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "session") {
    return (
      <div className="p-4 space-y-3">
        <p className="text-[10px] text-white/30 font-medium uppercase tracking-wider mb-3">세션 기록</p>
        <div className="bg-white/[0.04] rounded-xl p-3 border border-white/[0.06]">
          <p className="text-[9px] text-white/30 mb-1">게임</p>
          <p className="text-[13px] font-bold text-white">Crimson Railway</p>
        </div>
        <div className="space-y-2">
          {[
            { name: "Mina", score: 78, first: true },
            { name: "Juno", score: 65, first: false },
            { name: "Alex", score: 54, first: false },
            { name: "Yuna", score: 49, first: false },
          ].map((p) => (
            <div key={p.name} className="flex items-center gap-2.5">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold ${p.first ? "bg-amber-500/20 text-amber-300" : "bg-white/[0.06] text-white/40"}`}>
                {p.name[0]}
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-0.5">
                  <span className="text-[10px] font-semibold text-white/70">{p.name}</span>
                  <span className="text-[10px] font-bold text-white">{p.score}</span>
                </div>
                <div className="h-1 bg-white/[0.05] rounded-full">
                  <div
                    className={`h-full rounded-full ${p.first ? "bg-amber-400" : "bg-emerald-500/50"}`}
                    style={{ width: `${(p.score / 78) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white/[0.03] rounded-xl p-2.5 border border-white/[0.04]">
          <p className="text-[9px] text-white/25 italic">"Mina가 철도 독점으로 역대급 점수 기록"</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[13px] font-bold text-white">My Stats</p>
        <span className="text-[10px] text-teal-300 font-medium">2024</span>
      </div>
      <div className="flex gap-2 h-16 items-end">
        {[30, 50, 40, 70, 60, 85, 75, 90, 65, 80, 70, 60].map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-sm ${i === 11 ? "bg-teal-500" : "bg-white/[0.07]"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Win Rate", value: "61%", up: true },
          { label: "Fav Game", value: "Arclight", up: false },
          { label: "Best Month", value: "Jun", up: false },
          { label: "Streak", value: "8 plays", up: true },
        ].map((s) => (
          <div key={s.label} className="bg-white/[0.04] rounded-xl p-2.5 border border-white/[0.05]">
            <p className="text-[8px] text-white/25 font-medium mb-0.5">{s.label}</p>
            <p className="text-[12px] font-bold text-white">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white/20">
      <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneFrame({ children, className = "", tilt = 0 }: { children: React.ReactNode; className?: string; tilt?: number }) {
  return (
    <div
      className={`relative w-[180px] sm:w-[210px] ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="rounded-[28px] bg-[#0e0e24] border border-white/[0.12] shadow-[0_24px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden">
        {/* Notch */}
        <div className="flex justify-center pt-2.5 pb-1.5 bg-[#0a0a1a]">
          <div className="w-20 h-5 bg-black rounded-b-2xl" />
        </div>
        {/* Content */}
        <div className="bg-[#06060f] pb-4">{children}</div>
        {/* Home indicator */}
        <div className="flex justify-center py-2 bg-[#06060f]">
          <div className="w-24 h-1 bg-white/10 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 section-glow pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display-italic text-[14px] text-[#C6FF33] tracking-wide mb-4"
          >
            Visual Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[36px] sm:text-[44px] font-bold tracking-[-0.03em] text-white"
          >
            테이블 위의 모든 순간,
            <br />
            <span className="gradient-text">한 곳에서 선명하게</span>
          </motion.h2>
        </div>

        {/* Phone mockups + stat cards */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 min-h-[520px]">
          {/* Left phone */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:absolute lg:left-[4%] xl:left-[8%] z-10"
          >
            <PhoneFrame tilt={-4}>
              <MobileScreen variant="home" />
            </PhoneFrame>
          </motion.div>

          {/* Center phone (larger, prominent) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 scale-110 sm:scale-125"
          >
            <div className="absolute inset-0 -z-10 blur-3xl opacity-35 bg-gradient-to-b from-[#7D39EB]/55 to-[#C6FF33]/18 rounded-full scale-150" />
            <PhoneFrame>
              <MobileScreen variant="session" />
            </PhoneFrame>
          </motion.div>

          {/* Right phone */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:absolute lg:right-[4%] xl:right-[8%] z-10"
          >
            <PhoneFrame tilt={4}>
              <MobileScreen variant="stats" />
            </PhoneFrame>
          </motion.div>
        </div>

        {/* Stat cards below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          <StatCard
            icon={Trophy}
            label="Best Win Streak"
            value="6"
            sub="Mina · Jan 2024"
            accent="bg-gradient-to-br from-[#7D39EB] to-[#A566FF]"
            delay={0}
          />
          <StatCard
            icon={BarChart2}
            label="Avg Session Length"
            value="2.4h"
            sub="주말 모임 기준"
            accent="bg-gradient-to-br from-[#C6FF33] to-[#7D39EB]"
            delay={0.1}
          />
          <StatCard
            icon={Users}
            label="Unique Players"
            value="12"
            sub="올해 함께한 사람들"
            accent="bg-gradient-to-br from-[#A566FF] to-[#7D39EB]"
            delay={0.2}
          />
          <StatCard
            icon={Zap}
            label="Fastest Record"
            value="8s"
            sub="점수 입력 평균 시간"
            accent="bg-gradient-to-br from-[#7D39EB] to-[#C6FF33]"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
