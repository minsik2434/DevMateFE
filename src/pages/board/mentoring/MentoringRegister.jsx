import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/board/Banner";
import React from "react";

function MentoringRegister() {
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

        <form className="flex flex-col desktop:gap-20 tablet:gap-16 mobile:gap-10 tablet:mt-12 mobile:mt-8">
          <div className="desktop:px-5 desktop:py-8 tablet:px-5 tablet:py-8 mobile:px-4 mobile:py-5 flex flex-col gap-7">
            <span className="text-lg mobile:text-sm font-semibold text-gray_6">
              멘토 정보
            </span>
            <div className="flex items-center mobile:text-xs">
              <label
                htmlFor="number"
                className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]"
              >
                연락처
              </label>
              <input
                type="text"
                id="number"
                className="border border-gray_6 pl-2 p-1 w-[350px] mobile:w-[200px] focus:outline-[#00C471]"
                placeholder="000-0000-0000"
              />
            </div>
            <div className="flex items-center mobile:text-xs">
              <label
                htmlFor="email"
                className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]"
              >
                이메일
              </label>
              <input
                type="text"
                id="email"
                className="border border-gray_6 pl-2 p-1 w-[350px] mobile:w-[200px] focus:outline-[#00C471]"
                placeholder="자주 사용하는 이메일을 입력해주세요"
              />
            </div>
          </div>
          <div className="desktop:px-5 desktop:py-8 tablet:px-5 tablet:py-8 mobile:px-4 mobile:py-5 flex flex-col gap-7">
            <span className="text-lg mobile:text-sm font-semibold text-gray_6">
              멘토링 정보
            </span>
            <div className="flex items-center mobile:text-xs">
              <label
                htmlFor="title"
                className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]"
              >
                멘토링명
              </label>
              <input
                type="text"
                id="title"
                className="border border-gray_6 pl-2 p-1 w-[350px] mobile:w-[200px] focus:outline-[#00C471]"
                placeholder="멘토링 제목을 입력해주세요"
              />
            </div>
            <div className="flex items-center mobile:text-xs">
              <label
                htmlFor="job"
                className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]"
              >
                직무
              </label>
              <input
                type="text"
                id="job"
                className="border border-gray_6 pl-2 p-1 w-[350px] mobile:w-[200px] focus:outline-[#00C471]"
                placeholder="ex ) FE 개발자"
              />
            </div>
            <div className="flex items-center mobile:text-xs">
              <label
                htmlFor="career"
                className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]"
              >
                경력
              </label>
              <input
                type="text"
                id="career"
                className="border border-gray_6 pl-2 p-1 w-[350px] mobile:w-[200px] focus:outline-[#00C471]"
                placeholder="ex ) 3년 (주니어)"
              />
            </div>
            <div className="flex items-center mobile:text-xs">
              <label
                htmlFor="link"
                className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]"
              >
                링크
              </label>
              <input
                type="text"
                id="link"
                className="border border-gray_6 pl-2 p-1 w-[350px] mobile:w-[200px] focus:outline-[#00C471]"
                placeholder="github or 포트폴리오"
              />
            </div>
          </div>
          <div className="desktop:px-5 desktop:py-8 tablet:px-5 tablet:py-8 mobile:px-4 mobile:py-5 flex flex-col gap-5">
            <span className="text-lg mobile:text-sm font-semibold text-gray_6">
              멘토링소개
            </span>

            {/* <p className="desktop:h-[450px] desktop:mt-5 tablet:h-[300px] mobile:h-[200px] mobile:text-xs">
              탕탕 후루후루 탕탕 후루루루루
            </p> */}
            <textarea
              name="introduce"
              id="introduce"
              className="border desktop:h-[400px] desktop:mt-5 tablet:h-[300px] mobile:h-[200px] p-5 mobile:text-xs"
              placeholder="멘토링을 소개할 글을 작성해주세요"
            ></textarea>
          </div>

          <div className="desktop:px-5 desktop:py-8 tablet:px-5 tablet:py-8 mobile:px-4 mobile:py-5 flex justify-end gap-5 font-semibold mobile:text-xs ">
            <button className="bg-brand_blue w-[120px] py-2 mobile:w-[60px] mobile:py-1 rounded">등록</button>
            <button className="bg-brand_red w-[120px] py-2 mobile:w-[60px] mobile:py-1 rounded">취소</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default MentoringRegister;
