import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Onur-style Portfolio",
  description: "Software Engineer • Writer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-6xl min-h-screen"> {/* Added min-h-screen */}
            <div className="grid grid-cols-1 h-full md:grid-cols-[280px_1fr] gap-10 md:gap-12 min-h-screen"> {/* Added min-h-screen */}
              <Sidebar />
              <main className="py-8 md:py-12">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
