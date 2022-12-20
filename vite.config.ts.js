import path from 'path';
import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';

console.log("nunjucks", nunjucks);
var vite_config = defineConfig({
  base: "",
  plugins: [
    nunjucks()
  ],
  server: {
    port: 3e3
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});

export { vite_config as default };
