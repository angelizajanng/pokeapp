/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/**/*.sass", "./assets/**/*.scss",  "./app/*.{js,json}"],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF'
      },
      fontSize: {
        base: "1rem"
      },
      fontFamily: {
        roboto: ["'roboto'", 'sans-serif'],
        roboto_black: ["'roboto-black'", 'sans-serif']
      }
    },
  },
  daisyui: {
    themes: [
      {
        corporate: {
          ...require("daisyui/src/colors/themes")["[data-theme=corporate]"],
          primary: "#dc2626"
        },
      },
    ],
  },
  plugins: [require("daisyui")]
};
