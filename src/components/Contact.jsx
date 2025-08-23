import React from 'react';
import { FaPhone, FaGithub } from 'react-icons/fa6';
import { MdLocationPin, MdEmail } from 'react-icons/md';
import { SiLinkedin, SiInstagram } from "react-icons/si";
const Contact = () => {
    return (

        <div className="fade-in min-h-screen  bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex flex-col items-center justify-center px-6">
            <div className="text-center mb-12 mt-40">
                <h1 className="text-6xl md:text-7xl font-extrabold font-serif z-100 drop-shadow-[0_0_8px_rgba(255,0,60,0.8)] bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent mb-4 leading-tight hover:scale-105 transition-transform duration-300">
                    CONTACT ME
                </h1>
                <h2 className="text-2xl font-semibold mb-2">
                    Ideas to merge or insights to commit ?

                </h2>
                <h3 className="text-lg text-gray-400 max-w-xl mx-auto">
                    Let’s start the conversation - drop a hello and let’s push forward.
                </h3>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-40">

                <div className="flex flex-col items-center text-center">
                    <MdLocationPin size={60} className="mb-3 text-white" />
                    <h4 className="bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent font-bold uppercase text-sm mb-1 tracking-wide">
                        Find Me @
                    </h4>
                    <p className="text-sm ">Mathura</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <MdEmail size={60} className="mb-3 text-white" />
                    <h4 className="bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent font-bold uppercase text-sm mb-1 tracking-wide">
                        Email Me @
                    </h4>
                    <a href='mail:dixitbt0512@gmail.com' target='_blank' alt='Mail Id' className="text-sm">dixitbt0512@gmail.com</a>
                </div>


                <div className="flex flex-col items-center text-center">
                    <FaPhone size={50} className="mb-3 text-white" />
                    <h4 className="bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent font-bold uppercase text-sm mb-1 tracking-wide">
                        Call Me @
                    </h4>
                    <a href='tel:+919412659692' alt='Mobile No.' className="text-sm">Mobile:+91 941-265-9692</a>
                </div>
            </div>

            <div className='flex flex-col mt-10 tracking-wider justify-center'>
                <p>&copy; Bharat 2025 | Created By <span className=' text-red-500 z-100 drop-shadow-[0_0_8px_rgba(255,0,60,0.8)] animate-pulse font-bold font-Exo text-xl'>BharatDixit🤍</span></p>
            </div>

            <div className='flex justify-center items-center gap-10 mt-6'>
                <a className='hover:text-red-400' target='_blank' alt='GitHub' href="https://github.com/Bharat-dixit-0512"><FaGithub size={25} /></a>
                <a className='hover:text-red-400' target='_blank' alt='Linkedin' href="https://www.linkedin.com/in/bharat-dixit-/"><SiLinkedin size={22} /></a>
                <a className='hover:text-red-400' target='_blank' alt='Instagram' href="https://www.instagram.com/__bharatdixit.0512/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Fnew%2F%3Fnext%3D%252Fdirect%252Finbox%252F%26__coig_login%3D1"><SiInstagram size={22} /></a>
            </div>

        </div>
    );
};

export default Contact;