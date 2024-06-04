import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/board/Banner";
import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";

import search from "@/assets/icon/search.svg";
import PageButton from "@/components/board/PageButton";
import filter from "@/assets/icon/filter.svg";
import BoardList from "@/components/board/BoardList";
import StudyList from "@/components/board/StudyList";
import pen from "@/assets/pen.png";
import MentoringList from "@/components/board/MentoringList";

function Mentoring() {
  const [selectedOption, setSelectedOption] = useState("recent");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id);
  };
  return (
    <div>
      <Header />
      <div className="mx-8 mobile:mx-5 mobile:mb-32">
        <div>
          <Banner
            heading="멘토링"
            exp="선배 또는 동료들의 경험을 들어봐요"
            style="bg-[#C9DECF]"

            // className="bg-gradient-to-t from-[#E6E6FA] to-[#EDEDED]"
          />
        </div>
        <form
          action=""
          className="desktop:max-w-[1240px] tablet:max-w-[768px] mobile:max-w-[320px] m-auto my-5"
        >
          <div className="mobile:hidden flex flex-col items-center relative">
            <label htmlFor="search" className="sr-only">
              내용 검색하기
            </label>
            <input
              id="search"
              type="search"
              placeholder="검색어를 입력하세요"
              className="border w-full pl-8 py-3 rounded-full placeholder:text-[#121212] outline-none"
            />
            <button className="absolute top-2 right-5 w-9">
              <img src={search} alt="검색하기" />
            </button>
          </div>
          <div className="flex justify-between items-center desktop:gap-7 tablet:gap-7 desktop:border-b-2 tablet:border-b-2">
            <div>
              <div className="mobile:block hidden">
                <label htmlFor="dropdown" className="sr-only">
                  정렬하기
                </label>
                <select
                  id="dropdown"
                  name="dropdown"
                  className="block border border-gray_7 font-semibold w-[62px] py-2 pl-1 rounded text-[10px] outline-none"
                >
                  <option>최신순</option>
                  <option>댓글순</option>
                  <option>좋아요순</option>
                </select>
              </div>

              {/* 라디오 버튼 */}
              <div className="mobile:hidden tablet:block">
                <fieldset>
                  <legend className="sr-only">정렬 방법</legend>
                  <div className="space-x-4 flex font-bold desktop:text-lg">
                    <div className="flex items-center">
                      <input
                        id="recent"
                        name="filter"
                        type="radio"
                        className="sr-only"
                        checked={selectedOption === "recent"}
                        onChange={handleOptionChange}
                      />
                      <label
                        htmlFor="recent"
                        className={`ml-2 block  ${
                          selectedOption === "recent"
                            ? "text-gray_8"
                            : "text-gray_5"
                        }`}
                      >
                        • 최신순
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="comment"
                        name="filter"
                        type="radio"
                        className="sr-only"
                        checked={selectedOption === "comment"}
                        onChange={handleOptionChange}
                      />
                      <label
                        htmlFor="comment"
                        className={`ml-2 block ${
                          selectedOption === "comment"
                            ? "text-gray_8"
                            : "text-gray_5"
                        }`}
                      >
                        • 댓글순
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="like"
                        name="filter"
                        type="radio"
                        className="sr-only"
                        checked={selectedOption === "like"}
                        onChange={handleOptionChange}
                      />
                      <label
                        htmlFor="like"
                        className={`ml-2 block ${
                          selectedOption === "like"
                            ? "text-gray_8"
                            : "text-gray_5"
                        }`}
                      >
                        • 좋아요순
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

            {/* 태그 검색 창 */}
            <div className="mobile:hidden tablet:block relative py-10">
              <label htmlFor="filter" className="sr-only">
                태그 검색창
              </label>
              <input
                type="search"
                id="filter"
                className="border py-2 rounded-full desktop:w-[550px] tablet:w-[300px] pl-5 outline-none"
                placeholder="# 태그를 입력하세요"
              />
              <button className="absolute top-12 right-5">
                <img src={filter} alt="필터" />
              </button>
            </div>
            <div className="hidden mobile:flex flex-col items-center relative">
              <label htmlFor="search_2" className="sr-only">
                내용 검색하기
              </label>
              <input
                id="search_2"
                type="search"
                placeholder="검색어를 입력하세요"
                className="border w-[160px] pl-3 py-1 rounded-full placeholder:text-[#121212] placeholder:text-xs"
              />
              <button className="absolute top-2 right-2 w-5">
                <img src={search} alt="검색하기" />
              </button>
            </div>

            <button
              className="bg-gray_6 text-white text-sm desktop:px-6 tablet:px-6 desktop:py-2 tablet:py-2 mobile:px-2 mobile:py-2 mobile:rounded"
              type="button"
            >
              <span className="mobile:hidden tablet:block desktop:block">
                글쓰기
              </span>
              <img
                src={pen}
                alt="글쓰기 아이콘"
                className="desktop:hidden tablet:hidden mobile:w-4"
              />
            </button>
          </div>
        </form>
        <div className="m-auto desktop:max-w-[1240px] tablet:max-w-[768px] mobile:max-w-[320px] tablet:px-10 mobile:px-3">
          <div className="grid desktop:grid-cols-3 desktop:gap-20 tablet:grid-cols-2 tablet:gap-12 mobile:grid-cols-1 mobile:gap-10 mobile:pt-7">
            <Link to="/borad/mentoring/detail">
              <MentoringList />
            </Link>
            <MentoringList />
            <MentoringList />
            <MentoringList />
            <MentoringList />
            <MentoringList />
          </div>
        </div>
        <PageButton />
      </div>
      <Footer />
    </div>
  );
}

export default Mentoring;
