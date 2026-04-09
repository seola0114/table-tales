"use client";

import { useState } from "react";
import { ArrowRight, Check, Clock3, Sparkles, Trophy, Users } from "lucide-react";

const tabs = [
  { id: "foundations", label: "Foundations" },
  { id: "typography", label: "Typography" },
  { id: "components", label: "Components" },
  { id: "composition", label: "Composition" },
] as const;

const primaryTokens = [
  { label: "primary", value: "#8B5CF6", note: "브랜드 메인 액션, CTA, 핵심 하이라이트" },
  { label: "on-primary", value: "#FFFFFF", note: "Primary 위 텍스트와 아이콘" },
  { label: "primary-container", value: "#24163F", note: "primary를 배경색처럼 직접 쓰기엔 너무 강할 때, 그 색감을 유지한 채 한 단계 눌러 담아내는 보조 컨테이너입니다. tonal button, 강조 배지, 선택 상태 카드처럼 '강조는 필요하지만 메인 CTA까지는 아닌' 영역에 씁니다." },
  { label: "on-primary-container", value: "#E9DDFF", note: "Primary Container 위에서 쓰는 텍스트/아이콘 컬러입니다. 흰색보다 더 부드럽게 브랜드 톤을 유지하면서도 충분한 대비를 확보합니다." },
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
  { label: "surface-dim", value: "#05050C", note: "기본 `surface`보다 더 눌린 바닥 레이어입니다. 화면의 가장 깊은 배경, 글로우 뒤쪽, 혹은 다른 모든 요소를 뒤로 물려야 할 때 씁니다." },
  { label: "surface-bright", value: "#161629", note: "기본 `surface`보다 살짝 떠오른 면입니다. 너무 강한 카드까지는 아니지만 배경과는 구분되어야 하는 얕은 강조 영역에 적합합니다." },
  { label: "surface-container-lowest", value: "#030308", note: "컨테이너 계열 중 가장 낮은 단계입니다. 거의 배경처럼 느껴져야 하는 래퍼나 가장 바깥쪽 패널에 사용합니다." },
  { label: "surface-container-low", value: "#0B0B17", note: "배경과 카드 사이를 연결하는 중간 레이어입니다. 섹션 안쪽 래퍼, 모듈 그룹 배경, 카드들을 감싸는 영역에 잘 맞습니다." },
  { label: "surface-container", value: "#141425", note: "가장 기본이 되는 카드 표면입니다. 일반 정보 카드, 설명 블록, 기본 모듈 패널은 우선 이 단계에서 시작합니다." },
  { label: "surface-container-high", value: "#1B1B31", note: "기본 카드보다 한 단계 더 존재감 있는 표면입니다. 강조 카드, 핵심 정보 패널, 인터랙션이 더 많은 블록에 사용합니다." },
  { label: "surface-container-highest", value: "#242440", note: "컨테이너 단계 중 가장 강하게 떠오르는 표면입니다. 현재 뷰에서 가장 중요한 패널, 포커스된 상태, 상단 요약 카드처럼 시선을 먼저 받아야 하는 곳에 씁니다." },
  { label: "outline", value: "#FFFFFF1F", note: "기본 보더와 디바이더" },
  { label: "outline-variant", value: "#FFFFFF12", note: "더 약한 보더" },
];

const supportTokens = [
  { label: "success", value: "#19C8A6", note: "성공, 활성, 완료, 긍정 상태 피드백" },
  { label: "warning", value: "#FFBF47", note: "주의, 랭크, 배지, 성취 하이라이트" },
  { label: "error", value: "#FF5A6B", note: "에러, 경고성 실패 상태, destructive 액션" },
  { label: "on-error", value: "#FFFFFF", note: "Error 위 텍스트와 아이콘" },
  { label: "error-container", value: "#3A1018", note: "다크 배경에서 쓰는 에러 컨테이너" },
  { label: "on-error-container", value: "#FFD9DE", note: "Error Container 위 텍스트" },
];

