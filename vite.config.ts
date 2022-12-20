import path from 'path';
import { defineConfig } from 'vite';
import {default as nunjucks} from 'vite-plugin-nunjucks';

console.log('nunjucks', nunjucks);
nunjucks()

// https://vitejs.dev/config/
// export default defineConfig({
//     base: '',
//     plugins: [
//         nunjucks(),
//     ],
//     server: {
//         port: 3000,
//     },
//     resolve: {
//         alias: {
//             '@': path.resolve(__dirname, './src'),
//         }
//     }
// });
