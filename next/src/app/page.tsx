"use client";

export default function HomePage() {
  const updates = [
    {
      date: "2024-06-25",
      description: "Started new AI research position at LIRA Lab focusing on autonomous vehicle motion planning"
    },
    {
      date: "2024-06-01",
      description: "Started my Master's degree at University of Bilkent"
    },
  ];

  return (
    <div className="p-28">
      <h1 className="text-xl font-bold mb-2">Brief</h1>
      <p className="text-gray-600 mb-8 text-justify">
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
      <h1 className="text-xl font-bold mb-2">Updates</h1>
      <p className="text-gray-500 mb-8 text-sm">
        Here you may see a timeline and most updated news about my life and
        plans!
      </p>

      <div className="w-full">
        <table className="w-full border-collapse text-gray-600 font-light">
          {/* <thead>
            <tr>
              <th className="border-b border-gray-300 px-4 py-2 text-left font-semibold">Date</th>
              <th className="border-b border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
            </tr>
          </thead> */}
          <tbody>
            {updates.map((update, index) => (
              <tr key={index}>
                <td className="border-t border-gray-300 px-4 py-2 text-sm text-black font-bold">
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
