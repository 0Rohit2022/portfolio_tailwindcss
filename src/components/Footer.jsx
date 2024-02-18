import React from "react";
import { LuCode2 } from "react-icons/lu";

const Footer = () => {
    const currentYear = new Date(Date.now()).getFullYear();
  return (
    <footer className="bg-gradient-to-t from-black to-gray-800 py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="flex gap-2 text-sm items-center font-semibold hover:underline cursor-pointer text-white text-center">
            <LuCode2 className={`text-3xl`} />
            Copyright ©{currentYear} - Rohit
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
