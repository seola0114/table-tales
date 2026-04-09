"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type PhoneScreenPreviewProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  frameClassName?: string;
  viewportClassName?: string;
  priority?: boolean;
};

const PHONE_ASPECT_RATIO = 19.5 / 9;

export default function PhoneScreenPreview({
  src,
  alt,
  width,
  height,
  className = "",
  frameClassName = "",
  viewportClassName = "",
  priority = false,
}: PhoneScreenPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 82%", "end 18%"],
  });

  const imageAspectRatio = height / width;
  const overflowPercent = Math.max(0, ((imageAspectRatio - PHONE_ASPECT_RATIO) / imageAspectRatio) * 100);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", `-${overflowPercent}%`]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div
        className={`relative rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,#171b2a_0%,#0d1019_100%)] p-3 shadow-[0_26px_80px_rgba(0,0,0,0.48)] ${frameClassName}`}
      >
        <div
          className={`relative aspect-[9/19.5] overflow-hidden rounded-[26px] border border-white/6 bg-[#090b12] ${viewportClassName}`}
        >
          <motion.div style={reduceMotion || overflowPercent === 0 ? undefined : { y: imageY }} className="w-full">
            <Image src={src} alt={alt} width={width} height={height} priority={priority} className="h-auto w-full max-w-none" />
          </motion.div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#090b12]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#090b12]/88 to-transparent" />
        </div>
      </div>
    </div>
  );
}
