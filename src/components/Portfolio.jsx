import React, { useRef } from "react";
import useIntersectionObserver from "../../public/js/IntersectObserver";
import tasktracker from "../assets/portfolio/tasktracker.png";
import youtube from "../assets/portfolio/youtube.png";
import blog from "../assets/portfolio/blog.png";
import chat from "../assets/portfolio/chat.png";

const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Avant Garde",
    tip: "Currently Working Here",
    startDate: "Apr 2024",
    endDate: "Present",
    location: "Remote, India",
    description: [
      "Developed secure REST APIs using ADO.NET, SQL Server & JWT.",
      "Integrated Microsoft Graph API for Entra ID and license management.",
      "Built reusable Blazor components integrated with APIs.",
      "Improved API performance by 80% using LINQ and parallel processing.",
    ],
    tech: [
      "ADO.NET",
      "SQL Server",
      "JWT",
      "Blazor",
      "LINQ",
      "Microsoft Graph API",
    ],
  },
  {
    id: 2,
    title: "React.js Developer Intern",
    company: "Akash Technolabs",
    tip: "Built Portfolio Site",
    startDate: "Jun 2023",
    endDate: "Dec 2023",
    location: "Ahmedabad, India",
    description: [
      "Built responsive React UIs with reusable components.",
      "Developed portfolio website showcasing projects and routing.",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Java Developer Intern",
    company: "PSA",
    tip: "First Backend Project",
    startDate: "Dec 2022",
    endDate: "May 2023",
    location: "Remote, India",
    description: [
      "Built blog platform using Spring Boot, Hibernate, MySQL, and JWT.",
      "Implemented role-based access and secured REST APIs.",
    ],
    tech: ["Spring Boot", "Hibernate", "MySQL", "JWT", "Java"],
  },
];

const freelance = [
  {
    id: 4,
    title: "Freelance Full Stack Developer",
    company: "Self Employed",
    tip: "Client-Focused Work",
    startDate: "Jan 2023",
    endDate: "Present",
    location: "Remote",
    description: [
      "Worked with multiple clients to build full-stack web applications.",
      "Built tools to automate client workflows, boosting efficiency.",
    ],
    tech: ["MERN Stack", "React", "Node.js", "MongoDB"],
  },
];

const personalProjects = [
  {
    id: 6,
    src: youtube,
    githubLink: "https://github.com/0Rohit2022/TubeTweets",
    projectName: "TubeTweets",
    tip: "Video Platform",
    description: [
      "YouTube clone with integrated comment system and video upload built using React and Node.js.",
    ],
    tech: ["React", "Node.js", "Express.js"],
  },
  {
    id: 7,
    src: tasktracker,
    githubLink: "https://github.com/0Rohit2022/Resume-Builder",
    projectName: "CVForge",
    tip: "Resume Tool",
    description: [
      "Resume builder platform with live preview using React, Redux, and Firebase.",
    ],
    tech: ["React", "Redux", "Firebase"],
  },
  {
    id: 8,
    src: blog,
    githubLink: "https://github.com/0Rohit2022/Thought-stream",
    projectName: "IdeaJET",
    tip: "Blog Platform",
    description: [
      "Blog platform with role-based access, built on Spring Boot, Hibernate, MySQL.",
    ],
    tech: ["Spring Boot", "Hibernate", "MySQL"],
  },
  {
    id: 9,
    src: chat,
    githubLink: "https://github.com/0Rohit2022/ChatZone",
    projectName: "ChatZone",
    tip: "Real-Time Chat",
    description: [
      "Real-time chat app using WebSockets and React.js with Node.js backend.",
    ],
    tech: ["WebSockets", "React", "Node.js"],
  },
];

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Experience Section */}
        <div className="pb-8 text-center">
          <h1 className="text-5xl font-bold inline border-b-4 border-gray-500">
            Experience
          </h1>
          <p className="text-xl text-gray-400 mt-4">
            A showcase of my professional journey and projects
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {experiences.map(
            (
              {
                id,
                title,
                company,
                tip,
                startDate,
                endDate,
                location,
                description,
                tech,
              },
              index
            ) => {
              const cardRef = useRef(null);
              const isVisible = useIntersectionObserver(cardRef);
              return (
                <div
                  key={id}
                  ref={cardRef}
                  className={`relative bg-gray-900 rounded-xl p-6 shadow-lg shadow-gray-700 hover:shadow-xl transition-shadow duration-300 ${
                    isVisible ? "animate-pop-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tip && (
                    <span className="absolute top-4 right-4 bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {tip}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-white">{title}</h3>
                  <p className="text-lg text-gray-300 mt-1">{company}</p>
                  <p className="text-sm text-gray-400">
                    {startDate} - {endDate} | {location}
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                    {description.map((item, index) => (
                      <li key={index} className="text-base">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {tech.map((t, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Freelance Section */}
        <div className="py-8 text-center">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Freelance
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {freelance.map(
            (
              {
                id,
                title,
                company,
                tip,
                startDate,
                endDate,
                location,
                description,
                tech,
              },
              index
            ) => {
              const cardRef = useRef(null);
              const isVisible = useIntersectionObserver(cardRef);
              return (
                <div
                  key={id}
                  ref={cardRef}
                  className={`relative bg-gray-900 rounded-xl p-6 shadow-lg shadow-gray-700 hover:shadow-xl transition-shadow duration-300 ${
                    isVisible ? "animate-pop-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tip && (
                    <span className="absolute top-4 right-4 bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {tip}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-white">{title}</h3>
                  <p className="text-lg text-gray-300 mt-1">{company}</p>
                  <p className="text-sm text-gray-400">
                    {startDate} - {endDate} | {location}
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                    {description.map((item, index) => (
                      <li key={index} className="text-base">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {tech.map((t, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Personal Projects Section */}
        <div className="py-8 text-center">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Personal Projects
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {personalProjects.map(
            (
              { id, src, githubLink, projectName, tip, description, tech },
              index
            ) => {
              const cardRef = useRef(null);
              const isVisible = useIntersectionObserver(cardRef);
              return (
                <div
                  key={id}
                  ref={cardRef}
                  className={`relative bg-gray-900 rounded-xl p-6 shadow-lg shadow-gray-700 hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row gap-6 ${
                    isVisible ? "animate-pop-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tip && (
                    <span className="absolute top-4 right-4 bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {tip}
                    </span>
                  )}
                  <img
                    src={src}
                    alt={projectName}
                    className="rounded-md w-full md:w-1/3 h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white">
                      {projectName}
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                      {description.map((item, index) => (
                        <li key={index} className="text-base">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {tech.map((t, index) => (
                        <span
                          key={index}
                          className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 font-bold mt-4 inline-block hover:underline"
                    >
                      Code ↗
                    </a>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
