import React from "react";
import logo from "@/assets/logo.svg";
import { Link} from "react-router-dom";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useCookies } from "react-cookie";
import useIndex from "@/stores/navIndex";
import Signin from "@/pages/Signin";
import { getData } from "@/util/Crud";
import useMember from "@/stores/member";
import { useNavigate } from "react-router-dom";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const modalBackground = useRef();

  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { navIndex, setNavIndex } = useIndex();

  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  const accessToken = cookies.accessToken;

  const { name, nickName, imgUrl, setImgUrl, setName, setNickName } =
    useMember();

  const nav = useNavigate();

  const handleButtonClick = (index) => {
    setNavIndex(index);
    // nav(path);

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "auto"
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
      alert("로그아웃 되었습니다.");
      setShowModal(false);
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
        isSticky ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-sm" : ""
      }`}
    >
      {/* desktop:w-[1240px] tablet:w-[768px] mobile:w-[320px] */}
      <div className="mobile:w-[320px] mx-auto py-3">
        <div className="flex items-center justify-between gap-20 desktop:mx-[7%] tablet:mx-[5%] mobile:mx-3">
          <Link to="/">
            <h1 onClick={() => handleButtonClick("")}>
              <img
                src={logo}
                alt="데브 메이트 바로가기"
                className="desktop:w-32 tablet:w-20 mobile:w-20"
              />
            </h1>
          </Link>
          <nav className="mobile:hidden flex items-center justify-center flex-grow">
            <ul className="flex items-center justify-between desktop:gap-16 desktop:text-base tablet:gap-7 tablet:text-[13px] font-medium">
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
                  className={navIndex === index ? "text-gray_9" : "text-gray_5"}
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
              <div className="flex items-center gap-3">
                <img
                  src={imgUrl}
                  alt="사용자 프로필"
                  className="w-5 h-5 rounded-full"
                />
                <div>
                  <span className="underline">{nickName}</span>님
                </div>
                <div className="flex gap-2">
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
                  onClick={() => setShowModal(true)}
                >
                  로그인
                </button>
                {showModal && (
                  <div
                    className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-blend-darken bg-black bg-opacity-50 z-50"
                    ref={modalBackground}
                    onClick={(e) => {
                      if (e.target === modalBackground.current) {
                        setShowModal(false);
                      }
                    }}
                  >
                    <Signin />
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
          <div
            className={`hamburger ${
              toggle ? "toggle" : ""
            } tablet:hidden desktop:hidden`}
            onClick={() => setToggle(!toggle)}
          >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
            {toggle && (
              <div className="dropdown-modal rounded-md text-xs font-medium py-2 bg-white">
                {/* 모달창 내용 */}
                <div className="flex flex-col px-2">
                  <button
                    type="button"
                    className="w-full text-start py-1 border-b pl-2"
                    onClick={() => setShowModal(true)}
                  >
                    로그인
                  </button>
                  {showModal && (
                    <div
                      className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-blend-darken bg-black bg-opacity-50"
                      ref={modalBackground}
                      onClick={(e) => {
                        if (e.target === modalBackground.current) {
                          setShowModal(false);
                        }
                      }}
                    >
                      <Signin />
                    </div>
                  )}
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
                    className="w-full text-start py-1 border-b pl-2"
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
