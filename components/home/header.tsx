"use client";
import cleverlogo from "@/public/cleverlogo.svg";
import Image from "next/image";
import { MenuBurger, Sun } from "react-flaticons";

// w-[80%] mx-0 md:w-[80%] md:px-8 md:mx-auto top-0 z-10  md:fixed md:h-[15vh]

const Header = () => {
  return (
    <header className=" p-4 w-full flex justify-between items-center bg-white/30 backdrop-blur-sm md:rounded-lg shadow-lg md:border md:border-white/20 ">
      <div className="ml-3">
        <Image
          src={cleverlogo}
          color="#fff"
          width={200}
          height={200}
          className="invert"
          alt="Clevertech"
        />
      </div>
      <section className="flex lg:gap-20 items-center">
        <nav className="lg:flex lg:justify-end hidden black">
          <ul className="flex gap-10">
            <li className="font-medium lg:text-xl sm:text-sm md:text-md">
              <a
                className="text-white hover:text-[#A9D518] hover:border-b-2 hover:border-[#A9D518] p-2 hover:transition hover:duration-200 hover:ease"
                href="#"
              >
                About
              </a>
            </li>
            <li className="font-medium lg:text-xl sm:text-sm md:text-md">
              <a
                className="text-white hover:text-[#A9D518] hover:border-b-2 hover:border-[#A9D518] p-2 hover:transition hover:duration-200 hover:ease"
                href="#A9D518bout-me"
              >
                Experience
              </a>
            </li>
            <li className="font-medium lg:text-xl sm:text-sm md:text-md">
              <a
                className="text-white hover:text-[#A9D518] hover:border-b-2 hover:border-[#A9D518] p-2 hover:transition hover:duration-200 hover:ease"
                href="#contact"
              >
                Projects
              </a>
            </li>
            <li className="font-medium lg:text-xl sm:text-sm md:text-md">
              <a
                className="text-white hover:text-[#A9D518] hover:border-b-2 hover:border-[#A9D518] p-2 hover:transition hover:duration-200 hover:ease"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="mr-3 cursor-pointer hover:bg-white/10 p-3 hover:rounded-full hover:transition hover:duration-300 hover:ease-in">
          <Sun color="white" />
        </div>
        <div className="cursor-pointer hover:bg-white/10 p-3 lg:hidden hover:rounded-full hover:transition hover:duration-300 hover:ease-in">
          <MenuBurger color="white" />
        </div>
      </section>
    </header>
  );
};

export default Header;
