import React from "react";
import HeroImage from "../assets/heroImage.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex justify-center items-center pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center max-w-md text-center md:text-left md:pr-8 animate-slide-in-left">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            Hey, I am a FullStack Developer
          </h2>
          <p className="text-gray-400 py-4">
            With strong experience in building scalable web applications, REST
            APIs, and cloud-integrated solutions. Skilled in both frontend and
            backend technologies with a focus on clean architecture,
            problem-solving, and delivering efficient software solutions.
          </p>
          <div className="animate-scale-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="experience"
              smooth
              duration={500}
              offset={-80}
              className="group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer inline-flex"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div
          className="flex justify-center md:justify-end animate-slide-in-right"
          style={{ animationDelay: "0.2s" }}
        >
          <img
            src={HeroImage}
            alt="Rohit Kumar Profile Image"
            className="rounded-2xl w-full md:w-2/3 lg:w-1/2"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
