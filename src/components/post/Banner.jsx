import React from 'react'

function Banner({heading, exp, style}) {
  return (
        <div className={`w-full px-[60px] py-[16px] mobile:px-[16px] mobile:py-[10px] rounded-lg ${style}`}>
            <h2 className='text-[25px] mobile:text-[15px] font-bold'>{heading}</h2>
            <p className='text-[15px] mobile:text-[10px] font-bold'>{exp}</p>
        </div>
  )
}

export default Banner