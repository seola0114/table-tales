"use client";

import { ArrowRight, Check, Clock3, Sparkles, Trophy, Users } from "lucide-react";

const primaryTokens = [
  { label: "primary", value: "#8B5CF6", note: "브랜드 메인 액션, CTA, 핵심 하이라이트" },
  { label: "on-primary", value: "#FFFFFF", note: "Primary 위 텍스트와 아이콘" },
  { label: "primary-container", value: "#24163F", note: "Primary를 담는 딥 컨테이너" },
  { label: "on-primary-container", value: "#E9DDFF", note: "Primary Container 위 텍스트" },
  { label: "primary-fixed", value: "#CDB7FF", note: "고정된 브랜드 라이트 톤" },
  { label: "primary-fixed-dim", value: "#A78BFA", note: "고정 브랜드 보조 톤" },
  { label: "on-primary-fixed", value: "#1F1235", note: "Primary Fixed 위 짙은 텍스트" },
  { label: "on-primary-fixed-variant", value: "#4D2E86", note: "브랜드 계열 보조 텍스트" },
];

const surfaceTokens = [
  { label: "surface", value: "#070711", note: "페이지 기본 배경" },
  { label: "on-surface", value: "#FFFFFF", note: "기본 제목과 핵심 텍스트" },
  { label: "surface-variant", value: "#141425", note: "카드 안쪽, 모듈 배경" },
  { label: "on-surface-variant", value: "#B8B8C7", note: "본문, 보조 정보" },
  { label: "inverse-surface", value: "#F4F1FF", note: "밝은 역전 배경" },
  { label: "inverse-on-surface", value: "#171221", note: "밝은 표면 위 텍스트" },
  { label: "surface-dim", value: "#05050C", note: "가장 눌린 배경 레이어" },
  { label: "surface-bright", value: "#161629", note: "조금 더 떠오른 표면" },
  { label: "surface-container-lowest", value: "#030308", note: "가장 낮은 레이어" },
  { label: "surface-container-low", value: "#0B0B17", note: "섹션 안쪽 배경" },
  { label: "surface-container", value: "#141425", note: "기본 카드 배경" },
  { label: "surface-container-high", value: "#1B1B31", note: "강조 카드 배경" },
  { label: "surface-container-highest", value: "#242440", note: "가장 강한 카드/패널" },
  { label: "outline", value: "#FFFFFF1F", note: "기본 보더와 디바이더" },
  { label: "outline-variant", value: "#FFFFFF12", note: "더 약한 보더" },
];

const supportTokens = [
  { label: "data-mint", value: "#19C8A6", note: "상태, 활성, 긍정 피드백" },
  { label: "data-amber", value: "#FFBF47", note: "랭크, 배지, 성취" },
  { label: "brand-blue", value: "#7DA2FF", note: "보조 하이라이트와 그라디언트 확장" },
];

