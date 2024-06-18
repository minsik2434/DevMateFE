import Logo from "@/components/Logo";
import InputField from "@/components/sign/InputField";
import LinkList from "@/components/sign/LinkList";
import LoginButton from "@/components/sign/SignButton";
import useLoginInfoStore from "@/stores/loginInfo";
import useMember from "@/stores/member";
import { getData, postData } from "@/util/Crud";
import React from "react";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const nav = useNavigate();

  const { name, nickName, imgUrl, setImgUrl, setName, setNickName } =
    useMember();

  const [inputValues, setInputValues] = useState({
    loginId: "",
    password: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const submitLoginForm = async (e) => {
    e.preventDefault();
    try {
      const response = await postData(
        `${import.meta.env.VITE_API_URL}/members/signin`,
        inputValues
        // headers
      );

      const { grantType, accessToken, refreshToken } = response.data;
      removeCookie("grantType");
      removeCookie("accessToken");
      setCookie("grantType", grantType, {
        sameSite: "strict",
        maxAge: 88200,
        path: "/",
      });
      setCookie("accessToken", accessToken, {
        sameSite: "strict",
        maxAge: 88200,
        path: "/",
      });
      setCookie("refreshToken", refreshToken, {
        sameSite: "strict",
        maxAge: 88200,
        path: "/",
      });

      nav("/");
    } catch (error) {
      console.log(error);
      console.log(error.response)
    }
  };

  return (
    <div className="w-[475px] desktop:w-[475px] mobile:w-[300px] px-[30px] py-[58px] bg-white rounded-xl">
      <Logo />
      <form onSubmit={submitLoginForm}>
        <div className="mt-[30px]">
          <ul className="flex flex-col gap-[15px] mobile:gap-[14px]">
            <InputField
              id="id"
              placeholder="Id"
              type="signIn_text"
              value={inputValues.loginId}
              name="loginId"
              onChange={onChange}
            />
            <InputField
              id="pw"
              placeholder="password"
              type="signIn_pw"
              value={inputValues.password}
              name="password"
              onChange={onChange}
            />
          </ul>
        </div>
        <div className="mt-[30px] mobile:mt-[14px]">
          <LoginButton text="LOGIN" type="submit" />
        </div>
      </form>
      <LinkList
        links={[
          { to: "/find-id", text: "아이디 찾기" },
          { to: "/find-pw", text: "비밀번호 찾기" },
          { to: "/signup", text: "회원가입" },
        ]}
      />
    </div>
  );
}

export default Signin;
