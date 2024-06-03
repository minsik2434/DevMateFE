import React from "react";
import profile from "@/assets/profile/avatar1.svg";
import recommend from "@/assets/icon/recommend.svg";
import view from "@/assets/icon/view.svg";
import comment from "@/assets/icon/comment.svg";

function MentoringList() {
  return (
    <div className="flex flex-col items-start border border-gray_6 rounded-xl desktop:p-8 tablet:p-6  mobile:p-6 gap-3 cursor-pointer">
      <div className="flex items-center gap-2 font-semibold ">
        <img src={profile} alt="" className="desktop:w-8 tablet:w-6 mobile:w-6 rounded-full" />
        <span>최민식</span>
      </div>
      <div className="flex flex-col gap-3 ">
        <p className="desktop:text-lg font-semibold desktop:my-5">
          [프론트엔드] 취업, 이직 멘토링 / 모의면접, 포트폴리오 리뷰
        </p>
        <span>직무 : 프론트엔드 개발자</span>
        <span>경력 : 미들(4~8년)</span>
      </div>
      <div className="w-full">
        <ul className="flex justify-between gap-3 border-b-2 py-7 px-2">
          <li className="flex gap-1 items-center">
            <img
              src={view}
              alt="조회 수"
              className="mobile:w-3 tablet:w-4 desktop:w-5"
            />
            <span>11</span>
          </li>
          <li className="flex gap-1 items-center">
            <img
              src={comment}
              alt="댓글 수"
              className="mobile:w-3 tablet:w-4 desktop:w-5"
            />
            <span>10</span>
          </li>

          <li className="flex gap-1 items-center">
            <img
              src={recommend}
              alt="추천 수"
              className="mobile:w-3 tablet:w-4 desktop:w-5"
            />
            <span>11</span>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex text-sm text-[#253CCE] font-bold">
          <li className="bg-brand_blue px-3 py-2 rounded-full">프론트엔드</li>
        </ul>
      </div>
    </div>
  );
}

export default MentoringList;
