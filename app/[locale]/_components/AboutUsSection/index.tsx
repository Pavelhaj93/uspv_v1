"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaEuroSign } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { useTranslations } from "next-intl";

const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const t = useTranslations("aboutUsSection");

  const infoCards = [
    {
      title: t("cards.card1.title"),
      value: Math.floor(new Date().getFullYear() - 2006),
      icon: <CiClock1 size={48} />,
      suffix: t("cards.card1.suffix"),
      duration: 2.5,
    },
    {
      title: t("cards.card2.title"),
      value: 60,
      icon: <FaPeopleGroup size={48} />,
      suffix: t("cards.card2.suffix"),
      duration: 3.5,
    },
    {
      title: t("cards.card3.title"),
      value: 85,
      icon: <FaEuroSign size={48} />,
      suffix: t("cards.card3.suffix"),
      duration: 5,
    },
    {
      title: t("cards.card4.title"),
      value: 900,
      icon: <MdAttachMoney size={48} />,
      suffix: t("cards.card4.suffix"),
      duration: 8,
    },
  ];

  return (
    <section
      id="aboutUsSection"
      className="min-h-screen w-screen px-32 flex flex-col justify-center overflow-hidden bg-[url(/images/worldMap_v1.png)] bg-cover bg-center z-0"
    >
      {/* Overlay with blur effect */}
      {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div> */}
      {/* Overlay with blur effect */}
      <div className="container mx-auto px-4 py-12 relative z-10 bottom-40">
        <h1 className="text-4xl md:text-5xl font-bold text-left mb-12 text-gray-800 dark:text-gray-100">
          {t("title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-6 px-10 h-40 border-l-4 border-black"
            >
              <div className="h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div className="flex flex-col items-start justify-center h-full p-6 gap-2">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 text-left">
                    <CountUp
                      end={card.value}
                      duration={card.duration}
                      separator=","
                      suffix={card.suffix}
                    />
                  </div>
                  {/* <div className="w-16 h-16 mb-6 text-blue-500 dark:text-blue-400"> */}
                  {/* {card.icon} */}
                  {/* </div> */}
                  <h2 className="text-2xl font-semibold mb-4 text-left text-gray-700 dark:text-gray-300">
                    {card.title}
                  </h2>
                  {/* {card.title === "Years in Business" && (
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                      className="mt-4 text-lg text-blue-600 dark:text-blue-400"
                    ></motion.div>
                  )} */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
