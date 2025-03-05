import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Si scrollea más de 50px, cambia el estado
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`w-full fixed top-0 left-0 z-50 flex justify-between items-center px-72 transition-all duration-300 ${
        scrolled ? "h-14 bg-white shadow-md" : "h-16 bg-transparent"
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <a href="#home" className="text-3xl font-bold text-gray-900">GM.</a>
      <div className="space-x-8 text-lg text-gray-900 font-medium">
        <a href="#home" className="hover:text-[#547980] transition">Home</a>
        <a href="#about" className="hover:text-[#547980] transition">About</a>
        <a href="#projects" className="hover:text-[#547980] transition">Projects</a>
        <a href="#contact" className="hover:text-[#547980] transition">Contact</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
