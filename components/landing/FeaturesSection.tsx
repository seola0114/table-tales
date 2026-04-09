"use client";

import { motion } from "framer-motion";
import {
  PenLine, BarChart2, BookOpen, Users2,
  Check, ChevronRight, Star, Calendar, Hash,
  TrendingUp, MessageSquare, Shield
} from "lucide-react";

const features = [
  {
    id: "record",
    tag: "Record",
    headline: "기록은 빠르게,\n기억은 오래",
    desc: "게임 제목, 플레이어, 점수, 날짜, 메모까지. 번거로운 입력 없이 한 흐름으로 기록하고 바로 다음 게임으로.",
    icon: PenLine,
    accentColor: "from-emerald-500/20 to-emerald-600/5",
    borderColor: "border-emerald-500/15",
    iconColor: "text-emerald-400",
    glowColor: "bg-emerald-500/10",
    bullets: [
      "플레이어 이름 자동완성",
      "점수 방식 자유 설정 (합산 / 최고점 / 팀전)",
      "한 게임에 여러 라운드 기록",
      "메모와 하이라이트 저장",
    ],
    visual: <RecordVisual />,
  },
  {
    id: "analyze",
    tag: "Analyze",
    headline: "숫자가 말해주는\n당신의 플레이",
    desc: "승률, 자주 한 게임, 자주 만나는 상대, 플레이 빈도, 선호 장르. 쌓인 기록이 패턴이 되고 패턴이 통찰이 됩니다.",
    icon: BarChart2,
    accentColor: "from-teal-500/20 to-teal-600/5",
    borderColor: "border-teal-500/15",
    iconColor: "text-teal-400",
    glowColor: "bg-teal-500/10",
    bullets: [
      "게임별 / 플레이어별 통계",
      "월별 플레이 트렌드 차트",
      "상대 전적과 상성 분석",
      "선호 메커닉 및 장르 분포",
    ],
    visual: <AnalyzeVisual />,
  },
  {
    id: "story",
    tag: "Tell the Story",
    headline: "점수 너머,\n테이블의 이야기",
    desc: "플레이 메모, 기억에 남는 순간, 모임의 흐름. 기록이 쌓일수록 테이블 위의 시간이 하나의 이야기가 됩니다.",
    icon: BookOpen,
    accentColor: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/15",
    iconColor: "text-blue-400",
    glowColor: "bg-blue-500/10",
    bullets: [
      "세션별 한 줄 기억 남기기",
      "플레이어별 명장면 태그",
      "모임 타임라인 자동 생성",
      "기념일 · 특별 세션 마킹",
    ],
    visual: <StoryVisual />,
  },
  {
    id: "groups",
    tag: "For Groups",
    headline: "함께하는 시간이\n더 선명해집니다",
    desc: "정기 모임, 캠페인 플레이, 친구들과의 전적 비교. 함께한 사람들과의 기록이 그룹의 역사가 됩니다.",
    icon: Users2,
    accentColor: "from-emerald-500/20 to-emerald-600/5",
    borderColor: "border-emerald-500/15",
    iconColor: "text-emerald-400",
    glowColor: "bg-emerald-500/10",
    bullets: [
      "그룹 공유 및 함께 기록",
      "멤버별 전적 비교 대시보드",
      "정기 모임 세션 관리",
      "캠페인 / 시리즈 플레이 추적",
    ],
    visual: <GroupVisual />,
  },
];

