import React from "react";
// import logoImg from '../assets/Logo.png';
import logoImg from "@/public/Logo.png";

function Logo() {
  return (
    <div className="flex justify-center">
      <img
        src={logoImg}
        alt="데브메이트 바로가기"
        className="mobile:w-[60px]"
      />
    </div>
  );
}

export default Logo;
