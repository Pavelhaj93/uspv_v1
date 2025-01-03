"use client";

import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

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
			end: 120,
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
			end: 1150,
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
		<section id="aboutUsSection" className="w-full pb-5 px-5">
			<SectionTitle title={t("title")} subtitle={t("subtitle")} />
			<div className="mt-10 lg:mt-16 flex flex-col lg:flex-row lg:justify-between md:px-14">
				{/* Left side with the World Map */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						visible: { opacity: 1, x: 0 },
						hidden: { opacity: 0, x: "-100%" },
					}}
					transition={{ type: "spring", stiffness: 80, damping: 20 }}
					className="w-full lg:w-[48%] h-[300px] lg:h-[400px] relative rounded-3xl overflow-hidden mb-10 lg:mb-0"
				>
					<Image
						src="/images/map-3.png"
						alt="World Map"
						layout="fill"
						objectFit="cover"
						className="rounded-3xl"
						loading="lazy"
					/>
				</motion.div>

				{/* Right side with numbers */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						visible: { opacity: 1, x: 0 },
						hidden: { opacity: 0, x: "100%" },
					}}
					transition={{ type: "spring", stiffness: 80, damping: 20 }}
					className="w-full lg:w-[48%] flex justify-center"
				>
					<div className="grid grid-cols-2 gap-x-0 sm:gap-x-40 lg:gap-x-10 xl:gap-x-20 2xl:gap-x-40 gap-y-10 lg:gap-y-16 mx-auto">
						{infoCards.map((card, index) => (
							<motion.div
								key={card.title}
								variants={cardVariants}
								initial="hidden"
								animate={isVisible ? "visible" : "hidden"}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="flex flex-col justify-center items-start"
							>
								<div className="border-l-2 border-black pl-4 xl:pl-8 flex flex-col gap-2">
									<div className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium">
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
													}
													const gwValue = value / 1000;
													return `${gwValue.toFixed(2)} GWp`;
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
									<h2 className="text-md lg:text-lg font-light text-gray-700">
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
