"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaEuroSign, FaPeopleGroup } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { useTranslations } from "next-intl";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export default function AboutUsSection() {
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
    <section
      id="aboutUsSection"
      className="h-[80vh] w-full flex flex-col gap-5 p-5"
    >
      <SectionTitle title="NUMBERS" subtitle="Success in Numbers" />
      {/* Left half with background image */}
      <div className="w-full flex gap-5 h-[65vh]">
        <div className="w-1/2 bg-[url(/images/worldMap_v2.png)] bg-cover bg-center rounded-3xl ml-20">
          <div className="lg:w-1/2 relative h-[600px] lg:h-auto">
            <Image
              src="/images/worldMap_v2.png"
              alt="World Map"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="grid grid-cols-2 gap-x-1 h-full pl-28">
            {infoCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col justify-center"
              >
                <div className="border-l-2 border-black pl-8 flex flex-col gap-2">
                  <div className="text-xl md:text-4xl font-bold text-gray-900">
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
        </div>
      </div>
    </section>
  );
}
