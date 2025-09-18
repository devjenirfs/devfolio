"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#101F3D] text-white">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects. 
              Let&apos;s discuss how we can bring your ideas to life!
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#84ADFF]/20 rounded-lg flex items-center justify-center">
                      <span className="text-[#84ADFF]">📧</span>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href={siteConfig.social.email}
                        className="text-slate-300 hover:text-[#84ADFF] transition-colors"
                      >
                        jenirfs@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#84ADFF]/20 rounded-lg flex items-center justify-center">
                      <span className="text-[#84ADFF]">💼</span>
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a 
                        href={siteConfig.social.linkedin}
                        className="text-slate-300 hover:text-[#84ADFF] transition-colors"
                      >
                        linkedin.com/in/jenirfs
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#84ADFF]/20 rounded-lg flex items-center justify-center">
                      <span className="text-[#84ADFF]">🐙</span>
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a 
                        href={siteConfig.social.github}
                        className="text-slate-300 hover:text-[#84ADFF] transition-colors"
                      >
                        github.com/jenirfs
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#84ADFF] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#84ADFF] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#84ADFF] transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#84ADFF] text-[#101F3D] hover:bg-[#84ADFF]/90"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
