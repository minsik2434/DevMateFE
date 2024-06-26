import React from "react";
import recommend from "@/assets/icon/recommend.svg";
import view from "@/assets/icon/view.svg";
import comment from "@/assets/icon/comment.svg";
import formatTimeDifference from "@/util/get_time_current_diff";
import removeHTMLTags from "@/util/getTextexcludingHtmlTag";
import { useNavigate } from "react-router-dom";

function BoardList({ data }) {
  const nav = useNavigate();

  const onClick = () => {
    nav(`/${data.category}/${data.id}`);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="desktop:max-w-[1240px] px-[20px] py-[10px] tablet:max-w-[768px] hover:bg-gray_0 border-b border-gray_3 mobile:max-w-[320px] w-full mx-auto"
    >
      <div className="mobile:mb-5">
        <div className="flex flex-col p-2">
          <div className="flex items-end desktop:gap-16 tablet:gap-12 mobile:gap-8 font-medium">
            <p className="text-xl mobile:text-base">{data.title}</p>
            <span className="text-sm  mobile:text-[8px] font-semibold mb-1">
              {formatTimeDifference(data.postingDateTime)}
            </span>
          </div>
          <div className="mt-[5px] text-[15px] mobile:text-[12px] text-start">
            <p>{removeHTMLTags(data.content)}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mobile:pb-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <img
                src={data.writer.profileImgUrl}
                alt="사용자 이미지"
                className="rounded-full desktop:w-6 tablet:w-5 mobile:w-4"
              />
              <span className="w-[50px] text-lg mobile:text-[10px] mobile:w-9 mobile:font-medium">
                {data.writer.nickName}
              </span>
            </div>
            <div className="desktop:w-[500px]">
              <ul className="flex flex-wrap justify-start text-sm desktop:gap-3 tablet:gap-2 mobile:gap-1">
                {data.tags.map((tag, index) => {
                  return (
                    <li
                      key={index}
                      className="px-2 rounded-xl text-sm desktop:py-1 tablet:py-1 mobile:py-0.5 mobile:rounded-3xl mobile:text-[10px] bg-gray_2"
                    >
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <ul className="flex gap-3 desktop:text-sm mobile:text-[10px]">
              <li className="flex gap-1 items-center">
                <img src={comment} alt="댓글 수" className="mobile:w-3" />
                <span>{data.commentCount}</span>
              </li>
              <li className="flex gap-1 items-center">
                <img src={view} alt="조회 수" className="mobile:w-3" />
                <span>{data.viewCount}</span>
              </li>
              <li className="flex gap-1 items-center">
                <img src={recommend} alt="추천 수" className="mobile:w-3" />
                <span>{data.goodCount}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </button>
  );
}

export default BoardList;
