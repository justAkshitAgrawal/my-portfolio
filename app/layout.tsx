import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshit Agrawal",
  description: "Software Engineer | Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="min-h-screen bg-[#111010] text-white">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
