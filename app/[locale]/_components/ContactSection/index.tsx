"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { IconLogo } from "../../icons";

export default function ContactSection() {
  // Variants for background image and contact card animation
  const backgroundImageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
  };

  const ContactCard = ({ className }: { className?: string }) => {
    return (
      <motion.div
        className={`md:relative md:bg-white/90 shadow-lg md:shadow-none rounded-b-3xl rounded-t-none md:rounded-t-3xl py-7 px-5 md:max-w-[18.125rem] md:ml-[20%] md:m-5 ${className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        id="contactSection"
      >
        <div className="flex flex-col items-center">
          <IconLogo size="custom" className="mb-5 h-12" />
          <div className="flex flex-col text-center gap-5">
            <div className="text-primary flex flex-col">
              <p className="font-semibold mb-1">Main Point Pankrác</p>
              <p className="font-light">Milevská 2095/5</p>
              <p className="font-light">140 00 Praha 4</p>
              <p className="font-light">Czech Republic</p>
              <p className="font-light">IČO: 12345678</p>
              <p className="font-light">DIČ: CZ12345678</p>
            </div>
            <div className="text-primary flex flex-col">
              <p className="font-semibold mb-0.5">Tomáš Korostenský</p>
              <p className="font-light">tomas.korostensky@ekotechnik.cz</p>
              <p className="font-light">+420 777 207 801</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      {/* Desktop Version (Hidden on mobile) */}
      <section
        id="contactSection"
        className="md:flex md:flex-col w-full p-5 pb-0"
      >
        {/* Desktop */}
        {/* Background Image */}
        <motion.div
          className="w-full md:flex hidden relative rounded-3xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={backgroundImageVariants}
        >
          <Image
            src="/images/MainPoint_1.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
          {/* Contact Card Overlay */}
          <ContactCard className="" />
        </motion.div>
        {/* Desktop */}

        {/* Mobile */}
        {/* Background Image */}
        <motion.div
          className="md:hidden w-full h-[30vh] relative rounded-t-3xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={backgroundImageVariants}
          id="contactSection"
        >
          <Image
            src="/images/MainPoint_3.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        {/* Contact Card Under the Image */}
        <ContactCard className="md:hidden" />
      </section>
      {/* Mobile */}

      <section
        id="footerSection"
        className="w-full bg-transparent h-12 flex items-center justify-center"
      >
        <div className="text-center text-md font-light">© 2024 USPV s.r.o.</div>
      </section>
    </>
  );
}
