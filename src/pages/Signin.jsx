import Logo from "@/components/Logo";
import InputField from "@/components/sign/InputField";
import LinkList from "@/components/sign/LinkList";
import LoginButton from "@/components/sign/SignButton";
import axios from "axios";
import React from "react";
import { useState } from "react";

function Signin() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const submitLoginForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/members/signin', {
        loginId : inputId,
        password : inputPw,
      });
      console.log(response.data.data.accessToken);
    } catch(error) {
      console.log(error);
    }
  }
  
  return (
    <div className='w-[475px] desktop:w-[475px] mobile:w-[300px] px-[30px] py-[58px] bg-white rounded-xl'>
        <Logo />
        <form onSubmit={submitLoginForm}>
          <div className="mt-[30px]"> 
            <ul className='flex flex-col gap-[15px] mobile:gap-[14px]'>
                <InputField id="id" placeholder="Id" type="signIn_text" value={inputId} onChange={setInputId} />
                <InputField id="pw" placeholder="password" type="signIn_pw" value={inputPw} onChange={setInputPw}/>
            </ul>
          </div>
          <div className='mt-[30px] mobile:mt-[14px]'>
              <LoginButton text="LOGIN" type="submit"/>
          </div>
        </form>
        <LinkList links={[
            {to:"/find-id", text:"아이디 찾기"},
            {to:"/find-pw", text:"비밀번호 찾기"},
            {to:"/signup", text:"회원가입"}
        ]}/>
    </div>
  );
}

export default Signin;
