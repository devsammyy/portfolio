import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  name: string;
  imageSrc: string | StaticImport;
  link?: string | any;
  github?: string | any;
  description?: string;
}

export const ProjectCard: React.FC<IProps> = ({
  name,
  imageSrc,
  link,
  github,
  description,
}) => {
  return (
    <div className="border-2 lg:w-[300px] justify-center  items-center border-gray-600 shadow-lg rounded-2xl font-semibold">
      <div className="w-full h-[300px] relative">
        <Image
          src={imageSrc}
          className="rounded-t-2xl object-cover"
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <h1 className="text-xl my-4 text-center">{name}</h1>
        <p className="p-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="flex my-3 gap-3 justify-center">
        <Link href={link} target="_blank">
          <button className="border-[1px] p-2.5 md:p-3 text-sm font-light  transition duration-300 ease-in-out hover:bg-[#A9D518] rounded-md text-white border-[#A9D518]">
            {" "}
            Live preview
          </button>
        </Link>
        <Link href={github} target="_blank">
          <button className="border-[1px] p-2.5 md:p-3 text-sm font-light bg-[#A9D518] transition duration-300 ease-in-out hover:bg-[#7a9426] hover:border-[#7a9426] rounded-md text-white border-[#A9D518]">
            {" "}
            GitHub
          </button>
        </Link>
      </div>
    </div>
  );
};
