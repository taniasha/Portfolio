import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tania — Developer Intern & Fresher",
  description:
    "Portfolio of Tania (@taniasha), a passionate fresher and developer currently 6+ months into a software internship, focusing on Frontend, React, and Tailwind CSS.",
  keywords: [
    "Tania",
    "taniasha",
    "Fresher Developer",
    "Frontend Intern",
    "Full Stack Intern",
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "Portfolio",
  ],
  authors: [{ name: "Tania", url: "https://github.com/taniasha" }],
  openGraph: {
    title: "Tania — Developer Intern & Fresher",
    description:
      "Passionate fresher 6+ months into a software internship, building clean responsive web apps with Tailwind CSS & React.",
    url: "https://github.com/taniasha/Portfolio",
    siteName: "Tania Portfolio",
    type: "website",
  },
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
