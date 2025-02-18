import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  // Explicitly load the correct `.env` file
  const env = loadEnv(mode, process.cwd(), "VITE_");

  console.log(`Loaded Vite Env for mode: ${mode}`, env); // Debugging

  return {
    plugins: [react()],
    define: {
      "process.env": env, // Ensures Vite reads environment variables
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
      port: 8080,
    },
    json: {
      namedExports: true, // Allow JSON files to be used directly
      stringify: true, // Ensure JSON is served as text
    },
  };
});
