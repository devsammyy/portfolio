import projectHb from "@/public/projecHb.png";
import projectLaw from "@/public/projectLaw.png";
import React from "react";
import { ProjectCard } from "./components/project_card";
import SectionHeader from "./components/section-header";

interface IProps {}

const Project: React.FC<IProps> = () => {
  return (
    <section className="w-full text-white mt-20 flex flex-col justify-start">
      <SectionHeader heading="Browse my" title="Projects" />

      <div className="flex flex-col md:flex justify-center gap-5 p-10  ">
        <div data-aos="slide-right">
          <ProjectCard
            name="Hausbetreuungstruckl"
            github="https://github.com/JP1-dev/hausbetreuungstruckl"
            imageSrc={projectHb}
            description="Professional cleaning services for residential and commercial properties"
            link={"https://hausbetreuungstruckl.at"}
          />
        </div>
        <div data-aos="slide-left">
          <ProjectCard
            name="Josie Lawcastle"
            github="https://github.com/devsammyy/josielawcaste.git"
            imageSrc={projectLaw}
            description="Legal services specializing in family law, estate planning, and corporate law"
            link={"https://www.josielawcastle.com"}
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
