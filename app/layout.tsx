import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hilalsafwan.vercel.app"),
  title: "Hilal Safwan — Builder",
  description: "I ship things on the internet and believe one of my ideas will work.",
  keywords: ["Hilal Safwan", "Hilal Safwan portfolio", "Sri Lanka developer", "indie hacker Sri Lanka"],
  authors: [{ name: "Hilal Safwan" }],
  creator: "Hilal Safwan",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Hilal Safwan",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "Hilal Safwan — Builder",
    description: "Building in public. Waiting for the breakthrough.",
    url: "https://hilalsafwan.vercel.app",
    siteName: "Hilal Safwan",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hilal Safwan — Builder",
    description: "Building in public. Waiting for the breakthrough.",
    creator: "@hilalsafwan",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google21cb3952e9841b4b.html",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://hilalsafwan.vercel.app" />
      </head>
      <body className={`${inter.className} bg-cream text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
