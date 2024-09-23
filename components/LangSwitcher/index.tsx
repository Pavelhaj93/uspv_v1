"use client";

import { useRouter } from "next/navigation";
import CzechFlagSVG from "./CzechFlagSVG";
import EnglishFlagSVG from "./EnglishFlagSVG";

export default function LanguageSwitcher() {
  const router = useRouter();

  const toggleLocale = (newLocale: string) => {
    // Update the locale in the URL
    router.push(`/${newLocale}`);
  };

  return (
    <div className="flex gap-4">
      {/* Link component automatically handles locale-aware routing */}
      <button className="text-2xl" onClick={() => toggleLocale("en")}>
        <EnglishFlagSVG className="size-6" />
      </button>

      <button className="text-2xl" onClick={() => toggleLocale("cs")}>
        <CzechFlagSVG className="size-6" />
      </button>
    </div>
  );
}
