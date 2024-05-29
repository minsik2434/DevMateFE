import React from "react";
import profile1 from "@/assets/profile/avatar1.svg";
import recommend from "@/assets/icon/recommend.svg";
import view from "@/assets/icon/view.svg";
import comment from "@/assets/icon/comment.svg";

function LandingList() {
  return (
    <div>
      <div className="desktop:p-2 tablet:p-2 mobile:p-1">
        <p className="desktop:my-2 tablet:my-2 mobile:my-2 font-medium desktop:text-lg mobile:text-base">
          큰일났습니다
        </p>
        <div className="flex items-center justify-between border-b-2 border-b-gray_4 pb-2 desktop:gap-4">
          <div className="flex items-center desktop:gap-3 tablet:gap-3 mobile:gap-2">
            <div className="flex items-center gap-1">
              <img
                src={profile1}
                alt="사용자 이미지"
                className="rounded-full desktop:w-7 tablet:w-6 mobile:w-5"
              />
              <span className="desktop:w-[50px] desktop:text-lg mobile:text-sm">최민식</span>
            </div>
            <div>
              <ul className="flex flex-wrap justify-start text-sm desktop:gap-2 tablet:gap-2 mobile:gap-1">
                <li className="px-2 rounded-3xl text-sm bg-gray_4">C</li>
                <li className="px-2 rounded-3xl text-sm bg-gray_4">C++</li>
                {/* <li className="desktop:px-2 desktop:rounded-3xl desktop:text-sm bg-gray_4">
                  frontend
                </li> */}
              </ul>
            </div>
          </div>
          <div>
            <ul className="flex gap-3 desktop:text-sm mobile:text-xs font-bold">
              <li className="flex gap-1 items-center ">
                <img src={view} alt="조회 수" className="desktop:w-5 mobile:w-4" />
                <span>11</span>
              </li>
              <li className="flex gap-1 items-center">
                <img src={comment} alt="댓글 수" className="desktop:w-5 mobile:w-4" />
                <span>10</span>
              </li>

              <li className="flex gap-1 items-center">
                <img src={recommend} alt="추천 수" className="desktop:w-5 mobile:w-4" />
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
