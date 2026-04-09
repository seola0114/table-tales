import type { Metadata } from "next";
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
