import React from 'react'
import Viewerbox from "@/components/Viewerbox";
import profileImg from "@/assets/profile.png";
import { useEffect } from 'react';
import apiFunction from '@/util/apiFunction';
import { useState } from 'react';
import useFormattedDateTime from '@/hooks/useFormattedDateTime';

function BoardBody({data}) {

    const postingDate = useFormattedDateTime(data.postingDateTime);
    return (
        <>
            <h1 className='font-bold text-black text-[25px] mobile:text-[15px]'>{data.title}</h1>
            <div className='flex gap-[30px] mobile:gap-[20px] text-[14px] mobile:text-[8px] mt-[15px] mobile:mt-[10px]'>
                <span className='font-bold text-[#9B9B9B]'>{postingDate} 작성</span>
                <div>
                    <span>조회수 : {data.viewCount}</span>
                </div>
                <div>
                    <span>추천수 : {data.goodCount}</span>
                </div>
            </div>
            <div className='mt-[20px] mobile:mt-[12px] '>
                <Viewerbox initString={data.content}/>
            </div>
            <div className='mt-[29px]'>
                <ul className='flex text-[13px] mobile:text-[8px] gap-[16px] font-bold'>
                {Array.isArray(data.tags) && data.tags.map((tag, index) => (
                    <li key={index}>
                        <div  className='bg-[#d9d9d9] px-[14px] mobile:px-[9px] mobile:py-[3px] py-[2px] rounded-xl'>
                            <span>{tag}</span>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </>
    )
}

export default BoardBody