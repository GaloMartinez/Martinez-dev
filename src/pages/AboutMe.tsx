import TechSlider from "@/components/TechSlider";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import StyledButton from "../components/ui/StyledButton"


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
    <section id="sobre mi" ref={ref} className="w-full py-20 h-screen bg-gray-100 flex justify-center px-14 sm:px-20 2xl:px-96 ">
      <div className="flex flex-col-reverse  xl:flex-row-reverse items-center gap-10 ">
        
       
        <motion.div
          className=" xl:w-1/2  "
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : scrollDirection === "up" ? { opacity: 0, y: -50 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-4xl 2xl:text-6xl font-bold text-black">Sobre mi</h1>
          <p className="mt-4 text-lg sm:text-lg 2xl:text-xl text-justify text-gray-600">
          Soy un <strong>desarrollador Frontend</strong> con experiencia en <strong>JavaScript, TypeScript, React y .NET</strong>, 
          especializado en la creación de páginas web dinámicas, intuitivas y eficientes. 
          Para el diseño y la maquetación, utilizo <strong>CSS, TailwindCSS y Bootstrap</strong>, 
          asegurando interfaces modernas y responsivas.
          </p>

           <TechSlider/>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
          <StyledButton 
              href="https://www.linkedin.com/in/galomartinez1/" 
              target="_blank" 
              rel="noopener noreferrer"
           
              className="flex items-center bg-white shadow-md rounded-md px-4 py-2 text-gray-900 hover:text-white    transition"
            >
              <FaLinkedin size={20} className="mr-2" />
              LinkedIn
            </StyledButton> 

            <StyledButton 
              href="https://github.com/GaloMartinez" 
              target="_blank" 
              rel="noopener noreferrer"
             
              className="flex items-center bg-white  shadow-md rounded-md px-4 py-2 text-gray-900  hover:text-white   transition"
            >
              <FaGithub size={20} className="mr-2" />
              GitHub
            </StyledButton> 
          </div>
         
        </motion.div>

        
        <motion.div
          className="xl:w-1/2 flex justify-center h-2/5 xl:h-auto 2xl:h-96"
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
