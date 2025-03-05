import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CardTitle } from "./ui/card";

const projects = [
  { title: "APM Abogados", description: "Tienda online con React y Firebase.", image: "/assets/img/APM-Abogados.png", link: "http://apmabogados.com.ar" },
  { title: "La bella pizza italiana", description: "Panel de administración con .NET.", image: "/assets/img/gastronomic-restaurant.png", link: "https://gastronomic-restaurant.netlify.app/" },
  { title: "Vexa Soluciones", description: "Mi portafolio web con Tailwind y React.", image: "/assets/img/vexa-software.png", link: "https://vexasoftware.netlify.app/" },
  { title: "Destileria Fernandez Latino", description: "Blog con Next.js y Markdown.", image: "/assets/img/proyecto-destileria.png", link: "https://destileriafernandezlatino.com" },
  { title: "Moviesflix", description: "Aplicación de chat en tiempo real con Socket.io.", image: "/assets/img/moviesflix.jpg", link: "https://trailersmoviesapp.netlify.app" },
  { title: "Detailing Shop", description: "App de productividad con TypeScript y Zustand.", image: "/assets/img/detailingshop.png", link: "https://detailingshop.netlify.app/" },
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
    <section ref={ref} className="py-16 px-72">
     
      {/* Contenedor de la grilla con animación en función del scroll */}
      <motion.div

        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : scrollDirection === "up" ? { opacity: 0, y: 50 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
 <h1 className="text-6xl font-bold text-black text-center mb-20">Mis Proyectos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-48 gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden group rounded-sm shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : scrollDirection === "up" ? { opacity: 0, y: -50 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Imagen de fondo */}

              < img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transition-all duration-300 group-hover:brightness-125"
              />


              {/* Overlay con info al hacer hover */}
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
