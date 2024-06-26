import Header from "@/components/Header";
import React from "react";
import Inform from "@/components/profile/Inform";
import { useState, useEffect, useLayoutEffect } from "react";
import { getData } from "@/util/Crud";
import { useCookies } from "react-cookie";
import useLoginInfoStore from "@/stores/loginInfo";
import RelatedPost from "@/components/profile/RelatedPost";
import { useRef } from "react";
import Footer from "@/components/Footer";
function Profile() {
  const [cookies] = useCookies();
  const [searchType, setSearchType] = useState("post");
  const { grantType, accessToken, setGrantType, setAccessToken } =
    useLoginInfoStore();
  const [relatedPost, setRelatedPost] = useState([]);
  const [memberInfo, setMemberInfo] = useState({
    name: "",
    nickName: "",
    imgUrl: "test.png",
    interests: [],
  });
  const postBtn = useRef();
  const commentBtn = useRef();
  const goodBtn = useRef();
  const [selectBtn, setSelectBtn] = useState("post");
  const [xpos, setXpos] = useState();
  const [ypos, setYpos] = useState();
  const [width, setWidth] = useState();
  useEffect(() => {
    if (selectBtn === "post") {
      setXpos(postBtn.current.offsetLeft);
      setYpos(postBtn.current.offsetTop + postBtn.current.offsetHeight);
      setWidth(postBtn.current.offsetWidth);
    } else if (selectBtn === "comment") {
      setXpos(commentBtn.current.offsetLeft);
      setYpos(commentBtn.current.offsetTop + commentBtn.current.offsetHeight);
      setWidth(commentBtn.current.offsetWidth);
    } else {
      setXpos(goodBtn.current.offsetLeft);
      setYpos(goodBtn.current.offsetTop + goodBtn.current.offsetHeight);
      setWidth(goodBtn.current.offsetWidth);
    }
  }, [selectBtn]);

  useEffect(() => {
    setGrantType(cookies.grantType);
    setAccessToken(cookies.accessToken);
  }, [cookies.accessToken, cookies.grantType, setAccessToken, setGrantType]);

  useLayoutEffect(() => {
    const getMember = async () => {
      try {
        const responseData = (
          await getData(`${import.meta.env.VITE_API_URL}/members`, {
            Authorization: `${grantType} ${accessToken}`,
          })
        ).data;
        setMemberInfo(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    if (grantType && accessToken) {
      getMember();
    }
  }, [accessToken, grantType]);

  useLayoutEffect(() => {
    const getRelatePost = async () => {
      try {
        const responseData = (
          await getData(
            `${import.meta.env.VITE_API_URL}/post/member?type=${searchType}`,
            {
              Authorization: `${grantType} ${accessToken}`,
            }
          )
        ).data.content;
        setRelatedPost(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    if (grantType && accessToken) {
      getRelatePost();
    }
  }, [accessToken, grantType, searchType]);
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="flex justify-center">
        <div className="h-[30%] w-full -z-10 bg-[#C9E2EA] absolute" />
        <div className="w-[60%] mobile:w-[95%] max-w-[750px] tablet:min-w-[570px] relative">
          <Inform value={memberInfo} />
          <div>
            <div
              style={{
                left: `${xpos}px`,
                top: `${ypos}px`,
                backgroundColor: "#000000",
                height: "3px",
                width: `${width}px`,
                transition: "0.5s",
              }}
              className="absolute"
            />
            <div className="pt-[20px] border-b-2 border-[#9b9b9b]">
              <span className="font-bold text-[25px] mobile:text-[20px]">
                내 활동
              </span>
              <ul className="flex mt-[10px] text-[15px] mobile:text-[12px]">
                <li>
                  <button
                    ref={postBtn}
                    type="button"
                    value="post"
                    onClick={(e) => {
                      setSearchType(e.target.value);
                      setSelectBtn(e.target.value);
                    }}
                    className="px-[22px] mobile:px-[12px] py-[6px] mobile:py-[6px]"
                  >
                    게시한 글
                  </button>
                </li>
                <li>
                  <button
                    ref={commentBtn}
                    type="button"
                    value="comment"
                    onClick={(e) => {
                      setSearchType(e.target.value);
                      setSelectBtn(e.target.value);
                    }}
                    className="px-[22px] mobile:px-[12px] py-[6px] mobile:py-[6px]"
                  >
                    댓글단 글
                  </button>
                </li>
                <li>
                  <button
                    ref={goodBtn}
                    type="button"
                    value="good"
                    onClick={(e) => {
                      setSearchType(e.target.value);
                      setSelectBtn(e.target.value);
                    }}
                    className="px-[22px] mobile:px-[12px] py-[6px] mobile:py-[6px]"
                  >
                    좋아요한 글
                  </button>
                </li>
              </ul>
            </div>
            <RelatedPost posts={relatedPost} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
