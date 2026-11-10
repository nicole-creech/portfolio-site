import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicole Creech | Full Stack Engineer",
  description:
    "Full stack engineer building secure, scalable systems, thoughtful developer tools, and creative interactive projects.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Reading request headers renders every page per request, which the
  // nonce-based CSP in proxy.ts requires (static pages can't carry a nonce).
  await headers();

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}