import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "./ui/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shithead",
  description: "Shithead card game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
