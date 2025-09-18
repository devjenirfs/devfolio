"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn, bounceIn, glowAnimation } from "@/lib/animations";

export default function Projects() {
  // Real case studies with impact and metrics
  const projects = [
    {
      id: 1,
      title: "CSIMS – Institutional Website",
      role: "Frontend Engineer (team)",
      stack: "Next.js, TypeScript, React, Tailwind CSS",
      challenge: "Build a modern institutional website focused on clarity, performance, and accessibility.",
      whatBuilt: "Reusable components, responsive layouts, improved navigation and page structure for content-heavy sections.",
      impact: "Applied SEO & a11y basics (semantic HTML, headings, alt text). Clean, maintainable component system.",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      image: "/projects/csims.jpg",
      liveUrl: "https://csims.org/",
      featured: true,
    },
    {
      id: 2,
      title: "Contreras Law – Law Firm Website",
      role: "Frontend Engineer (solo)",
      stack: "Next.js, TypeScript, React, Tailwind CSS",
      challenge: "Solo build of a fast and reliable website for a law firm to increase trust and lead capture.",
      whatBuilt: "Information architecture, UI design, responsive behavior, and SEO foundations.",
      impact: "Core Web Vitals oriented (Lighthouse-friendly structure). Clean, responsive design with accessible components.",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      image: "/projects/contreras-law.jpg",
      liveUrl: "https://contreras-law.com/",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-20"
        >
          <motion.div 
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#101F3D] mb-8">
              Recent Work
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Real projects with measurable impact, built for clients who needed scalable, accessible solutions.
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={bounceIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-10 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-[#101F3D]">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-6 text-lg text-gray-600">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#84ADFF] rounded-full"></div>
                        <span><strong className="text-[#101F3D]">Role:</strong> {project.role}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#84ADFF] rounded-full"></div>
                        <span><strong className="text-[#101F3D]">Stack:</strong> {project.stack}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-[#101F3D] mb-3">Challenge:</h4>
                      <p className="text-lg text-gray-700 leading-relaxed">{project.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-[#101F3D] mb-3">What I built:</h4>
                      <p className="text-lg text-gray-700 leading-relaxed">{project.whatBuilt}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-[#101F3D] mb-3">Impact:</h4>
                      <p className="text-lg text-gray-700 leading-relaxed">{project.impact}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-4 py-2 bg-gray-100 text-[#101F3D] text-sm rounded-full border border-gray-200 hover:border-[#84ADFF] hover:bg-[#84ADFF]/10 transition-all duration-300 font-medium"
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
                          transition: { duration: 0.2 }
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.liveUrl}
                      className="text-[#84ADFF] hover:text-[#101F3D] font-semibold text-lg transition-colors flex items-center gap-2"
                    >
                      View Live Site →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
