"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, Check, PenLine, Search, Trophy, Users2 } from "lucide-react";

const features = [
  {
    id: "home",
    tag: "Home Overview",
    headline: "홈에서 바로,\n최근 기록과 흐름을 확인",
    desc: "최근 플레이와 누적 통계, 이번 주의 하이라이트가 한 화면에 정리됩니다. 앱을 켜는 순간 다시 기억이 이어집니다.",
    icon: CalendarDays,
    accentColor: "from-[#8B5CF6]/20 to-[#7DA2FF]/8",
    borderColor: "border-[#8B5CF6]/24",
    iconColor: "text-[#A78BFA]",
    glowColor: "bg-[#8B5CF6]/14",
    bullets: [
      "최근 세션 요약 카드",
      "이번 주 플레이 통계 요약",
      "눈에 띄는 대표 기록 하이라이트",
      "가벼운 확인만으로도 리마인드 가능한 홈 구조",
    ],
    screen: "/service-previews/home.png",
    alt: "Table Tales 홈 화면",
  },
  {
    id: "record",
    tag: "Session Record",
    headline: "입력은 빠르게,\n기록은 더 풍부하게",
    desc: "게임, 날짜, 별점, 인원, 시간, 장소, 후기까지 하나의 흐름 안에서 입력할 수 있어 기록 자체가 끊기지 않습니다.",
    icon: PenLine,
    accentColor: "from-[#19c8a6]/16 to-[#8B5CF6]/8",
    borderColor: "border-[#19c8a6]/24",
    iconColor: "text-[#7AE7C7]",
    glowColor: "bg-[#19c8a6]/12",
    bullets: [
      "필수 입력만 먼저 보이는 정돈된 폼",
      "별점과 플레이 타임을 한 번에 입력",
      "장소와 후기까지 자연스럽게 이어지는 기록 흐름",
      "초록 포인트로 저장 액션이 명확한 인터페이스",
    ],
    screen: "/service-previews/record.png",
    alt: "Table Tales 기록 입력 화면",
  },
  {
    id: "search",
    tag: "Game Search",
    headline: "게임을 찾는 순간도,\n기록의 일부처럼",
    desc: "검색 결과에서 박스아트와 기본 정보를 한 번에 확인하고, 지금 찾는 게임을 빠르게 골라 바로 세션 기록으로 넘어갈 수 있습니다.",
    icon: Search,
    accentColor: "from-[#7DA2FF]/16 to-[#8B5CF6]/8",
    borderColor: "border-[#7DA2FF]/24",
    iconColor: "text-[#7DA2FF]",
    glowColor: "bg-[#7DA2FF]/12",
    bullets: [
      "검색창과 결과 리스트가 한 화면에 정리",
      "박스아트, 인원, 제작자 등 핵심 정보 동시 노출",
      "후보 게임을 빠르게 비교하기 좋은 리스트 구조",
      "실제 플레이 전환까지 흐름이 끊기지 않는 탐색 경험",
    ],
    screen: "/service-previews/search.png",
    alt: "Table Tales 게임 검색 화면",
  },
  {
    id: "players",
    tag: "Players",
    headline: "누가 함께했는지,\n선명하게 남기는 구조",
    desc: "플레이어 선택은 가볍고 빠르지만, 이후에는 전적과 관계의 맥락이 쌓일 수 있도록 설계되어 있습니다.",
    icon: Users2,
    accentColor: "from-[#8B5CF6]/20 to-[#19c8a6]/8",
    borderColor: "border-[#8B5CF6]/22",
    iconColor: "text-[#C3B2FF]",
    glowColor: "bg-[#8B5CF6]/12",
    bullets: [
      "함께한 친구 검색과 선택을 빠르게 처리",
      "현재 선택된 인원 수가 바로 보이는 구조",
      "나와 친구를 구분해 기록 맥락이 더 또렷해짐",
      "이후 상대 전적과 그룹 기록으로 확장하기 좋은 기반",
    ],
    screen: "/service-previews/players.png",
    alt: "Table Tales 플레이어 선택 화면",
  },
];

function AppScreenVisual({
  src,
  alt,
  accent,
}: {
  src: string;
  alt: string;
  accent: string;
}) {
  return (
    <div className="relative mx-auto max-w-[320px]">
      <div className={`absolute inset-x-8 top-10 h-[78%] rounded-full bg-gradient-to-b ${accent} blur-3xl opacity-90`} />
      <div className="relative rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,#dbe1e8_0%,#edf2f6_100%)] p-3 shadow-[0_26px_80px_rgba(0,0,0,0.48)]">
        <div className="overflow-hidden rounded-[26px] border border-black/5 bg-white">
          <Image src={src} alt={alt} width={768} height={1536} className="h-auto w-full" />
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-display-italic text-[14px] tracking-wide text-[#A78BFA]"
          >
            Product Flow
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 text-[36px] font-bold tracking-[-0.03em] text-white sm:text-[44px]"
          >
            실제 서비스 화면 기준으로,
            <br />
            <span className="gradient-text">더 또렷하게 정리한 경험</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto max-w-xl text-[16px] leading-relaxed text-white/40"
          >
            랜딩의 무드만 예쁜 것이 아니라, 실제 앱의 홈, 기록, 검색, 플레이어 선택 경험이 자연스럽게 이어지도록 섹션 구성도 맞췄습니다.
          </motion.p>
        </div>

        <div className="space-y-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={feature.id}
                id={feature.id === "search" ? "stats" : undefined}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`grid items-center gap-8 lg:grid-cols-2 ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="flex flex-col items-center px-2 py-6 text-center lg:px-8">
                  <div className="inline-flex items-center gap-2.5">
                    <div className={`rounded-lg border p-2 ${feature.glowColor} ${feature.borderColor}`}>
                      <Icon size={16} className={feature.iconColor} />
                    </div>
                    <span className={`font-display-italic text-[13px] tracking-wide ${feature.iconColor}`}>
                      {feature.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 whitespace-pre-line text-[28px] font-bold leading-[1.15] tracking-[-0.025em] text-white sm:text-[34px]">
                    {feature.headline}
                  </h3>
                  <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/45">{feature.desc}</p>
                  <ul className="mt-6 w-full max-w-md space-y-3 text-left">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <div className={`mt-0.5 shrink-0 rounded-full border p-0.5 ${feature.glowColor} ${feature.borderColor}`}>
                          <Check size={10} className={feature.iconColor} />
                        </div>
                        <span className="text-[14px] text-white/60">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`glass-card relative overflow-hidden border ${feature.borderColor} shadow-[0_16px_48px_rgba(0,0,0,0.32)]`}>
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${feature.accentColor}`} />
                  <div className="relative z-10 px-6 py-8">
                    <AppScreenVisual src={feature.screen} alt={feature.alt} accent={feature.accentColor} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-14 grid gap-4 md:grid-cols-3"
        >
          {[
            { label: "Session Memory", value: "별점, 메모, 장소까지" },
            { label: "Clean Search", value: "게임 탐색도 기록 흐름처럼" },
            { label: "Social Context", value: "누구와 했는지 선명하게" },
          ].map((item) => (
            <div key={item.label} className="glass-card-strong rounded-2xl p-5 text-center">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/30">{item.label}</p>
              <p className="mt-2 text-[18px] font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
