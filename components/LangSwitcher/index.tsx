"use client";

import { useRouter } from "next/navigation";
import CzechFlagSVG from "./CzechFlagSVG";
import EnglishFlagSVG from "./EnglishFlagSVG";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();

  const toggleLocale = (newLocale: string) => {
    // Update the locale in the URL
    router.push(`/${newLocale}`);
  };

  const locale = useLocale();

  const getEnglishAriaLabel = (locale: string) => {
    return locale === "en"
      ? "Current language: English"
      : "Přepnout na angličtinu";
  };

  const getCzechAriaLabel = (locale: string) => {
    return locale === "cs" ? "Aktuální jazyk: Čeština" : "Switch to Czech";
  };

  return (
    <div className="flex gap-4">
      {/* Link component automatically handles locale-aware routing */}
      <button
        className="text-2xl"
        aria-label={getEnglishAriaLabel(locale)}
        onClick={() => toggleLocale("en")}
      >
        <EnglishFlagSVG className="size-6" />
      </button>

      <button
        className="text-2xl"
        aria-label={getCzechAriaLabel(locale)}
        onClick={() => toggleLocale("cs")}
      >
        <CzechFlagSVG className="size-6" />
      </button>
    </div>
  );
}
