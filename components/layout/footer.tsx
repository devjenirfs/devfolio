"use client";

import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-[#101F3D] text-white py-8 border-t border-[#84ADFF]/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-slate-300">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-sm text-slate-400 italic mt-1">
              {siteConfig.slogan}
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href={siteConfig.social.github}
              className="text-slate-300 hover:text-[#84ADFF] transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={siteConfig.social.linkedin}
              className="text-slate-300 hover:text-[#84ADFF] transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.social.email}
              className="text-slate-300 hover:text-[#84ADFF] transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
