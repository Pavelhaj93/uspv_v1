"use client";

import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function AboutUsSection() {
  return (
    <section
      id="aboutUsSection"
      className="h-[70vh] w-full flex flex-col gap-5 px-5 pb-5"
    >
      <div className="flex h-full justify-between gap-5">
        <div className="bg-[#ecc69b] rounded-3xl px-10 pt-16 w-3/5 flex flex-col justify-between pb-10">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-normal font-montserrat ml-1">
              WE ARE PART OF
            </h3>
            <h3 className="text-6xl font-medium font-montserrat tracking-tighter">
              Ekotechnik Czech s.r.o.
            </h3>
            <div className="my-4">
              <Link
                href="https://www.ekotechnik.cz"
                className="bg-white-black px-6 py-3 rounded-xl text-lg font-semibold hover:bg-black bg-white hover:text-white transition-colors duration-300 ease-in-out"
              >
                Visit Ekotechnik
              </Link>
            </div>
          </div>
          <p className="mt-4 font-montserrat leading-6">
            Our company is part of Ekotechnik Czech, operating since 1990. We’ve
            worked on three continents, navigating various climate, technical,
            and legislative needs. We specialize in photovoltaic systems and
            local energy networks, with a focus on maximizing on-site energy
            use. Every project we take on guarantees economic returns, and we
            offer the flexibility to repurchase your share if plans change.
          </p>
        </div>
        <div className="bg-[url(/images/worldMap_v2.png)] bg-cover bg-center rounded-3xl w-3/5">
          <div className="">
            <div className="lg:w-1/2 relative h-[600px] lg:h-auto">
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
      </div>
    </section>
  );
}
