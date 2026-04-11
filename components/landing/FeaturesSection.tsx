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
    headline: "오늘의 플레이를,\n한 장으로 정리해보세요",
    desc: "최근 플레이한 게임, 다시 보고 싶은 세션, 기록의 흐름까지 홈에서 한 번에 확인할 수 있습니다.",
    icon: CalendarDays,
    accentColor: "from-[#8B5CF6]/20 to-[#7DA2FF]/8",
    borderColor: "border-[#8B5CF6]/24",
    iconColor: "text-[#A78BFA]",
    glowColor: "bg-[#8B5CF6]/14",
    bullets: [
      "최근 플레이와 기록 흐름을 한눈에 확인",
      "쌓인 기록을 다시 꺼내보기 쉬운 홈 구조",
      "자주 한 게임과 기억나는 세션 빠르게 진입",
      "통계 업데이트를 준비 중인 확장형 홈",
    ],
    screen: "/service-previews/home-rich.png",
    alt: "Table Tales 홈 화면",
  },
  {
    id: "record",
    tag: "Session Record",
    headline: "기록은 간단하게,\n그날의 순간은 더 풍부하게",
    desc: "게임, 날짜, 별점, 플레이 시간, 장소, 후기까지 오늘의 플레이를 한 흐름 안에서 부담 없이 남길 수 있습니다.",
    icon: PenLine,
    accentColor: "from-[#19c8a6]/16 to-[#8B5CF6]/8",
    borderColor: "border-[#19c8a6]/24",
    iconColor: "text-[#7AE7C7]",
    glowColor: "bg-[#19c8a6]/12",
    bullets: [
      "5,000개+ 게임 검색 후 바로 기록 시작",
      "플레이 날짜, 인원, 시간, 장소까지 정리",
      "짧은 후기 한 줄로 그날의 분위기 보존",
      "일일이 입력하다 포기하지 않게 빠른 기록 경험",
    ],
    screen: "/service-previews/record-rich.png",
    alt: "Table Tales 기록 입력 화면",
  },
  {
    id: "players",
    tag: "Players",
    headline: "누구와 함께했는지도\n플레이의 중요한 기억이니까",
    desc: "함께한 플레이어를 남겨두면 나중에 이 게임을 누구와 했는지, 그날의 모임 분위기가 어땠는지 더 선명하게 떠올릴 수 있습니다.",
    icon: Users2,
    accentColor: "from-[#8B5CF6]/20 to-[#19c8a6]/8",
    borderColor: "border-[#8B5CF6]/22",
    iconColor: "text-[#C3B2FF]",
    glowColor: "bg-[#8B5CF6]/12",
    bullets: [
      "함께한 플레이어를 빠르게 선택하고 저장",
      "솔로 플레이와 여러 명 플레이 모두 기록 가능",
      "나중에 “이 게임 누구랑 했더라?”를 바로 확인",
      "승자와 모임 맥락까지 같이 남기기 좋은 구조",
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
            보드게임 플레이를 기록하는
            <br />
            <span className="gradient-text">가장 자연스러운 흐름</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto max-w-xl text-[16px] leading-relaxed text-white/40"
          >
            “지난주에 뭐 했더라?”, “그 게임 이름이 뭐였지?” 같은 순간에서 출발해,
            게임 검색부터 기록 작성, 플레이어 저장까지 실제 사용 흐름이 자연스럽게 이어지도록 설계했습니다.
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

      </div>
    </section>
  );
}
