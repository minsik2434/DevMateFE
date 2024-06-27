import React from "react";
import useInterestsInfo from "@/hooks/useInterestsInfo";
import MiniBoard from "./miniBoard/MiniBoard";

function RightBox({ headerHeight, writerData }) {
  const interests = useInterestsInfo(writerData.interests);
  return (
    <div
      style={{ position: "sticky", top: `${headerHeight}px` }}
      className="mobile:hidden px-[20px] py-[30px]"
    >
      <div className="mobile:hidden w-full px-[30px] py-[25px] shadow-lg border border-[#f1f3f5] rounded-[20px]">
        <div className="flex items-center">
          <img src={writerData.imgUrl} className="w-[42px] rounded-md"></img>
          <strong className="ml-[14px] text-[20px]">
            {writerData.nickName}
          </strong>
        </div>
        <ul className="flex items-center flex-wrap text-[12px] mt-[20px] gap-[10px] font-bold">
          <span>관심 분야</span>
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
      <MiniBoard />
    </div>
  );
}

export default RightBox;
