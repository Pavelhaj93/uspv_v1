"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const AnimatedText = () => {
  const t = useTranslations("hero");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.6 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="absolute mx-auto w-[calc(100vw_-_40px)] lg:w-auto flex flex-col items-start justify-end text-black bg-white/70 z-0 bottom-16 lg:bottom-20 lg:left-20 left-5 rounded-3xl py-5 lg:py-7 lg:pt-6 px-5 lg:px-14"
    >
      {/* Text Container */}
      <motion.div
        className="flex flex-col items-start gap-4"
        variants={containerVariants}
      >
        {/* Title Animation */}
        <motion.h1
          variants={titleVariants}
          className="text-3xl md:text-3xl lg:text-4xl xl:text-6xl tracking-tighter font-medium"
        >
          {t("title")}
        </motion.h1>
        {/* Subtitle Animation */}
        <motion.div
          variants={subtitleVariants}
          className="text-lg md:text-xl font-light tracking-wider whitespace-normal"
        >
          {t("subtitle")}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedText;
