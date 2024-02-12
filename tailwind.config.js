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
        'gray-primary': '#9ca3af',
        'gray-secondary': '#c3cad5'
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        headline: ['Bebas Neue', 'sans-serif']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class'
}