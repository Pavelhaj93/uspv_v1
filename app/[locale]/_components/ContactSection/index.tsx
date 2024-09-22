import React from "react";

export default function ContactSection() {
  return (
    <>
      <section id="contactSection" className="h-full w-full p-5 pb-0 relative">
        {/* Background Image */}
        <div className="bg-[url(/images/MainPoint_1.jpg)] bg-center bg-cover relative w-full rounded-t-3xl md:rounded-3xl h-[20vh] md:h-[55vh] max-h-[420px]">
          {/* Placeholder for the card in mobile */}
        </div>

        {/* Card */}
        <div className="md:absolute md:h-[calc(100%_-_60px)] w-full md:w-[40%] xl:left-1/4 lg:max-w-[320px] md:left-[15%] left-5 top-0 md:top-10 bg-white opacity-85 shadow-lg md:rounded-3xl rounded-b-3xl py-7 px-5 md:mt-0">
          <div className="h-full flex flex-col items-center">
            <p className="font-bold text-2xl mb-5">USPV s.r.o.</p>
            <div className="flex flex-col text-center gap-5">
              <div className="flex flex-col gap-[2px]">
                <p className="font-semibold">Main Point Pankrác</p>
                <p>Milevská 2095/5</p>
                <p>140 00 Praha 4</p>
                <p>Czech Republic</p>
                <p>IČO: 12345678</p>
                <p className="mb-2">DIČ: CZ12345678</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Tomáš Korostenský</p>
                <p>tomas.korostensky@ekotechnik.cz</p>
                <p>+420 777 207 801</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="footerSection"
        className="w-full bg-white h-12 flex items-center justify-center"
      >
        <div className="text-center">© 2024 USPV s.r.o.</div>
      </section>
    </>
  );
}
