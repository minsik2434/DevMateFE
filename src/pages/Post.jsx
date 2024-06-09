import Header from "@/components/Header";
import Banner from "@/components/post/Banner";
import ContentEdit from "@/components/post/ContentEdit";
import useLoginInfoStore from "@/stores/loginInfo";
import apiFunction from "@/util/apiFunction";
import React from "react";
import { useEffect, useState, useLayoutEffect} from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Post() {
  const param = useParams();
  const [cookies] = useCookies();
  const nav = useNavigate();
  const {
    grantType,
    accessToken,
    setGrantType,
    setAccessToken,
    setRefreshToken,
  } = useLoginInfoStore();
  const [postValues, setPostValues] = useState({
    title: "",
    tags: [],
    content: "",
  });

  const bannerElementByCategory = {
    qna : {
      heading:"Q&A",
      exp:"동료들과 문제를 함께 해결해보아요",
      style:"bg-gradient-to-t from-[#98D8DB] to-[#6ECEDA]"
    },

    community : {
      heading:"커뮤니티",
      exp:"여러분의 이야기를 들려주세요",
      style:"bg-gradient-to-t from-[#F6A2CC] to-[#FCAAAA]"
    },

    job : {
      heading:"모집공고",
      exp:"좋은 회사 또는 직장의 정보를 공유해주세요",
      style:"bg-gradient-to-t from-[#FCE382] to-[#F38181]"
    },

    review : {
      heading:"취업 후기",
      exp:"꿈을 이룬 과정을 자라나는 새싹들에게 들려주세요",
      style:"bg-gradient-to-t from-[#FDF2F0] to-[#F8DAE2]"
    }
  }
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
      await apiFunction.postDataSetHeader(
        `${import.meta.env.VITE_API_URL}/post/${param.category}`,
        postValues,
        {
          headers: {
            Authorization: `${grantType} ${accessToken}`,
          },
        }
      );
      alert("게시글 등록 완료");
      nav(`/board/${param.category}`);
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


  const { heading, exp, style } = bannerElementByCategory[param.category]
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="flex justify-center py-[50px]">
        <div className="w-[60%] mobile:w-[95%] max-w-[750px]">
          <Banner
            heading={heading}
            exp={exp}
            style={style}
          />
          <ContentEdit
            onTags={onTags}
            setContent={setContent}
            setTitle={setTitle}
          />
          <div className="flex justify-end gap-[43px] mobile:gap-[18px] mt-[42px] mobile:mt-[20px]">
            <button
              onClick={handleRegister}
              className="px-[30px] mobile:px-[20px] py-[10px] mobile:py-[6px] bg-[#979797] text-white font-bold rounded-md"
            >
              등록
            </button>
            <button
              onClick={(e) => nav(`/board/${param.category}`)}
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

export default Post;
