"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Trophy, Clock, Users, TrendingUp } from "lucide-react";

function FloatingCard({
  children,
  className,
  delay = 0,
  duration = 6,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      className={`glass-card-strong absolute p-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] ${className}`}
      style={{ animation: `float ${duration}s ease-in-out ${delay}s infinite` }}
    >
      {children}
    </motion.div>
  );
}

function MockupDashboard() {
  return (
    <div className="relative w-full max-w-[440px] mx-auto">
      {/* Floating cards — hidden on small screens to avoid overflow */}
      <FloatingCard className="hidden sm:block w-[148px] -left-16 top-14 z-20" delay={0.8} duration={7}>
        <div className="flex items-center gap-2 mb-2">
          <Trophy size={12} className="text-amber-400" />
          <span className="text-[10px] font-semibold text-white/80">Win Rate</span>
        </div>
        <p className="text-[22px] font-bold text-white leading-none">61%</p>
        <p className="text-[9px] text-emerald-400 mt-1 flex items-center gap-0.5">
          <TrendingUp size={8} />
          +8% this month
        </p>
      </FloatingCard>

      <FloatingCard className="hidden sm:block w-[156px] -right-14 top-10 z-20" delay={1.0} duration={5.5}>
        <div className="flex items-center gap-2 mb-2">
          <Sparkles size={12} className="text-violet-400" />
          <span className="text-[10px] font-semibold text-white/80">Favorite Game</span>
        </div>
        <p className="text-[13px] font-bold text-white leading-tight">Arclight Traders</p>
        <p className="text-[9px] text-white/40 mt-0.5">12 plays this year</p>
      </FloatingCard>

      <FloatingCard className="hidden sm:block w-[144px] -right-12 bottom-24 z-20" delay={1.2} duration={6.5}>
        <div className="flex items-center gap-2 mb-2">
          <Users size={12} className="text-blue-400" />
          <span className="text-[10px] font-semibold text-white/80">Group Sessions</span>
        </div>
        <p className="text-[22px] font-bold text-white leading-none">24</p>
        <div className="flex gap-1 mt-1.5">
          {["M", "J", "A", "Y"].map((i) => (
            <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500/50 to-indigo-500/50 flex items-center justify-center text-[8px] font-bold text-white/80">
              {i}
            </div>
          ))}
        </div>
      </FloatingCard>

      <FloatingCard className="hidden sm:block w-[148px] -left-14 bottom-20 z-20" delay={0.6} duration={8}>
        <div className="flex items-center gap-2 mb-2">
          <Clock size={12} className="text-indigo-400" />
          <span className="text-[10px] font-semibold text-white/80">Last Session</span>
        </div>
        <p className="text-[12px] font-bold text-white">Moon Harbor</p>
        <p className="text-[9px] text-white/40 mt-0.5">with Juno · 3 days ago</p>
        <div className="mt-1.5 px-2 py-0.5 bg-violet-500/10 rounded-full inline-block">
          <span className="text-[9px] text-violet-300">2nd place</span>
        </div>
      </FloatingCard>

      {/* Main dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 glass-card-strong overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.08)] rounded-2xl"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="flex-1 mx-4 h-5 bg-white/[0.05] rounded-md flex items-center justify-center">
            <span className="text-[10px] text-white/20 font-mono">tabletales.app</span>
          </div>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-white/30 font-medium uppercase tracking-widest mb-0.5">Today</p>
              <h3 className="text-[15px] font-semibold text-white">Mina의 게임 기록</h3>
            </div>
            <div className="px-2.5 py-1 bg-violet-500/15 border border-violet-500/20 rounded-full">
              <span className="text-[10px] font-medium text-violet-300">기록 중</span>
            </div>
          </div>

          <div className="space-y-2">
            {[
              { game: "Arclight Traders", players: "Mina, Juno, Alex", score: "42 pts", rank: "1st", color: "from-amber-500/20 to-amber-600/10" },
              { game: "Moon Harbor", players: "Mina, Yuna", score: "31 pts", rank: "2nd", color: "from-blue-500/20 to-blue-600/10" },
              { game: "Forest Signal", players: "Mina, Juno, Alex, Yuna", score: "58 pts", rank: "1st", color: "from-emerald-500/20 to-emerald-600/10" },
            ].map((session, i) => (
              <div key={i} className={`flex items-center justify-between p-3 rounded-xl bg-gradient-to-r ${session.color} border border-white/[0.05]`}>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.07] flex items-center justify-center text-[11px] font-bold text-white/60">
                    {session.rank[0]}
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-white leading-tight">{session.game}</p>
                    <p className="text-[10px] text-white/40">{session.players}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[12px] font-bold text-white">{session.score}</p>
                  <p className="text-[10px] text-white/40">{session.rank}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 pt-1">
            {[
              { label: "Total Plays", value: "47" },
              { label: "Win Rate", value: "61%" },
              { label: "Sessions", value: "12" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/[0.03] rounded-xl p-3 text-center border border-white/[0.05]">
                <p className="text-[15px] font-bold text-white">{stat.value}</p>
                <p className="text-[9px] text-white/30 mt-0.5 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.05]">
            <p className="text-[10px] text-white/30 mb-2 font-medium uppercase tracking-wider">점수 입력</p>
            <div className="space-y-1.5">
              {["Mina", "Juno", "Alex"].map((name, i) => (
                <div key={name} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500/40 to-indigo-500/40 flex items-center justify-center text-[8px] font-bold text-white/70">
                    {name[0]}
                  </div>
                  <div className="flex-1 h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full" style={{ width: `${[85, 60, 45][i]}%` }} />
                  </div>
                  <span className="text-[10px] font-semibold text-white/70 w-6 text-right">{[42, 31, 24][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Glow behind mockup */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-25 rounded-full bg-gradient-to-br from-violet-600/50 via-indigo-600/30 to-blue-600/20" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-violet-600/8 via-indigo-600/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-violet-700/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-indigo-700/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full">
        {/* ── 텍스트 영역 — 중앙 정렬 ── */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full border border-violet-500/25 bg-violet-500/8"
          >
            <Sparkles size={12} className="text-violet-400" />
            <span className="text-[12px] font-medium text-violet-300 tracking-wide">
              Board game sessions, beautifully remembered
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[44px] sm:text-[58px] lg:text-[68px] font-bold leading-[1.06] tracking-[-0.03em] text-white mb-6"
          >
            당신의 플레이를,
            <br />
            <span className="gradient-text">기록 너머의</span>
            <br />
            이야기로
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-[16px] leading-relaxed text-white/50 mb-10 max-w-[520px]"
          >
            플레이한 게임, 점수, 승패, 함께한 사람들, 그리고 그날의 분위기까지.
            <br className="hidden sm:block" />
            Table Tales는 보드게임 기록을 통계와 스토리로 쌓아가는
            <br className="hidden sm:block" />
            가장 감각적인 방법입니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="#waitlist"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-[15px] rounded-xl transition-all duration-200 shadow-[0_0_24px_rgba(124,58,237,0.4)] hover:shadow-[0_0_36px_rgba(124,58,237,0.55)]"
            >
              Waitlist 참여하기
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/[0.1] hover:border-white/[0.2] text-white/70 hover:text-white font-medium text-[15px] rounded-xl transition-all duration-200 hover:bg-white/[0.03]"
            >
              기능 살펴보기
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-6 text-[12px] text-white/25"
          >
            이미 <span className="text-white/50 font-medium">2,400+</span>명이 대기 중 · 무료로 시작
          </motion.p>
        </div>

        {/* ── 목업 — 중앙 정렬, 플로팅 카드 여백 확보 ── */}
        <div className="flex justify-center">
          {/* sm 이상에서 플로팅 카드가 튀어나올 수 있도록 수평 패딩 추가 */}
          <div className="relative w-full max-w-[440px] sm:mx-20">
            <MockupDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
