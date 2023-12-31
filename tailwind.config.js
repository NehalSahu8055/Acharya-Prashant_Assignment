/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["*", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans'],
      },
      colors: {
        // light mode
        "moderate-blue": "#5457b6",
        "soft-red": "#be4d52",
        "light-grayish-blue": "#c5d9ec",
        "pale-red": "#ff7171",
        "dark-blue": "#1b3247",
        "grayish-blue": "#5c7682",
        "light-gray": "#e3eaed",
        "very-light-gray": "#f5f6fa",
        "whitee": "#ffffff",

        // dark mode
        "d-moderate-blue": "#7e81ff",
        "d-soft-red": "#f8676d",
        "d-light-grayish-blue": "rgb(203 213 225)",
        "d-pale-red": "#ff7171",
        "d-dark-blue": "#ffffff",
        "d-grayish-blue": "#e6f0f4",
        "d-light-gray": "#2c2f33",
        "d-very-light-gray": "#2020209c",
        "d-whitee": "#2c2f33"
      }
    },
  },


  plugins: [

    function ({ addVariant }) {
      addVariant('child', '& > *');
    }
  ],


}

