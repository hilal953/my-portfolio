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
    "Hilal Safwan official website",
    "Hilal Safwan portfolio",
    "Hilal Safwan developer",
    "Hilal Safwan Sri Lanka",
    "Sri Lanka developer",
    "indie hacker",
    "full-stack developer",
    "Next.js developer",
    "software builder",
    "AI products",
    "SaaS builder",
  ],
  authors: [{ name: siteConfig.personName, url: siteUrl }],
  creator: siteConfig.personName,
  publisher: siteConfig.personName,
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.shortName,
  },
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    url: siteUrl,
    siteName: siteConfig.shortName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    creator: siteConfig.twitterHandle,
    images: ["/twitter-image"],
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: siteConfig.personName,
        url: siteUrl,
        email: `mailto:${siteConfig.email}`,
        jobTitle: "Software builder",
        description: siteConfig.description,
        nationality: "Sri Lankan",
        sameAs: [siteConfig.github, siteConfig.x, siteConfig.facebook],
        knowsAbout: [
          "Next.js",
          "React",
          "TypeScript",
          "JavaScript",
          "Python",
          "Artificial Intelligence",
          "SaaS",
          "Digital products",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteConfig.shortName,
        alternateName: [
          "Hilal Safwan Portfolio",
          "Hilal Safwan official website",
        ],
        url: siteUrl,
        inLanguage: "en",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} bg-cream text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
