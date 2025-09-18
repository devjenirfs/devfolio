"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
      icon: "🎨"
    },
    {
      title: "Backend",
      skills: ["Node.js", "APIs", "REST", "GraphQL"],
      icon: "⚙️"
    },
    {
      title: "Cloud & CMS",
      skills: ["AWS", "Google Cloud", "Sanity CMS", "Vercel"],
      icon: "☁️"
    },
    {
      title: "Tools",
      skills: ["GitHub", "VSCode", "Agile/Scrum", "Figma", "Jira"],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
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
              Skills & Tech Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center space-y-4">
                  <div className="text-4xl">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-[#101F3D]">
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="block px-3 py-1 bg-[#84ADFF]/10 text-[#101F3D] text-sm rounded-full border border-[#84ADFF]/20"
                      >
                        {skill}
                      </span>
                    ))}
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
