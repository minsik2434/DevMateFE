/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.js", "./src/**/*.jsx", "./src/*.jsx"],
  theme: {
    screens: {
      tablet: "768px",
      // => @media (min-width: 640px) { ... }

      laptop: "1440px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1920px",
      // => @media (min-width: 1280px) { ... }

      mobile: "320px",
    },
    extend: {
      colors: {
        gray_0: "#f8f9fa",
        gray_1: "#F1F3F5",
        gray_2: "#E9ECEF",
        gray_3: "#DEE2E6",
        gray_4: "#CED4DA",
        gray_5: "#ADB5BD",
        gray_6: "#868E96",
        gray_7: "#495057",
        gray_8: "#343A40",
        gray_9: "#212529",
      },
<<<<<<< HEAD
=======
      fontFamily: {
        pre: ["Pretendard", "sans-serif"],
      },
>>>>>>> 5428fa00303f9df19086d6ce39114da81324fc61
    },
  },
  plugins: [],
};
