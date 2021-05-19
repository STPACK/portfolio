import React from "react";

import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Home from "./component/Home/Home";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Project from "./component/project/Project";

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
