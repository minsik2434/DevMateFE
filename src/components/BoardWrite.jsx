import React, { useState, useRef, Suspense } from "react";
import { useNavigate } from "react-router-dom";

import pen from "@/public/pen.png";
import Spinner from "./Spinner";
import useLoginInfoStore from "@/stores/loginInfo";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";

function BoardWrite({ link, location }) {
  const nav = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const modalBackground = useRef();

  const Signin = React.lazy(() => import("@/pages/Signin"));

  const [cookies] = useCookies();

  const handleClick = () => {
    if (cookies.accessToken) {
      nav(`${link}`);
    } else {
      setShowModal(true);
    }
  };

  return (
    <div>
      <button
        className="bg-gray_8 text-gray_0 text-sm desktop:px-6 tablet:px-6 desktop:py-2 tablet:py-2 mobile:px-2 mobile:py-2 desktop:rounded-[5px] tablet:rounded-[5px] mobile:rounded"
        type="button"
        onClick={handleClick}
      >
        <span className="mobile:hidden tablet:block desktop:block">글쓰기</span>
        <img
          src={pen}
          alt="글쓰기 아이콘"
          className="desktop:hidden tablet:hidden mobile:w-4"
        />
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
          <Suspense
            fallback={
              <div>
                <Spinner />
              </div>
            }
          >
            <Signin current={location} onClose={() => setShowModal(false)} />
          </Suspense>
        </div>
      )}
    </div>
  );
}

export default BoardWrite;
