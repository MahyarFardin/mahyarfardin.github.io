"use client";

import { Chrono } from "react-chrono";
import items from "./experience";
import { BrainCog, UserCog, FlaskConical, Laptop2, Palette } from "lucide-react";
export default function JourneyPage() {
  const chronoTheme = {
    primary: "#155dfc", // Timeline color updated
    secondary: "#fff",
    cardForeColor: "#000",
    titleColor: "#000",
    titleColorActive: "#fff",
    cardTitleColor: "#000",
    shadowColor: "transparent",
    glowColor: "transparent",
  };

  return (
    <div className="relative p-28">
      <div
        className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-full h-[300px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 50% 0%, #e3f0ff 0%, transparent 80%)",
        }}
      />
      <div className="relative z-10">
        <h1 className="text-2xl font-bold mb-4">Journey</h1>
        <Chrono
          items={items}
          mode="VERTICAL"
          disableToolbar
          borderLessCards
          theme={chronoTheme}
          cardHeight={110}
          lineWidth={2}
          timelinePointDimension={12}
        />
      </div>
    </div>
  );
}
