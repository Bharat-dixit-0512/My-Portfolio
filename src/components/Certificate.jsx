import React from 'react';

// Sample certificate data
const certificates = [
  {
    id: 1,
    title: 'Deloitte Virtual Experience Program Certificate',
    description: 'Completed Deloitte tech simulation with coding task expertise.',
    image: '/public/deloite.jpg',
  },
  {
    id: 2,
    title: 'Full Stack Web Development Participation Certificate',
    description: ' Completed Coding Blocks course at GLA University, Mathura.',
    image: '/public/certificate.jpg',
  },
];

const FormCertificate = () => {
  return (
    <section className="min-h-screen sm:bg-black md:bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-900 flex flex-col items-center justify-center px-6 py-24">
      {/* Header */}
      <div className="mt-10 mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold font-serif drop-shadow-[0px_0px_8px_rgba(255,0,0,0.8)] bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent mb-4 transition duration-300 ease-in-out hover:scale-105">
          Achievements
        </h1>
        <p className="text-lg text-gray-400">A glimpse into my journey of learning and excellence.</p>
      </div>

      {/* Certificate Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-220 max-w-6xl">
        {certificates.map(({ id, title, description, image }) => (
          <div
            key={id}
            className="bg-white/10 border border-gray-300 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 ease-in-out fade-in overflow-hidden"
          >
            <div className="w-full h-64 overflow-hidden px-4 pt-4">
              <img
                src={image}
                alt={`${title} thumbnail`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-extrabold drop-shadow-[0_0_6px_rgba(37,99,235,0.5)] text-blue-600 mb-2 text-center">{title}</h3>
              <p className="text-sm text-center text-gray-300 mb-6">{description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FormCertificate;