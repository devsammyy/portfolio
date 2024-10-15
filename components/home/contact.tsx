import projectHb from "@/public/projecHb.png";
import projectLaw from "@/public/projectLaw.png";
import React from "react";
import { ProjectCard } from "./components/project_card";
import SectionHeader from "./components/section-header";

interface IProps {}

const Contact: React.FC<IProps> = () => {
  return (
    <section className="h-[100vh] w-full text-white mt-20 flex flex-col justify-start">
      <SectionHeader heading="Get in Touch" title="Contact Me" />

      <div className="flex justify-center gap-5 p-10">
       
        <div className="border-2 w-[300px] justify-center  items-center border-gray-600 shadow-lg rounded-2xl font-semibold">

            
        </div>
      </div>
    </section>
  );
};

export default Contact;
