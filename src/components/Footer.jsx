import React from "react";

import logo from "@/assets/logo.svg";
import facebook from "@/assets/icon/facebook.svg";
import instagram from "@/assets/icon/Instagram.svg";
import github from "@/assets/icon/github.svg";

function Footer() {
  return (
    <div className="bg-gray_7 desktop:pl-12 desktop:pb-6 tablet:pl-12 tablet:pb-6 mobile:p-4 ">
      <div className="mx-auto flex gap-20 static mobile:relative">
        <div className="flex flex-col flex-[0.4] tablet:flex mobile:hidden">
          <img
            src={logo}
            alt="데브메이트 로고"
            className="desktop:w-28 tablet:w-24"
          />
          <p className="text-gray_6 tablet:text-xs">
            데브메이트는 개발자들의 소통 및 정보 공유를 목적으로 하는 웹 사이트
            입니다.
          </p>
        </div>
        <div className="flex flex-col flex-[0.6] desktop:gap-3 tablet:gap-2 desktop:mt-10 tablet:mt-10 mobile:mt-3 ">
          <span className="text-white mobile:text-sm mobile:mb-6">
            Contact us
          </span>
          <small className="text-gray_6 text-xs mobile:text-[10px] mobile:mt-5">
            010-5803-1403
          </small>
          <small className="text-gray_6 text-xs mobile:text-[10px]">
            ewsn0825@naver.com
          </small>
          <ul className="flex desktop:gap-6 tablet:gap-3 mt-3 static transform-none mobile:gap-3 mobile:absolute mobile:transform mobile:-translate-x-[50%] mobile:-translate-y-1/2 mobile:left-[50%] mobile:top-[40%]">
            <li>
              <img
                src={instagram}
                alt="인스타그램 바로가기"
                className="desktop:w-6 tablet:w-5 mobile:w-5"
              />
            </li>
            <li>
              <img
                src={facebook}
                alt="페이스북 바로가기"
                className="desktop:w-6 tablet:w-5 mobile:w-5"
              />
            </li>
            <li>
              <img
                src={github}
                alt="깃허브 바로가기"
                className="desktop:w-6 tablet:w-5 mobile:w-5"
              />
            </li>
          </ul>
        </div>
      </div>
      <p className="desktop:text-base tablet:text-sm text-gray_6 desktop:mt-20 tablet:mt-10 text-center tablet:text-left desktop:text-left mobile:text-[12px] mobile:mt-8">
        &copy;DEVMATE. ALL RIGHTS RESERVED
      </p>
    </div>
  );
}

export default Footer;
