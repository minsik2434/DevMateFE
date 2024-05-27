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
    <div className="w-full">
      <Header />
      <div>
        <img src={banner} alt="배너 이미지" className="desktop:w-[1440px] desktop:mx-auto desktop:my-36" />
      </div>

      <div className="desktop:max-w-[1440px] m-auto">
        <div>
          <p className="text-3xl font-medium mb-6">소통해요</p>
          <div className="flex tablet:justify-between tablet:flex-row mobile:flex-col mobile:gap-20">
            <div className="flex-[0.31]">
              <h2 className="text-[#121212] bg-gradient-to-t from-[#98D8DB] to-[#6ECEDA] p-3 font-medium rounded-md">
                Q&A
              </h2>
             
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
          <div className="flex justify-between tablet:flex-row mobile:flex-col mobile:gap-20">
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
