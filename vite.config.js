import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";
import viteCompression from "vite-plugin-compression";

const __dirname = "src";
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true,
      disable: false,
      deleteOriginFile: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
    svgr(),
  ],
  resolve: {
    // 절대 경로 설정
    alias: [{ find: "@", replacement: resolve(__dirname) }],
  },
  server: {
    port: 3000,
  },

  // build: {
  //   // node_modules의 패키지를 별도의 청크로 분리합니다. 이를 통해 초기 로드 시간을 단축시키고, 캐싱을 효과적으로 활용할 수 있습니다.
  //   rollupOptions: {
  //     output: {
  //       manualChunks: (id) => {
  //         if (id.includes("node_modules")) {
  //           return id
  //             .toString()
  //             .split("node_modules/")[1]
  //             .split("/")[0]
  //             .toString();
  //         }
  //       },
  //     },
  //   },
  // },
});