const supportTonalPalettes = [
  {
    name: "Success",
    role: "상태, 활성, 성공 메시지, 진행 상태",
    tones: [
      { tone: 0, value: "#000000" },
      { tone: 10, value: "#002117" },
      { tone: 20, value: "#003827" },
      { tone: 30, value: "#00513A" },
      { tone: 40, value: "#006B4D" },
      { tone: 50, value: "#008661" },
      { tone: 60, value: "#19C8A6" },
      { tone: 70, value: "#53E4C3" },
      { tone: 80, value: "#85FFD9" },
      { tone: 90, value: "#B5FFE9" },
      { tone: 95, value: "#D5FFF2" },
      { tone: 99, value: "#F4FFF9" },
      { tone: 100, value: "#FFFFFF" },
    ],
  },
  {
    name: "Warning",
    role: "랭크, 배지, 포인트, 성취 하이라이트",
    tones: [
      { tone: 0, value: "#000000" },
      { tone: 10, value: "#261900" },
      { tone: 20, value: "#3F2D00" },
      { tone: 30, value: "#5A4200" },
      { tone: 40, value: "#765800" },
      { tone: 50, value: "#946F00" },
      { tone: 60, value: "#B28700" },
      { tone: 70, value: "#D19F17" },
      { tone: 80, value: "#FFBF47" },
      { tone: 90, value: "#FFE08E" },
      { tone: 95, value: "#FFF0C4" },
      { tone: 99, value: "#FFFBEF" },
      { tone: 100, value: "#FFFFFF" },
    ],
  },
  {
    name: "Error",
    role: "실패 상태, 폼 오류, destructive 액션, 위험 경고",
    tones: [
      { tone: 0, value: "#000000" },
      { tone: 10, value: "#41000A" },
      { tone: 20, value: "#690014" },
      { tone: 30, value: "#93001F" },
      { tone: 40, value: "#B81F36" },
      { tone: 50, value: "#D73B4E" },
      { tone: 60, value: "#F15867" },
      { tone: 70, value: "#FF8791" },
      { tone: 80, value: "#FFB3B8" },
      { tone: 90, value: "#FFD9DE" },
      { tone: 95, value: "#FFECEE" },
      { tone: 99, value: "#FFFBFF" },
      { tone: 100, value: "#FFFFFF" },
    ],
  },
];

