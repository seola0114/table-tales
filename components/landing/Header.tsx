"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, Menu, X } from "lucide-react";
import Link from "next/link";
import LogoMark from "@/components/ui/LogoMark";
import ThemeToggle from "@/components/landing/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/design-system/overview", label: "Design System" },
  { href: "mailto:gwabansuri@gmail.com", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href: string) {
    if (href.startsWith("mailto:")) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith("/design-system");
  }

  const showBackToTop = scrolled;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/84 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <LogoMark
              width={28}
              height={28}
              className="drop-shadow-[0_0_10px_rgba(139,92,246,0.42)] group-hover:drop-shadow-[0_0_18px_rgba(125,162,255,0.32)] transition-all duration-300"
            />
            <span className="text-[15px] font-semibold tracking-tight text-white">
              Table<span className="text-[#A78BFA]">Tales</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.href.startsWith("mailto:") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-[13px] font-medium transition-colors duration-200 rounded-lg text-white/52 hover:text-[#A78BFA] hover:bg-white/[0.04]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-[13px] font-medium transition-colors duration-200 rounded-lg ${
                    isActive(link.href)
                      ? "bg-[#24163F] text-[#E9DDFF] shadow-[0_0_0_1px_rgba(139,92,246,0.18)]"
                      : "text-white/52 hover:text-[#A78BFA] hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Right side: ThemeToggle (desktop) + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <button
              className="md:hidden p-2 text-white/60 hover:text-[#A78BFA] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="메뉴 열기"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
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
                link.href.startsWith("mailto:") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 text-[14px] font-medium transition-colors border-b border-white/[0.04] last:border-0 text-white/60 hover:text-[#A78BFA]"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 text-[14px] font-medium transition-colors border-b border-white/[0.04] last:border-0 ${
                      isActive(link.href) ? "text-[#A78BFA]" : "text-white/60 hover:text-[#A78BFA]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <div className="flex justify-start">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="맨 위로 이동"
            className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-[70] inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#8B5CF6]/35 bg-[#120d22]/85 text-[#CDB7FF] shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors hover:bg-[#1B1330] hover:text-white md:right-6 md:bottom-6"
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </header>
  );
}
