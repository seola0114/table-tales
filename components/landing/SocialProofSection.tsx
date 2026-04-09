"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 2400, suffix: "+", label: "Waitlist", desc: "출시를 기다리는 보드게이머" },
  { value: 18700, suffix: "+", label: "Total Plays", desc: "베타 기간 동안 기록된 플레이" },
  { value: 340, suffix: "+", label: "Games Tracked", desc: "등록된 보드게임 타이틀" },
  { value: 94, suffix: "%", label: "Retention", desc: "한 달 이상 기록을 이어간 유저" },
];

const brandLogos = [
  "Arclight Traders",
  "Moon Harbor",
  "Forest Signal",
  "Crimson Railway",
  "Paper Castle",
];

export default function SocialProofSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Section divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] blur-sm bg-emerald-500/20" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-[12px] font-medium text-white/30 uppercase tracking-[0.15em] mb-14"
        >
          보드게임 팬들의 플레이를 기록하는 공간
        </motion.p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6 text-center group hover:border-white/[0.12] transition-all duration-300"
            >
              <p className="text-[36px] sm:text-[42px] font-bold tracking-tight gradient-text leading-none mb-2">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-1.5">
                {stat.label}
              </p>
              <p className="text-[12px] text-white/25 leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Scrolling game names */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 flex items-center gap-3 overflow-hidden"
        >
          <p className="shrink-0 text-[11px] text-white/20 font-medium uppercase tracking-widest">
            Tracked games
          </p>
          <div className="flex-1 h-px bg-white/[0.05]" />
          <div className="flex gap-6 overflow-hidden">
            {brandLogos.map((name) => (
              <span key={name} className="shrink-0 text-[12px] font-medium text-white/20 hover:text-white/40 transition-colors cursor-default">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
