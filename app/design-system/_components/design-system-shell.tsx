"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import Header from "@/components/landing/Header";
import { componentGuideItems, designSystemTabs } from "./content";

type TabId = (typeof designSystemTabs)[number]["id"];

function NavGroup({
  activeTab,
  activeComponentSlug,
}: {
  activeTab: TabId | "component-guide";
  activeComponentSlug?: string;
}) {
  const [componentsOpen, setComponentsOpen] = useState(activeTab === "components" || Boolean(activeComponentSlug));
  const componentActive = activeTab === "components" || Boolean(activeComponentSlug);

  return (
    <div className="space-y-2">
      {designSystemTabs
        .filter((tab) => tab.id !== "components")
        .map((tab) => {
          const active = activeTab === tab.id;
          return (
            <Link
              key={tab.id}
              href={`/design-system/${tab.id}`}
              className={`block w-full rounded-2xl px-4 py-3 text-left transition-all duration-200 ${
                active
                  ? "bg-[#24163F] text-[#E9DDFF] shadow-[0_0_0_1px_rgba(139,92,246,0.18)]"
                  : "bg-white/[0.02] text-white/55 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              <p className="text-[11px] uppercase tracking-[0.16em]">Section</p>
              <p className="mt-1 text-[14px] font-semibold">{tab.label}</p>
            </Link>
          );
        })}

      <div className="rounded-2xl border border-white/6 bg-white/[0.02]">
        <button
          type="button"
          onClick={() => setComponentsOpen((prev) => !prev)}
          className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition-all duration-200 ${
            componentActive
              ? "bg-[#24163F] text-[#E9DDFF] shadow-[0_0_0_1px_rgba(139,92,246,0.18)]"
              : "text-white/55 hover:bg-white/[0.04] hover:text-white"
          }`}
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em]">Section</p>
            <p className="mt-1 text-[14px] font-semibold">Components</p>
          </div>
          <ChevronDown size={16} className={`transition-transform duration-200 ${componentsOpen ? "rotate-180" : ""}`} />
        </button>

        {componentsOpen && (
          <div className="space-y-2 px-3 pb-3">
            <Link
              href="/design-system/components"
              className={`block rounded-xl px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${
                activeTab === "components" && !activeComponentSlug
                  ? "bg-white/[0.06] text-[#E9DDFF]"
                  : "text-white/55 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              Components Overview
            </Link>
            {componentGuideItems.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className={`block rounded-xl px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${
                  activeComponentSlug === item.slug
                    ? "bg-white/[0.06] text-[#E9DDFF]"
                    : "text-white/55 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function DesignSystemShell({
  activeTab,
  activeComponentSlug,
  children,
}: {
  activeTab: TabId | "component-guide";
  activeComponentSlug?: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#070711] text-white">
      <Header />

      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute left-1/2 top-0 h-[720px] w-[960px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.18)_0%,_rgba(125,162,255,0.05)_38%,_transparent_72%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[520px] w-[520px] rounded-full bg-[#8B5CF6]/10 blur-3xl" />
        <div className="absolute right-0 top-[20%] h-[520px] w-[520px] rounded-full bg-[#7DA2FF]/8 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 pb-12 pt-8 lg:px-10 lg:pb-16 lg:pt-12">
        <div>
          <aside className="hidden lg:fixed lg:left-6 lg:top-24 lg:flex lg:w-[240px] lg:flex-col xl:left-10 xl:w-[260px]" style={{ maxHeight: "calc(100vh - 7rem)" }}>
            <section className="glass-card flex min-h-0 flex-1 flex-col p-3">
              <div className="mb-3 shrink-0 px-3 pt-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/30">Contents</p>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto">
                <NavGroup activeTab={activeTab} activeComponentSlug={activeComponentSlug} />
              </div>
            </section>
          </aside>

          <aside className="lg:hidden">
            <section className="glass-card p-3">
              <div className="mb-3 px-3 pt-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/30">Contents</p>
              </div>
              <NavGroup activeTab={activeTab} activeComponentSlug={activeComponentSlug} />
            </section>
          </aside>

          <section className="min-w-0">{children}</section>
        </div>
      </div>
    </main>
  );
}
