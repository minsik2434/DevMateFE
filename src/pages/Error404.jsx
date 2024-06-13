import Header from "@/components/Header";
import React from "react";
import bgImg from "@/assets/ghost.png";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      <Header />
      <div className="mt-[100px]">
        <div className="flex flex-col items-center">
          <h2 className="text-[50px]">404 ERROR</h2>
          <p>죄송합니다. 페이지를 찾을 수 없습니다</p>
          <p>존재하지 않는 주소를 입력하셨거나,</p>
          <p>요청하신 페이지의 주소가 변경, 또는 삭제되어 찾을 수 없습니다</p>
          <img src={bgImg} className="w-[300px]"></img>
          <Link to="/" className="underline">
            홈으로
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error404;
