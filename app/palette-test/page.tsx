"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";

type Palette = {
  id: string;
  name: string;
  summary: string;
  mood: string[];
  colors: {
    primary: string;
    primaryHover: string;
    accent: string;
    accentSoft: string;
    background: string;
    surface: string;
    text: string;
  };
};

const palettes: Palette[] = [
  {
    id: "plum-butter",
    name: "1. 플럼 + 버터 옐로 + 소프트 크림",
    summary: "스토리텔링과 에디토리얼 무드가 강하고, 앱 아이콘까지 예쁘게 풀리는 방향",
    mood: ["스토리텔링", "에디토리얼", "차별화"],
    colors: {
      primary: "#5B3A66",
      primaryHover: "#4A2F53",
      accent: "#F2C94C",
      accentSoft: "#FFDFA3",
      background: "#FFF9F3",
      surface: "#F4EDE7",
      text: "#201A1F",
    },
  },
  {
    id: "ink-coral",
    name: "2. 잉크 네이비 + 코랄 + 아이보리",
    summary: "서비스 톤이 가장 안정적이고 기록/통계/리뷰 UI까지 무난하게 확장되는 방향",
    mood: ["프로덕트다움", "깔끔함", "CTA 선명도"],
    colors: {
      primary: "#24324A",
      primaryHover: "#1B2638",
      accent: "#FF7A59",
      accentSoft: "#FFB29E",
      background: "#FFFDF9",
      surface: "#F3F4F6",
      text: "#171C24",
    },
  },
  {
    id: "cherry-lilac",
    name: "3. 체리 버건디 + 라일락 그레이 + 샌드",
    summary: "보드게임 서비스보다는 취향 기록 서비스처럼 보이게 밀 수 있는 패셔너블한 방향",
    mood: ["패셔너블", "취향 기록", "소프트 럭셔리"],
    colors: {
      primary: "#8E3B46",
      primaryHover: "#742F39",
      accent: "#C8B6E2",
      accentSoft: "#E5DCF3",
      background: "#FCF8F4",
      surface: "#F1E9E4",
      text: "#2A2022",
    },
  },
];

function ColorChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-black/6 bg-white/55 p-3 shadow-[0_12px_30px_rgba(20,20,20,0.05)] backdrop-blur-sm">
      <div className="mb-3 h-16 rounded-xl" style={{ backgroundColor: value }} />
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/45">{label}</p>
      <p className="mt-1 text-[13px] font-semibold text-black/75">{value}</p>
    </div>
  );
}

