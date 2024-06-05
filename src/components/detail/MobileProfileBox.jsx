import useInterestsInfo from '@/hooks/useInterestsInfo';
import apiFunction from '@/util/apiFunction';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function MobileProfileBox({writerData}) {
    const interests = useInterestsInfo(writerData.interests);
  return (
    <div className="desktop:hidden tablet:hidden border border-black rounded-[20px] px-[16px] py-[20px] mt-[27px]">
        <div className="flex items-center">
        <img src={writerData.imgUrl} className="w-[30px]"></img>
        <span className="ml-[14px] text-[14px]">{writerData.nickName}</span>
        </div>
        <ul className="flex items-center flex-wrap mt-[10px]  gap-[16px] font-bold">
            <span className="text-[13px]">관심 분야</span>
            {interests.map((interest) =>{
                return (
                    <li key={interest.id}>
                        <div className='bg-[#d9d9d9] px-[9px] py-[3px] rounded-xl'>
                            <span>{interest.name}</span>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default MobileProfileBox