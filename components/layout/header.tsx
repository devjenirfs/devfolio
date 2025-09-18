'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="backdrop-blur-md bg-gradient-to-r from-[#101F3D] to-[#203660] text-white shadow-md border-b-[2px] border-[#84ADFF] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo JS no canto esquerdo */}
          <motion.div
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/logos/JS-logo.png"
              alt="JS logo"
              height={40}
              width={40}
              className="transition-all duration-300"
            />
          </motion.div>
    
          {/* Slogan centralizado */}
          <p className="text-sm text-slate-300 italic tracking-wide text-center">
            JS is my name, and my code.
          </p>
    
          {/* Navegação à direita */}
          <nav className="flex gap-6 text-sm font-medium tracking-wide">
            {[
              { name: 'About me', href: '#about' },
              { name: 'Projects', href: '#projects' },
              { name: 'How I help', href: '#how-i-help' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group cursor-pointer transition-all duration-300 hover:text-[#84ADFF] hover:scale-105"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#84ADFF] transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between">
          {/* Logo JS */}
          <motion.div
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/logos/JS-logo.png"
              alt="JS logo"
              height={32}
              width={32}
              className="transition-all duration-300"
            />
          </motion.div>

          {/* Slogan */}
          <p className="text-xs text-slate-300 italic tracking-wide text-center flex-1 mx-4">
            JS is my name, and my code.
          </p>

          {/* Menu Hambúrguer */}
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-1 p-2 hover:bg-white/10 rounded transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <nav className="flex flex-col gap-4 pt-4">
              {[
                { name: 'About me', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'How I help', href: '#how-i-help' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium tracking-wide hover:text-[#84ADFF] transition-all duration-300 py-2 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
