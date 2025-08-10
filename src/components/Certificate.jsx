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
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-24">
      {/* Header */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent drop-shadow-[0px_0px_8px_rgba(255,0,0,0.8)] transition-transform duration-300 hover:scale-105">
          Achievements
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-400 italic">
          A glimpse into my journey of learning and excellence.
        </p>
      </motion.div>

      {/* Certificate Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-6xl px-4"
      >
        {certificates.map(({ id, title, description, badge, image }) => (
          <motion.div
            key={id}
            variants={cardVariants}
            className="relative bg-white/10 border border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden"
          >
            <div
              className="w-full h-64 sm:h-72 md:h-80 overflow-hidden cursor-pointer"
              onClick={() => setActiveImage(image)}
            >
              <img
                src={image}
                alt={`${title} thumbnail`}
                className="w-full h-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col justify-center items-center space-y-4 text-center">
              <span className="px-3 py-1 text-xs rounded-full bg-blue-600 text-white shadow-md">
                {badge}
              </span>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-400 drop-shadow-sm">
                {title}
              </h3>
              <div className="relative group">
                <span className="text-sm text-gray-300 cursor-help group-hover:underline">
                  Hover for details
                </span>
                <div className="absolute bottom-full mb-2 hidden group-hover:flex bg-black text-white text-xs p-2 rounded w-60 text-center z-10 shadow-lg">
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