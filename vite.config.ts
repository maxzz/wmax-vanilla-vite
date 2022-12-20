import path from 'path';
import { defineConfig } from 'vite';
import htmlInject from 'vite-plugin-html-inject';

//https://vitejs.dev/config/
export default defineConfig({
    base: '',
    plugins: [
        htmlInject(),
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
