import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_URL || "https://invincible-seven.vercel.app",
  output: "static"
});
