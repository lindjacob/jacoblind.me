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
        'gray-primary': '#e5e7eb',
        'gray-secondary': '#9ca3af',
        'slate-850': '#1a2434'
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif']
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