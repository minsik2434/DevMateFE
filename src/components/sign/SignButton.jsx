import React from 'react'

function LoginButton({text, type}) {
  
  return (
    <button className='font-bold text-white text-[14px] mobile:text-[10px] 
    bg-[#868E96] w-full py-[17px] mobile:py-[7px] rounded-[5px] hover:bg-[#495057]' type={type}>{text}</button>
  )
}

export default LoginButton