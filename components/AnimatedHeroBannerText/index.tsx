"use client";

import { useTranslations } from "next-intl";

const AnimatedText = () => {
  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const t = useTranslations("hero");

  return (
    <div className="absolute mx-auto w-[calc(100vw_-_40px)] max-h-[280px] md:h-1/6  lg:w-3/5 flex flex-col items-start justify-end text-black bg-white z-0 xl:bottom-0 -bottom-5 lg:h-1/3 h-1/4 mb-20 lg:left-20 left-5 rounded-3xl pb-7 px-3 lg:pl-7 lg:pr-4 opacity-70">
      {/* Container for "USPV" and the animated text */}
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter">
          Go Green with the Force of Renewable Energy
        </h1>
        <div className="text-xl flex items-start gap-10">
          Leading the Solar Energy Revolution. 100% Eco-Conscious, 100%
          Innovative.
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
