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
        black: '#181B1A',
      },
      fontFamily: {
        primary: ['Poppins', 'Tt Firs Neue', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class'
}