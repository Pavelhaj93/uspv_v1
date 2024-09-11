"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const AnimatedText = () => {
  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const t = useTranslations("hero");

  return (
    <div className="absolute mx-auto max-w-7xl inset-0 flex flex-col items-start justify-center text-white bottom-40">
      {/* Container for "USPV" and the animated text */}
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-9xl font-bold font-roxborough">{t("title")}</h1>
        <div className="text-6xl flex items-start gap-10">
          <div className="flex space-x-1">
            {t("subtitle")
              .split("")
              .map((char, index) => (
                <motion.span
                  className="font-light"
                  key={`photovoltaic-${index}`}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInFromBottom}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  {char}
                </motion.span>
              ))}
          </div>
          <div className="flex space-x-1">
            {t("group")
              .split("")
              .map((char, index) => (
                <motion.span
                  className="font-light"
                  key={`group-${index}`}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInFromBottom}
                  transition={{
                    delay: ("Photovoltaic".length + index) * 0.05,
                    duration: 0.5,
                  }}
                >
                  {char}
                </motion.span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
