"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

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

  return (
    <>
      <section id="contactSection" className="h-full w-full p-5 pb-0 relative">
        {/* Background Image */}
        <motion.div
          className="relative w-full rounded-t-3xl md:rounded-3xl h-[20vh] md:h-[55vh] max-h-[410px]"
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
            className="rounded-t-3xl md:rounded-3xl"
          />
        </motion.div>

        {/* Contact Card */}
        <motion.div
          className="md:absolute md:h-[calc(100%_-_5rem)] w-full md:w-[40%] xl:left-[23%] lg:max-w-[18.125rem] md:left-[15%] left-5 top-0 md:top-12 bg-white/90 shadow-lg md:rounded-3xl rounded-b-3xl py-7 px-5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="h-full flex flex-col items-center">
            <p className="font-semibold text-xl mb-5">USPV s.r.o.</p>
            <div className="flex flex-col text-center gap-5">
              <div className="flex flex-col">
                <p className="font-semibold mb-1">Main Point Pankrác</p>
                <p className="font-light">Milevská 2095/5</p>
                <p className="font-light">140 00 Praha 4</p>
                <p className="font-light">Czech Republic</p>
                <p className="font-light">IČO: 12345678</p>
                <p className="font-light">DIČ: CZ12345678</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold mb-[2px]">Tomáš Korostenský</p>
                <p className="font-light">tomas.korostensky@ekotechnik.cz</p>
                <p className="font-light">+420 777 207 801</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="footerSection"
        className="w-full bg-white h-12 flex items-center justify-center"
      >
        <div className="text-center text-md font-light">© 2024 USPV s.r.o.</div>
      </section>
    </>
  );
}
