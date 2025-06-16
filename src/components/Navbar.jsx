import React, { useEffect, useState } from "react";
import { LuCode2 } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("#000000");
  const [bubbles, setBubbles] = useState([]);

  const generateRandomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(generateRandomColor());
    }, 1000);
    return () => clearInterval(interval);
  }, [color]);

  const [hamBurger, setHamBurger] = useState(false);

  const links = [
    { id: "home", links: "home" },
    { id: "about", links: "about" },
    { id: "experience", links: "experience" },
    { id: "skills", links: "skills" },
    { id: "contact", links: "contact" },
  ];

  const closeHamburger = () => {
    setHamBurger(false);
  };

  const handleLinkClick = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setBubbles((prev) => [...prev, { id: Date.now(), x, y }]);
    setTimeout(() => {
      setBubbles((prev) => prev.filter((bubble) => bubble.id !== id));
    }, 1000); // Remove animation after 1s
  };

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4 z-[1000]">
      <div className="flex">
        <LuCode2
          className="text-4xl sm:mr-4 mr-2"
          style={{ color: generateRandomColor() }}
        />
        <h1 className="text-5xl font-signature ml-2">Rohit</h1>
      </div>

      <ul className="hidden md:flex">
        <div className="flex items-center space-x-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-100"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <p className="text-green-500 text-sm">Available</p>
        </div>

        {links.map(({ id, links }) => (
          <li
            key={id}
            className="relative px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-white duration-200"
            onClick={(e) => handleLinkClick(e, id)}
          >
            <Link to={links} smooth duration={500} offset={-80}>
              {links === "experience" ? "Experience" : links}
            </Link>
            {bubbles.map(
              (bubble) =>
                bubble.id === id && (
                  <div
                    key={bubble.id}
                    className="absolute rounded-full bg-cyan-500/50 animate-bubble"
                    style={{
                      left: `${bubble.x}px`,
                      top: `${bubble.y}px`,
                      width: "20px",
                      height: "20px",
                    }}
                  />
                )
            )}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setHamBurger(!hamBurger)}
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
      >
        {hamBurger ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {hamBurger && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
          {links.map(({ id, links }) => (
            <li
              key={id}
              className="relative px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-white duration-200"
              onClick={(e) => {
                handleLinkClick(e, id);
                setNav(!nav);
                closeHamburger();
              }}
            >
              <Link to={links} smooth duration={500} offset={-80}>
                {links === "experience" ? "Experience" : links}
              </Link>
              {bubbles.map(
                (bubble) =>
                  bubble.id === id && (
                    <div
                      key={bubble.id}
                      className="absolute rounded-full bg-cyan-500/50 animate-bubble"
                      style={{
                        left: `${bubble.x}px`,
                        top: `${bubble.y}px`,
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  )
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
  