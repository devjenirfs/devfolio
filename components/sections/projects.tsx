"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Projects() {
  // Placeholder projects - will be replaced with content from content/projects/
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      image: "/projects/ecommerce.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/jenirfs/ecommerce",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/projects/taskapp.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/jenirfs/taskapp",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      image: "/projects/weather.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/jenirfs/weather",
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
