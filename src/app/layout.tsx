import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "luminaa2", description: "Premium streaming platform" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-white min-h-screen">{children}</body>
    </html>
  );
}
