import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/board/Banner";
import React from "react";

import search from "@/assets/icon/search.svg";
import PageButton from "@/components/board/PageButton";
import filter from "@/assets/icon/filter.svg";
import BoardList from "@/components/board/BoardList";
import StudyList from "@/components/board/StudyList";
import pen from "@/assets/pen.png";

function Mentoring() {
  return (
    <div>
      <Header />
      <div className="mobile:mx-5">
        <div>
          <Banner
            heading="스터디"
            exp="선배 또는 동료들의 경험을 들어봐요"
            // className="bg-gradient-to-t from-[#E6E6FA] to-[#EDEDED]"
          />
        </div>
        <form
          action=""
          className="desktop:max-w-[1240px] tablet:max-w-[768px] mobile:max-w-[320px] m-auto mobile:my-5"
        >
          <div className="mobile:hidden tablet:flex flex-col items-center relative">
            <label htmlFor="search" className="sr-only">
              내용 검색하기
            </label>
            <input
              id="search"
              type="search"
              placeholder="검색어를 입력하세요"
              className="border w-full  pl-8 py-3 rounded-full placeholder:text-[#121212]"
            />
            <button className="absolute top-2 right-5 w-9">
              <img src={search} alt="검색하기" />
            </button>
          </div>
          <div className="flex justify-between items-center tablet:gap-7 tablet:border-b-2">
            <div>
              <div className="block tablet:hidden">
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

              <div className="mobile:hidden tablet:block">
                <fieldset>
                  <legend className="sr-only">정렬 방법</legend>
                  <div className="space-x-4 flex">
                    <div>
                      <input
                        id="최신순"
                        name="filter"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 ring"
                      />
                      <label
                        htmlFor="최신순"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        최신순
                      </label>
                    </div>
                    <div>
                      <input
                        id="댓글순"
                        name="filter"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor="댓글순"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        댓글순
                      </label>
                    </div>
                    <div>
                      <input
                        id="좋아요순"
                        name="filter"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor="좋아요순"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        좋아요순
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
                className="border py-2 rounded-full desktop:w-[550px] pl-5"
                placeholder="# 태그를 입력하세요"
              />
              <button className="absolute top-12 right-5">
                <img src={filter} alt="필터" />
              </button>
            </div>
            <div className="tablet:hidden mobile:flex flex-col items-center relative">
              <label htmlFor="search" className="sr-only">
                내용 검색하기
              </label>
              <input
                id="search"
                type="search"
                placeholder="검색어를 입력하세요"
                className="border w-[160px] pl-3 py-1 rounded-full placeholder:text-[#121212] placeholder:text-xs"
              />
              <button className="absolute top-2 right-2 w-5">
                <img src={search} alt="검색하기" />
              </button>
            </div>

            <button
              className="bg-gray_6 text-white text-sm tablet:px-6 tablet:py-2 mobile:px-2 mobile:py-2 mobile:rounded"
              type="button"
            >
              <span className="mobile:hidden">글쓰기</span>
              <img
                src={pen}
                alt="글쓰기 아이콘"
                className="tablet:hidden mobile:w-4"
              />
            </button>
          </div>
        </form>
        <div className="desktop:w-[1240px] m-auto">
          <BoardList />
          <BoardList />
          <BoardList />
          <BoardList />
          <BoardList />
          <BoardList />
          <BoardList />
          <BoardList />
          {/* <StudyList /> */}
        </div>
        <PageButton/>
      </div>
      <Footer />
    </div>
  );
}

export default Mentoring;
