import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RASHQA ANDREAN | R.A.V.E. Portfolio",
  description:
    "Portfolio website of Rashqa Andrean Fitrah Sulaeman — Fullstack Developer, Mobile Developer, and Data Analyst in Training. Built with Next.js, Three.js, and React Three Fiber.",
  keywords: [
    "portfolio",
    "fullstack developer",
    "mobile developer",
    "three.js",
    "react",
    "next.js",
    "rashqa andrean",
  ],
  authors: [{ name: "Rashqa Andrean Fitrah Sulaeman" }],
  openGraph: {
    title: "RASHQA ANDREAN | R.A.V.E. Portfolio",
    description:
      "Interactive portfolio with 3D Apollo Evo visualization — Cyberpunk × Hypercar aesthetic.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
