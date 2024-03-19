/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
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
        '2xsm': '380px',
        'xsm': '440px',
      },
      boxShadow: {
        'all': '0 0 10px 10px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'even'],
    },
  },
  darkMode: 'class'
}