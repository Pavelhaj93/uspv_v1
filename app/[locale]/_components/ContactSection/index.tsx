import React from "react";

const ContactSection = () => {
  return (
    <>
      <section
        id="contactSection"
        className="h-[60vh] w-screen p-5 pb-0 relative"
      >
        <div className="bg-[url(/images/MainPoint_1.jpg)] bg-center bg-cover relative h-full w-full rounded-t-3xl">
          {/* Card */}
          <div
            className="absolute top-1/2 left-[25%] transform -translate-y-1/2 bg-white opacity-85 shadow-lg rounded-3xl py-5 px-6"
            style={{ height: "85%", width: "350px" }}
          >
            <div className="h-full flex flex-col items-center text-left space-y-4">
              <p className="font-montserrat font-semibold text-xl">
                USPV s.r.o.
              </p>
              <div className="flex flex-col text-center gap-2">
                <p className="font-montserrat font-semibold">
                  Main Point Pankrác
                </p>
                <p className="font-montserrat">Milevská 2095/5</p>
                <p className="font-montserrat">140 00 Praha 4</p>
                <p className="font-montserrat">Czech Republic</p>
                <p className="font-montserrat">IČO: 12345678</p>
                <div className="flex flex-col gap-6">
                  <p className="font-montserrat">DIČ: CZ12345678</p>
                  <p className="font-montserrat">info@uspv.cz</p>
                  <p className="font-montserrat">+420 123 456 789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="footerSection"
        className="w-screen bg-white h-16 flex items-center justify-center"
      >
        <div className="font-montserrat text-center">
          © 2024 USPV s.r.o. - All rights reserved.
        </div>
      </section>
    </>
  );
};

export default ContactSection;
