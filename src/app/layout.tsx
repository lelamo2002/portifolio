import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const firaCode = Fira_Code({ subsets: ["latin"], variable: "--Fira-Code" });

export const metadata: Metadata = {
  title: "Leo's Resume",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable}`}>
        <div className="flex w-screen h-screen bg-primary-black justify-center items-center">
          <div className="flex flex-1 mx-4 h-[96%] bg-primary-dark-blue justify-center items-center rounded-xl border-line border">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
