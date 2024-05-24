import React from 'react';
import { useState , useEffect} from 'react';
import apiFunction from '@/util/apiFunction';
import InputField from '@/components/sign/InputField';
import profileDefaultImg from '@/assets/profileicon.png';
import Interests from '@/components/Interests';
import Edit from '@/components/profile/Edit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProfileEdit() {
    const nav = useNavigate();
    const [responseInterests, setResponseInterests] = useState([]);

    useEffect(()=>{
        const getInterests = async () =>{
            try{
                const responseData = (await apiFunction.getData("http://localhost:8080/interests")).data.data;
                setResponseInterests(responseData);
            }
            catch(error){
                console.log(error);
            }
        };  
        getInterests();
    },[]);

    const [inputValues, setInputValues] = useState({
        name: "",
        nickName: "",
        imgUrl: "test.png",
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

    const updateSelectedInterests = (value) =>{
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            interests : prevInputValues.interests.includes(value) ? 
            prevInputValues.interests.filter(id => id !=value ) :
            [...prevInputValues.interests, value]
        }));
    }
    
    const auth = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZXIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNzE2NjI2Mzk5fQ.M40nvTq-Pi5VTvdnpMuWj_ciM-FhRanWYKONN7g8vko";


    const onSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.patch("http://localhost:8080/members", inputValues,
                {
                    headers:{
                        Authorization: `Bearer ${auth}`
                    }
                }
            );
            console.log(response);
        }
        catch(error){
            console.log(error);
        }
    }

  return (
    <div>
        <section className='flex justify-center py-[20px]'>     
            <div className='w-[60%] mobile:w-[95%] max-w-[1150px]'>
                <h2 className='text-[30px] mobile:text-[20px] text-center font-bold'>프로필 수정</h2>
                <div className='mt-[50px] mobile:mt-[25px] justify-center'>
                    <form onSubmit={onSubmit}>
                        <Edit onChange={onChange} selected={updateSelectedInterests}/>
                        <div className='flex justify-center gap-[20px] mt-[50px] mobile:mt-[25px] text-[14px] mobile:text-[12px] text-white'>
                            <button type='submit' className='font-bold px-[30px] py-[10px] mobile:px-[15px] mobile:py-[5px] bg-blue-200 rounded-full'>등록하기</button>
                            <button type='button'
                                onClick={()=>nav("/profile")}
                                className='font-bold px-[30px] py-[10px] mobile:px-[15px] mobile:py-[5px] bg-red-300 rounded-full'>취소</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProfileEdit;