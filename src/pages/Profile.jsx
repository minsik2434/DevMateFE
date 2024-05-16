import Header from '@/components/Header';
import commentImg from '@/assets/comment.png';
import goodImg from '@/assets/good.png';
import viewImg from '@/assets/view.png';
import profileDefaultImg from '@/assets/profileicon.png';
import profileImg from '@/assets/profile.png';
import penImg from '@/assets/pen.png';
import React from 'react';

function Profile() {
  return (
    <div>
        <header>
            <Header/>
        </header>
        <section className='flex justify-center'>
            <div className='w-[60%] mobile:w-[95%]'>
                <div className='py-[52px] mobile:py-[40px] flex gap-[40px] mobile:gap-[13px] border-t border-[#9b9b9b] relative'>
                    <div className='min-w-[270px] mobile:min-w-[130px] h-[180px] mobile:h-[78px] border border-[#9b9b9b] px-[40px] py-[10px] rounded-md'>
                        <img src={profileDefaultImg} className='w-full h-full'></img>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <ul className='flex flex-col gap-[20px] mobile:gap-[8px] text-[18px] mobile:text-[15px]'>
                            <li><span>이름 : 최민식</span></li>
                            <li><span>닉네임 : 민식</span></li>
                            <li className='flex gap-[10px]'>
                                <span className='text-nowrap'>관심기술</span>
                                <ul className='flex gap-[20px] mobile:gap-[4px] text-[18px] mobile:text-[10px] flex-wrap'>
                                    <li>
                                        <div className='font-bold bg-[#e0e0e0] px-[20px] py-[3px] mobile:px-[9px] mobile:py-[6px] rounded-full'>FrontEnd</div>
                                    </li>
                                    <li>
                                        <div className='font-bold bg-[#e0e0e0] px-[20px] py-[3px] mobile:px-[9px] mobile:py-[6px] rounded-full'>AI</div>
                                    </li>
                                    <li>
                                        <div className='font-bold bg-[#e0e0e0] px-[20px] py-[3px] mobile:px-[9px] mobile:py-[6px] rounded-full'>AI</div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <button className='absolute bg-slate-300 rounded-md right-0 px-[10px] mobile:px-[5px] py-[3px] mobile:py-[5px]'><span className='mobile:hidden'>수정하기</span> <img src={penImg} className='laptop:hidden desktop:hidden w-[23px]'></img></button>
                    <button className='absolute bg-red-300 rounded-md right-0 bottom-0 px-[10px] py-[3px] mobile:text-[15px]'>회원탈퇴</button>
                </div>
                <div>
                    <div className='py-[20px] border-b-2 border-[#9b9b9b]'>
                        <span className='font-bold text-[25px] mobile:text-[20px]'>내 활동</span>
                        <ul className='flex gap-[24px] mt-[10px] text-[15px] mobile:text-[12px]'>
                            <li>
                                <button className='border border-black rounded-md px-[22px] mobile:px-[12px] py-[6px] mobile:py-[6px]'>게시한 글</button>
                            </li>
                            <li>
                                <button className='border border-black rounded-md px-[22px] mobile:px-[12px] py-[6px] mobile:py-[6px]'>댓글단 글</button>
                            </li>
                            <li>
                                <button className='border border-black rounded-md px-[22px] mobile:px-[12px] py-[6px] mobile:py-[6px]'>좋아요한 글</button>
                            </li>
                        </ul>                       
                    </div>
                    <div className='py-[15px]'>
                        <ul className='flex flex-col gap-[20px]'>
                            <li>
                                <div className='border-b border-[#9b9b9b]'>
                                    <div className='flex gap-[50px] items-center'>
                                        <h2 className='text-[20px] mobile:text-[15px] font-bold'>큰일났습니다</h2>
                                        <span className='font-bold text-[12px] mobile:text-[10px]'>10분전</span>
                                    </div>
                                    <div className='mt-[5px] text-[15px] mobile:text-[12px]'>
                                        <p>큰일이에요 큰일이 났어요. 도와주세요 큰일이 났어요 큰일났어요 도와주세요</p>
                                    </div>
                                    <div className='flex justify-between py-[9px]'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[35px]'/>
                                            <span className='text-[15px]'>최민식</span>
                                        </div>
                                        <ul className='flex gap-[7px] items-center text-[15px] mobile:text-[12px]'>
                                            <li className='flex'>
                                                <img src={commentImg} className='w-[18px] mobile:w-[15px]'/>
                                                <span>10</span>
                                            </li>
                                            <li className='flex'>
                                                <img src={viewImg} className='w-[18px] mobile:w-[15px]'/>
                                                <span>10</span>
                                            </li>
                                            <li className='flex'>
                                                <img src={goodImg} className='w-[18px] mobile:w-[15px]'/>
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
        </section>
    </div>
  )
}

export default Profile;