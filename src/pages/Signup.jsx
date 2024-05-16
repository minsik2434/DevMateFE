import React from 'react'
import logo from "../assets/Logo.png"
function Signup() {
  return (
    <div className='flex justify-center py-[50px] mobile:py-[28px]'>
        <div className='w-[38%] mobile:w-[80%] mobile:max-w-[400px] desktop:max-w-[730px]'>
            <div className='flex flex-col gap-[16px]'>
                <h2 className='text-center text-[20px] font-bold'>Sign up</h2>
                <div>
                    <ul className='flex flex-col gap-[23px] mobile:gap-[13px] text-[14px] mobile:text-[10px]'>
                        <li>
                            <label className='sr-only' htmlFor='id'>id</label>  
                            <input id="id" placeholder='Id' className='placeholder-[#2f2f2f] w-full border-[#d1d1d1] border px-[30px] py-[14px] mobile:px-[10px] mobile:py-[8px] rounded-md'/>
                        </li>
                        <li>
                            <label className='sr-only' htmlFor='pw'>password</label>
                            <input id="pw" placeholder='Password' className='placeholder-[#2f2f2f] w-full border-[#d1d1d1] border px-[30px] py-[14px] mobile:px-[10px] mobile:py-[8px] rounded-md'/>
                        </li>
                        <li>
                            <label className='sr-only' htmlFor='con_pw'>confirm password</label>
                            <input id='con_pw' placeholder='Confirm Password' className='placeholder-[#2f2f2f] w-full border-[#d1d1d1] border px-[30px] py-[14px] mobile:px-[10px] mobile:py-[8px] rounded-md'/>
                        </li>
                        <li>
                            <label className='sr-only' htmlFor='name'>name</label>
                            <input id='name' placeholder='Name' className='placeholder-[#2f2f2f] w-full border-[#d1d1d1] border px-[30px] py-[14px] mobile:px-[10px] mobile:py-[8px] rounded-md'/>
                        </li>
                        <li>
                            <label className='sr-only' htmlFor='nick'>NickName</label>
                            <input id='nick' placeholder='NickName' className='placeholder-[#2f2f2f] mobile:text-[10px] w-full border-[#d1d1d1] border px-[30px] py-[14px] mobile:px-[10px] mobile:py-[8px] rounded-md'/>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <p className='text-[14px] mobile:text-[12px]'>경력자이신가요?</p>
                    <input type='checkbox' className='ml-2'/>
                </div>
                <div>
                    <p className='text-[14px] mobile:text-[12px]'>관심 분야</p>
                    <ul className='flex gap-[12px] mobile:gap-[7px] w-full justify-center flex-wrap mt-3 text-white text-[14px] mobile:text-[10px]'>
                        <li>
                            <button className='font-bold bg-[#e0e0e0] rounded-full px-[23px] py-[13px] mobile:px-[16px] mobile:py-[6px]'>FrontEnd</button>
                        </li>
                        <li>
                            <button className='font-bold bg-[#e0e0e0] rounded-full px-[23px] py-[13px] mobile:px-[16px] mobile:py-[6px]'>BackEnd</button>
                        </li>
                        <li>
                            <button className='font-bold bg-[#e0e0e0] rounded-full px-[23px] py-[13px] mobile:px-[16px] mobile:py-[6px]'>AI</button>
                        </li>
                        <li>
                            <button className='font-bold bg-[#e0e0e0] rounded-full px-[23px] py-[13px] mobile:px-[16px] mobile:py-[6px]'>Game</button>
                        </li>
                        <li>
                            <button className='font-bold bg-[#e0e0e0] rounded-full px-[23px] py-[13px] mobile:px-[16px] mobile:py-[6px]'>FullStack</button>
                        </li>
                        <li>
                            <button className='font-bold bg-[#e0e0e0] rounded-full px-[23px] py-[13px] mobile:px-[16px] mobile:py-[6px]'>DBA</button>
                        </li>
                    </ul>
                </div>
                <div className='mobile:mt-[18px]'>
                    <button className='bg-[#828282] w-full font-bold text-white text-[14px] mobile:text-[10px] py-[17px] mobile:py-[7px] rounded-[5px]'>SIGNUP</button>
                </div>
                <div className='flex items-center gap-1'>
                    <p className='text-[12px] mobile:text-[8px]'>이미 회원이십니까?</p>
                    <a href='/'><p className='underline font-bold text-[12px] mobile:text-[8px]'>Login</p></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup;