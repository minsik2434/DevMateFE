import React from 'react'
import profileDefaultImg from '@/assets/profileicon.png';
import penImg from '@/assets/pen.png';
import { useNavigate } from 'react-router-dom';
import apiFunction from '@/util/apiFunction';
import useLoginInfoStore from '@/stores/loginInfo';
import { useCookies } from 'react-cookie';
import useInterestsInfo from '@/hooks/useInterestsInfo';
function Inform({value}) {
    const nav = useNavigate();
    const [removeCookie] = useCookies();
    const {grantType, accessToken} = useLoginInfoStore();
    const interests = useInterestsInfo(value.interests);
    const onClick = () =>{
      if(confirm("정말 탈퇴하시겠습니까?") == true){
        if(confirm("탈퇴하면 모든 정보가 사라집니다 그래도 탈퇴하시겠습니까?") == true){
          apiFunction.deleteData(`${import.meta.env.VITE_API_URL}/members`, {
            headers:{
              Authorization :`${grantType} ${accessToken}`
            }
          })
          nav("/");
          removeCookie("grantType");
          removeCookie("accessToken");
        }
      }
    }
  return (
    <div className='py-[52px] mobile:py-[40px] flex gap-[40px] mobile:gap-[13px] border-t border-[#9b9b9b] relative'>
        <div className='min-w-[270px] mobile:min-w-[130px] h-[180px] mobile:h-[78px] border border-[#9b9b9b] px-[40px] py-[10px] rounded-md'>
            <img src={value.imgUrl} className='w-full h-full'></img>
        </div>
        <div className='flex flex-col justify-center'>
            <ul className='flex flex-col gap-[20px] mobile:gap-[8px] text-[18px] mobile:text-[15px]'>
                <li><span>이름 : {value.name}</span></li>
                <li><span>닉네임 : {value.nickName}</span></li>
                <li className='flex gap-[10px]'>
                    <span className='text-nowrap'>관심기술</span>
                    <ul className='flex gap-[20px] mobile:gap-[4px] text-[14px] mobile:text-[10px] flex-wrap'>
                        {interests.map((interest) =>{
                            return (
                                <li key={interest.id}>
                                    <div className='font-bold bg-[#e0e0e0] px-[10px] py-[3px] mobile:px-[9px] mobile:py-[6px] rounded-full'>{interest.name}</div>
                                </li>
                            )
                        })}
                    </ul>
                </li>
            </ul>
        </div>
        <button onClick={()=>nav("/profile/edit")} className='absolute hover:bg-[#495057] hover:text-white bg-slate-300 rounded-md right-0 px-[10px] mobile:px-[5px] py-[3px] mobile:py-[5px]'>
            <span className='mobile:hidden'>수정하기</span> 
            <img src={penImg} className='tablet:hidden desktop:hidden w-[23px]'></img>
        </button>
        <button onClick={onClick} className='absolute bg-red-300 rounded-md right-0 bottom-0 px-[10px] py-[3px] mobile:text-[15px]'>회원탈퇴</button>
    </div>
  )
}

export default Inform