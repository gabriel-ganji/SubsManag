/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          ultralight: '#777777',
          extralight: '#333333',
          light: '#292929',
          DEFAULT: '#1b1b1b',
          dark: '#0d0d0d',
          extradark: '',
        },
      },
    },
  },
  plugins: [],
})

