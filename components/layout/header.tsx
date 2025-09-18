'use client';

import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <header className="backdrop-blur-md bg-gradient-to-r from-[#101F3D] to-[#203660] text-white shadow-md border-b-[2px] border-[#84ADFF]">
    <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4">
      {/* Logo JS no canto esquerdo */}
      <Image
        src="/logos/JS-logo.png"
        alt="JS logo"
        height={40}
        width={40}
        className="hover:scale-105 transition-transform"
      />
  
      {/* Slogan centralizado */}
      <p className="text-sm text-slate-300 italic tracking-wide text-center">
        JS is my name, and my code.
      </p>
  
      {/* Navegação à direita */}
      <nav className="flex gap-6 text-sm font-medium tracking-wide">
        {['About me', 'Projects', 'How I help', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="relative group cursor-pointer transition-colors hover:text-blue-300"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full" />
          </a>
        ))}
      </nav>
    </div>
  </header>
  
  );
}
