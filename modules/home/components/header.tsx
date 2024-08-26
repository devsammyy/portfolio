import React from "react";
import Image from "next/image";
import cleverlogo from "@/public/cleverlogo.svg";
import moon from "@/public/moon.svg";
import sun from "@/public/sun.svg";

const Header = () => {
  return (
    <header className="px-8 mx-20 flex justify-between items-center bg-red-700">
      <div id="logo">
        <Image src={cleverlogo} width={200} height={200} alt="Clevertech" />
      </div>
      <section className="flex gap-20 items-center">
        <nav className="flex justify-end black">
          <ul className="flex gap-10">
            <li className="font-medium lg:text-xl sm:text-sm md:text-md">
              <a href="#">Home</a>
            </li>
            <li className="font-medium lg:text-xl sm:text-sm md:text-md">
              <a href="#about-me">About us</a>
            </li>
            <li className="font-medium lg:text-xl sm:text-sm md:text-md">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div id="hamburger" className="md:hidden">
          <i className="fa fa-bars fa-2x"></i>
        </div>
        <div className="flex gap-5">
          <Image src={moon} width={30} height={30} alt="toggle-mode" />
          <Image src={sun} width={30} height={30} alt="toggle-mode" />
        </div>
      </section>
    </header>
  );
};

export default Header;
