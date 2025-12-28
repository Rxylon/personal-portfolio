import { getProjects, Project } from "@/lib/supabase";
import ProjectsPageClient from "./ProjectsPageClient";

// Fallback data for when Supabase is not configured
const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "Veriscope",
    description: "A deep learning application designed to analyze vascular patterns in eye images for vascular health assessment.",
    long_description: "A deep learning application designed to analyze vascular patterns in eye images for vascular health assessment. It implements vessel segmentation and feature extraction techniques to accurately quantify vessel density, tortuosity, and branching patterns using advanced image processing methods.",
    tech_stack: ["Python", "Deep Learning", "Image Processing"],
    repo_url: "https://github.com/Rxylon/Veriscope_project",
    image_url: "/project-1.png",
    featured: true,
    category: "Machine Learning",
    order_index: 1
  },
  {
    id: 2,
    title: "Capture Smart AI",
    description: "An AI-powered Android application for detecting and classifying image blur and shutter speed issues.",
    long_description: "An AI-powered Android application developed for detecting and classifying image blur and shutter speed issues in photographs. It features trained machine learning models that accurately identify and categorize various image quality problems to provide real-time feedback.",
    tech_stack: ["Python", "Machine Learning", "Android Development"],
    repo_url: "https://github.com/Rxylon/Capture_Smart_AI",
    image_url: "/project-2.png",
    featured: true,
    category: "Mobile Development",
    order_index: 2
  },
  {
    id: 3,
    title: "Deepfake Image Detection",
    description: "Deep learning pipeline to detect real vs. fake images using CLIP ViT-L/14, DINOv2, and SigLIP.",
    long_description: "Built a deep learning pipeline to detect real vs. fake images using feature extractors like CLIP ViT-L/14, DINOv2, and SigLIP. Utilized frozen transformer-based vision-language encoders on 700K+ images to train an RBF-kernel SVM classifier, achieving 83.5% accuracy on unseen deepfake generators and up to 100% on ProGAN.",
    tech_stack: ["Python", "Deep Learning", "CLIP", "ViT", "SVM"],
    repo_url: "https://github.com/TayalAditya/CS-671_Project",
    image_url: "/project-3.png",
    featured: true,
    category: "Computer Vision",
    order_index: 3
  },
  {
    id: 4,
    title: "Adobe Hackathon: Document Intelligence",
    description: "A persona-aware document retrieval system for extracting relevant sections from multi-PDF collections.",
    long_description: "A persona-aware document retrieval system built to extract and prioritize relevant sections from multi-PDF collections. Features a modular pipeline (DocumentProcessor, RelevanceScorer) optimized for CPU-only execution (<60s) and produces structured JSON outputs for research integration.",
    tech_stack: ["Python", "NLP", "scikit-learn", "spaCy", "Docker"],
    repo_url: "https://github.com/ZeraAura3/Adobe_1b_LLM_SE_LLM",
    image_url: "/project-4.png",
    featured: false,
    category: "NLP",
    order_index: 4
  },
  {
    id: 5,
    title: "Smart Product Pricing: ML Challenge 2025",
    description: "ML solution for predicting e-commerce prices achieving 0.484 SMAPE using LightGBM.",
    long_description: "A machine learning solution for predicting e-commerce prices that achieves 0.484 SMAPE using a LightGBM Regressor with log-transformed targets. Features a pipeline of 144 attributes including TF-IDF vectors, regex-extracted quantities, and target-encoded brand data to capture product identity.",
    tech_stack: ["Python", "LightGBM", "scikit-learn", "pandas", "Regex"],
    repo_url: "https://github.com/Rxylon/Amazon-ML-Challenge",
    image_url: "/project-5.jpg",
    featured: false,
    category: "Machine Learning",
    order_index: 5
  }
];

export default async function ProjectsPage() {
  let projects: Project[] = [];
  
  try {
    // Try to fetch from Supabase
    projects = await getProjects();
    console.log("Fetched projects from Supabase:", projects.length);
  } catch (error) {
    console.error("Failed to fetch from Supabase:", error);
  }
  
  // Use fallback if no projects fetched
  if (projects.length === 0) {
    projects = fallbackProjects;
  }

  return <ProjectsPageClient projects={projects} />;
}
