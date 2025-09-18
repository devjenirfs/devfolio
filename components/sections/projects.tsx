"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Projects() {
  // Real projects based on Jeniffer's experience
  const projects = [
    {
      id: 1,
      title: "Casely Group Projects",
      description: "Modern websites for diverse clients including lawyers, doctors, and businesses. Features AI generative tools, dashboards, and payment systems.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "AI Integration"],
      image: "/projects/casely.jpg",
      liveUrl: "https://caselygroup.com",
      githubUrl: "https://github.com/jenirfs",
      featured: true,
    },
    {
      id: 2,
      title: "UI/UX Academic Project",
      description: "Monetizable app functionality with comprehensive wireframes and interactive prototypes. Academic project developed at Inatel.",
      technologies: ["Figma", "Prototyping", "UX Research", "Wireframing"],
      image: "/projects/inatel-ux.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/jenirfs",
      featured: true,
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "This responsive portfolio website built with Next.js, featuring modern design, animations, and optimized performance.",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      image: "/projects/portfolio.jpg",
      liveUrl: "https://jenirfs.dev",
      githubUrl: "https://github.com/jenirfs/devfolio",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-16"
        >
          <motion.div 
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#101F3D] mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for web development.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-[#101F3D] to-[#203660] flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    {project.title}
                  </span>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-[#101F3D]">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#84ADFF]/10 text-[#101F3D] text-xs rounded border border-[#84ADFF]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.liveUrl}
                      className="text-[#84ADFF] hover:text-[#101F3D] text-sm font-medium transition-colors"
                    >
                      Live Demo →
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-[#84ADFF] hover:text-[#101F3D] text-sm font-medium transition-colors"
                    >
                      GitHub →
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
