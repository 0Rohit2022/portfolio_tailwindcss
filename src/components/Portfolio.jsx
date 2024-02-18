import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      githubLink: "https://github.com/example/arrayDestruct",
    },
    {
      id: 2,
      src: reactParallax,
      githubLink: "https://github.com/example/reactParallax",
    },
    {
      id: 3,
      src: navbar,
      githubLink: "https://github.com/example/navbar",
    },
    {
      id: 4,
      src: reactSmooth,
      githubLink: "https://github.com/example/reactSmooth",
    },
    {
      id: 5,
      src: installNode,
      githubLink: "https://github.com/example/installNode",
    },
    {
      id: 6,
      src: reactWeather,
      githubLink: "https://github.com/example/reactWeather",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-8">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, githubLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center ">
                <a
                  href={githubLink}
                  className="hover:font-bold hover:text-[16px]"
                  target="_blank"
                >
                  <button className="w-1/2 px-6 py-3 m-4 rounded-lg">
                    Demo
                  </button>
                </a>
                <a
                  href={githubLink}
                  className="hover:font-bold hover:text-[16px]"
                  target="_blank"
                >
                  <button className="w-1/2 px-6 py-3 m-4 rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Portfolio;
