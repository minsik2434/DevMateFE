import React from 'react'
import { useState } from 'react';

function Interests({items, selected}) {

    const [selectedIds, setSelectedIds] = useState([]);

    const onClick = (id) =>{
        setSelectedIds(()=>{
            if(selectedIds.includes(id)){
                return selectedIds.filter(selectedId => selectedId !== id);
            }
            else{
                return [...selectedIds, id];
            }
        })
        selected(id);
    }

  return (
    <ul className='flex gap-[12px] mobile:gap-[7px] w-full justify-center flex-wrap mt-3 text-white text-[14px] mobile:text-[10px]'>
        {items.map((item)=>{
            const itemClass = selectedIds.includes(item.id)
            ? 'font-bold bg-[#495057] rounded-full px-[20px] py-[8px] mobile:px-[16px] mobile:py-[6px]'
            : 'font-bold bg-[#ADB5BD] rounded-full px-[20px] py-[8px] mobile:px-[16px] mobile:py-[6px]';
            return(
                <li key={item.id}>
                    <button onClick={()=>onClick(item.id)} 
                    type='button' 
                    className={itemClass}>{item.name}</button>
                </li>
            )
        })}
    </ul>
  )
}

export default Interests