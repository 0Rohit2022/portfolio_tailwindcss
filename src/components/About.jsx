import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        

        <br />

        <p className="text-xl">
          Passionate FullStack Web Developer Rohit, based in Ahmedabad, brings
          over a year of hands-on project development experience. With an
          entrepreneurial mindset and guided by influential mentors like Hitesh
          Choudhary, I excel in crafting compelling online brands. Committed to
          continuous learning and delivering top-notch web applications, I adapt
          seamlessly to diverse work environments, ensuring unparalleled
          results.
        </p>
       
        
      </div>
    </div>
  );
};

export default About;
