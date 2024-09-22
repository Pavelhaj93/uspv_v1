"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const AnimatedText = () => {
  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const t = useTranslations("hero");

  return (
    <div className="absolute mx-auto w-[calc(100vw_-_40px)] lg:w-3/5 flex flex-col items-start justify-end text-black bg-white z-0 xl:bottom-16 -bottom-5 lg:left-20 left-5 rounded-3xl py-7 px-3 lg:pl-7 lg:pr-4 opacity-70">
      {/* Container for "USPV" and the animated text */}
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-normal">
          {t("title")}
        </h1>
        <div className="text-xl flex items-start gap-1 font-light tracking-wider">
          {t("subtitle")
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                variants={fadeInFromBottom}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
