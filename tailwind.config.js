/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cst-one': '#C6D8FF', //Periwinkle
        'cst-two': '#71A9F7', //Ruddy Blue
        'cst-three': '#6B5CA5', //Ultra Violet
        'cst-four': '#72195A', //Byzantium
        'cst-five': '#4C1036', //Tyrian Purple
      },
    },
  },
  plugins: [],

}
