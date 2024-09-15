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
    <div className="absolute mx-auto w-3/5 flex flex-col items-start justify-end text-black bg-white z-0 bottom-0 h-1/3 mb-20 left-20 rounded-3xl pb-7 pl-7 pr-4 opacity-70">
      {/* Container for "USPV" and the animated text */}
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-6xl font-medium font-montserrat tracking-tighter">
          Go Green with the Force of Renewable Energy
        </h1>
        <div className="text-xl flex items-start gap-10">
          Leading the Solar Energy Revolution. 100% Eco-Conscious, 100%
          Innovative.
          {/* <div className="flex space-x-1">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
