import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const ProjectsAdd = [
    {
      id: 1,
      title: 'GitHub Fetcher',
      description: 'Using Html, CSS & JavaScript to fetch and display user profiles from GitHub using dynamic API calls.',
      image: '/githubfetcher.png',
      codeLink:'https://github.com/Bharat-dixit-0512/github_fetch',
      liveLink:'https://github-fetch-detail.netlify.app/'
    },
    {
      id: 2,
      title: 'E-commerce',
      description: 'A sleek e-commerce UI with category filtering, search debounce, and responsive product display.',
      image: '/E-commerce.png',
      codeLink:'https://github.com/Bharat-dixit-0512/MY_E-Commerce',
      liveLink:'https://my-ecommerce-0512.netlify.app/'
    },
    {
      id: 3,
      title: 'Password Generator',
      description: 'A customizable password generator with strength indicators and copy-to-clipboard support.',
      image: '/Password Generator.png',
      codeLink:'https://github.com/Bharat-dixit-0512/MyPasswordGenerator',
      liveLink:'https://mypasswordgenerator1.netlify.app/'
    },
    
    {
      id: 5,
      title: 'iTask-Todo List',
      description: 'A clean and intuitive task manager with add/delete functionality and persistent local storage.',
      image: '/todolist.png',
      codeLink:'https://github.com/Bharat-dixit-0512/Todo-List-App',
      liveLink:'https://my-todo-itask.netlify.app/'
    },
    {
      id: 6,
      title: 'My PortFolio',
      description: 'Personal portfolio showcasing my React skills, deployed projects, and design aesthetic.',
      image: '/PortFolioSite.png',
      codeLink:'https://github.com/Bharat-dixit-0512/My-Portfolio',
      liveLink:'https://my-portfolioisme.netlify.app/'
    },
  ];

  return (
    <section className="min-h-screen  bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex flex-col items-center px-4 md:px-6 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold font-serif bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent drop-shadow-[0px_0px_10px_rgba(255,0,0,0.6)] hover:scale-105 transition-transform duration-300 ease-in-out">
          Projects
        </h1>
        <p className="mt-4 text-lg text-gray-400 italic">Crafted with Code: Interactive Interfaces That Feel Like Magic.</p>
      </motion.div>

      {/* Certificate Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {ProjectsAdd.map((project, index) => (
          <motion.div
            key={`${project.id}-${index}`}
            className="bg-white/10 border border-gray-700 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ease-in-out"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-64 overflow-hidden rounded-t-xl">
              <img
                src={project.image}
                alt={`${project.title} thumbnail`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center space-y-4">
              <h3 className="text-xl font-bold text-blue-400 mb-2 drop-shadow-sm">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
              <div className="flex justify-center gap-6 text-sm font-semibold">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-red-500 text-white rounded-md hover:drop-shadow-[0_0_8px_rgba(255,0,60,0.8)] hover:z-100 hover:bg-red-600 transition-colors duration-300"
                >
                  🔗 Check Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 hover:drop-shadow-[0_4px_6px_rgba(34,197,94,0.5)] hover:z-100 transition-colors duration-300"
                >
                  🚀 Live Preview
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;