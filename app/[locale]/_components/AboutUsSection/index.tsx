"use client";

import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function AboutUsSection() {
  const t = useTranslations("aboutUsSection");
  return (
    <section
      id="aboutUsSection"
      className="w-full flex flex-col gap-5 px-5 pb-5"
    >
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
        {/* Combined Card for Ekotechnik and Solar Kit */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { x: 0 },
            hidden: { x: "-100%" },
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="bg-primary rounded-3xl px-5 py-8 lg:px-10 lg:py-10 w-full lg:w-2/5 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-lg lg:text-xl font-normal ml-1">
              WE ARE PART OF
            </h3>
            <h3 className="text-4xl lg:text-6xl font-medium">
              Ekotechnik Czech s.r.o.
            </h3>
            <p className="mt-4 text-sm lg:text-base leading-6">
              Our company is part of Ekotechnik Czech, operating since 1990.
              We’ve worked on <strong>three continents</strong>, navigating
              various climate, technical, and legislative needs. We specialize
              in photovoltaic systems and local energy networks, with a focus on
              maximizing on-site energy use. Every project we take on guarantees
              economic returns, and we offer the flexibility to repurchase your
              share if plans change.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <h3 className="text-4xl lg:text-6xl font-medium">
              Solar Kit s.r.o.
            </h3>
            <p className="text-sm lg:text-base">
              Leading provider of solar solutions. Focused on sustainable energy
              innovations and efficient photovoltaic systems.
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="https://www.ekotechnik.cz"
                className="bg-white-black px-4 py-2 lg:px-6 lg:py-3 rounded-full text-base lg:text-lg font-semibold bg-black hover:bg-white text-white hover:text-black hover:outline hover:outline-black transition-colors duration-300 ease-in-out"
              >
                Visit Ekotechnik
              </Link>
              {/* TODO: finish the link */}
              <Link
                href="#"
                className="bg-white-black px-4 py-2 lg:px-6 lg:py-3 rounded-full text-base lg:text-lg font-semibold bg-black hover:bg-white text-white hover:text-black hover:outline hover:outline-black transition-colors duration-300 ease-in-out"
              >
                Visit Solar Kit
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Placeholder with the same height as the left card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { x: 0 },
            hidden: { x: "100%" },
          }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="rounded-3xl w-full lg:w-3/5 border-2 border-black flex items-center justify-center"
        >
          <h2 className="text-3xl">Placeholder</h2>
        </motion.div>
      </div>
    </section>
  );
}
