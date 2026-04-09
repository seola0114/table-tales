"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart2, Clock, Trophy, Users, Zap } from "lucide-react";

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
}: {
  src: string;
  alt: string;
  title: string;
  desc: string;
  accent: string;
  delay: number;
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
      <div className="relative z-10 rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,#dbe1e8_0%,#edf2f6_100%)] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.42)]">
        <div className="overflow-hidden rounded-[22px] border border-black/5 bg-white">
          <Image src={src} alt={alt} width={768} height={1536} className="h-auto w-full" />
        </div>
      </div>
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
            Service Screens
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[36px] font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-[44px]"
          >
            기록의 시작부터 선택까지,
            <br />
            <span className="gradient-text">실제 서비스 흐름을 그대로 담았습니다</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <ScreenTile
            src="/service-previews/home-rich.png"
            alt="홈 화면"
            title="홈 요약"
            desc="최근 플레이, 통계, 최근 한 게임과 인기 게임까지 보여주는 출발점"
            accent="from-[#8B5CF6]/35 to-transparent"
            delay={0}
          />
          <ScreenTile
            src="/service-previews/record-rich.png"
            alt="기록 입력 화면"
            title="세션 기록"
            desc="별점, 시간, 장소, 후기까지 자연스럽게 쌓이는 입력 경험"
            accent="from-[#19c8a6]/35 to-transparent"
            delay={0.08}
          />
          <ScreenTile
            src="/service-previews/search-results-rich.png"
            alt="게임 검색 결과 화면"
            title="검색 결과"
            desc="박스아트와 핵심 정보를 빠르게 비교하고 바로 선택하는 단계"
            accent="from-[#7DA2FF]/35 to-transparent"
            delay={0.16}
          />
          <ScreenTile
            src="/service-previews/players-rich.png"
            alt="플레이어 선택 화면"
            title="플레이어 선택"
            desc="누가 함께했는지 선명하게 남기는 마지막 정리"
            accent="from-[#A78BFA]/35 to-transparent"
            delay={0.24}
          />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-1 xl:grid-cols-[1.1fr_0.9fr]">
          <ScreenTile
            src="/service-previews/search-empty.png"
            alt="게임 검색 결과 없음 화면"
            title="검색 결과 없음"
            desc="원하는 게임이 아직 없어도 직접 입력과 인기 게임 추천으로 흐름이 끊기지 않게 설계했습니다."
            accent="from-[#19c8a6]/26 to-transparent"
            delay={0.28}
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.34, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card flex flex-col justify-center rounded-[28px] border border-white/10 p-7"
          >
            <p className="text-[12px] uppercase tracking-[0.18em] text-[#A78BFA]">Why this matters</p>
            <h3 className="mt-4 text-[28px] font-bold leading-[1.3] tracking-[-0.03em] text-white">
              결과가 없는 순간까지도
              <br />
              서비스 경험으로 설계했습니다
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-white/45">
              실제 사용성은 성공 상태에서만 결정되지 않습니다. 검색 실패, 데이터 없음, 직접 입력 같은 예외 흐름까지 정리되어 있을 때 제품은 더 믿음직하게 느껴집니다.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "홈과 추천 게임 카드로 첫 화면 완성도 강화",
                "결과 있음 / 없음 모두 설명력 있는 검색 흐름",
                "입력과 선택 과정 전체를 랜딩에서 그대로 보여주기",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[14px] text-white/60">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard
            icon={Trophy}
            label="Favorite Action"
            value="별점 기록"
            sub="기록의 감정선을 남기는 핵심"
            accent="bg-gradient-to-br from-[#ff9f1a] to-[#ffbf47]"
            delay={0}
          />
          <StatCard
            icon={Clock}
            label="Flow"
            value="빠른 입력"
            sub="홈에서 기록까지 끊김 없는 구조"
            accent="bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA]"
            delay={0.08}
          />
          <StatCard
            icon={Users}
            label="Context"
            value="함께한 사람"
            sub="플레이어 단위로 기억이 쌓이는 서비스"
            accent="bg-gradient-to-br from-[#2fa5ff] to-[#5666ff]"
            delay={0.16}
          />
          <StatCard
            icon={BarChart2}
            label="Outcome"
            value="예외 흐름"
            sub="결과 없음까지 설계된 탐색 경험"
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
            실서비스 기반 랜딩
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-white/55">
            이번 랜딩은 가상의 대시보드보다 실제 앱 UI를 중심으로 재구성했습니다. 그래서 방문자가 “예쁜 콘셉트”보다 “실제로 어떻게 쓰는 서비스인지”를 더 빠르게 이해할 수 있습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
