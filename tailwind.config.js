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
                    DEFAULT: '#2F48B0',
                    50: '#ADB9E9',
                    100: '#9DABE5',
                    200: '#7D90DC',
                    300: '#5D74D4',
                    400: '#3D58CB',
                    500: '#2F48B0',
                    600: '#233684',
                    700: '#172457',
                    800: '#10193C',
                    900: '#0B1028'
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
                // 'gray': {
                //     DEFAULT: '#8F9399',
                //     50: '#F7F7F8',
                //     100: '#E7E8E9',
                //     200: '#DCDEE0',
                //     300: '#C4C6CA',
                //     400: '#B7B9BE',
                //     500: '#A1A5AA',
                //     600: '#8C9097',
                //     700: '#52565B',
                //     800: '#333538',
                //     900: '#1D1E20'
                // },
                // 'gray': {
                //     DEFAULT: '#707070',
                //     50: '#f7f8fa',
                //     100: '#e9eaec',
                //     200: '#eaecee',
                //     300: '#cbcbcb',
                //     400: '#8F8F8F',
                //     500: '#707070',
                //     600: '#5C5C5C',
                //     700: '#474747',
                //     800: '#333333',
                //     900: '#1F1F1F'
                // },
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require('@tailwindcss/forms'), require('@headlessui/tailwindcss')],
}
