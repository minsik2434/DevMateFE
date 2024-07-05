import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
  useRef,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getData } from "@/util/Crud";
import PageButton from "@/components/board/PageButton";
import MentoringList from "@/components/board/MentoringList";
import search from "@/assets/icon/search.svg";
import filter from "@/assets/icon/filter.svg";
// import pen from "@/assets/pen.png";
import xButton from "@/assets/xButton.png";
import BoardWrite from "@/components/BoardWrite";
import Spinner from "@/components/Spinner";

// Lazy loading을 위한 React.lazy 사용
const Footer = React.lazy(() => import("@/components/Footer"));
const Header = React.lazy(() => import("@/components/Header"));
const Banner = React.lazy(() => import("@/components/Banner"));

function Mentoring() {
  const [postDatas, setPostDatas] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const tagRef = useRef();

  const location = useLocation();
  const [selectedOptions, setSelectedOptions] = useState({
    sort: "recent",
    search: "",
    tags: [],
    page: 0,
  });
  const [pageData, setPageData] = useState({
    page: "",
    totalPage: "",
  });
  const nav = useNavigate();

  const handleOptionChange = useCallback((event) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      sort: event.target.id,
    }));
  }, []);

  const handleSearchChange = useCallback((event) => {
    setSearchInput(event.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      search: searchInput,
    }));
  }, [searchInput]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        onSubmit();
      }
    },
    [onSubmit]
  );

  const setSelectedOptionsPage = useCallback((value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      page: value,
    }));
  }, []);

  const removeTag = useCallback(
    (index) => {
      const updatedTags = selectedOptions.tags.filter((_, i) => i !== index);
      onTags(updatedTags);
    },
    [selectedOptions.tags]
  );

  const onTags = useCallback((value) => {
    setSelectedOptions((prevValues) => ({
      ...prevValues,
      tags: value,
    }));
  }, []);

  const addTags = useCallback(
    (e) => {
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
    },
    [selectedOptions.tags, onTags]
  );

  const handleRemoveLastTag = useCallback(
    (e) => {
      if (e.key === "Backspace" && !searchInput) {
        removeTag(selectedOptions.tags.length - 1);
      }
    },
    [selectedOptions.tags, removeTag, searchInput]
  );

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
        }/post/mentoring/list?${params.toString()}`;
        const responseData = (await getData(requestUrl)).data;

        setPostDatas(responseData.content);
        setPageData({
          page: responseData.pageable.pageNumber,
          totalPage: responseData.totalPages,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getPostData();
  }, [selectedOptions]);

  useEffect(() => {
    setSelectedOptions({
      sort: "recent",
      search: "",
      tags: [],
      page: 0,
    });
    localStorage.removeItem("like");
  }, []);

  return (
    <div className="bg-gray_0">
      <React.Suspense
        fallback={
          <div className="flex items-center justify-center pt-20">
            <Spinner />
          </div>
        }
      >
        <Header />
      </React.Suspense>
      <div className="mx-8 mobile:mx-5 mobile:mb-32">
        <div className="flex justify-center">
          <React.Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <Banner
              heading="멘토링"
              exp="선배 또는 동료들의 경험을 들어봐요"
              style="bg-banner_mento bg-center bg-cover"
            />
          </React.Suspense>
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
              onKeyDown={handleKeyDown} // 엔터 키 이벤트 핸들러 추가
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
                        <div className="bg-gray_8 text-white pl-[10px] pr-[5px] py-[3px] gap-[5px] flex rounded-[5px]">
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
                      onKeyUp={(e) => addTags(e)}
                      onKeyDown={handleRemoveLastTag}
                      className="pl-2 outline-none w-full mobile:placeholder:text-[10px]"
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

            <BoardWrite link="/board/mentoring/register" location={location.pathname} />
          </div>
        </div>
        {/* ---------------------------- */}
        <div className="m-auto desktop:max-w-[1240px] tablet:max-w-[768px] mobile:max-w-[320px] tablet:px-10 mobile:px-3 mt-8 mobile:mt-1">
          <div className="grid desktop:grid-cols-3 desktop:gap-20 tablet:grid-cols-2 tablet:gap-12 mobile:grid-cols-1 mobile:gap-10 mobile:pt-7">
            {postDatas.map((postData) => (
              <MentoringList key={postData.id} data={postData} />
            ))}
          </div>
        </div>
        <PageButton pageData={pageData} setPage={setSelectedOptionsPage} />
      </div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default Mentoring;
