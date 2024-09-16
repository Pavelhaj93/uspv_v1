import React from "react";

const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col gap-3 my-10 lg:pl-20 text-left">
      <h2 className="text-xl font-normal ml-1">{title}</h2>
      <h3 className="xl:text-6xl text-5xl font-medium mb-8 tracking-tighter">
        {subtitle}
      </h3>
    </div>
  );
};

export default SectionTitle;
