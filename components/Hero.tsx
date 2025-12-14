"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";

// Dynamic import to avoid SSR issues with Three.js
const Antigravity = dynamic(() => import("./Antigravity"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grid-background" />
      
      {/* Antigravity particle effect */}
      <div className="absolute inset-0 opacity-60">
        <Antigravity
          count={250}
          magnetRadius={8}
          ringRadius={9}
          waveSpeed={0.3}
          waveAmplitude={1.2}
          particleSize={1.2}
          lerpSpeed={0.04}
          color="#5E6AD2"
          autoAnimate={true}
          particleVariance={1}
          particleShape="sphere"
          depthFactor={0.8}
          pulseSpeed={2}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 status-pulse" />
            <span className="text-sm text-linear-muted">Available for work</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-6"
          >
            Kinshuk Chauhan
          </motion.h1>

          {/* Subtitle with gradient */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-gradient mb-12 max-w-2xl mx-auto"
          >
            Building the future of software engineering.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-linear-text font-medium transition-all duration-300 hover:border-linear-accent hover:shadow-[0_0_30px_rgba(94,106,210,0.3)]"
            >
              <span>View Work</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-accent text-white font-medium transition-all duration-300 hover:bg-linear-accent/80 hover:shadow-[0_0_30px_rgba(94,106,210,0.5)]"
            >
              <span>Get in Touch</span>
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-20 card-3d"
        >
          <div className="card-3d-inner animate-float">
            <div className="relative mx-auto max-w-2xl rounded-2xl border border-white/10 bg-linear-surface/80 backdrop-blur-sm overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-linear-void/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-sm text-linear-muted">portfolio.tsx</span>
              </div>
              
              {/* Code content */}
              <div className="p-6 text-left font-mono text-sm">
                <div className="text-linear-muted">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span>{" "}
                  <span className="text-white">=</span> {"{"}
                </div>
                <div className="pl-4 mt-2">
                  <span className="text-linear-muted">name:</span>{" "}
                  <span className="text-green-400">&quot;Kinshuk Chauhan&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-linear-muted">role:</span>{" "}
                  <span className="text-green-400">&quot;Full Stack Developer&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-linear-muted">skills:</span>{" "}
                  <span className="text-yellow-400">[</span>
                  <span className="text-green-400">&quot;React&quot;</span>,{" "}
                  <span className="text-green-400">&quot;TypeScript&quot;</span>,{" "}
                  <span className="text-green-400">&quot;Python&quot;</span>
                  <span className="text-yellow-400">]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-linear-muted">passion:</span>{" "}
                  <span className="text-green-400">&quot;Building beautiful experiences&quot;</span>
                </div>
                <div className="text-linear-muted">{"}"}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-linear-muted"
        >
          <span className="text-xs uppercase tracking-wide">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
