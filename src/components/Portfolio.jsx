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
    location: "Bangalore,Karnataka India",
    description: [
      "Management System: Built a web application to manage institutional data, including students, teachers, and administrators, with features like event scheduling, user registration etc.",
      "Optimized API Performance: Reduced response times from 10–30s to 3–4s using LINQ and parallel processing for bulk operations.",
      "Microservices Architecture: Developed REST APIs by  modularizing  service-level  APIs  and  consolidating  logic  in  an API Gateway using ADO.NET and MS SQL Stored procedures and JWT for secure API access",
      "Blazor Development: Created reusable Blazor components and integrated Web APIs in Blazor WebAssembly.",
      "Graph API Implementation: Built an API with Microsoft Graph API for user creation and license assignment via SKUID, integrating with domain management",
      "Collaborative API Development and Integration: Collaborated with another company to build and integrate APIs, ensuring seamless interaction between systems.",
      "Admin Panel Development: Developed specialized admin interfaces for data verification and compliance across multiple platforms.",
      "Deployment : Deployed  APIs on  Azure  services and  virtual  machines , ensuring scalability and reliability. ",
    ],
    tech: [
      "ADO.NET",
      "SQL Server",
      "ASP.NET",
      "ASP.NET CORE",
      "JWT",
      "Blazor",
      "LINQ",
      "Microsoft Graph API",
      "Azure",
      "VM",
    ],
  },
  {
    id: 2,
    title: "React.js Developer Intern",
    company: "Akash Technolabs",
    tip: "Built Portfolio Site",
    startDate: "Jun 2023",
    endDate: "Dec 2023",
    location: "Ahmedabad, Gujarat India",
    description: [
      "Built responsive React UIs with reusable components.",
      "Developed portfolio website showcasing projects and routing.",
    ],
    tech: ["React", "JavaScript", "HTML", "Tailwind CSS", "API"],
  },
  {
    id: 3,
    title: "Java Developer Intern",
    company: "PSA",
    tip: "Second Backend Project",
    startDate: "Dec 2022",
    endDate: "May 2023",
    location: "Bangalore, Karnataka India",
    description: [
      "Built and enhanced a blog platform with features like JWT-based authentication, role management, and pagination.",
      "Developed REST APIs using Java, Spring Boot, Hibernate, and MySQL, ensuring seamless integration and optimized performance. ",
      "Optimized REST APIs for seamless integration and performance.",
    ],
    tech: [
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "JWT",
      "Java",
      "Spring Security",
      "JDBC",
    ],
  },
  {
    id: 4,
    title: "NodeJS Developer Intern",
    company: "Akash Technolabs",
    tip: "First Backend Project",
    startDate: "Jan 2022",
    endDate: "May 2022",
    location: "Ahmedabad, Gujarat India",
    description: [
      "Collaborated in an 8-member team to develop a College Management System with Node.js and Express.js, following the MVC architecture.",
      "Built REST APIs for key modules, ensuring scalability and seamless integration. Frontend designed with HTML5, CSS3 and Bootstrap.",
    ],
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "Node JS",
      "Express Js",
      "ES6",
      "MySQL",
      "JQuery",
    ],
  },
];


const personalProjects = [
  {
    id: 6,
    src: youtube,
    githubLink: "https://github.com/0Rohit2022/TubeTweets",
    projectName: "TubeTweets",
    tip: "Video & Social Platform",
    description: [
      "Developed a YouTube-inspired video platform with Twitter-like tweet functionality, featuring secure video uploads and real-time commenting using Node.js and React.",
      "Implemented user authentication, profile management, and channel subscriptions with JWT and MongoDB, integrated with Cloudinary for media storage.",
      "Designed efficient REST APIs, achieving 30% faster response times through optimized database queries and caching.",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT"],
  },
  {
    id: 7,
    src: tasktracker,
    githubLink: "https://github.com/0Rohit2022/Resume-Builder",
    projectName: "CVForge",
    tip: "Resume Builder",
    description: [
      "Built a dynamic resume builder with real-time previews, enabling users to create professional resumes with customizable templates using React and Redux.",
      "Integrated MongoDB with Node.js and Express.js for secure storage and retrieval of user data, ensuring seamless CRUD operations.",
      "Optimized frontend performance by implementing lazy loading and state management, reducing load times by 25%.",
    ],
    tech: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "CSS"],
  },
  {
    id: 8,
    src: blog,
    githubLink: "https://github.com/0Rohit2022/Thought-stream",
    projectName: "IdeaJET",
    tip: "Blog Platform",
    description: [
      "Developed a feature-rich blogging platform with Spring Boot and Hibernate, supporting role-based authentication and real-time post interactions.",
      "Implemented MySQL database with JDBC for efficient data management, enabling scalable post and comment systems.",
      "Enhanced user experience with responsive design and RESTful APIs, achieving a 40% increase in user engagement.",
    ],
    tech: ["Spring Boot", "Hibernate", "MySQL", "JDBC", "Java"],
  },
  {
    id: 9,
    src: chat,
    githubLink: "https://github.com/0Rohit2022/ChatZone",
    projectName: "ChatZone",
    tip: "Real-Time Chat",
    description: [
      "Created a real-time chat application using Java and WebSockets, supporting instant messaging and group chat functionalities.",
      "Designed a scalable server architecture to handle concurrent users, ensuring low-latency communication with minimal resource usage."
    ],
    tech: ["Java", "WebSockets", "Spring Boot"],
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
