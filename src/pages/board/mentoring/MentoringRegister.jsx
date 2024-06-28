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

function MentoringRegister() {
  const [cookies] = useCookies();
  const location = useLocation();
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const postId = searchParams.get("id");
  const { grantType, accessToken, setGrantType, setAccessToken } =
    useLoginInfoStore();

  const { likeState } = useLike();

  const [postValues, setPostValues] = useState({
    //멘토링명
    title: "",
    //멘토링소개
    content: "",
    // 태그
    tags: ["java"],
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

  const onTags = (value) => {
    setPostValues((prevValues) => ({
      ...prevValues,
      tags: value,
    }));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPostValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
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
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();

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

  useLayoutEffect(() => {
    const savedTokenInfo = () => {
      setGrantType(cookies.grantType);
      setAccessToken(cookies.accessToken);
    };
    savedTokenInfo();
  }, [cookies.accessToken, cookies.grantType, setAccessToken, setGrantType]);

  // useLayoutEffect(() => {
  //   const getMember = async () => {
  //     try {
  //       const responseData = (
  //         await getData(`${import.meta.env.VITE_API_URL}/members`, {
  //           Authorization: `${grantType} ${accessToken}`,
  //         })
  //       ).data;
  //       setMemberInfo(responseData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   if (grantType && accessToken) {
  //     getMember();
  //   }
  // }, [accessToken, grantType]);

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
          // tags: [],
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
            style="bg-[#C9DECF]"

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
                className="border border-gray_6 pl-2 p-1 w-[350px] mobile:w-[200px] focus:outline-[#00C471]"
                placeholder="000-0000-0000"
                value={postValues.phoneNumber}
                onChange={handleInputChange}
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
                value={postValues.email}
                onChange={handleInputChange}
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
                value={postValues.title}
                onChange={handleInputChange}
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
                value={postValues.job}
                onChange={handleInputChange}
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
                value={postValues.career}
                onChange={handleInputChange}
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
                className="border border-gray_6 pl-2 p-1 w-[350px] mobile:w-[200px] focus:outline-[#00C471]"
                placeholder="github or 포트폴리오"
                value={postValues.githubUrl}
                onChange={handleInputChange}
              />
            </div>
            {/* <div className="flex items-center mobile:text-xs">
              <span className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]">
                태그
              </span>
              <TagEdit
                onTags={onTags}
                tags={postValues.tags}
                style={{
                  border: "1px solid #ccc",
                  // padding: "5px",
                  display: "flex",

                  alignItems: "center",
                  width: "100%",
                }}
              />
            </div> */}
          </div>
          <div className="desktop:px-5 desktop:py-8 tablet:px-5 tablet:py-8 mobile:px-4 mobile:py-5 flex flex-col gap-5">
            <span className="text-lg mobile:text-sm font-semibold text-gray_6">
              멘토링소개
            </span>

            {/* <p className="desktop:h-[450px] desktop:mt-5 tablet:h-[300px] mobile:h-[200px] mobile:text-xs">
              탕탕 후루후루 탕탕 후루루루루
            </p> */}
            <textarea
              name="content"
              id="content"
              className="border desktop:h-[400px] desktop:mt-5 tablet:h-[300px] mobile:h-[200px] p-5 mobile:text-xs"
              placeholder="멘토링을 소개할 글을 작성해주세요"
              value={postValues.content}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="desktop:px-5 desktop:py-8 tablet:px-5 tablet:py-8 mobile:px-4 mobile:py-5 flex justify-end gap-5 font-semibold mobile:text-xs ">
            <button
              className="bg-brand_blue w-[120px] py-2 mobile:w-[60px] mobile:py-1 rounded"
              onClick={handleSubmit}
            >
              등록
            </button>
            <button
              className="bg-brand_red w-[120px] py-2 mobile:w-[60px] mobile:py-1 rounded"
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
