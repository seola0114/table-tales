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
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

    const syncTheme = () => {
      const storedTheme = localStorage.getItem(STORAGE_KEY);
      const nextTheme =
        storedTheme === "light" || storedTheme === "dark"
          ? storedTheme
          : mediaQuery.matches
            ? "light"
            : "dark";

      applyTheme(nextTheme);
      setTheme(nextTheme);
    };

    syncTheme();

    const handleSystemThemeChange = () => {
      const storedTheme = localStorage.getItem(STORAGE_KEY);
      if (storedTheme !== "light" && storedTheme !== "dark") {
        syncTheme();
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    setMounted(true);

    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
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
      className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/35 bg-white/[0.05] px-3 py-2 text-[12px] font-medium text-white/75 backdrop-blur-md transition-all duration-200 hover:border-[#A78BFA]/80 hover:bg-[#8B5CF6]/18 hover:text-white"
      aria-label={mounted ? `${nextTheme === "light" ? "라이트" : "다크"} 모드로 전환` : "테마 전환"}
      aria-pressed={mounted && theme === "light"}
    >
      {mounted && theme === "light" ? <Sun size={14} /> : <Moon size={14} />}
      <span className="hidden sm:inline">{mounted && theme === "light" ? "Light" : "Dark"}</span>
    </button>
  );
}
