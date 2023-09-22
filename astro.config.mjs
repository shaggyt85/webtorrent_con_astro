import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  buildOptions: {
    ServiceWorker: "./sw.min.js",
    // ServiceWorker: false
  },
  output: "hybrid",
});
