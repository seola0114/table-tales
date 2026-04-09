"use client";

import { EXTERNAL_LINKS } from "@/lib/external-links";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "어떤 보드게임이든 기록할 수 있나요?",
    a: "다양한 보드게임 플레이를 기록할 수 있도록 준비하고 있습니다. 게임 검색을 통해 쉽게 찾고 기록으로 이어갈 수 있습니다.",
  },
  {
    q: "혼자 한 플레이도 기록할 수 있나요?",
    a: "네. 솔로 플레이도 기록할 수 있고, 여러 명이 함께한 플레이도 남길 수 있습니다.",
  },
  {
    q: "무엇을 기록할 수 있나요?",
    a: "게임, 날짜, 플레이어, 별점, 시간, 장소, 메모 등 플레이를 돌아보는 데 필요한 정보를 기록할 수 있습니다.",
  },
  {
    q: "어디에서 사용할 수 있나요?",
    a: "TableTales는 iOS, Android, Web에서 사용할 수 있습니다. App Store, Google Play, 웹에서 바로 시작할 수 있어요.",
  },
  {
    q: "데이터는 안전하게 보관되나요?",
    a: "서비스 운영 단계에 맞춰 안정적으로 데이터를 보관하고 관리할 예정입니다.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className={`border-b border-white/[0.06] transition-colors duration-200 ${open ? "border-white/[0.1]" : ""}`}
    >
      <button
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className={`text-[15px] font-medium leading-relaxed transition-colors duration-200 ${open ? "text-white" : "text-white/70 group-hover:text-white/90"}`}>
          {q}
        </span>
        <div
          className={`shrink-0 mt-0.5 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
            open
              ? "bg-[#8B5CF6]/20 border-[#8B5CF6]/38 text-[#A78BFA]"
              : "border-white/[0.1] text-white/30 group-hover:border-white/20 group-hover:text-white/50"
          }`}
        >
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[14px] text-white/45 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="w-full max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display-italic text-[14px] text-[#A78BFA] tracking-wide mb-4"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[36px] sm:text-[40px] font-bold leading-[1.2] tracking-[-0.03em] text-white"
          >
            자주 묻는 질문
          </motion.h2>
        </div>

        {/* FAQ items */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        {/* More questions */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 text-center text-[14px] text-white/30"
        >
          다른 궁금한 점이 있다면{" "}
          <a href="mailto:hello@tabletales.app" className="text-[#A78BFA] hover:text-[#C3B2FF] transition-colors">
            hello@tabletales.app
          </a>
          으로 연락해 주세요. 앱은{" "}
          <a href={EXTERNAL_LINKS.web} target="_blank" rel="noreferrer" className="text-[#A78BFA] hover:text-[#C3B2FF] transition-colors">
            tabletales.co.kr
          </a>
          에서도 바로 이용할 수 있습니다.
        </motion.p>
      </div>
    </section>
  );
}
