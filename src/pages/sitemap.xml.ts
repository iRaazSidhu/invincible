import type { APIRoute } from "astro";
import { projects } from "../data/projects";
import { blogPosts } from "../data/blog";

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://invincible-seven.vercel.app");
  const paths = [
    "/",
    "/work/",
    "/services/",
    "/about/",
    "/contact/",
    "/blog/",
    "/privacy/",
    ...projects.map((project) => `/work/${project.slug}/`),
    ...blogPosts.map((post) => `/blog/${post.slug}/`)
  ];
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = paths.map((path) => {
    const loc = new URL(path, origin).toString();
    return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
  }).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};
