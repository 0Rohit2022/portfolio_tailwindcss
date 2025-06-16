import React, { useRef } from "react";
import useIntersectionObserver from "../../public/js/IntersectObserver";

const About = () => {
  const cardRef = useRef(null);
  const isVisible = useIntersectionObserver(cardRef);

  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </h1>
          <p className="text-xl text-gray-400 mt-4">
            A glimpse into my journey as a FullStack Developer
          </p>
        </div>
        <div
          ref={cardRef}
          className={`relative bg-gray-900 rounded-xl p-8 shadow-lg shadow-gray-700 hover:shadow-xl transition-shadow duration-300 ${
            isVisible ? "animate-pop-up" : "opacity-0"
          }`}
        >
          <span className="absolute top-4 right-4 bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            My Story
          </span>
          <div className="space-y-6">
            <p className="text-xl text-gray-200">
              I am a passionate FullStack Developer with hands-on experience in
              building scalable web applications, REST APIs, and
              cloud-integrated systems. My strength lies in writing clean,
              maintainable code while ensuring performance and scalability.
            </p>
            <p className="text-xl text-gray-200">
              With real-world project experience across multiple internships and
              my current role, I’ve worked on full lifecycle development — from
              database design, backend logic, API creation, to frontend UI
              development using React, Java, .NET, Node.js, and Azure. I believe
              in continuous learning, adapting quickly to new technologies, and
              delivering efficient solutions that help businesses scale.
            </p>
            <p className="text-xl text-gray-200">
              I enjoy solving complex problems, learning advanced system
              designs, and building real products that make a difference. My
              goal is to keep growing as a developer while contributing to
              impactful software solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
