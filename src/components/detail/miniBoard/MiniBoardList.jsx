import React from 'react'
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
            {items.slice(0,5).map((item) =>{
                return (
                    <li key={item.id}>
                        <div className='border-b px-[10px] border-[#9b9b9b]'>
                            <p className='text-[16px] mobile:text-[15px]'>{item.title}</p>
                            <div className='flex justify-between py-[6px]'>
                                <div className='flex items-center'>
                                    <div className='flex gap-[5px]'>
                                        <img src={item.writer.profileImgUrl} className='w-[18px] mobile:w-[23px]'/>
                                        <span className='text-[14px] text-nowrap'>{item.writer.nickName}</span>
                                    </div>
                                    <ul className='flex text-[10px] font-bold flex-wrap gap-[3px] ml-[8px]'>
                                        {item.tags.map((tag,index)=>{
                                            return (
                                                <li key={index}>
                                                    <div  className='bg-[#d9d9d9] px-[3px] py-[2px] rounded-xl'>
                                                        <span>{tag}</span>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <ul className='flex gap-[10px] items-center text-[10px] font-bold'>
                                    <li className='flex'>
                                        <img src={viewImg} className='w-[10px] mobile:w-[12px] mr-[2px]'/>
                                        <span>{item.viewCount}</span>
                                    </li>
                                    <li className='flex'>
                                        <img src={commentImg} className='w-[10px] mobile:w-[12px] mr-[2px]'/>
                                        <span>{item.commentCount}</span>
                                    </li>
                                    <li className='flex'>
                                        <img src={goodImg} className='w-[10px] mobile:w-[12px] mr-[2px]'/>
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