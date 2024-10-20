"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { IconCzechFlag, IconEnglishFlag } from "@/app/[locale]/icons";

export default function LanguageSwitcher({ mobile }: { mobile?: boolean }) {
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
    <div className="flex md:gap-4 gap-6">
      {/* Link component automatically handles locale-aware routing */}
      <button
        aria-label={getEnglishAriaLabel(locale)}
        onClick={() => toggleLocale("en")}
      >
        <IconEnglishFlag size={mobile ? "lg" : "sm"} />
      </button>

      <button
        aria-label={getCzechAriaLabel(locale)}
        onClick={() => toggleLocale("cs")}
      >
        <IconCzechFlag size={mobile ? "lg" : "sm"} />
      </button>
    </div>
  );
}
