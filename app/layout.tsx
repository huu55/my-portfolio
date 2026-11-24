import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "胡倚碧 · HU YIBI — UI/UX & Industrial Designer",
  description:
    "胡倚碧（HU YIBI）个人作品集。北京林业大学工业设计研究生，聚焦交互与体验设计。曾于百度、滴滴出行、作业帮实习。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
