import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hilal Safwan — Builder",
  description:
    "I ship things on the internet and believe one of my ideas will work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cream text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
