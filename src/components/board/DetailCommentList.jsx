import React from "react";
import profile from "@/assets/profile/avatar1.svg"

function DetailCommentList() {
  return (
    <div className="w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-5">
      <div className="flex items-center">
        <img src={profile} className="w-[40px] rounded-full mobile:w-[20px]" />
        <strong className="ml-[14px] text-[18px] mobile:text-[12px]">
          최민식
        </strong>
        <div className="ml-[45px] mobile:ml-[20px] text-[12px] mobile:text-[10px]">
          <span>10</span>
          <span>분전</span>
        </div>
      </div>
      <p className="mt-[16px] text-[16px] mobile:text-[10px]">
        큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다
      </p>
    </div>
  );
}

export default DetailCommentList;
