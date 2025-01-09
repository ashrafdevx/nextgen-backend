import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  build: {
    outDir: "dist", // Ensure the output is being written to the dist folder
  },
  base: "/",
  plugins: [
    react(),
    imagetools(), // Add the imagetools plugin
  ],
});
