"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

const STORAGE_KEY = "table-tales-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const rootTheme = document.documentElement.dataset.theme;
    if (rootTheme === "light" || rootTheme === "dark") {
      setTheme(rootTheme);
    }
    setMounted(true);
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => {
        applyTheme(nextTheme);
        localStorage.setItem(STORAGE_KEY, nextTheme);
        setTheme(nextTheme);
      }}
      className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-[12px] font-medium text-white/70 backdrop-blur-md transition-all duration-200 hover:border-white/[0.16] hover:bg-white/[0.08] hover:text-white"
      aria-label={mounted ? `${nextTheme === "light" ? "라이트" : "다크"} 모드로 전환` : "테마 전환"}
      aria-pressed={mounted && theme === "light"}
    >
      {mounted && theme === "light" ? <Sun size={14} /> : <Moon size={14} />}
      <span className="hidden sm:inline">{mounted && theme === "light" ? "Light" : "Dark"}</span>
    </button>
  );
}
