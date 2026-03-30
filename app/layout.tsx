import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicole Creech | Full Stack Engineer",
  description:
    "Full stack engineer building secure, scalable systems, thoughtful developer tools, and creative interactive projects.",
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