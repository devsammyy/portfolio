import React from "react";

interface IProps {
  heading?: string | undefined;
  title?: string | undefined;
}

const SectionHeader: React.FC<IProps> = ({ heading, title }) => {
  return (
    <div className="flex justify-center flex-col gap-3">
      <h1
        className="text-center text-sm md:text-md font-medium text-white"
        data-aos="slide-up"
      >
        {heading}
      </h1>
      <h1
        className="text-center mb-8 text-3xl md:text-4xl lg:text-5xl font-semibold text-white"
        data-aos="fade-in"
      >
        {title}
      </h1>
    </div>
  );
};

export default SectionHeader;
