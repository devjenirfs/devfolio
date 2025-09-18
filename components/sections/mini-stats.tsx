"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function MiniStats() {
  const stats = [
    {
      number: "1+ year",
      label: "building products for US-based clients",
      icon: "🚀"
    },
    {
      number: "8-dev",
      label: "agile team collaboration",
      icon: "👥"
    },
    {
      number: "Multiple",
      label: "projects shipped (legal, healthcare, dashboards)",
      icon: "📦"
    },
    {
      number: "Stack:",
      label: "React • Next.js • TypeScript • Tailwind • AWS • Sanity",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center space-y-3"
            >
              <div className="text-3xl">{stat.icon}</div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-[#101F3D]">
                  {stat.number}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
