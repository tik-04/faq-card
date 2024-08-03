/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '700px'},
        'miniMobile':{'max':'400px'},
        'box':{'min':'550px'},
      },
    },
  },
  plugins: [],
}

