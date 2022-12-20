import path from 'path';
import { defineConfig } from 'vite';
import posthtml from '@vituum/posthtml';

//https://vitejs.dev/config/
export default defineConfig({
    base: '',
    plugins: [
        posthtml(),
    ],
    // integrations: [posthtml()],

    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    }
});
