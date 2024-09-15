"use client";

import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function AboutUsSection() {
  return (
    <section
      id="aboutUsSection"
      className="w-full h-full flex flex-col gap-5 px-5 pb-5"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
        <div className="bg-[#ecc69b] rounded-3xl px-5 py-8 lg:px-10 lg:py-16 w-full lg:w-3/5 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg lg:text-xl font-normal font-montserrat ml-1">
              WE ARE PART OF
            </h3>
            <h3 className="text-4xl lg:text-6xl font-medium font-montserrat tracking-tighter">
              Ekotechnik Czech s.r.o.
            </h3>
            <div className="my-4">
              <Link
                href="https://www.ekotechnik.cz"
                className="bg-white-black px-4 py-2 lg:px-6 lg:py-3 rounded-xl text-base lg:text-lg font-semibold hover:bg-black bg-white hover:text-white transition-colors duration-300 ease-in-out"
              >
                Visit Ekotechnik
              </Link>
            </div>
          </div>
          <p className="mt-4 font-montserrat text-sm lg:text-base leading-6">
            Our company is part of Ekotechnik Czech, operating since 1990. We’ve
            worked on three continents, navigating various climate, technical,
            and legislative needs. We specialize in photovoltaic systems and
            local energy networks, with a focus on maximizing on-site energy
            use. Every project we take on guarantees economic returns, and we
            offer the flexibility to repurchase your share if plans change.
          </p>
        </div>
        <div className="bg-[url(/images/worldMap_v2.png)] bg-cover bg-center rounded-3xl w-full lg:w-3/5">
          <div className="relative h-48 lg:h-[600px]">
            <Image
              src="/images/worldMap_v2.png"
              alt="World Map"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
