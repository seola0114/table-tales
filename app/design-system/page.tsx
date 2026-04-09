"use client";

import { ArrowRight, Check, Clock3, Sparkles, Trophy, Users } from "lucide-react";

const colors = [
  { label: "Surface 0", value: "#070711", note: "페이지 기본 배경" },
  { label: "Surface 1", value: "#0B0B17", note: "딥 배경 레이어" },
  { label: "Surface 2", value: "#141425", note: "카드/모듈 안쪽" },
  { label: "Brand Purple", value: "#8B5CF6", note: "CTA, 핵심 강조" },
  { label: "Brand Lavender", value: "#A78BFA", note: "섹션 라벨, 보조 강조" },
  { label: "Brand Blue", value: "#7DA2FF", note: "그라디언트 하이라이트" },
  { label: "Data Mint", value: "#19C8A6", note: "긍정/상태 데이터" },
  { label: "Data Amber", value: "#FFBF47", note: "성취/랭크 강조" },
  { label: "Text White", value: "#FFFFFF", note: "주요 텍스트" },
  { label: "Text Soft", value: "rgba(255,255,255,0.7)", note: "본문/설명문" },
];

const spacing = [
  { token: "4", value: "0.25rem", usage: "아이콘과 텍스트 사이 미세 간격" },
  { token: "8", value: "0.5rem", usage: "badge, chip, 작은 버튼" },
  { token: "12", value: "0.75rem", usage: "카드 내부 여백 보조" },
  { token: "16", value: "1rem", usage: "기본 요소 간격" },
  { token: "24", value: "1.5rem", usage: "카드/모듈 간 간격" },
  { token: "32", value: "2rem", usage: "섹션 내부 블록 분리" },
  { token: "80+", value: "5rem 이상", usage: "메이저 섹션 여백" },
];

