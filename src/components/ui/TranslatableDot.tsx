import { motion } from "framer-motion";

export const TranslatableDot = ({
  translatable,
}: {
  translatable: boolean;
}) => (
  <motion.span
    className="inline-block w-4 h-4 rounded-full border border-white shadow"
    title={translatable ? "번역 지원" : "번역 미지원"}
    animate={{
      backgroundColor: translatable
        ? ["#22c55e", "#bbf7d0", "#22c55e"]
        : ["#f472b6", "#fecdd3", "#f472b6"],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse", // 타입 안전하게 mirror 대신 reverse
    }}
  />
);
