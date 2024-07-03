import useFormattedDateTime from "@/hooks/useFormattedDateTime";
import React from "react";
import Viewerbox from "../Viewerbox";
import useMemberStore from "@/stores/memberInfo";
import { deleteData } from "@/util/Crud";
import useLoginInfoStore from "@/stores/loginInfo";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LikeList from "../LikeList";
import { useEffect } from "react";
import useLike from "@/stores/useLike";

function MentoringBody({ data, writer }) {
  const postingDate = useFormattedDateTime(data.postingDateTime);
  const { nickName } = useMemberStore();
  const deadLine = useFormattedDateTime(data.deadLine);
  const param = useParams();
  const { accessToken, grantType } = useLoginInfoStore();
  const nav = useNavigate();

  

  const onDelete = async () => {
    if (confirm("정말 게시글을 삭제하시겠습니까?") == true) {
      try {
        await deleteData(`${import.meta.env.VITE_API_URL}/post/${data.id}`, {
          Authorization: `${grantType} ${accessToken}`,
        });
        nav(`/board/mentoring`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEditNav = ({ data }) => {
    nav(`/board/mentoring/edit?id=${data.id}`, {
      state: {
        writer: writer,
      },
    });
  };

  return (
    <div className="flex flex-col desktop:gap-20 tablet:gap-16 mobile:gap-10 tablet:mt-12 mobile:mt-8">
      <div className="flex flex-col items-end px-3 gap-10">
        {/* <div className="flex items-center gap-[5px]">
          <img src={writer.imgUrl} alt="작성자 프로필" className="rounded-full w-[32px]  mobile:w-[18px]"></img>
          <span className="text-[18px] mobile:text-[12px] font-bold">
            {writer.nickName}
          </span>
        </div> */}

        <div className="flex gap-10 items-center">
          <span className="mobile:text-[12px]">{postingDate}</span>
          {writer.nickName === nickName && (
            <div className="ml-[10px] flex gap-[15px]">
              <button type="button" onClick={() => handleEditNav({ data })}>
                수정
              </button>
              <span> | </span>
              <button type="button" onClick={onDelete}>
                삭제
              </button>
            </div>
          )}
        </div>
        <LikeList postId={data} />
      </div>
      <div className="border-2 border-gray_3 rounded-2xl desktop:px-5 desktop:py-8 tablet:px-5 tablet:py-8 mobile:px-4 mobile:py-5 flex flex-col gap-5">
        <span className="text-lg mobile:text-sm font-semibold text-gray_6">
          멘토 정보
        </span>
        <div className="flex mobile:text-xs">
          <span className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]">
            연락처
          </span>
          <span>{data.phoneNumber}</span>
        </div>
        <div className="flex mobile:text-xs">
          <span className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]">
            이메일
          </span>
          <span>ewsn0825@naver.com</span>
        </div>
      </div>
      <div className="border-2 border-gray_3 rounded-2xl desktop:px-5 desktop:py-8 tablet:px-5 tablet:py-8 mobile:px-4 mobile:py-5 flex flex-col gap-5">
        <span className="text-lg mobile:text-sm font-semibold text-gray_6">
          멘토링 정보
        </span>
        <div className="flex mobile:text-xs">
          <span className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]">
            멘토링명
          </span>
          <span>{data.title}</span>
        </div>
        <div className="flex mobile:text-xs">
          <span className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]">
            직무
          </span>
          <span>{data.job}</span>
        </div>
        <div className="flex mobile:text-xs">
          <span className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]">
            경력
          </span>
          <span>{data.career}년</span>
        </div>
        <div className="flex mobile:text-xs">
          <span className="font-semibold desktop:w-[120px] tablet:w-[100px] mobile:w-[70px]">
            링크
          </span>
          <span>{data.githubUrl}</span>
        </div>
      </div>
      <div className="border-2 border-gray_3 rounded-2xl desktop:px-5 desktop:py-8 tablet:px-5 tablet:py-8 mobile:px-4 mobile:py-5 flex flex-col gap-5">
        <span className="text-lg mobile:text-sm font-semibold text-gray_6">
          멘토링소개
        </span>

        <p className="desktop:h-[450px] desktop:mt-5 tablet:h-[300px] mobile:h-[200px] mobile:text-xs">
          {data.content}
        </p>
      </div>
    </div>
  );
}

export default MentoringBody;
