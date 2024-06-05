import React from 'react'
import useInterestsInfo from '@/hooks/useInterestsInfo';
import MiniBoard from './MiniBoard';


function RightBox({headerHeight, writerData}) {
    const interests = useInterestsInfo(writerData.interests);
  return (
    <div style={{ position: 'sticky', top: `${headerHeight}px`}} className='mobile:hidden px-[20px] py-[30px]'> 
        <div className='mobile:hidden w-full px-[30px] py-[25px] border border-black rounded-[20px]'>
            <div className='flex items-center'>
                <img src={writerData.imgUrl} className='w-[42px]'></img>
                <strong className='ml-[14px] text-[20px]'>{writerData.nickName}</strong>
            </div>
            <ul className='flex items-center flex-wrap text-[12px] mt-[20px] gap-[16px] font-bold'>
                <span>관심 분야</span>
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
        <MiniBoard />
    </div>
  )
}

export default RightBox