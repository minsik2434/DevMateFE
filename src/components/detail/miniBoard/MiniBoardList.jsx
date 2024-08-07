import React from "react";
import commentImg from "@/assets/comment.png";
import like from "@/assets/icon/like.svg";
import viewImg from "@/assets/view.png";
import { useEffect } from "react";
import { useState } from "react";
import { getData } from "@/util/Crud";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useMedia from "@/hooks/useMedia";
function MiniBoardList() {
  const param = useParams();
  const isMobile = useMedia("(max-width: 767px)");
  const truncateText = (text) => {
    if (text.length <= 30) {
      return text;
    }
    return text.substring(0, 30) + "...";
  };

  const nav = useNavigate();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getPostList = async () => {
      try {
        const responseData = (
          await getData(
            `${import.meta.env.VITE_API_URL}/post/${
              param.category
            }/list?sort=good`
          )
        ).data.content;
        setItems(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    getPostList();
  }, [param.category]);

  return (
    <div className="border-l border-r border-b border-[#f1f3f5] shadow-lg rounded-b-lg px-[16px] py-[12px]">
      <ul className="flex flex-col mobile:gap-[10px]">
        {items.slice(0, 5).map((item) => {
          return (
            <li key={item.id}>
              <button
                onClick={() => nav(`/${item.category}/${item.id}`)}
                className="border-b w-full px-[10px] py-[3px] border-[#9b9b9b] hover:bg-[#f1f3f5] break-all"
              >
                <p className="text-[16px] mobile:text-[15px] text-start">
                  {truncateText(item.title)}
                </p>
                <div className="flex justify-between py-[6px]">
                  <div className="flex items-center">
                    <div className="flex gap-[5px]">
                      <img
                        src={item.writer.profileImgUrl}
                        className="w-[18px] mobile:w-[23px]"
                      />
                      <span className="text-[14px] text-nowrap">
                        {item.writer.nickName}
                      </span>
                    </div>
                  </div>
                  <ul className="flex gap-[10px] items-center text-[10px] font-bold">
                    <li className="flex">
                      <img
                        src={viewImg}
                        className="w-3 mobile:w-[12px] mr-[2px]"
                      />
                      <span>{item.viewCount}</span>
                    </li>
                    <li className="flex">
                      <img
                        src={commentImg}
                        className="w-3 mobile:w-[12px] mr-[2px]"
                      />
                      <span>{item.commentCount}</span>
                    </li>
                    <li className="flex">
                      <img
                        src={like}
                        className="w-3 mobile:w-[12px] mr-[2px]"
                      />
                      <span>{item.goodCount}</span>
                    </li>
                  </ul>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MiniBoardList;
