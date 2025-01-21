import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

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
      name: "ZimmerIcons", // A global name for UMD builds
      formats: ["es", "cjs"], // The modules you want to build
      fileName: (format) => `zimmer-icons.${format}.js`,
    },
    rollupOptions: {
      // Ensure to externalize deps that shouldn’t be bundled into your library
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
