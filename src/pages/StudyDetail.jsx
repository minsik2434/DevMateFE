import Header from "@/components/Header";
import React from "react";
import { useParams } from "react-router-dom";
import { getData, postData } from "@/util/Crud";
import { useState } from "react";
import { useLayoutEffect } from "react";
import StudyBody from "@/components/detail/StudyBody";
import useMemberStore from "@/stores/memberInfo";
import { useEffect } from "react";
import useLoginInfoStore from "@/stores/loginInfo";
import { useCookies } from "react-cookie";
import Comment from "@/components/detail/Comment";
import Banner from "@/components/board/Banner";
function StudyDetail() {
  const param = useParams();
  const [postingData, setPostingData] = useState({});
  const { setName, setNickName, setImgUrl } = useMemberStore();
  const { accessToken, grantType, setGrantType, setAccessToken } =
    useLoginInfoStore();
  const [cookies] = useCookies();
  const [writerData, setWriterData] = useState({
    nickName: "",
    imgUrl: "",
    interests: [],
  });

  useEffect(() => {
    const getMemberData = async () => {
      try {
        const responseData = (
          await getData(`${import.meta.env.VITE_API_URL}/members`, {
            Authorization: `${cookies.grantType} ${cookies.accessToken}`,
          })
        ).data;
        setName(responseData.name);
        setNickName(responseData.nickName);
        setImgUrl(responseData.imgUrl);
      } catch (error) {
        console.log(error);
      }
    };
    if (cookies.accessToken && cookies.grantType) {
      getMemberData();
      return;
    } else {
      setName();
      setNickName();
      setImgUrl();
    }
  }, [cookies.accessToken, cookies.grantType, setImgUrl, setName, setNickName]);

  useEffect(() => {
    setGrantType(cookies.grantType);
    setAccessToken(cookies.accessToken);
  }, [cookies.accessToken, cookies.grantType, setAccessToken, setGrantType]);

  useLayoutEffect(() => {
    const getPostingData = async () => {
      try {
        const responsePostData = await (
          await getData(`${import.meta.env.VITE_API_URL}/post/${param.id}`)
        ).data;
        setPostingData(responsePostData);
        const memberResponseData = await (
          await getData(
            `${import.meta.env.VITE_API_URL}/members/${
              responsePostData.writer.nickName
            }`
          )
        ).data;
        setWriterData(memberResponseData);
      } catch (error) {
        console.log(error);
      }
    };

    const addView = async () => {
      try {
        await postData(
          `${import.meta.env.VITE_API_URL}/post/${param.id}/addview`
        );
      } catch (error) {
        console.log(error);
      }
    };
    getPostingData();
    addView();
  }, [param.id]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="flex justify-center py-[50px] mobile:py-[25px]">
        <div className="w-[60%] mobile:w-[95%] max-w-[740px]">
          <Banner
            heading="스터디"
            exp="원하는 사람들과 함께 공부해봐요"
            style="bg-gradient-to-t from-[#E6E6FA] to-[#EDEDED]"
          />
          <div className="px-[18px] mobile:px-[5px]">
            <StudyBody data={postingData} writer={writerData} />
            <div className="mt-[30px] w-full">
              <Comment />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StudyDetail;
