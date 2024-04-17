"use client";

import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import "./globals.css";
import { usePathname} from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const currentPath = usePathname();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const textColor = theme === "light" ? "text-black" : "text-white";

  return (
    <html lang="en" className={`${inter.className} ${theme}`}>
      <body>
        <main className={`container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-8`}>
          <nav className="flex justify-between items-center mx-auto max-w-33.5 print:space-y-6 mb-1">
          <p className="text-pretty font-GeistMono text-xs text-muted-foreground">
            <Link
              href="/"
              className={`inline-flex gap-x-1.5 align-baseline leading-none ${currentPath === '/' ? `font-bold font-GeistMono text underline opacity-90 ${textColor}` : 'hover:underline'}`}
            > Work </Link> <span> / </span>
            <Link
              href="/about"
              className={`inline-flex gap-x-1.5 align-baseline leading-none ${currentPath === '/about' ? `font-bold font-GeistMono text-black underline opacity-90 ${textColor}` : 'hover:underline'}`}
            > About </Link>
          </p>
          <Button className="rounded-full" variant="ghost" onClick={toggleTheme}>
            <span className="text-pretty font-GeistMono text-xs text-muted-foreground"> {theme === "light" ? "Lights Off": "Lights On" }</span>
          </Button>
        </nav>
        <header className="mx-auto w-full max-w-34 space-y-8 text-center border-b border-gray-300 mb-10"> </header>
        <main>{children}</main>
        </main>
      </body>
      <Analytics />
    </html>
  );
}
