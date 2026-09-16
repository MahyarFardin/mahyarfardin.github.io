"use client";

import { useState } from "react";
import clsx from "clsx";
import { FolderGit2 } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Voxel Manipulation Pipeline",
      description: "A robotics pipeline for generating cluttered tabletop scenes, segmenting objects with SAM3, reconstructing point clouds, and generating grasps for robotic manipulation.",
      technologies: ["Python", "Robotics", "Point Clouds", "SAM3", "Grasp Generation"],
      status: "In Progress",
      year: "2026",
      links: {
        github: "https://github.com/MahyarFardin/Voxel_manipulation",
      },
      category: "Robotics"
    },
    {
      title: "Learning-Free Visual Servoing",
      description: "A modular classical computer-vision pipeline for tracking fast-moving objects (e.g. projectile motion) using background subtraction, pyramidal Lucas-Kanade optical flow, and a Kalman filter — no deep learning required.",
      technologies: ["Python", "Computer Vision", "Optical Flow", "Kalman Filter", "MATLAB"],
      status: "Completed",
      year: "2025",
      links: {
        github: "https://github.com/MahyarFardin/Learning-free_Visual_Survoying",
      },
      category: "Computer Vision"
    },
    {
      title: "Decoder-Only Code Completion",
      description: "Transformer-based decoder-only code completion model trained on the py150 Python dataset, using causal self-attention to predict the next token in a code sequence.",
      technologies: ["Python", "PyTorch", "Transformers", "NLP"],
      status: "Completed",
      year: "2025",
      links: {
        github: "https://github.com/MahyarFardin/Decoder_only_Code_Completion",
      },
      category: "Natural Language Processing"
    },
    {
      title: "Maze Problem RL Solutions",
      description: "Implementation of reinforcement learning solutions for maze path-finding problems; experimenting with different RL algorithms to solve maze navigation tasks.",
      technologies: ["Python", "Reinforcement Learning"],
      status: "Completed",
      year: "2024",
      links: {
        github: "https://github.com/MahyarFardin/Maze_Problem_RL_Solutions",
        
      },
      category: "Reinforcement Learning"
    },
    {
      title: "Monocular Depth Estimation via Transfer Learning",
      description: "Recreation of a depth estimation method from a research paper using transfer learning; implemented in PyTorch though original might have used TensorFlow.",
      technologies: ["Python", "PyTorch", "Transfer Learning", "Computer Vision"],
      status: "Completed",
      year: "2023",
      links: {
        github: "https://github.com/MahyarFardin/Monocular_depth_estimation_via_transfer_learning",
        
      },
      category: "Computer Vision"
    },
    {
      title: "Machine Learning Algorithms (from scratch)",
      description: "Reimplemented a number of machine learning algorithms from scratch, following the book “Hands-on Machine Learning with Scikit-Learn”; good exercise in understanding fundamentals.",
      technologies: ["Python", "NumPy", "Algorithms"],
      status: "Completed",
      year: "2024",
      links: {
        github: "https://github.com/MahyarFardin/Machine_Learning_Algorithms",
        
      },
      category: "ML Fundamentals"
    },
    {
      title: "Deep White Noise Elimination using Recurrent and Convolutional GANs",
      description: "Built a model combining recurrent and convolutional layers in GAN architectures to reduce white noise in signals/images; research / experiments oriented project.",
      technologies: ["Python", "GANs", "Recurrent Neural Networks"],
      status: "Completed",
      year: "2024",
      links: {
        github: "https://github.com/MahyarFardin/Deep-white-noise-elimination-using-recurrent-and-convolutional-generative-adversial-networks",
        
      },
      category: "Signal Processing"
    },
    {
      title: "Practical Linear Algebra Exercises (Julia)",
      description: "Solutions to the exercises from *Practical Linear Algebra for Data Science: From Core Concepts to Applications* by Mike X. Cohen, implemented in Julia and Jupyter notebooks.",
      technologies: ["Julia", "Linear Algebra"],
      status: "Completed",
      year: "",   // fill in when you remember / see commit dates
      links: {
        github: "https://github.com/MahyarFardin/Practical_Linear_Algebra",
        
      },
      category: "Mathematics"
    },
    {
      title: "CLRS Algorithms Implementations",
      description: "Full implementations of the algorithms from *Introduction to Algorithms (CLRS)* in Java and Python; covers sorting, graph algorithms, dynamic programming, etc.",
      technologies: ["Java", "Python", "Algorithms", "Data Structures"],
      status: "Completed",
      year: "",   // you can insert the approximate year
      links: {
        github: "https://github.com/MahyarFardin/CLRS-Algoriothms",
        
      },
      category: "Algorithms"
    },
    {
      title: "Insurance Charge Prediction",
      description: "Exploratory data analysis and predictive modeling of insurance charges using a dataset; includes visualizations and baseline models (without heavy tuning / scaling).",
      technologies: ["Python", "Pandas", "Machine Learning"],
      status: "Completed",
      year: "", 
      links: {
        github: "https://github.com/MahyarFardin/Insurance_charge_prediction",
        
      },
      category: "Data Science"
    },
    {
      title: "Heart Disease Prediction",
      description: "Modeling to predict heart disease outcomes (classification) using health dataset; includes data preprocessing, exploratory analysis, and predictive modeling workflows.",
      technologies: ["Python", "Data Visualization", "Machine Learning"],
      status: "Completed",
      year: "",
      links: {
        github: "https://github.com/MahyarFardin/Hart_Disease_Prediction",
        
      },
      category: "Data Science"
    },
    {
      title: "Multi-CNN COVID-19 Detection",
      description: "Python reproduction of a paper (Elsevier) for COVID-19 detection from X-ray images using multiple pre-trained CNNs + feature selection and a Bernoulli classifier; balanced dataset and preprocessing steps included.",
      technologies: ["Python", "TensorFlow / Keras", "Pretrained CNNs", "Feature Selection", "Image Processing"],
      status: "Completed",
      year: "",
      links: {
        github: "https://github.com/MahyarFardin/Mutli-cnn-covid19-detection",
        
      },
      category: "Computer Vision"
    }
  ];
  
  // Extract unique categories from projects
  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 py-10 md:py-20">
      <h1 className="flex items-center gap-2 font-serif text-2xl md:text-3xl font-bold mb-2 text-neutral-900">
        <FolderGit2 size={24} style={{ color: "var(--accent-projects)" }} />
        Projects
      </h1>
      <div className="mb-6 h-[3px] w-10 rounded-full" style={{ backgroundColor: "var(--accent-projects)" }} />

      <p className="text-neutral-600 text-sm md:text-base mb-8 md:mb-12 max-w-3xl">
        A collection of my projects spanning computer vision,
        medical AI, natural language processing, and generative models. Each project
        represents a unique challenge and learning opportunity in the field of artificial intelligence & software engineering.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8 md:mb-12">
        {categories.map((category) => {
          const active = category === selectedCategory;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={clsx(
                "px-4 py-2 text-sm border rounded-full transition-colors",
                active
                  ? "font-semibold"
                  : "border-neutral-300 text-neutral-700 hover:bg-neutral-50"
              )}
              style={active ? { borderColor: "var(--accent-projects)", color: "var(--accent-projects)" } : undefined}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="space-y-6 md:space-y-8">
        {filteredProjects.map((project, index) => (
          <div key={index} className="border-l-2 border-neutral-200 pl-4 md:pl-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 md:gap-0 mb-3">
              <h2 className="font-serif text-base md:text-xl font-semibold text-neutral-900 leading-tight pr-4">
                {project.title}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded-full border border-neutral-300 text-neutral-600">
                  {project.status}
                </span>
                <span className="text-xs text-neutral-500">{project.year}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-medium text-neutral-500 border border-neutral-200 px-2 py-1 rounded">
                {project.category}
              </span>
            </div>

            <p className="text-neutral-600 text-sm md:text-base mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {Object.entries(project.links).map(([type, url]) => (
                <a
                  key={type}
                  href={url}
                  className="text-sm text-[#1d3557] hover:text-neutral-900 underline"
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
