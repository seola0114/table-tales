"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "준호",
    handle: "@junho_plays",
    avatar: "J",
    color: "from-blue-500 to-cyan-500",
    text: "모임 끝나고 결과 사진만 찍어두다 기억을 못 했는데, 이제는 그 자리에서 바로 입력하게 됐어요. 기록이 쌓이니까 몇 달 전 게임도 돌아보게 되더라고요.",
    game: "Arclight Traders 팬",
    rating: 5,
  },
  {
    name: "수아",
    handle: "@sua.board",
    avatar: "S",
    color: "from-emerald-500 to-emerald-600",
    text: "승률 통계 보고 나서 '아, 나 이 게임 생각보다 많이 졌구나' 알게 됐어요. 막연하게 잘 한다고 생각했는데 데이터가 현실을 알려주는 느낌.",
    game: "전략 게임 유저",
    rating: 5,
  },
  {
    name: "다인",
    handle: "@dain.table",
    avatar: "D",
    color: "from-emerald-500 to-teal-500",
    text: "연말에 '우리 올해 뭐 많이 했지?' 하고 기록 돌아봤는데 진짜 뿌듯했어요. 총 47판, 그중에 16판이 Moon Harbor였다는 게 웃기기도 하고.",
    game: "정기 모임 운영 중",
    rating: 5,
  },
  {
    name: "재영",
    handle: "@jaeyoung.bg",
    avatar: "Jy",
    color: "from-amber-500 to-orange-500",
    text: "친구들 전적 비교하는 게 재밌어서 모임 분위기가 더 살아났어요. '지난번에 네가 이겼잖아' 이런 말이 진짜 데이터로 나오니까.",
    game: "4인 정기 모임",
    rating: 5,
  },
  {
    name: "민정",
    handle: "@minj.games",
    avatar: "M",
    color: "from-pink-500 to-rose-600",
    text: "입력이 진짜 빠른 게 핵심이에요. 게임 끝나고 정리하는 분위기에서 30초 안에 다 끝나니까 귀찮다는 생각이 없어졌어요.",
    game: "보드게임 카페 단골",
    rating: 5,
  },
  {
    name: "현우",
    handle: "@hyunwoo_roll",
    avatar: "H",
    color: "from-teal-500 to-blue-600",
    text: "혼자 솔로 게임도 기록할 수 있어서 좋아요. 클리어 여부, 점수, 난이도 메모까지. 같은 게임 여러 번 돌릴 때 비교하기 딱이에요.",
    game: "솔로 플레이어",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px blur-sm bg-emerald-500/15" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display-italic text-[14px] text-emerald-400 tracking-wide mb-4"
          >
            From the community
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[36px] sm:text-[44px] font-bold tracking-[-0.03em] text-white mb-4"
          >
            테이블에서 이미
            <br />
            <span className="gradient-text">시작된 이야기들</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[15px] text-white/35"
          >
            베타 유저들이 직접 남긴 말들입니다.
          </motion.p>
        </div>

        {/* Reviews grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {reviews.map((review, i) => (
            <motion.div
              key={review.handle}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: (i % 3) * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="break-inside-avoid glass-card p-5 hover:border-white/[0.12] transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-[11px] font-bold text-white shrink-0`}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white leading-tight">{review.name}</p>
                    <p className="text-[11px] text-white/30">{review.handle}</p>
                  </div>
                </div>
                <Stars count={review.rating} />
              </div>

              <p className="text-[13px] text-white/60 leading-relaxed mb-4">
                "{review.text}"
              </p>

              <div className="pt-3 border-t border-white/[0.05]">
                <span className="text-[11px] text-white/25 font-medium">{review.game}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
