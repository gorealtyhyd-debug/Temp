import type { MetadataRoute } from "next";
import { getPublishedOlympiads } from "@/lib/content/olympiads";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/olympiads",
    "/exam-details",
    "/register",
    "/results",
    "/awards",
    "/gallery",
    "/downloads",
    "/exam-centres",
    "/faq",
    "/contact",
    "/student-login",
    "/school-registration",
    "/coordinator-registration",
    "/verify-hall-ticket",
    "/verify-certificate",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
  ];

  const olympiadRoutes = getPublishedOlympiads().map((item) => `/olympiads/${item.slug}`);

  return [...staticRoutes, ...olympiadRoutes].map((path) => ({
    url: absoluteUrl(path || "/"),
    lastModified: new Date(),
    changeFrequency: path.startsWith("/olympiads") ? "weekly" : "monthly",
    priority: path === "" || path === "/olympiads" || path === "/register" ? 1 : 0.7,
  }));
}
