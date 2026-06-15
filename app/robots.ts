import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/.next/", "/api/"],
    },
    sitemap: "https://hilalsafwan.vercel.app/sitemap.xml",
  };
}
