import React from "react";

const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col gap-5 my-10">
      <h2 className="text-xl font-normal px-10 font-montserrat pl-20">
        {title}
      </h2>
      <h3 className="text-7xl font-medium font-montserrat pl-20 mb-8 tracking-tighter">
        {subtitle}
      </h3>
    </div>
  );
};

export default SectionTitle;
