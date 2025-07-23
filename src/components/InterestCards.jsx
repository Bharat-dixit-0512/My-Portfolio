import React from 'react';
import { FaFilm, FaPlane, FaDrum, FaFutbol } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';

const InterestCards = () => {
  const interests = [
    {
      icon: <FaFilm size={40} />,
      title: 'Eat-Sleep-Repeat',
      description:
        'Outside of academics, I love immersing myself in films and music — it’s my way of unwinding and staying inspired. Sitting idle just isn’t in my vocabulary.',
      color: 'from-pink-500 to-red-500',
    },
    {
      icon: <FaPlane size={40} />,
      title: 'Travelling & Exploring',
      description:
        'Exploring the world is my ultimate inspiration — each journey fuels personal growth and broadens my perspective.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <FaPencil size={40} />,
      title: 'Drawing & Sketching',
      description:
        'Drawing and sketching fuel my creativity — a quiet form of expression that turns ideas into visuals.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: <FaFutbol size={40} />,
      title: 'Sports',
      description:
        'My passion for sports often reflects the company I keep and the energy of my surroundings. Cricket, and badminton have always been my go-to favorites.',
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-10">
      {interests.map((card, index) => (
        <div
          key={index}
          className={`bg-gradient-to-tr ${card.color} text-white rounded-xl p-6 shadow-xl transform hover:scale-105 transition duration-500`}
        >
          <div className="flex justify-center mb-4">{card.icon}</div>
          <h2 className="text-xl font-semibold mb-2 text-center">{card.title}</h2>
          <p className="text-sm text-center">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InterestCards;