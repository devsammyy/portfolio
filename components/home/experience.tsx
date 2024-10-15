import React from "react";
import { ExperienceContainer } from "./components/experience_section";
import SectionHeader from "./components/section-header";

interface IProps {}

const Experience: React.FC<IProps> = () => {
  return (
    <section className="w-full text-white mt-20 flex flex-col justify-start">
      <SectionHeader heading="Explore my" title="Experience" />

      <div className="flex flex-col md:flex gap-5 p-10 w-full">
        <ExperienceContainer title="Frontend Development" />
        <ExperienceContainer title="Backend Development" />
        <ExperienceContainer title="Mobile Development" />
      </div>
    </section>
  );
};

export default Experience;
