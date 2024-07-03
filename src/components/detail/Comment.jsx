import React from "react";
import penImg from "@/assets/pen.png";
import { useEffect, useLayoutEffect } from "react";
import { getData, postData, deleteData, patchData } from "@/util/Crud";
import profileDefault from "@/assets/profileDefault.png";
import useLoginInfoStore from "@/stores/loginInfo";
import { useState } from "react";
import { useParams } from "react-router-dom";
import formatTimeDifference from "@/util/get_time_current_diff";
import useMemberStore from "@/stores/memberInfo";
function Comment() {
  const { grantType, accessToken } = useLoginInfoStore();
  const { nickName, imgUrl } = useMemberStore();
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState({
    comment: "",
  });
  const [editStates, setEditStates] = useState({});
  const [updateFlag, setUpdateFlag] = useState(false);
  const param = useParams();
  const [editInputs, setEditInputs] = useState({});
  useLayoutEffect(() => {
    const getCommentList = async () => {
      try {
        const responseData = (
          await getData(`${import.meta.env.VITE_API_URL}/comments/${param.id}`)
        ).data;
        setComments(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    getCommentList();
  }, [param.id, updateFlag]);

  const onChnage = (e) => {
    setInput({ comment: e.target.value });
  };
  const onEditChange = (e, id) => {
    setEditInputs((prevInputs) => ({
      ...prevInputs,
      [id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await postData(
        `${import.meta.env.VITE_API_URL}/comments/${param.id}`,
        input,
        {
          Authorization: `${grantType} ${accessToken}`,
        }
      );
      setUpdateFlag((prev) => !prev);
      setInput({ comment: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (e) => {
    if (confirm("댓글을 삭제하시겠습니까?") == true) {
      try {
        await deleteData(
          `${import.meta.env.VITE_API_URL}/comments/${e.target.value}`,
          {
            Authorization: `${grantType} ${accessToken}`,
          }
        );
        setUpdateFlag((prev) => !prev);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onEdit = async (e, id) => {
    e.preventDefault();
    try {
      await patchData(
        `${import.meta.env.VITE_API_URL}/comments/${e.target.value}`,
        { comment: editInputs[id] },
        {
          Authorization: `${grantType} ${accessToken}`,
        }
      );
      setUpdateFlag((prev) => !prev);
      setEditStates((prevStates) => ({ ...prevStates, [id]: false }));
    } catch (error) {
      console.log(error);
    }
  };

  const toggleEditState = (id, content) => {
    setEditStates((prevStates) => ({ ...prevStates, [id]: !prevStates[id] }));
    setEditInputs((prevInputs) => ({ ...prevInputs, [id]: content }));
  };

  const placeholder =
    accessToken && grantType
      ? "댓글을 작성해보세요"
      : "댓글을 작성하려면 로그인이 필요합니다";

  const profileImage = accessToken && grantType ? imgUrl : profileDefault;

  return (
    <div className="py-[30px] flex flex-col items-center">
      <div className="w-full px-[30px] py-[20px] border border-gray_3 rounded-lg">
        <form onSubmit={onSubmit}>
          <div className="flex gap-[30px] items-center mobile:gap-[10px]">
            <img src={profileImage} alt="사용자 이미지" className="w-[50px] mobile:w-[30px]" />
            <label htmlFor="comment" className="sr-only"></label>
            <textarea
              id="comment"
              placeholder={placeholder}
              value={input.comment}
              onChange={onChnage}
              disabled={!(accessToken && grantType)}
              autoComplete="comment"
              className="w-full resize-none py-[10px] mobile:py-1.5 px-[13px] placeholder:text-[14px] mobile:placeholder:text-[10px] placeholder:font-bold border border-gray_3 mobile:text-[10px] rounded-lg"
            />
            <button className="tablet:hidden desktop:hidden p-2 rounded-md bg-gray_8">
              <img src={penImg} className="w-[20px]" />
            </button>
          </div>
          <div className="text-end mt-[15px] mobile:hidden">
            <button className="px-[15px] py-[6px] bg-gray_8 hover:bg-gray_9 text-gray_0 rounded-lg">
              댓글 작성
            </button>
          </div>
        </form>
      </div>
      <div className="w-full mt-[21px] mobile:mt-[20px]">
        <ul>
          {comments.map((comment) => {
            const isEditing = editStates[comment.id] || false;
            return (
              <li key={comment.id}>
                <div className="w-full border-b border-gray_3 py-[10px] px-[38px] mobile:px-0 relative">
                  {nickName === comment.writer.nickName && (
                    <div className="absolute right-0">
                      <ul className="flex gap-[8px]">
                        <li>
                          {!isEditing && (
                            <button
                              type="button"
                              className="text-gray_6 text-[14px] mobile:text-[10px]"
                              onClick={() =>
                                toggleEditState(comment.id, comment.content)
                              }
                            >
                              수정
                            </button>
                          )}
                        </li>

                        <li>
                          <button
                            type="button"
                            className="text-gray_6 text-[14px] mobile:text-[10px]"
                            value={comment.id}
                            onClick={onDelete}
                          >
                            삭제
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                  <div className="flex items-center">
                    <img
                      src={comment.writer.profileImgUrl}
                      className="w-[40px] mobile:w-[23px]"
                    />
                    <strong className="ml-[14px] text-[18px] mobile:text-[14px]">
                      {comment.writer.nickName}
                    </strong>
                    <div className="ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]">
                      <span>
                        {formatTimeDifference(comment.commentDateTime)}
                      </span>
                    </div>
                  </div>
                  {!isEditing && (
                    <p className="mt-[16px] mobile:mt-[9px] w-full text-[14px] mobile:text-[10px] break-all whitespace-pre-wrap">
                      {comment.content}
                    </p>
                  )}
                  {isEditing && (
                    <div className="py-[15px]">
                      <textarea
                        className="w-full border resize-none border-[#9b9b9b] mobile:text-[10px] rounded-md px-[10px] py-[10px] mobile:py-[5px] outline-none"
                        value={editInputs[comment.id] || ""}
                        onChange={(e) => onEditChange(e, comment.id)}
                      />
                      <div className="flex gap-[15px] justify-end mt-[10px] mobile:text-[14px] text-gray_0 outline-none">
                        <button
                          className="px-[15px] py-[3px] rounded-md bg-gray_8 hover:bg-gray_9"
                          value={comment.id}
                          onClick={(e) => onEdit(e, comment.id)}
                        >
                          수정
                        </button>
                        <button
                          className="px-[15px] py-[3px] rounded-md bg-gray_1 hover:bg-gray_2 text-gray_8"
                          type="button"
                          onClick={() =>
                            toggleEditState(comment.id, comment.content)
                          }
                        >
                          취소
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Comment;
