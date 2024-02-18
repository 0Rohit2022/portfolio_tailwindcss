import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
     const links = [
       {
         id: 1,
         child: (
           <>
             LinkedIn <FaLinkedin size={30} />
           </>
         ),
         href: "https://in.linkedin.com/in/rohit-kumar-a56085237",
         style: "rounded-tr-md",
       },
       {
         id: 2,
         child: (
           <>
             GitHub <FaGithub size={30} />
           </>
         ),
         href: "https://github.com/0Rohit2022",
       },
       {
         id: 3,
         child: (
           <>
             Mail <HiOutlineMail size={30} />
           </>
         ),
         href: "https://www.gmail.com",
       },
       {
         id: 4,
         child: (
           <>
             Resume <BsFillPersonLinesFill size={30} />
           </>
         ),
         style: "rounded-br-md",
         href: "./Rohit_resume.pdf",
         download: true,
       },
     ];
  return (
    <div className="hidden flex-col top-[35%] left-0 fixed lg:flex">
      <ul>
        {links.map((link) => (
          <li key={link.id} className={"flex justify-between items-center w-40 h-14  px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " "+ link.style}>
            <a
              href={link.href ? link.href :"/"}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
