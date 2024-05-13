import Viewerbox from '@/components/Viewerbox'
import profileImg from '@/assets/profile.png';  
import React from 'react'

function BoardDetail() {
  return (
    <div>
        <header className='h-[80px]'> {/* 헤더 예상 크기*/}
        </header>
        <section className='flex justify-center'>
            <div className='w-[1460px] border-t border-[#9b9b9b] flex'>
                <div className='w-[980px] border-r pt-[46px] pl-[20px] border-[#9b9b9b]'>
                    {/* 게시판 div*/}
                    <div className='w-[900px]'> 
                        <h1 className='font-bold text-black text-[20px]'>큰일이 났습니다 도와주세요</h1>
                        <div className='flex gap-[30px] text-[14px] mt-[18px]'>
                            <span className='font-bold text-[#9B9B9B]'>2024.05.01 작성</span>
                            <div>
                                <span>조회수 :</span><span>10</span>
                            </div>
                            <div>
                                <span>추천수 :</span><span>10</span>
                            </div>
                        </div>
                        <div className='mt-[40px]'>
                            <Viewerbox />
                        </div>
                        <div className='mt-[29px]'>
                            <ul className='flex text-[13px] gap-[16px] font-bold'>
                                <li>
                                    <div className='bg-[#d9d9d9] px-[16px] py-[4px] rounded-xl'>
                                        <span>C++</span>
                                    </div>
                                </li>
                                <li>
                                    <div  className='bg-[#d9d9d9] px-[16px] py-[4px] rounded-xl'>
                                        <span>Java</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* 댓글 창 div */}
                    <div className='border-t border-[#9b9b9b] mt-[70px] py-[50px] px-[85px] flex flex-col items-center'>
                        <div className='w-[740px] h-[140px] px-[18px] pt-[20px] border border-[#9b9b9b] rounded-lg'>
                            <div className='flex gap-[30px] items-center'>
                                <img src={profileImg} className='w-[65px]'></img>
                                <label htmlFor='comment' className='sr-only'></label>
                                <input id='comment' placeholder='댓글을 작성해보세요' className='w-[585px] h-[45px] py-[12px] px-[13px] placeholder:font-bold border border-[#9b9b9b] rounded-lg'/>
                            </div>
                        </div>
                        <div className='w-[820px] mt-[42px]'>
                            <ul>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px]'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px]'></img>
                                            <h4 className='ml-[14px]'>최민식</h4>
                                            <div className='ml-[45px] text-[10px]'>
                                                <span>10</span>
                                                <span>분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px]'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px]'></img>
                                            <h4 className='ml-[14px]'>최민식</h4>
                                            <div className='ml-[45px] text-[10px]'>
                                                <span>10</span>
                                                <span>분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </section>
        <footer>
        </footer>
    </div>

  )
}

export default BoardDetail