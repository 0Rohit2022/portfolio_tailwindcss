import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Experience from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Cursor from "./components/Cursor";

const App = () => {
  return (
    <>
      <Navbar />
      <Cursor className="custom-cursor" />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <SocialLinks />
    </>
  );
};
export default App;
