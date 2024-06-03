import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/board/Banner";
import DetailComment from "@/components/board/DetailComment";
import DetailCommentList from "@/components/board/DetailCommentList";
import React from "react";

function MentoringDetail() {
  return (
    <div>
      <Header />
      <div className="desktop:w-[1240px] tablet:w-[768px] mobile:w-[320px] mx-auto desktop:px-5 tablet:px-5 mobile:px-3">
        <div>
          <Banner
            heading="멘토링"
            exp="선배 또는 동료들의 경험을 들어봐요"
            style="bg-[#C9DECF]"

            // className="bg-gradient-to-t from-[#E6E6FA] to-[#EDEDED]"
          />
        </div>

        <div className="flex flex-col desktop:gap-20 tablet:gap-16 mobile:gap-10 tablet:mt-12 mobile:mt-8">
          <div className="border border-gray_5 rounded-2xl desktop:px-5 desktop:py-8 tablet:px-5 tablet:py-8 mobile:px-4 mobile:py-5 flex flex-col gap-5">
            <span className="text-lg mobile:text-sm font-semibold text-gray_6">
              멘토 정보
            </span>
            <div className="flex mobile:text-xs">
              <span className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]">
                연락처
              </span>
              <span>010-0000-0000</span>
            </div>
            <div className="flex mobile:text-xs">
              <span className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]">
                이메일
              </span>
              <span>ewsn0825@naver.com</span>
            </div>
          </div>
          <div className="border border-gray_5 rounded-2xl desktop:px-5 desktop:py-8 tablet:px-5 tablet:py-8 mobile:px-4 mobile:py-5 flex flex-col gap-5">
            <span className="text-lg mobile:text-sm font-semibold text-gray_6">
              멘토링 정보
            </span>
            <div className="flex mobile:text-xs">
              <span className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]">
                멘토링명
              </span>
              <span>010-0000-0000</span>
            </div>
            <div className="flex mobile:text-xs">
              <span className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]">
                직무
              </span>
              <span>FE 개발자</span>
            </div>
            <div className="flex mobile:text-xs">
              <span className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]">
                경력
              </span>
              <span>3년(주니어)</span>
            </div>
            <div className="flex mobile:text-xs">
              <span className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]">
                링크
              </span>
              <span>ewsn0825</span>
            </div>
          </div>
          <div className="border border-gray_5 rounded-2xl desktop:px-5 desktop:py-8 tablet:px-5 tablet:py-8 mobile:px-4 mobile:py-5 flex flex-col gap-5">
            <span className="text-lg mobile:text-sm font-semibold text-gray_6">
              멘토링소개
            </span>

            <p className="desktop:h-[450px] desktop:mt-5 tablet:h-[300px] mobile:h-[200px] mobile:text-xs">탕탕 후루후루 탕탕 후루루루루</p>
          </div>
        </div>

        <div className="mt-28">
          <DetailComment />
          <div className="py-[50px] mobile:py-[18px]">
            <ul className="flex flex-col gap-8">
              <li>
                <DetailCommentList />
              </li>
              <li>
                <DetailCommentList />
              </li>
              <li>
                <DetailCommentList />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MentoringDetail;
