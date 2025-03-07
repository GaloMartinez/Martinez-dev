import TechSlider from "@/components/TechSlider";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const AboutMe: React.FC = () => {
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
    <section id="sobre mi" ref={ref} className="w-full py-16 h-screen bg-gray-100 flex justify-center  ">
      <div className="flex flex-col-reverse  xl:flex-row-reverse items-center gap-10 px-14 sm:px-20 2xl:px-96">
        
       
        <motion.div
          className=" xl:w-1/2  "
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : scrollDirection === "up" ? { opacity: 0, y: -50 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl 2xl:text-6xl font-bold text-black">Sobre Mi</h1>
          <p className="mt-4 text-lg sm:text-lg 2xl:text-xl text-gray-600">
            Soy un <strong>desarrollador Frontend</strong> con experiencia en <strong>JavaScript, TypeScript, React y .NET</strong>,
            especializado en la creación de páginas web dinámicas, intuitivas y eficientes.
            Me apasiona desarrollar soluciones digitales con un enfoque en el rendimiento,
            la accesibilidad y una excelente experiencia de usuario.
          </p>

          
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <motion.a 
              href="https://www.linkedin.com/in/galomartinez1/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01 }}
              className="flex items-center bg-white shadow-md rounded-lg px-4 py-2 text-gray-900 hover:bg-white hover:text-black  border hover:border-black transition"
            >
              <FaLinkedin size={20} className="mr-2" />
              LinkedIn
            </motion.a>

            <motion.a 
              href="https://github.com/GaloMartinez" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01 }}
              className="flex items-center bg-white shadow-md rounded-lg px-4 py-2 text-gray-900 hover:bg-white hover:text-black  border hover:border-black transition"
            >
              <FaGithub size={20} className="mr-2" />
              GitHub
            </motion.a>
          </div>
          <TechSlider/>
        </motion.div>

        
        <motion.div
          className="xl:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : scrollDirection === "up" ? { opacity: 0, scale: 0.8 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="/assets/img/img-aboutme.jpg"
            alt="About me"
            className=" w-full h-150 object-cover rounded-lg shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;
