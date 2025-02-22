import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    base: "/",  // Ensure it serves from root, no unwanted paths
    plugins: [react()],
    define: {
      "process.env": env,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@pages": path.resolve(__dirname, "./src/pages"),
      },
    },
    server: {
      strictPort: true,
      hmr: true,
      port: 5454,
    },
    build: {
      outDir: "dist",
    },
  };
});
