import { motion, useInView } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

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

  return (
    <section
    id="contact"
      ref={ref}
      className="flex flex-col xl:flex-row items-center gap-10 px-14 sm:px-20 2xl:px-96  "
    >
      {/* Imagen */}
      <motion.div
        className="w-full   "
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : scrollDirection === "up" ? { opacity: 0, x: -50 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src="/assets/img/ContactCoding.jpg"
          alt="Contacto"
          className="rounded-lg shadow-md w-full h-64 xl:h-auto  object-cover"
        />
      </motion.div>

      {/* Formulario */}
      <motion.div
        className="w-full "
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : scrollDirection === "up" ? { opacity: 0, x: 50 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-4xl sm:text-5xl 2xl:text-6xl font-bold text-black">Contacto</h1>
        <p className="text-gray-600 mt-2 sm:mt-4 mb-6 text-lg sm:text-lg 2xl:text-xl">
          ¿Tienes algún proyecto en mente? Hagámoslo realidad.
        </p>

        {/* Datos de contacto */}
        <motion.div
          className="space-y-2 mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center space-x-3 ">
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

        {/* Campos del formulario */}
        <motion.form
          className="sm:mt-14 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : scrollDirection === "up" ? { opacity: 0, y: 20 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Nombre"
              className="w-1/2 p-3 text-sm border rounded-md bg-gray-100"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-1/2 p-3 text-sm border rounded-md bg-gray-100"
            />
          </div>
          <textarea
            placeholder="Mensaje"
            className="w-full p-3 text-sm border rounded-md bg-gray-100 sm:h-28"
          ></textarea>

          {/* Botón de envío */}
          <motion.button
            type="submit"
            className="w-full bg-black text-white font-semibold py-3 rounded-md   hover:bg-white hover:text-black  border hover:border-black transition"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar mensaje
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
