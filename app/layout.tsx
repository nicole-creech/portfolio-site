import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicole Creech | Security-Minded Full Stack Engineer",
  description:
    "Full stack engineer building access controls, audit trails and reliable backends. 8+ years at JPMorgan Chase and Kroger, M.S. in Cybersecurity.",
};

export const viewport: Viewport = {
  themeColor: "#14121a",
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
