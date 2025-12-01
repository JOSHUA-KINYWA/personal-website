import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Kinywa - Software Engineer & Data Scientist",
  description: "Experienced Software Engineer with expertise in data analytics, machine learning, and programming. Seeking to leverage knowledge and skills to make an impact as a Data Scientist.",
  keywords: ["Software Engineer", "Data Scientist", "Full Stack Developer", "Machine Learning Engineer", "Portfolio", "Joshua Kinywa"],
  authors: [{ name: "Joshua Kinywa" }],
  creator: "Joshua Kinywa",
  openGraph: {
    title: "Joshua Kinywa - Software Engineer & Data Scientist",
    description: "Experienced Software Engineer with expertise in data analytics, machine learning, and programming.",
    url: "https://joshua-kinywa.vercel.app",
    siteName: "Joshua Kinywa Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Kinywa - Software Engineer & Data Scientist",
    description: "Experienced Software Engineer with expertise in data analytics, machine learning, and programming.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
