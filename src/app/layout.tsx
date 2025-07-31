import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import { Berkshire_Swash, Noto_Sans } from "next/font/google";
import "./globals.css";

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

const berkshire = Berkshire_Swash({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-berkshire',
  display: 'swap',
});

const notoSans = Noto_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BappaInUSA",
  description: "Ganpati Idols Delivered Across the USA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${berkshire.variable} ${notoSans.variable} font-berkshire`}>
        {children}
      </body>
    </html>
  );
}
