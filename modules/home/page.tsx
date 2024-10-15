"use client";
import About from "@/components/home/about";
import Experience from "@/components/home/experience";
import Profile from "@/components/home/profile";
import Project from "@/components/home/project";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "../../components/home/header";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "linear",
      delay: 100,
    });
  }, []);
  return (
    <section className="flex flex-col items-center">
      <Header />
      <Profile />
      <About />
      <Experience />
      <Project />
    </section>
  );
};

export default HomePage;
