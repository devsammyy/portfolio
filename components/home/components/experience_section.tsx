import checkmark from "@/public/checkmark.png";
import Image from "next/image";
import React from "react";

interface IProps {
  title: string;
  exp: string;
}

export const ExperienceCard: React.FC<IProps> = ({ title, exp }) => {
  return (
    <article className="flex my-3 gap-2 w-full">
      <Image
        src={checkmark}
        width={25}
        className="invert size-5  transition duration-300 ease-in-out hover:scale-[1.3]"
        alt="Clevertech"
        data-aos="fade-in"
      />
      <div className="" data-aos="slide-up">
        <h1 className="text-sm font-extrabold">{title}</h1>
        <p className="font-light text-xs">{exp}</p>
      </div>
    </article>
  );
};

export const ExperienceContainer: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="border-2 w-full border-gray-600 shadow-lg p-[1rem] rounded-xl font-semibold">
      <h1 className="text-xl mb-4 text-center">{title}</h1>
      {title === "Frontend Development" ? (
        <div className="">
          <div className="flex ">
            <ExperienceCard title="HTML" exp="Experienced" />
            <ExperienceCard title="CSS" exp="Intermediate" />
          </div>
          <div className="flex ">
            <ExperienceCard title="Tailwind" exp="Intermediate" />
            <ExperienceCard title="Bootstrap" exp="Experienced" />
          </div>
          <div className="flex ">
            <ExperienceCard title="React" exp="Experienced" />
            <ExperienceCard title="NextJs" exp="Experienced" />
          </div>
          <div className="flex ">
            <ExperienceCard title="Svelte" exp="Basic" />
            <ExperienceCard title="Angular" exp="Intermediate" />
          </div>
        </div>
      ) : title === "Backend Development" ? (
        <div className="">
          <div className="flex ">
            <ExperienceCard title="Nestjs" exp="Experienced" />
            <ExperienceCard title="Express" exp="Experienced" />
          </div>
          <div className="flex ">
            <ExperienceCard title="Nodejs" exp="Experienced" />
            <ExperienceCard title="Django" exp="Experienced" />
          </div>
          <div className="flex ">
            <ExperienceCard title="Spring" exp="Intermediate" />
            <ExperienceCard title="PHP" exp="Intermediate" />
          </div>
          <div className="flex ">
            <ExperienceCard title="FastAPI" exp="Intermediate" />
            <ExperienceCard title="Angular" exp="Intermediate" />
          </div>
        </div>
      ) : title === "Mobile Development" ? (
        <div className="">
          <div className="flex ">
            <ExperienceCard title="Flutter" exp="Experienced" />
            <ExperienceCard title="React Native" exp="Experienced" />
          </div>
          <div className="flex ">
            <ExperienceCard title="Kotlin" exp="Basic" />
            <ExperienceCard title="Kivy" exp="Intermediate" />
          </div>
        </div>
      ) : null}
    </div>
  );
};
