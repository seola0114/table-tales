/**
 * Table Tales 로고마크
 * Figma: VmCRyL3ntZQforhPzcn1Y7 / node 6351:7542
 *
 * 구조:
 * - 포인티-탑 육각형 링 (외부 r=39, 내부 r=31) — teal→green 그라디언트
 * - 링 안쪽 상단 중앙 원형 닷 — 동일 그라디언트
 *
 * 원본 사이즈: 67.55 × 78 px
 */
export default function LogoMark({
  width = 36,
  height = 41,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 67.55 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="logoGrad"
          x1="0"
          y1="0"
          x2="67.55"
          y2="78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0DD4C0" />
          <stop offset="1" stopColor="#1FD96B" />
        </linearGradient>
      </defs>

      {/*
        육각형 링: evenodd fill-rule 로 바깥 육각형에서 안쪽 육각형을 뚫어 링 형태 생성
        외부 hexagon (pointy-top, r=39, cx=33.78, cy=39):
          top(33.78,0) → top-right(67.55,19.5) → bot-right(67.55,58.5)
          → bot(33.78,78) → bot-left(0,58.5) → top-left(0,19.5)
        내부 hexagon (r=31, cx=33.78, cy=39):
          top(33.78,8) → top-right(60.63,23.5) → bot-right(60.63,54.5)
          → bot(33.78,70) → bot-left(6.93,54.5) → top-left(6.93,23.5)
      */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="url(#logoGrad)"
        d="
          M33.78 0 L67.55 19.5 L67.55 58.5 L33.78 78 L0 58.5 L0 19.5 Z
          M33.78 8 L60.63 23.5 L60.63 54.5 L33.78 70 L6.93 54.5 L6.93 23.5 Z
        "
      />

      {/*
        상단 중앙 원형 닷
        Figma inset: top 24.3% × 78 = 18.95px, height = 11.55px
        → cx=33.78, cy=24.7, r=5.78
      */}
      <circle cx="33.78" cy="24.7" r="5.78" fill="url(#logoGrad)" />
    </svg>
  );
}
