"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="waitlist" className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B5CF6]/18 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.14) 0%, rgba(20,184,166,0.07) 50%, transparent 70%)" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-2xl"
          style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, transparent 70%)" }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/28 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="w-full max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display-italic text-[16px] text-[#A78BFA] tracking-wide mb-6">
            Your Table, Your Tale
          </p>

          <h2 className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold tracking-[-0.03em] text-white leading-[1.05] mb-6">
            다음 게임이
            <br />
            <span className="gradient-text-warm">이야기가 될 준비</span>
            <br />
            됐나요?
          </h2>

          <p className="text-[16px] text-white/45 leading-relaxed mb-12 max-w-md mx-auto">
            Waitlist에 등록하면 출시 즉시 알림을 받고,
            <br />
            얼리 어답터 혜택을 가장 먼저 누릴 수 있어요.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력하세요"
                required
                className="flex-1 px-4 py-3.5 bg-white/[0.05] border border-white/[0.1] focus:border-[#8B5CF6]/60 focus:bg-white/[0.07] rounded-xl text-white placeholder:text-white/25 text-[14px] outline-none transition-all duration-200"
              />
              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] hover:from-[#7C4DED] hover:to-[#7DA2FF] disabled:opacity-60 text-white font-semibold text-[14px] rounded-xl transition-all duration-200 shadow-[0_0_24px_rgba(139,92,246,0.34)] hover:shadow-[0_0_36px_rgba(125,162,255,0.16)] whitespace-nowrap"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    알림 받기
                    <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-md mx-auto flex items-center justify-center gap-3 py-4 px-6 glass-card border-[#8B5CF6]/30 bg-[#8B5CF6]/10"
            >
              <div className="w-6 h-6 rounded-full bg-[#A78BFA]/18 border border-[#A78BFA]/32 flex items-center justify-center">
                <Check size={12} className="text-[#A78BFA]" />
              </div>
              <p className="text-[14px] text-white/70">
                등록 완료! 출시되면 바로 알려드릴게요 🎲
              </p>
            </motion.div>
          )}

          <p className="mt-6 text-[12px] text-white/25">
            스팸은 보내지 않아요. 출시 알림 한 번만 보낼게요.
          </p>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              "무료로 시작",
              "2,400+ 대기 중",
              "iOS · Android · Web",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#A78BFA]" />
                <span className="text-[12px] text-white/30 font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
