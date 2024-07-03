import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import MiniBoardList from "./MiniBoardList";

function MiniBoard() {
  const param = useParams();
  const bannerElementByCategory = {
    qna: {
      heading: "Q&A",
      style: "bg-banner_qna bg-center bg-cover",
    },

    community: {
      heading: "커뮤니티",
      style: "bg-banner_commu bg-center bg-cover",
    },

    job: {
      heading: "모집공고",
      style: "bg-banner_job bg-center bg-cover",
    },

    review: {
      heading: "취업 후기",
      style: "bg-banner_review bg-center bg-cover",
    },
  };
  const { heading, style } = bannerElementByCategory[param.category];

  useEffect(() => {}, []);
  return (
    <div className="w-full mt-[45px] mobile:mt-[15px]">
      <div
        className={`border border-[#f1f3f5] shadow-[1px_0px_3px_-2px_rgba(0,0,0,0.3)] px-[20px] py-[15px] mobile:px-[16px] mobile:py-[14px rounded-t-lg ${style}`}
      >
        <h2 className="text-[16px] mobile:text-[14px]">{heading}</h2>
      </div>
      <MiniBoardList />
    </div>
  );
}

export default MiniBoard;
