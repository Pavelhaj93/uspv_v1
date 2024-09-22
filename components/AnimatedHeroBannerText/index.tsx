"use client";

import { useTranslations } from "next-intl";

const AnimatedText = () => {
  const t = useTranslations("hero");

  return (
    <div className="absolute mx-auto w-[calc(100vw_-_40px)] lg:w-3/5 flex flex-col items-start justify-end text-black bg-white z-0 bottom-16 lg:left-20 left-5 rounded-3xl py-5 px-3 lg:pl-7 lg:pr-4 opacity-70">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-medium md:font-light">
          {t("title")}
        </h1>
        <div className="text-lg md:text-xl font-light tracking-wider whitespace-normal">
          {t("subtitle")}
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
