import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const firaCode = Fira_Code({ subsets: ["latin"], variable: "--Fira-Code" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable}`}>{children}</body>
    </html>
  );
}
