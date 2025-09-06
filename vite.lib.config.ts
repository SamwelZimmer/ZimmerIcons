import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// Library build config (consumers install this package)
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ZimmerIcons",
      formats: ["es", "cjs"],
      fileName: (format) => `zimmer-icons.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

