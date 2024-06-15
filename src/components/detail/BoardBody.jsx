import React from "react";
import Viewerbox from "@/components/Viewerbox";
import useFormattedDateTime from "@/hooks/useFormattedDateTime";
import useMemberStore from "@/stores/memberInfo";
import useLoginInfoStore from "@/stores/loginInfo";
import { deleteData } from "@/util/Crud";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function BoardBody({ data, writer }) {
  const { accessToken, grantType } = useLoginInfoStore();
  const postingDate = useFormattedDateTime(data.postingDateTime);
  const { nickName } = useMemberStore();
  const param = useParams();
  const nav = useNavigate();
  console.log(nickName);
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
      <h1 className="font-bold text-black text-[25px] mobile:text-[15px]">
        {data.title}
      </h1>
      <div className="flex justify-between pr-[50px] mobile:gap-[20px] text-[14px] mobile:text-[8px] mt-[15px] mobile:mt-[10px]">
        <div className="flex gap-[30px]">
          <span className="font-bold text-[#553e3e]">{postingDate} 작성</span>
          <div>
            <span>조회수 : {data.viewCount}</span>
          </div>
          <div>
            <span>추천수 : {data.goodCount}</span>
          </div>
        </div>
        {writer.nickName === nickName && (
          <div className="flex gap-[15px]">
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
        <ul className="flex text-[13px] mobile:text-[8px] gap-[16px] font-bold">
          {Array.isArray(data.tags) &&
            data.tags.map((tag, index) => (
              <li key={index}>
                <div className="bg-[#d9d9d9] px-[14px] mobile:px-[9px] mobile:py-[3px] py-[2px] rounded-xl">
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
