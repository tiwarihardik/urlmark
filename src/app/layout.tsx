import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
let name = '';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "URL Mark",
  description: "Never forget your urls anymore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable}antialiased`}
    >
    <div
        className="min-h-screen bg-gradient-to-r from-blue-900 to-gray-700 flex flex-col items-center justify-center">
        <div className="text-center space-y-4">
            <p className="text-xl font-semibold text-white">{name != '' || name ? `Hi, ${name}` : "Hi, Welcome to"}</p>
            <h1 className="text-4xl font-bold text-white">URL Mark</h1>
        </div>
        <div className="skeleton-loader">
            {children}
        </div>
    </div>
    <div className="text-center bg-gray-900 p-4">
        <h3 className="text-sm font-medium text-gray-400">
            Made with <span className="text-red-500">❤️</span> by
            <a
                href="https://github.com/tiwarihardik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline ml-1"
            >
                @tiwarihardik
            </a>
        </h3>
    </div>
    </body>
    </html>
  );
}
