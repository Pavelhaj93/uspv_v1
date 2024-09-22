import { motion } from "framer-motion";
import React from "react";

const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  // Animation variants for title and subtitle
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-3 my-4 md:my-6 lg:my-8 xl:my-10 lg:pl-20 text-left"
    >
      {/* Title */}
      <motion.h2
        variants={titleVariants}
        className="text-xl font-light ml-1 tracking-wider"
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      <motion.h3
        variants={subtitleVariants}
        className="xl:text-6xl text-4xl font-light tracking-wide"
      >
        {subtitle}
      </motion.h3>
    </motion.div>
  );
};

export default SectionTitle;
