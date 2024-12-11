import React from "react";
import { GiModernCity } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { MdOutlineCampaign } from "react-icons/md";

const ServicesData = [
  {
    id: 1,
    title: "IT Services & Software Solutions",
    link: "#",
    icon: <FaLaptopCode />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Digital Marketing & Lead Generation",
    link: "#",
    icon: <MdOutlineCampaign />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Architectural & Construction Services",
    link: "#",
    icon: <GiModernCity />,
    delay: 0.4,
  },
  
  {
    id: 4,
    title: "Media Production Services",
    link: "#",
    icon: <IoPulseOutline />,
    delay: 0.6,
  },
  {
    id: 5,
    title: "Event Management & Training",
    link: "#",
    icon: <FaCalendarAlt />,
    delay: 0.2,
  },
  {
    id: 6,
    title: "24/7 support",
    link: "#",
    icon: <BiSupport />,
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
        Our Offerings
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-[#2D907C] hover:scale-110 duration-300  hover:shadow-[0px_10px_8px_-7px_#05584C]"
            >
              <div className="text-4xl mb-4"> {service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