const primaryPalettes = [
  {
    name: "Signature Dark",
    usage: "현재 랜딩의 기본 조합. 가장 브랜드답고 안정적인 세트",
    chips: [
      { label: "primary", value: "#8B5CF6" },
      { label: "primary-fixed-dim", value: "#A78BFA" },
      { label: "brand-blue", value: "#7DA2FF" },
      { label: "surface", value: "#070711" },
      { label: "surface-container", value: "#141425" },
    ],
  },
  {
    name: "Editorial Glow",
    usage: "히어로, 섹션 헤더, 강조 배너처럼 시선 집중이 필요한 조합",
    chips: [
      { label: "primary", value: "#8B5CF6" },
      { label: "primary-fixed", value: "#CDB7FF" },
      { label: "on-primary-container", value: "#E9DDFF" },
      { label: "surface-container-high", value: "#1B1B31" },
      { label: "outline", value: "#FFFFFF1F" },
    ],
  },
  {
    name: "Product UI",
    usage: "실제 앱 화면 옆 카드, 설명 블록, 데이터 요약 모듈에 적합한 세트",
    chips: [
      { label: "primary-container", value: "#24163F" },
      { label: "primary", value: "#8B5CF6" },
      { label: "data-mint", value: "#19C8A6" },
      { label: "surface-container-highest", value: "#242440" },
      { label: "on-surface-variant", value: "#B8B8C7" },
    ],
  },
  {
    name: "Warm Accent",
    usage: "배지, 성취, 리뷰, 통계 포인트처럼 감정선을 주고 싶을 때",
    chips: [
      { label: "primary", value: "#8B5CF6" },
      { label: "data-amber", value: "#FFBF47" },
      { label: "primary-fixed-dim", value: "#A78BFA" },
      { label: "surface-container", value: "#141425" },
      { label: "on-surface", value: "#FFFFFF" },
    ],
  },
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

const typography = [
  {
    label: "display-xl",
    sample: "플레이한 게임부터,",
    className: "text-[40px] leading-[1.02] tracking-[-0.05em] sm:text-[58px]",
    spec: "40 / 58",
    lineHeight: "1.02",
    weight: "700",
    usage: "메인 히어로 H1, 가장 강한 첫 인상",
  },
  {
    label: "display-lg",
    sample: "실제 서비스 화면 기준으로",
    className: "text-[36px] leading-[1.05] tracking-[-0.03em] sm:text-[44px]",
    spec: "36 / 44",
    lineHeight: "1.05",
    weight: "700",
    usage: "섹션 메인 타이틀",
  },
  {
    label: "heading-md",
    sample: "토큰 기준으로 다시 본 UI 패턴",
    className: "text-[28px] leading-[1.15] tracking-[-0.025em] sm:text-[34px]",
    spec: "28 / 34",
    lineHeight: "1.15",
    weight: "700",
    usage: "카드/블록 제목, 서브 섹션 타이틀",
  },
  {
    label: "body-lg",
    sample: "Pretendard 기반의 선명한 본문 텍스트를 사용합니다.",
    className: "text-[16px] leading-relaxed tracking-[-0.01em]",
    spec: "16",
    lineHeight: "1.625",
    weight: "400/500",
    usage: "본문, 설명문, 랜딩의 주요 카피",
  },
  {
    label: "body-sm",
    sample: "카드 안쪽 보조 설명과 부가 문장에 사용합니다.",
    className: "text-[14px] leading-relaxed",
    spec: "14",
    lineHeight: "1.625",
    weight: "400/500",
    usage: "카드 설명, 보조 문장",
  },
  {
    label: "label",
    sample: "Product Flow",
    className: "text-[12px] uppercase tracking-[0.16em]",
    spec: "12",
    lineHeight: "1.4",
    weight: "600",
    usage: "토큰 제목, 카드 라벨, 스탯 라벨",
  },
  {
    label: "eyebrow",
    sample: "Foundations",
    className: "font-display-italic text-[14px] tracking-wide",
    spec: "14",
    lineHeight: "1.4",
    weight: "600",
    usage: "섹션 위 작은 보라 라벨",
  },
  {
    label: "caption",
    sample: "surface-container-high",
    className: "text-[11px] uppercase tracking-[0.16em]",
    spec: "11",
    lineHeight: "1.35",
    weight: "500/600",
    usage: "캡션, 상태 라벨, 메타 정보",
  },
];

function TokenRow({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="grid items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,0.75fr)_minmax(0,1fr)]">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl border border-white/10" style={{ background: value }} />
        <div>
          <p className="text-[14px] font-semibold text-white">{label}</p>
          <p className="text-[12px] text-white/35">{note}</p>
        </div>
      </div>
      <p className="text-[13px] font-semibold text-white/75">{value}</p>
      <div
        className="h-11 rounded-xl border border-white/8"
        style={{ background: value }}
      />
    </div>
  );
}

function TokenSection({
  title,
  description,
  tokens,
}: {
  title: string;
  description: string;
  tokens: { label: string; value: string; note: string }[];
}) {
  return (
    <div className="glass-card p-6">
      <div className="mb-5">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">{title}</p>
        <p className="mt-2 text-[14px] leading-relaxed text-white/50">{description}</p>
      </div>
      <div className="space-y-3">
        {tokens.map((token) => (
          <TokenRow key={token.label} {...token} />
        ))}
      </div>
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

function TypeRow({
  label,
  sample,
  className,
  spec,
  lineHeight,
  weight,
  usage,
}: {
  label: string;
  sample: string;
  className: string;
  spec: string;
  lineHeight: string;
  weight: string;
  usage: string;
}) {
  return (
    <div className="grid gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-4 lg:grid-cols-[minmax(0,0.28fr)_minmax(0,1fr)_minmax(0,0.4fr)]">
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/30">{label}</p>
        <p className="mt-2 text-[13px] text-white/45">Weight {weight}</p>
        <p className="text-[13px] text-white/45">Size {spec}</p>
        <p className="text-[13px] text-white/45">Line-height {lineHeight}</p>
      </div>
      <div className="min-w-0">
        <p className={`${className} break-keep text-white`}>{sample}</p>
      </div>
      <div>
        <p className="text-[13px] leading-relaxed text-white/50">{usage}</p>
      </div>
    </div>
  );
}

function PaletteCard({
  name,
  usage,
  chips,
}: {
  name: string;
  usage: string;
  chips: { label: string; value: string }[];
}) {
  return (
    <div className="glass-card p-6">
      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/30">{name}</p>
      <p className="mt-2 text-[14px] leading-relaxed text-white/50">{usage}</p>
      <div className="mt-5 overflow-hidden rounded-[20px] border border-white/8">
        <div className="grid grid-cols-5">
          {chips.map((chip) => (
            <div key={chip.label} className="h-24" style={{ background: chip.value }} />
          ))}
        </div>
      </div>
      <div className="mt-4 grid gap-2">
        {chips.map((chip) => (
          <div key={chip.label} className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full border border-white/10" style={{ background: chip.value }} />
              <span className="text-[13px] font-medium text-white/75">{chip.label}</span>
            </div>
            <span className="text-[12px] text-white/45">{chip.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-[#070711] text-white">
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
                <span className="gradient-text">토큰까지 정리한</span>
                <br />
                디자인 시스템
              </h1>
              <p className="mt-5 max-w-[560px] text-[16px] leading-relaxed text-white/55">
                이번 업데이트에서는 컬러를 단순 브랜드 색상이 아니라 `primary`, `surface`, `outline`
                체계로 다시 정리했습니다. 앞으로 새 화면을 만들 때도 같은 이름으로 일관되게 확장할 수 있습니다.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.34)]">
                  Primary Button
                  <ArrowRight size={16} />
                </button>
                <button className="rounded-xl border border-white/15 bg-[#141425] px-6 py-3.5 text-[15px] font-medium text-white/75">
                  Surface Button
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">Token Principles</p>
                <ul className="mt-4 space-y-3 text-[14px] text-white/60">
                  <li>브랜드 컬러는 `primary` 계열로만 관리합니다.</li>
                  <li>배경과 카드의 단계감은 `surface-container` 계열로 나눕니다.</li>
                  <li>보더는 `outline`, 더 약한 경계는 `outline-variant`를 사용합니다.</li>
                </ul>
              </div>
              <div className="glass-card p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">Homepage Mood</p>
                <ul className="mt-4 space-y-3 text-[14px] text-white/60">
                  <li>배경은 아주 어둡게 유지하고, 브랜드 퍼플은 액션에 집중합니다.</li>
                  <li>밝은 앱 스크린샷은 dark surface 위에서 더 또렷하게 보이게 합니다.</li>
                  <li>민트, 앰버, 블루는 support 토큰으로만 제한적으로 사용합니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionTitle
            eyebrow="Foundations"
            title="새 기준으로 정리한"
            highlight="컬러 토큰"
            description="올려주신 구조에 맞춰 primary와 surface 계열을 토큰 이름 중심으로 정리했습니다."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <TokenSection
              title="Primary"
              description="브랜드 액션과 보라 계열 하이라이트를 담당하는 토큰입니다."
              tokens={primaryTokens}
            />
            <TokenSection
              title="Surface"
              description="배경, 카드, 컨테이너, 보더 단계감을 담당하는 토큰입니다."
              tokens={surfaceTokens}
            />
          </div>

          <div className="glass-card p-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Support Colors</p>
            <p className="mt-2 text-[14px] leading-relaxed text-white/50">
              상태와 데이터 강조를 위한 보조 토큰입니다. 브랜드 주색을 흐리지 않도록 제한적으로 사용합니다.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {supportTokens.map((token) => (
                <TokenRow key={token.label} {...token} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <p className="font-display-italic text-[14px] tracking-wide text-[#A78BFA]">Palette Sets</p>
              <h3 className="mt-3 text-[30px] font-bold tracking-[-0.03em] text-white sm:text-[36px]">
                primary와 가장 잘 어울리는
                <br />
                <span className="gradient-text">컬러 팔레트 조합</span>
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/50">
                새 화면을 만들 때 `primary`를 단독으로 보지 말고, 함께 붙는 surface와 support 색까지 세트로 선택하면 훨씬 안정적으로 확장됩니다.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {primaryPalettes.map((palette) => (
                <PaletteCard key={palette.name} {...palette} />
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionTitle
            eyebrow="Typography"
            title="랜딩에서 실제로 쓰는"
            highlight="타입 스케일"
            description="Pretendard 기반으로 제목, 본문, 라벨, 캡션을 단계별로 정리했습니다. 새 페이지를 만들 때 이 스케일 안에서만 쓰면 톤이 안정적으로 유지됩니다."
          />

          <div className="glass-card p-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Type Scale</p>
            <div className="mt-5 space-y-3">
              {typography.map((item) => (
                <TypeRow key={item.label} {...item} />
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="glass-card p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Typography Rules</p>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Font Family</p>
                  <p className="mt-2 text-[24px] font-bold text-white">Pretendard</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/50">
                    전체 UI와 본문, 헤드라인 모두 Pretendard를 기준으로 통일합니다.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Tracking</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/50">
                    큰 제목은 `-0.03em ~ -0.05em`, 본문은 기본 또는 `-0.01em`, 라벨은 넓은 letter spacing을 씁니다.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Line Height</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/50">
                    디스플레이는 `1.02 ~ 1.15`로 타이트하게, 본문은 `1.625`, 라벨과 캡션은 `1.35 ~ 1.4`로 정리합니다.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Color Roles</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/50">
                    제목은 `on-surface`, 본문은 `on-surface-variant`, eyebrow와 강조 라벨은 `primary-fixed-dim`을 우선 사용합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Live Composition Sample</p>
              <div className="mt-5 rounded-[28px] border border-white/10 bg-[#141425] p-6">
                <p className="font-display-italic text-[14px] tracking-wide text-[#A78BFA]">Product Flow</p>
                <h2 className="mt-3 text-[36px] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-[44px]">
                  실제 서비스 화면 기준으로
                  <br />
                  <span className="gradient-text">더 또렷하게 정리한 경험</span>
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-white/55">
                  Pretendard 기반의 선명한 본문 텍스트를 사용하고, dark surface 위에서는
                  `on-surface`와 `on-surface-variant` 단계로 가독성을 나눕니다.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#24163F] px-3 py-1.5 text-[12px] font-semibold text-[#E9DDFF]">
                    <Sparkles size={12} />
                    Eyebrow
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#19c8a6]/12 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#43e0c1]">
                    <Check size={12} />
                    Caption
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="glass-card p-6">
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
        </section>

        <section className="space-y-8">
          <SectionTitle
            eyebrow="Components"
            title="토큰 기준으로 다시 본"
            highlight="UI 패턴"
            description="버튼, 칩, 카드도 새 토큰 이름 기준으로 읽을 수 있게 정리했습니다."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass-card p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Buttons & Badges</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button className="rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] px-5 py-3 text-[14px] font-semibold text-white">
                  Primary CTA
                </button>
                <button className="rounded-xl bg-[#24163F] px-5 py-3 text-[14px] font-semibold text-[#E9DDFF]">
                  Tonal Button
                </button>
                <button className="rounded-xl border border-white/15 bg-[#141425] px-5 py-3 text-[14px] font-medium text-white/75">
                  Surface Secondary
                </button>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/28 bg-[#24163F] px-3 py-1.5 text-[12px] font-semibold text-[#E9DDFF]">
                  <Sparkles size={12} />
                  Primary Container Badge
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Primary</p>
                  <p className="mt-2 text-[14px] font-semibold text-white">`primary` + `on-primary`</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/50">가장 강한 액션 버튼에 사용합니다.</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Tonal</p>
                  <p className="mt-2 text-[14px] font-semibold text-white">`primary-container` + `on-primary-container`</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/50">보조 강조 액션이나 필터, 상태성 버튼에 적합합니다.</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Secondary</p>
                  <p className="mt-2 text-[14px] font-semibold text-white">`surface-container` + `outline`</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/50">기본 액션 옆에 놓는 중립 버튼에 사용합니다.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Status & Data Chips</p>
              <div className="mt-5 flex flex-wrap gap-3">
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
            </div>

            <div className="glass-card p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Cards</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-[#FFFFFF12] bg-[#141425] p-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Surface Container</p>
                  <p className="mt-2 text-[18px] font-bold">정보 카드</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/50">기본 정보 모듈과 설명 카드에 사용합니다.</p>
                </div>
                <div className="rounded-[24px] border border-[#FFFFFF1F] bg-[#1B1B31] p-4 shadow-[0_16px_48px_rgba(0,0,0,0.3)]">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Surface High</p>
                  <p className="mt-2 text-[18px] font-bold">강조 카드</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/50">히어로와 강조 블록, 대표 패널에 사용합니다.</p>
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
                  <div key={item.label} className="rounded-[24px] border border-[#FFFFFF1F] bg-[#1B1B31] p-5">
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
            title="레이아웃을 조립할 때의"
            highlight="토큰 사용 원칙"
            description="컬러 이름과 레이어 이름을 같이 쓰면 페이지를 훨씬 안정적으로 확장할 수 있습니다."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="glass-card p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Primary Usage</p>
              <p className="mt-3 text-[22px] font-bold">액션은 primary에만 집중</p>
              <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                CTA, 핵심 링크, 중요한 강조만 `primary`와 `primary-container`를 사용합니다.
              </p>
            </div>

            <div className="glass-card p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Surface Layering</p>
              <p className="mt-3 text-[22px] font-bold">배경은 surface 단계로 쌓기</p>
              <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                페이지는 `surface`, 카드는 `surface-container`, 강조 패널은 `surface-container-high`를 우선 사용합니다.
              </p>
            </div>

            <div className="glass-card p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Outline Discipline</p>
              <p className="mt-3 text-[22px] font-bold">경계는 outline으로 절제</p>
              <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                너무 많은 색 보더 대신 `outline`과 `outline-variant`로 레이어만 구분합니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
