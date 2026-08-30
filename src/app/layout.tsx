import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tania — Full Stack Developer (Frontend Focused)",
  description:
    "Portfolio of Tania (@taniasha), a Full Stack Developer specializing in fluid frontend architectures, Tailwind CSS, and full-stack web applications.",
  keywords: [
    "Tania",
    "taniasha",
    "Full Stack Developer",
    "Frontend Specialist",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Tania", url: "https://github.com/taniasha" }],
  openGraph: {
    title: "Tania — Full Stack Developer (Frontend Focused)",
    description:
      "Crafting polished, performant web applications with Tailwind CSS, Next.js, and modern full-stack architectures.",
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
