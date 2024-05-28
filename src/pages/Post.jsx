import Header from '@/components/Header'
import ContentEdit from '@/components/post/ContentEdit';
import useLoginInfoStore from '@/stores/loginInfo';
import React from 'react'
import { useEffect,useState,useRef } from 'react';
import { useCookies } from 'react-cookie';

function Post() {
  const editorRef = useRef();
  const [cookies] = useCookies();
  const {setGrantType, setAccessToken, setRefreshToken} = useLoginInfoStore();
  const [postValues, setPostValues] = useState({
    title : "",
    tag : [],
    content : "",
  })

  const setTitle = (e) =>{
    setPostValues((prevValues)=>({
      ...prevValues,
      title : e.target.value
    }))
  }

  const onTags = (value)=>{
    setPostValues((prevValues)=>({
      ...prevValues,
      tag : value
    }))
  }

  const setContent = (value) =>{
    setPostValues((prevValues) =>({
      ...prevValues,
      content : value
    })) 
  }
  
  const handleClick = () => {
    setPostValues((prevValues) =>({
      ...prevValues,
      content:editorRef.current.getInstance().getHTML()
    }))
  };

  useEffect(()=>{
    const savedTokenInfo = () =>{
      setGrantType(cookies.grantType);
      setAccessToken(cookies.accessToken);
    }
    savedTokenInfo();
  },[])
  console.log(postValues);
  return (
    <div>
        <header>
            <Header />
        </header>
        <section className='flex justify-center py-[50px]'>
          <div className='w-[60%] mobile:w-[95%] max-w-[1150px]'>
            <div className='w-full px-[60px] py-[16px] mobile:px-[16px] mobile:py-[10px] bg-[#6eceda] rounded-lg'>
              <h2 className='text-[25px] mobile:text-[15px] font-bold'>Q&A</h2>
              <p className='text-[15px] mobile:text-[10px] font-bold'>동료들과 함께 문제를 해결해보아요</p>
            </div>
              <ContentEdit onTags={onTags} setContent={setContent} setTitle={setTitle}/>
            <div className='flex justify-end gap-[43px] mobile:gap-[18px] mt-[42px] mobile:mt-[20px]'>
              <button onClick={handleClick} className='px-[30px] mobile:px-[20px] py-[10px] mobile:py-[6px] bg-[#979797] text-white font-bold rounded-md'>등록</button>
              <button className='px-[30px] mobile:px-[20px] py-[10px] mobile:py-[6px] border border-[#979797] text-black font-bold rounded-md'>취소</button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Post