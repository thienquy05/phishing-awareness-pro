import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stay Safe Online | Practice Spotting Fake Links",
  description: "A friendly, easy-to-use guide to help you spot fake emails and malicious links.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-sky-50 text-gray-800`}>{children}</body>
    </html>
  );
}
