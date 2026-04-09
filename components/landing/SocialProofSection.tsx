"use client";

import { motion } from "framer-motion";

const points = [
  "최근 플레이와 통계를 홈에서 바로 확인",
  "게임 검색부터 기록 작성까지 빠르게 연결",
  "함께한 플레이어를 선택해 기록의 맥락까지 저장",
];

export default function SocialProofSection() {
  return (
    <section id="stats" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] blur-sm bg-[#8B5CF6]/30" />

      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card-strong rounded-[28px] px-6 py-8 text-center lg:px-10 lg:py-10"
        >
          <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-[34px]">
            기록, 통계, 플레이어 관리까지
            <br />
            <span className="gradient-text">한 흐름으로 자연스럽게 연결됩니다</span>
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {points.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-5 text-left text-[14px] leading-relaxed text-white/65"
              >
                {point}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
