"use client";

import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();

  const toggleLocale = (newLocale: string) => {
    // Update the locale in the URL
    router.push(`/${newLocale}`);
  };

  return (
    <div className="flex gap-2">
      {/* Link component automatically handles locale-aware routing */}
      <button className="text-4xl" onClick={() => toggleLocale("en")}>
        🇬🇧
      </button>

      <button className="text-4xl" onClick={() => toggleLocale("cs")}>
        🇨🇿
      </button>
    </div>
  );
}
