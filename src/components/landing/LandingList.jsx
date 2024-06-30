import React from "react";
import like from "@/assets/icon/like.svg";
import view from "@/assets/icon/view.svg";
import comment from "@/assets/icon/comment.svg";
import { useNavigate } from "react-router-dom";

function LandingList({ post }) {
  const nav = useNavigate();
  const onClick = () => {
    if (post.category === "Mento") {
      nav(`/mentoring/${post.id}`);
    } else {
      nav(`/${post.category}/${post.id}`);
    }
  };
  return (
    <button
      className="desktop:p-2 w-full tablet:p-2 mobile:p-1 hover:bg-gray_0 border-b border-gray_3"
      onClick={onClick}
    >
      <p className="desktop:my-2 text-start tablet:my-2 mobile:my-2 font-medium desktop:text-lg mobile:text-base">
        {post.title}
      </p>
      <div className="flex items-center justify-between pb-2 desktop:gap-4">
        <div className="flex items-center desktop:gap-3 tablet:gap-3 mobile:gap-2">
          <div className="flex items-center gap-1">
            <img
              src={post.writer.profileImgUrl}
              alt="사용자 이미지"
              className="rounded-full desktop:w-7 tablet:w-6 mobile:w-5"
            />
            <span className="desktop:w-[50px] desktop:text-lg mobile:text-sm text-nowrap">
              {post.writer.nickName}
            </span>
          </div>
        </div>
        <div>
          <ul className="flex gap-3 desktop:text-sm mobile:text-xs font-bold">
            <li className="flex gap-1 items-center ">
              <img src={view} alt="조회 수" className="w-5 mobile:w-4" />
              <span>{post.viewCount}</span>
            </li>
            <li className="flex gap-1 items-center">
              <img src={comment} alt="댓글 수" className="w-5 mobile:w-4" />
              <span>{post.commentCount}</span>
            </li>

            <li className="flex gap-1 items-center">
              <img src={like} alt="추천 수" className="w-3 mobile:w-4" />
              <span>{post.goodCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </button>
  );
}

export default LandingList;
