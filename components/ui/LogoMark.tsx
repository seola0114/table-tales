/**
 * Table Tales 로고마크
 * Figma: VmCRyL3ntZQforhPzcn1Y7 / node 6351:7542
 */
export default function LogoMark({
  width = 36,
  height = 36,
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
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoGradOuter" x1="6" y1="3.03595" x2="59.6705" y2="86.833" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00B2FF" />
          <stop offset="1" stopColor="#04C82F" />
        </linearGradient>
        <linearGradient id="logoGradDot" x1="34" y1="19.9595" x2="41.885" y2="33.6108" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00B2FF" />
          <stop offset="1" stopColor="#04C82F" />
        </linearGradient>
      </defs>
      <path
        d="M44.7759 4.33968C41.6819 2.55344 37.87 2.55344 34.7761 4.33968L11.0001 18.0663C7.90604 19.8527 6 23.154 6 26.7267V54.1795C6 57.7522 7.90604 61.0535 11.0001 62.8398L34.7761 76.5665C37.87 78.3527 41.6819 78.3527 44.7759 76.5665L68.5519 62.8398C71.6459 61.0535 73.552 57.7522 73.552 54.1795V26.7267C73.552 23.154 71.6459 19.8527 68.5519 18.0663L44.7759 4.33968ZM66.4856 49.4677C66.4856 52.9272 64.6975 56.1409 61.7579 57.9649L45.0483 68.3328C41.819 70.3366 37.733 70.3366 34.5036 68.3328L17.7941 57.9649C14.8545 56.1409 13.0664 52.9272 13.0664 49.4677V31.4441C13.0664 27.9846 14.8545 24.7709 17.7941 22.9469L34.5036 12.579C37.733 10.5752 41.819 10.5752 45.0483 12.579L61.7579 22.9469C64.6975 24.7709 66.4856 27.9846 66.4856 31.4441V49.4677Z"
        fill="url(#logoGradOuter)"
      />
      <path
        d="M39.7701 31.4941C42.9568 31.4941 45.5401 28.9108 45.5401 25.724C45.5401 22.5373 42.9568 19.954 39.7701 19.954C36.5833 19.954 34 22.5373 34 25.724C34 28.9108 36.5833 31.4941 39.7701 31.4941Z"
        fill="url(#logoGradDot)"
      />
    </svg>
  );
}
