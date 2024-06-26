import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import banner from "@/assets/banner_1.png";
import profile1 from "@/assets/profile/avatar1.svg";
import recommend from "@/assets/icon/recommend.svg";
import view from "@/assets/icon/view.svg";
import comment from "@/assets/icon/comment.svg";
import LandingList from "@/components/landing/LandingList";
import LandingBoard from "@/components/landing/LandingBoard";

function Landing() {
  return (
    <div className="w-full">
      <Header />
      <div>
        <img
          src={banner}
          alt="배너 이미지"
          className="w-full desktop:mx-auto desktop:my-20 tablet:my-16 desktop:h-72 tablet:h-52 mobile:hidden tablet:block"
        />
      </div>

      <div className="relative desktop:max-w-[1240px] tablet:max-w-[768px] mobile:max-w-[320px] m-auto mb-[200px]">
        <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 desktop:gap-x-8 desktop:gap-y-56 tablet:gap-x-5 tablet:gap-y-36 mobile:gap-y-24 desktop:mt-32 tablet:mt-28 mobile:mt-20 desktop:pt-20 tablet:pt-16 mobile:pt-12 desktop:px-5 tablet:px-5 mobile:px-3">
          <p className="absolute desktop:text-3xl tablet:text-2xl mobile:text-xl font-medium desktop:left-5 desktop:top-0 tablet:left-5 tablet:top-[10px] mobile:top-0">
            소통해요
          </p>

          <p className="absolute desktop:text-3xl tablet:text-2xl mobile:text-xl font-medium desktop:left-5 desktop:top-[750px] tablet:left-5 tablet:top-[1250px] mobile:top-[1580px]">
            사람을 찾아요
          </p>
          <LandingBoard
            heading="QnA"
            style="bg-banner_qna bg-center bg-cover"
            order="desktop:order-1 tablet:order-1"
          />

          <LandingBoard
            heading="커뮤니티"
            style="bg-banner_commu bg-center bg-cover"
            order="desktop:order-2 tablet:order-2"
          />
          <LandingBoard
            heading="취업후기"
            style="bg-banner_review bg-center bg-cover"
            order="desktop:order-3 tablet:order-3"
          />

          <LandingBoard
            heading="멘토링"
            style="bg-banner_mento bg-center bg-cover"
            order="desktop:order-4 tablet:order-5"
          />

          <LandingBoard
            heading="스터디"
            style="bg-banner_study bg-center bg-cover"
            order="desktop:order-5 tablet:order-6"
          />
          <LandingBoard
            heading="모집공고"
            style="bg-banner_job bg-center bg-cover"
            order="desktop:order-6 tablet:order-4"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Landing;
