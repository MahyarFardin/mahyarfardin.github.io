export default function JourneyPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Journey</h1>
      <ol className="relative border-l">
        <li className="ml-4 mb-6">
          <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-gray-400" />
          <time className="text-xs text-gray-500">2024</time>
          <p className="font-medium">Senior Frontend Engineer @ Bitvavo</p>
        </li>
        {/* Add more timeline items */}
      </ol>
    </div>
  );
}
