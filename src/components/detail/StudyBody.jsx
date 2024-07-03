import useFormattedDateTime from "@/hooks/useFormattedDateTime";
import React from "react";
import Viewerbox from "../Viewerbox";
import useMemberStore from "@/stores/memberInfo";
import { deleteData } from "@/util/Crud";
import useLoginInfoStore from "@/stores/loginInfo";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LikeList from "../LikeList";

function StudyBody({ data, writer }) {
  const postingDate = useFormattedDateTime(data.postingDateTime);
  const { nickName } = useMemberStore();
  const deadLine = useFormattedDateTime(data.deadLine);
  const { accessToken, grantType } = useLoginInfoStore();
  const nav = useNavigate();
  const onDelete = async () => {
    if (confirm("정말 게시글을 삭제하시겠습니까?") == true) {
      try {
        await deleteData(`${import.meta.env.VITE_API_URL}/post/${data.id}`, {
          Authorization: `${grantType} ${accessToken}`,
        });
        nav(`/board/study`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEditNav = ({ data }) => {
    nav(`/post/study/edit?id=${data.id}`, {
      state: {
        writer: writer,
      },
    });
  };

  return (
    <>
      <div>
        <div className=" mt-[70px] mobile:mt-[25px]">
          <div className="border-b-2 border-[#9b9b9b] text-nowrap">
            <div className="flex justify-between">
              <h2 className="text-[25px] mobile:text-[18px] font-bold">
                {data.title}
              </h2>
              <LikeList />
            </div>
            <div className="flex py-[12px] justify-between mobile:gap-[12px] text-[15px]">
              <div className="flex items-center gap-[10px]">
                <div className="flex items-center gap-[5px] border-r pr-[10px] border-[#9b9b9b]">
                  <img
                    src={writer.imgUrl}
                    className="w-[35px] mobile:w-[18px]"
                  ></img>
                  <span className="text-[18px] mobile:text-[12px] font-bold">
                    {writer.nickName}
                  </span>
                </div>
                <span className="text-[18px] mobile:text-[12px]">
                  {postingDate}
                </span>
              </div>
              {writer.nickName === nickName && (
                <div className="ml-[10px] flex gap-[15px] mobile:gap-[8px] mobile:text-[12px]">
                  <button type="button" onClick={() => handleEditNav({ data })}>
                    수정
                  </button>
                  <button type="button" onClick={onDelete}>
                    삭제
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="px-[40px] mobile:px-[7px] py-[36px] mobile:py-[26px]">
            <ul className="flex flex-col gap-[26px] mobile:gap-[13px] text-[18px] mobile:text-[15px]">
              <li className="flex gap-[42px]">
                <span className="font-bold">모집 인원</span>
                <span>{data.recruitCount}명</span>
              </li>
              <li className="flex gap-[42px]">
                <span className="font-bold">모집 기간</span>
                <span>{deadLine}</span>
              </li>
              <li className="flex gap-[42px]">
                <span className="font-bold">진행 방식</span>
                <span>{data.proceed}</span>
              </li>
              <li className="flex gap-[42px]">
                <span className="font-bold text-nowrap">모집 분야</span>
                <ul className="flex gap-[20px] mobile:gap-[10px] items-center text-[18px] mobile:text-[12px] flex-wrap">
                  {Array.isArray(data.tags) &&
                    data.tags.map((tag, index) => (
                      <li key={index}>
                        <div className="font-bold bg-gray_8 text-gray_0 px-[10px] py-1 mobile:px-[5px] text-sm mobile:py-[2px] mobile:text-[10px] rounded-lg">
                          <span>{tag}</span>
                        </div>
                      </li>
                    ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-[50px] mobile:mt-[10px] border-[#9b9b9b]">
        <div className="py-[10px] border-b-2 border-[#9b9b9b]">
          <h2 className="text-[25px] mobile:text-[18px] font-bold">
            프로젝트 소개
          </h2>
        </div>
        <div className="py-[43px] mobile:py-[15px]">
          <Viewerbox initString={data.content} />
        </div>
      </div>
    </>
  );
}

export default StudyBody;
