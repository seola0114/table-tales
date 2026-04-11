import LogoMark from "@/components/ui/LogoMark";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05]">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="mb-16 grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <LogoMark
                width={26}
                height={26}
                className="opacity-80"
              />
              <span className="text-[15px] font-semibold tracking-tight text-white">
                Table<span className="text-[#A78BFA]">Tales</span>
              </span>
            </div>
           
          </div>

          <div className="md:justify-self-end">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Sitemap</p>
            <nav className="mt-4 flex flex-col items-start gap-2">
              <Link href="/" className="text-[13px] text-white/55 transition-colors hover:text-[#A78BFA]">
                Home
              </Link>
              <Link href="/design-system/overview" className="text-[13px] text-white/55 transition-colors hover:text-[#A78BFA]">
                Design System
              </Link>
              <a href="mailto:gwabansuri@gmail.com" className="text-[13px] text-white/55 transition-colors hover:text-[#A78BFA]">
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]">
          <p className="text-[12px] text-white/20">
            © 2024 Table Tales. All rights reserved.
          </p>
          <p className="text-[12px] text-white/15">
            테이블테일즈
          </p>
        </div>
      </div>
    </footer>
  );
}
