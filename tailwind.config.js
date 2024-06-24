/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.js", "./src/**/*.jsx", "./src/*.jsx"],
  theme: {
    screens: {
      tablet: { min: "768px", max: "1239px" },

      desktop: { min: "1240px" },
      // => @media (min-width: 1280px) { … }
      // 'mobile': '320px',
      mobile: { max: "767px" },
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
        brand_blue: "#D2E1FF",
        brand_red: "#F49292",
      },
      fontFamily: {
        pre: ["Pretendard", "sans-serif"],
      },

      backgroundImage: {
        banner_commu: "url('/src/assets/banner/banner_commu.svg')", // 원하는 이미지 경로로 변경
        banner_job: "url('/src/assets/banner/banner_job.svg')", // 원하는 이미지 경로로 변경
        banner_mento: "url('/src/assets/banner/banner_mento.svg')", // 원하는 이미지 경로로 변경
        banner_qna: "url('/src/assets/banner/banner_qna.svg')", // 원하는 이미지 경로로 변경
        banner_review: "url('/src/assets/banner/banner_review.svg')", // 원하는 이미지 경로로 변경
        banner_study: "url('/src/assets/banner/banner_study.svg')", // 원하는 이미지 경로로 변경
      },
    },
  },
  plugins: [],
};
