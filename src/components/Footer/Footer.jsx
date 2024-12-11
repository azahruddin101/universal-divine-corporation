import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMailUnreadSharp } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Universal Divine Corporation</h1>
            <p className="text-dark2">
            Welcome to Universal Divine Corporation:  Your trusted partner for innovative software solutions. Empowering businesses with cutting-edge technology.
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Services</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                  IT Services & Software Solutions
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                  Digital Marketing & Lead Generation
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                  Architectural & Construction Services
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                  Media Production Services
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                  Event Management & Training
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            
            {/* social icons */}
            <div className="flex space-x-6 py-3">
              <a href="#">
                <FaWhatsapp className="cursor-pointer hover:text-[#2D907C] hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <FaInstagram className="cursor-pointer hover:text-[#2D907C] hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <TbWorldWww className="cursor-pointer hover:text-[#2D907C] hover:scale-105 duration-200" />
              </a>
              <a href="mailto:  azhruddin986@gmail.com">
                <IoMailUnreadSharp  className="cursor-pointer hover:text-[#2D907C] hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
