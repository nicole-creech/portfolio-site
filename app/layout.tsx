import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicole Creech | Full Stack Engineer",
  description:
    "Full stack engineer specializing in secure, scalable systems and high-performance APIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}