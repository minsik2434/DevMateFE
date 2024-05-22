import React from 'react'
import { Link } from "react-router-dom";

function LinkList({links}) {
  return (
    <div>
        <ul className='flex justify-center gap-[40px] mobile:gap-[30px] mt-[17px] text-[14px] mobile:text-[10px]'>
            {links.map(link => (
                <li key={link.to}>
                    <Link to={link.to}>{link.text}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default LinkList;