import React from "react";
import {
  Navbar,
  Home,
  About,
  Project,
  Contact,
  Footer,
} from "./component/index";

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
