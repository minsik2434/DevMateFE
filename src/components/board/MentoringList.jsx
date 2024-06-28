import React from "react";
import like from "@/assets/icon/like.svg";
import view from "@/assets/icon/view.svg";
import comment from "@/assets/icon/comment.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function MentoringList({ data }) {
  const nav = useNavigate();
  const onClick = () => {
    nav(`/board/mentoring/${data.id}`);
  };

  return (
    <motion.div
      className="bg-white flex flex-col items-start border border-gray_3 shadow-lg hover:shadow-xl rounded-xl desktop:p-8 tablet:p-6  mobile:p-6 gap-3 cursor-pointer"
      whileHover={{ y: -5 }} // 마우스 호버 시 y축으로 -10 이동
      transition={{
        type: "tween",
        stiffness: 300,
        duration: 0.2,
      }} // transition 설정
      onClick={onClick}
    >
      <div className="flex items-center gap-2 font-semibold ">
        <img
          src={data.writer.profileImgUrl}
          alt=""
          className="desktop:w-8 tablet:w-6 mobile:w-6 rounded-full"
        />
        <span>{data.writer.nickName}</span>
      </div>
      <div className="flex flex-col gap-3 ">
        <p className="desktop:text-lg font-semibold desktop:my-5">
          {data.title}
        </p>
        <span>직무 : {data.job}</span>
        <span>경력 : {data.career}년</span>
      </div>
      <div className="w-full">
        <ul className="flex justify-between gap-3 border-b-2 py-7 px-2">
          <li className="flex gap-2 items-center">
            <img
              src={view}
              alt="조회 수"
              className="mobile:w-3 tablet:w-4 desktop:w-5"
            />
            <span className="mobile:text-sm">{data.viewCount}</span>
          </li>
          <li className="flex gap-2 items-center">
            <img
              src={comment}
              alt="댓글 수"
              className="mobile:w-3 tablet:w-4 desktop:w-5"
            />
            <span className="mobile:text-sm">{data.commentCount}</span>
          </li>

          <li className="flex gap-2 items-center">
            <img
              src={like}
              alt="추천 수"
              className="mobile:w-3 tablet:w-4 desktop:w-5"
            />
            <span className="mobile:text-sm">{data.goodCount}</span>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex text-sm text-[#253CCE] font-bold">
          {/* <li className="bg-brand_blue px-3 py-2 rounded-full">프론트엔드</li> */}
          {data.tags.map((tag, index) => {
            return (
              <li
                key={index}
                className="bg-gray_8 text-white px-3 py-2 rounded-lg"
              >
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}

export default MentoringList;
