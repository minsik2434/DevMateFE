import Viewerbox from '@/components/Viewerbox'
import profileImg from '@/assets/profile.png';  
import commentImg from '@/assets/comment.png';
import goodImg from '@/assets/good.png';
import viewImg from '@/assets/view.png';
import penImg from '@/assets/pen.png';
import React from 'react'
import Header from '@/components/Header';
import { useState, useEffect } from 'react';
function BoardDetail() {
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
      const header = document.querySelector('header');
      setHeaderHeight(header.offsetHeight);
    }, []);

  return (
    <div>
        <header className='fixed top-0 left-0 right-0 z-20 border-b border-slate-300 bg-white shadow-md'>
            <Header />
        </header>
        <section className='flex justify-center'>
            <div style={{ marginTop: `${headerHeight}px`}} className='w-[80%] mobile:w-[95%] max-w-[1150px] laptop:min-w-[1024px] flex mobile:flex-col mobile:items-center'>
                <div className='w-[67%] mobile:w-full border-r pt-[46px] mobile:px-[10px] mobile:pt-[26px] border-[#9b9b9b] mobile:border-none'>
                    {/* 게시판 div*/}
                    <div className='flex justify-start px-[20px] mobile:px-0'>
                        <div className='w-full'> 
                            <h1 className='font-bold text-black text-[25px] mobile:text-[15px]'>큰일이 났습니다 도와주세요</h1>
                            <div className='flex gap-[30px] mobile:gap-[20px] text-[14px] mobile:text-[8px] mt-[15px] mobile:mt-[10px]'>
                                <span className='font-bold text-[#9B9B9B]'>2024.05.01 작성</span>
                                <div>
                                    <span>조회수 : 10</span>
                                </div>
                                <div>
                                    <span>추천수 : 10</span>
                                </div>
                            </div>
                            <div className='mt-[20px] mobile:mt-[12px] '>
                                <Viewerbox />
                            </div>
                            <div className='mt-[29px]'>
                                <ul className='flex text-[13px] mobile:text-[8px] gap-[16px] font-bold'>
                                    <li>
                                        <div className='bg-[#d9d9d9] px-[14px] mobile:px-[9px] mobile:py-[3px] py-[2px] rounded-xl'>
                                            <span>C++</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div  className='bg-[#d9d9d9] px-[14px] mobile:px-[9px] mobile:py-[3px] py-[2px] rounded-xl'>
                                            <span>Java</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='desktop:hidden laptop:hidden border border-black rounded-[20px] px-[16px] py-[20px] mt-[27px]'>
                                <div className='flex items-center'>
                                    <img src={profileImg} className='w-[30px]'></img>
                                    <span className='ml-[14px] text-[14px]'>최민식</span>
                                </div>
                                <ul className='flex items-center flex-wrap mt-[10px]  gap-[16px] font-bold'>
                                    <span className='text-[13px]'>관심 분야</span>
                                    <li>
                                        <div className='bg-[#d9d9d9] text-[10px] px-[9px] py-[3px] rounded-xl'>
                                            <span>C++</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div  className='bg-[#d9d9d9] text-[10px] px-[9px] py-[3px] rounded-xl'>
                                            <span>Java</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 댓글 창 div */}
                    <div className='border-t border-[#9b9b9b] mt-[40px] py-[30px] px-[50px] mobile:px-0 flex flex-col items-center'>
                        <div className='w-full px-[30px] py-[20px] border border-[#9b9b9b] rounded-lg'>
                            <div className='flex gap-[30px] items-center mobile:gap-[10px]'>
                                <img src={profileImg} className='w-[50px] mobile:w-[30px]'/>
                                <label htmlFor='comment' className='sr-only'></label>
                                <input id='comment' placeholder='댓글을 작성해보세요' className='w-full py-[10px] mobile:py-[3px] px-[13px] placeholder:text-[14px] mobile:placeholder:text-[10px] placeholder:font-bold border border-[#9b9b9b] rounded-lg'/>
                                <button className='laptop:hidden desktop:hidden p-[7px] rounded-md border border-[#9b9b9b]'><img src={penImg} className='w-[20px]'/></button>
                            </div>
                            <div className='text-end mt-[15px] mobile:hidden'>
                                <button className='border px-[30px] py-[10px] border-black rounded-[30px]'>댓글 작성</button>
                            </div>
                        </div>
                        <div className='w-full mt-[21px] mobile:mt-[20px]'>
                            <ul>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-[33%] mobile:w-full pt-[20px]'>
                    <div style={{ position: 'sticky', top: `${headerHeight}px`}} className='mobile:hidden px-[20px] py-[30px]'> 
                        <div className='mobile:hidden w-full px-[50px] py-[25px] border border-black rounded-[20px]'>
                            <div className='flex items-center'>
                                <img src={profileImg} className='w-[42px]'></img>
                                <strong className='ml-[14px] text-[20px]'>최민식</strong>
                            </div>
                            <ul className='flex items-center flex-wrap text-[14px] mt-[25px] gap-[16px] font-bold'>
                                <span>관심 분야</span>
                                <li>
                                    <div className='bg-[#d9d9d9] px-[12px] py-[3px] rounded-xl'>
                                        <span>C++</span>
                                    </div>
                                </li>
                                <li>
                                    <div  className='bg-[#d9d9d9] px-[12px] py-[3px] rounded-xl'>
                                        <span>Java</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='w-full mt-[45px] mobile:mt-[15px]'>
                            <div className='border border-black px-[20px] py-[15px] mobile:px-[16px] mobile:py-[14px] bg-slate-400 rounded-t-lg'>
                                <h2 className='text-[16px] mobile:text-[14px]'>스터디</h2>
                            </div>
                            <div className='border border-black rounded-b-lg px-[16px] py-[12px]'>
                                <ul className='flex flex-col gap-[20px] mobile:gap-[10px]'>
                                    <li>
                                        <div className='border-b px-[10px] border-[#9b9b9b]'>
                                            <p className='text-[18px] mobile:text-[15px]'>큰일났습니다</p>
                                            <div className='flex justify-between py-[9px]'>
                                                <div className='flex gap-[5px]'>
                                                    <img src={profileImg} className='w-[18px] mobile:w-[23px]'/>
                                                    <span className='text-[15px]'>최민식</span>
                                                </div>
                                                <ul className='flex gap-[7px] items-center text-[12px] mobile:text-[10px]'>
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
                                            <p className='text-[18px] mobile:text-[15px]'>큰일났습니다</p>
                                            <div className='flex justify-between py-[9px]'>
                                                <div className='flex gap-[5px]'>
                                                    <img src={profileImg} className='w-[18px] mobile:w-[23px]'/>
                                                    <span className='text-[15px]'>최민식</span>
                                                </div>
                                                <ul className='flex gap-[7px] items-center text-[12px] mobile:text-[10px]'>
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
                                            <p className='text-[18px] mobile:text-[15px]'>큰일났습니다</p>
                                            <div className='flex justify-between py-[9px]'>
                                                <div className='flex gap-[5px]'>
                                                    <img src={profileImg} className='w-[18px] mobile:w-[23px]'/>
                                                    <span className='text-[15px]'>최민식</span>
                                                </div>
                                                <ul className='flex gap-[7px] items-center text-[12px] mobile:text-[10px]'>
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
                                            <p className='text-[18px] mobile:text-[15px]'>큰일났습니다</p>
                                            <div className='flex justify-between py-[9px]'>
                                                <div className='flex gap-[5px]'>
                                                    <img src={profileImg} className='w-[18px] mobile:w-[23px]'/>
                                                    <span className='text-[15px]'>최민식</span>
                                                </div>
                                                <ul className='flex gap-[7px] items-center text-[12px] mobile:text-[10px]'>
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
                </div>
            </div>
        </section>
        <footer>
        </footer>
    </div>
  )
}

export default BoardDetail