import React from "react";

const ContactSection = () => {
  return (
    <section id="contactSection" className="h-[70vh] w-screen p-10 relative">
      <div className="bg-[url(/images/MainPoint_1.jpg)] bg-center bg-cover relative h-full w-full rounded-3xl">
        {/* Card */}
        <div
          className="absolute top-1/2 left-1/4 transform -translate-y-1/2 bg-white shadow-lg rounded-3xl"
          style={{ height: "60%", width: "400px" }}
        >
          <div className="h-full flex items-center justify-center text-center">
            <p className="text-xl font-bold">Kontakt</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <section
        id="footerSection"
        className="absolute bottom-0 w-screen bg-white h-20 flex items-center justify-center"
      >
        <div className="font-montserrat text-center">
          © 2024 USPV s.r.o. - All rights reserved.
        </div>
      </section>
    </section>
  );
};

export default ContactSection;
