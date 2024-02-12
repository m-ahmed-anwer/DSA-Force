import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import "./globals.css";

const roboto = Ubuntu_Mono({ subsets: ["cyrillic"], weight: "400" });

export const metadata: Metadata = {
  title: "DSA Force",
  description: "Crack all the Data Strcutures and Algorithms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
