"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LogoMark from "@/components/ui/LogoMark";
import ThemeToggle from "@/components/landing/ThemeToggle";
import { EXTERNAL_LINKS } from "@/lib/external-links";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#stats", label: "Stats" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/84 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <ThemeToggle />
          </div>

          <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <LogoMark
                width={28}
                height={28}
                className="drop-shadow-[0_0_10px_rgba(139,92,246,0.42)] group-hover:drop-shadow-[0_0_18px_rgba(125,162,255,0.32)] transition-all duration-300"
              />
              <span className="text-[15px] font-semibold tracking-tight text-white">
                Table<span className="text-[#A78BFA]">Tales</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-[13px] font-medium text-white/52 hover:text-[#A78BFA] transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={EXTERNAL_LINKS.web}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] font-medium text-white/60 hover:text-[#A78BFA] transition-colors duration-200"
              >
                서비스 소식
              </a>
              <a
                href={EXTERNAL_LINKS.web}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-[13px] font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] hover:from-[#7C4DED] hover:to-[#7DA2FF] text-white rounded-lg transition-all duration-200 shadow-[0_0_18px_rgba(139,92,246,0.34)] hover:shadow-[0_0_28px_rgba(125,162,255,0.18)]"
              >
                앱 시작하기
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden p-2 text-white/60 hover:text-[#A78BFA] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/[0.08]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-[14px] font-medium text-white/60 hover:text-[#A78BFA] transition-colors border-b border-white/[0.04] last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <div className="flex justify-start">
                  <ThemeToggle />
                </div>
                <a
                  href={EXTERNAL_LINKS.web}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-center text-[14px] font-medium text-white/60 border border-white/[0.1] rounded-lg"
                >
                  서비스 소식 받기
                </a>
                <a
                  href={EXTERNAL_LINKS.web}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-center text-[14px] font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white rounded-lg"
                >
                  앱 시작하기
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
