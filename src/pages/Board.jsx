import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/board/Banner";
import React from "react";

import search from "@/assets/icon/search.svg";
import PageButton from "@/components/board/PageButton";
import filter from "@/assets/icon/filter.svg";
import BoardList from "@/components/board/BoardList";

function Board() {
  return (
    <div>
      <Header />
      <div>
        <Banner
          heading="스터디"
          exp="선배 또는 동료들의 경험을 들어봐요"
          // className="bg-gradient-to-t from-[#E6E6FA] to-[#EDEDED]"
        />
      </div>
      <form action="" className="w-[60%] m-auto">
        <div className="flex flex-col items-center  relative">
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
        <div className="flex justify-between items-center gap-7 mx-2 border-b-2">
          <ol className="flex gap-14">
            <li>
              <button>최신순</button>
            </li>
            <li>
              <button>댓글순</button>
            </li>
            <li>
              <button>좋아요순</button>
            </li>
          </ol>

          {/* 태그 검색 창 */}
          <div className="relative py-10">
            <label htmlFor="filter" className="sr-only">
              태그 검색창
            </label>
            <input
              type="search"
              id="filter"
              className="border py-2 rounded-full w-[400px]"
            />
            <button className="absolute top-12 right-5">
              <img src={filter} alt="필터" />
            </button>
          </div>
          <button className="bg-gray_6 text-white text-sm px-6 py-2">
            글쓰기
          </button>
        </div>
      </form>

      <div className="w-[60%] m-auto">
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
      </div>
      <PageButton />
      <Footer />
    </div>
  );
}

export default Board;
