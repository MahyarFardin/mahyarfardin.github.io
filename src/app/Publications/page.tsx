import { BookOpen } from "lucide-react";

export default function PublicationsPage() {
  const publications = [
    {
      title: "UDiNet: A dilated U-net for improving OCR performance",
      authors: "Mahyar Fardinfar, Pouya Rashidikia, Mina Zolfy",
      venue: "International Conference on Industrial Engineering and Operations Management (IEOM 2024)",
      year: "2024",
      status: "Published",
      abstract: "We present a novel dilated U-Net architecture specifically designed for OCR preprocessing tasks, achieving significant improvements in document restoration quality and OCR accuracy.",
      links: {
        paper: "https://index.ieomsociety.org/index.cfm/article/view/ID/27870",
        code: "https://github.com/MahyarFardin/UDiNet/"
      }
    },
    {
      title: "EU-Net: A Neuro-Evolutionary Approach for 3D Brain Tumor Segmentation",
      authors: "Amirreza M. Shebly, Mahyar Fardinfar, Mohammad Sarhang, Amir A. Ghavifekr",
      venue: "International conference of Control, Instrumentation, and Automation",
      year: "2024",
      status: "Published",
      abstract: "This work introduces a neuro-evolutionary approach to brain tumor segmentation, combining genetic algorithms with deep learning for improved accuracy in medical image analysis.",
      links: {
        paper: "https://ieeexplore.ieee.org/abstract/document/10768162"
      }
    },
  ];

  return (
    <div className="px-6 sm:px-8 md:px-10 lg:px-16 xl:px-28 py-10 md:py-20">
      <h1 className="flex items-center gap-2 font-serif text-2xl md:text-3xl font-bold mb-2 text-neutral-900">
        <BookOpen size={24} style={{ color: "var(--accent-publications)" }} />
        Publications
      </h1>
      <div className="mb-6 h-[3px] w-10 rounded-full" style={{ backgroundColor: "var(--accent-publications)" }} />

      <div className="space-y-6 md:space-y-8">
        {publications.map((pub, index) => (
          <div key={index} className="border-l-2 border-neutral-200 pl-4 md:pl-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 md:gap-0 mb-2">
              <h2 className="font-serif text-base md:text-lg font-semibold text-neutral-900 leading-tight pr-4">
                {pub.title}
              </h2>
              <span className="self-start sm:self-auto inline-flex text-xs px-2 py-1 rounded-full whitespace-nowrap border border-neutral-300 text-neutral-600">
                {pub.status}
              </span>
            </div>

            <p className="text-sm md:text-base text-neutral-600 mb-2">
              {pub.authors}
            </p>

            <p className="text-sm md:text-base text-neutral-700 mb-3">
              <span className="font-medium">{pub.venue}</span> • {pub.year}
            </p>

            <p className="text-sm md:text-base text-neutral-600 mb-4 leading-relaxed">
              {pub.abstract}
            </p>

            <div className="flex flex-wrap gap-3">
              {Object.entries(pub.links).map(([type, url]) => (
                <a
                  key={type}
                  href={url}
                  className="text-xs text-[#1d3557] hover:text-neutral-900 underline"
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
