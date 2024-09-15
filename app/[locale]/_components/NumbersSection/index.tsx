"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { FaEuroSign, FaPeopleGroup } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/SectionTitle";

const NumbersSection = () => {
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
      icon: <CiClock1 size={32} />,
      suffix: t("cards.card1.suffix"),
      duration: 2.5,
    },
    {
      title: t("cards.card2.title"),
      value: 60,
      icon: <FaPeopleGroup size={32} />,
      suffix: t("cards.card2.suffix"),
      duration: 3.5,
    },
    {
      title: t("cards.card3.title"),
      value: 85,
      icon: <FaEuroSign size={32} />,
      suffix: t("cards.card3.suffix"),
      duration: 5,
    },
    {
      title: t("cards.card4.title"),
      value: 1232,
      icon: <MdAttachMoney size={32} />,
      suffix: t("cards.card4.suffix"),
      duration: 8,
    },
    {
      title: t("cards.card5.title"),
      value: 35,
      icon: <FaPeopleGroup size={32} />,
      suffix: t("cards.card5.suffix"),
      duration: 4,
    },
    {
      title: t("cards.card6.title"),
      value: 100,
      icon: <FaEuroSign size={32} />,
      suffix: t("cards.card6.suffix"),
      duration: 6,
    },
  ];
  return (
    <section className="w-screen p-5 mb-24">
      <SectionTitle title="NUMBERS" subtitle="Our achievements" />
      <div className="grid grid-cols-3 w-full h-full gap-14 pl-20">
        {infoCards.map((card, index) => (
          <motion.div
            key={card.title}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col justify-center"
          >
            <div className="border-l-2 border-black pl-8 flex flex-col gap-6">
              <div className="text-xl md:text-6xl font-medium">
                <CountUp
                  end={card.value}
                  duration={card.duration}
                  separator=","
                  suffix={card.suffix}
                />
              </div>
              <div className="flex items-center mb-4">
                <h2 className="text-lg font-light text-gray-700">
                  {card.title}
                </h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NumbersSection;
