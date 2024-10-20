import type { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import AboutUsSection from "./_components/AboutUsSection";
import ContactSection from "./_components/ContactSection";
import HeroSection from "./_components/HeroSection";
import NumbersSection from "./_components/NumbersSection";
import PartnersSection from "./_components/PartnersSection";
import ReferencesSection from "./_components/ReferncesSection";

export async function generateMetadata({
	params: { locale },
}: {
	params: { locale: string };
}): Promise<Metadata> {
	const t = await getTranslations({ locale, namespace: "metadata" });

	return {
		title: t("title"),
		description: t("description"),
	};
}

export default function Home({
	params: { locale },
}: Readonly<{ params: { locale: string } }>) {
	unstable_setRequestLocale(locale);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
			<HeroSection />
			<NumbersSection />
			<AboutUsSection />
			<ReferencesSection />
			<PartnersSection />
			<ContactSection />
		</main>
	);
}
