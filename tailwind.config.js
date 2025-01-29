/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          ultralight: '#777777',
          extralight: '#444444',
          light: '#333333',
          DEFAULT: '#1b1b1b',
          dark: '#0d0d0d',
          extradark: '',
        },
      },
    },
  },
  plugins: [],
}

