"use client";

import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Company {
  name: string;
  subtitle: string;
  description: string;
  visitUrl: string;
  visitText: string;
}

const companies: Company[] = [
  {
    name: "Ekotechnik Czech s.r.o.",
    subtitle: "WE ARE PART OF",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem saepe, labore illo obcaecati eligendi eum magni cumque aliquam non recusandae. Ratione quam perferendis totam facere est! Minus esse unde consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci id ipsum iste tempore doloribus aliquid maiores beatae quibusdam animi! Non alias consequatur officia totam delectus. Corporis laudantium ducimus a. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    visitUrl: "https://www.ekotechnik.cz",
    visitText: "Visit Ekotechnik",
  },
  {
    name: "Solar Kit EU",
    subtitle: "AND",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem saepe, labore illo obcaecati eligendi eum magni cumque aliquam non recusandae. Ratione quam perferendis totam facere est! Minus esse unde consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci id ipsum iste tempore doloribus aliquid maiores beatae quibusdam animi! Non alias consequatur officia totam delectus. Corporis laudantium ducimus a. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    visitUrl: "https://shop.solar-kit.eu/cs",
    visitText: "Visit Solar Kit",
  },
];

export default function Component() {
  const t = useTranslations("aboutUsSection");

  return (
    <section
      id="aboutUsSection"
      className="w-full flex flex-col gap-5 px-5 pb-5"
    >
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
        className="bg-primary rounded-3xl p-6 lg:p-10 lg:px-14 w-full flex flex-col lg:flex-row gap-20"
      >
        {companies.map((company, index) => (
          <div
            key={company.name}
            className="flex-1 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-light tracking-tight mb-2">
                {company.subtitle}
              </h3>
              <h3 className="text-3xl lg:text-5xl font-medium tracking-tighter mb-10">
                {company.name}
              </h3>
              <p className="text-sm lg:text-base leading-6 mb-6">
                {company.description}
              </p>
            </div>
            <div className="flex justify-end">
              <Link
                href={company.visitUrl}
                className="bg-black text-white hover:bg-white hover:text-black border-2 border-black px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ease-in-out text-center inline-block mt-auto"
              >
                {company.visitText}
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
