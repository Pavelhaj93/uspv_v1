import React from "react";

const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col gap-3 my-4 md:my-6 lg:my-8 xl:my-10 lg:pl-20 text-left">
      <h2 className="text-xl font-light ml-1 tracking-wider">{title}</h2>
      <h3 className="xl:text-6xl text-5xl font-light tracking-wide">
        {subtitle}
      </h3>
    </div>
  );
};

export default SectionTitle;
