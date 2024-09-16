"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/SectionTitle";

export default function NumbersSection() {
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
      suffix: t("cards.card1.suffix"),
      duration: 2.5,
    },
    {
      title: t("cards.card2.title"),
      value: 60,
      suffix: t("cards.card2.suffix"),
      duration: 3.5,
    },
    {
      title: t("cards.card3.title"),
      value: 85,
      suffix: t("cards.card3.suffix"),
      duration: 5,
    },
    {
      title: t("cards.card4.title"),
      value: 1232,
      suffix: "MWp",
      duration: 5,
    },
    {
      title: t("cards.card5.title"),
      value: 35,
      suffix: t("cards.card5.suffix"),
      duration: 4,
    },
    {
      title: t("cards.card6.title"),
      value: 100,
      suffix: t("cards.card6.suffix"),
      duration: 6,
    },
  ];

  return (
    <section className="w-screen p-5 xl:mb-24 mb-5 md:mb-10">
      <SectionTitle title="NUMBERS" subtitle="Our achievements" />
      <div className="grid xl:grid-cols-3 md:grid-cols-2 w-full h-full gap-14 lg:pl-20 lg:pr-20">
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
              <div className="text-6xl font-medium">
                {index === 3 ? (
                  <CountUp
                    start={400}
                    end={card.value}
                    duration={card.duration}
                    separator=","
                    decimals={1}
                    decimal="."
                    formattingFn={(value) => {
                      if (value < 1000) {
                        return `${Math.floor(value)} MWp`;
                      } else {
                        const gwValue = value / 1000;
                        return `${gwValue.toFixed(2)} GWp`;
                      }
                    }}
                  />
                ) : (
                  <CountUp
                    end={card.value}
                    duration={card.duration}
                    separator=","
                    suffix={card.suffix}
                  />
                )}
              </div>
              <div className="flex items-center mb-4">
                <h2 className="xl:text-lg text-2xl font-light text-gray-700">
                  {card.title}
                </h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
