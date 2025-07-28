import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import { Berkshire_Swash } from "next/font/google";
import "./globals.css";

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

const berkshireSwash = Berkshire_Swash({
  weight: "400",
  variable: "--font-berkshire-swash-regular",
  display: 'swap',
  subsets: ["latin"]
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
      <body className={berkshireSwash.className}>
        {children}
      </body>
    </html>
  );
}
