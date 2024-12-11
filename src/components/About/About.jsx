import React from 'react';
import { motion } from 'framer-motion';
import testimonialImage1 from '../../assets/testimonialImage1.jpg';
import testimonialImage2 from '../../assets/testimonialImage2.jpg';
import testimonialImage3 from '../../assets/testimonialImage3.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { number: "10+", text: "Years Experience" },
    { number: "500+", text: "Projects Completed" },
    { number: "100+", text: "Happy Clients" },
    { number: "50+", text: "Team Members" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We continuously explore cutting-edge technologies to deliver forward-thinking solutions."
    },
    {
      title: "Excellence",
      description: "Our commitment to quality ensures we deliver nothing but the best to our clients."
    },
    {
      title: "Collaboration",
      description: "We believe in working closely with our clients to achieve exceptional results."
    },
    {
      title: "Integrity",
      description: "Trust and transparency form the foundation of all our business relationships."
    }
  ];

  return (
    <div className="bg-white mt-20 md:mt-5">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-[#2D907C] text-white py-20"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Ideas Into Digital Reality
          </h1>
          <p className="text-xl max-w-2xl opacity-90">
            We are a team of passionate technologists dedicated to delivering innovative software solutions that drive business success.
          </p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At TechSolutions, we strive to empower businesses through technology. Our mission is to deliver innovative, scalable, and reliable software solutions that help our clients navigate the digital landscape and achieve their business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#2D907C] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-secondary"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
        <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Leadership</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
                <div className="h-48 bg-gray-200">
                <img
                    src={testimonialImage1}
                    alt="CEO"
                    className="w-full h-full object-cover"
                />
                </div>
                <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Michael Anderson</h3>
                <p className="text-[#2D907C] mb-4">Chief Executive Officer</p>
                <p className="text-gray-500 text-sm">
                    20+ years of experience in technology leadership and business strategy.
                </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
                <div className="h-48 bg-gray-200">
                <img
                    src={testimonialImage2}
                    alt="CTO"
                    className="w-full h-full object-cover"
                />
                </div>
                <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sarah Mitchell</h3>
                <p className="text-[#2D907C] mb-4">Chief Technology Officer</p>
                <p className="text-gray-500 text-sm">
                    15+ years of expertise in software architecture and innovation.
                </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
                <div className="h-48 bg-gray-200">
                <img
                    src={testimonialImage3}
                    alt="COO"
                    className="w-full h-full object-cover"
                />
                </div>
                <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">David Chen</h3>
                <p className="text-[#2D907C] mb-4">Chief Operations Officer</p>
                <p className="text-gray-500 text-sm">
                    18+ years of experience in operations and project management.
                </p>
                </div>
            </motion.div>
            </div>
        </div>
        </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-[#2D907C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help you achieve your technology goals.
          </p>
          <Link to={'/contact'}>
          <button className="bg-white text-[#2D907C] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            Contact Us
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;