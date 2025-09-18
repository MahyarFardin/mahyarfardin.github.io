"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        aria-label="Open menu"
        className="inline-flex items-center justify-center rounded-md border px-3 py-2"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={18} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-30"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-40 w-72 max-w-[80vw] bg-white shadow-xl transition-transform">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="font-semibold">Menu</div>
              <button
                aria-label="Close menu"
                className="inline-flex items-center justify-center rounded-md border px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                <X size={16} />
              </button>
            </div>
            <div className="h-[calc(100vh-56px)] overflow-y-auto">
              <Sidebar />
            </div>
          </div>
        </>
      )}
    </div>
  );
}


