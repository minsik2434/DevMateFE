import profileImg from "@/assets/profile.png";
import commentImg from "@/assets/comment.png";
import goodImg from "@/assets/good.png";
import viewImg from "@/assets/view.png";
import penImg from "@/assets/pen.png";
import React from "react";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import BoardBody from "@/components/detail/BoardBody";
import { useParams } from "react-router-dom";
import apiFunction from "@/util/apiFunction";
import ProfileBox from "@/components/detail/ProfileBox";
function BoardDetail() {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [postData , setPostData] = useState({});
    const [writerData , setWriterData] = useState({
        nickName: "",
        imgUrl: "",
        interests: []
    });
    const params = useParams();

    useEffect(() => {
        const header = document.querySelector("header");
        setHeaderHeight(header.offsetHeight);
    }, []);

    useEffect(()=>{
        const getData = async () =>{
            try{
                const responsePostData = await (await apiFunction.getData(`http://localhost:8080/post/${params.id}`)).data.data;
                setPostData(responsePostData);
                const memberResponseData = await (await apiFunction.getData(`http://localhost:8080/members/${responsePostData.writer}`)).data.data;
                setWriterData(memberResponseData);
            }
            catch(error){
                console.log(error);
            }
        }
        getData();
    },[params.id])

  return (
    <div>
        <header>
            <Header />
        </header>
        <section className='flex justify-center'>
            <div style={{ marginTop: `${headerHeight}px`}} className='w-[80%] mobile:w-[95%] max-w-[980px] flex mobile:flex-col mobile:items-center'>
                <div className='w-[67%] mobile:w-full border-r pt-[46px] mobile:px-[10px] mobile:pt-[26px] border-[#9b9b9b] mobile:border-none'>
                    {/* 게시판 div*/}
                    <div className='flex justify-start px-[20px] mobile:px-0'>
                        <div className='w-full'> 
                            <BoardBody data={postData}/>
                            <div className='desktop:hidden tablet:hidden border border-black rounded-[20px] px-[16px] py-[20px] mt-[27px]'>
                                <div className='flex items-center'>
                                    <img src={profileImg} className='w-[30px]'></img>
                                    <span className='ml-[14px] text-[14px]'>최민식</span>
                                </div>
                                <ul className='flex items-center flex-wrap mt-[10px]  gap-[16px] font-bold'>
                                    <span className='text-[13px]'>관심 분야</span>
                                    <li>
                                        <div className='bg-[#d9d9d9] text-[10px] px-[9px] py-[3px] rounded-xl'>
                                            <span>C++</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div  className='bg-[#d9d9d9] text-[10px] px-[9px] py-[3px] rounded-xl'>
                                            <span>Java</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 댓글 창 div */}
                    <div className='border-t border-[#9b9b9b] mt-[40px] py-[30px] px-[50px] mobile:px-0 flex flex-col items-center'>
                        <div className='w-full px-[30px] py-[20px] border border-[#9b9b9b] rounded-lg'>
                            <div className='flex gap-[30px] items-center mobile:gap-[10px]'>
                                <img src={profileImg} className='w-[50px] mobile:w-[30px]'/>
                                <label htmlFor='comment' className='sr-only'></label>
                                <input id='comment' placeholder='댓글을 작성해보세요' className='w-full py-[10px] mobile:py-[3px] px-[13px] placeholder:text-[14px] mobile:placeholder:text-[10px] placeholder:font-bold border border-[#9b9b9b] rounded-lg'/>
                                <button className='tablet:hidden desktop:hidden p-[7px] rounded-md border border-[#9b9b9b]'><img src={penImg} className='w-[20px]'/></button>
                            </div>
                            <div className='text-end mt-[15px] mobile:hidden'>
                                <button className='border px-[30px] py-[10px] border-black rounded-[30px]'>댓글 작성</button>
                            </div>
                        </div>
                        <div className='w-full mt-[21px] mobile:mt-[20px]'>
                            <ul>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0'>
                                        <div className='flex items-center'>
                                            <img src={profileImg} className='w-[40px] mobile:w-[23px]' />
                                            <strong className='ml-[14px] text-[18px] mobile:text-[14px]'>최민식</strong>
                                            <div className='ml-[45px] text-[12px] mobile:ml-[20px] mobile:text-[8px]'>
                                                <span>10 분전</span>
                                            </div>
                                        </div>
                                        <p className='mt-[16px] mobile:mt-[9px] text-[14px] mobile:text-[10px]'>큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게 생겼습니다</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-[33%] mobile:w-full pt-[30px]'>
                    <ProfileBox headerHeight={headerHeight} writerData={writerData}/>
                </div>
            </div>
        </section>
        <footer>
        </footer>
    </div>
  );
}

export default BoardDetail;
