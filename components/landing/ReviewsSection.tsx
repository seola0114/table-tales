"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "준호",
    avatar: "J",
    color: "from-[#3aa1ff] to-[#6c7dff]",
    text: "게임 끝나고 사진만 남겨두면 나중엔 잘 기억이 안 났는데, 이제는 그 자리에서 바로 기록하게 됐어요. 몇 달 전 플레이도 다시 꺼내보게 되는 게 좋았습니다.",
    game: "정기 모임 유저",
    rating: 5,
  },
  {
    name: "수아",
    avatar: "S",
    color: "from-[#9b6dff] to-[#7d59ff]",
    text: "막연하게 기억하던 플레이가 기록으로 남으니까 다르게 보이더라고요. 통계를 보면 내가 자주 하는 게임이나 결과가 더 선명하게 보여요.",
    game: "전략 게임 유저",
    rating: 5,
  },
  {
    name: "다인",
    avatar: "D",
    color: "from-[#18c8a6] to-[#4a74ff]",
    text: "연말에 한 해 동안 어떤 게임을 많이 했는지 돌아보는 재미가 있어요. 모임의 흐름이 기록으로 남는다는 게 생각보다 꽤 뿌듯했습니다.",
    game: "정기 모임 운영 중",
    rating: 5,
  },
  {
    name: "재영",
    avatar: "Jy",
    color: "from-[#ff9f1a] to-[#ffbf47]",
    text: "친구들이랑 했던 플레이를 다시 비교해보는 재미가 있어요. 같이 한 기록이 남으니까 모임 자체가 더 기억에 오래 남아요.",
    game: "4인 정기 모임",
    rating: 5,
  },
  {
    name: "민정",
    avatar: "M",
    color: "from-[#ff2f7d] to-[#ff5fa8]",
    text: "입력이 빠른 게 정말 좋았어요. 게임 끝나고 바로 정리해도 부담이 없어서 기록이 훨씬 잘 남습니다.",
    game: "보드게임 카페 단골",
    rating: 5,
  },
  {
    name: "현우",
    avatar: "H",
    color: "from-[#5666ff] to-[#8b5cf6]",
    text: "혼자 하는 솔로 플레이도 기록할 수 있어서 좋아요. 같은 게임을 여러 번 했을 때 비교해서 보는 재미가 있습니다.",
    game: "솔로 플레이어",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="preserve-theme-color flex gap-0.5">
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

      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display-italic text-[14px] text-[#A78BFA] tracking-wide mb-4"
          >
            Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[36px] sm:text-[44px] font-bold leading-[1.2] tracking-[-0.03em] text-white mb-4"
          >
            테이블 위의 순간들이
            <br />
            <span className="gradient-text">기록으로 이어지고 있습니다</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[15px] text-white/35"
          >
            베타 유저들이 TableTales를 사용하며 남긴 이야기입니다.
          </motion.p>
        </div>

        {/* Reviews grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
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
