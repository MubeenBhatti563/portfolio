import type { MetadataRoute } from "next";

const SITE_URL = "https://portfolio-beryl-eta-zuq6c5ksg2.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
