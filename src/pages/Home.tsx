import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import StyledButton from "../components/ui/StyledButton"


export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="inicio" ref={ref} className="relative w-full h-screen flex flex-col justify-center">
      
      {/* Video de fondo */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-45 "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/video/video2.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Contenido */}
      <div className="relative z-10 px-14 sm:px-20 2xl:px-96 text-black">
        <motion.div
          className=" sm:w-3/4 xl:w-2/4 2xl:w-1/2   rounded-lg "
          initial={{ opacity: 0, x: -150 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-4xl 2xl:text-5xl font-bold ">
            Desarrollador Frontend & Diseñador Web
          </h1>
          <p className="text-lg sm:text-lg 2xl:text-xl mt-4 pb-8 text-justify ">
            Construyo experiencias digitales modernas, funcionales y centradas en el usuario. Me especializo en el desarrollo de interfaces atractivas y optimizadas para brindar la mejor experiencia posible.
          </p>
          <div className="flex flex-col sm:flex-row justify-between sm:w-[270px] xl:w-[270px]">
            <StyledButton 
              href="#proyectos" 
            
              className="mt-2 bg-transparent border border-black text-black px-4 py-3 w-32 sm:w-[130px] text-center rounded-md text-sm font-medium transition   hover:text-white "
            >
              Ver proyectos
            </StyledButton>
            <StyledButton
              href="#contacto" 
              
              className="mt-2 bg-transparent border border-black text-black px-4 py-3 w-32 sm:w-[130px] text-center rounded-md text-sm font-medium transition  hover:text-white "
            >
              Contactame
            </StyledButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
