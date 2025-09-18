"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-[#101F3D] text-white py-16 border-t border-[#84ADFF]/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-8">
          {/* Profile Photo in Footer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <motion.div
              className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#84ADFF] shadow-lg"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 20px rgba(132, 173, 255, 0.5)"
              }}
            >
              <img
                src="/jeniffer.jpg"
                alt="Jeniffer Souza"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let&apos;s build something great.
            </h2>
            <div className="flex justify-center space-x-8">
              <a
                href={siteConfig.social.linkedin}
                className="text-[#84ADFF] hover:text-white transition-colors font-medium"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.social.github}
                className="text-[#84ADFF] hover:text-white transition-colors font-medium"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href={siteConfig.social.email}
                className="text-[#84ADFF] hover:text-white transition-colors font-medium"
                aria-label="Email"
              >
                Email
              </a>
            </div>
          </div>
          
          <div className="border-t border-[#84ADFF]/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-slate-300">
                  © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </p>
                <p className="text-sm text-slate-400 italic mt-1">
                  {siteConfig.slogan}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
