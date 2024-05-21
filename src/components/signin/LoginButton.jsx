import React from 'react'

function LoginButton({text, type}) {
  return (
    <button className='font-bold text-white text-[14px] mobile:text-[10px] 
    bg-[#828282] w-full py-[17px] mobile:py-[7px] rounded-[5px]' type={type}>{text}</button>
  )
}

export default LoginButton