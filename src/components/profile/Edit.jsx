import React from "react";
import Interests from "@/components/Interests";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import check from "@/assets/icon/check.svg";
import uncheck from "@/assets/icon/uncheck.svg";
function Edit({ onChange, onSelected, values, setImgFile, toggle }) {
  const [img, setImg] = useState("");
  const fileInputRef = useRef(null);
  const handlebuttonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      setImgFile(file);
      reader.onloadend = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  useLayoutEffect(() => {
    setImg(values.imgUrl);
  }, [values.imgUrl]);
  return (
    <ul className="flex flex-col gap-[30px] mobile:gap-[10px] text-[18px] mobile:text-[14px]">
      <li className="flex flex-col items-center gap-[10px]">
        <img src={img} className="w-[100px] mobile:w-[50px]"></img>
        <button
          type="button"
          onClick={handlebuttonClick}
          className="font-bold text-[14px] mobile:text-[10px] text-white px-[20px] mobile:px-[10px] py-[6px] mobile:py-[3px] bg-slate-400 rounded-2xl"
        >
          change
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </li>
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

      <li className="flex items-center justify-start gap-[10px] mobile:gap-[5px]">
        <span className="min-w-[20%]">경력자이신가요?</span>
        <input
          className="sr-only"
          type="checkbox"
          name="experienced"
          onChange={onChange}
          checked={values.experienced}
        />
        <div
          name="experienced"
          onClick={toggle}
          className="cursor-pointer desktop:w-[28px] tablet:w-[28px] mobile:w-[24px] ml-3"
        >
          {values.experienced ? (
            <img src={check} alt="Checked" />
          ) : (
            <img src={uncheck} alt="Unchecked" />
          )}
        </div>
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
