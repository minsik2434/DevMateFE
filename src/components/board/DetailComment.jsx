import React from "react";
import profile from "@/assets/profile/avatar1.svg"
import pen from "@/assets/pen.png"

function DetailComment() {
  return (
    <div className="px-[30px] py-[20px] mobile:px-[17px] border border-[#9b9b9b] rounded-lg">
      <div className="flex gap-[30px] items-center mobile:gap-[10px]">
        <img src={profile} className="desktop:w-[50px] tablet:w-[40px] rounded-full mobile:w-[30px]" />
        <label htmlFor="comment" className="sr-only"></label>
        <input
          id="comment"
          placeholder="댓글을 작성해보세요"
          className="w-full py-[10px] mobile:py-[4px] px-[13px] placeholder:text-[14px] mobile:placeholder:text-[10px] placeholder:font-bold border border-[#9b9b9b] rounded-lg"
        />
        <button className="laptop:hidden desktop:hidden p-[8px] rounded-md border border-[#9b9b9b]">
          <img src={pen} className="w-[20px]" />
        </button>
      </div>
      <div className="text-end mt-[15px] mobile:hidden">
        <button className="border px-[30px] py-[10px] border-black rounded-[30px]">
          댓글 작성
        </button>
      </div>
    </div>
  );
}

export default DetailComment;
