"use client";

import { motion } from "framer-motion";
import { BarChart2, Clock, Trophy, Users, Zap } from "lucide-react";
import PhoneScreenPreview from "./PhoneScreenPreview";

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
      className="glass-card-strong rounded-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-white/[0.15]"
    >
      <div className={`mb-4 flex h-9 w-9 items-center justify-center rounded-xl ${accent}`}>
        <Icon size={16} className="text-white" />
      </div>
      <p className="mb-1 text-[11px] font-medium uppercase tracking-widest text-white/35">{label}</p>
      <p className="text-[28px] font-bold leading-none tracking-tight text-white">{value}</p>
      {sub && <p className="mt-1.5 text-[11px] text-white/30">{sub}</p>}
    </motion.div>
  );
}

function ScreenTile({
  src,
  alt,
  title,
  desc,
  accent,
  delay,
  width,
  height,
}: {
  src: string;
  alt: string;
  title: string;
  desc: string;
  accent: string;
  delay: number;
  width: number;
  height: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card group relative overflow-hidden rounded-[28px] border border-white/10 p-4"
    >
      <div className={`pointer-events-none absolute inset-x-10 top-10 h-40 rounded-full bg-gradient-to-b ${accent} blur-3xl opacity-90 transition-transform duration-500 group-hover:scale-110`} />
      <PhoneScreenPreview
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="relative z-10"
        frameClassName="rounded-[26px] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.42)]"
        viewportClassName="rounded-[22px]"
      />
      <div className="relative z-10 px-1 pb-1 pt-5 text-center">
        <p className="text-[18px] font-semibold text-white">{title}</p>
        <p className="mt-2 text-[14px] leading-relaxed text-white/45">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function ShowcaseSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 section-glow" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          className="mb-4 font-display-italic text-[14px] tracking-wide text-[#A78BFA]"
        >
            Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[36px] font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-[44px]"
          >
            보드게임 플레이를 기록하는
            <br />
            <span className="gradient-text">가장 자연스러운 방법</span>
          </motion.h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-white/42">
            게임이 끝난 뒤의 기억은 생각보다 빨리 흐려집니다. TableTales는 플레이한 게임, 함께한 사람, 그날의 분위기와 감상을 쉽게 기록하고 다시 꺼내볼 수 있도록 돕습니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <ScreenTile
            src="/service-previews/home-rich.png"
            alt="홈 화면"
            title="홈 요약"
            desc="최근 플레이, 누적 기록, 다시 보고 싶은 게임을 확인하는 출발점"
            accent="from-[#8B5CF6]/35 to-transparent"
            delay={0}
            width={720}
            height={2880}
          />
          <ScreenTile
            src="/service-previews/record-rich.png"
            alt="기록 입력 화면"
            title="세션 기록"
            desc="별점, 시간, 장소, 메모까지 자연스럽게 이어지는 기록 경험"
            accent="from-[#19c8a6]/35 to-transparent"
            delay={0.08}
            width={720}
            height={1898}
          />
          <ScreenTile
            src="/service-previews/search-results-rich.png"
            alt="게임 검색 결과 화면"
            title="게임 검색"
            desc="찾고 싶은 게임을 빠르게 탐색하고 바로 선택하는 단계"
            accent="from-[#7DA2FF]/35 to-transparent"
            delay={0.16}
            width={720}
            height={1560}
          />
          <ScreenTile
            src="/service-previews/players-rich.png"
            alt="플레이어 선택 화면"
            title="플레이어 선택"
            desc="누가 함께했는지 선명하게 남기는 마지막 정리"
            accent="from-[#A78BFA]/35 to-transparent"
            delay={0.24}
            width={720}
            height={1560}
          />
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard
            icon={Trophy}
            label="기록"
            value="플레이를 남기고"
            sub="세션 하나하나를 놓치지 않고 저장"
            accent="bg-gradient-to-br from-[#ff9f1a] to-[#ffbf47]"
            delay={0}
          />
          <StatCard
            icon={Clock}
            label="통계"
            value="쌓인 기록을 돌아보고"
            sub="기록이 쌓일수록 흐름이 더 선명하게"
            accent="bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA]"
            delay={0.08}
          />
          <StatCard
            icon={Users}
            label="사람"
            value="함께한 플레이어를 기억하고"
            sub="누구와 했는지도 기록의 중요한 일부"
            accent="bg-gradient-to-br from-[#2fa5ff] to-[#5666ff]"
            delay={0.16}
          />
          <StatCard
            icon={BarChart2}
            label="이야기"
            value="하나의 세션을 나만의 이야기로 남깁니다"
            sub="단순한 로그를 넘어 다시 꺼내보게 되는 아카이브"
            accent="bg-gradient-to-br from-[#19c8a6] to-[#18e2bd]"
            delay={0.24}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto mt-12 max-w-3xl rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-5 text-center backdrop-blur-sm"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/25 bg-[#8B5CF6]/10 px-3 py-1 text-[12px] text-[#C3B2FF]">
            <Zap size={12} />
            플레이 아카이브
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-white/55">
            기록은 단순한 로그가 아니라, 다시 꺼내보게 되는 플레이의 아카이브가 됩니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
