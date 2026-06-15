import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { siteConfig, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f2eb",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Hilal Safwan",
    "Hilal Safwan portfolio",
    "Sri Lanka developer",
    "indie hacker",
    "full-stack developer",
    "Next.js developer",
  ],
  authors: [{ name: "Hilal Safwan", url: siteUrl }],
  creator: "Hilal Safwan",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.shortName,
  },
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    url: siteUrl,
    siteName: siteConfig.shortName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google21cb3952e9841b4b",
  },
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
