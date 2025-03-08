/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cst-one': '#ED1A2E', //Red
        'cst-two': '#A8CA0C', //Green
        'cst-three': '#006FBA', //Blue
        'cst-four': '#1AEDD9', //Cyan
        'cst-five': '#2E0CCA', //Dark Blue
        'cst-six': '#BA4B00', //Brown
        'cst-seven': '#F7BF71', //Yellow Sand
      },
      animation: {
        scroll: 'scroll 60s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-545%)' },
        },
      },
    },
  },
  plugins: [],

}
