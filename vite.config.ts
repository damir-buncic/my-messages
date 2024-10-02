import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: "index.html",
        background: "/src/background/index.ts",
        options: "options.html",
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name == "background" ? "[name].js" : "assets/[name]-[hash].js";
        },
      },
    },
  },
});
