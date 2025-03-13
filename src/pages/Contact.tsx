import { motion, useInView } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StyledButton from "../components/ui/StyledButton"


const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const [scrollDirection, setScrollDirection] = useState("down");

  let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  



  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!form.current) return; 
  
    emailjs
      .sendForm(
        "service_ouqnegv",
        "template_kzfga72",
        form.current, 
        "OpnB1q9SZaAPuGkBQ"
      )
      .then(
        () => {
          toast.success("¡Mensaje enviado con éxito! ✅", {
            
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
  
          form.current?.reset(); 
        },
        (error) => {
          toast.error("❌ Ocurrió un error. Inténtalo de nuevo.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
  
          console.error("Error al enviar mensaje:", error);
        }
      );
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="flex justify-center items-center w-full py-16 h-screen px-14 sm:px-20 2xl:px-96 "
    >
      <div className="flex flex-col xl:flex-row justify-center items-center gap-10 w-full max-w-5xl">
      
        <motion.div
          className="w-full xl:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : scrollDirection === "up" ? { opacity: 0, x: -50 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/assets/img/ContactCoding.jpeg"
            alt="Contacto"
            className="rounded-lg shadow-md w-full h-60 sm:h-96 xl:h-auto object-cover "
          />
        </motion.div>

       
        <motion.div
          className="w-full xl:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : scrollDirection === "up" ? { opacity: 0, x: 50 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-4xl 2xl:text-6xl font-bold text-black">Contacto</h1>
          <p className="text-gray-600 mt-2 sm:mt-4 mb-6 text-lg sm:text-lg 2xl:text-xl">
            ¿Tienes algún proyecto en mente? Hagámoslo realidad.
          </p>

         
          <motion.div
            className="space-y-2 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-gray-600" />
              <p className="text-lg sm:text-lg xl:text-xl text-gray-700">+54 11 3791-8640</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-gray-600" />
              <p className="text-lg sm:text-lg xl:text-xl text-gray-700">galomartinez1@hotmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-gray-600" />
              <p className="text-lg sm:text-lg xl:text-xl text-gray-700">Buenos Aires, Argentina</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaLinkedin className="text-gray-600" />
              <a
                href="https://www.linkedin.com/in/galomartinez1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-lg xl:text-xl text-gray-700 hover:underline"
              >
                linkedin.com/in/galomartinez1/
              </a>
            </div>
          </motion.div>

          
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="sm:mt-14 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : scrollDirection === "up" ? { opacity: 0, y: 20 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex gap-2">
              <input type="text" name="from_name" placeholder="Nombre" className="w-1/2 p-3 text-sm border rounded-md bg-gray-100" required />
              <input type="email" name="from_email" placeholder="E-mail" className="w-1/2 p-3 text-sm border rounded-md bg-gray-100" required />
            </div>
            <textarea name="message" placeholder="Mensaje" className="w-full p-3 text-sm border rounded-md bg-gray-100 sm:h-28" required></textarea>

           
            <StyledButton 
              type="submit"
              className="w-full bg-white text-black font-semibold py-3 rounded-md  hover:text-white border border-black shadow-md"
             
             
            >
              Enviar mensaje
            </StyledButton>
          </motion.form>

          <ToastContainer />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
