"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "어떤 보드게임이든 기록할 수 있나요?",
    a: "네. 게임 타이틀을 직접 입력하거나, 이미 등록된 340개 이상의 게임 중에서 선택할 수 있어요. BGG 연동을 통해 더 많은 게임을 자동 불러오는 기능도 준비 중입니다. 특수한 하우스 룰 게임이나 커스텀 게임도 제목과 룰 방식을 직접 설정해 기록할 수 있어요.",
  },
  {
    q: "다양한 점수 방식도 지원하나요?",
    a: "합산 점수, 최고 점수, 최저 점수 승리, 팀전, 순위 기반 점수, 다중 카테고리 점수 등 대부분의 보드게임 점수 방식을 지원합니다. 승/패/무승부만 기록하는 것도 가능하고, 게임마다 다른 방식을 각각 설정해 저장해 둘 수 있어요.",
  },
  {
    q: "혼자서도 사용할 수 있나요? 모임 단위로도 되나요?",
    a: "둘 다 됩니다. 솔로 플레이어라면 클리어 여부, 점수, 난이도 메모를 혼자 기록하며 사용할 수 있고요. 정기 모임이라면 그룹을 만들어 멤버들과 기록을 공유하고 전적을 비교할 수 있어요. 같은 계정으로 솔로 세션과 그룹 세션을 함께 관리하는 것도 가능합니다.",
  },
  {
    q: "언제 출시되나요?",
    a: "현재 클로즈 베타 단계로, Waitlist에 등록하신 분들께 순차적으로 초대를 보내드리고 있어요. 2024년 내 iOS 앱과 웹 버전 정식 출시를 목표로 하고 있습니다. Waitlist에 참여하시면 출시 알림을 가장 먼저 받고, 얼리 어답터 혜택도 누릴 수 있어요.",
  },
  {
    q: "데이터는 안전하게 보관되나요?",
    a: "모든 데이터는 암호화되어 저장되며, 주기적으로 백업됩니다. 내 데이터는 언제든지 내보낼 수 있고 계정 삭제 시 완전히 삭제됩니다. 개인정보 처리방침은 출시 전 공개 예정입니다.",
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
              ? "bg-violet-500/20 border-violet-500/30 text-violet-300"
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

      <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[12px] font-medium text-violet-400 uppercase tracking-[0.15em] mb-4"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[36px] sm:text-[40px] font-bold tracking-[-0.03em] text-white"
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
          다른 궁금한 점이 있으신가요?{" "}
          <a href="mailto:hello@tabletales.app" className="text-violet-400 hover:text-violet-300 transition-colors">
            hello@tabletales.app
          </a>
          으로 연락 주세요.
        </motion.p>
      </div>
    </section>
  );
}
