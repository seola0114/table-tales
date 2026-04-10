import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Table Tales — 당신의 플레이를, 기록 너머의 이야기로",
  description:
    "보드게임 플레이를 기록하고, 통계로 분석하고, 이야기로 남기세요. Table Tales는 보드게임 기록을 가장 감각적인 방법으로 쌓아가는 서비스입니다.",
  keywords: ["보드게임", "기록", "통계", "플레이 로그", "board game", "Table Tales"],
  openGraph: {
    title: "Table Tales — Your Table, Your Tale",
    description: "보드게임 플레이를 기록하고, 통계로 분석하고, 이야기로 남기세요.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Table Tales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Table Tales — Your Table, Your Tale",
    description: "보드게임 플레이를 기록하고, 통계로 분석하고, 이야기로 남기세요.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeScript = `
    (() => {
      const storageKey = "table-tales-theme";
      const storedTheme = localStorage.getItem(storageKey);
      const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
      document.documentElement.dataset.theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : systemTheme;
    })();
  `;

  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <div id="app-shell">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
