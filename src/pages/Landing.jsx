import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

import LandingBoard from "@/components/landing/LandingBoard";
import { useState } from "react";
import { useEffect } from "react";
import { getData } from "@/util/Crud";
import { useLayoutEffect } from "react";
import useIndex from "@/stores/navIndex";

// import banner1 from "/banner/banner_main.jpg";
import banner1 from "@/public/banner/banner_main.jpg";

function Landing() {
  const [qnaPosts, setQnaPosts] = useState([]);
  const [communityPosts, setCommunityPosts] = useState([]);
  const [reviewPosts, setReviewPosts] = useState([]);
  const [mentoringPosts, setMentoringPosts] = useState([]);
  const [studyPosts, setStudyPosts] = useState([]);
  const [jopPosts, setJobPosts] = useState([]);

  useLayoutEffect(() => {
    const getQnaPosts = async () => {
      try {
        const requestUrl = `${
          import.meta.env.VITE_API_URL
        }/post/qna/list?sort=view`;
        const responseData = (await getData(requestUrl)).data;
        setQnaPosts(responseData.content);
      } catch (error) {
        console.log(error);
      }
    };
    const getCommunityPosts = async () => {
      try {
        const requestUrl = `${
          import.meta.env.VITE_API_URL
        }/post/community/list?sort=view`;
        const responseData = (await getData(requestUrl)).data;
        setCommunityPosts(responseData.content);
      } catch (error) {
        console.log(error);
      }
    };
    const getReviewPosts = async () => {
      try {
        const requestUrl = `${
          import.meta.env.VITE_API_URL
        }/post/review/list?sort=view`;
        const responseData = (await getData(requestUrl)).data;
        setReviewPosts(responseData.content);
      } catch (error) {
        console.log(error);
      }
    };
    const getMentoringPosts = async () => {
      try {
        const requestUrl = `${
          import.meta.env.VITE_API_URL
        }/post/mento/list?sort=view`;
        const responseData = (await getData(requestUrl)).data;
        setMentoringPosts(responseData.content);
      } catch (error) {
        console.log(error);
      }
    };
    const getStudyPosts = async () => {
      try {
        const requestUrl = `${
          import.meta.env.VITE_API_URL
        }/post/study/list?sort=view`;
        const responseData = (await getData(requestUrl)).data;
        setStudyPosts(responseData.content);
      } catch (error) {
        console.log(error);
      }
    };
    const getJobPosts = async () => {
      try {
        const requestUrl = `${
          import.meta.env.VITE_API_URL
        }/post/job/list?sort=view`;
        const responseData = (await getData(requestUrl)).data;
        setJobPosts(responseData.content);
      } catch (error) {
        console.log(error);
      }
    };
    getQnaPosts();
    getCommunityPosts();
    getReviewPosts();
    getMentoringPosts();
    getStudyPosts();
    getJobPosts();
  }, []);

  const { navIndex, setNavIndex } = useIndex();

  useEffect(() => {
    setNavIndex("");
  }, []);
  return (
    <div className="w-full">
      <Header />
      <div>
        <img
          src={banner1}
          alt="배너 이미지"
          className="w-full desktop:mx-auto desktop:my-20 tablet:my-16 desktop:h-[500px] tablet:h-52 mobile:hidden tablet:block"
        />
      </div>

      <div className="desktop:max-w-[1240px] tablet:max-w-[768px] mobile:max-w-[320px] m-auto mb-[200px]">
        <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 desktop:gap-x-8 desktop:gap-y-56 tablet:gap-x-5 tablet:gap-y-36 mobile:gap-y-24 desktop:mt-32 tablet:mt-28 mobile:mt-20 desktop:pt-20 tablet:pt-16 mobile:pt-12 desktop:px-5 tablet:px-5 mobile:px-3">
          <div className="desktop:order-1 tablet:order-1 relative">
            <LandingBoard
              heading="QnA"
              type="qna"
              style="bg-banner_qna bg-center bg-cover"
              order="desktop:order-1 tablet:order-1"
              data={qnaPosts}
            />
            <p className="absolute desktop:text-3xl tablet:text-2xl mobile:text-xl font-medium -top-16 left-1">
              소통해요
            </p>
          </div>

          <LandingBoard
            heading="커뮤니티"
            type="community"
            style="bg-banner_commu bg-center bg-cover"
            order="desktop:order-2 tablet:order-2"
            data={communityPosts}
          />
          <LandingBoard
            heading="취업후기"
            type="review"
            style="bg-banner_review bg-center bg-cover"
            order="desktop:order-3 tablet:order-3"
            data={reviewPosts}
          />

          <div className="relative desktop:order-4 tablet:order-5">
            <LandingBoard
              heading="멘토링"
              type="mentoring"
              style="bg-banner_mento bg-center bg-cover"
              // order="desktop:order-4 tablet:order-5"
              data={mentoringPosts}
            />
            <p className="absolute desktop:text-3xl tablet:text-2xl mobile:text-xl font-medium -top-16 left-1">
              사람을 찾아요
            </p>
          </div>

          <LandingBoard
            heading="스터디"
            type="study"
            style="bg-banner_study bg-center bg-cover"
            order="desktop:order-5 tablet:order-6"
            data={studyPosts}
          />
          <LandingBoard
            heading="모집공고"
            type="job"
            style="bg-banner_job bg-center bg-cover"
            order="desktop:order-6 tablet:order-4"
            data={jopPosts}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Landing;
