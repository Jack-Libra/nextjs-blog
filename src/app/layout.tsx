import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JackLibra - 技術筆記與專案展示",
  description: "分享資料分析、自動化、前後端開發的實作經驗與學習筆記",
  keywords: "JackLibra, 技術筆記, 資料分析, 自動化, 前端開發, 後端開發, Python, Next.js",
  authors: [{ name: "JackLibra" }],
  openGraph: {
    title: "JackLibra - 技術筆記與專案展示",
    description: "分享資料分析、自動化、前後端開發的實作經驗與學習筆記",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="mx-auto flex-1 px-6 lg:px-12">
                {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
