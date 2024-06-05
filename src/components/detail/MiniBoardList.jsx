import React from 'react'
import profileImg from "@/assets/profile.png";
import commentImg from "@/assets/comment.png";
import goodImg from "@/assets/good.png";
import viewImg from "@/assets/view.png";
import { useEffect } from 'react';
import { useState } from 'react';
import apiFunction from '@/util/apiFunction';
import { useParams } from 'react-router-dom';
function MiniBoardList() {
    const param = useParams();
    const [items, setItems] = useState([]);
    useEffect(()=>{
        const getData = async () =>{
            try{
                const responseData = (await apiFunction.getData(`${import.meta.env.VITE_API_URL}/post/${param.category}/list`)).data.data.content;
                setItems(responseData);
            }
            catch(error){
                console.log(error);
            }
        }
        getData();
    },[param.category])

  return (
    <div className='border-l border-r border-b border-black rounded-b-lg px-[16px] py-[12px]'>
        <ul className='flex flex-col gap-[12px] mobile:gap-[10px]'>
            {items.map((item) =>{
                return (
                    <li key={item.id}>
                        <div className='border-b px-[10px] border-[#9b9b9b]'>
                            <p className='text-[16px] mobile:text-[15px]'>{item.title}</p>
                            <div className='flex justify-between py-[6px]'>
                                <div className='flex gap-[5px]'>
                                    <img src={item.writer.profileImgUrl} className='w-[18px] mobile:w-[23px]'/>
                                    <span className='text-[14px]'>{item.writer.nickName}</span>
                                </div>
                                <ul className='flex gap-[7px] items-center text-[10px]'>
                                    <li className='flex'>
                                        <img src={commentImg} className='w-[10px] mobile:w-[12px]'/>
                                        <span>{item.commentCount}</span>
                                    </li>
                                    <li className='flex'>
                                        <img src={viewImg} className='w-[10px] mobile:w-[12px]'/>
                                        <span>{item.viewCount}</span>
                                    </li>
                                    <li className='flex'>
                                        <img src={goodImg} className='w-[10px] mobile:w-[12px]'/>
                                        <span>{item.goodCount}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default MiniBoardList