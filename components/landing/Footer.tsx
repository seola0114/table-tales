import { Twitter, Instagram, Github } from "lucide-react";
import LogoMark from "@/components/ui/LogoMark";

const footerLinks = {
  Product: ["Features", "Changelog", "Roadmap", "Pricing"],
  Community: ["Discord", "Twitter", "Instagram", "Newsletter"],
  Legal: ["Privacy Policy", "Terms of Service", "Contact"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05]">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <LogoMark
                width={26}
                height={26}
                className="opacity-80"
              />
              <span className="text-[15px] font-semibold tracking-tight text-white">
                Table<span className="text-[#C6FF33]">Tales</span>
              </span>
            </div>
            <p className="text-[13px] text-white/35 leading-relaxed mb-5 max-w-[200px]">
              보드게임 플레이를 기록하고, 통계로 분석하고, 이야기로 남기세요.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Github, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/[0.08] text-white/30 hover:text-white/70 hover:border-white/20 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-[11px] font-semibold text-white/30 uppercase tracking-[0.12em] mb-4">
                {category}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-white/40 hover:text-white/80 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]">
          <p className="text-[12px] text-white/20">
            © 2024 Table Tales. All rights reserved.
          </p>
          <p className="text-[12px] text-white/15 flex items-center gap-1.5">
            <span>Your Table,</span>
            <span className="text-[#C6FF33]/55">Your Tale</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