function Swatch({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="glass-card p-4">
      <div className="h-20 rounded-2xl border border-white/10" style={{ background: value }} />
      <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">{label}</p>
      <p className="mt-1 text-[14px] font-semibold text-white">{value}</p>
      <p className="mt-1 text-[12px] text-white/45">{note}</p>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <p className="font-display-italic text-[14px] tracking-wide text-[#A78BFA]">{eyebrow}</p>
      <h2 className="mt-3 text-[34px] font-bold tracking-[-0.04em] text-white sm:text-[44px]">
        {title}
        <br />
        <span className="gradient-text">{highlight}</span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/50">{description}</p>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-[#070711] text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.028]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
        <div className="absolute top-0 left-1/2 h-[720px] w-[960px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.18)_0%,_rgba(125,162,255,0.05)_38%,_transparent_72%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[520px] w-[520px] rounded-full bg-[#8B5CF6]/10 blur-3xl" />
        <div className="absolute right-0 top-[20%] h-[520px] w-[520px] rounded-full bg-[#7DA2FF]/8 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 py-12 lg:px-10 lg:py-16">
        <section className="glass-card-strong overflow-hidden rounded-[32px] border border-white/[0.12] px-6 py-8 lg:px-10 lg:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3.5 py-1.5">
                <Sparkles size={12} className="text-[#A78BFA]" />
                <span className="text-[12px] font-semibold text-[#C3B2FF]">Table Tales Design System</span>
              </div>
              <h1 className="mt-6 text-[40px] font-bold leading-[1.02] tracking-[-0.05em] text-white sm:text-[58px]">
                홈페이지 기준으로
                <br />
                <span className="gradient-text">바로 쓸 수 있는</span>
                <br />
                디자인 시스템
              </h1>
              <p className="mt-5 max-w-[560px] text-[16px] leading-relaxed text-white/55">
                현재 랜딩 페이지에서 실제로 사용 중인 색상, 타이포그래피, 카드 스타일, 버튼, 섹션 패턴을
                하나의 기준 화면으로 정리했습니다. 앞으로 새 페이지나 기능을 추가할 때 이 페이지를 기준으로
                확장하면 됩니다.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.34)]">
                  Primary Button
                  <ArrowRight size={16} />
                </button>
                <button className="rounded-xl border border-[#8B5CF6]/28 px-6 py-3.5 text-[15px] font-medium text-white/75">
                  Secondary Button
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">Core Principles</p>
                <ul className="mt-4 space-y-3 text-[14px] text-white/60">
                  <li>어두운 배경 위에 퍼플/블루 글로우로 분위기를 만든다.</li>
                  <li>주요 CTA는 보라 계열 그라디언트로 또렷하게 보이게 한다.</li>
                  <li>데이터나 상태는 민트, 앰버, 블루 보조색으로만 제한적으로 쓴다.</li>
                </ul>
              </div>
              <div className="glass-card p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">Component Tone</p>
                <ul className="mt-4 space-y-3 text-[14px] text-white/60">
                  <li>카드는 반투명 유리 질감과 얕은 보더를 기본으로 한다.</li>
                  <li>섹션 헤더는 작은 퍼플 라벨과 큰 그라디언트 제목 조합을 쓴다.</li>
                  <li>정보 밀도가 높아도 여백과 그룹핑으로 답답하지 않게 만든다.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionTitle
            eyebrow="Foundations"
            title="브랜드의 톤을 만드는"
            highlight="기본 토큰"
            description="현재 홈페이지 시각 언어를 이루는 핵심 색상과 기본 기준입니다."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {colors.map((color) => (
              <Swatch key={color.label} {...color} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-card p-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Typography</p>
            <div className="mt-5 space-y-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Hero / Display</p>
                <h2 className="mt-2 text-[44px] font-bold leading-[1.02] tracking-[-0.05em] text-white">당신의 플레이를,</h2>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Section Title</p>
                <h3 className="mt-2 text-[34px] font-bold tracking-[-0.04em] text-white">기록이 쌓일수록</h3>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Body</p>
                <p className="mt-2 text-[16px] leading-relaxed text-white/55">
                  Pretendard 기반의 선명한 본문 텍스트를 사용하고, 어두운 배경에서는 `text-white/55~70` 범위로
                  단계감을 줍니다.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Spacing, Radius, Shadows</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {spacing.map((item) => (
                <div key={item.token} className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/30">{item.token}</p>
                  <p className="mt-1 text-[18px] font-bold text-white">{item.value}</p>
                  <p className="mt-2 text-[13px] text-white/45">{item.usage}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4 text-center">
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Radius</p>
                <p className="mt-2 text-[20px] font-bold">16px</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-center">
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Radius Large</p>
                <p className="mt-2 text-[20px] font-bold">24-32px</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-center">
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Shadow</p>
                <p className="mt-2 text-[20px] font-bold">Soft Glow</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionTitle
            eyebrow="Components"
            title="랜딩에서 반복해서 쓰는"
            highlight="UI 패턴"
            description="홈페이지 전반에 재사용되는 버튼, 배지, 카드, 스탯 카드 기준입니다."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass-card p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Buttons & Badges</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button className="rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] px-5 py-3 text-[14px] font-semibold text-white">
                  Primary CTA
                </button>
                <button className="rounded-xl border border-[#8B5CF6]/28 px-5 py-3 text-[14px] font-medium text-white/75">
                  Secondary
                </button>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/28 bg-[#8B5CF6]/10 px-3 py-1.5 text-[12px] font-semibold text-[#C3B2FF]">
                  <Sparkles size={12} />
                  Eyebrow Badge
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Status & Data Chips</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#8B5CF6]/16 px-3 py-1.5 text-[12px] font-semibold text-[#C3B2FF]">
                  <Clock3 size={12} />
                  기록 중
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#19c8a6]/12 px-3 py-1.5 text-[12px] font-semibold text-[#43e0c1]">
                  <Check size={12} />
                  Active
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#ffbf47]/14 px-3 py-1.5 text-[12px] font-semibold text-[#ffbf47]">
                  <Trophy size={12} />
                  Best Win Streak
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Cards</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="glass-card p-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Base Glass Card</p>
                  <p className="mt-2 text-[18px] font-bold">정보 카드</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/50">기본 카드, 리뷰 카드, 정보 모듈에 사용합니다.</p>
                </div>
                <div className="glass-card-strong p-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Strong Glass Card</p>
                  <p className="mt-2 text-[18px] font-bold">핵심 카드</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/50">히어로, 모바일 목업, 강조 블록에 사용합니다.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Stat Cards</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Trophy, label: "Best Win Streak", value: "6", color: "from-[#ff9f1a] to-[#ffbf47]" },
                  { icon: Users, label: "Unique Players", value: "12", color: "from-[#2fa5ff] to-[#5666ff]" },
                ].map((item) => (
                  <div key={item.label} className="glass-card-strong p-5">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.color}`}>
                      <item.icon size={16} className="text-white" />
                    </div>
                    <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-white/30">{item.label}</p>
                    <p className="mt-1 text-[28px] font-bold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionTitle
            eyebrow="Composition"
            title="섹션을 조립할 때의"
            highlight="레이아웃 원칙"
            description="현재 홈페이지 구조에서 일관되게 반복되는 배치 규칙입니다."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="glass-card p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Hero</p>
              <p className="mt-3 text-[22px] font-bold">텍스트 왼쪽, 그래픽 오른쪽</p>
              <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                데스크톱에서는 메시지를 왼쪽에 고정하고, 오른쪽에 실사용 느낌의 그래픽 목업을 둡니다.
              </p>
            </div>

            <div className="glass-card p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Sections</p>
              <p className="mt-3 text-[22px] font-bold">라벨, 큰 제목, 설명문</p>
              <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                모든 섹션은 작은 보라 라벨, 2줄 내외의 큰 제목, 그 아래 설명문 조합을 기본으로 합니다.
              </p>
            </div>

            <div className="glass-card p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Density</p>
              <p className="mt-3 text-[22px] font-bold">정보는 빽빽하지만 그룹은 명확하게</p>
              <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                데이터가 많아도 카드, 구획, 줄 간격으로 읽기 부담을 줄이고, 보조색은 꼭 필요한 곳에만 씁니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
