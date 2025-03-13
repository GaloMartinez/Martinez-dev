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
      className={`w-full fixed top-0 left-0 z-50 flex justify-between items-center px-14 sm:px-20 2xl:px-96 transition-all duration-300 ${
        scrolled ? "h-14 bg-white shadow-md" : "h-16 bg-transparent"
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* LOGO */}
      <a href="#inicio" className="text-3xl font-bold text-gray-900">
        GM.
      </a>

      {/* NAV LINKS */}
      <div className="hidden lg:flex space-x-8 text-lg font-medium">
        {["Inicio", "Sobre mi", "Proyectos", "Contacto"].map((text, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden h-6 flex justify-center items-center"
          >
            <motion.a
              href={`#${text.toLowerCase()}`}
              className={`block transition relative ${
                scrolled
                  ? "text-gray-900 hover:text-[#40aac4]"
                  : "text-black hover:text-white"
              }`}
              initial={{ y: 0 }}
              whileHover={{ y: "-10%" }}
              transition={{ duration: 0.1 }}
            >
              {text}
            </motion.a>

            <motion.a
              href={`#${text.toLowerCase()}`}
              className={`block transition absolute top-full ${
                scrolled
                  ? "text-gray-900 hover:text-[#40aac4]"
                  : "text-black hover:text-white"
              }`}
              initial={{ y: "100%" }}
              whileHover={{ y: "0%" }}
              transition={{ duration: 0.1 }}
            >
              {text}
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* MOBILE MENU */}
      <div className="lg:hidden relative">
        <Menu>
          {({ open }) => (
            <>
              <MenuButton
                className={`p-2 rounded-md transition border ${
                  scrolled
                    ? "bg-transparent text-black border-none hover:bg-white hover:text-[#40aac4]"
                    : "bg-transparent text-black border-none  hover:text-white"
                }`}
              >
                <Bars3Icon className="w-6 h-6" />
              </MenuButton>

              <AnimatePresence>
                {open && (
                  <MenuItems
                    as={motion.div}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg border border-gray-200 bg-white shadow-md focus:outline-none"
                  >
                    {["Inicio", "Sobre mi", "Proyectos", "Contacto"].map(
                      (item, index) => (
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
                      )
                    )}
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
