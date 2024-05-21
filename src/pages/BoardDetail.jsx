import Viewerbox from "@/components/Viewerbox";
import profileImg from "@/assets/profile.png";
import commentImg from "@/assets/comment.png";
import goodImg from "@/assets/good.png";
import viewImg from "@/assets/view.png";
import penImg from "@/assets/pen.png";
import React from "react";

function BoardDetail() {
  return (
    <div>
      <header className="h-[80px] mobile:h-[100px]">
        {" "}
        {/* 헤더 예상 크기*/}
      </header>
      <section className="flex justify-center">
        <div className="desktop:w-[80%] laptop:w-[80%] mobile:w-[80%] border-t border-[#9b9b9b] flex mobile:flex-col mobile:items-center">
          <div className="w-[67%] mobile:w-full border-r pt-[46px] pl-[20px] mobile:px-[10px] mobile:pt-[26px] border-[#9b9b9b] mobile:border-none">
            {/* 게시판 div*/}
            <div className="w-[92%] mobile:w-full">
              <h1 className="font-bold text-black desktop:text-[20px] laptop:text-[18px] mobile:text-[15px]">
                큰일이 났습니다 도와주세요
              </h1>
              <div className="flex gap-[30px] mobile:gap-[20px] desktop:text-[14px] laptop:text-[12px] mobile:text-[8px] desktop:mt-[18px] laptop:mt-[15px] mobile:mt-[10px]">
                <span className="font-bold text-[#9B9B9B]">
                  2024.05.01 작성
                </span>
                <div>
                  <span>조회수 :</span>
                  <span>10</span>
                </div>
                <div>
                  <span>추천수 :</span>
                  <span>10</span>
                </div>
              </div>
              <div className="desktop:mt-[40px] laptop:mt-[30px] mobile:mt-[12px] ">
                <Viewerbox />
              </div>
              <div className="mt-[29px]">
                <ul className="flex text-[13px] mobile:text-[8px] gap-[16px] font-bold">
                  <li>
                    <div className="bg-[#d9d9d9] desktop:px-[16px] laptop:px-[14px] mobile:px-[9px] mobile:py-[3px] desktop:py-[4px] laptop:py-[2px] rounded-xl">
                      <span>C++</span>
                    </div>
                  </li>
                  <li>
                    <div className="bg-[#d9d9d9] desktop:px-[16px] laptop:px-[14px] mobile:px-[9px] mobile:py-[3px] desktop:py-[4px] laptop:py-[2px] rounded-xl">
                      <span>Java</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="desktop:hidden laptop:hidden border border-black rounded-[20px] px-[16px] py-[20px] mt-[27px]">
                <div className="flex items-center">
                  <img src={profileImg} className="w-[30px]"></img>
                  <span className="ml-[14px] text-[14px]">최민식</span>
                </div>
                <ul className="flex items-center flex-wrap mt-[10px]  gap-[16px] font-bold">
                  <span className="text-[13px]">관심 분야</span>
                  <li>
                    <div className="bg-[#d9d9d9] text-[10px] px-[9px] py-[3px] rounded-xl">
                      <span>C++</span>
                    </div>
                  </li>
                  <li>
                    <div className="bg-[#d9d9d9] text-[10px] px-[9px] py-[3px] rounded-xl">
                      <span>Java</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* 댓글 창 div */}
            <div className="border-t border-[#9b9b9b] mt-[7.5%] py-[5%] px-[9%] mobile:px-0 flex flex-col items-center">
              <div className="w-full desktop:h-[140px] laptop:h-[110px] px-[7%] pt-[20px] mobile:hidden border border-[#9b9b9b] rounded-lg">
                <div className="flex gap-[30px] items-center">
                  <img
                    src={profileImg}
                    className="desktop:w-[65px] laptop:w-[42px]"
                  />
                  <label htmlFor="comment" className="sr-only"></label>
                  <input
                    id="comment"
                    placeholder="댓글을 작성해보세요"
                    className="w-[80%] desktop:py-[12px] laptop:py-[8px] px-[13px] laptop:placeholder:text-[12px] desktop:placeholder:text-[14px] placeholder:font-bold border border-[#9b9b9b] rounded-lg"
                  />
                </div>
              </div>
              <div className="laptop:hidden desktop:hidden w-full border flex py-[24px] justify-around items-center border-[#9b9b9b] rounded-lg">
                <img src={profileImg} className="w-[10%]" />
                <label htmlFor="comment" className="sr-only"></label>
                <input
                  id="comment"
                  placeholder="댓글을 작성해보세요"
                  className="w-[60%] px-[10px] py-[3px] placeholder:text-[10px] placeholder:font-bold border border-[#9b9b9b] rounded-lg"
                />
                <button className="px-[5px] py-[4px] border border-black rounded-md">
                  <img src={penImg} className="w-[21px]"></img>
                </button>
              </div>
              <div className="w-full desktop:mt-[42px] laptop:mt-[21px] mobile:mt-[20px]">
                <ul>
                  <li>
                    <div className="w-full border-b border-[#9b9b9b] py-[10px] px-[38px] mobile:px-0">
                      <div className="flex items-center">
                        <img
                          src={profileImg}
                          className="w-[40px] mobile:w-[23px]"
                        />
                        <strong className="ml-[14px] desktop:text-[20px] laptop:text-[16px] mobile:text-[14px]">
                          최민식
                        </strong>
                        <div className="ml-[45px] text-[10px] mobile:ml-[20px] mobile:text-[8px]">
                          <span>10</span>
                          <span>분전</span>
                        </div>
                      </div>
                      <p className="mt-[16px] mobile:mt-[9px] desktop:text-[14px] laptop:text-[12px] mobile:text-[10px]">
                        큰일났습니다 도와주세요 어려운 문제가 있습니다 혼나게
                        생겼습니다
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-[3%] py-[3%] desktop:w-[33%] laptop:w-[33%] mobile:w-full">
            <div className="mobile:hidden desktop:w-full laptop:w-full desktop:px-[50px] laptop:px-[40px] desktop:pt-[25px] laptop:pt-[20px] desktop:pb-[50px] laptop:pb-[40px] border border-black rounded-[20px]">
              <div className="flex items-center">
                <img
                  src={profileImg}
                  className="desktop:w-[60px] laptop:w-[42px]"
                ></img>
                <strong className="ml-[14px] desktop:text-[25px] laptop:text-[18px]">
                  최민식
                </strong>
              </div>
              <ul className="flex items-center flex-wrap text-[13px] desktop:mt-[25px] laptop:mt-[20px] gap-[16px] font-bold">
                <span className="desktop:text-[15px] laptop:text-[12px]">
                  관심 분야
                </span>
                <li>
                  <div className="bg-[#d9d9d9] desktop:px-[16px] laptop:px-[12px] desktop:py-[4px] laptop:py-[3px] rounded-xl">
                    <span>C++</span>
                  </div>
                </li>
                <li>
                  <div className="bg-[#d9d9d9] desktop:px-[16px] laptop:px-[12px] desktop:py-[4px] laptop:py-[3px] rounded-xl">
                    <span>Java</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="desktop:w-full laptop:w-full desktop:mt-[60px] laptop:mt-[45px]">
              <div className="border border-black desktop:px-[25px] desktop:py-[20px] laptop:px-[20px] laptop:py-[15px] mobile:px-[16px] mobile:py-[14px] bg-slate-400 rounded-t-lg">
                <h2 className="desktop:text-[20px] laptop:text-[16px] mobile:text-[14px]">
                  스터디
                </h2>
              </div>
              <div className="border border-black rounded-b-lg desktop:px-[20px] desktop:py-[15px] laptop:px-[16px] laptop:py-[12px]">
                <ul className="flex flex-col gap-[20px] mobile:gap-[10px]">
                  <li>
                    <div className="border-b border-[#9b9b9b]">
                      <h2 className="desktop:text-[20px] laptop:text-[15px] mobile:text-[15px]">
                        큰일났습니다
                      </h2>
                      <div className="flex justify-between py-[9px]">
                        <div className="flex">
                          <img
                            src={profileImg}
                            className="desktop:w-[25px] laptop:w-[18px] mobile:w-[23px]"
                          />
                          <span className="desktop:text-[15px] laptop:text-[12px]">
                            최민식
                          </span>
                        </div>
                        <ul className="flex gap-[7px] items-center desktop:text-[12px] laptop:text-[10px] mobile:text-[10px]">
                          <li className="flex">
                            <img
                              src={commentImg}
                              className="desktop:w-[12px] laptop:w-[10px] mobile:w-[12px]"
                            />
                            <span>10</span>
                          </li>
                          <li className="flex">
                            <img
                              src={viewImg}
                              className="desktop:w-[12px] laptop:w-[10px] mobile:w-[12px]"
                            />
                            <span>10</span>
                          </li>
                          <li className="flex">
                            <img
                              src={goodImg}
                              className="desktop:w-[12px] laptop:w-[10px] mobile:w-[12px]"
                            />
                            <span>10</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="border-b border-[#9b9b9b]">
                      <h2 className="desktop:text-[20px] laptop:text-[15px] mobile:text-[15px]">
                        큰일났습니다
                      </h2>
                      <div className="flex justify-between py-[9px]">
                        <div className="flex">
                          <img
                            src={profileImg}
                            className="desktop:w-[25px] laptop:w-[18px] mobile:w-[23px]"
                          />
                          <span className="desktop:text-[15px] laptop:text-[12px]">
                            최민식
                          </span>
                        </div>
                        <ul className="flex gap-[7px] items-center desktop:text-[12px] laptop:text-[10px] mobile:text-[10px]">
                          <li className="flex">
                            <img
                              src={commentImg}
                              className="desktop:w-[12px] laptop:w-[10px] mobile:w-[12px]"
                            />
                            <span>10</span>
                          </li>
                          <li className="flex">
                            <img
                              src={viewImg}
                              className="desktop:w-[12px] laptop:w-[10px] mobile:w-[12px]"
                            />
                            <span>10</span>
                          </li>
                          <li className="flex">
                            <img
                              src={goodImg}
                              className="desktop:w-[12px] laptop:w-[10px] mobile:w-[12px]"
                            />
                            <span>10</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="border-b border-[#9b9b9b]">
                      <h2 className="desktop:text-[20px] laptop:text-[15px] mobile:text-[15px]">
                        큰일났습니다
                      </h2>
                      <div className="flex justify-between py-[9px]">
                        <div className="flex">
                          <img
                            src={profileImg}
                            className="desktop:w-[25px] laptop:w-[18px] mobile:w-[23px]"
                          />
                          <span className="desktop:text-[15px] laptop:text-[12px]">
                            최민식
                          </span>
                        </div>
                        <ul className="flex gap-[7px] items-center desktop:text-[12px] laptop:text-[10px] mobile:text-[10px]">
                          <li className="flex">
                            <img
                              src={commentImg}
                              className="desktop:w-[12px] laptop:w-[10px] mobile:w-[12px]"
                            />
                            <span>10</span>
                          </li>
                          <li className="flex">
                            <img
                              src={viewImg}
                              className="desktop:w-[12px] laptop:w-[10px] mobile:w-[12px]"
                            />
                            <span>10</span>
                          </li>
                          <li className="flex">
                            <img
                              src={goodImg}
                              className="desktop:w-[12px] laptop:w-[10px] mobile:w-[12px]"
                            />
                            <span>10</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="border-b border-[#9b9b9b]">
                      <h2 className="desktop:text-[20px] laptop:text-[15px] mobile:text-[15px]">
                        큰일났습니다
                      </h2>
                      <div className="flex justify-between py-[9px]">
                        <div className="flex">
                          <img
                            src={profileImg}
                            className="desktop:w-[25px] laptop:w-[18px] mobile:w-[23px]"
                          />
                          <span className="desktop:text-[15px] laptop:text-[12px]">
                            최민식
                          </span>
                        </div>
                        <ul className="flex gap-[7px] items-center desktop:text-[12px] laptop:text-[10px] mobile:text-[10px]">
                          <li className="flex">
                            <img
                              src={commentImg}
                              className="desktop:w-[12px] laptop:w-[10px] mobile:w-[12px]"
                            />
                            <span>10</span>
                          </li>
                          <li className="flex">
                            <img
                              src={viewImg}
                              className="desktop:w-[12px] laptop:w-[10px] mobile:w-[12px]"
                            />
                            <span>10</span>
                          </li>
                          <li className="flex">
                            <img
                              src={goodImg}
                              className="desktop:w-[12px] laptop:w-[10px] mobile:w-[12px]"
                            />
                            <span>10</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default BoardDetail;
