import React, { useState } from "react";
import BannerPng from "../../assets/banner2.svg";
import { motion } from "framer-motion";
import ContactForm from "../Forms/ContactForm";

const Banner2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
            Empower Your Future <br /> with Us
            </h1>
            <p className="text-dark2">
            Join our community of innovators and unlock your full potential. Learn from industry experts, collaborate on exciting projects, and build the future you envision. Together, we'll turn your ideas into reality.
            </p>
            <div>
              
              <button
                onClick={openModal}
                className="primary-btn text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Contact Us
              </button>

              {/* Modal */}
              {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                  <ContactForm onClose={closeModal} />
                </div>
              )}
            </div>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
