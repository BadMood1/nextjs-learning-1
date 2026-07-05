import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Название всего проекта вверху
export const metadata: Metadata = {
    title: "BadMood App",
    description: "A simple Next.js project to learn the framework and its features.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col">
                <div className="min-h-dvh bg-zinc-200 text-zinc-950">
                    <div
                        className="mx-auto flex min-h-dvh w-full max-w-300 flex-col
                border-x border-zinc-300 bg-white
                "
                    >
                        <Header />
                        <main className="flex-1 px-4 py-8 sm:px-6 sm:py-10">{children}</main>

                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
