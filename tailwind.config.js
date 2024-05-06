/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                '21': '5.12rem',
                '45': '11.19rem'
            },
            colors: {
            'gray-10': '#181818',
            'white-10': '#F4F0E6',
            },
        },
        fontSize: {
            sm: '0.8rem',
            'sm-2': '0.875rem',
            base: '1rem',
            xl: '1.25rem',
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3rem',
            '6xl': '5rem'
        },
        fontFamily: {
            body: ["sans-serif"]
        },
        backgroundImage: {
        'svg-1': "url('./src/assets/bg1-wave.svg')",
        },
    },
    plugins: [],
}

