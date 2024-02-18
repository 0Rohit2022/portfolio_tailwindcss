import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
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

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: nodejs,
      title: "Node JS",
      style: "shadow-white",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: expressjs,
      title: "Express JS",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: hibernate,
      title: "Hibernate",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: java,
      title: "Java",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: MySQL,
      title: "MySQL",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-gray-400",
    },
    {
      id: 13,
      src: spring_boot,
      title: "Spring Boot",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div name="experience" className="mt-0 lg:mt-0 ">
      <div className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Experience
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-4 lg:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
