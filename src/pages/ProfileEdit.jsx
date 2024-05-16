import React from 'react';
import profileDefaultImg from '@/assets/profileicon.png';

function ProfileEdit() {
  return (
    <div>
        <section className='flex justify-center py-[20px]'>     
            <div className='w-[60%] mobile:w-[95%] max-w-[1200px]'>
                <h2 className='text-[30px] mobile:text-[20px] text-center font-bold'>프로필 수정</h2>
                <div className='mt-[50px] mobile:mt-[25px] justify-center'>
                    <ul className='pl-[20%] flex flex-col gap-[20px] mobile:gap-[10px] text-[18px] mobile:text-[14px]'>
                        <li className='flex items-center justify-start'>
                            <span className='min-w-[20%]'>이름</span>
                            <label htmlFor='name' className='sr-only'>name</label>
                            <input id="name" value="최민식" className='border w-[60%] border-[#d1d1d1] rounded-md p-[10px] mobile:py-[5px]'/>
                        </li>
                        <li className='flex items-center justify-start'>
                            <span className='min-w-[20%]'>닉네임</span>
                            <label htmlFor='nick' className='sr-only'>nick</label>
                            <input id="nick" value="민식" className='border w-[60%] border-[#d1d1d1] rounded-md p-[10px] mobile:py-[5px]'/>
                        </li>
                        <li className='flex items-start justify-start gap-[10px]'>
                            <span className='min-w-[20%]'>프로필</span>
                            <img src={profileDefaultImg} className='w-[100px] mobile:w-[50px]'></img>
                            <button className='font-bold text-[14px] mobile:text-[10px] text-white px-[20px] mobile:px-[10px] py-[6px] mobile:py-[3px] bg-slate-400 rounded-2xl'>change</button>
                        </li>
                        <li className='flex items-center justify-start gap-[10px] mobile:gap-[5px]'>
                            <span className='min-w-[20%]'>경력자이신가요?</span>
                            <input type='checkbox'/>
                        </li>
                        <li  className='flex items-center justify-start gap-[10px]'>
                            <span className='min-w-[20%]'>관심 태그</span>
                            <ul className='flex gap-[20px] mobile:gap-[4px] mobile:text-[10px] flex-wrap'>
                                <li>
                                    <button className='font-bold bg-[#e0e0e0] px-[20px] py-[3px] mobile:px-[9px] mobile:py-[6px] rounded-full'>FrontEnd</button>
                                </li>
                                <li>
                                    <button className='font-bold bg-[#e0e0e0] px-[20px] py-[3px] mobile:px-[9px] mobile:py-[6px] rounded-full'>AI</button>
                                </li>
                                <li>
                                    <button className='font-bold bg-[#e0e0e0] px-[20px] py-[3px] mobile:px-[9px] mobile:py-[6px] rounded-full'>AI</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className='flex justify-center gap-[20px] mt-[50px] mobile:mt-[25px] text-[14px] mobile:text-[12px] text-white'>
                        <button className='font-bold px-[30px] py-[10px] mobile:px-[15px] mobile:py-[5px] bg-blue-200 rounded-full'>등록하기</button>
                        <button className='font-bold px-[30px] py-[10px] mobile:px-[15px] mobile:py-[5px] bg-red-300 rounded-full'>취소</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProfileEdit;