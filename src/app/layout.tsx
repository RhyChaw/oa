import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MainLayout } from "@/components/layout/main-layout";
import { QueryProvider } from "@/components/providers/query-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OA Platform - Master Coding with AI-Powered Practice",
  description: "Level up your coding skills with our curated collection of algorithmic problems, in-browser editor, and intelligent AI assistance.",
  keywords: ["coding", "programming", "algorithms", "practice", "AI", "education"],
  authors: [{ name: "OA Platform Team" }],
  openGraph: {
    title: "OA Platform - Master Coding with AI-Powered Practice",
    description: "Level up your coding skills with our curated collection of algorithmic problems, in-browser editor, and intelligent AI assistance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OA Platform - Master Coding with AI-Powered Practice",
    description: "Level up your coding skills with our curated collection of algorithmic problems, in-browser editor, and intelligent AI assistance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <QueryProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
