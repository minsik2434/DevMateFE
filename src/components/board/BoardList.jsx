import React from "react";
import profile1 from "@/assets/profile/avatar1.svg";
import recommend from "@/assets/icon/recommend.svg";
import view from "@/assets/icon/view.svg";
import comment from "@/assets/icon/comment.svg";

function BoardList() {
  return (
    <div className="desktop:max-w-[1240px] tablet:max-w-[768px] mobile:max-w-[320px] mx-auto">
      <div className="mobile:mb-5">
        <div className="flex flex-col p-2">
          <div className="flex items-end desktop:gap-16 tablet:gap-12 mobile:gap-8 font-medium">
            <p className="text-xl mobile:text-base">큰일났습니다</p>
            <span className="text-sm  mobile:text-[8px] font-semibold mb-1">
              10분전
            </span>
          </div>
          <p className="desktop:text-base tablet:text-[14px] mobile:text-[10px] my-4">
            큰일났어요 도와주세요 큰일났어요 도와주세요 큰일났어요 도와주세요
            큰일났어요 도와주세요
          </p>
        </div>
        <div className="flex items-center justify-between border-b-2  border-b-gray_4 pb-8 p-2 mobile:pb-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <img
                src={profile1}
                alt="사용자 이미지"
                className="rounded-full desktop:w-6 tablet:w-5 mobile:w-4"
              />
              <span className="w-[50px] text-lg mobile:text-[10px] mobile:w-9 mobile:font-medium">
                최민식
              </span>
            </div>
            <div className="desktop:w-[500px]">
              <ul className="flex flex-wrap justify-start text-sm desktop:gap-3 tablet:gap-2 mobile:gap-1">
                <li className="px-2 rounded-3xl text-sm desktop:py-1 tablet:py-1 mobile:py-0.5 mobile:rounded-3xl mobile:text-[10px] bg-gray_5">
                  C
                </li>
                <li className="px-2 rounded-3xl text-sm desktop:py-1 tablet:py-1 mobile:py-0.5 mobile:rounded-3xl mobile:text-[10px] bg-gray_5">
                  C++
                </li>
                <li className="px-2 rounded-3xl text-sm desktop:py-1 tablet:py-1 mobile:py-0.5 mobile:rounded-3xl mobile:text-[10px] bg-gray_5">
                  frontend
                </li>
              </ul>
            </div>
          </div>
          <div> 
            <ul className="flex gap-3 desktop:text-sm mobile:text-[10px]">
              <li className="flex gap-1 items-center">
                <img src={comment} alt="댓글 수" className="mobile:w-3" />
                <span>10</span>
              </li>
              <li className="flex gap-1 items-center">
                <img src={view} alt="조회 수" className="mobile:w-3" />
                <span>11</span>
              </li>
              <li className="flex gap-1 items-center">
                <img src={recommend} alt="추천 수" className="mobile:w-3" />
                <span>11</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardList;
