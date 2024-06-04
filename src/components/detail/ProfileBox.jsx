import React from 'react'
import commentImg from "@/assets/comment.png";
import goodImg from "@/assets/good.png";
import viewImg from "@/assets/view.png";
import profileImg from "@/assets/profile.png";
import { useState } from 'react';
import { useEffect } from 'react';
import apiFunction from '@/util/apiFunction';


function ProfileBox({headerHeight, writerData}) {
    const [interests, setInterests] = useState([]);
    useEffect(() => {
        const getInterestInfo = async () => {
          try{
            const getInterests = await Promise.all(
                writerData.interests.map((interest) => 
                apiFunction.getData(`http://localhost:8080/interests/${interest}`)
              )
            );
            const items = getInterests.map((result)=> ({
              id : result.data.data.id,
              name : result.data.data.name
            }))
            setInterests(items);
          } catch(error) {
            console.log(error);
          }
        }
        getInterestInfo();
      }, [writerData.interests]);

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
        <div className='w-full mt-[45px] mobile:mt-[15px]'>
            <div className='border border-black px-[20px] py-[15px] mobile:px-[16px] mobile:py-[14px] bg-slate-400 rounded-t-lg'>
                <h2 className='text-[16px] mobile:text-[14px]'>스터디</h2>
            </div>
            <div className='border border-black rounded-b-lg px-[16px] py-[12px]'>
                <ul className='flex flex-col gap-[12px] mobile:gap-[10px]'>
                    <li>
                        <div className='border-b px-[10px] border-[#9b9b9b]'>
                            <p className='text-[16px] mobile:text-[15px]'>큰일났습니다</p>
                            <div className='flex justify-between py-[6px]'>
                                <div className='flex gap-[5px]'>
                                    <img src={profileImg} className='w-[18px] mobile:w-[23px]'/>
                                    <span className='text-[14px]'>최민식</span>
                                </div>
                                <ul className='flex gap-[7px] items-center text-[10px]'>
                                    <li className='flex'>
                                        <img src={commentImg} className='w-[10px] mobile:w-[12px]'/>
                                        <span>10</span>
                                    </li>
                                    <li className='flex'>
                                        <img src={viewImg} className='w-[10px] mobile:w-[12px]'/>
                                        <span>10</span>
                                    </li>
                                    <li className='flex'>
                                        <img src={goodImg} className='w-[10px] mobile:w-[12px]'/>
                                        <span>10</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='border-b px-[10px] border-[#9b9b9b]'>
                            <p className='text-[16px] mobile:text-[15px]'>큰일났습니다</p>
                            <div className='flex justify-between py-[6px]'>
                                <div className='flex gap-[5px]'>
                                    <img src={profileImg} className='w-[18px] mobile:w-[23px]'/>
                                    <span className='text-[14px]'>최민식</span>
                                </div>
                                <ul className='flex gap-[7px] items-center text-[10px]'>
                                    <li className='flex'>
                                        <img src={commentImg} className='w-[10px] mobile:w-[12px]'/>
                                        <span>10</span>
                                    </li>
                                    <li className='flex'>
                                        <img src={viewImg} className='w-[10px] mobile:w-[12px]'/>
                                        <span>10</span>
                                    </li>
                                    <li className='flex'>
                                        <img src={goodImg} className='w-[10px] mobile:w-[12px]'/>
                                        <span>10</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='border-b px-[10px] border-[#9b9b9b]'>
                            <p className='text-[16px] mobile:text-[15px]'>큰일났습니다</p>
                            <div className='flex justify-between py-[6px]'>
                                <div className='flex gap-[5px]'>
                                    <img src={profileImg} className='w-[18px] mobile:w-[23px]'/>
                                    <span className='text-[14px]'>최민식</span>
                                </div>
                                <ul className='flex gap-[7px] items-center text-[10px]'>
                                    <li className='flex'>
                                        <img src={commentImg} className='w-[10px] mobile:w-[12px]'/>
                                        <span>10</span>
                                    </li>
                                    <li className='flex'>
                                        <img src={viewImg} className='w-[10px] mobile:w-[12px]'/>
                                        <span>10</span>
                                    </li>
                                    <li className='flex'>
                                        <img src={goodImg} className='w-[10px] mobile:w-[12px]'/>
                                        <span>10</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='border-b px-[10px] border-[#9b9b9b]'>
                            <p className='text-[16px] mobile:text-[15px]'>큰일났습니다</p>
                            <div className='flex justify-between py-[6px]'>
                                <div className='flex gap-[5px]'>
                                    <img src={profileImg} className='w-[18px] mobile:w-[23px]'/>
                                    <span className='text-[14px]'>최민식</span>
                                </div>
                                <ul className='flex gap-[7px] items-center text-[10px]'>
                                    <li className='flex'>
                                        <img src={commentImg} className='w-[10px] mobile:w-[12px]'/>
                                        <span>10</span>
                                    </li>
                                    <li className='flex'>
                                        <img src={viewImg} className='w-[10px] mobile:w-[12px]'/>
                                        <span>10</span>
                                    </li>
                                    <li className='flex'>
                                        <img src={goodImg} className='w-[10px] mobile:w-[12px]'/>
                                        <span>10</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProfileBox