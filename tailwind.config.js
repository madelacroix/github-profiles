/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "black": "#32302D",
        "off-white": "#F2EAE1",
        "brown": "#C7AE95",
      }
    },

    fontFamily: {
      gideon: ["Gideon Roman", "cursive"],
      raleway: ["Raleway", "sans-serif"],
    },

    screens: {
      // Minimum Medium Query
      xxs: '400px',
      xs: '600px',
      sm: '800px',
      lm: '1000px',
      md: '1200px',
      lg: '1400px',
      xl: '1600px',
      xxl: '1800px'
    }
  },
  plugins: [],
}

