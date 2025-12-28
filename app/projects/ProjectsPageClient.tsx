"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, ArrowLeft, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/supabase";

interface ProjectsPageClientProps {
  projects: Project[];
}

export default function ProjectsPageClient({ projects }: ProjectsPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Get unique categories
  const categories = ["All", ...new Set(projects.map(p => p.category).filter(Boolean) as string[])];

  // Filter projects
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-linear-void">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-linear-muted hover:text-linear-text transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-xl font-semibold">Projects</h1>
            <div className="w-24" /> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4">
              All Projects
            </h1>
            <p className="text-linear-muted text-lg max-w-2xl mx-auto">
              A comprehensive showcase of my work across various domains and technologies
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-2 flex-wrap mb-12"
          >
            <Filter className="w-4 h-4 text-linear-muted mr-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-linear-accent text-white"
                    : "bg-linear-surface border border-white/10 text-linear-muted hover:text-linear-text hover:border-linear-accent/50"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative"
              >
                <div className={`relative rounded-2xl overflow-hidden border border-white/[0.08] bg-linear-surface transition-all duration-500 ${
                  hoveredId === project.id ? "border-linear-accent/50 shadow-[0_0_40px_rgba(94,106,210,0.2)]" : ""
                }`}>
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      fill
                      className={`object-contain transition-all duration-500 ${
                        hoveredId === project.id ? "scale-105 opacity-100" : "opacity-70"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-linear-surface via-transparent to-transparent" />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-linear-accent/90 text-white text-xs font-medium">
                        Featured
                      </div>
                    )}

                    {/* Category Badge */}
                    {project.category && (
                      <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-linear-void/80 text-linear-muted text-xs font-medium border border-white/10">
                        {project.category}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-linear-muted text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.long_description || project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech_stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium tracking-wide uppercase text-linear-muted border border-white/[0.08] rounded-full bg-white/[0.02]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech_stack.length > 4 && (
                        <span className="px-2 py-1 text-xs font-medium text-linear-muted">
                          +{project.tech_stack.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08]">
                      <a
                        href={project.repo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-linear-text hover:text-linear-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-linear-text hover:text-linear-accent transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-linear-muted text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-sm text-linear-muted">
            © {new Date().getFullYear()} Kinshuk Chauhan. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
