import path from 'path';
import { defineConfig } from 'vite';
import nunjucks from '@vituum/vite-plugin-nunjucks';

//https://vitejs.dev/config/
export default defineConfig({
    base: '',
    plugins: [
        nunjucks(),
    ],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    }
});
