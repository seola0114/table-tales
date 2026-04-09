"use client";

import { motion } from "framer-motion";
import { CalendarDays, Check, PenLine, Users2 } from "lucide-react";
import PhoneScreenPreview from "./PhoneScreenPreview";

const previewSizes = {
  home: { width: 720, height: 2880 },
  record: { width: 720, height: 1898 },
  players: { width: 720, height: 1560 },
} as const;

const features = [
  {
    id: "home",
    tag: "Home Overview",
    headline: "홈에서 바로,\n최근 플레이와 기록의 흐름을 확인하세요",
    desc: "최근 플레이한 게임, 누적 기록, 다시 보고 싶은 세션까지 앱을 열자마자 바로 확인할 수 있습니다.",
    icon: CalendarDays,
    accentColor: "from-[#8B5CF6]/20 to-[#7DA2FF]/8",
    borderColor: "border-[#8B5CF6]/24",
    iconColor: "text-[#A78BFA]",
    glowColor: "bg-[#8B5CF6]/14",
    bullets: [
      "최근 플레이 요약 확인",
      "누적 기록과 플레이 흐름 확인",
      "다시 보고 싶은 게임 빠르게 진입",
      "기록이 쌓일수록 더 유용해지는 홈 구조",
    ],
    screen: "/service-previews/home-rich.png",
    alt: "Table Tales 홈 화면",
  },
  {
    id: "record",
    tag: "Session Record",
    headline: "입력은 간단하게,\n기록은 더 풍부하게",
    desc: "게임, 날짜, 별점, 플레이 시간, 장소, 메모까지 필요한 정보를 한 흐름 안에서 자연스럽게 기록할 수 있습니다.",
    icon: PenLine,
    accentColor: "from-[#19c8a6]/16 to-[#8B5CF6]/8",
    borderColor: "border-[#19c8a6]/24",
    iconColor: "text-[#7AE7C7]",
    glowColor: "bg-[#19c8a6]/12",
    bullets: [
      "필요한 정보부터 차근차근 입력",
      "별점과 플레이 메모를 함께 기록",
      "장소와 플레이 시간까지 정리 가능",
      "빠르게 남기면서도 충분한 정보 보존",
    ],
    screen: "/service-previews/record-rich.png",
    alt: "Table Tales 기록 입력 화면",
  },
  {
    id: "players",
    tag: "Players",
    headline: "누구와 함께했는지도\n기록의 중요한 일부니까",
    desc: "플레이어를 선택해 그날의 모임을 더 또렷하게 남길 수 있습니다. 기록이 쌓일수록 사람과 게임의 관계도 함께 쌓여갑니다.",
    icon: Users2,
    accentColor: "from-[#8B5CF6]/20 to-[#19c8a6]/8",
    borderColor: "border-[#8B5CF6]/22",
    iconColor: "text-[#C3B2FF]",
    glowColor: "bg-[#8B5CF6]/12",
    bullets: [
      "함께한 플레이어를 빠르게 선택",
      "인원 수를 직관적으로 확인",
      "혼자 한 플레이도, 여럿이 한 플레이도 기록 가능",
      "모임 단위 기록으로 확장하기 좋은 구조",
    ],
    screen: "/service-previews/players-rich.png",
    alt: "Table Tales 플레이어 선택 화면",
  },
];

function AppScreenVisual({
  src,
  alt,
  accent,
  width,
  height,
}: {
  src: string;
  alt: string;
  accent: string;
  width: number;
  height: number;
}) {
  return (
    <div className="relative mx-auto max-w-[320px]">
      <div className={`absolute inset-x-8 top-10 h-[78%] rounded-full bg-gradient-to-b ${accent} blur-3xl opacity-90`} />
      <PhoneScreenPreview src={src} alt={alt} width={width} height={height} />
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
            className="mb-5 text-[36px] font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-[44px]"
          >
            실제 사용 흐름에 맞춰 만든
            <br />
            <span className="gradient-text">기록 경험</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto max-w-xl text-[16px] leading-relaxed text-white/40"
          >
            예쁜 화면에 머무르지 않고, 홈에서 최근 기록을 확인하고 게임을 찾고 플레이어를 고르고 플레이를 기록하는 실제 사용 흐름이 자연스럽게 이어지도록 설계했습니다.
          </motion.p>
        </div>

        <div className="space-y-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isEven = i % 2 === 0;
            const previewSize = previewSizes[feature.id as keyof typeof previewSizes];

            return (
              <motion.div
                key={feature.id}
                id={feature.id === "players" ? "stats" : undefined}
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
                  <h3 className="mt-6 whitespace-pre-line text-[28px] font-bold leading-[1.3] tracking-[-0.025em] text-white sm:text-[34px]">
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
                    <AppScreenVisual
                      src={feature.screen}
                      alt={feature.alt}
                      accent={feature.accentColor}
                      width={previewSize.width}
                      height={previewSize.height}
                    />
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
            { label: "최근 기록", value: "최근 플레이를 한눈에" },
            { label: "게임 탐색", value: "찾고 바로 기록하는 검색 경험" },
            { label: "플레이어", value: "누구와 했는지 함께 남기기" },
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
