import React from "react";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import BoardBody from "@/components/detail/BoardBody";
import { useParams } from "react-router-dom";
import apiFunction from "@/util/apiFunction";
import RightBox from "@/components/detail/RightBox";
import MobileProfileBox from "@/components/detail/MobileProfileBox";
import Comment from "@/components/detail/Comment";
import { useCookies } from "react-cookie";
import useLoginInfoStore from "@/stores/loginInfo";

function BoardDetail() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [postData, setPostData] = useState({});
  const [cookies] = useCookies();
  const param = useParams();
  const {setGrantType, setAccessToken} = useLoginInfoStore();
  const [comments, setComments] = useState([]);
  const [writerData, setWriterData] = useState({
    nickName: "",
    imgUrl: "",
    interests: [],
  });

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderHeight(header.offsetHeight);
  }, []);

  useEffect(() =>{
    setGrantType(cookies.grantType);
    setAccessToken(cookies.accessToken);
  },[cookies.accessToken, cookies.grantType, setAccessToken, setGrantType])

  useEffect(() => {
    const getData = async () => {
      try {
        const responsePostData = await (
          await apiFunction.getData(
            `${import.meta.env.VITE_API_URL}/post/${param.id}`
          )
        ).data.data;
        setPostData(responsePostData);
        const memberResponseData = await (
          await apiFunction.getData(
            `${import.meta.env.VITE_API_URL}/members/${responsePostData.writer.nickName}`
          )
        ).data.data;
        setWriterData(memberResponseData);
      } catch (error) {
        console.log(error);
      }
    };

    const getCommentList = async () => {
      try{
          const responseData = (await apiFunction.getData(`${import.meta.env.VITE_API_URL}/comments/${param.id}`)).data.data;
          setComments(responseData);
      }
      catch(error){
          console.log(error);
      }
  }
    if (param.id) {
      getData();
      getCommentList();
    }
  }, [param.id]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="flex justify-center">
        <div className="w-[80%] mobile:w-[95%] max-w-[1200px] flex mobile:flex-col mobile:items-center relative">
          {/* <button type="button" className="absolute left-[420px] top-[91px]"><img src={goodImg} className="w-[30px]"></img></button> */}
          <div className="w-[65%] mobile:w-full border-r pt-[46px] mobile:px-[10px] mobile:pt-[26px] border-[#9b9b9b] mobile:border-none"> 
            <div className="flex justify-start px-[20px] mobile:px-0">
              <div className="w-full">
                <BoardBody data={postData} />
                <MobileProfileBox writerData={writerData}/>
              </div>
            </div>
            <Comment comments={comments}/>
          </div>
          <div className="w-[35%] mobile:w-full pt-[30px]">
            <RightBox headerHeight={headerHeight} writerData={writerData}/>
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default BoardDetail;
