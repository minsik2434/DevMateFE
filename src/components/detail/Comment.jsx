import React from 'react'
import profileImg from "@/assets/profile.png";
import penImg from "@/assets/pen.png";
function Comment() {

  return (
    <div className="border-t border-[#9b9b9b] mt-[40px] py-[30px] px-[50px] mobile:px-0 flex flex-col items-center">
        <div className="w-full px-[30px] py-[20px] border border-[#9b9b9b] rounded-lg">
        <div className="flex gap-[30px] items-center mobile:gap-[10px]">
            <img src={profileImg} className="w-[50px] mobile:w-[30px]" />
            <label htmlFor="comment" className="sr-only"></label>
            <input
            id="comment"
            placeholder="댓글을 작성해보세요"
            className="w-full py-[10px] mobile:py-[3px] px-[13px] placeholder:text-[14px] mobile:placeholder:text-[10px] placeholder:font-bold border border-[#9b9b9b] rounded-lg"
            />
            <button className="tablet:hidden desktop:hidden p-[7px] rounded-md border border-[#9b9b9b]">
            <img src={penImg} className="w-[20px]" />
            </button>
        </div>
        <div className="text-end mt-[15px] mobile:hidden">
            <button className="border px-[30px] py-[10px] border-black rounded-[30px]">
            댓글 작성
            </button>
        </div>
        </div>
        <div className="w-full mt-[21px] mobile:mt-[20px]">
        <ul>
            <li>
            <div className="w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0">
                <div className="flex items-center">
                <img
                    src={profileImg}
                    className="w-[40px] mobile:w-[23px]"
                />
                <strong className="ml-[14px] text-[18px] mobile:text-[14px]">
                    최민식
                </strong>
                <div className="ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]">
                    <span>10 분전</span>
                </div>
                </div>
                <p className="mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]">
                큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게
                생겼습니다
                </p>
            </div>
            </li>
            <li>
            <div className="w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0">
                <div className="flex items-center">
                <img
                    src={profileImg}
                    className="w-[40px] mobile:w-[23px]"
                />
                <strong className="ml-[14px] text-[18px] mobile:text-[14px]">
                    최민식
                </strong>
                <div className="ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]">
                    <span>10 분전</span>
                </div>
                </div>
                <p className="mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]">
                큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게
                생겼습니다
                </p>
            </div>
            </li>
            <li>
            <div className="w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0">
                <div className="flex items-center">
                <img
                    src={profileImg}
                    className="w-[40px] mobile:w-[23px]"
                />
                <strong className="ml-[14px] text-[18px] mobile:text-[14px]">
                    최민식
                </strong>
                <div className="ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]">
                    <span>10 분전</span>
                </div>
                </div>
                <p className="mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]">
                큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게
                생겼습니다
                </p>
            </div>
            </li>
            <li>
            <div className="w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0">
                <div className="flex items-center">
                <img
                    src={profileImg}
                    className="w-[40px] mobile:w-[23px]"
                />
                <strong className="ml-[14px] text-[18px] mobile:text-[14px]">
                    최민식
                </strong>
                <div className="ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]">
                    <span>10 분전</span>
                </div>
                </div>
                <p className="mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]">
                큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게
                생겼습니다
                </p>
            </div>
            </li>
            <li>
            <div className="w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0">
                <div className="flex items-center">
                <img
                    src={profileImg}
                    className="w-[40px] mobile:w-[23px]"
                />
                <strong className="ml-[14px] text-[18px] mobile:text-[14px]">
                    최민식
                </strong>
                <div className="ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]">
                    <span>10 분전</span>
                </div>
                </div>
                <p className="mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]">
                큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게
                생겼습니다
                </p>
            </div>
            </li>
            <li>
            <div className="w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0">
                <div className="flex items-center">
                <img
                    src={profileImg}
                    className="w-[40px] mobile:w-[23px]"
                />
                <strong className="ml-[14px] text-[18px] mobile:text-[14px]">
                    최민식
                </strong>
                <div className="ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]">
                    <span>10 분전</span>
                </div>
                </div>
                <p className="mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]">
                큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게
                생겼습니다
                </p>
            </div>
            </li>
            <li>
            <div className="w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0">
                <div className="flex items-center">
                <img
                    src={profileImg}
                    className="w-[40px] mobile:w-[23px]"
                />
                <strong className="ml-[14px] text-[18px] mobile:text-[14px]">
                    최민식
                </strong>
                <div className="ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]">
                    <span>10 분전</span>
                </div>
                </div>
                <p className="mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]">
                큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게
                생겼습니다
                </p>
            </div>
            </li>
            <li>
            <div className="w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0">
                <div className="flex items-center">
                <img
                    src={profileImg}
                    className="w-[40px] mobile:w-[23px]"
                />
                <strong className="ml-[14px] text-[18px] mobile:text-[14px]">
                    최민식
                </strong>
                <div className="ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]">
                    <span>10 분전</span>
                </div>
                </div>
                <p className="mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]">
                큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게
                생겼습니다
                </p>
            </div>
            </li>
            <li>
            <div className="w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0">
                <div className="flex items-center">
                <img
                    src={profileImg}
                    className="w-[40px] mobile:w-[23px]"
                />
                <strong className="ml-[14px] text-[18px] mobile:text-[14px]">
                    최민식
                </strong>
                <div className="ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]">
                    <span>10 분전</span>
                </div>
                </div>
                <p className="mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]">
                큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게
                생겼습니다
                </p>
            </div>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Comment