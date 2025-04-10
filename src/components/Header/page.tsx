"use client"
import React, { useState } from 'react';

type Props = {}

const page = (props: Props) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            <a href="/" className="flex items-center">
              <span>My Website</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-blue-300 transition duration-300">Home</a>
            <a href="/about" className="hover:text-blue-300 transition duration-300">About</a>
            <a href="/services" className="hover:text-blue-300 transition duration-300">Services</a>
            <a href="/contact" className="hover:text-blue-300 transition duration-300">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 pb-2 space-y-2">
            <a href="/" className="block hover:text-blue-300 transition duration-300 py-2">Home</a>
            <a href="/about" className="block hover:text-blue-300 transition duration-300 py-2">About</a>
            <a href="/services" className="block hover:text-blue-300 transition duration-300 py-2">Services</a>
            <a href="/contact" className="block hover:text-blue-300 transition duration-300 py-2">Contact</a>
          </nav>
        )}
      </div>
    </header>
  )
}

export default page;
