import React from 'react'
import EditorBox from '../Editorbox'
import TagEdit from './TagEdit'

function ContentEdit({onTags, setContent, setTitle, postValues}) {
  return (
    <ul className='flex flex-col gap-[40px] mobile:gap-[14px] mt-[55px] mobile:mt-[30px]'>
        <li>
            <label className='sr-only' htmlFor='title'>title</label>
            <input id='title' onChange={setTitle} value={postValues.title} placeholder='제목을 입력하세요' className='w-full focus:outline-none placeholder:font-bold placeholder:text-[25px] mobile:placeholder:text-[20px] text-[25px] mobile:text-[20px] font-bold'/>
        </li>
        <li className='flex gap-[10px]'>
            <TagEdit onTags={onTags} tags={postValues.tags}/>
        </li>
        <li>
            <EditorBox setContent={setContent} content={postValues.content}/>
        </li>
  </ul>
  )
}

export default ContentEdit