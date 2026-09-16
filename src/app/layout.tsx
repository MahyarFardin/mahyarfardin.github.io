import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Mahyar Fardinfar",
  description: "AI Engineer • Researcher",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={lora.variable}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="w-full min-h-screen">
            {/* Mobile header */}
            <header className="md:hidden sticky top-0 z-20 flex items-center justify-between px-4 py-3 border-b border-neutral-200 bg-white/80 backdrop-blur">
              <MobileSidebar />
              <div className="font-serif font-semibold text-neutral-900">Mahyar Fardinfar</div>
              <div className="w-9" />
            </header>
            <div className="grid grid-cols-1 h-full md:grid-cols-[260px_1fr] min-h-screen">
              <aside className="hidden md:block sticky top-0 h-screen">
                <Sidebar />
              </aside>
              <main className="relative z-10 w-full shadow-[-3px_0_10px_-2px_rgba(0,0,0,0.1)]">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
