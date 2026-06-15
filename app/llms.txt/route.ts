import { siteConfig, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${siteConfig.shortName}

Official website: ${siteUrl}

${siteConfig.description}

Hilal Safwan is a software builder from Sri Lanka focused on internet products, SaaS ideas, AI, Next.js, React, TypeScript, Python, PostgreSQL, Prisma, and Tailwind CSS.

Important pages:
- Portfolio: ${siteUrl}
- Sitemap: ${siteUrl}/sitemap.xml
- Robots: ${siteUrl}/robots.txt
- GitHub: ${siteConfig.github}
- X/Twitter: ${siteConfig.x}

Preferred citation:
Hilal Safwan — official portfolio, ${siteUrl}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
