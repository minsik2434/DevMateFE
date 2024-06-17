import React from "react";
import Interests from "@/components/Interests";

function Edit({ onChange, onSelected, values }) {
  return (
    <ul className="pl-[20%] flex flex-col gap-[20px] mobile:gap-[10px] text-[18px] mobile:text-[14px]">
      <li className="flex items-center justify-start">
        <span className="min-w-[20%]">이름</span>
        <label htmlFor="name" className="sr-only">
          name
        </label>
        <input
          id="name"
          name="name"
          onChange={onChange}
          value={values.name}
          className="border w-[60%] border-[#d1d1d1] rounded-md p-[10px] mobile:py-[5px]"
        />
      </li>
      <li className="flex items-center justify-start">
        <span className="min-w-[20%]">닉네임</span>
        <label htmlFor="nick" className="sr-only">
          nick
        </label>
        <input
          id="nick"
          name="nickName"
          onChange={onChange}
          value={values.nickName}
          className="border w-[60%] border-[#d1d1d1] rounded-md p-[10px] mobile:py-[5px]"
        />
      </li>
      <li className="flex items-start justify-start gap-[10px]">
        <span className="min-w-[20%]">프로필</span>
        <img src={values.imgUrl} className="w-[100px] mobile:w-[50px]"></img>
        <button className="font-bold text-[14px] mobile:text-[10px] text-white px-[20px] mobile:px-[10px] py-[6px] mobile:py-[3px] bg-slate-400 rounded-2xl">
          change
        </button>
      </li>
      <li className="flex items-center justify-start gap-[10px] mobile:gap-[5px]">
        <span className="min-w-[20%]">경력자이신가요?</span>
        <input
          type="checkbox"
          name="experienced"
          onChange={onChange}
          checked={values.experienced}
        />
      </li>
      <li className="flex items-center justify-start gap-[10px] text-[16px]">
        <span className="min-w-[20%]">관심 태그</span>
        <Interests
          type="profile"
          onSelected={onSelected}
          selected={values.interests}
        />
      </li>
    </ul>
  );
}

export default Edit;
