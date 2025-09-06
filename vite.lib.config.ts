import { defineConfig } from "vite";
import * as path from "path";

// Library build config (consumers install this package)
export default defineConfig({
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
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    // Use esbuild to transpile TSX with the automatic runtime
    // and keep React fully external at runtime.
    target: "es2019",
  },
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "react",
  },
});
