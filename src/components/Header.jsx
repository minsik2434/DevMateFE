import React, { lazy } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import useIndex from "@/stores/navIndex";
const Signin = lazy(async () => await import("@/pages/Signin"));
import { getData } from "@/util/Crud";
import useMember from "@/stores/member";
import { useNavigate } from "react-router-dom";
import useLike from "@/stores/useLike";

import ml from "@/assets/logo_main.png";
import { useLocation } from "react-router-dom";

function Header() {
  const [showModalD, setShowModalD] = useState(false);
  const [showModalM, setShowModalM] = useState(false);
  const modalBackground = useRef();

  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const location = useLocation();

  const handleLoginSuccess = () => {
    setShowModalM(false);
    setToggle(false);
  };

  const { navIndex, setNavIndex } = useIndex();

  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  const accessToken = cookies.accessToken;

  const { name, nickName, imgUrl, setImgUrl, setName, setNickName } =
    useMember();

  const nav = useNavigate();

  const handleButtonClick = (index) => {
    setNavIndex(index);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const updateHeaderStyle = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > 0);
  };

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      Object.keys(cookies).forEach((cookieName) => {
        removeCookie(cookieName, { path: "/" });
      });

      localStorage.clear();

      useLike.getState().reset();
      useLike.persist.clearStorage();
      alert("로그아웃 되었습니다.");
      setShowModalD(false);
      setShowModalM(false);
      nav("/");
    }
  };

  const memberInfo = async () => {
    if (!accessToken || !cookies.grantType) {
      return;
    }

    try {
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `${cookies["grantType"]} ${cookies["accessToken"]}`,
      };

      const response = await getData(
        `${import.meta.env.VITE_API_URL}/members`,
        headers
      );

      setImgUrl(response.data["imgUrl"]);
      setName(response.data["name"]);
      setNickName(response.data["nickName"]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateHeaderStyle);

    return () => {
      window.removeEventListener("scroll", updateHeaderStyle);
    };
  }, []);

  useEffect(() => {
    memberInfo();
  }, [accessToken]);

  return (
    <div
      className={`${
        isSticky
          ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
          : "bg-white"
      }`}
    >
      {/* desktop:w-[1240px] tablet:w-[768px] mobile:w-[320px] */}
      <div className="mx-auto border-b-2 border-b-gray_3 py-2">
        <div className="flex items-center justify-between gap-20 desktop:mx-[7%] tablet:mx-[5%] mobile:mx-3">
          <Link to="/">
            <h1 onClick={() => handleButtonClick("")}>
              <img
                src={ml}
                alt="DevMate"
                className="desktop:w-32 tablet:w-20 mobile:w-20"
              />
            </h1>
          </Link>
          <nav className="mobile:hidden flex items-center justify-center flex-grow">
            <ul className="flex items-center justify-between desktop:gap-20 desktop:text-base tablet:gap-7 tablet:text-[13px] font-medium">
              {[
                { path: "/board/qna", label: "Q&A" },
                { path: "/board/community", label: "커뮤니티" },
                { path: "/board/review", label: "취업후기" },
                { path: "/board/study", label: "스터디" },
                { path: "/board/mentoring", label: "멘토링" },
                { path: "/board/job", label: "모집공고" },
              ].map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleButtonClick(index)}
                  className={`font-semibold ${
                    navIndex === index ? "text-gray_9" : "text-gray_6"
                  } hover:shadow-[0_2px_0_0_rgba(0,0,0,0.5)] transition-shadow duration-300`}
                >
                  <Link to={item.path}>
                    <button>{item.label}</button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            {accessToken ? (
              <div className="flex items-center gap-3 tablet:text-sm mobile:hidden">
                <img
                  src={imgUrl}
                  alt="사용자 프로필"
                  className="w-5 h-5 rounded-full"
                />
                <div>
                  <span className="underline">{nickName}</span>님
                </div>
                <div className="flex gap-2 ">
                  <Link to="/profile">
                    <button className="hover:opacity-80">MY</button>
                  </Link>
                  <span>|</span>
                  <button className="hover:opacity-80" onClick={handleLogout}>
                    로그아웃
                  </button>
                </div>
              </div>
            ) : (
              <div className="desktop:gap-5 tablet:gap-3 desktop:text-sm tablet:text-[8px] desktop:flex tablet:flex mobile:hidden">
                <button
                  className="border border-gray_6 desktop:w-20 desktop:py-1 tablet:w-12 tablet:py-0.5 rounded-full hover:opacity-80"
                  onClick={() => setShowModalD(true)}
                >
                  로그인
                </button>
                {showModalD && (
                  <div
                    className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-blend-darken bg-black bg-opacity-50 z-50"
                    ref={modalBackground}
                    onClick={(e) => {
                      if (e.target === modalBackground.current) {
                        setShowModalD(false);
                      }
                    }}
                  >
                    <Signin
                      current={location.pathname}
                      onClose={() => setShowModalD(false)}
                    />
                  </div>
                )}

                <Link to="/signup">
                  <button className="border border-gray_6 rounded-full text-white bg-gray_7 desktop:w-20 desktop:py-1 tablet:w-12 tablet:py-0.5 hover:opacity-90">
                    회원가입
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* 모바일 버전 */}
          <div
            className={`hamburger ${
              toggle ? "toggle" : ""
            } tablet:hidden desktop:hidden`}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
            {toggle && (
              <div className="dropdown-modal rounded text-xs font-medium bg-gray_0">
                {/* 모달창 내용 */}
                {accessToken ? (
                  <div className="flex flex-col py-4 gap-4">
                    <div className="flex gap-2 items-center justify-center">
                      <img
                        src={imgUrl}
                        alt="사용자 프로필"
                        className="w-8 h-8 rounded-full"
                      />
                      <p className="text-lg">
                        <span className="underline">{nickName}</span>님
                      </p>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                      <Link to="/profile">
                        <button className="hover:opacity-80">My 프로필</button>
                      </Link>
                      <span>|</span>
                      <button
                        className="hover:opacity-80"
                        onClick={handleLogout}
                      >
                        로그아웃
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 text-base text-center">
                    <span>로그인을 해주세요</span>
                  </div>
                )}
                <hr className="border-2 border-gray_6" />
                {/* <div className="desktop:gap-5 tablet:gap-3 desktop:text-sm tablet:text-[8px] desktop:flex tablet:flex"></div> */}

                {!accessToken ? (
                  <button
                    className={`w-full text-start py-2 px-3 hover:bg-gray_3 border-b-2 border-gray_1`}
                    onClick={() => {
                      setShowModalM(true);
                      setToggle(false);
                    }}
                  >
                    로그인
                  </button>
                ) : (
                  ""
                )}

                {!accessToken ? (
                  <Link to="/signup">
                    <button className="w-full text-start py-2 px-3 hover:bg-gray_3 border-b-2 border-gray_1">
                      회원가입
                    </button>
                  </Link>
                ) : (
                  ""
                )}

                {/* <Link to="/signup">
                  <button className="w-full text-start py-2 px-3 hover:bg-gray_3 border-b-2 border-gray_1">
                    회원가입
                  </button>
                </Link> */}
                <Link to="/board/qna">
                  <button
                    type="button"
                    className="w-full text-start py-2 px-3 hover:bg-gray_3 border-b-2 border-gray_1"
                  >
                    Q&A
                  </button>
                </Link>
                <Link to="/board/community">
                  <button
                    type="button"
                    className="w-full text-start py-2 px-3 hover:bg-gray_3 border-b-2 border-gray_1"
                  >
                    커뮤니티
                  </button>
                </Link>
                <Link to="/board/review">
                  <button
                    type="button"
                    className="w-full text-start py-2 px-3 hover:bg-gray_3 border-b-2 border-gray_1"
                  >
                    취업후기
                  </button>
                </Link>
                <Link to="/board/study">
                  <button
                    type="button"
                    className="w-full text-start py-2 px-3 hover:bg-gray_3 border-b-2 border-gray_1"
                  >
                    스터디
                  </button>
                </Link>
                <Link to="/board/mentoring">
                  <button
                    type="button"
                    className="w-full text-start py-2 px-3 hover:bg-gray_3 border-b-2 border-gray_1"
                  >
                    멘토링
                  </button>
                </Link>
                <Link to="/board/job">
                  <button
                    type="button"
                    className="w-full text-start py-2 px-3 hover:bg-gray_3"
                  >
                    모집공고
                  </button>
                </Link>
              </div>
            )}
          </div>

          {showModalM && (
            <div
              className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-blend-darken bg-black bg-opacity-50 z-50"
              ref={modalBackground}
              onClick={(e) => {
                if (e.target === modalBackground.current) {
                  setShowModalM(false);
                }
              }}
            >
              <Signin onLoginSuccess={handleLoginSuccess} current={location.pathname} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
