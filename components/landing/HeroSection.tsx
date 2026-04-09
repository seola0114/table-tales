"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, Search, Sparkles, Trophy, Users2 } from "lucide-react";

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
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,#dce2ea_0%,#eef2f6_100%)] p-3 shadow-[0_26px_80px_rgba(0,0,0,0.55)] ${className}`}>
      <div className="overflow-hidden rounded-[26px] border border-black/6 bg-white">
        <Image
          src={src}
          alt={alt}
          width={768}
          height={1536}
          priority={priority}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

function ServicePreviewCollage() {
  return (
    <div className="relative mx-auto w-full max-w-[660px]">
      <FloatingNote
        icon={Trophy}
        title="최근 기록"
        value="센추리 3.5"
        caption="최근 한 게임과 통계, 추천 게임까지 홈에서 바로 이어집니다."
        className="-left-4 top-14"
        delay={0.65}
      />
      <FloatingNote
        icon={Search}
        title="게임 탐색"
        value="브라스, 글룸헤이븐"
        caption="검색 결과가 있든 없든 다음 액션이 바로 보이도록 정리했습니다."
        className="-right-4 top-10"
        delay={0.8}
      />
      <FloatingNote
        icon={Users2}
        title="플레이어"
        value="총 5명"
        caption="누가 함께했는지 빠르게 선택하고 기록 맥락까지 같이 쌓입니다."
        className="-right-2 bottom-16"
        delay={0.95}
      />
      <FloatingNote
        icon={Clock3}
        title="기록 시간"
        value="1분 안쪽"
        caption="날짜, 인원, 장소, 후기까지 한 흐름으로 자연스럽게 저장됩니다."
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
            <DeviceFrame src="/service-previews/home-rich.png" alt="홈 화면" className="rotate-[-10deg] scale-[0.88]" />
          </div>
          <div className="absolute right-0 top-[18%] hidden w-[210px] lg:block">
            <DeviceFrame src="/service-previews/search-results-rich.png" alt="게임 검색 결과 화면" className="rotate-[10deg] scale-[0.88]" />
          </div>
          <DeviceFrame
            src="/service-previews/record-rich.png"
            alt="게임 기록 화면"
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
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/28 bg-[#8B5CF6]/10 px-3.5 py-1.5"
            >
              <Sparkles size={12} className="text-[#A78BFA]" />
              <span className="font-display-italic text-[13px] tracking-wide text-[#C3B2FF]">
                From real sessions to lasting stories
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 text-[44px] font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-[58px] lg:text-[66px]"
            >
              플레이한 게임부터,
              <br />
              <span className="gradient-text">함께한 사람과</span>
              <br />
              그날의 흐름까지
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mb-10 max-w-[560px] text-[16px] leading-relaxed text-white/50 lg:text-[17px]"
            >
              홈에서 최근 기록을 보고, 기록 화면에서 별점과 메모를 남기고,
              <br className="hidden lg:block" />
              검색 결과 유무와 플레이어 선택까지 자연스럽게 이어지는 실제 서비스 흐름을
              <br className="hidden lg:block" />
              랜딩에서도 그대로 느낄 수 있게 바꿨습니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-col gap-3 sm:flex-row lg:justify-start"
            >
              <a
                href="#waitlist"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.34)] transition-all duration-200 hover:from-[#7C4DED] hover:to-[#7DA2FF] hover:shadow-[0_0_36px_rgba(125,162,255,0.16)]"
              >
                Waitlist 참여하기
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#8B5CF6]/28 px-6 py-3.5 text-[15px] font-medium text-white/70 transition-all duration-200 hover:border-[#A78BFA]/55 hover:bg-white/[0.04] hover:text-white"
              >
                서비스 흐름 보기
              </a>
              <a
                href="/design-system"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-[15px] font-medium text-white/70 transition-all duration-200 hover:border-[#7DA2FF]/35 hover:bg-white/[0.05] hover:text-white"
              >
                디자인 시스템 보기
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-6 text-[12px] text-white/25"
            >
              기록, 검색, 플레이어 관리까지 한 앱 안에서 매끄럽게 연결됩니다
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
