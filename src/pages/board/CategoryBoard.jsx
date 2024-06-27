import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/board/Banner";
import React from "react";
import { useState } from "react";
import search from "@/assets/icon/search.svg";
import PageButton from "@/components/board/PageButton";
import filter from "@/assets/icon/filter.svg";
import BoardList from "@/components/board/BoardList";
import pen from "@/assets/pen.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { getData } from "@/util/Crud";
import { useParams } from "react-router-dom";
import xButton from "@/assets/xButton.png";
import { useRef } from "react";

function CategoryBoard() {
  const param = useParams();
  const nav = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({
    sort: "recent",
    search: "",
    tags: [],
    page: 0,
  });

  const tagRef = useRef();
  const bannerElementByCategory = {
    qna: {
      heading: "Q&A",
      exp: "동료들과 문제를 함께 해결해보아요",
      style: "bg-banner_qna bg-center bg-cover",
    },

    community: {
      heading: "커뮤니티",
      exp: "여러분의 이야기를 들려주세요",
      style: "bg-banner_commu bg-center bg-cover",
    },

    job: {
      heading: "모집공고",
      exp: "좋은 회사 또는 직장의 정보를 공유해주세요",
      style: "bg-banner_job bg-center bg-cover",
    },

    review: {
      heading: "취업 후기",
      exp: "꿈을 이룬 과정을 자라나는 새싹들에게 들려주세요",
      style: "bg-banner_review bg-center bg-cover",
    },
  };

  const [postDatas, setPostDatas] = useState([]);
  const [pageData, setPageData] = useState({
    page: "",
    totalPage: "",
  });
  const handleOptionChange = (event) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      sort: event.target.value,
    }));
  };

  const setCurrentPage = (value) => {
    setPageData((prev) => ({
      ...prev,
      page: value,
    }));
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

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const onSubmit = () => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      search: searchInput,
    }));
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
        const requestUrl = `${import.meta.env.VITE_API_URL}/post/${
          param.category
        }/list?${params.toString()}`;
        const responseData = (await getData(requestUrl)).data;
        setPostDatas(responseData.content);
        setCurrentPage(responseData.pageable.pageNumber);
        setTotalPage(responseData.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    getPostData();
  }, [param.category, selectedOptions]);

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
  }, [param.category]);

  const { heading, exp, style } = bannerElementByCategory[param.category];
  return (
    <div>
      <Header />
      <div className="mx-8 mobile:mx-5 mobile:mb-32">
        <div>
          <Banner heading={heading} exp={exp} style={style} />
        </div>
        <div className="desktop:max-w-[1240px] tablet:max-w-[768px] mobile:max-w-[320px] m-auto">
          <div className="flex flex-col items-center relative">
            <label htmlFor="search" className="sr-only">
              내용 검색하기
            </label>
            <input
              id="search"
              value={searchInput}
              type="search"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSubmit();
                }
              }}
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
          <div className="flex justify-between items-start desktop:gap-7 tablet:gap-7 mobile:mt-[10px] border-b py-10 mobile:pt-1 mobile:pb-5">
            <div>
              <div className="mobile:block hidden">
                <label htmlFor="dropdown" className="sr-only">
                  정렬하기
                </label>
                <select
                  id="dropdown"
                  name="dropdown"
                  onChange={handleOptionChange}
                  className="block border border-gray_3 font-semibold w-[62px] py-2 pl-1 rounded text-[10px] outline-none"
                >
                  <option value="recent">최신순</option>
                  <option value="comment">댓글순</option>
                  <option value="good">좋아요순</option>
                </select>
              </div>

              {/* 라디오 버튼 */}
              <div className="mobile:hidden tablet:block pt-2">
                <fieldset>
                  <legend className="sr-only">정렬 방법</legend>
                  <div className="space-x-4 flex font-bold desktop:text-lg">
                    <div className="flex items-center">
                      <input
                        id="recent"
                        name="filter"
                        type="radio"
                        value="recent"
                        className="sr-only"
                        checked={selectedOptions.sort === "recent"}
                        onChange={handleOptionChange}
                      />
                      <label
                        htmlFor="recent"
                        className={`ml-2 block cursor-pointer ${
                          selectedOptions.sort === "recent"
                            ? "text-gray_8"
                            : "text-gray_5 hover:brightness-90"
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
                        value="comment"
                        className="sr-only"
                        checked={selectedOptions.sort === "comment"}
                        onChange={handleOptionChange}
                      />
                      <label
                        htmlFor="comment"
                        className={`ml-2 block cursor-pointer ${
                          selectedOptions.sort === "comment"
                            ? "text-gray_8"
                            : "text-gray_5 hover:brightness-90"
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
                        value="good"
                        className="sr-only"
                        checked={selectedOptions.sort === "good"}
                        onChange={handleOptionChange}
                      />
                      <label
                        htmlFor="good"
                        className={`ml-2 block cursor-pointer ${
                          selectedOptions.sort === "good"
                            ? "text-gray_8"
                            : "text-gray_5 hover:brightness-90"
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
            <div className="mobile: tablet:block">
              <label htmlFor="filter" className="sr-only">
                태그 검색창
              </label>
              <div
                className="border py-2 mobile:py-1.55 rounded-md desktop:w-[550px] tablet:w-[300px] mobile:w-[200px] flex relative mobile:text-[10px] cursor-text"
                onClick={() => {
                  tagRef.current.focus();
                }}
              >
                <ul className="flex gap-[10px] w-[550px] px-[7px] items-center flex-wrap">
                  {selectedOptions.tags.map((tag, index) => {
                    return (
                      <li key={index} className="text-nowrap">
                        <div className="bg-gray_8 text-gray_0 pl-[10px] pr-[7px] py-[3px] gap-[5px] flex items-center rounded-lg">
                          <span>{tag}</span>
                          <button
                            className="w-[8px]"
                            onClick={() => removeTag(index)}
                          >
                            <img src={xButton} className="w-full" />
                          </button>
                        </div>
                      </li>
                    );
                  })}
                  <li>
                    <input
                      ref={tagRef}
                      type="search"
                      id="filter"
                      onKeyUp={(e) => {
                        {
                          addTags(e);
                        }
                      }}
                      onKeyDown={handleKeyDown}
                      className="pl-2 outline-none mobile:placeholder:text-[12px]"
                      autoComplete="off"
                      placeholder="# 태그를 입력하세요"
                    />
                  </li>
                </ul>

                <button className="absolute top-2.1 right-4 mobile:top-1 mobile:right-2 mobile:w-5">
                  <img src={filter} alt="필터" />
                </button>
              </div>
            </div>

            <button
              className="bg-gray_8 text-white text-sm desktop:px-6 tablet:px-6 desktop:py-3 tablet:py-2 mobile:px-2 mobile:py-2 desktop:rounded-[5px] mobile:rounded"
              type="button"
              onClick={() => nav(`/post/${param.category}/new`)}
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
        </div>
        <div className="m-auto text-center flex flex-col">
          {postDatas.map((postData) => {
            return <BoardList key={postData.id} data={postData} />;
          })}
        </div>
        <PageButton pageData={pageData} setPage={setSelectedOptionsPage} />
      </div>
      <Footer />
    </div>
  );
}

export default CategoryBoard;
