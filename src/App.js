import React from "react";

import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Project from "./pages/project/Project";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
