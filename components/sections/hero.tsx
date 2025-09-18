"use client";

import { motion } from "framer-motion";
import { fadeInUp, bounceIn } from "@/lib/animations";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#101F3D] via-[#203660] to-[#101F3D] text-white relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#84ADFF]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="space-y-8"
        >
          {/* Profile Photo */}
          <motion.div
            variants={bounceIn}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#84ADFF] shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(132, 173, 255, 0.6)"
                }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(132, 173, 255, 0.3)",
                    "0 0 40px rgba(132, 173, 255, 0.6)",
                    "0 0 20px rgba(132, 173, 255, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src="/jeniffer.jpg"
                  alt="Jeniffer Souza - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#84ADFF] rounded-full flex items-center justify-center text-[#101F3D] font-bold text-xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👋
              </motion.div>
            </div>
          </motion.div>
          <motion.h1 
            variants={bounceIn}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Hi, I&apos;m{" "}
            <motion.span 
              className="text-[#84ADFF]"
              animate={{
                textShadow: [
                  "0 0 20px rgba(132, 173, 255, 0.5)",
                  "0 0 40px rgba(132, 173, 255, 0.8)",
                  "0 0 20px rgba(132, 173, 255, 0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {siteConfig.name}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto"
          >
            {siteConfig.title}
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
            <motion.a
              href={siteConfig.social.cv}
              className="px-8 py-3 bg-[#84ADFF] text-[#101F3D] font-semibold rounded-lg hover:bg-[#84ADFF]/90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📄 Download CV
            </motion.a>
            <motion.a
              href={siteConfig.social.linkedin}
              className="px-8 py-3 border-2 border-[#84ADFF] text-[#84ADFF] font-semibold rounded-lg hover:bg-[#84ADFF] hover:text-[#101F3D] transition-all duration-300 flex items-center gap-2 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🔗 LinkedIn
            </motion.a>
            <motion.a
              href={siteConfig.social.github}
              className="px-8 py-3 border-2 border-[#84ADFF] text-[#84ADFF] font-semibold rounded-lg hover:bg-[#84ADFF] hover:text-[#101F3D] transition-all duration-300 flex items-center gap-2 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💻 GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
