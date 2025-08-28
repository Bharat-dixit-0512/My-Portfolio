import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/About', label: 'About' },
    { path: '/Projects', label: 'Projects' },
    { path: '/Certificate', label: 'Certificate' },
    { path: '/Contact', label: 'Contact' },
  ];

  return (
    <header className="flex justify-center relative font-Exo">
      <nav className="Mynav flex justify-between items-center fixed bg-black h-16 w-full  top-0 z-50 text-white px-4 sm:px-6">

        <NavLink to='/'><div className="text-2xl md:text-3xl">
          Port
          <span className="text-red-500 drop-shadow-[0_0_8px_rgba(255,0,60,0.8)] animate-pulse">
            Folio
          </span>
        </div></NavLink>

        <div className="hidden sm:flex gap-4 md:gap-8 lg:gap-10 text-base md:text-xl mx-4">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "transition text-red-500 duration-300 ease-in-out hover:text-red-500 underline hover:drop-shadow-[0_0_6px_rgba(255,0,60,0.9)]"
                  : "hover:text-red-400 transition duration-200"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>


        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>


      {isOpen && (
        <div className="sm:hidden absolute top-16 w-full bg-black text-white flex flex-col gap-4 py-4 px-6 z-40 shadow-md">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 underline hover:drop-shadow-[0_0_6px_rgba(255,0,60,0.9)]"
                  : "hover:text-red-400"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;