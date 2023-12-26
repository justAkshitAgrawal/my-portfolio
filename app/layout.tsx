import NavBar from "@/components/NavBar";
import Providers from "@/components/Providers";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshit Agrawal ",
  description: "Software Engineer | Full Stack Developer",
  metadataBase: new URL("https://akshitagrawal.dev"),
  openGraph: {
    images: "./opengraph-image.png",
  },
  twitter: {
    images: "./twitter-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <main className="min-h-screen bg-[#111010] text-white  md:flex md:flex-col md:items-center">
            <div className=" max-w-2xl w-full">
              <div className="md:self-start">
                <NavBar />
              </div>
            </div>
            {children}
            <Toaster />
          </main>
        </Providers>
      </body>
    </html>
  );
}
