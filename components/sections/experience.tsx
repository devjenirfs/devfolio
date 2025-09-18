"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Experience() {
  const experiences = [
    {
      period: "2024 - 2025",
      title: "Software Engineer II",
      company: "Casely Group",
      location: "Remote, USA",
      description: "Developed modern web applications for diverse clients including lawyers, doctors, and businesses. Implemented AI generative tools, dashboards, and payment systems.",
      type: "work"
    },
    {
      period: "2023 - 2024",
      title: "Software Engineer",
      company: "Casely Group",
      location: "Remote, USA",
      description: "Frontend development using React, Next.js, and TypeScript. Collaborated in international agile teams to deliver scalable solutions.",
      type: "work"
    },
    {
      period: "2024",
      title: "IT Intern / Teaching Assistant",
      company: "Inatel",
      location: "Santa Rita do Sapucaí, Brazil",
      description: "Assisted in academic projects and provided technical support. Developed UI/UX projects with monetizable functionality.",
      type: "work"
    },
    {
      period: "2023",
      title: "IT Assistant",
      company: "Advansat",
      location: "Brazil",
      description: "Technical support and system maintenance. Gained experience in troubleshooting and customer service.",
      type: "work"
    }
  ];

  const education = [
    {
      period: "2023 - Present",
      title: "B.Sc. Software Engineering",
      company: "Inatel",
      location: "Santa Rita do Sapucaí, Brazil",
      description: "Comprehensive software engineering education with focus on modern development practices and agile methodologies.",
      type: "education"
    },
    {
      period: "2019 - 2023",
      title: "B.Sc. Chemistry",
      company: "UNIFEI",
      location: "Itajubá, Brazil",
      description: "Strong analytical and problem-solving foundation that complements technical development skills.",
      type: "education"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
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
              Experience & Education
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My professional journey and academic background
            </p>
          </motion.div>
          
          {/* Work Experience */}
          <motion.div 
            variants={fadeInUp}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-[#101F3D] mb-6">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#84ADFF]"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h4 className="text-xl font-semibold text-[#101F3D]">{exp.title}</h4>
                      <p className="text-[#84ADFF] font-medium">{exp.company}</p>
                      <p className="text-gray-600 text-sm">{exp.location}</p>
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 mt-3">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div 
            variants={fadeInUp}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-[#101F3D] mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#84ADFF]"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h4 className="text-xl font-semibold text-[#101F3D]">{edu.title}</h4>
                      <p className="text-[#84ADFF] font-medium">{edu.company}</p>
                      <p className="text-gray-600 text-sm">{edu.location}</p>
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{edu.period}</span>
                  </div>
                  <p className="text-gray-600 mt-3">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
