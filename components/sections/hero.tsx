"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#101F3D] via-[#203660] to-[#101F3D] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="space-y-8"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Hi, I&apos;m{" "}
            <span className="text-[#84ADFF]">{siteConfig.name}</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto"
          >
            {siteConfig.title} specialized in React and Next.js
          </motion.p>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-slate-400 italic"
          >
            {siteConfig.slogan}
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-[#84ADFF] text-[#101F3D] font-semibold rounded-lg hover:bg-[#84ADFF]/90 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-[#84ADFF] text-[#84ADFF] font-semibold rounded-lg hover:bg-[#84ADFF] hover:text-[#101F3D] transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
