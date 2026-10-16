import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://invincible-seven.vercel.app");
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", origin).toString()}\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
};
