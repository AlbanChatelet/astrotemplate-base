import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://quiet-dango-c029b4.netlify.app/",
  integrations: [preact()],
});