import Header from "@/components/Header";
import commentImg from "@/assets/comment.png";
import goodImg from "@/assets/good.png";
import viewImg from "@/assets/view.png";
import apiFunction from "@/util/apiFunction";
import profileImg from "@/assets/profile.png";
import React from "react";
import Inform from "@/components/profile/Inform";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import useLoginInfoStore from "@/stores/loginInfo";
function Profile() {
  const [cookies] = useCookies();
  const { setGrantType, setAccessToken } = useLoginInfoStore();
  const [memberInfo, setMemberInfo] = useState({
    name: "",
    nickName: "",
    imgUrl: "test.png",
    interests: [],
  });

  useEffect(() => {
    const getMember = async () => {
      try {
        const responseData = (
          await apiFunction.getDataSetHeader(
            `${import.meta.env.VITE_API_URL}/members`,
            {
              headers: {
                Authorization: `${cookies.grantType} ${cookies.accessToken}`,
              },
            }
          )
        ).data.data;
        setMemberInfo(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    getMember();
    setGrantType(cookies.grantType);
    setAccessToken(cookies.accessToken);
  }, [
    cookies.accessToken,
    cookies.grantType,
    cookies.refreshToken,
    setAccessToken,
    setGrantType,
  ]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="flex justify-center">
        <div className="w-[60%] mobile:w-[95%] max-w-[750px] tablet:min-w-[570px]">
          <Inform value={memberInfo} />
          <div>
            <div className="py-[20px] border-b-2 border-[#9b9b9b]">
              <span className="font-bold text-[25px] mobile:text-[20px]">
                내 활동
              </span>
              <ul className="flex gap-[24px] mt-[10px] text-[15px] mobile:text-[12px]">
                <li>
                  <button className="border border-black rounded-md px-[22px] mobile:px-[12px] py-[6px] mobile:py-[6px]">
                    게시한 글
                  </button>
                </li>
                <li>
                  <button className="border border-black rounded-md px-[22px] mobile:px-[12px] py-[6px] mobile:py-[6px]">
                    댓글단 글
                  </button>
                </li>
                <li>
                  <button className="border border-black rounded-md px-[22px] mobile:px-[12px] py-[6px] mobile:py-[6px]">
                    좋아요한 글
                  </button>
                </li>
              </ul>
            </div>
            <div className="py-[15px]">
              <ul className="flex flex-col gap-[20px]">
                <li>
                  <div className="border-b border-[#9b9b9b]">
                    <div className="flex gap-[50px] items-center">
                      <h2 className="text-[20px] mobile:text-[15px] font-bold">
                        큰일났습니다
                      </h2>
                      <span className="font-bold text-[12px] mobile:text-[10px]">
                        10분전
                      </span>
                    </div>
                    <div className="mt-[5px] text-[15px] mobile:text-[12px]">
                      <p>
                        큰일이에요 큰일이 났어요. 도와주세요 큰일이 났어요
                        큰일났어요 도와주세요
                      </p>
                    </div>
                    <div className="flex justify-between py-[9px]">
                      <div className="flex items-center">
                        <img src={profileImg} className="w-[35px]" />
                        <span className="text-[15px]">최민식</span>
                      </div>
                      <ul className="flex gap-[7px] items-center text-[15px] mobile:text-[12px]">
                        <li className="flex">
                          <img
                            src={commentImg}
                            className="w-[18px] mobile:w-[15px]"
                          />
                          <span>10</span>
                        </li>
                        <li className="flex">
                          <img
                            src={viewImg}
                            className="w-[18px] mobile:w-[15px]"
                          />
                          <span>10</span>
                        </li>
                        <li className="flex">
                          <img
                            src={goodImg}
                            className="w-[18px] mobile:w-[15px]"
                          />
                          <span>10</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
