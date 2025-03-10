import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="inicio" ref={ref} className="w-full h-screen flex flex-col justify-center">
      <div className=" px-14 sm:px-20 2xl:px-96">
        <motion.div
          className="sm:w-3/4 2xl:w-1/2"
          initial={{ opacity: 0, x: -150 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl 2xl:text-5xl font-bold text-black">
          Desarrollador Frontend & Diseñador Web
          </h1>
          <p className="text-lg sm:text-lg 2xl:text-xl text-gray-600 mt-4 pb-8">
          Construyo experiencias digitales modernas, funcionales y centradas en el usuario. Me especializo en el desarrollo de interfaces atractivas y optimizadas para brindar la mejor experiencia posible.
          </p>
          <div className="flex flex-col sm:flex-row justify-between sm:w-[270px]  xl:w-[270px]">
            <motion.a href="#proyectos" 
            whileHover={{ scale: 1.01 }}
            className="mt-2 bg-black text-white px-4 py-3 w-32 sm:w-[130px] text-center rounded-md text-sm font-medium hover:bg-white hover:text-black transition border hover:border-black">
              Ver Proyectos
            </motion.a>
            <motion.a href="#contacto" 
            whileHover={{ scale: 1.01 }}
            className="mt-2 bg-black text-white px-4 py-3 w-32 sm:w-[130px] text-center rounded-md text-sm font-medium hover:bg-white hover:text-black transition border hover:border-black">
              Contactame
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
