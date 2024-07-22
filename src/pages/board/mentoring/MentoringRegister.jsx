import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import TagEdit from "@/components/post/TagEdit";
import useLoginInfoStore from "@/stores/loginInfo";
import useLike from "@/stores/useLike";
import { getData, patchData, postData } from "@/util/Crud";
import React from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import debounce from "lodash.debounce";
import { useCallback } from "react";
import { useMemo } from "react";

function MentoringRegister() {
  const [cookies] = useCookies();
  const location = useLocation();
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const postId = searchParams.get("id");
  const { grantType, accessToken, setGrantType, setAccessToken } =
    useLoginInfoStore();

  // const { likeState } = useLike();

  const [postValues, setPostValues] = useState({
    //멘토링명
    title: "",
    //멘토링소개
    content: "",
    // 태그
    tags: [],
    // 전화번호
    phoneNumber: "",
    // 이메일
    email: "",
    // 직무
    job: "",
    // 경력
    career: "",
    // url
    githubUrl: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    content: "",
    phoneNumber: "",
    email: "",
    job: "",
    career: "",
  });

  const validateInputs = () => {
    const newErrors = {};
    if (!postValues.title.trim()) newErrors.title = "멘토링명을 입력해주세요.";
    if (!postValues.content.trim())
      newErrors.content = "멘토링 소개를 작성해주세요.";
    if (!postValues.phoneNumber.trim())
      newErrors.phoneNumber = "연락처를 입력해주세요.";
    if (!postValues.email.trim()) newErrors.email = "이메일을 입력해주세요.";
    if (!postValues.job.trim()) newErrors.job = "직무를 입력해주세요.";
    if (!postValues.career.trim()) newErrors.career = "경력을 입력해주세요.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onTags = (value) => {
    setPostValues((prevValues) => ({
      ...prevValues,
      tags: value,
    }));
  };

  // const handleInputChange = (e) => {
  //   const { id, value } = e.target;
  //   setPostValues((prevValues) => ({
  //     ...prevValues,
  //     [id]: value,
  //   }));
  // };

  const handleRegister = async (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지

    // if (!postValues.content.trim()) {
    //   alert("멘토링 소개를 작성해주세요.");
    //   return;
    // }

    // if (!accessToken) {
    //   return;
    // }

    if (!validateInputs()) {
      alert("빈 내용을 작성해주세요.");
      return;
    }
    if (!accessToken) return;
    try {
      const response = await postData(
        `${import.meta.env.VITE_API_URL}/post/mentoring`,
        postValues,
        {
          Authorization: `${cookies.grantType} ${cookies.accessToken}`,
        }
      ).data;
      alert("게시글 등록 완료");
      nav(`/board/mentoring`);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    if (!accessToken) {
      return;
    }

    try {
      const response = await patchData(
        `${import.meta.env.VITE_API_URL}/post/${postId}/mentoring`,
        postValues,
        {
          Authorization: `${grantType} ${accessToken}`,
        }
      );

      alert("게시글 수정 완료");
      nav(`/board/mentoring`);
    } catch (error) {
      console.log(error);
    }
  };

  const [emailError, setEmailError] = useState("");

  function handleInputValidate(e) {
    const { id, value } = e.target;
    let newValue = value;

    if (id === "phoneNumber") {
      newValue = newValue.replace(/[^\d-]/g, "");
      const numbers = newValue.replace(/-/g, "");
      if (numbers.startsWith("02")) {
        if (numbers.length <= 2) newValue = numbers;
        else if (numbers.length <= 6)
          newValue = `${numbers.slice(0, 2)}-${numbers.slice(2)}`;
        else
          newValue = `${numbers.slice(0, 2)}-${numbers.slice(
            2,
            6
          )}-${numbers.slice(6, 10)}`;
      } else {
        if (numbers.length <= 3) newValue = numbers;
        else if (numbers.length <= 7)
          newValue = `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
        else
          newValue = `${numbers.slice(0, 3)}-${numbers.slice(
            3,
            7
          )}-${numbers.slice(7, 11)}`;
      }
    } else if (id === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        setEmailError("올바른 이메일 형식이 아닙니다.");
      } else {
        setEmailError("");
      }
    } else if (id === "career") {
      newValue = newValue.replace(/\D/g, "");
    }

    setPostValues((prevValues) => ({
      ...prevValues,
      [id]: newValue,
    }));
  }

  useLayoutEffect(() => {
    const savedTokenInfo = () => {
      setGrantType(cookies.grantType);
      setAccessToken(cookies.accessToken);
    };
    savedTokenInfo();
  }, [cookies.accessToken, cookies.grantType, setAccessToken, setGrantType]);

  useLayoutEffect(() => {
    const getPostData = async () => {
      try {
        const responsePostData = await (
          await getData(`${import.meta.env.VITE_API_URL}/post/${postId}`)
        ).data;

        setPostValues({
          //멘토링명
          title: responsePostData.title,
          //멘토링소개
          content: responsePostData.content,
          // 태그
          tags: responsePostData.tags,
          // 전화번호
          phoneNumber: responsePostData.phoneNumber,
          // 이메일
          email: responsePostData.email,
          // 직무
          job: responsePostData.job,
          // 경력
          career: responsePostData.career,
          // url
          githubUrl: responsePostData.githubUrl,
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (location.pathname === `/board/mentoring/register`) {
      return;
    }
    getPostData();
  }, [location.pathname, nav, postId]);

  const handleSubmit =
    location.pathname === `/board/mentoring/register`
      ? handleRegister
      : handleEdit;

  return (
    <div>
      <Header />
      <div className="desktop:w-[1240px] tablet:w-[768px] mobile:w-[320px] mx-auto desktop:px-5 tablet:px-5 mobile:px-3">
        <div>
          <Banner
            heading="멘토링"
            exp="선배 또는 동료들의 경험을 들어봐요"
            style="bg-banner_mento bg-center bg-cover"

            // className="bg-gradient-to-t from-[#E6E6FA] to-[#EDEDED]"
          />
        </div>

        <form
          className="flex flex-col desktop:gap-20 tablet:gap-16 mobile:gap-10 tablet:mt-12 mobile:mt-8"
          // onSubmit={handleRegister}
        >
          <div className="desktop:px-5 desktop:py-8 tablet:px-5 tablet:py-8 mobile:px-4 mobile:py-5 flex flex-col gap-7">
            <span className="text-lg mobile:text-sm font-semibold text-gray_6">
              멘토 정보
            </span>
            <div className="flex items-center mobile:text-xs">
              <label
                htmlFor="phoneNumber"
                className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]"
              >
                연락처
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="border border-gray_6 pl-2 py-2 w-[350px] mobile:w-[200px] focus:outline-[#00C471] rounded-md"
                placeholder="000-0000-0000"
                value={postValues.phoneNumber}
                // onChange={handleInputChange}
                onChange={handleInputValidate}
                // onChange={handleInputValidate}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
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
                  className="border border-gray_6 pl-2 py-2 w-[350px] mobile:w-[200px] focus:outline-[#00C471] rounded-md"
                  placeholder="자주 사용하는 이메일을 입력해주세요"
                  value={postValues.email}
                  // onChange={handleInputChange}
                  onChange={handleInputValidate}
                  required
                />
              </div>
              {emailError && (
                <p className="text-red-500 text-sm mobile:text-xs mt-1 desktop:ml-[125px] tablet:ml-[102px] mobile:ml-[70px]">
                  {emailError}
                </p>
              )}
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
                className="border border-gray_6 pl-2 py-2 w-[350px] mobile:w-[200px] focus:outline-[#00C471] rounded-md"
                placeholder="멘토링 제목을 입력해주세요"
                value={postValues.title}
                // onChange={handleInputChange}
                onChange={handleInputValidate}
                required
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
                className="border border-gray_6 pl-2 py-2 w-[350px] mobile:w-[200px] focus:outline-[#00C471] rounded-md"
                placeholder="ex ) FE 개발자"
                value={postValues.job}
                // onChange={handleInputChange}
                onChange={handleInputValidate}
                required
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
                className="border border-gray_6 pl-2 py-2 w-[350px] mobile:w-[200px] focus:outline-[#00C471] rounded-md"
                placeholder="숫자만 입력해주세요"
                value={postValues.career}
                // onChange={handleInputChange}
                // onChange={handleInputVal}
                onChange={handleInputValidate}
                required
              />
            </div>
            <div className="flex items-center mobile:text-xs">
              <label
                htmlFor="githubUrl"
                className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]"
              >
                링크
              </label>
              <input
                type="text"
                id="githubUrl"
                className="border border-gray_6 pl-2 py-2 w-[350px] mobile:w-[200px] focus:outline-[#00C471] rounded-md "
                placeholder="github or 포트폴리오"
                value={postValues.githubUrl}
                // onChange={handleInputChange}
                onChange={handleInputValidate}
              />
            </div>

            {/* <TagEdit onTags={onTags} tags={postValues.tags} /> */}
            <div className="flex items-center mobile:text-xs">
              <span className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]">
                태그
              </span>
              <TagEdit onTags={onTags} tags={postValues.tags} style="pl-3" />
            </div>
          </div>
          <div className="desktop:px-5 desktop:py-8 tablet:px-5 tablet:py-8 mobile:px-4 mobile:py-5 flex flex-col gap-5">
            <span className="text-lg mobile:text-sm font-semibold text-gray_6">
              멘토링 소개
            </span>

            {/* <p className="desktop:h-[450px] desktop:mt-5 tablet:h-[300px] mobile:h-[200px] mobile:text-xs">
              탕탕 후루후루 탕탕 후루루루루
            </p> */}
            <textarea
              name="content"
              id="content"
              className="border desktop:h-[400px] desktop:mt-5 tablet:h-[300px] mobile:h-[200px] p-5 mobile:text-xs focus:outline-[#00C471] rounded-md"
              placeholder="멘토링을 소개할 글을 작성해주세요"
              value={postValues.content}
              // onChange={handleInputChange}
              onChange={handleInputValidate}
            ></textarea>
          </div>

          <div className="flex justify-end mr-5 desktop:mb-56 tablet:mb-52 mobile:mb-36 gap-[43px] mobile:gap-[18px] mobile:text-xs">
            <button
              className="px-[30px] mobile:px-[20px] py-[10px] mobile:py-[6px] bg-gray_8 text-gray_0 hover:bg-gray_9 font-bold rounded-md"
              onClick={handleSubmit}
            >
              등록
            </button>
            <button
              className="px-[30px] mobile:px-[20px] py-[10px] mobile:py-[6px] bg-gray_1 text-gray_8 hover:bg-gray_2 font-bold rounded-md"
              type="button"
              onClick={() => nav(`/board/mentoring`)}
            >
              취소
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default MentoringRegister;
