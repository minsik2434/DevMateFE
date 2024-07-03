import useInterestsInfo from "@/hooks/useInterestsInfo";
import React from "react";

function MobileProfileBox({ writerData }) {
  const interests = useInterestsInfo(writerData.interests);
  return (
    <div className="desktop:hidden tablet:hidden shadow-lg border border-[#f1f3f5] rounded-[20px] px-[16px] py-[20px] mt-[27px]">
      <div className="flex items-center">
        <img src={writerData.imgUrl} className="w-[30px]"></img>
        <span className="ml-[14px] text-[14px]">{writerData.nickName}</span>
      </div>
      <ul className="flex text-[12px] items-center flex-wrap mt-[10px]  gap-[16px] font-bold">
        <span className="text-[13px]">관심 분야</span>
        {interests.map((interest) => {
          return (
            <li key={interest.id}>
              <div className="bg-gray_8 text-gray_0 px-[9px] py-[3px] rounded-lg">
                <span>{interest.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MobileProfileBox;
