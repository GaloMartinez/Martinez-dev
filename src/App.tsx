import React from "react";
import Navbar from "../src/components/NavBar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Proyectos from "./pages/Proyectos";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <Home/>
      <AboutMe/>
      <Proyectos/>
      <Contact/>
      <Footer/>
      
    </div>
  );
};

export default App;