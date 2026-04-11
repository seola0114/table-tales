"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/external-links";

export default function CTASection() {
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
          <h2 className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold tracking-[-0.03em] text-white leading-[1.2] mb-6">
            당신의 플레이를,
            <br />
            <span className="gradient-text-warm">이야기로 남겨보세요</span>
          </h2>

          <p className="text-[16px] text-white/45 leading-relaxed mb-12 max-w-md mx-auto">
            테이블테일즈와 함께 보드게임의 순간을 더 오래 남겨보세요.
            웹과 앱에서 바로 플레이 기록을 시작할 수 있습니다.
          </p>

          <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              {
                href: EXTERNAL_LINKS.web,
                label: "시작하기",
                variant:
                  "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] hover:from-[#7C4DED] hover:to-[#7DA2FF] text-white shadow-[0_0_24px_rgba(139,92,246,0.34)] hover:shadow-[0_0_36px_rgba(125,162,255,0.16)]",
                icon: ArrowRight,
              },
              {
                href: EXTERNAL_LINKS.appStore,
                label: "App Store",
                variant:
                  "border border-white/[0.1] bg-white/[0.04] text-white/80 hover:border-[#A78BFA]/45 hover:bg-white/[0.06] hover:text-white",
                icon: ExternalLink,
              },
              {
                href: EXTERNAL_LINKS.playStore,
                label: "Google Play",
                variant:
                  "border border-white/[0.1] bg-white/[0.04] text-white/80 hover:border-[#A78BFA]/45 hover:bg-white/[0.06] hover:text-white",
                icon: ExternalLink,
              },
            ].map(({ href, label, variant, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[14px] font-semibold transition-all duration-200 ${variant}`}
              >
                <span>{label}</span>
                <Icon size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mt-6 flex max-w-md items-center justify-center gap-3 px-6 py-4 text-white/70"
          >
            <div className="w-2 h-2 rounded-full bg-[#A78BFA]" />
            <p className="text-[14px]">
              원하는 환경에서 바로 시작할 수 있어요.
            </p>
          </motion.div>

          <p className="mt-6 text-[12px] text-white/25">
            웹, App Store, Google Play 링크로 바로 연결됩니다.
          </p>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              { href: EXTERNAL_LINKS.web, label: "Web 지원" },
              { href: EXTERNAL_LINKS.appStore, label: "iOS 지원" },
              { href: EXTERNAL_LINKS.playStore, label: "Android 지원" },
            ].map((badge) => (
              <a key={badge.label} href={badge.href} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#A78BFA]" />
                <span className="text-[12px] text-white/30 font-medium">{badge.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
