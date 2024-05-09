import React from 'react'

function Login() {
  return (
    <div className='laptop:w-[475px] laptop:h-[540px] mobile:w-[300px] mobile:h-[320px] px-[30px] py-[58px] bg-white rounded-xl'>
        <div>
            {/*TODO 로고 */}
        </div>
        <div>
            <ul className='flex flex-col laptop:gap-[30px] mobile:gap-[14px]'>
                <li>
                    <label className='sr-only' htmlFor='id'>id</label>  
                    <input id="id" placeholder='Id' className='placeholder-[#2f2f2f] laptop:text-[14px] mobile:text-[10px] w-full border-[#d1d1d1] border laptop:px-[20px] laptop:py-[19px] mobile:px-[10px] mobile:py-[8px] rounded-md'/>
                </li>
                <li>
                    <label className='sr-only' htmlFor='pw'>pw</label>
                    <input id="pw" placeholder='Password' className='placeholder-[#2f2f2f] laptop:text-[14px] mobile:text-[10px] w-full border-[#d1d1d1] border laptop:px-[20px] laptop:py-[19px] mobile:px-[10px] mobile:py-[8px] rounded-md'/>
                </li>
            </ul>
        </div>
        <div>
            <ul className='flex justify-center laptop:gap-[22px] mobile:gap-[30px] mt-[17px] laptop:text-[12px] mobile:text-[10px]'>
                <li>
                    <a href='/'><p>아이디 찾기</p></a>
                </li>
                <li>
                    <a href='/'><p>비밀번호 찾기</p></a>
                </li>
                <li>
                    <a href='/'><p>회원가입</p></a>
                </li>
            </ul>
        </div>
        <div className='laptop:mt-[42px] mobile:mt-[14px]'>
            <button className='font-bold text-white laptop:text-[14px] mobile:text-[10px] bg-[#828282] w-full laptop:py-[17px] mobile:py-[7px] rounded-[5px]'>LOGIN</button>
        </div>
    </div>
  )
}

export default Login;