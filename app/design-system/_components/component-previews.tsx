"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft, Bell, Check, ChevronDown, ChevronRight,
  Clock3, Home, RotateCcw, Search, Settings, Sparkles,
  Star, Trophy, Users, X,
} from "lucide-react";

/* ─── App Bars ─── */
function AppBarsPreview() {
  const [scrolled, setScrolled] = useState(false);
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(["Default", "Scrolled"] as const).map((label) => (
          <button
            key={label}
            onClick={() => setScrolled(label === "Scrolled")}
            className={`rounded-lg px-3 py-1.5 text-[12px] font-medium transition-colors ${
              scrolled === (label === "Scrolled")
                ? "bg-[#24163F] text-[#E9DDFF]"
                : "text-white/40 hover:text-white/60"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
          scrolled ? "border border-white/10 bg-[#141425]" : "bg-[#070711]"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06]">
            <ArrowLeft size={16} className="text-white/70" />
          </div>
          <span className="text-[16px] font-semibold text-white">기록 상세</span>
        </div>
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-300 ${
            scrolled ? "bg-[#24163F]" : "bg-white/[0.06]"
          }`}
        >
          <Bell size={16} className={scrolled ? "text-[#A78BFA]" : "text-white/70"} />
        </div>
      </div>
    </div>
  );
}

/* ─── Buttons ─── */
function ButtonsPreview() {
  return (
    <div className="flex flex-wrap gap-3">
      <button className="rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] px-5 py-3 text-[14px] font-semibold text-white transition-all hover:opacity-90 active:scale-[0.97]">
        Primary CTA
      </button>
      <button className="rounded-xl bg-[#24163F] px-5 py-3 text-[14px] font-semibold text-[#E9DDFF] transition-all hover:bg-[#2e1a50] active:scale-[0.97]">
        Tonal Button
      </button>
      <button className="rounded-xl border border-white/15 bg-[#141425] px-5 py-3 text-[14px] font-medium text-white/75 transition-all hover:bg-white/[0.06] active:scale-[0.97]">
        Secondary
      </button>
      <button disabled className="cursor-not-allowed rounded-xl bg-white/[0.04] px-5 py-3 text-[14px] font-medium text-white/25">
        Disabled
      </button>
    </div>
  );
}

/* ─── Bottom Sheets ─── */
function BottomSheetsPreview() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#0D0D1A]" style={{ minHeight: 220 }}>
      <div className="flex items-center justify-center p-10">
        <button
          onClick={() => setOpen(true)}
          className="rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] px-5 py-3 text-[14px] font-semibold text-white"
        >
          게임 추가
        </button>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 rounded-t-[28px] border-t border-white/10 bg-[#1B1B31] transition-transform duration-300 ease-out ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-center pb-1 pt-3">
          <div className="h-1 w-10 rounded-full bg-white/20" />
        </div>
        <div className="px-5 pb-5 pt-3">
          <p className="text-[16px] font-semibold text-white">게임 추가</p>
          <p className="mt-1 text-[13px] text-white/50">플레이한 게임을 선택하세요</p>
          <div className="mt-4 space-y-2">
            {["아줄", "윙스팬", "카탄"].map((game) => (
              <div
                key={game}
                onClick={() => setOpen(false)}
                className="flex cursor-pointer items-center justify-between rounded-xl bg-white/[0.04] px-4 py-3 transition-colors hover:bg-white/[0.08]"
              >
                <span className="text-[14px] text-white/80">{game}</span>
                <ChevronRight size={16} className="text-white/30" />
              </div>
            ))}
          </div>
          <button
            onClick={() => setOpen(false)}
            className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] py-3 text-[14px] font-semibold text-white"
          >
            선택 완료
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Checkboxes ─── */
function CheckboxesPreview() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    아줄: true,
    윙스팬: true,
    카탄: false,
    "테라포밍 마스": false,
  });
  const toggle = (label: string) => {
    if (label === "테라포밍 마스") return;
    setChecked((p) => ({ ...p, [label]: !p[label] }));
  };
  return (
    <div className="space-y-3">
      {Object.entries(checked).map(([label, on]) => (
        <div
          key={label}
          onClick={() => toggle(label)}
          className={`flex cursor-pointer items-center gap-3 ${label === "테라포밍 마스" ? "cursor-not-allowed opacity-35" : ""}`}
        >
          <div
            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] border transition-colors ${
              on ? "border-[#8B5CF6] bg-[#8B5CF6]" : "border-white/25"
            }`}
          >
            {on && <Check size={12} className="text-white" strokeWidth={3} />}
          </div>
          <span className="text-[14px] text-white/80 select-none">{label}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Chips ─── */
function ChipsPreview() {
  const filters = ["전체", "승리", "패배", "진행 중", "Best Streak"];
  const [selected, setSelected] = useState<string[]>(["전체"]);
  const toggle = (chip: string) => {
    if (chip === "전체") { setSelected(["전체"]); return; }
    setSelected((prev) => {
      const without = prev.filter((s) => s !== "전체" && s !== chip);
      return prev.includes(chip) ? (without.length ? without : ["전체"]) : [...without, chip];
    });
  };
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((chip) => (
        <button
          key={chip}
          onClick={() => toggle(chip)}
          className={`rounded-full px-3 py-1.5 text-[12px] font-semibold transition-all ${
            selected.includes(chip)
              ? "bg-[#24163F] text-[#E9DDFF] shadow-[0_0_0_1px_rgba(139,92,246,0.3)]"
              : "bg-white/[0.06] text-white/55 hover:bg-white/[0.10]"
          }`}
        >
          {chip}
        </button>
      ))}
    </div>
  );
}

/* ─── Radio Buttons ─── */
function RadioButtonsPreview() {
  const [selected, setSelected] = useState("승리");
  return (
    <div className="space-y-3">
      {["승리", "패배", "무승부"].map((opt) => (
        <div key={opt} onClick={() => setSelected(opt)} className="flex cursor-pointer items-center gap-3">
          <div
            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
              selected === opt ? "border-[#8B5CF6]" : "border-white/25"
            }`}
          >
            {selected === opt && <div className="h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />}
          </div>
          <span className="text-[14px] text-white/80 select-none">{opt}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Dialogs ─── */
function DialogsPreview() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl border border-[#FF5A6B]/30 bg-[#FF5A6B]/10 px-5 py-3 text-[14px] font-semibold text-[#FF5A6B] transition-colors hover:bg-[#FF5A6B]/15"
      >
        기록 삭제하기
      </button>
      {open && (
        <div
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          className="absolute inset-0 -m-5 flex items-center justify-center rounded-[24px] bg-black/60 p-6 backdrop-blur-sm"
        >
          <div className="w-full rounded-[24px] border border-white/12 bg-[#1B1B31] p-6">
            <p className="text-[18px] font-bold text-white">기록을 삭제할까요?</p>
            <p className="mt-2 text-[14px] leading-relaxed text-white/55">삭제한 기록은 복구할 수 없습니다.</p>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setOpen(false)} className="rounded-xl border border-white/12 bg-white/[0.04] px-4 py-2.5 text-[14px] font-medium text-white/70 hover:bg-white/[0.08]">
                취소
              </button>
              <button onClick={() => setOpen(false)} className="rounded-xl bg-[#FF5A6B]/15 px-4 py-2.5 text-[14px] font-semibold text-[#FF5A6B] hover:bg-[#FF5A6B]/25">
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Dividers ─── */
function DividersPreview() {
  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-[11px] uppercase tracking-[0.12em] text-white/30">Full-width</p>
        <div className="h-px w-full bg-white/[0.12]" />
      </div>
      <div>
        <p className="mb-2 text-[11px] uppercase tracking-[0.12em] text-white/30">Inset</p>
        <div className="ml-4 h-px bg-white/[0.08]" />
      </div>
      <div>
        <p className="mb-2 text-[11px] uppercase tracking-[0.12em] text-white/30">With Label</p>
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-white/[0.08]" />
          <span className="text-[11px] font-medium text-white/35">이번 달</span>
          <div className="h-px flex-1 bg-white/[0.08]" />
        </div>
      </div>
    </div>
  );
}

/* ─── Lists ─── */
function ListsPreview() {
  const [selected, setSelected] = useState<string | null>("아줄");
  const items = [
    { title: "아줄", meta: "2024.03.15" },
    { title: "윙스팬", meta: "2024.03.10" },
    { title: "카탄", meta: "2024.03.05" },
  ];
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <div
          key={item.title}
          onClick={() => setSelected(item.title === selected ? null : item.title)}
          className={`flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 ${
            selected === item.title ? "bg-[#24163F]" : "bg-white/[0.02] hover:bg-white/[0.05]"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`h-8 w-8 rounded-xl transition-colors ${selected === item.title ? "bg-[#8B5CF6]/30" : "bg-white/[0.06]"}`} />
            <span className={`text-[14px] font-medium transition-colors ${selected === item.title ? "text-[#E9DDFF]" : "text-white/75"}`}>
              {item.title}
            </span>
          </div>
          <span className="text-[12px] text-white/35">{item.meta}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Menus ─── */
function MenusPreview() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const items = [
    { label: "편집", Icon: Sparkles },
    { label: "공유", Icon: Users },
    { label: "통계 보기", Icon: Trophy },
  ];
  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((p) => !p)}
        className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-2.5 text-[14px] font-medium text-white/75 transition-colors hover:bg-white/[0.08]"
      >
        더보기
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-20 mt-2 w-48 rounded-[20px] border border-white/10 bg-[#242440] p-2 shadow-[0_24px_48px_rgba(0,0,0,0.5)]">
          {items.map(({ label, Icon }) => (
            <button
              key={label}
              onClick={() => setOpen(false)}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] text-white/75 transition-colors hover:bg-white/[0.06]"
            >
              <Icon size={15} className="text-white/40" />
              {label}
            </button>
          ))}
          <div className="my-1.5 h-px bg-white/[0.08]" />
          <button
            onClick={() => setOpen(false)}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] text-[#FF5A6B] transition-colors hover:bg-[#FF5A6B]/10"
          >
            <X size={15} />
            삭제
          </button>
        </div>
      )}
    </div>
  );
}

/* ─── Nav Tabs ─── */
function NavTabsPreview() {
  const [active, setActive] = useState("홈");
  const tabs = [
    { label: "홈", Icon: Home },
    { label: "검색", Icon: Search },
    { label: "기록", Icon: Clock3 },
    { label: "설정", Icon: Settings },
  ];
  return (
    <div className="rounded-[24px] border border-white/10 bg-[#141425] px-4 py-3">
      <div className="flex items-center justify-around">
        {tabs.map(({ label, Icon }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className="flex flex-col items-center gap-1"
          >
            <div
              className={`flex h-8 w-14 items-center justify-center rounded-full transition-colors ${
                active === label ? "bg-[#24163F]" : "hover:bg-white/[0.04]"
              }`}
            >
              <Icon size={20} className={`transition-colors ${active === label ? "text-[#A78BFA]" : "text-white/40"}`} />
            </div>
            <span className={`text-[11px] font-medium transition-colors ${active === label ? "text-[#A78BFA]" : "text-white/40"}`}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Pickers ─── */
function PickersPreview() {
  const dates = [
    "2024.03.13", "2024.03.14", "2024.03.15",
    "2024.03.16", "2024.03.17",
  ];
  const [center, setCenter] = useState(2);
  const prev = () => setCenter((c) => Math.max(0, c - 1));
  const next = () => setCenter((c) => Math.min(dates.length - 1, c + 1));

  const opacity = [0.15, 0.4, 1, 0.4, 0.15];

  return (
    <div className="rounded-[24px] border border-white/10 bg-[#1B1B31] overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/8 px-5 py-3">
        <span className="text-[14px] font-semibold text-white">날짜 선택</span>
        <button className="text-[13px] font-semibold text-[#A78BFA]">완료</button>
      </div>
      <div className="relative py-2">
        <div className="pointer-events-none absolute inset-x-4 top-1/2 h-10 -translate-y-1/2 rounded-xl bg-[#24163F]/60" />
        {dates.map((date, i) => {
          const diff = i - center;
          if (Math.abs(diff) > 2) return null;
          return (
            <div
              key={date}
              className="px-5 py-2 text-center text-[15px] font-medium text-white transition-all duration-200"
              style={{ opacity: opacity[diff + 2] }}
            >
              {date}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-4 border-t border-white/8 px-5 py-3">
        <button onClick={prev} disabled={center === 0} className="rounded-lg p-2 text-white/50 transition-colors hover:bg-white/[0.06] hover:text-white disabled:opacity-25">
          <ChevronDown size={18} className="rotate-180" />
        </button>
        <button onClick={next} disabled={center === dates.length - 1} className="rounded-lg p-2 text-white/50 transition-colors hover:bg-white/[0.06] hover:text-white disabled:opacity-25">
          <ChevronDown size={18} />
        </button>
      </div>
    </div>
  );
}

/* ─── Progress Bar ─── */
function ProgressBarPreview() {
  const bars = [
    { label: "승률", target: 68, color: "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]" },
    { label: "완주율", target: 85, color: "bg-[#19C8A6]" },
    { label: "목표 달성", target: 42, color: "bg-[#FFBF47]" },
  ];
  const [values, setValues] = useState([0, 0, 0]);

  const animate = () => {
    setValues([0, 0, 0]);
    setTimeout(() => setValues(bars.map((b) => b.target)), 50);
  };

  useEffect(() => { animate(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-5">
      {bars.map((bar, i) => (
        <div key={bar.label}>
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-[12px] font-medium text-white/55">{bar.label}</span>
            <span className="text-[12px] font-semibold text-white/75">{values[i]}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.08]">
            <div
              className={`h-full rounded-full transition-all duration-700 ease-out ${bar.color}`}
              style={{ width: `${values[i]}%` }}
            />
          </div>
        </div>
      ))}
      <button
        onClick={animate}
        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-medium text-white/40 transition-colors hover:bg-white/[0.06] hover:text-white/70"
      >
        <RotateCcw size={12} />
        다시 시작
      </button>
    </div>
  );
}

/* ─── Sliders ─── */
function SlidersPreview() {
  const [value, setValue] = useState(6);
  return (
    <div className="space-y-6 px-2">
      <div>
        <div className="mb-3 flex justify-between text-[12px] text-white/40">
          <span>난이도</span>
          <span className="font-semibold text-white/75">{value}</span>
        </div>
        <div className="relative flex items-center">
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.08]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] transition-all"
              style={{ width: `${((value - 1) / 9) * 100}%` }}
            />
          </div>
          <input
            type="range"
            min={1}
            max={10}
            value={value}
            onChange={(e) => setValue(+e.target.value)}
            className="absolute inset-0 w-full cursor-pointer opacity-0"
          />
          <div
            className="pointer-events-none absolute h-5 w-5 -translate-x-1/2 rounded-full border-2 border-[#A78BFA] bg-[#1B1B31] shadow-[0_0_0_3px_rgba(139,92,246,0.3)] transition-all"
            style={{ left: `${((value - 1) / 9) * 100}%` }}
          />
        </div>
        <div className="mt-1.5 flex justify-between text-[11px] text-white/25">
          <span>1</span>
          <span>10</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Snackbars ─── */
function SnackbarsPreview() {
  const [visible, setVisible] = useState(false);
  const [msg, setMsg] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = (message: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMsg(message);
    setVisible(true);
    timerRef.current = setTimeout(() => setVisible(false), 3000);
  };

  return (
    <div className="relative space-y-3">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => show("기록이 저장되었어요")}
          className="rounded-xl bg-[#24163F] px-4 py-2.5 text-[13px] font-semibold text-[#E9DDFF]"
        >
          저장 완료
        </button>
        <button
          onClick={() => show("기록이 삭제되었어요")}
          className="rounded-xl border border-white/12 bg-white/[0.04] px-4 py-2.5 text-[13px] font-medium text-white/70"
        >
          삭제 완료
        </button>
      </div>
      <div
        className={`flex items-center justify-between rounded-2xl bg-[#F4F1FF] px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <span className="text-[14px] font-medium text-[#171221]">{msg}</span>
        <button onClick={() => setVisible(false)} className="text-[13px] font-semibold text-[#8B5CF6]">
          확인
        </button>
      </div>
    </div>
  );
}

/* ─── Star Rating ─── */
function StarRatingPreview() {
  const games = ["아줄", "윙스팬", "카탄"];
  const [ratings, setRatings] = useState<Record<string, number>>({ 아줄: 5, 윙스팬: 4, 카탄: 3 });
  const [hovered, setHovered] = useState<{ game: string; star: number } | null>(null);

  return (
    <div className="space-y-4">
      {games.map((game) => (
        <div key={game} className="flex items-center justify-between">
          <span className="text-[14px] text-white/70">{game}</span>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => {
              const filled =
                hovered?.game === game
                  ? i < hovered.star
                  : i < ratings[game];
              return (
                <button
                  key={i}
                  onMouseEnter={() => setHovered({ game, star: i + 1 })}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setRatings((p) => ({ ...p, [game]: i + 1 }))}
                >
                  <Star
                    size={20}
                    className={`transition-colors ${
                      filled ? "fill-[#FFBF47] text-[#FFBF47]" : "fill-white/10 text-white/10"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Switches ─── */
function SwitchesPreview() {
  const [states, setStates] = useState({ "게임 알림": true, "기록 공유": true, "위치 정보": false });
  const toggle = (label: string) =>
    setStates((p) => ({ ...p, [label]: !p[label as keyof typeof p] }));
  return (
    <div className="space-y-4">
      {Object.entries(states).map(([label, on]) => (
        <div key={label} className="flex cursor-pointer items-center justify-between" onClick={() => toggle(label)}>
          <span className="text-[14px] text-white/75 select-none">{label}</span>
          <div
            className={`relative h-7 w-12 rounded-full transition-colors duration-200 ${
              on ? "bg-[#8B5CF6]" : "bg-white/[0.12]"
            }`}
          >
            <div
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                on ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Text Fields ─── */
function TextFieldsPreview() {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const hasError = submitted && value.trim() === "";

  return (
    <div className="space-y-3">
      <div>
        <p className="mb-1.5 text-[11px] uppercase tracking-[0.12em] text-white/30">기본</p>
        <div className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3">
          <Search size={15} className="shrink-0 text-white/30" />
          <span className="text-[14px] text-white/30">게임 이름 입력</span>
        </div>
      </div>
      <div>
        <p className="mb-1.5 text-[11px] uppercase tracking-[0.12em] text-white/30">포커스 / 입력</p>
        <div
          className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition-all ${
            hasError
              ? "border-[#FF5A6B] shadow-[0_0_0_3px_rgba(255,90,107,0.15)]"
              : focused
              ? "border-[#8B5CF6] bg-white/[0.04] shadow-[0_0_0_3px_rgba(139,92,246,0.15)]"
              : "border-white/12 bg-white/[0.04]"
          }`}
        >
          <Search size={15} className={`shrink-0 transition-colors ${hasError ? "text-[#FF5A6B]" : focused ? "text-[#A78BFA]" : "text-white/30"}`} />
          <input
            value={value}
            onChange={(e) => { setValue(e.target.value); setSubmitted(false); }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="게임 이름을 입력하세요"
            className="flex-1 bg-transparent text-[14px] text-white outline-none placeholder:text-white/30"
          />
          {value && (
            <button onClick={() => { setValue(""); setSubmitted(false); }}>
              <X size={14} className="text-white/30 hover:text-white/60" />
            </button>
          )}
        </div>
        {hasError && <p className="mt-1 text-[12px] text-[#FF5A6B]">게임 이름을 입력해주세요</p>}
      </div>
      <button
        onClick={() => setSubmitted(true)}
        className="rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] px-5 py-2.5 text-[13px] font-semibold text-white"
      >
        추가
      </button>
    </div>
  );
}

/* ─── Cards ─── */
function CardsPreview() {
  return (
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
  );
}

/* ─── Stat Cards ─── */
function StatCardsPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {[
        { Icon: Trophy, label: "Best Win Streak", value: "6", color: "from-[#ff9f1a] to-[#ffbf47]" },
        { Icon: Users, label: "Unique Players", value: "12", color: "from-[#2fa5ff] to-[#5666ff]" },
      ].map((item) => (
        <div key={item.label} className="rounded-[24px] border border-[#FFFFFF1F] bg-[#1B1B31] p-5">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.color}`}>
            <item.Icon size={16} className="text-white" />
          </div>
          <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-white/30">{item.label}</p>
          <p className="mt-1 text-[28px] font-bold text-white">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── Export ─── */
const previewMap: Record<string, React.ReactNode> = {
  "app-bars": <AppBarsPreview />,
  buttons: <ButtonsPreview />,
  "bottom-sheets": <BottomSheetsPreview />,
  checkboxes: <CheckboxesPreview />,
  chips: <ChipsPreview />,
  "radio-buttons": <RadioButtonsPreview />,
  dialogs: <DialogsPreview />,
  dividers: <DividersPreview />,
  lists: <ListsPreview />,
  menus: <MenusPreview />,
  "nav-tabs": <NavTabsPreview />,
  pickers: <PickersPreview />,
  "progress-bar": <ProgressBarPreview />,
  sliders: <SlidersPreview />,
  snackbars: <SnackbarsPreview />,
  "star-rating": <StarRatingPreview />,
  switches: <SwitchesPreview />,
  "text-fields": <TextFieldsPreview />,
  cards: <CardsPreview />,
  "stat-cards": <StatCardsPreview />,
};

export function ComponentPreview({ slug }: { slug: string }) {
  return <>{previewMap[slug] ?? null}</>;
}
