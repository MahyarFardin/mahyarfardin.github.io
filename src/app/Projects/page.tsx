export default function ProjectsPage() {
  const projects = [
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

  return (
    <div className="relative px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 py-10 md:py-20">
      {/* Gradient background */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 100% 0%, rgba(34, 197, 94, 0.15) 0%, transparent 10%)",
        }}
      />

      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 relative z-10">Projects</h1>
      
      <p className="text-gray-600 text-sm md:text-base mb-8 md:mb-12 relative z-10 max-w-3xl">
        A collection of my projects spanning computer vision, 
        medical AI, natural language processing, and generative models. Each project 
        represents a unique challenge and learning opportunity in the field of artificial intelligence & software engineering.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8 md:mb-12 relative z-10">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="space-y-6 md:space-y-8 relative z-10">
        {projects.map((project, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4 md:pl-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 md:gap-0 mb-3">
              <h2 className="text-base md:text-xl font-semibold text-gray-900 leading-tight pr-4">
                {project.title}
              </h2>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
                <span className="text-xs text-gray-500">{project.year}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">
                {project.category}
              </span>
            </div>
            
            <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
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
                  className="text-sm text-blue-600 hover:text-blue-800 underline"
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
