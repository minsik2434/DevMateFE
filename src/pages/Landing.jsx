import React, { useState, useEffect, useLayoutEffect, Suspense } from "react";
import { getData } from "@/util/Crud";
import useIndex from "@/stores/navIndex";

import banner from "@/public/banner/banner_main.jpg";
// import { useMediaQuery } from "react-responsive";

const Header = React.lazy(() => import("@/components/Header"));
const Footer = React.lazy(() => import("@/components/Footer"));
const LandingBoard = React.lazy(() =>
  import("@/components/landing/LandingBoard")
);

// Import different sizes of banner images
// import bannerDesktop from "@/public/banner/banner_main_desktop.jpg";
// import bannerTablet from "@/public/banner/banner_main_tablet.jpg";
// import bannerMobile from "@/public/banner/banner_main_mobile.jpg";

// Memoized LandingBoard component
const MemoizedLandingBoard = React.memo(LandingBoard);

function Landing() {
  const [qnaPosts, setQnaPosts] = useState([]);
  const [communityPosts, setCommunityPosts] = useState([]);
  const [reviewPosts, setReviewPosts] = useState([]);
  const [mentoringPosts, setMentoringPosts] = useState([]);
  const [studyPosts, setStudyPosts] = useState([]);
  const [jobPosts, setJobPosts] = useState([]);

  const { navIndex, setNavIndex } = useIndex();

  useLayoutEffect(() => {
    setNavIndex("");
    const landingData = async () => {
      try {
        const urls = [
          "/post/qna/list?sort=view",
          "/post/community/list?sort=view",
          "/post/review/list?sort=view",
          "/post/mento/list?sort=view",
          "/post/study/list?sort=view",
          "/post/job/list?sort=view",
        ].map((endpoint) => `${import.meta.env.VITE_API_URL}${endpoint}`);

        const responses = await Promise.all(urls.map((url) => getData(url)));
        const [
          qnaData,
          communityData,
          reviewData,
          mentoringData,
          studyData,
          jobData,
        ] = responses.map((response) => response.data.content);

        setQnaPosts(qnaData);
        setCommunityPosts(communityData);
        setReviewPosts(reviewData);
        setMentoringPosts(mentoringData);
        setStudyPosts(studyData);
        setJobPosts(jobData);
      } catch (error) {
        console.log(error);
      }
    };

    landingData();
  }, []);

  // Determine screen size
  // const isDesktop = useMediaQuery({ minWidth: 1224 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1224 });
  // const isMobile = useMediaQuery({ maxWidth: 767 });

  // // Select banner image based on screen size
  // const bannerImage = isDesktop
  //   ? bannerDesktop
  //   : isTablet
  //   ? bannerTablet
  //   : bannerMobile;

  return (
    <div className="w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <div>
        <img
          src={banner}
          alt="배너 이미지"
          className="w-full desktop:mx-auto desktop:my-20 tablet:my-16 desktop:h-[500px] tablet:h-52 mobile:hidden tablet:block"
        />
      </div>

      <div className="desktop:max-w-[1240px] tablet:max-w-[768px] mobile:max-w-[320px] m-auto mb-[200px]">
        <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 desktop:gap-x-8 desktop:gap-y-56 tablet:gap-x-5 tablet:gap-y-36 mobile:gap-y-24 desktop:mt-32 tablet:mt-28 mobile:mt-20 desktop:pt-20 tablet:pt-16 mobile:pt-12 desktop:px-5 tablet:px-5 mobile:px-3">
          <div className="desktop:order-1 tablet:order-1 relative">
            <MemoizedLandingBoard
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

          <MemoizedLandingBoard
            heading="커뮤니티"
            type="community"
            style="bg-banner_commu bg-center bg-cover"
            order="desktop:order-2 tablet:order-2"
            data={communityPosts}
          />
          <MemoizedLandingBoard
            heading="취업후기"
            type="review"
            style="bg-banner_review bg-center bg-cover"
            order="desktop:order-3 tablet:order-3"
            data={reviewPosts}
          />

          <div className="relative desktop:order-4 tablet:order-5">
            <MemoizedLandingBoard
              heading="멘토링"
              type="mentoring"
              style="bg-banner_mento bg-center bg-cover"
              data={mentoringPosts}
            />
            <p className="absolute desktop:text-3xl tablet:text-2xl mobile:text-xl font-medium -top-16 left-1">
              사람을 찾아요
            </p>
          </div>

          <MemoizedLandingBoard
            heading="스터디"
            type="study"
            style="bg-banner_study bg-center bg-cover"
            order="desktop:order-5 tablet:order-6"
            data={studyPosts}
          />
          <MemoizedLandingBoard
            heading="모집공고"
            type="job"
            style="bg-banner_job bg-center bg-cover"
            order="desktop:order-6 tablet:order-4"
            data={jobPosts}
          />
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Landing;
