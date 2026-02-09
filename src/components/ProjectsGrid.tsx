import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CardTitle } from "./ui/card";

const projects = [
  { title: "Solstice Air", description: "Broker de vuelos privados - Typescript, React y TailwindCss.", image: "/assets/img/solstice-air.png", link: "https://www.solsticeaircharter.com/" },
  { title: "Casa estudio Bilbilian", description: "Estudio de abogados - Typescript, React, TailwindCss.", image: "/assets/img/casa-estudio.png", link: "https://casadeestudio.org/" },
  { title: "Golf Club Eventos", description: "Salon de eventos - Typescript, React y TailwindCss.", image: "/assets/img/golf-club-eventos.png", link: "https://golfclubeventos.com.ar/" },
  { title: "APM Abogados", description: "Estudio de abogados - Typescript, React, TailwindCss.", image: "/assets/img/APM-Abogados.png", link: "http://apmabogados.com.ar" },
  { title: "Consumidores Damnificados", description: "Asociacion civil - Typescript, React, TailwindCss.", image: "/assets/img/Consumidores-damnificados.png", link: "https://consumidoresdamnificados.org.ar/" },
  { title: "Espumas Industriales", description: "Espumas Industriales - Typescript, React y Tailwindcss.", image: "/assets/img/espumas-industriales.png", link: "https://www.espumasindustriales.com.ar/" },
 
 
  
];

const ProjectsGrid = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;


      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} className="py-36 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28">

   
      <motion.div

        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : scrollDirection === "up" ? { opacity: 0, y: 50 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-4xl sm:text-4xl 2xl:text-6xl font-bold text-black text-center mb-20">Mis proyectos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 2xl:gap-12 gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden group rounded-sm shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : scrollDirection === "up" ? { opacity: 0, y: -50 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
             

              < img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transition-all duration-300 group-hover:brightness-125"
              />


              
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 p-4 text-center" >
                  <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                  <p className="text-sm">{project.description}</p>
                </div>
              </a>
            </motion.div>

          ))}
        </div>
      </motion.div>
    </section >
  );
};

export default ProjectsGrid;
