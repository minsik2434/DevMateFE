import React from 'react'
import penImg from "@/assets/pen.png";
import { useEffect } from 'react';
import apiFunction from '@/util/apiFunction';
import useLoginInfoStore from '@/stores/loginInfo';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import formatTimeDifference from '@/util/get_time_current_diff';
function Comment({comments}) {
    const {grantType, accessToken} = useLoginInfoStore();
    const [memberInfo, setMemberInfo] = useState({});
    const [input, setInput] = useState({
        comment : ""
    });

    const param = useParams();
    
    useEffect(()=>{
        const getData = async () =>{
            try{
                const responseData = (await apiFunction.getDataSetHeader(`${import.meta.env.VITE_API_URL}/members`,
                    {headers: {
                            Authorization: `${grantType} ${accessToken}`,
                        },})).data.data;
                setMemberInfo(responseData);
            }

            catch(error){
                console.log(error);
            }
        }
        if(accessToken&&grantType){
            getData();
        }
    },[accessToken, grantType])

 
    const onChnage = (e) =>{
        setInput({comment : e.target.value});
    }

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
          } catch (error) {
            console.log(error);
          }
    }

  return (
    <div className="border-t border-[#9b9b9b] mt-[40px] py-[30px] px-[50px] mobile:px-0 flex flex-col items-center">
        <div className="w-full px-[30px] py-[20px] border border-[#9b9b9b] rounded-lg">
            <form onSubmit={onSubmit}>
                <div className="flex gap-[30px] items-center mobile:gap-[10px]">
                    <img src={memberInfo.imgUrl} className="w-[50px] mobile:w-[30px]" />
                    <label htmlFor="comment" className="sr-only"></label>
                        <input
                            id="comment"
                            placeholder="댓글을 작성해보세요"
                            onChange={onChnage}
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
                    return (
                        <li key={comment.id}>
                            <div className="w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0">
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
                                <p className="mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]">
                                    {comment.content}
                                </p>
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