/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.js", "./src/**/*.jsx", "./src/*.jsx"],
  theme: {
    screens: {
      'tablet': '768px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1440px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1920px',  
      // => @media (min-width: 1280px) { ... }

      'mobile': '320px',

    },
    extend: {},
  },
  plugins: [],
}

