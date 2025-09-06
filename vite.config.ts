import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// Default Vite config for the demo/site (SPA build)
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
});
