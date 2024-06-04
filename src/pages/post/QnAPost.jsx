import Header from '@/components/Header'
import Banner from '@/components/post/Banner';
import ContentEdit from '@/components/post/ContentEdit';
import useLoginInfoStore from '@/stores/loginInfo';
import apiFunction from '@/util/apiFunction';
import React from 'react'
import { useEffect,useState,useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function QnAPost() {
  const editorRef = useRef();
  const [cookies] = useCookies();
  const nav = useNavigate();
  const {grantType,accessToken,setGrantType, setAccessToken, setRefreshToken} = useLoginInfoStore();
  const [postValues, setPostValues] = useState({
    title : "",
    tags : [],
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
      tags : value
    }))
  }

  const setContent = (value) =>{
    setPostValues((prevValues) =>({
      ...prevValues,
      content : value
    })) 
  }
  
  const handleRegister = async () => {
    try{
      await apiFunction.postDataSetHeader("http://localhost:8080/post/qna",postValues , {
        headers:{
          Authorization: `${grantType} ${accessToken}`
        }
      })
      alert("게시글 등록 완료");
      nav("/board/QnA");
    }catch(error){
      console.log(error);
    }
  };

  useEffect(()=>{
    const savedTokenInfo = () =>{
      setGrantType(cookies.grantType);
      setAccessToken(cookies.accessToken);
    }
    savedTokenInfo();
  },[])

  return (
    <div>
        <header>
            <Header />
        </header>
        <section className='flex justify-center py-[50px]'>
          <div className='w-[60%] mobile:w-[95%] max-w-[750px]'>
            <Banner heading="Q&A" exp="동료들과 문제를 함께 해결해보아요" style="bg-gradient-to-t from-[#98D8DB] to-[#6ECEDA]"/>
            <ContentEdit onTags={onTags} setContent={setContent} setTitle={setTitle}/>
            <div className='flex justify-end gap-[43px] mobile:gap-[18px] mt-[42px] mobile:mt-[20px]'>
              <button onClick={handleRegister} className='px-[30px] mobile:px-[20px] py-[10px] mobile:py-[6px] bg-[#979797] text-white font-bold rounded-md'>등록</button>
              <button onClick={(e) => nav("/board/QnA")}className='px-[30px] mobile:px-[20px] py-[10px] mobile:py-[6px] border border-[#979797] text-black font-bold rounded-md'>취소</button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default QnAPost;