import React from "react";
import Image from "next/image";

const PartnersSection = () => {
  const partners = [
    "/images/partners/USPV_logo.svg",
    "/images/partners/USPV_logo.svg",
    "/images/partners/USPV_logo.svg",
    "/images/partners/USPV_logo.svg",
    "/images/partners/USPV_logo.svg",
    "/images/partners/USPV_logo.svg",
    "/images/partners/USPV_logo.svg",
  ];

  return (
    <section id="partnersSection" className="bg-white w-screen py-16 px-10">
      <h2 className="text-4xl font-bold mb-20 ml-40 font-montserrat">
        Partners
      </h2>
      <div className="grid grid-cols-3 gap-40">
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={partner}
              alt={`Partner ${index + 1}`}
              width={150}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
