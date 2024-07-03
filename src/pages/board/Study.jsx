import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import React from "react";

import { useState } from "react";

import search from "@/assets/icon/search.svg";
import PageButton from "@/components/board/PageButton";
import filter from "@/assets/icon/filter.svg";
import StudyList from "@/components/board/StudyList";
import pen from "@/assets/pen.png";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { getData } from "@/util/Crud";
import { useEffect } from "react";
import xButton from "@/assets/xButton.png";
import { useRef } from "react";
import BoardWrite from "@/components/BoardWrite";
import { useLocation } from "react-router-dom";

function Study() {
  const [postDatas, setPostDatas] = useState([]);
  const nav = useNavigate();

  const location = useLocation();
  const [searchInput, setSearchInput] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({
    sort: "recent",
    search: "",
    tags: [],
    page: 0,
  });
  const tagRef = useRef();
  const [pageData, setPageData] = useState({
    page: "",
    totalPage: "",
  });
  const handleOptionChange = (event) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      sort: event.target.id,
    }));
  };
  const setCurrentPage = (value) => {
    setPageData((prev) => ({
      ...prev,
      page: value,
    }));
  };
  const onSubmit = () => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      search: searchInput,
    }));
  };
  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const setSelectedOptionsPage = (value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      page: value,
    }));
  };

  const setTotalPage = (value) => {
    setPageData((prev) => ({
      ...prev,
      totalPage: value,
    }));
  };

  const removeTag = (index) => {
    const updatedTags = selectedOptions.tags.filter((_, i) => i !== index);
    onTags(updatedTags);
  };

  const onTags = (value) => {
    setSelectedOptions((prevValues) => ({
      ...prevValues,
      tags: value,
    }));
  };

  const addTags = (e) => {
    if (selectedOptions.tags.length >= 4) {
      e.preventDefault();
      return;
    }
    const inputValue = e.target.value;
    if (
      e.key === "Enter" &&
      inputValue !== "" &&
      !selectedOptions.tags.includes(inputValue)
    ) {
      e.target.value = "";
      onTags([...selectedOptions.tags, inputValue]);
    }
  };

  const handleKeyDown = (e) => {
    const inputValue = e.target.value;
    if (e.key === "Backspace" && inputValue === "") {
      removeLastTag();
    }
  };

  const removeLastTag = () => {
    const updatedTags = selectedOptions.tags.slice(0, -1);
    onTags(updatedTags);
  };

  useLayoutEffect(() => {
    const getPostData = async () => {
      try {
        const params = new URLSearchParams({
          sort: selectedOptions.sort,
          sc: selectedOptions.search,
          page: selectedOptions.page,
        });
        selectedOptions.tags.forEach((tag) => {
          params.append("tag", tag);
        });
        const requestUrl = `${
          import.meta.env.VITE_API_URL
        }/post/study/list?${params.toString()}`;
        const responseData = (await getData(requestUrl)).data;
        setPostDatas(responseData.content);
        setCurrentPage(responseData.pageable.pageNumber);
        setTotalPage(responseData.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    getPostData();
  }, [selectedOptions]);
  useEffect(() => {
    const initSelectOptions = () => {
      setSelectedOptions({
        sort: "recent",
        search: "",
        tags: [],
        page: 0,
      });
    };
    initSelectOptions();
  }, []);
  return (
    <div className="bg-gray_0">
      <Header />
      <div className="mx-8 mobile:mx-5 mobile:mb-32">
        <div className="flex justify-center">
          <Banner
            heading="스터디"
            exp="원하는 사람들과 함께 공부해봐요"
            style="bg-banner_study bg-center bg-cover border border-gray_2"
          />
        </div>
        <div className="max-w-[1240px] mobile:min-w-[280px] m-auto mt-8 mobile:mt-4">
          <div className="flex flex-col items-center relative">
            <label htmlFor="search" className="sr-only">
              내용 검색하기
            </label>
            <input
              id="search"
              value={searchInput}
              type="search"
              onChange={handleSearchChange}
              placeholder="검색어를 입력하세요"
              autoComplete="off"
              className="border w-full pl-8 py-3 rounded-full mobile:pl-4 mobile:text-[12px] mobile:placeholder:text-[12px] mobile:py-1 placeholder:text-[#121212] outline-none"
            />
            <button
              onClick={onSubmit}
              className="absolute top-2 right-5 w-9 mobile:w-4 mobile:top-1.5 mobile:right-3"
            >
              <img src={search} alt="검색하기" />
            </button>
          </div>
          <div className="flex justify-between items-center desktop:gap-7 tablet:gap-7 mobile:mt-[10px] border-b py-10 mobile:pt-1 mobile:pb-5 text-nowrap">
            <div>
              <div className="mobile:block hidden">
                <label htmlFor="dropdown" className="sr-only">
                  정렬하기
                </label>
                <select
                  id="dropdown"
                  name="dropdown"
                  className="block border border-gray_3 font-semibold w-[62px] py-2 pl-1 rounded text-[10px] outline-none"
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
                        checked={selectedOptions.sort === "recent"}
                        onChange={handleOptionChange}
                      />
                      <label
                        htmlFor="recent"
                        className={`ml-2 block  ${
                          selectedOptions.sort === "recent"
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
                        checked={selectedOptions.sort === "comment"}
                        onChange={handleOptionChange}
                      />
                      <label
                        htmlFor="comment"
                        className={`ml-2 block ${
                          selectedOptions.sort === "comment"
                            ? "text-gray_8"
                            : "text-gray_5"
                        }`}
                      >
                        • 댓글순
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="good"
                        name="filter"
                        type="radio"
                        className="sr-only"
                        checked={selectedOptions === "good"}
                        onChange={handleOptionChange}
                      />
                      <label
                        htmlFor="good"
                        className={`ml-2 block ${
                          selectedOptions.sort === "good"
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
            <div className="bg-white desktop:w-[50%] w-[60%]">
              <label htmlFor="filter" className="sr-only">
                태그 검색창
              </label>
              <div
                className="border py-2 mobile:py-1.55 rounded-md flex relative mobile:text-[10px] cursor-text"
                onClick={() => {
                  tagRef.current.focus();
                }}
              >
                <ul className="flex gap-[10px] px-[7px] items-center flex-wrap">
                  {selectedOptions.tags.map((tag, index) => {
                    return (
                      <li key={index} className="text-nowrap">
                        <div className="bg-gray_2 pl-[10px] pr-[5px] py-[3px] gap-[5px] flex rounded-[5px]">
                          <span>{tag}</span>
                          <button
                            className="w-[14px]"
                            onClick={() => removeTag(index)}
                          >
                            <img src={xButton} className="w-full"></img>
                          </button>
                        </div>
                      </li>
                    );
                  })}
                  <li>
                    <input
                      type="search"
                      ref={tagRef}
                      id="filter"
                      onKeyUp={(e) => {
                        {
                          addTags(e);
                        }
                      }}
                      onKeyDown={handleKeyDown}
                      className="pl-2 outline-none w-full mobile:placeholder:text-[10px]"
                      autoComplete="off"
                      placeholder="# 모집 분야를 입력하세요"
                    />
                  </li>
                </ul>
                <button className="absolute top-2.1 right-4 mobile:top-1 mobile:right-2 mobile:w-5">
                  <img src={filter} alt="필터" />
                </button>
              </div>
            </div>

            <BoardWrite link="/post/study/new" location={location.pathname} />

            {/* <button
              className="bg-gray_8 text-gray_0 text-sm desktop:px-6 tablet:px-6 desktop:py-2 tablet:py-2 mobile:px-2 mobile:py-2 desktop:rounded-[5px] mobile:rounded"
              type="button"
              onClick={() => nav("/post/study/new")}
            >
              <span className="mobile:hidden tablet:block desktop:block">
                글쓰기
              </span>
              <img
                src={pen}
                alt="글쓰기 아이콘"
                className="desktop:hidden tablet:hidden mobile:w-4"
              />
            </button> */}
          </div>
        </div>
        <div className="m-auto desktop:max-w-[1240px] tablet:max-w-[768px] mobile:max-w-[320px] tablet:px-10 mobile:px-3 mt-8 mobile:mt-1">
          <div className="grid desktop:grid-cols-3 desktop:gap-20 tablet:grid-cols-2 tablet:gap-12 mobile:grid-cols-1 mobile:gap-10 mobile:pt-7">
            {postDatas.map((postData) => {
              return <StudyList key={postData.id} data={postData} />;
            })}
          </div>
        </div>
        <PageButton pageData={pageData} setPage={setSelectedOptionsPage} />
      </div>
      <Footer />
    </div>
  );
}

export default Study;
