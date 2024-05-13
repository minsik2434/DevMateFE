import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import banner from "@/assets/banner_1.png";
import profile1 from "@/assets/profile/avatar1.svg";
import recommend from "@/assets/icon/recommend.svg";
import view from "@/assets/icon/view.svg";
import comment from "@/assets/icon/comment.svg";
import LandingList from "@/components/landing/LandingList";

function Landing() {
  return (
    <div>
      <Header />
      <div>
        <img src={banner} alt="배너 이미지" className="w-[85vw] m-auto my-36" />
      </div>

      <div className="mx-[8%]">
        <div>
          <p className="text-3xl font-medium mb-6">소통해요</p>
          <div className="flex justify-between">
            <div className="flex-[0.31]">
              <h2 className="text-[#121212] bg-gradient-to-t from-[#98D8DB] to-[#6ECEDA] p-3 font-medium rounded-md">
                Q&A
              </h2>
              {/* <div>
                <p className="ml-3 my-2 font-medium text-lg">큰일났습니다</p>
                <div className="flex items-center justify-between border-b-2 border-b-gray_4 pb-2">
                  <div className="flex items-center gap-1">
                    <img
                      src={profile1}
                      alt="사용자 이미지"
                      className="rounded-full w-6"
                    />
                    <span>최민식</span>
                  </div>
                  <div className="">
                    <ul className="flex flex-wrap justify-center text-sm gap-1">
                      <li className="laptop:px-2 laptop:rounded-3xl laptop:text-sm bg-gray_5">
                        C
                      </li>
                      <li className="laptop:px-2 laptop:rounded-3xl laptop:text-sm bg-gray_5">
                        C++
                      </li>
                      <li className="laptop:px-2 laptop:rounded-3xl laptop:text-sm bg-gray_5">
                        frontend
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="flex gap-3 laptop:text-sm">
                      <li className="flex gap-1 items-center">
                        <img src={comment} alt="댓글 수" />
                        <span>10</span>
                      </li>
                      <li className="flex gap-1 items-center">
                        <img src={view} alt="조회 수" />
                        <span>11</span>
                      </li>
                      <li className="flex gap-1 items-center">
                        <img src={recommend} alt="추천 수" />
                        <span>11</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              <LandingList />
              <LandingList />
              <LandingList />
              <LandingList />
              <LandingList />
            </div>
            <div className="flex-[0.31]">
              <h2 className="text-[#121212] bg-gradient-to-t from-[rgba(245,78,162,0.44)] to-[rgba(255,118,118,0.51)] p-3 font-medium rounded-md">
                커뮤티니
              </h2>
              <LandingList />
              <LandingList />
              <LandingList />
              <LandingList />
              <LandingList />
            </div>
            <div className="flex-[0.31]">
              <h2 className="text-[#121212] bg-gradient-to-t from-[#FDF2F0] to-[#F8DAE2] p-3 font-medium rounded-md">
                취업후기
              </h2>
              <LandingList />
              <LandingList />
              <LandingList />
              <LandingList />
              <LandingList />
            </div>
          </div>
        </div>
        <div className="mb-64">
          <p className="text-3xl font-medium mb-6 mt-24">사람을 찾아요</p>
          <div className="flex justify-between">
            <div className="flex-[0.31]">
              <h2 className="text-[#121212] bg-[#C9DECF] p-3 font-medium rounded-md">
                멘토링
              </h2>
              <LandingList />
              <LandingList />
              <LandingList />
              <LandingList />
              <LandingList />
            </div>
            <div className="flex-[0.31]">
              <h2 className="text-[#121212] bg-gradient-to-t from-[#E6E6FA] to-[#EDEDED] p-3 font-medium rounded-md">
                스터디
              </h2>
              <LandingList />
              <LandingList />
              <LandingList />
              <LandingList />
              <LandingList />
            </div>
            <div className="flex-[0.31]">
              <h2 className="text-[#121212] bg-gradient-to-t from-[#FCE382] to-[#F38181] p-3 font-medium rounded-md">
                모집공고
              </h2>
              <LandingList />
              <LandingList />
              <LandingList />
              <LandingList />
              <LandingList />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Landing;
