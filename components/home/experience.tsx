import React from "react";
import { ExperienceContainer } from "./components/experience_section";
import SectionHeader from "./components/section-header";

interface IProps {}

const Experience: React.FC<IProps> = () => {
  return (
    <section className="h-[100vh] w-full text-white mt-20 flex flex-col justify-start">
      <SectionHeader heading="Explore my" title="Experience" />

      <div className="flex gap-5 p-10 relative  w-full">
        <ExperienceContainer title="Frontend Development" />
        <ExperienceContainer title="Backend Development" />
        <ExperienceContainer title="Mobile Development" />
      </div>
    </section>
  );
};

export default Experience;
