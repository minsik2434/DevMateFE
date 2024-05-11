import Viewerbox from '@/components/Viewerbox'
import React from 'react'

function BoardDetail() {
  return (
    <div>
        <header className='h-[80px]'> {/* 헤더 예상 크기*/}
        </header>
        <section className='flex justify-center'>
            <div className='w-[1460px] border-t border-[#9b9b9b]'>
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
                    <div className='border-t border-[#9b9b9b] mt-[70px] py-[50px]'>
                        <div className='h-[140px] px-[18px] border border-[#9b9b9b] rounded-md'></div>
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