import React from "react";
import Image from "next/image";

const PartnersSection = () => {
  const partners = [
    "/images/partners/erste_group.svg",
    "/images/partners/societe_generale.svg",
    "/images/partners/UniCredit.svg",
    "/images/partners/fichtner.svg",
    "/images/partners/Raiffeisen_Bank.svg",
    "/images/partners/prk-logo-white.svg",
    "/images/partners/wolf_theiss.svg",
    "/images/partners/cms.svg",
    "/images/partners/white_case.svg",
    "/images/partners/european-bank-for-rad-1.svg",
    "/images/partners/mott-macdonald.svg",
    "/images/partners/generali-logo.svg",
  ];

  return (
    <section id="partnersSection" className="bg-white w-screen py-16 px-10">
      <h2 className="text-2xl font-light mb-20 ml-40 font-montserrat">
        PARTNERS
      </h2>
      <div className="grid grid-cols-3 gap-10">
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
