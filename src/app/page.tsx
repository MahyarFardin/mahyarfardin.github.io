"use client";

export default function HomePage() {
  const updates = [
    {
      date: "2025-06-25",
      description: "Started new AI research position at LIRA Lab."
    },
    {
      date: "2025-06-01",
      description: "Started my Master's degree at University of Bilkent"
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 py-10 md:py-20">
      <h1 className="text-xl md:text-2xl font-bold mb-3">Brief</h1>
      <p className="text-gray-600 text-sm md:text-base mb-8 text-justify">
        I am a computer engineer and AI researcher specializing in
        computer vision & robotics automation. My academic work has produced contributions in
        areas such as OCR preprocessing with dilated U-Nets, brain tumor
        segmentation with neuro-evolutionary methods, and generative adversarial
        models for document restoration. Alongside these research activities, I
        have gained industrial experience on an international scale, including
        projects in the United States and collaborations with startups, where I
        led teams developing synthetic datasets, advanced prompt-engineered NLP
        systems, and scalable AI-driven applications. This dual background
        enables me to bridge rigorous research with the demands of real-world
        product development.
      </p>
      <h1 className="text-xl md:text-2xl font-bold mb-2">Updates</h1>
      <p className="text-gray-500 text-sm md:text-base mb-8">
        Here you may see a timeline and most updated news about my life and
        plans!
      </p>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-gray-600 font-light">
          {/* <thead>
            <tr>
              <th className="border-b border-gray-300 px-4 py-2 text-left font-semibold">Date</th>
              <th className="border-b border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
            </tr>
          </thead> */}
          <tbody>
            {updates.map((update, index) => (
              <tr key={index}>
                <td className="border-t border-gray-300 px-4 py-2 text-xs sm:text-sm text-black font-bold">
                  {update.date}
                </td>
                <td className="border-t border-gray-300 px-4 py-2">
                  {update.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