function RecordVisual() {
  return (
    <div className="p-5 space-y-3">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider">새 세션 기록</p>
        <div className="px-2.5 py-1 bg-emerald-500/15 rounded-full">
          <span className="text-[10px] text-emerald-300 font-medium">저장됨</span>
        </div>
      </div>
      <div className="space-y-2.5">
        <div>
          <p className="text-[9px] text-white/30 mb-1 font-medium">게임</p>
          <div className="flex items-center gap-2 bg-white/[0.04] rounded-lg px-3 py-2 border border-white/[0.07]">
            <span className="text-[13px] font-semibold text-white">Arclight Traders</span>
          </div>
        </div>
        <div>
          <p className="text-[9px] text-white/30 mb-1 font-medium">플레이어 & 점수</p>
          <div className="space-y-1.5">
            {[
              { name: "Mina", score: 42, width: "80%", gold: true },
              { name: "Juno", score: 35, width: "66%", gold: false },
              { name: "Alex", score: 28, width: "53%", gold: false },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-[9px] font-bold text-emerald-300">
                  {p.name[0]}
                </div>
                <span className="text-[11px] text-white/70 w-10">{p.name}</span>
                <div className="flex-1 h-1 bg-white/[0.05] rounded-full">
                  <div
                    className={`h-full rounded-full ${p.gold ? "bg-amber-400" : "bg-emerald-500/50"}`}
                    style={{ width: p.width }}
                  />
                </div>
                <span className="text-[11px] font-bold text-white">{p.score}</span>
                {p.gold && <Star size={10} className="text-amber-400" />}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[9px] text-white/30 mb-1 font-medium">메모</p>
          <div className="bg-white/[0.03] rounded-lg px-3 py-2 border border-white/[0.06]">
            <p className="text-[11px] text-white/40 italic leading-relaxed">
              "마지막 라운드 역전승 🎉 알렉스가 항구 독점했음"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyzeVisual() {
  const bars = [
    { label: "Jan", height: 40 },
    { label: "Feb", height: 65 },
    { label: "Mar", height: 50 },
    { label: "Apr", height: 80 },
    { label: "May", height: 70 },
    { label: "Jun", height: 90 },
  ];

  return (
    <div className="p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] text-white/30 font-medium">Monthly Plays</p>
          <p className="text-[22px] font-bold text-white">47 <span className="text-[14px] text-emerald-400 font-medium">+12%</span></p>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-white/30">
          <TrendingUp size={12} className="text-emerald-400" />
          <span>6개월 기준</span>
        </div>
      </div>

      {/* Bar chart */}
      <div className="flex items-end gap-2 h-20">
        {bars.map((bar, i) => (
          <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full rounded-t-md overflow-hidden" style={{ height: `${bar.height}%` }}>
              <div
                className={`w-full h-full rounded-t-md ${i === bars.length - 1 ? "bg-teal-500" : "bg-white/[0.08]"}`}
              />
            </div>
            <span className="text-[8px] text-white/25">{bar.label}</span>
          </div>
        ))}
      </div>

      {/* Mini stats */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        {[
          { label: "Win Rate", value: "61%", icon: TrendingUp, color: "text-emerald-400" },
          { label: "Fav Game", value: "Arclight", icon: Star, color: "text-amber-400" },
        ].map((s) => (
          <div key={s.label} className="bg-white/[0.03] rounded-lg p-2.5 border border-white/[0.05]">
            <div className="flex items-center gap-1.5 mb-1">
              <s.icon size={10} className={s.color} />
              <span className="text-[9px] text-white/30 font-medium">{s.label}</span>
            </div>
            <span className="text-[14px] font-bold text-white">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StoryVisual() {
  return (
    <div className="p-5 space-y-3">
      <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-4">Session Notes</p>
      {[
        {
          date: "2024.12.14",
          game: "Forest Signal",
          note: "Yuna가 처음으로 4인전 승리. 모두 놀람.",
          tag: "명장면",
        },
        {
          date: "2024.11.30",
          game: "Moon Harbor",
          note: "연말 모임. 새벽 2시까지. 최고 세션 중 하나.",
          tag: "특별",
        },
        {
          date: "2024.11.15",
          game: "Arclight Traders",
          note: "Mina 연속 3승. '항만 퀸'이라고 불리기 시작.",
          tag: "기록",
        },
      ].map((entry) => (
        <div key={entry.date} className="glass-card p-3 hover:border-white/[0.1] transition-all duration-200">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div>
              <p className="text-[11px] font-semibold text-white leading-tight">{entry.game}</p>
              <p className="text-[9px] text-white/30">{entry.date}</p>
            </div>
            <span className="shrink-0 px-1.5 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-[8px] text-blue-300 font-medium">
              {entry.tag}
            </span>
          </div>
          <p className="text-[11px] text-white/50 leading-relaxed italic">"{entry.note}"</p>
        </div>
      ))}
    </div>
  );
}

function GroupVisual() {
  const members = [
    { name: "Mina", plays: 47, wins: 28, color: "from-emerald-500 to-teal-500" },
    { name: "Juno", plays: 42, wins: 19, color: "from-blue-500 to-cyan-500" },
    { name: "Alex", plays: 38, wins: 14, color: "from-emerald-500 to-teal-500" },
    { name: "Yuna", plays: 35, wins: 11, color: "from-amber-500 to-orange-500" },
  ];

  return (
    <div className="p-5 space-y-3">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider">Group Leaderboard</p>
        <div className="flex -space-x-2">
          {members.map((m) => (
            <div
              key={m.name}
              className={`w-7 h-7 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-[9px] font-bold text-white border-2 border-[#06060f]`}
            >
              {m.name[0]}
            </div>
          ))}
        </div>
      </div>
      {members.map((member, i) => (
        <div key={member.name} className="flex items-center gap-3">
          <span className="text-[11px] font-bold text-white/20 w-4">{i + 1}</span>
          <div
            className={`w-7 h-7 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-[10px] font-bold text-white shrink-0`}
          >
            {member.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[12px] font-semibold text-white">{member.name}</span>
              <span className="text-[11px] text-white/50 font-medium">
                {Math.round((member.wins / member.plays) * 100)}% WR
              </span>
            </div>
            <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${member.color}`}
                style={{ width: `${(member.wins / member.plays) * 100}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="font-display-italic text-[14px] text-emerald-400 tracking-wide mb-4"
          >
            Everything you need
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[36px] sm:text-[44px] font-bold tracking-[-0.03em] text-white mb-5"
          >
            기록이 쌓일수록
            <br />
            <span className="gradient-text">가치가 커집니다</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[16px] text-white/40 max-w-xl mx-auto leading-relaxed"
          >
            단순한 점수 기록이 아닙니다. 통계, 스토리, 그리고 함께한 사람들의 기억이 하나로 연결됩니다.
          </motion.p>
        </div>

        {/* Feature blocks */}
        <div className="space-y-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={feature.id}
                id={feature.id === "analyze" ? "stats" : feature.id === "story" ? "story" : undefined}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`grid lg:grid-cols-2 gap-6 items-center ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Copy */}
                <div className="space-y-6 py-6 px-2 lg:px-8">
                  <div className="inline-flex items-center gap-2.5">
                    <div className={`p-2 rounded-lg ${feature.glowColor} border ${feature.borderColor}`}>
                      <Icon size={16} className={feature.iconColor} />
                    </div>
                    <span className={`font-display-italic text-[13px] tracking-wide ${feature.iconColor}`}>
                      {feature.tag}
                    </span>
                  </div>
                  <h3 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.025em] text-white leading-[1.15] whitespace-pre-line">
                    {feature.headline}
                  </h3>
                  <p className="text-[15px] text-white/45 leading-relaxed">{feature.desc}</p>
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <div className={`mt-0.5 p-0.5 rounded-full ${feature.glowColor} border ${feature.borderColor} shrink-0`}>
                          <Check size={10} className={feature.iconColor} />
                        </div>
                        <span className="text-[14px] text-white/60">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`glass-card border ${feature.borderColor} overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.3)] relative`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.accentColor} pointer-events-none`} />
                  <div className="relative z-10">{feature.visual}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
