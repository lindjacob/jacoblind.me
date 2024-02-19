/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}',
            'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#3b82f6',
        'blue-secondary': '#1d4ed8',
        'black-primary': '#181B1A',
        'black-secondary': '#1b2025',
        'black-tertiary': '#1f2937',
        'gray-primary': '#c3cad5',
        'gray-secondary': '#9ca3af',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        headline: ['Bebas Neue', 'sans-serif']
      },
      backgroundPosition: {
        'hero-bg-pos': 'right 5rem bottom -5rem',
      },
      screens: {
        'xsm': '400px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'even'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class'
}