import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kinshuk Chauhan | Portfolio",
  description: "Building the future of software engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-linear-void text-linear-text antialiased">
        {children}
      </body>
    </html>
  );
}
