import React from "react";
import penImg from "@/assets/pen.png";
import { useNavigate } from "react-router-dom";
import { deleteData } from "@/util/Crud";
import useLoginInfoStore from "@/stores/loginInfo";
import { useCookies } from "react-cookie";
import useInterestsInfo from "@/hooks/useInterestsInfo";
function Inform({ value }) {
  const nav = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const { grantType, accessToken } = useLoginInfoStore();
  const interests = useInterestsInfo(value.interests);
  const onClick = async () => {
    if (confirm("정말 탈퇴하시겠습니까?") == true) {
      if (
        confirm("탈퇴하면 모든 정보가 사라집니다 그래도 탈퇴하시겠습니까?") ==
        true
      ) {
        await deleteData(`${import.meta.env.VITE_API_URL}/members`, {
          Authorization: `${grantType} ${accessToken}`,
        });
        nav("/");
        removeCookie("grantType");
        removeCookie("accessToken");
        removeCookie("refreshToken");
        localStorage.clear();
      }
    }
  };
  return (
    <div>
      <h2 className="text-[25px] py-[10px] font-semibold border-b border-[#888484] mt-[10px]">
        {value.name}님의 프로필
      </h2>
      <div className="pb-[52px] pt-[10px] px-[10px] mobile:py-[40px] flex gap-[40px] mobile:gap-[13px] bg-white rounded-lg drop-shadow-md shadow-neutral-400 mt-[20px] relative">
        <div className="min-w-[200px] mobile:min-w-[130px] h-[150px] mobile:h-[78px] px-[40px] py-[10px] rounded-full">
          <img src={value.imgUrl} className="w-full h-full"></img>
        </div>
        <div className="flex flex-col justify-center">
          <ul className="flex flex-col gap-[20px] mobile:gap-[8px] text-[18px] mobile:text-[15px]">
            <li>
              <span>이름 : {value.name}</span>
            </li>
            <li>
              <span>닉네임 : {value.nickName}</span>
            </li>
            <li className="flex gap-[10px]">
              <span className="text-nowrap">관심기술 : </span>
              <ul className="flex gap-[10px] mobile:gap-[4px] text-[14px] mobile:text-[10px] flex-wrap">
                {interests.map((interest) => {
                  return (
                    <li key={interest.id}>
                      <div className="font-bold bg-gray_8 text-gray_0 px-[10px] py-[3px] mobile:px-[9px] mobile:py-[6px] rounded-lg">
                        {interest.name}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
        <button
          onClick={() => nav("/profile/edit")}
          className="absolute hover:brightness-90 hover:text-white bg-brand_blue rounded-md right-2 px-[10px] mobile:px-[5px] py-[3px] mobile:py-[5px]"
        >
          <span className="mobile:hidden">수정하기</span>
          <img
            src={penImg}
            className="tablet:hidden desktop:hidden w-[23px]"
          ></img>
        </button>
        <button
          onClick={onClick}
          className="absolute bg-brand_red hover:brightness-90 hover:text-white rounded-md right-2 bottom-2 px-[10px] py-[3px] mobile:text-[15px]"
        >
          회원탈퇴
        </button>
      </div>
    </div>
  );
}

export default Inform;
