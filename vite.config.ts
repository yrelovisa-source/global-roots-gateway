// Vercel build target — disables the Cloudflare plugin and emits a
// Vercel Build Output API bundle in `.vercel/output/`.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "vercel",
  },
});
