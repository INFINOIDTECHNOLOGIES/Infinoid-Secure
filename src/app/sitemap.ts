import type { MetadataRoute } from "next";
import { industries, products, resourceSlugs } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.infinoidsecure.com";
  return [
    "/",
    "/solutions",
    "/products",
    "/industries",
    "/resources",
    "/about-us",
    "/contact-us",
    "/partners",
    "/support",
    "/solutions/video-surveillance",
    "/solutions/access-control",
    "/solutions/time-attendance",
    ...products.map((product) => `/products/${product.slug}`),
    ...industries.map((industry) => `/industries/${industry.slug}`),
    ...resourceSlugs.map((slug) => `/resources/${slug}`),
  ].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() }));
}