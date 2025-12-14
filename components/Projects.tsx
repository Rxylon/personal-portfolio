"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  liveUrl?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Veriscope",
    description: "A deep learning application designed to analyze vascular patterns in eye images for vascular health assessment. It implements vessel segmentation and feature extraction techniques to accurately quantify vessel density, tortuosity, and branching patterns using advanced image processing methods.",
    techStack: ["Python", "Deep Learning", "Image Processing"],
    repoUrl: "https://github.com/Rxylon/Veriscope_project",
    image: "/project-1.png"
  },
  {
    id: 2,
    title: "Capture Smart AI",
    description: "An AI-powered Android application developed for detecting and classifying image blur and shutter speed issues in photographs. It features trained machine learning models that accurately identify and categorize various image quality problems to provide real-time feedback.",
    techStack: ["Python", "Machine Learning", "Android Development"],
    repoUrl: "https://github.com/Rxylon/Capture_Smart_AI",
    image: "/project-2.png"
  },
  {
    id: 3,
    title: "Deepfake Image Detection",
    description: "Built a deep learning pipeline to detect real vs. fake images using feature extractors like CLIP ViT-L/14, DINOv2, and SigLIP. Utilized frozen transformer-based vision-language encoders on 700K+ images to train an RBF-kernel SVM classifier, achieving 83.5% accuracy on unseen deepfake generators and up to 100% on ProGAN.",
    techStack: ["Python", "Deep Learning", "CLIP", "ViT", "SVM"],
    repoUrl: "https://github.com/TayalAditya/CS-671_Project",
    image: "/project-3.png"
  },
  {
    id: 4,
    title: "Adobe Hackathon: Document Intelligence",
    description: "A persona-aware document retrieval system built to extract and prioritize relevant sections from multi-PDF collections. Features a modular pipeline (DocumentProcessor, RelevanceScorer) optimized for CPU-only execution (<60s) and produces structured JSON outputs for research integration.",
    techStack: ["Python", "NLP", "scikit-learn", "spaCy", "Docker"],
    repoUrl: "https://github.com/ZeraAura3/Adobe_1b_LLM_SE_LLM",
    image: "/project-4.png"
  },
  {
    id: 5,
    title: "Smart Product Pricing: ML Challenge 2025",
    description: "A machine learning solution for predicting e-commerce prices that achieves 0.484 SMAPE using a LightGBM Regressor with log-transformed targets. Features a pipeline of 144 attributes including TF-IDF vectors, regex-extracted quantities, and target-encoded brand data to capture product identity.",
    techStack: ["Python", "LightGBM", "scikit-learn", "pandas", "Regex"],
    repoUrl: "https://github.com/Rxylon/Amazon-ML-Challenge",
    image: "/project-5.jpg"
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1,
      }}
      className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 border-b border-white/[0.08] ${
        index % 2 === 1 ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text content */}
      <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm text-linear-accent font-medium">
            0{project.id}
          </span>
          <div className="w-8 h-px bg-linear-accent/50" />
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
          {project.title}
        </h3>

        <p className="text-linear-muted text-lg leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm font-medium tracking-wide uppercase text-linear-muted border border-white/[0.08] rounded-full bg-white/[0.02]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-linear-text hover:text-linear-accent transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View Repo</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-linear-text hover:text-linear-accent transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="font-medium">Live Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Project visual */}
      <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-linear-surface aspect-video transition-all duration-500 group-hover:border-linear-accent/50 group-hover:shadow-[0_0_40px_rgba(94,106,210,0.2)]">
          <div className="absolute inset-0 bg-gradient-to-br from-linear-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          
          {/* Project screenshot */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
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
            Featured Projects
          </h2>
          <p className="text-linear-muted text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        {/* Projects list */}
        <div className="divide-y divide-white/[0.08]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
