import React from 'react'
import logo from "../assets/Logo.png"
import InputField from '@/components/sign/InputField';
import SingUpButton from '@/components/sign/SignButton';
import apiFunction from '@/util/apiFunction';
import { useState, useEffect } from 'react';
import Interests from '@/components/Interests';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const nav = useNavigate();
    const [inputValues, setInputValues] = useState({
        loginId: "",
        password: "",
        confirmPassword: "",
        name: "",
        nickName: "",
        experienced: false,
        interests: []
    });
    
    const onChange = (e) =>{
        const {value , name, type, checked} =e.target;
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [name] : type === 'checkbox' ? checked : value,
        }));
    }


    const onSubmit = async (e) =>{
        e.preventDefault();
        try{
            await apiFunction.postData("http://localhost:8080/members/register", inputValues);
            alert(`성공적으로 가입되었습니다`);
            nav("/");
        }
        catch(error){
            console.log(error);
        }
    }

    const updateSelectedInterests = (value) =>{
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            interests : prevInputValues.interests.includes(value) ? 
            prevInputValues.interests.filter(id => id !=value ) :
            [...prevInputValues.interests, value]
        }));
    }

  return (
    <div className='flex justify-center py-[50px] mobile:py-[28px]'>
        <div className='w-[38%] mobile:w-[80%] mobile:max-w-[400px] desktop:max-w-[730px]'>
            <div className='flex flex-col gap-[16px]'>
                <h2 className='text-center text-[20px] font-bold'>Sign up</h2>
                <form onSubmit={onSubmit}>
                    <div>
                        <ul className='flex flex-col gap-[23px] mobile:gap-[13px] text-[14px] mobile:text-[10px]'>
                            <InputField id="id" placeholder="Id" type="signUp_text" name="loginId" 
                                        value={inputValues.loginId} onChange={onChange}/>
                            <InputField id="pw" placeholder="Password" type="signUp_pw" name="password"
                                        value={inputValues.password} onChange={onChange}/>
                            <InputField id="con_pw" placeholder="Confirm Password" type="signUp_pw" name="confirmPassword"
                                        value={inputValues.confirmPassword} onChange={onChange}/>
                            <InputField id="name" placeholder="Name" type="signUp_text" name="name"
                                        value={inputValues.name} onChange={onChange}/>
                            <InputField id="nick" placeholder="Nick Name" type="signUp_text"  name="nickName"
                                        value={inputValues.nickName} onChange={onChange}/>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-[14px] mobile:text-[12px]'>경력자이신가요?</p>
                        <input type='checkbox' className='ml-2' value={inputValues.experienced} name ="experienced"
                                onChange={onChange}/>
                    </div>
                    <div>
                        <span className='text-[14px] mobile:text-[12px]'>관심 분야</span>
                        <Interests selected={updateSelectedInterests} type="signUp"/>
                    </div>
                    <div className='mt-[30px] mobile:mt-[18px]'>
                        <SingUpButton text="SIGNUP" type="submit"/>
                    </div>
                </form>
                <div className='flex items-center gap-1'>
                    <p className='text-[12px] mobile:text-[8px]'>이미 회원이십니까?</p>
                    <a href='/'><p className='underline font-bold text-[12px] mobile:text-[8px]'>Login</p></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup;