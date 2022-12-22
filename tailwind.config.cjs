/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{html,ts,js}'],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'base', // only generate global styles
            //strategy: 'class', // only generate classes
        }),
    ],
};
