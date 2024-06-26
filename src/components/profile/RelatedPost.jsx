import React from "react";
import commentImg from "@/assets/comment.png";
import goodImg from "@/assets/good.png";
import viewImg from "@/assets/view.png";
import formatTimeDifference from "@/util/get_time_current_diff";
import removeHTMLTags from "@/util/getTextexcludingHtmlTag";
import { useNavigate } from "react-router-dom";
function RelatedPost({ posts }) {
  const nav = useNavigate();
  return (
    <div className="">
      <ul className="flex flex-col">
        {posts.length === 0 && (
          <li className="flex justify-center text-[20px] py-[40px]">
            {" "}
            게시글이 없습니다{" "}
          </li>
        )}
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <button
                className="border-b border-gray_3 px-[20px] py-[10px] w-full hover:bg-gray_0"
                onClick={(e) => nav(`/${post.category}/${post.id}`)}
              >
                <div className="flex gap-[50px] items-center">
                  <h2 className="text-[20px] mobile:text-[15px] font-bold">
                    {post.title}
                  </h2>
                  <span className="font-bold text-[12px] mobile:text-[10px]">
                    {formatTimeDifference(post.postingDateTime)}
                  </span>
                </div>
                <div className="mt-[5px] text-[15px] mobile:text-[12px] text-start">
                  <p>{removeHTMLTags(post.content)}</p>
                </div>
                <div className="flex justify-between py-[9px]">
                  <div className="flex items-center">
                    <img src={post.writer.profileImgUrl} className="w-[35px]" />
                    <span className="text-[15px]">{post.writer.nickName}</span>
                  </div>
                  <ul className="flex gap-[7px] items-center text-[15px] mobile:text-[12px]">
                    <li className="flex">
                      <img src={viewImg} className="w-[18px] mobile:w-[15px]" />
                      <span>{post.viewCount}</span>
                    </li>
                    <li className="flex">
                      <img
                        src={commentImg}
                        className="w-[18px] mobile:w-[15px]"
                      />
                      <span>{post.commentCount}</span>
                    </li>
                    <li className="flex">
                      <img src={goodImg} className="w-[18px] mobile:w-[15px]" />
                      <span>{post.goodCount}</span>
                    </li>
                  </ul>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RelatedPost;
