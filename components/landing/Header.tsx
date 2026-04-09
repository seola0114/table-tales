"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LogoMark from "@/components/ui/LogoMark";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#stats", label: "Stats" },
  { href: "#story", label: "Story" },
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
          ? "bg-[#06060f]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <LogoMark
                width={28}
                height={32}
                className="drop-shadow-[0_0_8px_rgba(13,212,192,0.45)] group-hover:drop-shadow-[0_0_14px_rgba(13,212,192,0.65)] transition-all duration-300"
              />
              <span className="text-[15px] font-semibold tracking-tight text-white">
                Table<span className="text-emerald-400">Tales</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-[13px] font-medium text-white/50 hover:text-white/90 transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#waitlist"
                className="text-[13px] font-medium text-white/60 hover:text-white transition-colors duration-200"
              >
                앱 출시 알림
              </a>
              <a
                href="#waitlist"
                className="px-4 py-2 text-[13px] font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg transition-all duration-200 shadow-[0_0_16px_rgba(16,185,129,0.3)] hover:shadow-[0_0_24px_rgba(16,185,129,0.45)]"
              >
                Waitlist 참여
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden p-2 text-white/60 hover:text-white transition-colors"
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
            className="md:hidden bg-[#06060f]/95 backdrop-blur-2xl border-b border-white/[0.06]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-[14px] font-medium text-white/60 hover:text-white transition-colors border-b border-white/[0.04] last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#waitlist"
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-center text-[14px] font-medium text-white/60 border border-white/[0.1] rounded-lg"
                >
                  앱 출시 알림 받기
                </a>
                <a
                  href="#waitlist"
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-center text-[14px] font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg"
                >
                  Waitlist 참여
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
