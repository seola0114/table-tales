"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock3, Search, Trophy, Users2 } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/external-links";
import PhoneScreenPreview from "./PhoneScreenPreview";

function FloatingNote({
  icon: Icon,
  title,
  value,
  caption,
  className,
  delay = 0,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  value: string;
  caption: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.65, ease: "easeOut" }}
      className={`glass-card-strong absolute z-20 hidden w-[178px] rounded-2xl border border-white/10 p-3 shadow-[0_18px_44px_rgba(0,0,0,0.38)] sm:block ${className}`}
    >
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-white/6">
          <Icon size={13} className="text-[#A78BFA]" />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">{title}</span>
      </div>
      <p className="text-[18px] font-bold leading-none text-white">{value}</p>
      <p className="mt-1 text-[10px] leading-relaxed text-white/45">{caption}</p>
    </motion.div>
  );
}

function DeviceFrame({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <PhoneScreenPreview
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      frameClassName="shadow-[0_26px_80px_rgba(0,0,0,0.55)]"
    />
  );
}

function ServicePreviewCollage() {
  return (
    <div className="relative mx-auto w-full max-w-[660px]">
      <FloatingNote
        icon={Trophy}
        title="최근 기록"
        value="최근 플레이 요약"
        caption="최근 기록과 다시 보고 싶은 세션을 홈에서 바로 확인할 수 있습니다."
        className="-left-4 top-14"
        delay={0.65}
      />
      <FloatingNote
        icon={Search}
        title="게임 탐색"
        value="찾고 바로 기록"
        caption="게임을 찾고 필요한 정보를 본 뒤 바로 기록으로 이어갈 수 있습니다."
        className="-right-4 top-10"
        delay={0.8}
      />
      <FloatingNote
        icon={Users2}
        title="플레이어"
        value="함께한 사람 저장"
        caption="누구와 함께했는지 빠르게 선택하고 기록의 맥락까지 남길 수 있습니다."
        className="-right-2 bottom-16"
        delay={0.95}
      />
      <FloatingNote
        icon={Clock3}
        title="빠른 기록"
        value="한 흐름으로 입력"
        caption="날짜, 인원, 장소, 별점, 메모까지 부담 없이 기록할 수 있습니다."
        className="-left-2 bottom-20"
        delay={1.1}
      />

      <motion.div
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto flex items-center justify-center"
      >
        <div className="absolute inset-x-12 top-12 h-[68%] rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.34),_rgba(125,162,255,0.12)_55%,_transparent_75%)] blur-3xl" />
        <div className="relative flex w-full items-center justify-center">
          <div className="absolute left-0 top-[22%] hidden w-[210px] lg:block">
            <DeviceFrame src="/service-previews/home-rich.png" alt="홈 화면" width={720} height={2880} className="rotate-[-10deg] scale-[0.88]" />
          </div>
          <div className="absolute right-0 top-[18%] hidden w-[210px] lg:block">
            <DeviceFrame
              src="/service-previews/search-results-rich.png"
              alt="게임 검색 결과 화면"
              width={720}
              height={1560}
              className="rotate-[10deg] scale-[0.88]"
            />
          </div>
          <DeviceFrame
            src="/service-previews/record-rich.png"
            alt="게임 기록 화면"
            width={720}
            height={1898}
            priority
            className="relative z-10 w-[260px] sm:w-[300px] lg:w-[340px]"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20 pb-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[760px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#8B5CF6]/18 via-[#7DA2FF]/8 to-transparent blur-3xl" />
        <div className="absolute -left-24 top-1/4 h-[540px] w-[540px] rounded-full bg-[#8B5CF6]/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[620px] w-[620px] rounded-full bg-[#17142d] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 xl:gap-14">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 text-[40px] font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-[48px] lg:text-[56px]"
            >
              보드게임 플레이를,
              <br />
              <span className="gradient-text">기록 너머의 이야기로</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mb-10 max-w-[560px] text-[16px] leading-relaxed text-white/50 lg:text-[17px]"
            >
              테이블테일즈는 무슨 게임을 했는지,<br />
              그 게임이 얼마나 재미있었는지,<br />
              한 번에 남길 수 있는 보드게임 기록 앱입니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-col gap-3 sm:flex-row lg:justify-start"
            >
              <a
                href={EXTERNAL_LINKS.web}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.34)] transition-all duration-200 hover:from-[#7C4DED] hover:to-[#7DA2FF] hover:shadow-[0_0_36px_rgba(125,162,255,0.16)]"
              >
                시작하기
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href={EXTERNAL_LINKS.appStore}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#8B5CF6]/28 px-6 py-3.5 text-[15px] font-medium text-white/70 transition-all duration-200 hover:border-[#A78BFA]/55 hover:bg-white/[0.04] hover:text-white"
              >
                App Store에서 보기
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-6 text-[12px] text-white/25"
            >
              iOS · Android · Web 지원
            </motion.p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ServicePreviewCollage />
          </div>
        </div>
      </div>
    </section>
  );
}
