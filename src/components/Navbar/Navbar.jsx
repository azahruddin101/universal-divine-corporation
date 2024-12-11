import React,{useState} from "react";
import { IoMdMenu } from "react-icons/io";
import { motion, useAnimation } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    
    controls.start('visible');
  };
  const variants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <nav className="relative z-20 mb-5">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        
        <div>
          <p className="hidden md:block">
          <span className="font-bold text-2xl ">Universal Divine Corporation</span>
          </p>
          <p>
            <span className="block font-bold text-2xl md:hidden">UDC</span>
          </p>
        </div>
        
        <div className="hidden md:block">
          <ul className="flex items-center gap-3 text-xl font-semibold">
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li className="primary-btn"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="md:hidden">
          <div className="relative">
          {
            isMenuOpen ? (
              <RxCross2 className="text-3xl cursor-pointer" onClick={menuToggle} />
            ) : (
              <IoMdMenu className="text-3xl cursor-pointer" onClick={menuToggle} />
            )
          }
        </div>
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <motion.div
          className="absolute top-24 right-3 sm:right-20"
          initial="hidden"
          animate={isMenuOpen ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ staggerChildren: 0.2 }} // Stagger the animations
        >
      <ul className="flex flex-wrap w-full items-center gap-2 py-1 px-8 text-white z-20  rounded text-xl font-semibold bg-[#2d907c]">
        <motion.li
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <span><Link to="/">Home</Link></span>
        </motion.li>
        <motion.li
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <span><Link to="/services">Services</Link></span>
        </motion.li>
        <motion.li
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <span><Link to="/about">About</Link></span>
        </motion.li>
        <motion.li
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <span><Link to="/contact">Contact</Link></span>
        </motion.li>
      </ul>
    </motion.div>
        </div>
        </div>
        
      </motion.div>
    </nav>
  );
};

export default Navbar;
