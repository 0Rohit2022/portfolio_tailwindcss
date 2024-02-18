import React from "react";
import tasktracker from "../assets/portfolio/tasktracker.png";
import youtube from "../assets/portfolio/youtube.png";
import blog from "../assets/portfolio/blog.png";
import chat from "../assets/portfolio/chat.png";
import ecommerce from "../assets/portfolio/ecommerce.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: tasktracker,
      githubLink: "https://github.com/0Rohit2022/TaskTracker_Frontend",
      projectName: "TaskTracker",
    },
    {
      id: 2,
      src: youtube,
      githubLink: "https://github.com/0Rohit2022/TubeTweets",
      projectName: "TubeTweets",
    },
    {
      id: 3,
      src: tasktracker,
      githubLink: "https://github.com/0Rohit2022/Resume-Builder",
      projectName: "CVForge",
    },
    {
      id: 4,
      src: blog,
      githubLink: "https://github.com/0Rohit2022/Thought-stream",
      projectName: "IdeaJET",
    },
    {
      id: 5,
      src: chat,
      githubLink: "https://github.com/0Rohit2022/ChatZone",
      projectName: "ChatZone",
    },
    {
      id: 6,
      src: ecommerce,
      githubLink: "https://github.com/0Rohit2022/Ecommerce",
      projectName: "Ecommerce",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-center">
            Portfolio
          </p>
          <p className="py-8 text-center">
            Explore a selection of my projects showcased here
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
          {portfolios.map(({ id, src, githubLink, projectName }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={projectName}
                className="rounded-md duration-200 hover:scale-105 w-full"
              />
              <div className="flex justify-center mt-4">
                <a
                  href={githubLink}
                  className="hover:font-bold hover:text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-1/2 px-6 py-3 m-4 rounded-lg">
                    {projectName}
                  </button>
                </a>
                <a
                  href={githubLink}
                  className="hover:font-bold hover:text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
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
