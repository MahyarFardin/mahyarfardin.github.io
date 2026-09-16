import { Milestone } from "lucide-react";
import items from "./experience";

export default function JourneyPage() {
  return (
    <div className="px-6 sm:px-8 md:px-10 lg:px-16 xl:px-28 py-10 md:py-20">
      <h1 className="flex items-center gap-2 font-serif text-2xl md:text-3xl font-bold mb-2 text-neutral-900">
        <Milestone size={24} style={{ color: "var(--accent-experience)" }} />
        Journey
      </h1>
      <div className="mb-10 h-[3px] w-10 rounded-full" style={{ backgroundColor: "var(--accent-experience)" }} />

      <div className="space-y-10 md:space-y-12">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="relative border-l-2 border-neutral-200 pl-4 md:pl-6 pb-2">
              <span
                className="absolute -left-4 -top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white"
                style={{ borderColor: "var(--accent-experience)" }}
              >
                <Icon size={16} style={{ color: "var(--accent-experience)" }} />
              </span>

              <h2 className="font-serif text-base md:text-xl font-semibold text-neutral-900 leading-tight pl-6">
                {item.title}
              </h2>
              <div className="text-sm text-neutral-500 mb-3 pl-6">{item.subtitle}</div>

              <ul className="list-disc pl-10 space-y-1 text-neutral-600 text-sm md:text-base">
                {item.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
