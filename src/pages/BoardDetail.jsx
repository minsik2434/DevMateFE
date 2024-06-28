import React from "react";
import Header from "@/components/Header";
import { useState, useEffect, useLayoutEffect } from "react";
import BoardBody from "@/components/detail/BoardBody";
import { useParams } from "react-router-dom";
import { getData, postData } from "@/util/Crud";
import RightBox from "@/components/detail/RightBox";
import MobileProfileBox from "@/components/detail/MobileProfileBox";
import Comment from "@/components/detail/Comment";
import { useCookies } from "react-cookie";
import useLoginInfoStore from "@/stores/loginInfo";
import useMemberStore from "@/stores/memberInfo";
import Footer from "@/components/Footer";
import useLike from "@/stores/useLike";

function BoardDetail() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [postingData, setPostingData] = useState({});
  const [cookies] = useCookies();
  const param = useParams();
  const { accessToken, grantType, setGrantType, setAccessToken } =
    useLoginInfoStore();
  const [writerData, setWriterData] = useState({
    nickName: "",
    imgUrl: "",
    interests: [],
  });
  const { setName, setNickName, setImgUrl } = useMemberStore();
  const { likeState, setLikeState } = useLike();
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
    if (cookies.grantType && cookies.accessToken) {
      getMemberData();
      return;
    } else {
      setName();
      setNickName();
      setImgUrl();
      return;
    }
  }, [cookies.accessToken, cookies.grantType, setImgUrl, setName, setNickName]);

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderHeight(header.offsetHeight);
  }, []);

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
        setLikeState(responsePostData);
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
      <header className="shadow">
        <Header />
      </header>
      <section className="flex justify-center">
        <div className="w-[80%] mobile:w-[95%] max-w-[1200px] flex mobile:flex-col mobile:items-center relative">
          <div className="w-[65%] mobile:w-full border-r pt-[46px] pb-[90px] mobile:px-[10px] mobile:pt-[26px] border-gray_3 mobile:border-none">
            <div className="flex justify-start px-[20px] mobile:px-0">
              <div className="w-full">
                <BoardBody data={postingData} writer={writerData} />
                <MobileProfileBox writerData={writerData} />
              </div>
            </div>
            <div className="px-[50px] mt-[40px] mobile:px-0 border-t border-gray_3">
              <Comment />
            </div>
          </div>
          <div className="w-[35%] mobile:w-full pt-[30px]">
            <RightBox headerHeight={headerHeight} writerData={writerData} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BoardDetail;
