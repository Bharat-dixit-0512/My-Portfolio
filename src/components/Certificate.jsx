import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Certificate data
const certificates = [
  {
    id: 1,
    title: 'Deloitte Virtual Experience Program Certificate',
    description: 'Completed Deloitte tech simulation with coding task expertise.',
    badge: '🎓 Virtual Internship',
    image: '/deloite2.jpg',
  },
  {
    id: 2,
    title: 'Full Stack Web Development Participation Certificate',
    description: 'Completed Coding Blocks course at GLA University, Mathura.',
    badge: '🏅 Participation',
    image: '/certificate.jpg',
  },
  {
    id: 3,
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    description: 'Certified in AI foundations on Oracle Cloud Infrastructure, August 2025.',
    badge: '🏅 Participation',
    image: '/oracle1.jpg',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const FormCertificate = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-20">
      {/* Header */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent drop-shadow-[0px_0px_8px_rgba(255,0,0,0.8)] transition-transform duration-300 hover:scale-105">
          Achievements
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-400 italic">
          A glimpse into my journey of learning and excellence.
        </p>
      </motion.div>

      {/* Certificate Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full  max-w-6xl min-h-90 px-2"
      >
        {certificates.map(({ id, title, description, badge, image }) => (
          <motion.div
            key={id}
            variants={cardVariants}
            className="relative bg-white/10 border border-gray-300 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-400 overflow-hidden"
          >
            <div
              className="w-full h-48 overflow-hidden cursor-pointer"
              onClick={() => setActiveImage(image)}
            >
              <img
                src={image}
                alt={`${title} thumbnail`}
                className="w-full h-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-400"
              />
            </div>
            <div className="p-4 flex flex-col justify-center items-center space-y-2 text-center">
              <span className="px-2 mt-3 py-0.5 text-xs rounded-full bg-blue-600 text-white shadow-sm">
                {badge}
              </span>
              <h3 className="text-sm sm:text-base mt-3 font-semibold text-blue-400 drop-shadow-sm">
                {title}
              </h3>
              <div className="relative group">
                <span className="text-xs text-gray-300 cursor-help group-hover:underline">
                  Hover for details
                </span>
                <div className="absolute bottom-full mb-2 hidden group-hover:flex bg-black text-white text-xs p-2 rounded w-52 text-center z-10 shadow-lg">
                  {description}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Preview */}
      {activeImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-full">
            <img
              src={activeImage}
              alt="Certificate Preview"
              className="max-w-[90vw] max-h-[80vh] rounded-lg object-contain"
            />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-2 right-2 text-white text-3xl hover:text-red-500"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FormCertificate;