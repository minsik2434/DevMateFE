import EditorBox from '@/components/Editorbox'
import Header from '@/components/Header'
import React from 'react'
import { useRef } from 'react'

function Post() {
  const editorRef = useRef();
  const handleClick = () => {
    console.log(editorRef.current.getInstance().getHTML());
  };
  return (
    <div>
        <header>
            <Header />
        </header>
        <section className='flex justify-center py-[50px]'>
          <div className='w-[60%] mobile:w-[95%] max-w-[1150px]'>
            <div className='w-full px-[60px] py-[16px] mobile:px-[16px] mobile:py-[10px] bg-[#6eceda] rounded-lg'>
              <h2 className='text-[25px] mobile:text-[15px] font-bold'>Q&A</h2>
              <p className='text-[15px] mobile:text-[10px] font-bold'>동료들과 함께 문제를 해결해보아요</p>
            </div>
            <ul className='flex flex-col gap-[40px] mobile:gap-[14px] mt-[55px] mobile:mt-[30px]'>
              <li>
                <label className='sr-only' htmlFor='title'>title</label>
                <input id='title' placeholder='제목을 입력하세요' className='w-full focus:outline-none placeholder:font-bold placeholder:text-[25px] mobile:placeholder:text-[20px] text-[25px] mobile:text-[20px] font-bold'/>
              </li>
              <li>
                <label className='sr-only' htmlFor='tag'>tag</label>
                <input id='tag' placeholder='태그를 입력하세요' className='w-full focus:outline-none placeholder:text-[16px] text-[16px]'/> 
              </li>
              <li>
                <EditorBox editorRef={editorRef}/>
              </li>
            </ul>
            <div className='flex justify-end gap-[43px] mobile:gap-[18px] mt-[42px] mobile:mt-[20px]'>
              <button onClick={handleClick} className='px-[30px] mobile:px-[20px] py-[10px] mobile:py-[6px] bg-[#979797] text-white font-bold rounded-md'>등록</button>
              <button className='px-[30px] mobile:px-[20px] py-[10px] mobile:py-[6px] border border-[#979797] text-black font-bold rounded-md'>취소</button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Post