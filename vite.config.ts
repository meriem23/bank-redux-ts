import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
  define: {
    "process.env.NODE_ENV": `"${mode}"`,
  },
}));
