import React from "react";
import Header from "@/components/Header";
import Banner from "@/components/post/Banner";
import { useState } from "react";
import StudyPostExp from "@/components/post/StudyPostExp";
import ContentEdit from "@/components/post/ContentEdit";
import { getData, patchData, postData } from "@/util/Crud";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import useLoginInfoStore from "@/stores/loginInfo";
import { useCookies } from "react-cookie";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
function StudyPost() {
  const [cookies] = useCookies();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const postId = searchParams.get("id");
  const { grantType, accessToken, setGrantType, setAccessToken } =
    useLoginInfoStore();
  const [postValues, setPostValues] = useState({
    title: "",
    tags: [],
    content: "",
    recruitCount: 1,
    proceed: "오프라인",
    deadLine: "",
  });
  
  const [memberInfo, setMemberInfo] = useState({
    name: "",
    nickName: "",
    imgUrl: "test.png",
    interests: [],
  });
  const nav = useNavigate();
  const setRecruitCount = (e) => {
    setPostValues((prev) => ({
      ...prev,
      recruitCount: e.target.value,
    }));
  };

  const setProceed = (e) => {
    setPostValues((prev) => ({
      ...prev,
      proceed: e.target.value,
    }));
  };

  const setDeadLine = (e) => {
    const date = new Date(e.target.value);
    const value = date.toISOString().slice(0, 19);
    setPostValues((prev) => ({
      ...prev,
      deadLine: value,
    }));
  };

  const setTitle = (e) => {
    setPostValues((prevValues) => ({
      ...prevValues,
      title: e.target.value,
    }));
  };

  const onTags = (value) => {
    setPostValues((prevValues) => ({
      ...prevValues,
      tags: value,
    }));
  };

  const setContent = (value) => {
    setPostValues((prevValues) => ({
      ...prevValues,
      content: value,
    }));
  };

  const handleRegister = async () => {
    try {
      await postData(`${import.meta.env.VITE_API_URL}/post/study`, postValues, {
        Authorization: `${grantType} ${accessToken}`,
      });
      alert("게시글 등록 완료");
      nav(`/board/study`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async () => {
    try {
      await patchData(
        `${import.meta.env.VITE_API_URL}/post/${postId}/study`,
        postValues,
        {
          Authorization: `${grantType} ${accessToken}`,
        }
      );
      alert("게시글 수정 완료");
      nav(`/board/study`);
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
  useLayoutEffect(() => {
    const getMember = async () => {
      try {
        const responseData = (
          await getData(`${import.meta.env.VITE_API_URL}/members`, {
            Authorization: `${grantType} ${accessToken}`,
          })
        ).data;
        setMemberInfo(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    if (grantType && accessToken) {
      getMember();
    }
  }, [accessToken, grantType]);

  useLayoutEffect(() => {
    const getPostData = async () => {
      try {
        const responsePostData = await (
          await getData(`${import.meta.env.VITE_API_URL}/post/${postId}`)
        ).data;
        setPostValues({
          title: responsePostData.title,
          tags: responsePostData.tags,
          content: responsePostData.content,
          recruitCount: responsePostData.recruitCount,
          proceed: responsePostData.proceed,
          deadLine: responsePostData.deadLine,
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (location.pathname === `/post/study/new`) {
      return;
    }
    getPostData();
  }, [location.pathname, memberInfo.nickName, nav, postId]);

  const handleSubmit =
    location.pathname === `/post/study/new` ? handleRegister : handleEdit;
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="flex justify-center py-[50px]">
        <div className="w-[60%] mobile:w-[95%] max-w-[740px]">
          <Banner
            heading="스터디"
            exp="함께 공부해 목표를 이뤄보세요"
            style="bg-gradient-to-t from-[#EDEDED] to-[#E6E6FA]"
          />
          <StudyPostExp
            postValues={postValues}
            setRecruitCount={setRecruitCount}
            setProceed={setProceed}
            setDeadLine={setDeadLine}
          />
          <ContentEdit
            onTags={onTags}
            setContent={setContent}
            setTitle={setTitle}
            postValues={postValues}
          />
          <div className="flex justify-end gap-[43px] mobile:gap-[18px] mt-[42px] mobile:mt-[20px]">
            <button
              onClick={handleSubmit}
              className="px-[30px] mobile:px-[20px] py-[10px] mobile:py-[6px] bg-[#979797] text-white font-bold rounded-md"
            >
              등록
            </button>
            <button
              onClick={() => nav(`/board/study`)}
              className="px-[30px] mobile:px-[20px] py-[10px] mobile:py-[6px] border border-[#979797] text-black font-bold rounded-md"
            >
              취소
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StudyPost;
