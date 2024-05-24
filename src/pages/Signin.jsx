import Logo from "@/components/Logo";
import InputField from "@/components/sign/InputField";
import LinkList from "@/components/sign/LinkList";
import LoginButton from "@/components/sign/SignButton";
import useLoginInfoStore from "@/stores/loginInfo";
import apiFunction from "@/util/apiFunction";
import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
function Signin() {
  const [cookies , setCookie, removeCookie] = useCookies([]);
  const [inputValues , setInputValues] = useState({
    loginId:"",
    password: ""
  });
  
  const onChange = (e) =>{
    const {value , name} = e.target;
    setInputValues((prevValues) =>({
      ...prevValues,
      [name] : value
    }))
  }
  const {grantType, accessToken, refreshToken , setGrantType, setAccessToken, setRefeshToken} = useLoginInfoStore()

  const submitLoginForm = async (e) => {
    e.preventDefault();
    try {
      const {grantType, accessToken, refreshToken} = (await apiFunction.postData("http://localhost:8080/members/signin", inputValues)).data.data;
      setGrantType(grantType);
      setAccessToken(accessToken);
      setRefeshToken(refreshToken);
      setCookie('grantType', grantType,{sameSite: 'strict', httpOnly:true , maxAge:88200});
      setCookie('accessToken', accessToken,{sameSite: 'strict', httpOnly:true, maxAge:88200});
      setCookie('refreshToken', refreshToken,{sameSite: 'strict', httpOnly:true, maxAge:88200});
    } catch(error) {
      console.log(error);
    }
  }
  console.log(grantType);
  
  return (
    <div className='w-[475px] desktop:w-[475px] mobile:w-[300px] px-[30px] py-[58px] bg-white rounded-xl'>
        <Logo />
        <form onSubmit={submitLoginForm}>
          <div className="mt-[30px]"> 
            <ul className='flex flex-col gap-[15px] mobile:gap-[14px]'>
                <InputField id="id" placeholder="Id" type="signIn_text" value={inputValues.loginId} name="loginId" onChange={onChange} />
                <InputField id="pw" placeholder="password" type="signIn_pw" value={inputValues.password} name="password" onChange={onChange}/>
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
