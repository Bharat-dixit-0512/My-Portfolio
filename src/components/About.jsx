import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="min-h-screen fade-in flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl w-full my-20"
      >
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold font-serif mb-8 my-4 leading-tight bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,0,60,0.8)] hover:scale-105 transition-transform duration-300"
        >
          Bharat Dixit
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="neon-image-wrapper w-40 sm:w-48 md:w-64 lg:w-72 xl:w-80 h-40 sm:h-48 md:h-64 lg:h-72 xl:h-80 mx-auto my-5"
        >
          <img
            src="/MyPic.jpg"
            alt="Portrait of Bharat Dixit"
            className="w-full h-full object-cover object-top rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-10"
        >
          {[
            {
              label: 'GitHub',
              href: 'https://github.com/Bharat-dixit-0512',
              gradient: 'from-indigo-500 to-purple-600',
              shadow: 'rgba(150,100,255,0.8)',
            },
            {
              label: 'LeetCode',
              href: 'https://leetcode.com/u/BharatDixit0512/',
              gradient: 'from-yellow-500 to-orange-600',
              shadow: 'rgba(255,170,0,0.8)',
            },
            {
              label: 'Resume',
              href: '/BharatResume.pdf',
              gradient: 'from-green-500 to-lime-600',
              shadow: 'rgba(0,255,150,0.8)',
            },
          ].map(({ label, href, gradient, shadow }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 text-white text-lg font-semibold rounded-md shadow-md bg-gradient-to-r ${gradient} hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_15px_${shadow}]`}
            >
              {label}
            </a>
          ))}
        </motion.div>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed px-4 mb-12">
          Hi, I'm Bharat—a passionate developer and tech enthusiast who loves crafting elegant solutions and exploring the latest in web technologies. Whether it's building sleek interfaces or diving deep into backend logic, I thrive on turning ideas into reality.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <a
            href="https://www.linkedin.com/in/bharat-dixit-/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-md text-white text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 shadow-md hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(100,100,255,0.8)]"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://x.com/BharatD263969"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-md text-white text-lg font-semibold bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 shadow-md hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.8)]"
          >
            <FaTwitter size={20} />
            Twitter
          </a>
        </div>
        <h2 className="text-5xl font-bold mb-6 text-white bg-clip-text drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-white text-sm sm:text-base mb-16">
          {[
            'React',
            'Node.js',
            'Tailwind CSS',
            'JavaScript',
            'TypeScript',
            'MongoDB',
            'Express',
            'Git',
          ].map(skill => (
            <div
              key={skill}
              className="px-4 py-2 bg-white/10 rounded-md text-center hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-white bg-clip-text z-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            Education
          </h2>
          <div className="space-y-6 text-left text-white">
            {[
              {
                degree: 'Bachelor of Technology in Computer Science',
                institution: 'GLA University',
                year: '2023 - 2027',
              },
              {
                degree: 'Senior Secondary (Science)',
                institution: 'Parmeshwari Devi Dhanuka School',
                year: '2022 - 2023',
              },
              {
                degree: 'High School',
                institution: 'Parmeshwari Devi Dhanuka School',
                year: '2020 - 2021',
              }
            ].map(({ degree, institution, year }) => (
              <div key={degree} className="bg-white/10 p-4 rounded-md hover:bg-white/20 transition-colors duration-300">
                <h3 className="text-lg font-semibold">{degree}</h3>
                <p className="text-sm">{institution}</p>
                <p className="text-sm text-gray-300">{year}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 p-6 rounded-lg shadow-lg max-w-xl mx-auto"
        >
          <h2 className="text-white text-2xl font-bold mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Get in Touch</h2>
          <form
            action="https://formspree.io/f/meozpnko"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-md hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(255,0,100,0.8)]"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;