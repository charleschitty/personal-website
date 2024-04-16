"use client";

import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import "./globals.css";
import { usePathname } from "next/navigation";

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
  return (
    <html lang="en" className={inter.className}>
        <body>
         <nav className="flex justify-between items-center mx-auto max-w-33.5 print:space-y-6 mb-1">
        <p className="text-pretty font-geist-mono text-sm text-muted-foreground">
          <a
            href="/"
            className={`inline-flex gap-x-1.5 align-baseline leading-none ${currentPath === '/' ? 'text-black underline opacity-90' : 'hover:underline'}`}
            target="_blank"
          > Work </a> <span> / </span>
          <a
            href="/about"
            className={`inline-flex gap-x-1.5 align-baseline leading-none ${currentPath === '/about' ? 'text-black underline opacity-90' : 'hover:underline'}`}
            target="_blank"
          > About </a>
        </p>
        <Button className="rounded-full" variant="ghost" asChild>
          <span className="text-pretty font-geist-mono text-sm text-muted-foreground"> Lights On </span>
        </Button>
      </nav>
      <main>{children}</main>
      <footer>{/* Footer content */}</footer>
        </body>
      <Analytics />
    </html>
  );
}
