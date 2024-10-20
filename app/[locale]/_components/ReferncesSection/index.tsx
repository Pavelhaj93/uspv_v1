"use client";

import SectionTitle from "@/components/SectionTitle";
import { useTranslations } from "next-intl";
import { useState } from "react";
import useScrollTrigger from "../../hooks/UseScrollTrigger";
import {
	IconCzechFlag,
	IconEnglishFlag,
	IconIndianFlag,
	IconKazakhstanFlag,
	IconRomaniaFlag,
	IconTurkeyFlag,
	IconUkraineFlag,
} from "../../icons";
import ParallaxSlide from "./ParallaxSlide";

const CompanySection = () => {
	const t = useTranslations("referencesSection");

	const cards = [
		{
			id: 1,
			image: "/images/cards/card_4.jpg",
			projects: [
				{
					country: t("projects.project1.country"),
					icon: <IconCzechFlag />,
					years: "2022-současnost",
					developed: "300 MWp+",
					note: t("projects.project1.note"),
				},
				{
					country: t("projects.project2.country"),
					icon: <IconCzechFlag />,
					years: "2006-10",
					developed: "7 MWp",
					note: t("projects.project2.note"),
				},
			],
			cardContent: {
				title: t("cardContent.card1.title"),
				text: t("cardContent.card1.text"),
			},
		},
		{
			id: 2,
			image: "/images/cards/card_1.jpg",
			projects: [
				{
					country: t("projects.project3.country"),
					icon: <IconRomaniaFlag />,
					years: "2013-17",
					developed: "36 MWp",
					note: t("projects.project3.note"),
				},
				{
					country: t("projects.project4.country"),
					icon: <IconUkraineFlag />,
					years: "2012-22",
					developed: "280 MWp",
					note: t("projects.project4.note"),
				},
			],
			cardContent: {
				title: t("cardContent.card2.title"),
				text: t("cardContent.card2.text"),
			},
		},
		{
			id: 3,
			image: "/images/cards/card_9.jpg",
			projects: [
				{
					country: t("projects.project5.country"),
					icon: <IconEnglishFlag />,
					years: "2014-16",
					developed: "90 MWp",
					note: t("projects.project5.note"),
				},
				{
					country: t("projects.project6.country"),
					icon: <IconKazakhstanFlag />,
					years: "",
					developed: "100 MWp",
					note: t("projects.project6.note"),
				},
			],
			cardContent: {
				title: `${Math.floor(new Date().getFullYear() - 2006)} ${t(
					"cardContent.card3.title",
				)}`,
				text: t("cardContent.card3.text"),
			},
		},
		{
			id: 4,
			image: "/images/cards/card_8.jpg",
			projects: [
				{
					country: t("projects.project7.country"),
					icon: <IconTurkeyFlag />,
					years: "",
					developed: "20 MWp",
					note: t("projects.project7.note"),
				},
				{
					country: t("projects.project8.country"),
					icon: <IconIndianFlag />,
					years: "",
					developed: t("projects.project8.developed"),
					note: t("projects.project8.note"),
				},
			],
			cardContent: {
				title: t("cardContent.card4.title"),
				text: t("cardContent.card4.text"),
			},
		},
	];

	const [activeIndex, setActiveIndex] = useState<number>(0);
	useScrollTrigger(setActiveIndex);

	return (
		<section id="referencesSection" className="w-screen h-full p-5">
			<SectionTitle title={t("title")} subtitle={t("subtitle")} />
			<div className="mb-10">
				{cards.map((card, index) => (
					<ParallaxSlide
						key={card.id}
						image={card.image}
						firstProject={card.projects[0]}
						secondProject={card.projects[1]}
						cardContent={card.cardContent}
						isLeftAligned={index % 2 === 0}
						activeIndex={activeIndex}
						index={index}
					/>
				))}
			</div>
		</section>
	);
};

export default CompanySection;
