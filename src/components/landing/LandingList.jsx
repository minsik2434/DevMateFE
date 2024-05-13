import React from "react";
import profile1 from "@/assets/profile/avatar1.svg";
import recommend from "@/assets/icon/recommend.svg";
import view from "@/assets/icon/view.svg";
import comment from "@/assets/icon/comment.svg";

function LandingList() {
  return (
    <div className="flex-[0.32]">
      <div>
        <p className="ml-2 my-2 font-medium text-lg">큰일났습니다</p>
        <div className="flex items-center justify-between border-b-2 border-b-gray_4 pb-2">
          <div className="flex items-center gap-1">
            <img
              src={profile1}
              alt="사용자 이미지"
              className="rounded-full w-6"
            />
            <span>최민식</span>
          </div>
          <div className="">
            <ul className="flex flex-wrap justify-center text-sm gap-1">
              <li className="laptop:px-2 laptop:rounded-3xl laptop:text-sm bg-gray_5">
                C
              </li>
              <li className="laptop:px-2 laptop:rounded-3xl laptop:text-sm bg-gray_5">
                C++
              </li>
              <li className="laptop:px-2 laptop:rounded-3xl laptop:text-sm bg-gray_5">
                frontend
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-3 laptop:text-sm">
              <li className="flex gap-1 items-center">
                <img src={comment} alt="댓글 수" />
                <span>10</span>
              </li>
              <li className="flex gap-1 items-center">
                <img src={view} alt="조회 수" />
                <span>11</span>
              </li>
              <li className="flex gap-1 items-center">
                <img src={recommend} alt="추천 수" />
                <span>11</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingList;
