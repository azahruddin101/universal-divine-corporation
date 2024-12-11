import React,{useState, useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../../assets/blob.svg";
import images from "../../assets/heroImages";
import { animate, motion } from "framer-motion";
import { Link } from "react-router-dom";

export const FadeUp = (delay) => {
  
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};





const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  // Update the index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to 0 after the last image
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-light overflow-hidden relative z-1">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">

        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug"
            >
              From {" "}
              <span className="text-[#FF6584]">Concept to Creation</span> your full service digital partner
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
                <Link to={"/contact"}>
              <button className="primary-btn flex items-center gap-2 group">
                Get Started
                
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              
              </button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        <div className="flex justify-center items-center">
        <motion.img
          key={currentIndex} // Add `key` to trigger re-animation on image change
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          src={images[currentIndex]} // Use the current image
          alt={`Banner ${currentIndex + 1}`}
          className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
        />
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
