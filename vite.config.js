import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "./",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "infinity-spinners",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
      watch: {
        exclude: ["node_modules/**", ".storybook/**"],
      },
    },
  },
});
