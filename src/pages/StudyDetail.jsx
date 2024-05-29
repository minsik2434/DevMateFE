import Header from '@/components/Header'
import profileImg from '@/assets/profile.png'; 
import penImg from '@/assets/pen.png';
import React from 'react'
import getStringedDate from '@/util/get_stringed_date';
import Viewerbox from '@/components/Viewerbox';
function StudyDetail() {

    const date = new Date();
  return (
    <div>
        <header>
            <Header/>
        </header>
        <section className='flex justify-center py-[50px] mobile:py-[25px]'>
            <div className='w-[60%] mobile:w-[95%] max-w-[740px]'>
                <div className='w-full px-[60px] py-[16px] mobile:px-[16px] mobile:py-[10px] bg-[#EDEDED] rounded-lg'>
                    <h2 className='text-[25px] mobile:text-[15px] font-bold'>스터디</h2>
                    <p className='text-[15px] mobile:text-[10px] font-bold'>함께 공부해 목표를 이뤄보세요</p>
                </div>
                <div className='px-[18px] mobile:px-[5px]'>
                    <div>
                        <div className=' mt-[70px] mobile:mt-[25px]'>
                            <div className='border-b-2 border-[#9b9b9b]'>
                                <h2 className='text-[25px] mobile:text-[18px] font-bold'>같이 공부해요</h2>
                                <div className='flex items-center py-[12px] gap-[18px] mobile:gap-[12px] text-[15px]'>
                                    <div className='flex items-center gap-[5px] border-r pr-[10px] border-[#9b9b9b]'>
                                        <img src={profileImg} className='w-[35px] mobile:w-[18px]'></img>
                                        <span className='text-[18px] mobile:text-[12px] font-bold'>최민식</span>
                                    </div>
                                    <span className='text-[18px] mobile:text-[12px]'>{getStringedDate(date)}</span>
                                </div>
                            </div>
                            <div className='px-[40px] mobile:px-[7px] py-[36px] mobile:py-[26px]'>
                                <ul className='flex flex-col gap-[26px] mobile:gap-[13px] text-[18px] mobile:text-[15px]'>
                                    <li className='flex gap-[42px]'>
                                        <span className='font-bold'>모집 인원</span>
                                        <span>10명</span>
                                    </li>
                                    <li className='flex gap-[42px]'>
                                        <span className='font-bold'>모집 기간</span>
                                        <span>2024.05.01</span>
                                    </li>
                                    <li className='flex gap-[42px]'>
                                        <span className='font-bold'>진행 방식</span>
                                        <span>온/오프라인</span>
                                    </li>
                                    <li className='flex gap-[42px]'>
                                        <span className='font-bold text-nowrap'>모집 분야</span>
                                        <ul className='flex gap-[20px] mobile:gap-[10px] items-center text-[18px] mobile:text-[12px] flex-wrap'>
                                            <li>
                                                <button className='font-bold bg-[#e0e0e0] px-[30px] mobile:px-[8px] py-[6px] mobile:py-[4px] rounded-full'>FrontEnd</button>
                                            </li>
                                            <li>
                                                <button className='font-bold bg-[#e0e0e0] px-[30px] mobile:px-[8px] py-[6px] mobile:py-[4px] rounded-full'>BackEnd</button>
                                            </li>
                                            <li>
                                                <button className='font-bold bg-[#e0e0e0] px-[30px] mobile:px-[8px] py-[6px] mobile:py-[4px] rounded-full'>Designer</button>
                                            </li>
                                            <li>
                                                <button className='font-bold bg-[#e0e0e0] px-[30px] mobile:px-[8px] py-[6px] mobile:py-[4px] rounded-full'>Planning</button>
                                            </li>
                                            <li>
                                                <button className='font-bold bg-[#e0e0e0] px-[30px] mobile:px-[8px] py-[6px] mobile:py-[4px] rounded-full'>IOS</button>
                                            </li>
                                            <li>
                                                <button className='font-bold bg-[#e0e0e0] px-[30px] mobile:px-[8px] py-[6px] mobile:py-[4px] rounded-full'>IOS</button>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='mt-[50px] mobile:mt-[10px] border-b border-[#9b9b9b]'>
                        <div className='py-[10px] border-b-2 border-[#9b9b9b]'>
                            <h2 className='text-[25px] mobile:text-[18px] font-bold'>프로젝트 소개</h2>
                        </div>
                        <div className='py-[43px] mobile:py-[15px]'>
                            <Viewerbox />
                        </div>
                    </div>

                    <div className='mt-[30px]'>
                        <div className='px-[30px] py-[20px] mobile:px-[17px] border border-[#9b9b9b] rounded-lg'>
                            <div className='flex gap-[30px] items-center mobile:gap-[10px]'>
                                <img src={profileImg} className='w-[50px] mobile:w-[30px]'/>
                                <label htmlFor='comment' className='sr-only'></label>
                                <input id='comment' placeholder='댓글을 작성해보세요' className='w-full py-[10px] mobile:py-[3px] px-[13px] placeholder:text-[14px] mobile:placeholder:text-[10px] placeholder:font-bold border border-[#9b9b9b] rounded-lg'/>
                                <button className='laptop:hidden desktop:hidden p-[8px] rounded-md border border-[#9b9b9b]'><img src={penImg} className='w-[20px]'/></button>
                            </div>
                            <div className='text-end mt-[15px] mobile:hidden'>
                                <button className='border px-[30px] py-[10px] border-black rounded-[30px]'>댓글 작성</button>
                            </div>
                        </div>
                        <div className='py-[50px] mobile:py-[18px]'>
                            <ul>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[20px]'/>
                                            <strong className='ml-[14px] text-[18px] mobile:text-[12px]'>최민식</strong>
                                            <div className='ml-[45px] mobile:ml-[20px] text-[12px] mobile:text-[10px]'>
                                                <span>10</span>
                                                <span>분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] text-[16px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default StudyDetail