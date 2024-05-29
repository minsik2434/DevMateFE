import React from 'react'
import logoImg from '../assets/Logo.png';

function Logo() {
  return (
    <div className='flex justify-center'><img src={logoImg} className='mobile:w-[60px]'/></div>
  )
}

export default Logo