import React from 'react'
import profileDefaultImg from '@/assets/profileicon.png';
import penImg from '@/assets/pen.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiFunction from '@/util/apiFunction';
import { useState, useEffect } from 'react';
function Inform({value}) {
    const nav = useNavigate();
    const [interests , setInterests] = useState([]);
    useEffect(() => {
        const getInterestInfo = async () => {
          try{
            const getInterests = await Promise.all(
              value.interests.map((interest) => 
                apiFunction.getData(`http://localhost:8080/interests/${interest}`)
              )
            );
            const items = getInterests.map((result)=> ({
              id : result.data.data.id,
              name : result.data.data.name
            }))

            setInterests(items);
            console.log(items);
          } catch(error) {
            console.log(error);
          }
        }
        getInterestInfo();
      }, [value.interests]);
  return (
    <div className='py-[52px] mobile:py-[40px] flex gap-[40px] mobile:gap-[13px] border-t border-[#9b9b9b] relative'>
        <div className='min-w-[270px] mobile:min-w-[130px] h-[180px] mobile:h-[78px] border border-[#9b9b9b] px-[40px] py-[10px] rounded-md'>
            <img src={profileDefaultImg} className='w-full h-full'></img>
        </div>
        <div className='flex flex-col justify-center'>
            <ul className='flex flex-col gap-[20px] mobile:gap-[8px] text-[18px] mobile:text-[15px]'>
                <li><span>이름 : {value.name}</span></li>
                <li><span>닉네임 : {value.nickName}</span></li>
                <li className='flex gap-[10px]'>
                    <span className='text-nowrap'>관심기술</span>
                    <ul className='flex gap-[20px] mobile:gap-[4px] text-[18px] mobile:text-[10px] flex-wrap'>
                        {interests.map((interest) =>{
                            return (
                                <li key={interest.id}>
                                    <div className='font-bold bg-[#e0e0e0] px-[20px] py-[3px] mobile:px-[9px] mobile:py-[6px] rounded-full'>{interest.name}</div>
                                </li>
                            )
                        })}
                    </ul>
                </li>
            </ul>
        </div>
        <button onClick={()=>nav("/profile/edit")} className='absolute bg-slate-300 rounded-md right-0 px-[10px] mobile:px-[5px] py-[3px] mobile:py-[5px]'>
            <span className='mobile:hidden'>수정하기</span> 
            <img src={penImg} className='laptop:hidden desktop:hidden w-[23px]'></img>
        </button>
        <button className='absolute bg-red-300 rounded-md right-0 bottom-0 px-[10px] py-[3px] mobile:text-[15px]'>회원탈퇴</button>
    </div>
  )
}

export default Inform