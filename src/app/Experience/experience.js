import { Tractor, Route, BrainCircuit, Users, ScanText, Boxes } from "lucide-react";

const items = [
  {
    title: "TUBITAK Sayem Project",
    subtitle: "Ankara",
    icon: Tractor,
    bullets: [
      "Building an autonomous robotic system for intelligent farming, designed to operate reliably in unstructured outdoor field conditions.",
      "Combining perception, planning, and control modules into a unified pipeline for automated field operation.",
      "Automating crop monitoring and field navigation to reduce manual labor and improve farming efficiency.",
    ],
  },
  {
    title: "Robotics Researcher",
    subtitle: "Ankara, LIRA Lab",
    icon: Route,
    bullets: [
      "Focusing on methods for inference-time obstacle avoidance in diffusion-based planners, enabling safer trajectory generation without retraining the underlying model.",
    ],
  },
  {
    title: "AI Engineer",
    subtitle: "Mozayedegar, Tabriz University Incubation Center (1 year)",
    icon: BrainCircuit,
    bullets: [
      "Led a team of engineers across NLP and computer vision projects, applying advanced prompt engineering techniques to improve model reliability.",
      "Built high-speed image processing models optimized for low-latency deployment in production pipelines.",
      "Developed business intelligence dashboards and incremental learning systems to continuously improve price prediction accuracy.",
    ],
  },
  {
    title: "Research Team Lead",
    subtitle: "University of Tabriz, Applied Deep Learning Lab (1 year)",
    icon: Users,
    bullets: [
      "Created and mentored 5 intern teams, guiding them from problem definition through to working prototypes.",
      "Launched projects in GNN-based trajectory prediction and real-time sign-language detection, spanning both research and applied deployment.",
      "Directed work on diffusion-based video generation and EEG-based sleep phase prediction, bridging generative modeling with biomedical signal analysis.",
    ],
  },
  {
    title: "Computer Vision Researcher",
    subtitle: "University of Tabriz, Applied Deep Learning Lab (1.5 years)",
    icon: ScanText,
    bullets: [
      "Developed U-Net and GAN-based models for document restoration, targeting scanned and photographed paper documents.",
      "Improved downstream OCR performance by removing severe crumpling artifacts from paper images prior to text recognition.",
    ],
  },
  {
    title: "3D Design Team-lead and AI Engineer",
    subtitle: "Boston University, USA (2 years)",
    icon: Boxes,
    bullets: [
      "Led a team generating synthetic 3D datasets using Blender to support downstream computer vision training.",
      "Curated and cleaned motion and video data to support AI-driven personalized workout solutions.",
      "Contributed to an AI application optimized for real-time performance within the Unity game engine.",
    ],
  },
];

export default items;
