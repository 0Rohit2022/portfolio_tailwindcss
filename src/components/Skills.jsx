import React, { useRef } from "react";
import useIntersectionObserver from "../../public/js/IntersectObserver";
import ssms from "../assets/ssms.png";
import azure from "../assets/azure.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/expressjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.png";
import mongodb from "../assets/mongodb.png";
import MySQL from "../assets/mysql.png";
import spring_boot from "../assets/spring_boot.png";
import hibernate from "../assets/hibernate.png";
import dotnet from "../assets/dotnet.png";

const Skills = () => {
  const techs = [
    { id: 1, src: dotnet, title: "DOTNET", style: "shadow-blue-600" },
    { id: 2, src: java, title: "Java", style: "shadow-red-400" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 5, src: nodejs, title: "Node JS", style: "shadow-green-500" },
    { id: 6, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 7, src: expressjs, title: "Express JS", style: "shadow-gray-700" },
    { id: 8, src: github, title: "GitHub", style: "shadow-gray-400" },
    { id: 9, src: hibernate, title: "Hibernate", style: "shadow-gray-400" },
    { id: 10, src: MySQL, title: "MySQL", style: "shadow-blue-400" },
    { id: 11, src: mongodb, title: "MongoDB", style: "shadow-green-400" },
    {
      id: 12,
      src: spring_boot,
      title: "Spring Boot",
      style: "shadow-green-400",
    },
    { id: 13, src: ssms, title: "SSMS", style: "shadow-gray-400" },
    { id: 14, src: azure, title: "MS Azure", style: "shadow-blue-500" },
    { id: 15, src: null, title: "& MORE", style: "shadow-blue-500" },
  ];

  return (
    <div name="skills" className="pt-20">
      <div className="bg-gradient-to-b from-black to-gray-800 w-full h-auto">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div className="text-center">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Skills
            </p>
            <p className="py-6 text-xl text-gray-400">
              Technologies I’ve proficiently utilized
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 text-center py-10 px-4 lg:px-0">
            {techs.map(({ id, src, title, style }, index) => {
              const cardRef = useRef(null);
              const isVisible = useIntersectionObserver(cardRef);
              return (
                <div
                  key={id}
                  ref={cardRef}
                  className={`shadow-md hover:scale-110 transition-transform duration-500 py-8 px-6 rounded-xl ${style} ${
                    isVisible ? "animate-pop-up" : "opacity-0"
                  } hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 hover:border hover:border-cyan-500/50`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {src ? (
                    <img
                      src={src}
                      alt={`${title} logo`}
                      className="w-20 h-20 mx-auto"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-20 h-20 mx-auto flex items-center justify-center text-3xl font-bold text-cyan-400">
                      +
                    </div>
                  )}
                  <p className="mt-4 text-lg font-medium">{title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
