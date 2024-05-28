import React from 'react'
import { useState } from 'react'

function TagEdit({onTags}) {
    const [tags, setTags] = useState([]);
    const removeLastTag = () => {
        setTags(tags.slice(0, -1));
        onTags(tags);
    };

    const addTags = (e) =>{
        const inputValue = e.target.value;
        if(e.key==='Enter' && inputValue !=='' && !tags.includes(inputValue)) {       
            setTags([...tags, inputValue]);
            e.target.value='';
        }
        onTags(tags);
    }
    
    const handleKeyDown = (e) => {
        const inputValue = e.target.value;
        if (e.key === 'Backspace' && inputValue === '') {
            removeLastTag();
        }
    };
  return (
    <>
        <ul className='flex gap-[10px]'>
            {tags.map((tag, index)=>{
                return (
                    <li key={index} className='text-nowrap'><span className='bg-[#CED4DA] px-[10px] py-[3px] rounded-md'>{tag}</span></li>
                )
            })}
        </ul>
        <label className='sr-only' htmlFor='tag'>tag</label>
        <input id='tag'
            onKeyUp={(e) => {{ addTags(e)}}}
            onKeyDown={handleKeyDown}
            placeholder='태그를 입력하세요' className='w-full focus:outline-none placeholder:text-[16px] text-[16px]'/> 
    </>
  )
}

export default TagEdit