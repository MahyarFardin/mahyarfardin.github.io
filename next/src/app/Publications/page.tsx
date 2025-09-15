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
    <div className="relative p-28">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 100% 90%, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
        }}
      />

      <h1 className="text-3xl font-bold mb-8 relative z-10">Publications</h1>
      
      <div className="space-y-8 relative z-10">
        {publications.map((pub, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-6 pb-6">
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-lg font-semibold text-gray-900 leading-tight pr-4">
                {pub.title}
              </h2>
              <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                pub.status === 'Published' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {pub.status}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mb-2">
              {pub.authors}
            </p>
            
            <p className="text-sm text-gray-700 mb-3">
              <span className="font-medium">{pub.venue}</span> • {pub.year}
            </p>
            
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {pub.abstract}
            </p>
            
            <div className="flex flex-wrap gap-3">
              {Object.entries(pub.links).map(([type, url]) => (
                <a
                  key={type}
                  href={url}
                  className="text-xs text-blue-600 hover:text-blue-800 underline"
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
