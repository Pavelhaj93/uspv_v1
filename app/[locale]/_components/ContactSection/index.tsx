import React from "react";

export default function ContactSection() {
  return (
    <>
      <section id="contactSection" className="h-full w-full p-5 pb-0 relative">
        {/* Background Image */}
        <div className="bg-[url(/images/MainPoint_1.jpg)] bg-center bg-cover relative w-full rounded-t-3xl md:rounded-3xl h-[20vh] md:h-[40vh] lg:h-[55vh] max-h-[420px]">
          {/* Placeholder for the card in mobile */}
        </div>

        {/* Card */}
        <div className="md:absolute md:h-[calc(100%_-_60px)] w-full md:w-[40%] xl:left-1/4 lg:max-w-[350px] md:left-[15%] left-5 top-0 md:top-10 bg-white opacity-85 shadow-lg md:rounded-3xl rounded-b-3xl py-5 px-6 md:mt-0">
          <div className="h-full flex flex-col items-center text-left space-y-4">
            <p className="font-semibold text-xl">USPV s.r.o.</p>
            <div className="flex flex-col text-center gap-1">
              <p className="font-semibold">Main Point Pankrác</p>
              <p>Milevská 2095/5</p>
              <p>140 00 Praha 4</p>
              <p>Czech Republic</p>
              <p>IČO: 12345678</p>
              <p className="mb-4">DIČ: CZ12345678</p>
              <div className="flex flex-col gap-1 lg:gap-2">
                <p>tomas.korostensky@ekotechnik.cz</p>
                <p>+420 777 207 801</p>
                <a
                  href="https://www.ekotechnik.cz"
                  className="text-blue-600 hover:underline"
                >
                  www.ekotechnik.cz
                </a>
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
