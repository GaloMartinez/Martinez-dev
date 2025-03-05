import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="home"  ref={ref} className="w-full h-screen flex flex-col justify-center">
      <div className="px-72">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -150 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-6xl font-bold text-black">
            Web Developer & Designer
          </h1>
          <p className="text-xl text-gray-600 mt-4 pb-8">
            Creating modern and functional web experiences with attention to detail and
            user-centered design.
          </p>
          <a href="#projects" className="mt-6 mr-6 bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition">
            View Projects
          </a>
          <a href="#contact" className="mt-6 bg-black text-white  px-8 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition">
            Contactame
          </a>
        </motion.div>
      </div>
    </section>
  );
}
