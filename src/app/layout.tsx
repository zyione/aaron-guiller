import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Architecture Portfolio",
  description: "A luxury minimalist architecture portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased font-sans bg-bg-cream text-text-stone`}>
        {children}
      </body>
    </html>
  );
}
