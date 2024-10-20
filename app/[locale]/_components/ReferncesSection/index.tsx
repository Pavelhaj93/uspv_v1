"use client";

import SectionTitle from "@/components/SectionTitle";
import { useTranslations } from "next-intl";
import { useState } from "react";
import useScrollTrigger from "../../hooks/UseScrollTrigger";
import ProjectCard from "./ProjectCardComponent";
import {
  IconCzechFlag,
  IconEnglishFlag,
  IconIndianFlag,
  IconKazakhstanFlag,
  IconRomaniaFlag,
  IconTurkeyFlag,
  IconUkraineFlag,
} from "../../icons";

const CompanySection = () => {
  const t = useTranslations("referencesSection");

  const projects = [
    {
      country: t("projects.project1.country"),
      icon: <IconCzechFlag />,
      years: "2022-současnost",
      developed: "300 MWp+",
      image: "/images/cards/card_4.jpg",
      note: t("projects.project1.note"),
    },
    {
      country: t("projects.project2.country"),
      icon: <IconCzechFlag />,
      years: "2006-10",
      developed: "7 MWp",
      image: "",
      note: t("projects.project2.note"),
    },
    {
      country: t("projects.project3.country"),
      icon: <IconRomaniaFlag />,
      years: "2013-17",
      developed: "36 MWp",
      image: "/images/cards/card_1.jpg",
      note: t("projects.project3.note"),
    },
    {
      country: t("projects.project4.country"),
      icon: <IconUkraineFlag />,
      years: "2012-22",
      developed: "280 MWp",
      image: "",
      note: t("projects.project4.note"),
    },
    {
      country: t("projects.project5.country"),
      icon: <IconEnglishFlag />,
      years: "2014-16",
      developed: "90 MWp",
      image: "/images/cards/card_9.jpg",
      note: t("projects.project5.note"),
    },
    {
      country: t("projects.project6.country"),
      icon: <IconKazakhstanFlag />,
      years: "",
      developed: "100 MWp",
      image: "",
      note: t("projects.project6.note"),
    },
    {
      country: t("projects.project5.country"),
      icon: <IconTurkeyFlag />,
      years: "",
      developed: "20 MWp",
      image: "/images/cards/card_9.jpg",
      note: t("projects.project5.note"),
    },
    {
      country: t("projects.project8.country"),
      icon: <IconIndianFlag />,
      years: "",
      developed: t("projects.project8.developed"),
      image: "",
      note: t("projects.project8.note"),
    },
  ];

  const cardContent = [
    {
      title: t("cardContent.card1.title"),
      text: t("cardContent.card1.text"),
    },
    {
      title: t("cardContent.card2.title"),
      text: t("cardContent.card2.text"),
    },
    {
      title: `${Math.floor(new Date().getFullYear() - 2006)} ${t(
        "cardContent.card3.title"
      )}`,
      text: t("cardContent.card3.text"),
    },
    {
      title: t("cardContent.card4.title"),
      text: t("cardContent.card4.text"),
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  useScrollTrigger(setActiveIndex);

  return (
    <section id="referencesSection" className="w-screen h-full p-5">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      <div className="mb-10">
        {projects.reduce((acc: JSX.Element[], project, index) => {
          if (index % 2 === 0) {
            const nextProject = projects[index + 1];
            const cardContentIndex = Math.floor(index / 2) % cardContent.length;
            acc.push(
              <ProjectCard
                key={index}
                project={project}
                nextProject={nextProject}
                cardContent={cardContent[cardContentIndex]}
                isLeftAligned={index % 4 === 0}
                activeIndex={activeIndex}
                index={index}
              />
            );
          }
          return acc;
        }, [])}
      </div>
    </section>
  );
};

export default CompanySection;
