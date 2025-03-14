import React from "react";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="w-full mt-28 bg-black text-white space-y-16 xl:space-y-0  py-12 xl:py-16 px-14 sm:px-20 2xl:px-96 flex flex-col xl:flex-row items-center justify-between "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      
      <motion.a
        href="#inicio"
        className="text-3xl w-[210px] flex flex-row justify-center xl:justify-start font-bold tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        GM.
      </motion.a>

      
      <motion.div
        className="flex space-x-6 text-gray-400 text-sm sm:text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {["Inicio", "Sobre mi", "Proyectos", "Contacto"].map((text, index) => (
          <motion.a
            key={index}
            href={`#${text.toLowerCase()}`}
            className="relative group"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            {text}
            <motion.span
              className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform"
            />
          </motion.a>
        ))}
      </motion.div>

    
      <motion.div
        className="flex space-x-6 text-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Tooltip />
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
