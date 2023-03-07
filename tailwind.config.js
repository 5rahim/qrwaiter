const {colors} = require("tailwindcss/colors")
const {fontFamily} = require("tailwindcss/defaultTheme")

const variants = [
    'sm', 'md', 'lg', 'xl', '2xl',
    'hover', 'focus', 'active', 'disabled', 'selected', 'group-hover', 'group-focus',
];

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
        "./src/hooks/**/*.{ts,tsx}",
        "./src/stories/**/*.{ts,tsx}",
        "./src/content/**/*.{md,mdx}",
    ],
    safelist: [
        'text-2xl',
        'text-3xl',
        // {
        //     pattern: /bg-(brand|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|line|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|rose|pink)-(50|100|200|300|400|500|600|700|800|900)/,
        //     variants,
        //     // pattern: /^((?:\w+:)*)bg-./
        // },
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
            // screens: {
            //     "2xl": "1440px",
            // },
        },
        data: {
            checked: 'checked',
            selected: 'selected',
            disabled: 'disabled',
            highlighted: 'highlighted',
        },
        extend: {
            boxShadow: {
                'md': '0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            },
            fontFamily: {
                sans: ["var(--font-inter)", ...fontFamily.sans],
            },
            colors: {
                ...colors,
                brand: {
                    50: '#f2f0ff',
                    100: '#eeebff',
                    300: '#c7c2ff',
                    400: '#9f92ff',
                    500: '#6152df',
                    600: '#5243cb',
                    700: '#3f2eb2',
                    800: '#312887',
                    900: "#231c6b",
                    DEFAULT: "#6152df",
                },
                green: {
                    50: '#e6f7ea',
                    100: '#cfead6',
                    // 100: '#5cd4a1',
                    200: '#48cf95',
                    300: '#35c989',
                    400: '#30b47c',
                    500: '#258c60',
                    600: '#1a6444',
                    700: '#154f37',
                    800: '#103b29',
                    900: '#05130d',
                },
                'gray': {
                    DEFAULT: '#7C7D83',
                    50: '#f6f6f6',
                    100: '#e8e8e8',
                    200: '#d5d2d2',
                    300: '#c4c5cb',
                    400: '#7C7D83',
                    500: '#65666C',
                    600: '#48484C',
                    700: '#343437',
                    800: '#232325',
                    900: '#161618'
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require('@tailwindcss/forms'), require('@headlessui/tailwindcss')],
}
