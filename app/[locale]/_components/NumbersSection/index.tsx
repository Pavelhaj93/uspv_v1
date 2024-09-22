"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/SectionTitle";

export default function AboutUsSectionWithNumbers() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const t = useTranslations("numbersSection");

  const infoCards = [
    {
      title: t("cards.card1.title"),
      start: 4,
      end: Math.floor(new Date().getFullYear() - 2006),
      suffix: t("cards.card1.suffix"),
      duration: 2.5,
    },
    {
      title: t("cards.card2.title"),
      start: 20,
      end: 60,
      suffix: t("cards.card2.suffix"),
      duration: 3.5,
    },
    {
      title: t("cards.card3.title"),
      start: 45,
      end: 85,
      suffix: t("cards.card3.suffix"),
      duration: 5,
    },
    {
      title: t("cards.card4.title"),
      start: 411,
      end: 1232,
      suffix: "MWp",
      duration: 5,
    },
    {
      title: t("cards.card5.title"),
      start: 12,
      end: 35,
      suffix: t("cards.card5.suffix"),
      duration: 4,
    },
    {
      title: t("cards.card6.title"),
      start: 28,
      end: 100,
      suffix: t("cards.card6.suffix"),
      duration: 6,
    },
  ];

  return (
    <section
      id="aboutUsSection"
      className="w-full h-screen lg:h-full flex flex-col gap-5 px-5 pb-5"
    >
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      <div className="flex h-full flex-col lg:flex-row lg:justify-between gap-5">
        {/* Left side with the World Map, taking 60-70% of the width */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { x: 0 },
            hidden: { x: "-100%" },
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="bg-[url(/images/worldMap_v3.png)] bg-cover bg-center rounded-3xl w-full lg:w-[55%]"
        />

        {/* Right side with numbers, taking the remaining width */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { x: 0 },
            hidden: { x: "100%" },
          }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="rounded-3xl px-5 py-8 lg:px-10 lg:py-10 w-full lg:w-[45%] flex flex-col justify-center"
        >
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-x-10 gap-y-8 xl:gap-y-16">
            {infoCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col justify-center items-left"
              >
                <div className="border-l-2 border-black pl-8 flex flex-col gap-4">
                  <div className="text-4xl lg:text-5xl font-normal tracking-wide">
                    {index === 3 ? (
                      <CountUp
                        start={card.start}
                        end={card.end}
                        duration={card.duration}
                        enableScrollSpy
                        scrollSpyOnce
                        scrollSpyDelay={500}
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
                        start={card.start}
                        end={card.end}
                        duration={card.duration}
                        separator=","
                        suffix={card.suffix}
                        enableScrollSpy
                        scrollSpyOnce
                        scrollSpyDelay={500}
                      />
                    )}
                  </div>
                  <h2 className="text-lg lg:text-xl font-light text-gray-700">
                    {card.title}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
