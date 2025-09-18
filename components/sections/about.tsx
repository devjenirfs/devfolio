"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function About() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Node.js", "Tailwind CSS", "Framer Motion", "Git"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center space-y-12"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-[#101F3D]"
          >
            About Me
          </motion.h2>
          
          <motion.div 
            variants={fadeInUp}
            className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600"
          >
            <p>
              I&apos;m a passionate frontend software engineer with a love for creating 
              beautiful, functional, and user-friendly web applications. With expertise 
              in modern JavaScript frameworks and a keen eye for design, I bring ideas 
              to life through clean, efficient code.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with the 
              developer community.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-[#101F3D]">Skills & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#84ADFF]/10 text-[#101F3D] rounded-full border border-[#84ADFF]/20 hover:bg-[#84ADFF]/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
