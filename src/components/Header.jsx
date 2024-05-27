import React from "react";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // 스크롤에 따른 헤더 스타일 변경을 처리하는 함수
  const updateHeaderStyle = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateHeaderStyle);

    return () => {
      window.removeEventListener("scroll", updateHeaderStyle);
    };
  }, []);
  return (
    <div
      className={`${
        isSticky ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-sm" : ""
      }`}
    >
      <div className="desktop:w-[1240px] tablet:w-[768px] mobile:w-[320px] mx-auto">
        <div className="flex items-center justify-between desktop:mx-[7%] tablet:mx-[5%] mobile:mx-[10%]">
          <Link to="/">
            <h1>
              <img
                src={logo}
                alt="데브 메이트 바로가기"
                className="desktop:w-28 tablet:w-20 mobile:w-20"
              />
            </h1>
          </Link>
          <nav className="mobile:hidden tablet:flex desktop:flex">
            <ul className="tablet:flex tablet:justify-between desktop:gap-8 desktop:text-base tablet:gap-7  tablet:text-[10px] text-gray_6 font-medium">
              <li>
                <Link to="/borad/QnA">
                  <button>Q&A</button>
                </Link>
              </li>
              <li>
                <Link to="/borad/community">
                  <button>커뮤니티</button>
                </Link>
              </li>
              <li>
                <Link to="/borad/JobReview">
                  <button>취업후기</button>
                </Link>
              </li>
              <li>
                <Link to="/borad/study">
                  <button>스터디</button>
                </Link>
              </li>
              <li>
                <Link to="/borad/mentoring">
                  <button>멘토링</button>
                </Link>
              </li>
              <li>
                <Link to="/borad/jobOpening">
                  <button>모집공고</button>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="desktop:gap-5 tablet:gap-3 desktop:text-sm tablet:text-[8px]  tablet:flex mobile:hidden ">
            <button className="border border-gray_6 desktop:w-20 desktop:py-1 tablet:w-12 tablet:py-0.5  rounded-full hover:opacity-80">
              로그인
            </button>
            <button className="border border-gray_6 rounded-full text-white bg-gray_7 desktop:w-20 desktop:py-1 tablet:w-12 tablet:py-0.5  hover:opacity-90 ">
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
              <div className="dropdown-modal rounded-md text-xs font-medium py-2 bg-white ">
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
    </div>
  );
}

export default Header;
