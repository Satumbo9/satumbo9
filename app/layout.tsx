import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
// import { Noto_Sans } from "next/font/google";

import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satumbo9",
  description: "Satumbo portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth bg-gradient-to-b from-[#9967da]  to-[#5a65c4]"
    >
      <body
        className={` ${geistMono.variable} ${inter.className} ${inter.className}  md:mx-5 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
