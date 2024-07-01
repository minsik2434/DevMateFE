import React from "react";
import RelatedPost from "./RelatedPost";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { getData } from "@/util/Crud";
import { useCookies } from "react-cookie";
import { useRef } from "react";
import { useEffect } from "react";

function MyActive() {
  const postBtn = useRef();
  const commentBtn = useRef();
  const goodBtn = useRef();
  const [selectBtn, setSelectBtn] = useState("post");
  const [xpos, setXpos] = useState();
  const [ypos, setYpos] = useState();
  const [width, setWidth] = useState();
  const [searchType, setSearchType] = useState("post");
  const [cookies] = useCookies();
  const [relatedPost, setRelatedPost] = useState([]);

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
  useLayoutEffect(() => {
    const getRelatePost = async () => {
      try {
        const responseData = (
          await getData(
            `${import.meta.env.VITE_API_URL}/post/member?type=${searchType}`,
            {
              Authorization: `${cookies.grantType} ${cookies.accessToken}`,
            }
          )
        ).data.content;
        setRelatedPost(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    getRelatePost();
  }, [searchType]);
  return (
    <div className="relative">
      <div
        style={{
          left: `${xpos}px`,
          top: `${ypos}px`,
          backgroundColor: "#000000",
          height: "2px",
          width: `${width}px`,
          transition: "0.5s",
        }}
        className="absolute"
      />
      <div className="pt-[20px] border-b border-[#9b9b9b]">
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
  );
}

export default MyActive;
