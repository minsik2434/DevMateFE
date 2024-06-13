import React from "react";
import logo from "../assets/Logo.png";
import InputField from "@/components/sign/InputField";
import SingUpButton from "@/components/sign/SignButton";
import apiFunction from "@/util/apiFunction";
import { useState, useEffect, useCallback } from "react";
import Interests from "@/components/Interests";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { debounce } from "lodash";

function Signup() {
  const nav = useNavigate();
  const [inputValues, setInputValues] = useState({
    loginId: "",
    password: "",
    confirmPassword: "",
    name: "",
    nickName: "",
    experienced: false,
    interests: [],
  });

  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const debouncedChangeHandler = useCallback(
    debounce((name, value, type, checked) => {
      setInputValues((prevInputValues) => {
        const newInputValues = {
          ...prevInputValues,
          [name]: type === "checkbox" ? checked : value,
        };
        if (name === "password" || name === "confirmPassword") {
          setPasswordMismatch(
            newInputValues.password &&
              newInputValues.confirmPassword &&
              newInputValues.password !== newInputValues.confirmPassword
          );
        }

        if (name === "loginId") {
          newInputValues.loginIdError = value
            ? validateLoginId(value)
              ? ""
              : "아이디는 5~20자의 영문 소문자, 숫자와 특수기호 ( _ , - ) 만 사용 가능합니다."
            : "";
        }

        if (name === "password") {
          newInputValues.passwordError = value
            ? validatePassword(value)
              ? ""
              : "비밀번호는 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해야 합니다."
            : "";
        }
        return newInputValues;
      });
    }, 500), // 300ms 디바운스 타임 설정
    []
  );

  const onChange = (e) => {
    const { value, name, type, checked } = e.target;
    debouncedChangeHandler(name, value, type, checked);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiFunction.postData(
        `${import.meta.env.VITE_API_URL}/members/register`,
        inputValues
      );
      alert(`성공적으로 가입되었습니다`);
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  const updateSelectedInterests = (value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      interests: prevInputValues.interests.includes(value)
        ? prevInputValues.interests.filter((id) => id != value)
        : [...prevInputValues.interests, value],
    }));
  };

  const [errors, setErrors] = useState({
    loginId: "",
    password: "",
  });

  //유효성 검사

  const validateLoginId = (loginId) => {
    const loginIdPattern = /^[a-z0-9_-]{5,20}$/;
    return loginIdPattern.test(loginId);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^[A-Za-z\d!@#$%^&*]{8,16}$/;
    return passwordPattern.test(password);
  };

  // 컴포넌트가 마운트될 때 상태 초기화
  useEffect(() => {
    return () => {
      setInputValues({
        loginId: "",
        password: "",
        confirmPassword: "",
        name: "",
        nickName: "",
        experienced: false,
        interests: [],
      });
    };
  }, []);

  return (
    <div className="flex justify-center py-[50px] mobile:py-[28px]">
      <div className="w-[38%] mobile:w-[80%] mobile:max-w-[400px] desktop:max-w-[470px]">
        <div className="flex flex-col gap-[16px]">
          <h2 className="text-center text-[20px] font-bold">Sign up</h2>
          <form onSubmit={onSubmit}>
            <div>
              <ul className="flex flex-col gap-[23px] mobile:gap-[13px] text-[14px] mobile:text-[10px]">
                <div>
                  <InputField
                    id="id"
                    placeholder="Id"
                    type="signUp_text"
                    name="loginId"
                    value={inputValues.loginId}
                    onChange={onChange}
                  />
                  {inputValues.loginIdError && (
                    <p className="text-red-500 text-sm mt-2 ml-2">
                      {inputValues.loginIdError}
                    </p>
                  )}
                </div>
                <div>
                  <InputField
                    id="pw"
                    placeholder="Password"
                    type="signUp_pw"
                    name="password"
                    value={inputValues.password}
                    onChange={onChange}
                  />
                  {inputValues.passwordError && (
                    <p className="text-red-500 text-sm mt-2 ml-2">
                      {inputValues.passwordError}
                    </p>
                  )}
                </div>
                <div>
                  <InputField
                    id="con_pw"
                    placeholder="Confirm Password"
                    type="signUp_pw"
                    name="confirmPassword"
                    value={inputValues.confirmPassword}
                    onChange={onChange}
                  />
                  {passwordMismatch && (
                    <p className="text-red-500 text-sm mt-2 ml-2">
                      비밀번호가 일치하지 않습니다.
                    </p>
                  )}
                </div>
                <InputField
                  id="name"
                  placeholder="Name"
                  type="signUp_text"
                  name="name"
                  value={inputValues.name}
                  onChange={onChange}
                />
                <InputField
                  id="nick"
                  placeholder="Nick Name"
                  type="signUp_text"
                  name="nickName"
                  value={inputValues.nickName}
                  onChange={onChange}
                />
              </ul>
            </div>
            <div className="flex items-center">
              <p className="text-[14px] mobile:text-[12px]">경력자이신가요?</p>
              <input
                type="checkbox"
                className="ml-2"
                value={inputValues.experienced}
                name="experienced"
                onChange={onChange}
              />
            </div>
            <div>
              <span className="text-[14px] mobile:text-[12px]">관심 분야</span>
              <Interests
                onSelected={updateSelectedInterests}
                selected={inputValues.interests}
                type="signUp"
              />
            </div>
            <div className="mt-[30px] mobile:mt-[18px]">
              <SingUpButton text="SIGNUP" type="submit" />
            </div>
          </form>
          <div className="flex items-center gap-1">
            <p className="text-[12px] mobile:text-[8px]">이미 회원이십니까?</p>
            <a href="/">
              <p className="underline font-bold text-[12px] mobile:text-[8px]">
                Login
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