const tonalPalettes = [
  {
    name: "Primary",
    role: "브랜드 메인 인터랙션과 강조 요소",
    tones: [
      { tone: 0, value: "#000000" },
      { tone: 10, value: "#190A2E" },
      { tone: 20, value: "#2C1250" },
      { tone: 30, value: "#441F76" },
      { tone: 40, value: "#5C2DA0" },
      { tone: 50, value: "#7444C8" },
      { tone: 60, value: "#8B5CF6" },
      { tone: 70, value: "#A78BFA" },
      { tone: 80, value: "#C4B4FD" },
      { tone: 90, value: "#E9DDFF" },
      { tone: 95, value: "#F5EEFF" },
      { tone: 99, value: "#FEFBFF" },
      { tone: 100, value: "#FFFFFF" },
    ],
  },
  {
    name: "Secondary",
    role: "primary와 함께 붙는 보조 브랜드 톤",
    tones: [
      { tone: 0, value: "#000000" },
      { tone: 10, value: "#151427" },
      { tone: 20, value: "#24233D" },
      { tone: 30, value: "#393857" },
      { tone: 40, value: "#504E73" },
      { tone: 50, value: "#686590" },
      { tone: 60, value: "#817EAD" },
      { tone: 70, value: "#9B98CA" },
      { tone: 80, value: "#B6B2E8" },
      { tone: 90, value: "#E1DEFF" },
      { tone: 95, value: "#F2EEFF" },
      { tone: 99, value: "#FEFBFF" },
      { tone: 100, value: "#FFFFFF" },
    ],
  },
  {
    name: "Tertiary",
    role: "시각적 변주와 데이터 강조에 쓰는 블루 축",
    tones: [
      { tone: 0, value: "#000000" },
      { tone: 10, value: "#001A38" },
      { tone: 20, value: "#002E60" },
      { tone: 30, value: "#0B4789" },
      { tone: 40, value: "#2862B3" },
      { tone: 50, value: "#4A7BD6" },
      { tone: 60, value: "#6D95F3" },
      { tone: 70, value: "#8FB1FF" },
      { tone: 80, value: "#B7CCFF" },
      { tone: 90, value: "#DCE5FF" },
      { tone: 95, value: "#EEF2FF" },
      { tone: 99, value: "#FCFCFF" },
      { tone: 100, value: "#FFFFFF" },
    ],
  },
  {
    name: "Neutral",
    role: "배경과 기본 surface를 만드는 중성 축",
    tones: [
      { tone: 0, value: "#000000" },
      { tone: 10, value: "#070711" },
      { tone: 20, value: "#141425" },
      { tone: 30, value: "#2A2A3A" },
      { tone: 40, value: "#424252" },
      { tone: 50, value: "#5B5B6B" },
      { tone: 60, value: "#757585" },
      { tone: 70, value: "#9090A0" },
      { tone: 80, value: "#ABABBB" },
      { tone: 90, value: "#C7C6D7" },
      { tone: 95, value: "#E4E2F3" },
      { tone: 99, value: "#FCF8FF" },
      { tone: 100, value: "#FFFFFF" },
    ],
  },
  {
    name: "Neutral Variant",
    role: "outline과 surface variant에 쓰는 살짝 색이 도는 중성 축",
    tones: [
      { tone: 0, value: "#000000" },
      { tone: 10, value: "#0D0C16" },
      { tone: 20, value: "#1B1A2A" },
      { tone: 30, value: "#323043" },
      { tone: 40, value: "#49475B" },
      { tone: 50, value: "#626075" },
      { tone: 60, value: "#7B788E" },
      { tone: 70, value: "#9591A8" },
      { tone: 80, value: "#B0ACC4" },
      { tone: 90, value: "#CBC6E0" },
      { tone: 95, value: "#E9E3F8" },
      { tone: 99, value: "#FDF8FF" },
      { tone: 100, value: "#FFFFFF" },
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

function TokenRow({ label, value, note }: { label: string; value: string; note: string }) {
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
      <div className="h-11 rounded-xl border border-white/8" style={{ background: value }} />
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

function TonalPaletteCard({
  name,
  role,
  tones,
}: {
  name: string;
  role: string;
  tones: { tone: number; value: string }[];
}) {
  return (
    <div className="glass-card p-6">
      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/30">{name}</p>
      <p className="mt-2 text-[14px] leading-relaxed text-white/50">{role}</p>
      <div className="mt-5 overflow-hidden rounded-[22px] border border-white/8">
        {tones.map((item) => (
          <div
            key={item.tone}
            className="grid grid-cols-[64px_1fr_110px] items-center border-b border-black/10 last:border-b-0"
            style={{ background: item.value }}
          >
            <div className={`border-r border-black/10 px-3 py-3 text-[12px] font-semibold ${item.tone <= 50 ? "text-white/80" : "text-black/75"}`}>
              {item.tone}
            </div>
            <div className={`px-4 py-3 text-[13px] font-medium ${item.tone <= 50 ? "text-white/85" : "text-black/80"}`}>
              {name.toLowerCase()}
            </div>
            <div className={`border-l border-black/10 px-3 py-3 text-right text-[12px] font-semibold ${item.tone <= 50 ? "text-white/75" : "text-black/70"}`}>
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FoundationsContent() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Foundations"
        title="새 기준으로 정리한"
        highlight="컬러 토큰"
        description="페이지 기본 색상은 primary, surface, support의 세 축으로 정리하고, support colors는 tonal palette로 확장합니다."
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

      <div className="glass-card p-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Figma Variable Structure Guide</p>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#FF5A6B]/20 bg-[#3A1018]/50 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FFB3B8]">What Feels Off</p>
            <ul className="mt-3 space-y-3 text-[14px] leading-relaxed text-white/70">
              <li>{"`primitive > primary`"}가 현재 퍼플이 아니라 초록 tonal palette로 잡혀 있어서, semantic의 dark mode `primary` 값 `#8B5CF6`와 primitive source가 서로 다릅니다.</li>
              <li>즉, semantic은 퍼플 브랜드를 쓰고 있는데 primitive는 다른 브랜드 축을 가리키고 있어서 나중에 토큰을 확장하거나 자동 매핑할 때 구조가 깨집니다.</li>
              <li>`Brand Blue`처럼 역할과 색 이름이 섞인 support 변수는, semantic 역할과 primitive tonal palette를 분리해서 생각하기 어렵게 만듭니다.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#19C8A6]/18 bg-[#05231b]/50 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#85FFD9]">How To Fix It</p>
            <ul className="mt-3 space-y-3 text-[14px] leading-relaxed text-white/70">
              <li>`primitive`는 반드시 실제 source palette 기준으로만 두세요. 지금 기준이면 `primary0~100`은 퍼플 축, `secondary0~100`, `tertiary0~100`, `neutral0~100`, `neutral-variant0~100`이 각각 일관된 톤이어야 합니다.</li>
              <li>`semantic`은 그 primitive를 참조해서 light/dark mode 값을 조합하세요. 예: dark mode의 `primary = primary60`, `on-primary = primary100`, `primary-container = primary20` 같은 식입니다.</li>
              <li>support 색은 `success`, `warning`, `error`처럼 역할 이름으로 두고, 각자 tonal palette를 따로 만든 뒤 semantic에서 필요한 상태 토큰으로 매핑하는 편이 더 안정적입니다.</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.02] p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/30">Recommended Figma Collections</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/8 bg-[#141425] p-4">
              <p className="text-[13px] font-semibold text-white">`primitive`</p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/50">raw tonal palettes only: primary / secondary / tertiary / neutral / neutral-variant / success / warning / error</p>
            </div>
            <div className="rounded-xl border border-white/8 bg-[#141425] p-4">
              <p className="text-[13px] font-semibold text-white">`semantic`</p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/50">mode-aware tokens: primary, on-primary, surface, outline, error, button, text, icon</p>
            </div>
            <div className="rounded-xl border border-white/8 bg-[#141425] p-4">
              <p className="text-[13px] font-semibold text-white">`number`</p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/50">opacity, radius, spacing, elevation, blur처럼 색이 아닌 수치 토큰만 관리</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <p className="font-display-italic text-[14px] tracking-wide text-[#A78BFA]">Core Tonal Palettes</p>
          <h3 className="mt-3 text-[30px] font-bold tracking-[-0.03em] text-white sm:text-[36px]">
            기본 구조로 쓰는
            <br />
            <span className="gradient-text">Material 3 tonal palette</span>
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-relaxed text-white/50">
            브랜드 시스템의 뼈대가 되는 `Primary`, `Secondary`, `Tertiary`, `Neutral`, `Neutral Variant` 5개 tonal palette입니다.
            이 팔레트가 전체 UI의 기본 역할을 나누고, 그 위에 support colors가 상태와 데이터 표현을 보강합니다.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {tonalPalettes.map((palette) => (
            <TonalPaletteCard key={palette.name} {...palette} />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <p className="font-display-italic text-[14px] tracking-wide text-[#A78BFA]">Support Tonal Palettes</p>
          <h3 className="mt-3 text-[30px] font-bold tracking-[-0.03em] text-white sm:text-[36px]">
            Support Colors를 위한
            <br />
            <span className="gradient-text">Material 3 tonal palette</span>
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-relaxed text-white/50">
            support colors는 상태 역할 중심으로 `Success`, `Warning`, `Error`만 남겼습니다. 블루 축은 support에서 빼고 위의 `Tertiary` tonal palette 하나로 통일해서, 역할이 겹치지 않도록 정리했습니다.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {supportTonalPalettes.map((palette) => (
            <TonalPaletteCard key={palette.name} {...palette} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TypographyContent() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Typography"
        title="랜딩에서 실제로 쓰는"
        highlight="타입 스케일"
        description="Pretendard 기반으로 제목, 본문, 라벨, 캡션을 단계별로 정리했습니다."
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
              <p className="mt-2 text-[14px] leading-relaxed text-white/50">전체 UI와 본문, 헤드라인 모두 Pretendard를 기준으로 통일합니다.</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Tracking</p>
              <p className="mt-2 text-[14px] leading-relaxed text-white/50">큰 제목은 `-0.03em ~ -0.05em`, 본문은 기본 또는 `-0.01em`, 라벨은 넓은 letter spacing을 씁니다.</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Line Height</p>
              <p className="mt-2 text-[14px] leading-relaxed text-white/50">디스플레이는 `1.02 ~ 1.15`로 타이트하게, 본문은 `1.625`, 라벨과 캡션은 `1.35 ~ 1.4`로 정리합니다.</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Display vs Heading</p>
              <p className="mt-2 text-[14px] leading-relaxed text-white/50">`display`는 페이지에서 가장 먼저 시선을 잡는 큰 메시지용 타입입니다. 히어로 H1이나 섹션 메인 카피처럼 감정과 인상을 만드는 역할에 씁니다. 반대로 `heading`은 정보 구조를 나누는 제목입니다. 카드 제목, 서브 섹션 타이틀처럼 읽는 흐름을 정리하는 역할에 더 가깝습니다.</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">Color Roles</p>
              <p className="mt-2 text-[14px] leading-relaxed text-white/50">제목은 `on-surface`, 본문은 `on-surface-variant`, eyebrow와 강조 라벨은 `primary-fixed-dim`을 우선 사용합니다.</p>
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
              Pretendard 기반의 선명한 본문 텍스트를 사용하고, dark surface 위에서는 `on-surface`와 `on-surface-variant` 단계로 가독성을 나눕니다.
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
  );
}

function ComponentsContent() {
  return (
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
  );
}

function CompositionContent() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Composition"
        title="레이아웃을 조립할 때의"
        highlight="토큰 사용 원칙"
        description="컬러 이름과 레이어 이름을 같이 쓰면 페이지를 훨씬 안정적으로 확장할 수 있습니다."
      />

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

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="glass-card p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Primary Usage</p>
          <p className="mt-3 text-[22px] font-bold">액션은 primary에만 집중</p>
          <p className="mt-3 text-[14px] leading-relaxed text-white/50">CTA, 핵심 링크, 중요한 강조만 `primary`와 `primary-container`를 사용합니다.</p>
        </div>
        <div className="glass-card p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Surface Layering</p>
          <p className="mt-3 text-[22px] font-bold">배경은 surface 단계로 쌓기</p>
          <p className="mt-3 text-[14px] leading-relaxed text-white/50">페이지는 `surface`, 카드는 `surface-container`, 강조 패널은 `surface-container-high`를 우선 사용합니다.</p>
        </div>
        <div className="glass-card p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Outline Discipline</p>
          <p className="mt-3 text-[22px] font-bold">경계는 outline으로 절제</p>
          <p className="mt-3 text-[14px] leading-relaxed text-white/50">너무 많은 색 보더 대신 `outline`과 `outline-variant`로 레이어만 구분합니다.</p>
        </div>
      </div>
    </section>
  );
}

export default function DesignSystemPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("foundations");

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

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-12 lg:px-10 lg:py-16">
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
                <span className="gradient-text">콘텐츠별로 나눈</span>
                <br />
                디자인 시스템
              </h1>
              <p className="mt-5 max-w-[560px] text-[16px] leading-relaxed text-white/55">
                이제 디자인 시스템 페이지를 `Foundations`, `Typography`, `Components`, `Composition` 탭으로 나눠서,
                필요한 내용만 빠르게 찾아볼 수 있게 정리했습니다.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.34)]">
                  Primary Button
                  <ArrowRight size={16} />
                </button>
                <button className="rounded-xl bg-[#24163F] px-6 py-3.5 text-[15px] font-semibold text-[#E9DDFF]">
                  Tonal Button
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">Page Structure</p>
                <ul className="mt-4 space-y-3 text-[14px] text-white/60">
                  <li>Foundations: 컬러 토큰과 support tonal palette</li>
                  <li>Typography: 타입 스케일과 line-height 규칙</li>
                  <li>Components: 버튼, 칩, 카드 시스템</li>
                  <li>Composition: spacing, radius, 레이어 사용 원칙</li>
                </ul>
              </div>
              <div className="glass-card p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">Support Colors</p>
                <ul className="mt-4 space-y-3 text-[14px] text-white/60">
                  <li>support colors는 단일 값보다 tonal palette로 관리합니다.</li>
                  <li>민트, 앰버, 블루 각각 tone 단계별 확장이 가능합니다.</li>
                  <li>상태, 배지, 데이터 시각화에서 더 일관되게 적용할 수 있습니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="glass-card p-3">
          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-2xl px-4 py-3 text-left transition-all duration-200 ${
                    active
                      ? "bg-[#24163F] text-[#E9DDFF] shadow-[0_0_0_1px_rgba(139,92,246,0.18)]"
                      : "bg-white/[0.02] text-white/55 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-[0.16em]">{tab.label}</p>
                </button>
              );
            })}
          </div>
        </section>

        {activeTab === "foundations" && <FoundationsContent />}
        {activeTab === "typography" && <TypographyContent />}
        {activeTab === "components" && <ComponentsContent />}
        {activeTab === "composition" && <CompositionContent />}
      </div>
    </main>
  );
}
