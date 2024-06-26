import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      {/* ScrollToTop -> react-router로 이동시 화면을 맨 상단에 위치하도록 해줌 */}
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export default RootLayout;
