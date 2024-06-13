import Logo from "@/components/Logo";
import InputField from "@/components/sign/InputField";
import LinkList from "@/components/sign/LinkList";
import LoginButton from "@/components/sign/SignButton";
import useLoginInfoStore from "@/stores/loginInfo";
import useMember from "@/stores/member";
import { getData, postData } from "@/util/Crud";
import apiFunction from "@/util/apiFunction";
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
      // const { grantType, accessToken, refreshToken } = (
      //   await apiFunction.postData(
      //     `${import.meta.env.VITE_API_URL}/members/signin`,
      //     inputValues
      //   )
      // ).data.data;

      // const headers = {
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Origin": "*",
      // };

      const response = await postData(
        `${import.meta.env.VITE_API_URL}/members/signin`,
        inputValues
        // headers
      );
      // console.log(response)

      const { grantType, accessToken, refreshToken } = response.data;

      setCookie("grantType", grantType, { sameSite: "strict", maxAge: 88200 });
      setCookie("accessToken", accessToken, {
        sameSite: "strict",
        maxAge: 88200,
      });
      setCookie("refreshToken", refreshToken, {
        sameSite: "strict",
        maxAge: 88200,
      });

      console.log(accessToken);
      console.log(cookies.accessToken);

      // memberInfo();

      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  const memberInfo = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `${cookies["grantType"]} ${cookies["accessToken"]}`,
      };

      const response = await getData(
        `${import.meta.env.VITE_API_URL}/members`,
        headers
      );

      setImgUrl(response.data["imgUrl"]);
      setName(response.data["name"]);
      setNickName(response.data["nickName"]);
    } catch (error) {
      console.log(error);
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
