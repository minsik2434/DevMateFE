// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import Banner from "@/components/Banner";
// import Comment from "@/components/detail/Comment";
// import MentoringBody from "@/components/detail/MentoringBody";
// import useLoginInfoStore from "@/stores/loginInfo";
// import useMemberStore from "@/stores/memberInfo";
// import useLike from "@/stores/useLike";
// import { getData, postData } from "@/util/Crud";
// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useLayoutEffect } from "react";
// import { useCookies } from "react-cookie";
// import { useParams } from "react-router-dom";

// function MentoringDetail() {
//   const param = useParams();
//   const [postingData, setPostingData] = useState({});
//   const { setName, setNickName, setImgUrl } = useMemberStore();
//   const { accessToken, grantType, setGrantType, setAccessToken } =
//     useLoginInfoStore();
//   const [cookies] = useCookies();
//   const [writerData, setWriterData] = useState({
//     nickName: "",
//     imgUrl: "",
//     interests: [],
//   });

//   const { likeState, setLikeState } = useLike();

//   useEffect(() => {
//     const getMemberData = async () => {
//       try {
//         const responseData = (
//           await getData(`${import.meta.env.VITE_API_URL}/members`, {
//             Authorization: `${grantType} ${accessToken}`,
//           })
//         ).data;

//         // console.log(responseData);
//         setName(responseData.name);
//         setNickName(responseData.nickName);
//         setImgUrl(responseData.imgUrl);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     if (accessToken && grantType) {
//       getMemberData();
//     }
//   }, [accessToken, grantType, setImgUrl, setName, setNickName]);

//   useEffect(() => {
//     setGrantType(cookies.grantType);
//     setAccessToken(cookies.accessToken);
//   }, [cookies.accessToken, cookies.grantType, setAccessToken, setGrantType]);

//   useLayoutEffect(() => {
//     const getPostingData = async () => {
//       try {
//         const responsePostData = await (
//           await getData(`${import.meta.env.VITE_API_URL}/post/${param.id}`)
//         ).data;
//         setPostingData(responsePostData);
//         setLikeState(responsePostData);
//         const memberResponseData = await (
//           await getData(
//             `${import.meta.env.VITE_API_URL}/members/${
//               responsePostData.writer.nickName
//             }`
//           )
//         ).data;
//         setWriterData(memberResponseData);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     const addView = async () => {
//       try {
//         await postData(
//           `${import.meta.env.VITE_API_URL}/post/${param.id}/addview`
//         );
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getPostingData();
//     addView();
//   }, [param.id]);

//   return (
//     <div>
//       <Header />
//       <div className="desktop:w-[1240px] tablet:w-[768px] mobile:w-[320px] mx-auto desktop:px-5 tablet:px-5 mobile:px-3">
//         <div>
//           <Banner
//             heading="멘토링"
//             exp="선배 또는 동료들의 경험을 들어봐요"
//             style="bg-banner_mento bg-center bg-cover"
//           />
//         </div>

//         <MentoringBody data={postingData} writer={writerData} />

//         <div className="mt-28">
//           <Comment />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default MentoringDetail;

// -------------------------------------------------------------

import React, { Suspense } from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import useLoginInfoStore from "@/stores/loginInfo";
import useMemberStore from "@/stores/memberInfo";
import useLike from "@/stores/useLike";
import { getData, postData } from "@/util/Crud";

// 동적 임포트를 이용한 코드 스플리팅
const AsyncFooter = React.lazy(() => import("@/components/Footer"));
const AsyncHeader = React.lazy(() => import("@/components/Header"));
const AsyncBanner = React.lazy(() => import("@/components/Banner"));
const AsyncComment = React.lazy(() => import("@/components/detail/Comment"));
const AsyncMentoringBody = React.lazy(() =>
  import("@/components/detail/MentoringBody")
);

function MentoringDetail() {
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

  const { likeState, setLikeState } = useLike();

  useEffect(() => {
    const getMemberData = async () => {
      try {
        const responseData = (
          await getData(`${import.meta.env.VITE_API_URL}/members`, {
            Authorization: `${grantType} ${accessToken}`,
          })
        ).data;

        setName(responseData.name);
        setNickName(responseData.nickName);
        setImgUrl(responseData.imgUrl);
      } catch (error) {
        console.log(error);
      }
    };
    if (accessToken && grantType) {
      getMemberData();
    }
  }, [accessToken, grantType, setImgUrl, setName, setNickName]);

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
      <Suspense fallback={<div>Loading...</div>}>
        <AsyncHeader />
        <div className="desktop:w-[1240px] tablet:w-[768px] mobile:w-[320px] mx-auto desktop:px-5 tablet:px-5 mobile:px-3">
          <div>
            <AsyncBanner
              heading="멘토링"
              exp="선배 또는 동료들의 경험을 들어봐요"
              style="bg-banner_mento bg-center bg-cover"
            />
          </div>

          <AsyncMentoringBody data={postingData} writer={writerData} />

          <div className="mt-28">
            <AsyncComment />
          </div>
        </div>
        <AsyncFooter />
      </Suspense>
    </div>
  );
}

export default MentoringDetail;
