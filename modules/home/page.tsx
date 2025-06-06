"use client";
import About from "@/components/home/about";
import Contact from "@/components/home/contact";
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
      offset: 50,
    });
  }, []);
  return (
    <>
      <Header />
      <Profile />
      <About />
      <Experience />
      <Project />
      <Contact />
    </>
  );
};

export default HomePage;
