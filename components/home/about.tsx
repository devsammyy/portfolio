import profpic from "@/public/about-pic.png";
import education from "@/public/education.png";
import experience from "@/public/experience.png";
import Image from "next/image";
import SectionHeader from "./components/section-header";

const About = () => {
  return (
    <section className=" my-16 w-full ">
      <SectionHeader heading="Get to know more" title="About me." />
      <div className="flex flex-col gap-y-5 md:flex-row md:gap-8 md:items-center md:p-16 md:justify-center">
        <Image
          src={profpic}
          className=" rounded-2xl"
          alt="Clevertech"
          data-aos="slide-up"
          width={500}
        />

        <div className="flex flex-col md:flex-row">
          <div className="text-white flex flex-col  gap-1">
            <div className="flex flex-col md:flex-row gap-5 gap-y-2 p-2 ">
              <div
                className="border-2 flex md:flex-1 flex-col gap justify-center md:justify-center md:items-center items-center border-gray-600 shadow-lg p-[1.5rem] rounded-3xl font-semibold"
                data-aos="slide-right"
              >
                <Image
                  src={experience}
                  width={40}
                  className="invert transition duration-300 ease-in-out hover:scale-[1.3]"
                  alt="Clevertech"
                  data-aos="slide-up"
                />
                <h1 className="text-xl mb-4" data-aos="slide-up">
                  Experience
                </h1>

                <div className="flex flex-col gap-3 items-center">
                  <div className="text-center">
                    <h1 className="text-sm" data-aos="slide-right">
                      Frontend Development
                    </h1>
                    <h3 className="text-xs italic" data-aos="slide-right">
                      3+ years
                    </h3>
                  </div>
                  <div className="text-center">
                    <h1 className="text-sm" data-aos="slide-right">
                      Backend Development
                    </h1>
                    <h3 className="text-xs italic" data-aos="slide-right">
                      2+ years
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className="border-2 flex md:flex-1 flex-col border-gray-600 shadow-lg p-[1.5rem] py-5 rounded-3xl items-center font-semibold"
                data-aos="slide-left"
              >
                <Image
                  src={education}
                  width={40}
                  height={40}
                  className="invert transition duration-300 ease-in-out hover:scale-[1.3]"
                  alt="Clevertech"
                  data-aos="slide-up"
                />
                <h1 className="text-xl mb-4" data-aos="slide-up">
                  Education
                </h1>
                <div className="flex flex-col gap-3 items-center">
                  <div className="text-center">
                    <h1 className="text-sm" data-aos="slide-left">
                      B.Sc. Computer Science
                    </h1>
                    <h3 className="text-xs italic" data-aos="slide-left">
                      University of the People
                    </h3>
                  </div>
                  <div className="text-center">
                    <h1 className="text-sm" data-aos="slide-left">
                      B.Sc. Electrical Electronics Technology
                    </h1>
                    <h3 className="text-xs italic" data-aos="slide-left">
                      University of Ilorin
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <p
                className="text-sm p-4 leading-9  text-justify font-semibold"
                data-aos="fade-up"
              >
                As a passionate and dedicated Software Engineer, I am committed
                to crafting innovative and scalable solutions that not only meet
                but exceed user expectations. With a strong foundation in
                full-stack development, I thrive in environments where
                creativity and collaboration intersect to drive meaningful
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
