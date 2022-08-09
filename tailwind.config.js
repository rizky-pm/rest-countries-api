/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'sans-serif': ['Poppins', 'sans-serif'],
    },

    extend: {
      colors: {
        lightDarkBlue: 'hsl(209, 23%, 22%)',
        darkBlue: 'hsl(207, 26%, 17%)',
        veryDarkBlue: 'hsl(200, 15%, 8%)',
        darkGray: 'hsl(0, 0%, 52%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
