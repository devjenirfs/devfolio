"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HowIHelp() {
  const services = [
    {
      title: "Build or refactor scalable frontends",
      description: "in Next.js",
      icon: "🏗️"
    },
    {
      title: "Speed up sites",
      description: "(CWV, perf budgets, code-splitting)",
      icon: "⚡"
    },
    {
      title: "Design-system-ish components",
      description: "with Tailwind",
      icon: "🎨"
    },
    {
      title: "Integrate headless CMS",
      description: "and cloud",
      icon: "☁️"
    },
    {
      title: "Ship dashboards & payments",
      description: "with great UX",
      icon: "💳"
    }
  ];

  return (
    <section id="how-i-help" className="py-20 bg-white">
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
              How I can help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here&apos;s what I can do for your next project
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="space-y-4">
                  <div className="text-3xl">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#101F3D] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
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
