import React from 'react';
import { motion } from 'framer-motion';

const ITServicesIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 mb-4">
    <rect x="10" y="20" width="80" height="50" rx="2" fill="#4B5563" />
    <rect x="12" y="22" width="76" height="46" rx="1" fill="#E5E7EB" />
    <text x="25" y="50" fontFamily="monospace" fontSize="14" fill="#4B5563">&lt;/&gt;</text>
    <circle cx="65" cy="45" r="10" fill="#3B82F6" opacity="0.8" />
    <rect x="35" y="70" width="30" height="5" fill="#4B5563" />
    <rect x="45" y="75" width="10" height="5" fill="#4B5563" />
  </svg>
);

const DigitalMarketingIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 mb-4">
    <circle cx="50" cy="50" r="40" fill="#E5E7EB" />
    <circle cx="50" cy="50" r="30" fill="#9CA3AF" />
    <circle cx="50" cy="50" r="20" fill="#EF4444" />
    <path d="M85 15 L65 35 L75 35 L75 45 L95 25 L85 25 Z" fill="#3B82F6" />
  </svg>
);

const ArchitectureIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 mb-4">
    <path d="M20 80 L50 20 L80 80 Z" fill="#9CA3AF" />
    <rect x="45" y="60" width="10" height="20" fill="#4B5563" />
    <rect x="35" y="40" width="8" height="8" fill="#E5E7EB" />
    <rect x="57" y="40" width="8" height="8" fill="#E5E7EB" />
    <line x1="10" y1="85" x2="90" y2="85" stroke="#3B82F6" strokeWidth="2" />
    <line x1="15" y1="82" x2="15" y2="88" stroke="#3B82F6" strokeWidth="2" />
    <line x1="85" y1="82" x2="85" y2="88" stroke="#3B82F6" strokeWidth="2" />
  </svg>
);

const MediaProductionIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 mb-4">
    <rect x="20" y="30" width="60" height="40" rx="5" fill="#4B5563" />
    <circle cx="50" cy="50" r="15" fill="#9CA3AF" />
    <circle cx="50" cy="50" r="10" fill="#374151" />
    <rect x="65" y="25" width="10" height="5" fill="#9CA3AF" />
    <circle cx="75" cy="40" r="3" fill="#EF4444" />
    <rect x="15" y="35" width="5" height="30" fill="#374151" />
  </svg>
);

const EventManagementIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 mb-4">
    <rect x="20" y="25" width="60" height="55" rx="3" fill="#E5E7EB" />
    <rect x="20" y="20" width="60" height="10" rx="3" fill="#EF4444" />
    <rect x="30" y="40" width="10" height="10" fill="#4B5563" />
    <rect x="45" y="40" width="10" height="10" fill="#4B5563" />
    <rect x="60" y="40" width="10" height="10" fill="#4B5563" />
    <rect x="30" y="55" width="10" height="10" fill="#4B5563" />
    <rect x="45" y="55" width="10" height="10" fill="#3B82F6" />
    <rect x="60" y="55" width="10" height="10" fill="#4B5563" />
  </svg>
);

const ServiceCard = ({ title, description, Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="bg-white rounded-lg shadow-lg text-lg overflow-hidden hover:shadow-xl hover:bg-secondary hover:text-xl transition-shadow duration-300 p-6"
  >
    <div className="flex flex-col items-center text-center">
      <Icon />
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const ServicesGrid = () => {
    const services = [
        {
          title: "IT Services & Software Solutions",
          description: "Custom software development, cloud solutions, and IT consulting services tailored to your business needs.",
          Icon: ITServicesIcon
        },
        {
          title: "Digital Marketing & Lead Generation",
          description: "Strategic digital marketing campaigns and lead generation services to grow your business online.",
          Icon: DigitalMarketingIcon
        },
        {
          title: "Architectural & Construction Services",
          description: "Professional architectural design and construction management for commercial and residential projects.",
          Icon: ArchitectureIcon
        },
        {
          title: "Media Production Services",
          description: "High-quality video production, photography, and multimedia content creation services.",
          Icon: MediaProductionIcon
        },
        {
          title: "Event Management & Training",
          description: "Comprehensive event planning, coordination, and professional training programs.",
          Icon: EventManagementIcon
        }
      ];

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
        <p className="text-4xl font-bold text-left pb-10 ">Services We Provide</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            description={service.description}
            Icon={service.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;