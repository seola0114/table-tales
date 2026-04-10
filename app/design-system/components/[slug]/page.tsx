import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock3, Sparkles, Trophy, Users } from "lucide-react";
import DesignSystemShell from "../../_components/design-system-shell";

const componentGuides = {
  buttons: {
    label: "Buttons",
    title: "버튼 가이드",
    description: "Primary, tonal, secondary 버튼의 역할과 상태 기준을 정리합니다.",
    usage:
      "버튼은 화면 안에서 행동 우선순위를 구분하는 가장 직접적인 장치입니다. 한 화면에서는 primary를 1개만 두고, 나머지는 tonal 또는 secondary로 위계를 분리하는 것을 기본 원칙으로 봅니다.",
    rules: [
      "Primary는 가장 중요한 전환 액션 한 개에만 사용합니다.",
      "Tonal은 필터, 보조 액션, 선택 상태처럼 브랜드 강조가 필요하지만 메인 CTA는 아닌 경우에 사용합니다.",
      "Secondary는 취소, 닫기, 보조 이동처럼 중립 액션에 사용합니다.",
      "같은 행에 놓일 때는 primary > tonal > secondary 순으로 시각 우선순위를 유지합니다.",
    ],
    tokens: [
      "`primary` + `on-primary`",
      "`primary-container` + `on-primary-container`",
      "`surface-container` + `outline` + `on-surface`",
    ],
    preview: (
      <div className="flex flex-wrap gap-3">
        <button className="rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] px-5 py-3 text-[14px] font-semibold text-white">
          Primary CTA
        </button>
        <button className="rounded-xl bg-[#24163F] px-5 py-3 text-[14px] font-semibold text-[#E9DDFF]">
          Tonal Button
        </button>
        <button className="rounded-xl border border-white/15 bg-[#141425] px-5 py-3 text-[14px] font-medium text-white/75">
          Surface Secondary
        </button>
      </div>
    ),
  },
  chips: {
    label: "Chips",
    title: "칩 가이드",
    description: "상태, 데이터, 필터 칩의 톤과 역할을 정리합니다.",
    usage:
      "칩은 짧은 상태나 범주를 빠르게 인지시키는 용도입니다. 버튼처럼 강하게 행동을 유도하기보다, 정보를 압축해 보여주거나 선택 상태를 가볍게 표시할 때 적합합니다.",
    rules: [
      "브랜드 강조가 필요한 상태 칩은 primary-container 계열을 사용합니다.",
      "성공, 경고, 랭크 같은 상태는 support tonal palette를 사용합니다.",
      "칩 안의 텍스트는 짧고 명확하게 유지합니다.",
      "필터 칩과 상태 칩을 한 화면에 같이 쓸 때는 목적이 섞이지 않게 그룹을 분리합니다.",
    ],
    tokens: [
      "`primary-container` + `on-primary-container`",
      "`success` tonal palette",
      "`warning` tonal palette",
    ],
    preview: (
      <div className="flex flex-wrap gap-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#24163F] px-3 py-1.5 text-[12px] font-semibold text-[#E9DDFF]">
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
    ),
  },
  cards: {
    label: "Cards",
    title: "카드 가이드",
    description: "surface 단계별 카드와 강조 카드의 역할을 정리합니다.",
    usage:
      "카드는 정보 덩어리를 나누는 기본 레이어입니다. surface 단계가 올라갈수록 더 중요하고 더 앞으로 떠 있는 정보라는 인상을 주기 때문에, 카드 간 위계는 색과 그림자보다 먼저 surface token으로 결정합니다.",
    rules: [
      "일반 정보 카드는 surface-container를 기본으로 사용합니다.",
      "강조 카드나 핵심 요약 패널은 surface-container-high 또는 highest를 사용합니다.",
      "카드 안에서는 제목과 본문 대비를 on-surface / on-surface-variant로 분리합니다.",
      "같은 섹션 안에서 카드 단계가 너무 많아지지 않게 2단계 이내로 제한합니다.",
    ],
    tokens: [
      "`surface-container` + `outline-variant`",
      "`surface-container-high` + `outline`",
      "`on-surface` / `on-surface-variant`",
    ],
    preview: (
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[24px] border border-[#FFFFFF12] bg-[#141425] p-4">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Surface Container</p>
          <p className="mt-2 text-[18px] font-bold text-white">정보 카드</p>
          <p className="mt-2 text-[14px] leading-relaxed text-white/50">기본 정보 모듈과 설명 카드에 사용합니다.</p>
        </div>
        <div className="rounded-[24px] border border-[#FFFFFF1F] bg-[#1B1B31] p-4 shadow-[0_16px_48px_rgba(0,0,0,0.3)]">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Surface High</p>
          <p className="mt-2 text-[18px] font-bold text-white">강조 카드</p>
          <p className="mt-2 text-[14px] leading-relaxed text-white/50">히어로와 강조 블록, 대표 패널에 사용합니다.</p>
        </div>
      </div>
    ),
  },
  "stat-cards": {
    label: "Stat Cards",
    title: "스탯 카드 가이드",
    description: "숫자 중심 카드에서 아이콘, 컬러, 보조 정보 사용 원칙을 정리합니다.",
    usage:
      "스탯 카드는 핵심 수치를 빠르게 읽게 만드는 카드입니다. 숫자를 가장 먼저 읽고, 그 다음 라벨과 보조 설명을 따라가게 만드는 것이 중요하므로 정보 순서와 대비가 일반 카드보다 더 명확해야 합니다.",
    rules: [
      "값은 가장 큰 시각 우선순위를 가져야 하며 한 카드에 하나의 핵심 숫자만 둡니다.",
      "아이콘 색은 support 색 또는 tertiary 같은 보조 강조 컬러로 제한합니다.",
      "보조 설명은 한 줄 안팎으로 짧게 유지합니다.",
      "여러 개를 나열할 때는 카드 간 크기와 내부 정렬을 동일하게 맞춥니다.",
    ],
    tokens: [
      "`surface-container-high` + `outline`",
      "`warning` / `tertiary` support accent",
      "`on-surface` + `on-surface-variant`",
    ],
    preview: (
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { icon: Trophy, label: "Best Win Streak", value: "6", color: "from-[#ff9f1a] to-[#ffbf47]" },
          { icon: Users, label: "Unique Players", value: "12", color: "from-[#2fa5ff] to-[#5666ff]" },
        ].map((item) => (
          <div key={item.label} className="rounded-[24px] border border-[#FFFFFF1F] bg-[#1B1B31] p-5">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.color}`}>
              <item.icon size={16} className="text-white" />
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-white/30">{item.label}</p>
            <p className="mt-1 text-[28px] font-bold text-white">{item.value}</p>
          </div>
        ))}
      </div>
    ),
  },
} as const;

type GuideKey = keyof typeof componentGuides;

export function generateStaticParams() {
  return Object.keys(componentGuides).map((slug) => ({ slug }));
}

export default async function ComponentGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = componentGuides[slug as GuideKey];

  if (!guide) {
    return null;
  }

  return (
    <DesignSystemShell activeTab="component-guide" activeComponentSlug={slug}>
      <section className="space-y-8 px-6 lg:px-10">
            <section className="glass-card-strong overflow-hidden rounded-[32px] border border-white/[0.12] px-6 py-8 lg:px-10 lg:py-12">
              <Link href="/design-system/components" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/55 hover:text-[#A78BFA]">
                <ArrowLeft size={14} />
                Components로 돌아가기
              </Link>
              <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#C3B2FF]">{guide.label}</p>
              <h1 className="mt-3 text-[40px] font-bold leading-[1.2] tracking-[-0.05em] text-white sm:text-[56px]">{guide.title}</h1>
              <p className="mt-4 max-w-[760px] text-[16px] leading-relaxed text-white/58">{guide.description}</p>
            </section>

            <section className="glass-card p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Usage Principle</p>
              <p className="mt-4 text-[15px] leading-relaxed text-white/60">{guide.usage}</p>
            </section>

            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <section className="glass-card p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Rules</p>
                <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-white/60">
                  {guide.rules.map((rule) => (
                    <li key={rule} className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3">
                      {rule}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="glass-card p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Preview</p>
                <div className="mt-5 rounded-[24px] border border-white/10 bg-[#141425] p-5">{guide.preview}</div>
              </section>
            </div>

            <section className="glass-card p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Recommended Tokens</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {guide.tokens.map((token) => (
                  <div key={token} className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                    <p className="text-[14px] font-semibold text-white">{token}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="glass-card p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Next Guide</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/55">다른 컴포넌트 가이드도 이어서 볼 수 있습니다.</p>
                </div>
                <Link
                  href="/design-system/components"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#24163F] px-5 py-3 text-[14px] font-semibold text-[#E9DDFF]"
                >
                  Components 허브로 이동
                  <ArrowRight size={14} />
                </Link>
              </div>
            </section>
      </section>
    </DesignSystemShell>
  );
}
