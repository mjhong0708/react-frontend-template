import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Uncomment the following lines to enable server proxying
  // server: {
  //   host: true,
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3000",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //     "/ws": {
  //       target: "http://localhost:3000",
  //       ws: true,
  //       changeOrigin: true,
  //     },
  //   },
  // },
});