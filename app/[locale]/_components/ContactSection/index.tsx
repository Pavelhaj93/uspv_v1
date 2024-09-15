import React from "react";

const ContactSection = () => {
  return (
    <>
      <section id="contactSection" className="h-[60vh] w-screen p-5 pb-0">
        <div className="bg-[url(/images/MainPoint_1.jpg)] bg-center bg-cover relative h-full w-full rounded-3xl">
          {/* Card */}
          <div
            className="absolute top-1/2 left-[25%] transform -translate-y-1/2 bg-white opacity-85 shadow-lg rounded-3xl py-5 px-6"
            style={{ height: "85%", width: "350px" }}
          >
            <div className="h-full flex flex-col items-center text-left space-y-4">
              <p className="font-semibold text-xl">USPV s.r.o.</p>
              <div className="flex flex-col text-center gap-1">
                <p className="font-semibold">Main Point Pankrác</p>
                <p>Milevská 2095/5</p>
                <p>140 00 Praha 4</p>
                <p>Czech Republic</p>
                <p>IČO: 12345678</p>
                <p className="mb-4">DIČ: CZ12345678</p>
                <div className="flex flex-col gap-2">
                  <p>info@uspv.cz</p>
                  <p>+420 123 456 789</p>
                  <a href="www.ekotechnik.cz">www.ekotechnik.cz</a>
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
        <div className="text-center">
          © 2024 USPV s.r.o. - All rights reserved.
        </div>
      </section>
    </>
  );
};

export default ContactSection;
