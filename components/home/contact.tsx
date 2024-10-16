import email from "@/public/email.png";
import linkedln from "@/public/linkedin.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SectionHeader from "./components/section-header";

interface IProps {}

const Contact: React.FC<IProps> = () => {
  return (
    <section
      className="w-full text-white my-32 flex flex-col justify-start"
      data-aos="slide-up"
    >
      <SectionHeader heading="Get in Touch" title="Contact Me" />

      <div className="flex justify-center gap-5 ">
        <div className="border-2 flex flex-col md:flex gap-4  p-5 md:justify-center  md:items-center border-gray-600 shadow-lg rounded-2xl font-semibold">
          <div className="email flex items-center gap-2">
            <Image
              src={email}
              width={50}
              height={50}
              className="invert   transition duration-300 ease-in-out hover:scale-[1.3]"
              alt="Clevertech"
              data-aos="fade-in"
            />
            <div className="">
              <Link
                href="mailto:babatundeeaadebayo@gmail.com"
                className="font-light text-sm md:text-md lg:text-lg"
              >
                babatundeeaadebayo@gmail.com
              </Link>
            </div>
          </div>
          <div className="linkedln flex items-center gap-2">
            <Image
              src={linkedln}
              width={50}
              height={50}
              className="invert transition duration-300 ease-in-out hover:scale-[1.3]"
              alt="Clevertech"
              data-aos="fade-in"
            />
            <div className="">
              <Link
                href="https://www.linkedin.com/in/babatunde-adebayo-9b9466232/"
                className="font-light text-sm md:text-md lg:text-lg"
              >
                Linkedln
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
