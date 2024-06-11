import React from 'react'
import penImg from "@/assets/pen.png";
import { useEffect, useLayoutEffect } from 'react';
import apiFunction from '@/util/apiFunction';
import useLoginInfoStore from '@/stores/loginInfo';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import formatTimeDifference from '@/util/get_time_current_diff';
import useMemberStore from '@/stores/memberInfo';
function Comment() {
    const {grantType, accessToken} = useLoginInfoStore();
    const {nickName, imgUrl} = useMemberStore();
    const [comments, setComments] = useState([]);
    const [input, setInput] = useState({
        comment : ""
    });
    const [editStates, setEditStates] = useState({});
    const [updateFlag, setUpdateFlag] = useState(false);
    const param = useParams();
    const [editInputs, setEditInputs] = useState({});
    useLayoutEffect(()=>{
        const getCommentList = async () => {
          try{
              const responseData = (await apiFunction.getData(`${import.meta.env.VITE_API_URL}/comments/${param.id}`)).data.data;
              setComments(responseData);
          }
          catch(error){
              console.log(error);
          }
        }
        getCommentList();
      },[param.id,updateFlag])
    
 
    const onChnage = (e) =>{
        setInput({comment : e.target.value});
    }
    const onEditChange = (e, id) => {
        setEditInputs((prevInputs) => ({
          ...prevInputs,
          [id]: e.target.value,
        }));
      };

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await apiFunction.postDataSetHeader(
              `${import.meta.env.VITE_API_URL}/comments/${param.id}`,
              input,
              {
                headers: {
                  Authorization: `${grantType} ${accessToken}`,
                },
              }
            );
            setUpdateFlag(prev => !prev);
            setInput({ comment: "" });
        } catch (error) {
            console.log(error);
        }
    }

    const onDelete = async (e) =>{
        if (confirm("댓글을 삭제하시겠습니까?") == true) {
            try {
                await apiFunction.deleteData(`${import.meta.env.VITE_API_URL}/comments/${e.target.value}`, {
                    headers: {
                        Authorization: `${grantType} ${accessToken}`
                    }
                });
                setUpdateFlag(prev => !prev);
            } catch (error) {
                console.log(error);
            }
        }
    }

    const onEdit = async(e, id)  =>{
        e.preventDefault()
        try {
            await apiFunction.patchDataSetHeader(
              `${import.meta.env.VITE_API_URL}/comments/${e.target.value}`,
              { comment: editInputs[id] },
              {
                headers: {
                  Authorization: `${grantType} ${accessToken}`,
                },
              }
            );
            setUpdateFlag(prev => !prev);
            setEditStates((prevStates) => ({ ...prevStates, [id]: false }));
        } catch (error) {
            console.log(error);
        }
    }

    const toggleEditState = (id, content) => {
        setEditStates((prevStates) => ({ ...prevStates, [id]: !prevStates[id] }));
        setEditInputs((prevInputs) => ({ ...prevInputs, [id]: content }));
      };

  return (
    <div className="border-t border-[#9b9b9b] mt-[40px] py-[30px] px-[50px] mobile:px-0 flex flex-col items-center">
        <div className="w-full px-[30px] py-[20px] border border-[#9b9b9b] rounded-lg">
            <form onSubmit={onSubmit}>
                <div className="flex gap-[30px] items-center mobile:gap-[10px]">
                    <img src={imgUrl} className="w-[50px] mobile:w-[30px]" />
                    <label htmlFor="comment" className="sr-only"></label>
                        <input
                            id="comment"
                            placeholder="댓글을 작성해보세요"
                            value={input.comment}
                            onChange={onChnage}
                            autoComplete="comment"
                            className="w-full py-[10px] mobile:py-[3px] px-[13px] placeholder:text-[14px] mobile:placeholder:text-[10px] placeholder:font-bold border border-[#9b9b9b] rounded-lg"/>
                        <button className="tablet:hidden desktop:hidden p-[7px] rounded-md border border-[#9b9b9b]">
                            <img src={penImg} className="w-[20px]" />
                        </button>
                </div>
                <div className="text-end mt-[15px] mobile:hidden">
                    <button className="px-[30px] py-[6px] bg-gray_4 hover:bg-gray_5 rounded-[30px]">
                    댓글 작성
                    </button>
                </div>
            </form>
        </div>
        <div className="w-full mt-[21px] mobile:mt-[20px]">
            <ul>
                {comments.map(comment =>{
                    const isEditing = editStates[comment.id] || false;
                    return (
                        <li key={comment.id}>
                            <div className="w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0 relative">
                                {
                                    nickName === comment.writer.nickName && (
                                        <div className='absolute right-0'>
                                            <ul className='flex gap-[8px]'>
                                                <li>
                                                    {!isEditing && (
                                                        <button type='button' onClick={() => toggleEditState(comment.id, comment.content)}>수정</button>
                                                    )}
                                                </li>
                
                                                <li>
                                                    <button type='button' value={comment.id} onClick={onDelete}>삭제</button>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                                <div className="flex items-center">
                                <img
                                    src={comment.writer.profileImgUrl}
                                    className="w-[40px] mobile:w-[23px]"
                                />
                                <strong className="ml-[14px] text-[18px] mobile:text-[14px]">
                                    {comment.writer.nickName}
                                </strong>
                                <div className="ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]">
                                    <span>{formatTimeDifference(comment.commentDateTime)}</span>
                                </div>
                                </div>
                                {!isEditing && (
                                    <p className="mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]">
                                        {comment.content}
                                    </p>
                                )}
                                {isEditing && (
                                    <div className='py-[15px]'>
                                    <input
                                        className='w-full border border-[#9b9b9b] rounded-md px-[10px] py-[10px] outline-none'
                                        value={editInputs[comment.id] || ""}
                                        onChange={(e) => onEditChange(e, comment.id)}
                                    />
                                    <div className='flex gap-[15px] justify-end mt-[10px] text-white outline-none'>
                                        <button className='px-[15px] py-[3px] rounded-md bg-brand_red' type="button" onClick={() => toggleEditState(comment.id, comment.content)}>취소</button>
                                        <button className='px-[15px] py-[3px] rounded-md bg-brand_blue' value={comment.id} onClick={(e) => onEdit(e, comment.id)}>수정</button>
                                    </div>
                                    </div>
                                )}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Comment