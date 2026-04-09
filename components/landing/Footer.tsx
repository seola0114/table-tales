import LogoMark from "@/components/ui/LogoMark";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05]">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="mb-16">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <LogoMark
                width={26}
                height={26}
                className="opacity-80"
              />
              <span className="text-[15px] font-semibold tracking-tight text-white">
                Table<span className="text-[#A78BFA]">Tales</span>
              </span>
            </div>
            <p className="text-[13px] text-white/35 leading-relaxed mb-5 max-w-[200px]">
              보드게임 플레이를 기록하고, 통계로 돌아보고, 이야기로 남기는 앱
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]">
          <p className="text-[12px] text-white/20">
            © 2024 Table Tales. All rights reserved.
          </p>
          <p className="text-[12px] text-white/15">
            TableTales
          </p>
        </div>
      </div>
    </footer>
  );
}
