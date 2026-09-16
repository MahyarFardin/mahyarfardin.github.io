"use client";

import { House } from "lucide-react";

export default function HomePage() {
  const updates = [
    {
      date: "2026-02",
      description: "Joined TUBITAK Sayem Yesil project related to intelligent farming"
    },
    {
      date: "2025-06",
      description: "Started new AI research position at LIRA Lab."
    },
    {
      date: "2025-06",
      description: "Started my Master's degree at University of Bilkent"
    },
  ];

  return (
    <div className="px-6 sm:px-8 md:px-10 lg:px-16 xl:px-28 py-10 md:py-20">
      <h1 className="flex items-center gap-2 font-serif text-xl md:text-2xl font-bold mb-2 text-neutral-900">
        <House size={20} style={{ color: "var(--accent-base)" }} />
        Brief
      </h1>
      <div className="mb-4 h-[3px] w-10 rounded-full" style={{ backgroundColor: "var(--accent-base)" }} />
      <p className="text-neutral-600 text-sm md:text-base mb-8 text-justify">
      Mahyar Fardinfar is an Artificial Intelligence Researcher and Machine Learning Engineer 
      whose work bridges rigorous academic research with complex, real-world product development. 
      Currently a researcher at Bilkent University, his core expertise lies at the intersection of 
      computer vision, generative AI, and robotic systems. His work on UDiNet was notably presented 
      at the 2nd GCC International Conference on Industrial Engineering and Operations Management. 
      Beyond medical imaging, Mahyar also brings a robust theoretical foundation to his algorithmic work, 
      exploring advanced frameworks like Diffusion Predictive Control and latent diffusion models to solve 
      complex tasks like generating robotic waypoints for maze navigation. Driven by a continuous pursuit 
      of foundational AI challenges, his recent open-source initiatives explore a diverse array of advanced 
      deep learning and robotics applications, including learning-free visual servoing, decoder-only models 
      for code completion, and recurrent and convolutional generative adversarial networks for depth estimation.
      I am currenlty working under the supervision of <a href="https://oz-oguz.github.io" target="_blank" rel="noopener noreferrer" className="text-[#1d3557] hover:text-neutral-900 underline">Dr. Salih Ozgur Oguz</a> @ <a href="https://lira-lab.github.io" target="_blank" rel="noopener noreferrer" className="text-[#1d3557] hover:text-neutral-900 underline">LiRA lab</a>.
      </p>
      <h1 className="font-serif text-xl md:text-2xl font-bold mb-2 text-neutral-900">Updates</h1>
      <div className="mb-4 h-[3px] w-10 rounded-full" style={{ backgroundColor: "var(--accent-base)" }} />

      <div className="w-full border-t border-neutral-200 divide-y divide-neutral-200 text-neutral-600 font-light">
        {updates.map((update, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-1 sm:px-4 py-3">
            <div className="text-xs sm:text-sm text-neutral-900 font-semibold sm:w-20 sm:flex-shrink-0">
              {update.date}
            </div>
            <div className="text-sm sm:text-base">
              {update.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
