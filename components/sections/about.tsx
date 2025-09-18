"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function About() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Node.js", "Tailwind CSS", "Framer Motion", "Git", "Figma", "Sanity", "AWS"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-20"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-[#101F3D] text-center mb-16"
          >
            About Me
          </motion.h2>
          
          <motion.div 
            variants={fadeInUp}
            className="space-y-8 text-xl text-gray-700 leading-relaxed"
          >
            <p className="text-center">
              I&apos;m a Software Engineer focused on building <strong className="text-[#101F3D] font-semibold">scalable, accessible, and high-performance</strong> web applications.
            </p>
            <p className="text-center">
              Over the last year I&apos;ve worked in <strong className="text-[#101F3D] font-semibold">international agile teams (8+ devs)</strong> delivering projects for companies with <strong className="text-[#101F3D] font-semibold">multi-million annual revenue</strong> — from <strong className="text-[#101F3D] font-semibold">legal websites</strong> and <strong className="text-[#101F3D] font-semibold">medical-conference portals</strong> to <strong className="text-[#101F3D] font-semibold">dashboards, payment systems</strong>, and <strong className="text-[#101F3D] font-semibold">campaign landing pages</strong>.
            </p>
            <p className="text-center">
              I care about <strong className="text-[#101F3D] font-semibold">clean architecture, Core Web Vitals, and a11y</strong>, turning ideas into elegant, maintainable products.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="space-y-8"
          >
            <h3 className="text-4xl font-bold text-[#101F3D] text-center">What I bring</h3>
            <div className="grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#84ADFF] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-gray-700 leading-relaxed">React & Next.js expertise (TypeScript, Tailwind)</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#84ADFF] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-gray-700 leading-relaxed">Headless CMS & cloud (Sanity, AWS)</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#84ADFF] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-gray-700 leading-relaxed">Data-driven UX: measure → iterate → improve</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#84ADFF] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-gray-700 leading-relaxed">Remote collaboration across time zones (EN/PT; learning ES)</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="space-y-8"
          >
            <h3 className="text-4xl font-bold text-[#101F3D] text-center">Skills & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-6 py-4 bg-gray-100 text-[#101F3D] rounded-full border border-gray-200 hover:border-[#84ADFF] hover:bg-[#84ADFF]/10 transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      delay: index * 0.1,
                      duration: 0.3 
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
