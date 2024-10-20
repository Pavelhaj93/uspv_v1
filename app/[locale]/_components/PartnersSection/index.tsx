"use client";

import SectionTitle from "@/components/SectionTitle";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const partners = [
	{ id: 1, src: "/images/partners/erste_group.svg" },
	{ id: 2, src: "/images/partners/societe_generale.svg" },
	{ id: 3, src: "/images/partners/UniCredit.svg" },
	{ id: 4, src: "/images/partners/fichtner.svg" },
	{ id: 5, src: "/images/partners/Raiffeisen_Bank.svg" },
	{ id: 6, src: "/images/partners/prk-logo-white.svg" },
	{ id: 7, src: "/images/partners/wolf_theiss.svg" },
	{ id: 8, src: "/images/partners/cms.svg" },
	{ id: 9, src: "/images/partners/white_case.svg" },
	{ id: 10, src: "/images/partners/european-bank-for-rad-1.svg" },
	{ id: 11, src: "/images/partners/mott-macdonald.svg" },
	{ id: 12, src: "/images/partners/generali-logo.svg" },
];

export default function PartnersCarousel() {
	const t = useTranslations("partnersSection");
	return (
		<section id="partnersSection" className="bg-white w-full p-5">
			<SectionTitle title={t("title")} subtitle={t("subtitle")} />
			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				plugins={[
					AutoScroll({
						speed: 0.9,
						stopOnInteraction: false,
						stopOnMouseEnter: true,
					}),
				]}
				className="w-full lg:mb-5 mt-5"
			>
				<CarouselContent>
					{partners.map((partner) => (
						<CarouselItem
							key={partner.id}
							className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6 2xl:basis-1/7"
						>
							<div className="p-1">
								<div className="flex items-center w-[140px] h-[100px]">
									<Image
										src={partner.src}
										alt={`Partner ${partner.id}`}
										height={100}
										width={140}
										className="object-contain"
									/>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
}
