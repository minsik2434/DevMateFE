import React from "react";
import Viewerbox from "@/components/Viewerbox";
import useFormattedDateTime from "@/hooks/useFormattedDateTime";
import useMemberStore from "@/stores/memberInfo";
import useLoginInfoStore from "@/stores/loginInfo";
import { deleteData } from "@/util/Crud";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import LikeList from "../LikeList";

function BoardBody({ data, writer }) {
  const { accessToken, grantType } = useLoginInfoStore();
  const postingDate = useFormattedDateTime(data.postingDateTime);
  const { nickName } = useMemberStore();
  const param = useParams();
  const nav = useNavigate();
  const onDelete = async () => {
    if (confirm("정말 게시글을 삭제하시겠습니까?") == true) {
      try {
        await deleteData(`${import.meta.env.VITE_API_URL}/post/${data.id}`, {
          Authorization: `${grantType} ${accessToken}`,
        });
        nav(`/board/${param.category}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEditNav = ({ data }) => {
    nav(`/post/${param.category}/edit?id=${data.id}`, {
      state: {
        writer: writer,
      },
    });
  };

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-bold text-black text-[25px] mobile:text-[15px] break-all whitespace-pre-wrap">
          {data.title}
        </h1>
        <div className="pr-[38px]">
          <LikeList postId={data.id} />
        </div>
      </div>
      <div className="flex justify-between pr-10 mobile:pr-4 mobile:gap-[20px] text-[14px] mobile:text-[8px] mt-[15px] mobile:mt-[10px] text-nowrap">
        <div className="flex gap-[30px] mobile:gap-[10px]">
          <span className="font-bold text-[#553e3e]">{postingDate} 작성</span>
          <div>
            <span>조회수 : {data.viewCount}</span>
          </div>
          <div>
            <span>추천수 : {data.goodCount}</span>
          </div>
        </div>
        {writer.nickName === nickName && (
          <div className="flex gap-[15px] text-gray_6">
            <button type="button" onClick={() => handleEditNav({ data })}>
              수정
            </button>
            <button type="button" onClick={onDelete}>
              삭제
            </button>
          </div>
        )}
      </div>
      <div className="mt-[20px] mobile:mt-[12px] ">
        <Viewerbox initString={data.content} />
      </div>
      <div className="mt-[29px]">
        <ul className="flex text-[13px] mobile:text-[8px] gap-[16px] mobile:gap-[10px] font-bold">
          {Array.isArray(data.tags) &&
            data.tags.map((tag, index) => (
              <li key={index}>
                <div className="bg-gray_8 text-gray_0 px-[9px] py-[3px] rounded-lg">
                  <span>{tag}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default BoardBody;
