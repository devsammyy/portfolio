import React from "react";
import { ExperienceContainer } from "./components/experience_section";
import SectionHeader from "./components/section-header";

interface IProps {}

const Experience: React.FC<IProps> = () => {
  return (
    <section className="text-white mt-20 flex flex-col justify-start">
      <SectionHeader heading="Explore my" title="Experience" />

      <div className="flex flex-1 flex-col md:flex gap-5 px-3 ">
        <ExperienceContainer title="Frontend Development" />
        <ExperienceContainer title="Backend Development" />
        <ExperienceContainer title="Mobile Development" />
      </div>
    </section>
  );
};

export default Experience;
