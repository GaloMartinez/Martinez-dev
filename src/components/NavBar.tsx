import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`w-full fixed top-0 left-0 z-50 flex justify-between items-center px-10 sm:px-20 2xl:px-96 transition-all duration-300 ${
        scrolled ? "h-14 bg-white shadow-md" : "h-16 bg-transparent"
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo */}
      <a href="#home" className="text-3xl font-bold text-gray-900">
        GM.
      </a>

      {/* Menú principal en pantallas grandes */}
      <div className="hidden lg:flex space-x-8 text-lg text-gray-900 font-medium">
        {["Home", "About", "Projects", "Contact"].map((text, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden h-6 flex justify-center items-center"
          >
            <motion.a
              href={`#${text.toLowerCase()}`}
              className="block hover:text-[#40bfc4] transition relative"
              initial={{ y: 0 }}
              whileHover={{ y: "-10%" }}
              transition={{ duration: 0.1 }}
            >
              {text}
            </motion.a>

            <motion.a
              href={`#${text.toLowerCase()}`}
              className="block hover:text-[#40bfc4] transition absolute top-full"
              initial={{ y: "100%" }}
              whileHover={{ y: "0%" }}
              transition={{ duration: 0.1 }}
            >
              {text}
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      <div className="lg:hidden relative">
        <Menu>
          {({ open }) => (
            <>
              {/* Botón del menú */}
              <MenuButton className="p-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition">
                <Bars3Icon className="w-6 h-6" />
              </MenuButton>

              {/* Menú desplegable con animación */}
              <AnimatePresence>
                {open && (
                  <MenuItems
                    as={motion.div}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg border border-gray-200 bg-white shadow-md focus:outline-none"
                  >
                    {["Home", "About", "Projects", "Contact"].map((item, index) => (
                      <MenuItem key={index}>
                        {({ active }) => (
                          <motion.a
                            href={`#${item.toLowerCase()}`}
                            className={`block px-4 py-2 text-gray-900 ${
                              active ? "bg-gray-100" : ""
                            }`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.1 }}
                          >
                            {item}
                          </motion.a>
                        )}
                      </MenuItem>
                    ))}
                  </MenuItems>
                )}
              </AnimatePresence>
            </>
          )}
        </Menu>
      </div>
    </motion.nav>
  );
};

export default Navbar;
