"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  MapPin,
  Sparkles,
  Cpu,
  Database,
  Globe,
} from "lucide-react";

const techStack = [
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "Python", icon: Cpu },
  { name: "Node.js", icon: Globe },
  { name: "PostgreSQL", icon: Database },
  { name: "Next.js", icon: Globe },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-container mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">
            About Me
          </h2>
          <p className="text-linear-muted text-lg max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Bio Box - Large (spans 2 cols and 2 rows) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 p-8 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-linear-surface to-linear-void card-glow"
          >
            <div className="h-full flex flex-col">
              <Sparkles className="w-8 h-8 text-linear-accent mb-6" />
              <h3 className="text-2xl font-semibold mb-4">The Journey</h3>
              <p className="text-linear-muted leading-relaxed text-lg flex-grow">
                I&apos;m a passionate software engineer with a love for creating
                elegant solutions to complex problems. With expertise in full-stack
                development, I specialize in building high-performance web applications
                that deliver exceptional user experiences.
                <br /><br />
                My journey in tech started with curiosity and has evolved into a 
                deep commitment to crafting clean, maintainable code. I believe in
                the power of technology to transform ideas into impactful products.
                <br /><br />
                When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                contributing to open source, or sharing knowledge with the developer
                community.
              </p>
            </div>
          </motion.div>

          {/* Tech Stack Box */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl border border-white/[0.08] bg-linear-surface card-glow"
          >
            <Code2 className="w-6 h-6 text-linear-accent mb-4" />
            <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 text-sm text-linear-muted"
                >
                  <tech.icon className="w-4 h-4 text-linear-accent" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Status/Location Box */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl border border-white/[0.08] bg-linear-surface card-glow"
          >
            <MapPin className="w-6 h-6 text-linear-accent mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-linear-muted mb-4">Based in Delhi, India</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 status-pulse" />
              <span className="text-sm text-green-500">Open for opportunities</span>
            </div>
          </motion.div>

          {/* Philosophy Box - Wide */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 p-8 rounded-2xl border border-white/[0.08] bg-linear-surface relative overflow-hidden card-glow"
          >
            {/* Abstract background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5E6AD2" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,50 Q25,30 50,50 T100,50"
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="0.5"
                />
                <path
                  d="M0,30 Q25,50 50,30 T100,30"
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="0.3"
                />
                <path
                  d="M0,70 Q25,50 50,70 T100,70"
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="0.3"
                />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">Philosophy</h3>
              <p className="text-linear-muted text-lg">
                &ldquo;Great software is not just about functionality—it&apos;s about
                creating experiences that feel intuitive and delightful. I strive
                to write code that is not only efficient but also elegant and
                maintainable.&rdquo;
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
