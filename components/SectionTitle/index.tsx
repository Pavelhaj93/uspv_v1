import React from "react";

const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col gap-3 my-10 pl-20 text-left">
      <h2 className="text-xl font-normal font-montserrat ml-1">{title}</h2>
      <h3 className="text-6xl font-medium font-montserrat mb-8 tracking-tighter">
        {subtitle}
      </h3>
    </div>
  );
};

export default SectionTitle;
