import React from 'react'
import logo from "../assets/Logo.png"
function Signup() {
  return (
    <div className='m-auto desktop:w-[540px] laptop:w-[540px] mobile:w-[300px] desktop:my-[80px] laptop:my-[80px] mobile:my-[28px]'>
        <div className='flex flex-col gap-[16px]'>
            <h2 className='mt-10 text-center text-[20px]'>Sign up</h2>
            <div>
                <ul className='flex flex-col desktop:gap-[23px] laptop:gap-[23px] mobile:gap-[13px]'>
                    <li>
                        <label className='sr-only' htmlFor='id'>id</label>  
                        <input id="id" placeholder='Id' className='placeholder-[#2f2f2f] desktop:text-[14px] laptop:text-[14px] mobile:text-[10px] w-full border-[#d1d1d1] border desktop:px-[30px] laptop:px-[30px] desktop:py-[13.5px] laptop:py-[13.5px] mobile:px-[10px] mobile:py-[8px] rounded-md'/>
                    </li>
                    <li>
                        <label className='sr-only' htmlFor='pw'>password</label>
                        <input id="pw" placeholder='Password' className='placeholder-[#2f2f2f] desktop:text-[14px] laptop:text-[14px] mobile:text-[10px] w-full border-[#d1d1d1] border desktop:px-[30px] laptop:px-[30px] desktop:py-[13.5px] laptop:py-[13.5px] mobile:px-[10px] mobile:py-[8px] rounded-md'/>
                    </li>
                    <li>
                        <label className='sr-only' htmlFor='con_pw'>confirm password</label>
                        <input id='con_pw' placeholder='Confirm Password' className='placeholder-[#2f2f2f] desktop:text-[14px] laptop:text-[14px] mobile:text-[10px] w-full border-[#d1d1d1] border desktop:px-[30px] laptop:px-[30px] desktop:py-[13.5px] laptop:py-[13.5px] mobile:px-[10px] mobile:py-[8px] rounded-md'/>
                    </li>
                    <li>
                        <label className='sr-only' htmlFor='name'>name</label>
                        <input id='name' placeholder='Name' className='placeholder-[#2f2f2f] desktop:text-[14px] laptop:text-[14px] mobile:text-[10px] w-full border-[#d1d1d1] border desktop:px-[30px] laptop:px-[30px] desktop:py-[13.5px] laptop:py-[13.5px] mobile:px-[10px] mobile:py-[8px] rounded-md'/>
                    </li>
                    <li>
                        <label className='sr-only' htmlFor='nick'>NickName</label>
                        <input id='nick' placeholder='NickName' className='placeholder-[#2f2f2f] desktop:text-[14px] laptop:text-[14px] mobile:text-[10px] w-full border-[#d1d1d1] border desktop:px-[30px] laptop:px-[30px] desktop:py-[13.5px] laptop:py-[13.5px] mobile:px-[10px] mobile:py-[8px] rounded-md'/>
                    </li>
                </ul>
            </div>
            <div className='flex items-center'>
                <p className='desktop:text-[14px] laptop:text-[14px] mobile:text-[12px]'>경력자이신가요?</p>
                <input type='checkbox' className='ml-2'/>
            </div>
            <div>
                <p className='desktop:text-[14px] laptop:text-[14px] mobile:text-[12px]'>관심 분야</p>
                <ul className='flex desktop:gap-[12px] laptop:gap-[12px] mobile:gap-[7px] w-full justify-center flex-wrap mt-3'>
                    <li>
                        <button className='font-bold bg-[#e0e0e0] rounded-full desktop:px-[23px] laptop:px-[23px] desktop:py-[13px] laptop:py-[13px] mobile:px-[16px] mobile:py-[6px] text-center text-white desktop:text-[14px] laptop:text-[14px] mobile:text-[10px]'>FrontEnd</button>
                    </li>
                    <li>
                        <button className='font-bold bg-[#e0e0e0] rounded-full desktop:px-[23px] laptop:px-[23px] desktop:py-[13px] laptop:py-[13px] mobile:px-[16px] mobile:py-[6px] text-center text-white desktop:text-[14px] laptop:text-[14px] mobile:text-[10px]'>BackEnd</button>
                    </li>
                    <li>
                        <button className='font-bold bg-[#e0e0e0] rounded-full desktop:px-[23px] laptop:px-[23px] desktop:py-[13px] laptop:py-[13px] mobile:px-[16px] mobile:py-[6px] text-center text-white desktop:text-[14px] laptop:text-[14px] mobile:text-[10px]'>AI</button>
                    </li>
                    <li>
                        <button className='font-bold bg-[#e0e0e0] rounded-full desktop:px-[23px] laptop:px-[23px] desktop:py-[13px] laptop:py-[13px] mobile:px-[16px] mobile:py-[6px] text-center text-white desktop:text-[14px] laptop:text-[14px] mobile:text-[10px]'>Game</button>
                    </li>
                    <li>
                        <button className='font-bold bg-[#e0e0e0] rounded-full desktop:px-[23px] laptop:px-[23px] desktop:py-[13px] laptop:py-[13px] mobile:px-[16px] mobile:py-[6px] text-center text-white desktop:text-[14px] laptop:text-[14px] mobile:text-[10px]'>FullStack</button>
                    </li>
                    <li>
                        <button className='font-bold bg-[#e0e0e0] rounded-full desktop:px-[23px] laptop:px-[23px] desktop:py-[13px] laptop:py-[13px] mobile:px-[16px] mobile:py-[6px] text-center text-white desktop:text-[14px] laptop:text-[14px] mobile:text-[10px]'>DBA</button>
                    </li>
                </ul>
            </div>
            <div className='mobile:mt-[18px]'>
                <button className='bg-[#828282] w-full font-bold text-white desktop:text-[14px] laptop:text-[14px] mobile:text-[10px]  desktop:py-[17px] laptop:py-[17px] mobile:py-[7px] rounded-[5px]'>SIGNUP</button>
            </div>
            <div className='flex items-center gap-1'>
                <p className='desktop:text-[12px] laptop:text-[12px] mobile:text-[8px]'>이미 회원이십니까?</p>
                <a href='/'><p className='underline font-bold desktop:text-[12px] laptop:text-[12px] mobile:text-[8px]'>Login</p></a>
            </div>
        </div>
    </div>
  )
}

export default Signup;