export default function PaletteTestPage() {
  const [selectedId, setSelectedId] = useState(palettes[0].id);

  const selected = useMemo(
    () => palettes.find((palette) => palette.id === selectedId) ?? palettes[0],
    [selectedId]
  );

  const theme = selected.colors;

  return (
    <main
      className="min-h-screen px-5 py-8 sm:px-8 lg:px-12"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        backgroundImage: `radial-gradient(circle at top left, ${theme.accentSoft}66 0%, transparent 28%), radial-gradient(circle at top right, ${theme.primary}18 0%, transparent 34%)`,
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <section className="rounded-[32px] border border-black/6 bg-white/45 p-6 shadow-[0_24px_80px_rgba(18,18,18,0.08)] backdrop-blur-xl lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-semibold"
                style={{ backgroundColor: `${theme.accentSoft}AA`, color: theme.primary }}
              >
                <Sparkles size={14} />
                Table Tales Color Test
              </div>
              <h1 className="mt-4 text-[34px] font-bold tracking-[-0.04em] sm:text-[48px]">
                프라이머리 컬러 3안을
                <br />
                페이지 안에서 바로 비교해볼 수 있게 만들었어요
              </h1>
              <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-black/60">
                버튼, 카드, 히어로 느낌, 정보 밀도까지 함께 보이도록 구성했습니다.
                실제 브랜드 톤을 판단하기 쉽게 메인 랜딩 분위기와 비슷한 밀도로 맞췄어요.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {palettes.map((palette) => {
                const active = palette.id === selected.id;
                return (
                  <button
                    key={palette.id}
                    type="button"
                    onClick={() => setSelectedId(palette.id)}
                    className="rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-200"
                    style={{
                      backgroundColor: active ? palette.colors.primary : `${palette.colors.surface}CC`,
                      color: active ? "#ffffff" : palette.colors.text,
                      boxShadow: active ? `0 14px 28px ${palette.colors.primary}33` : "none",
                      border: active ? `1px solid ${palette.colors.primary}` : "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    {palette.name.split(". ")[1]}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="overflow-hidden rounded-[36px] border border-black/6 shadow-[0_40px_120px_rgba(24,24,24,0.12)]"
          style={{
            backgroundColor: theme.background,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        >
          <div className="grid gap-10 px-6 py-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-12">
            <div className="flex flex-col justify-center">
              <div
                className="inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] font-semibold"
                style={{
                  borderColor: `${theme.primary}33`,
                  backgroundColor: `${theme.accentSoft}66`,
                  color: theme.primary,
                }}
              >
                <Sparkles size={13} />
                Board game sessions, beautifully remembered
              </div>

              <h2 className="mt-5 text-[50px] font-bold leading-[0.98] tracking-[-0.05em] sm:text-[64px]">
                당신의 플레이를,
                <br />
                <span style={{ color: theme.primary }}>기록 너머의</span>
                <br />
                이야기로
              </h2>

              <p className="mt-5 max-w-[520px] text-[18px] leading-relaxed text-black/62">
                플레이한 게임, 점수, 함께한 사람들, 그날의 분위기까지.
                Table Tales는 기록을 통계와 스토리로 쌓아가는 가장 감각적인 방법입니다.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-[15px] font-semibold text-white transition-colors"
                  style={{ backgroundColor: theme.primary }}
                >
                  Waitlist 참여하기
                  <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  className="rounded-2xl border px-6 py-3.5 text-[15px] font-semibold transition-colors"
                  style={{
                    borderColor: `${theme.primary}25`,
                    backgroundColor: `${theme.surface}CC`,
                    color: theme.primary,
                  }}
                >
                  기능 살펴보기
                </button>
              </div>

              <div className="mt-6 flex items-center gap-2 text-[13px] text-black/50">
                <Check size={14} style={{ color: theme.primary }} />
                이미 2,400+명이 대기 중
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-x-[10%] top-[8%] h-[74%] rounded-full blur-3xl"
                style={{ background: `radial-gradient(circle, ${theme.accentSoft} 0%, transparent 72%)` }}
              />

              <div
                className="relative w-full max-w-[620px] overflow-hidden rounded-[30px] border shadow-[0_24px_70px_rgba(20,20,20,0.16)]"
                style={{
                  backgroundColor: theme.surface,
                  borderColor: `${theme.primary}18`,
                }}
              >
                <div
                  className="flex items-center gap-2 border-b px-5 py-4"
                  style={{ borderColor: `${theme.primary}10` }}
                >
                  <div className="h-3 w-3 rounded-full bg-black/10" />
                  <div className="h-3 w-3 rounded-full bg-black/10" />
                  <div className="h-3 w-3 rounded-full bg-black/10" />
                  <div className="ml-4 flex-1 rounded-full bg-white/50 px-4 py-1.5 text-center text-[12px] text-black/35">
                    tabletales.app
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/35">Today</p>
                      <p className="mt-1 text-[24px] font-bold">Mina의 게임 기록</p>
                    </div>
                    <div
                      className="rounded-full px-3 py-1 text-[12px] font-semibold"
                      style={{ backgroundColor: `${theme.accentSoft}AA`, color: theme.primary }}
                    >
                      기록 중
                    </div>
                  </div>

                  {[
                    { title: "Arclight Traders", players: "Mina, Juno, Alex", score: "42 pts", tone: theme.accentSoft },
                    { title: "Moon Harbor", players: "Mina, Yuna", score: "31 pts", tone: `${theme.primary}22` },
                    { title: "Forest Signal", players: "Mina, Juno, Alex, Yuna", score: "58 pts", tone: `${theme.accent}33` },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between rounded-2xl border px-4 py-3"
                      style={{
                        backgroundColor: item.tone,
                        borderColor: `${theme.primary}10`,
                      }}
                    >
                      <div>
                        <p className="text-[15px] font-semibold">{item.title}</p>
                        <p className="text-[12px] text-black/45">{item.players}</p>
                      </div>
                      <p className="text-[16px] font-bold" style={{ color: theme.primary }}>
                        {item.score}
                      </p>
                    </div>
                  ))}

                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Total Plays", value: "47" },
                      { label: "Win Rate", value: "61%" },
                      { label: "Sessions", value: "12" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border p-4"
                        style={{
                          backgroundColor: "#FFFFFFA6",
                          borderColor: `${theme.primary}12`,
                        }}
                      >
                        <p className="text-[24px] font-bold" style={{ color: theme.primary }}>
                          {stat.value}
                        </p>
                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-black/40">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] border border-black/6 bg-white/45 p-6 shadow-[0_20px_60px_rgba(18,18,18,0.08)] backdrop-blur-xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-black/45">현재 선택안</p>
            <h3 className="mt-3 text-[28px] font-bold tracking-[-0.03em]">{selected.name}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-black/62">{selected.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {selected.mood.map((item) => (
                <span
                  key={item}
                  className="rounded-full px-3 py-1.5 text-[12px] font-semibold"
                  style={{ backgroundColor: `${theme.accentSoft}88`, color: theme.primary }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            <ColorChip label="Primary" value={theme.primary} />
            <ColorChip label="Primary Hover" value={theme.primaryHover} />
            <ColorChip label="Accent" value={theme.accent} />
            <ColorChip label="Accent Soft" value={theme.accentSoft} />
            <ColorChip label="Background" value={theme.background} />
            <ColorChip label="Surface" value={theme.surface} />
          </div>
        </section>
      </div>
    </main>
  );
}
