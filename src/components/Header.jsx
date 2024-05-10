import React from "react";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="laptop:w-[1440px] tablet:w-[768px] mobile:w-[320px] mx-auto ">
      <div className="flex items-center justify-between laptop:mx-[15%] tablet:mx-[10%] mobile:mx-[10%]">
        <Link to="/">
          <h1>
            <img
              src={logo}
              alt="데브 메이트 바로가기"
              className="laptop:w-28 tablet:w-20 mobile:w-20"
            />
          </h1>
        </Link>
        <nav className=" flex-[0.7] mobile:hidden tablet:block">
          <ul className="flex justify-between laptop:gap-8 laptop:text-base tablet:gap-3  tablet:text-[10px] text-gray_6 font-medium">
            <li>
              <button>Q&A</button>
            </li>
            <li>
              <button>커뮤니티</button>
            </li>
            <li>
              <button>취업후기</button>
            </li>
            <li>
              <button>스터디</button>
            </li>
            <li>
              <button>멘토링</button>
            </li>
            <li>
              <button>모집공고</button>
            </li>
          </ul>
        </nav>
        <div className="laptop:gap-5 tablet:gap-3 laptop:text-sm tablet:text-[8px]  tablet:flex mobile:hidden ">
          <button className="border border-gray_6 laptop:w-20 laptop:py-1 tablet:w-12 tablet:py-0.5  rounded-full hover:opacity-80">
            로그인
          </button>
          <button className="border border-gray_6 rounded-full text-white bg-gray_7 laptop:w-20 laptop:py-1 tablet:w-12 tablet:py-0.5  hover:opacity-90 ">
            회원가입
          </button>
        </div>
        <div
          className={`hamburger ${toggle ? "toggle" : ""} tablet:hidden`}
          onClick={() => setToggle(!toggle)}
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
          {toggle && (
            <div className="dropdown-modal rounded-md text-xs font-medium py-2 ">
              {/* 모달창 내용 */}
              <div className="flex flex-col px-2">
                <button
                  type="button"
                  className="w-full text-start py-1 border-b pl-2"
                >
                  로그인
                </button>
                <button type="button" className="w-full text-start py-1 pl-2">
                  회원가입
                </button>
              </div>

              <hr className="border-2 border-gray_6 mx-1" />

              <div className="flex flex-col px-2">
                <button
                  type="button"
                  className="w-full text-start py-1 border-b pl-2"
                >
                  Q&A
                </button>
                <button
                  type="button"
                  className="w-full text-start py-1 border-b pl-2"
                >
                  커뮤니티
                </button>
                <button
                  type="button"
                  className="w-full text-start py-1 border-b pl-2"
                >
                  취업후기
                </button>
                <button
                  type="button"
                  className="w-full text-start py-1 border-b pl-2"
                >
                  스터디
                </button>
                <button
                  type="button"
                  className="w-full text-start py-1 border-b pl-2"
                >
                  멘토링
                </button>
                <button
                  type="button"
                  className="w-full text-start hover:bg-gray_5 ml-2 py-1"
                >
                  모집공고
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
