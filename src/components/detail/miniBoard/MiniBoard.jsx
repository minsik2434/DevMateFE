import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MiniBoardList from './MiniBoardList';

function MiniBoard() {
    const param = useParams();
    const bannerElementByCategory = {
        qna : {
          heading:"Q&A",
          style:"bg-gradient-to-t from-[#98D8DB] to-[#6ECEDA]"
        },
    
        community : {
          heading:"커뮤니티",
          style:"bg-gradient-to-t from-[#F6A2CC] to-[#FCAAAA]"
        },
    
        job : {
          heading:"모집공고",
          style:"bg-gradient-to-t from-[#FCE382] to-[#F38181]"
        },
    
        review : {
          heading:"취업 후기",
          style:"bg-gradient-to-t from-[#FDF2F0] to-[#F8DAE2]"
        }
    }
    const { heading, style } = bannerElementByCategory[param.category]

    useEffect(()=>{

    },[])
  return (
    <div className='w-full mt-[45px] mobile:mt-[15px]'>
        <div className={`border border-black px-[20px] py-[15px] mobile:px-[16px] mobile:py-[14px rounded-t-lg ${style}`}>
            <h2 className='text-[16px] mobile:text-[14px]'>{heading}</h2>
        </div>
        <MiniBoardList /> 
    </div>
  )
}

export default MiniBoard