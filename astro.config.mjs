import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.leanmethods.com.au",
  output: "static",
  adapter: cloudflare({
    imageService: "passthrough",
    inspectorPort: false,
  }),
});
