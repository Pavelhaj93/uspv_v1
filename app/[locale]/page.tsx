import HeroSection from "./_components/HeroSection";
import AboutUsSection from "./_components/AboutUsSection";
import ReferencesSection from "./_components/ReferncesSection";
import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

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
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <HeroSection />
      <AboutUsSection />
      <ReferencesSection />
    </main>
  );
}
