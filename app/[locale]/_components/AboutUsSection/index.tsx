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

  const infoCards = [
    {
      title: "Total Assets",
      value: 85,
      icon: <FaEuroSign size={48} />,
      suffix: "M",
      duration: 2.5,
    },
    {
      title: "Employees",
      value: 60,
      icon: <FaPeopleGroup size={48} />,
      suffix: "+",
      duration: 2.5,
    },
    {
      title: "Turnover",
      value: 35,
      icon: <MdAttachMoney size={48} />,
      suffix: "M",
      duration: 2.5,
    },
    {
      title: "Years in Business",
      value: 18,
      icon: <CiClock1 size={48} />,
      suffix: "",
      duration: 4,
    },
  ];

  const t = useTranslations("aboutUsSection");

  return (
    <section
      id="aboutUsSection"
      className="min-h-screen w-screen px-32 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 py-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
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
              className="h-full"
            >
              <div className="h-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center h-full p-6">
                  {/* <div className="w-16 h-16 mb-6 text-blue-500 dark:text-blue-400"> */}
                  {card.icon}
                  {/* </div> */}
                  <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700 dark:text-gray-300">
                    {card.title}
                  </h2>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
                    <CountUp
                      end={card.value}
                      duration={card.duration}
                      separator=","
                      suffix={card.suffix}
                    />
                  </div>
                  {card.title === "Years in Business" && (
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
                  )}
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
