"use client";

import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ParticleBackground from "./ParticleBackground";

export default function Page() {
  const t = useTranslations("aboutUsSection");

  const companies = [
    {
      name: t("companies.Ekotechnik.title"),
      subtitle: t("companies.Ekotechnik.subtitle"),
      description: t("companies.Ekotechnik.description"),
      visitUrl: "https://www.ekotechnik.cz",
      visitText: "Visit Ekotechnik",
    },
    {
      name: t("companies.SolarKit.title"),
      subtitle: t("companies.SolarKit.subtitle"),
      description: t("companies.SolarKit.description"),
      visitUrl: "https://shop.solar-kit.eu/cs",
      visitText: "Visit Solar Kit",
    },
  ];

  return (
    <>
      <section
        id="aboutUsSection"
        className="w-full flex flex-col gap-5 px-5 pb-5 relative min-h-screen bg-transparent"
      >
        <div className="relative z-0">
          <SectionTitle title={t("title")} subtitle={t("subtitle")} />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="border-2 border-black text-gray-800 rounded-3xl p-6 lg:p-10 lg:px-14 w-full flex flex-col backdrop-blur-sm"
          >
            <h3 className="text-3xl lg:text-5xl font-medium tracking-tighter mb-5 xl:mb-8">
              {t("companies.USPV.title")}
            </h3>
            <p className="lg:text-lg font-light">
              {t("companies.USPV.description1")}
            </p>
            <p className="lg:text-lg font-light">
              {t("companies.USPV.description2")}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="w-full flex flex-col lg:flex-row gap-5 mt-5"
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: index % 2 === 0 ? -300 : 300 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  delay: index * 0.2,
                }}
                className={`flex-1 flex flex-col justify-between rounded-3xl p-6 lg:p-10 lg:px-14 backdrop-blur-sm ${
                  index === 0
                    ? "bg-gradient-to-r from-[#f0f0f0] to-[#d9d9d9]"
                    : "bg-gradient-to-r from-[#d9d9d9] to-[#bfbfbf]"
                }`}
              >
                <div>
                  <h3 className="text-lg font-light tracking-tight mb-2">
                    {company.subtitle}
                  </h3>
                  <h3 className="text-3xl lg:text-5xl font-medium tracking-tighter mb-5 xl:mb-8">
                    {company.name}
                  </h3>
                  <p className="lg:text-lg font-light leading-6 mb-6">
                    {company.description}
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link
                    href={company.visitUrl}
                    className="bg-black text-white hover:bg-white hover:text-black border-2 border-black px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ease-in-out text-center inline-block mt-auto transform -translate-x-1"
                  >
                    {company.visitText}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <ParticleBackground className="z-10" />
        </div>
      </section>
    </>
  );
}
