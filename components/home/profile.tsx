"use client";
import github from "@/public/github.png";
import linkedin from "@/public/linkedin.png";
import profpic from "@/public/profile-pic.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const words = [
  "Frontend Development",
  "Backend Engineering",
  "Mobile Development",
  "Database Management",
  "System Optimization",
  "UI/UX Design",
  "DevOps Practices",
];

const Profile = () => {
  const [word, setWord] = useState("");
  const indexRef = useRef(0);
  const countRef = useRef(0);
  useEffect(() => {
    const typeWord = () => {
      const currentText = words[countRef.current];
      const nextLetter = currentText.slice(0, indexRef.current + 1);

      setWord(nextLetter); // Update the word state with the current letter
      indexRef.current += 1;

      if (nextLetter.length === currentText.length) {
        setTimeout(() => {
          indexRef.current = 0;
          countRef.current = (countRef.current + 1) % words.length;
        }, 1000); // Delay before typing the next word
      }
    };

    const typingInterval = setInterval(() => {
      if (indexRef.current < words[countRef.current].length) {
        typeWord();
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="w-full my-16 flex flex-col gap-4 items-center md:flex-row md:gap-8 md:items-center md:justify-center">
      <Image
        src={profpic}
        color="#fff"
        className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]"
        alt="Babatunde"
        data-aos="fade-up"
      />
      <div>
        <div className="text-white flex flex-col items-center gap-3">
          <h1
            className="text-2xl md:text-4xl font-semibold"
            data-aos="slide-left"
          >
            Babatunde Adebayo
          </h1>
          <h2
            className="text-xs md:text-md md:text-xl font-semibold"
            data-aos="slide-up"
          >
            Software Engineer | Full-Stack Developer
          </h2>
          <h3 data-aos="slide-up" className="text-sm md:text-md font-semibold">
            I specialize in:
          </h3>
          <h3 className="text-xl md:text-2xl text-[#A9D518] font-semibold text-wrap">
            {word}
          </h3>
        </div>
        <div className="my-4 flex justify-center gap-5">
          <button
            data-aos="slide-left"
            className="border-2 p-2.5 md:p-3 transition duration-300 ease-in-out hover:bg-[#A9D518] rounded-full text-white border-[#A9D518]"
          >
            Download CV
          </button>
          <button
            data-aos="slide-right"
            className="border-2 p-2.5 md:p-3 bg-[#A9D518] transition duration-300 ease-in-out hover:bg-[#7a9426] hover:border-[#7a9426] rounded-full text-white border-[#A9D518]"
          >
            Contact Info
          </button>
        </div>
        <div className="mt-6 flex gap-5 justify-center">
          <a href="https://www.linkedin.com/in/babatunde-adebayo-9b9466232">
            <Image
              src={linkedin}
              width={40}
              height={40}
              className="invert transition duration-300 ease-in-out hover:scale-[1.3]"
              alt="Clevertech"
            />
          </a>
          <a href="">
            <Image
              src={github}
              width={40}
              height={40}
              className="invert transition duration-300 ease-in-out hover:scale-[1.3]"
              alt="Clevertech"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
