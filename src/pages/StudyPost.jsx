import React from 'react'
import EditorBox from '@/components/Editorbox'
import Header from '@/components/Header'
import getStringedDate from '@/util/get_stringed_date.js';
function StudyPost() {
    const date = new Date();

  return (
    <div>
        <header>
            <Header />
        </header>
        <section className='flex justify-center py-[50px]'>
          <div className='w-[60%] mobile:w-[95%]'>
            <div className='w-full px-[60px] py-[16px] mobile:px-[16px] mobile:py-[10px] bg-[#6eceda] rounded-lg'>
              <h2 className='text-[25px] mobile:text-[15px] font-bold'>스터디</h2>
              <p className='text-[15px] mobile:text-[10px] font-bold'>함께 공부해 목표를 이뤄보세요</p>
            </div>
            <div className='w-full mt-[62px] mobile:mt-[42px]'>
                <ul className='flex flex-col gap-[32px] mobile:gap-[12px]'>
                    <li>
                        <div className='flex gap-[42px] items-center'>
                            <span className='text-[20px] mobile:text-[15px] font-bold'>모집 인원</span> 
                            <select className='border border-black rounded-[5px] px-[4px] mobile:px-[2px]'>
                                <option>1명</option>
                                <option>2명</option>
                                <option>3명</option>
                                <option>4명</option>
                                <option>5명</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-[42px] items-center'>
                            <span className='text-[20px] mobile:text-[15px] font-bold'>모집 기간</span>
                            <input value={getStringedDate(date)} type="date" className='border border-black px-[4px] rounded-[5px]'/>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-[42px] items-center'>
                            <span className='text-[20px] mobile:text-[15px] font-bold'>진행 방식</span>
                            <select className='border border-black px-[4px] rounded-[5px]'>
                                <option>오프라인</option>
                                <option>온라인</option>
                                <option>온/오프라인</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-[43px]'>
                            <span className='text-[20px] mobile:text-[15px] font-bold text-nowrap'>모집 분야</span>
                            <ul className='mobile:hidden flex gap-[34px] mobile:gap-[10px] items-center text-[18px] mobile:text-[12px] flex-wrap'>
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
                            <select className='laptop:hidden desktop:hidden border border-black px-[4px] rounded-[5px]'>
                                <option>FrontEnd</option>
                                <option>BackEnd</option>
                                <option>Planning</option>
                                <option>AI</option>
                                <option>IOS</option>
                            </select>
                        </div>
                    </li>
                </ul>
            </div>
            <ul className='flex flex-col gap-[40px] mobile:gap-[14px] mt-[62px] mobile:mt-[30px]'>
              <li>
                <label className='sr-only' htmlFor='title'>title</label>
                <input id='title' placeholder='제목을 입력하세요' className='w-full focus:outline-none placeholder:font-bold placeholder:text-[25px] mobile:placeholder:text-[20px] text-[25px] mobile:text-[20px] font-bold'/>
              </li>
              <li>
                <label className='sr-only' htmlFor='tag'>tag</label>
                <input id='tag' placeholder='태그를 입력하세요' className='w-full focus:outline-none placeholder:text-[16px] text-[16px]'/> 
              </li>
              <li>
                <EditorBox/>
              </li>
            </ul>
            <div className='flex justify-end gap-[43px] mobile:gap-[18px] mt-[42px] mobile:mt-[20px]'>
              <button className='px-[30px] mobile:px-[20px] py-[10px] mobile:py-[6px] bg-[#979797] text-white font-bold rounded-md'>등록</button>
              <button className='px-[30px] mobile:px-[20px] py-[10px] mobile:py-[6px] border border-[#979797] text-black font-bold rounded-md'>취소</button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default StudyPost