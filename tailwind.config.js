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
            // 'white': '#FFFFFF'
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
            body: ["Helvetica", "sans-serif"]
        },
        backgroundImage: {
        'hero-image-android': "url('./src/assets/shape-android.svg')",
        'hero-image-tablet': "url('./src/assets/shape-tablet.svg')",
        'hero-image-desktop': "url('./src/assets/shape-desktop.svg')"
        },
    },
    plugins: [],
}

