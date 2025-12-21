"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";
import LogoLoop from "./LogoLoop";

const socialLogos = [
  { node: <SiGithub />, title: "GitHub", href: "https://github.com/Rxylon" },
  { node: <SiLinkedin />, title: "LinkedIn", href: "https://www.linkedin.com/in/kinshuk-chauhan-633a33342/" },
  { node: <SiLeetcode />, title: "LeetCode", href: "https://leetcode.com/u/RxylonOP/" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Footer glow effect */}
      <div className="absolute inset-0 footer-glow" />
      
      <div className="relative z-10 max-w-container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter mb-6">
            Let&apos;s build something
            <span className="text-gradient-accent"> together</span>.
          </h2>

          <p className="text-linear-muted text-lg md:text-xl max-w-xl mx-auto mb-12">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          {/* Email CTA */}
          <motion.a
            href="mailto:radhabhanu868@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-linear-text font-medium transition-all duration-300 hover:border-linear-accent hover:shadow-[0_0_30px_rgba(94,106,210,0.3)] mb-16"
          >
            <Mail className="w-5 h-5" />
            <span>radhabhanu868@gmail.com</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>

          {/* Social links - Animated Logo Loop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-16 relative overflow-hidden max-w-md mx-auto"
          >
            <LogoLoop
              logos={socialLogos}
              speed={60}
              direction="left"
              logoHeight={40}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#08090A"
              ariaLabel="Social media links"
              className="text-linear-text"
            />
          </motion.div>

          {/* Resume link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12"
          >
            <a
              href="/Resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 text-linear-muted hover:text-linear-text transition-colors"
            >
              <span>Download Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-24 pt-8 border-t border-white/[0.08]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-linear-muted">
              © {new Date().getFullYear()} Kinshuk Chauhan. All rights reserved.
            </p>
            <p className="text-sm text-linear-muted">
              Built with Next.js, Tailwind CSS & Framer Motion
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
