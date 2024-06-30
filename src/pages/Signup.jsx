import React from "react";
import InputField from "@/components/sign/InputField";
import SingUpButton from "@/components/sign/SignButton";
import { useState, useEffect, useCallback, useLayoutEffect } from "react";
import Interests from "@/components/Interests";
import { useNavigate, Link } from "react-router-dom";

import { debounce } from "lodash";
import useInterestStore from "@/stores/InterestInfo";
import { getData, postData } from "@/util/Crud";

import check from "@/public/icon/check.svg";
import uncheck from "@/public/icon/uncheck.svg";
import logo from "@/public/logo_main.png";
import Signin from "./Signin";
import { useRef } from "react";
import { toast } from "react-hot-toast";

function Signup() {
  const { interestsInfo, setInterestsInfo } = useInterestStore();

  const [showModal, setShowModal] = useState(false);
  const modalBackground = useRef();

  const nav = useNavigate();

  //회원가입 데이터
  const [inputValues, setInputValues] = useState({
    loginId: "",
    password: "",
    confirmPassword: "",
    name: "",
    nickName: "",
    experienced: false,
    interests: [],
  });

  //비밀번호확인 유효성 검사
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const updateSelectedInterests = (value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      interests: prevInputValues.interests.includes(value)
        ? prevInputValues.interests.filter((id) => id != value)
        : [...prevInputValues.interests, value],
    }));
  };

  //유효성 검사
  const validateLoginId = (loginId) => {
    const loginIdPattern = /^[a-z0-9_-]{5,20}$/;
    return loginIdPattern.test(loginId);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^[A-Za-z\d!@#$%^&*]{8,16}$/;
    return passwordPattern.test(password);
  };

  const validateName = (name) => {
    const namePattern = /^[A-Za-z가-힣]{2,}$/;
    return namePattern.test(name);
  };

  const validateNickName = (nickName) => {
    const nickNamePattern = /^[A-Za-z가-힣]{2,}$/;
    return nickNamePattern.test(nickName);
  };

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

          if (validateLoginId(value)) {
            checkDuplicate(name, value, (errorMessage) => {
              setInputValues((prevInputValues) => ({
                ...prevInputValues,
                loginIdError: errorMessage,
              }));
            });
          }
        }

        if (name === "password") {
          newInputValues.passwordError = value
            ? validatePassword(value)
              ? ""
              : "비밀번호는 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해야 합니다."
            : "";
        }

        if (name === "name") {
          newInputValues.nameError = value
            ? validateName(value)
              ? ""
              : "이름은 2글자 이상의 영문 대/소문자 또는 한글이어야 합니다."
            : "";
        }

        if (name === "nickName") {
          newInputValues.nickNameError = value
            ? validateNickName(value)
              ? ""
              : "닉네임은 2글자 이상의 영문 대/소문자 또는 한글이어야 합니다."
            : "";

          if (validateNickName(value)) {
            checkDuplicate(name, value, (errorMessage) => {
              setInputValues((prevInputValues) => ({
                ...prevInputValues,
                nickNameError: errorMessage,
              }));
            });
          }
        }
        return newInputValues;
      });
    }, 300), // 300ms 디바운스 타임 설정
    []
  );

  const onChange = (e) => {
    const { value, name, type, checked } = e.target;
    debouncedChangeHandler(name, value, type, checked);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      inputValues.loginIdError ||
      inputValues.passwordError ||
      passwordMismatch ||
      inputValues.nameError ||
      inputValues.nickNameError
    ) {
      toast.error(`조건에 맞게 입력해주세요`, {
        duration: 2000,
      });
      return;
    }
    try {
      await postData(
        `${import.meta.env.VITE_API_URL}/members/register`,
        inputValues
      );
      alert(`성공적으로 가입되었습니다`);
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  const checkDuplicate = async (name, value, callback) => {
    try {
      const response = await getData(
        `${import.meta.env.VITE_API_URL}/members/${value}/check?type=${name}`
      );

      if (response.data === "Duplicate") {
        callback(
          name === "loginId"
            ? "이미 사용 중인 아이디입니다."
            : "이미 사용 중인 닉네임입니다."
        );
      } else {
        callback(""); // No error if not duplicate
      }
    } catch (error) {
      console.log(error);
    }
  };

  //관심 항목 데이터
  useLayoutEffect(() => {
    const setInterests = async () => {
      const responseData = (
        await getData(`${import.meta.env.VITE_API_URL}/interests`)
      ).data;
      setInterestsInfo(responseData);
    };
    setInterests();
  }, [setInterestsInfo]);

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
        // nickNameError:""
      });
    };
  }, []);

  // 이미지 클릭 시 experienced 상태 토글 함수
  const toggleExperienced = () => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      experienced: !prevInputValues.experienced,
    }));
  };

  // console.log(Boolean(inputValues.nickNameError))
  return (
    <div className="flex justify-center py-[50px] mobile:py-[28px]">
      <div className="w-[38%] mobile:w-[80%] mobile:max-w-[400px] desktop:max-w-[470px]">
        <div className="flex flex-col items-center desktop:gap-[80px] tablet:gap-[60px] mobile:gap-10">
          <h2 className="text-center text-[20px] font-bold">
            <Link to="/">
              <img
                src={logo}
                alt="SignUp"
                className="desktop:w-56 tablet:w-48 mobile:w-32"
              />
            </Link>
          </h2>
          <form onSubmit={onSubmit}>
            <div>
              <ul className="flex flex-col gap-[30px] mobile:gap-[13px] text-[14px] mobile:text-[10px]">
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
                <div>
                  <InputField
                    id="name"
                    placeholder="Name"
                    type="signUp_text"
                    name="name"
                    value={inputValues.name}
                    onChange={onChange}
                  />
                  {inputValues.nameError && (
                    <p className="text-red-500 text-sm mt-2 ml-2">
                      {inputValues.nameError}
                    </p>
                  )}
                </div>
                <div>
                  <InputField
                    id="nick"
                    placeholder="Nick Name"
                    type="signUp_text"
                    name="nickName"
                    value={inputValues.nickName}
                    onChange={onChange}
                  />
                  {inputValues.nickNameError && (
                    <p className="text-red-500 text-sm mt-2 ml-2">
                      {inputValues.nickNameError}
                    </p>
                  )}
                </div>
              </ul>
            </div>
            <div className="flex items-center mt-8">
              <p className="text-[15px] mobile:text-[12px]">경력자이신가요?</p>
              <input
                type="checkbox"
                className="ml-2 sr-only"
                value={inputValues.experienced}
                name="experienced"
                onChange={onChange}
              />
              <div
                onClick={toggleExperienced}
                className="cursor-pointer desktop:w-[28px] tablet:w-[28px] mobile:w-[24px] ml-3"
              >
                {inputValues.experienced ? (
                  <img src={check} alt="Checked" />
                ) : (
                  <img src={uncheck} alt="Unchecked" />
                )}
              </div>
            </div>
            <div className="mt-8">
              <span className="text-[15px] mobile:text-[12px]">관심 분야</span>
              <Interests
                onSelected={updateSelectedInterests}
                selected={inputValues.interests}
                type="signUp"
              />
            </div>
            <div className="mt-[60px] mobile:mt-[18px]">
              <SingUpButton text="SIGNUP" type="submit" />
            </div>
          </form>
          <div className="flex items-center gap-1 justify-center desktop:mt-10">
            <p className="text-[12px] mobile:text-[8px] text-[#868E96]">
              이미 계정이 있으신가요?
            </p>

            <button
              type="button"
              className="underline font-bold text-[12px] mobile:text-[8px]"
              onClick={() => setShowModal(true)}
            >
              로그인하기
            </button>
            {showModal && (
              <div
                className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-blend-darken bg-black bg-opacity-50 z-50"
                ref={modalBackground}
                onClick={(e) => {
                  if (e.target === modalBackground.current) {
                    setShowModal(false);
                  }
                }}
              >
                <Signin />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
