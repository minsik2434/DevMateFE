import React from "react";
import { useState, useEffect } from "react";
import Edit from "@/components/profile/Edit";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import useInterestStore from "@/stores/InterestInfo";
import { getData, patchData, postFormData } from "@/util/Crud";
function ProfileEdit() {
  const nav = useNavigate();
  const { setInterestsInfo } = useInterestStore();
  const [cookies] = useCookies();
  const [inputValues, setInputValues] = useState({
    name: "",
    nickName: "",
    imgUrl: "",
    experienced: false,
    interests: [],
  });

  const toggleExperienced = () => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      experienced: !prevInputValues.experienced,
    }));
  };

  const [imgFile, setImgFile] = useState();

  useEffect(() => {
    const setInterests = async () => {
      const responseData = (
        await getData(`${import.meta.env.VITE_API_URL}/interests`)
      ).data;
      setInterestsInfo(responseData);
    };
    setInterests();
  }, [setInterestsInfo]);

  useEffect(() => {
    const getMember = async () => {
      try {
        const responseData = (
          await getData(`${import.meta.env.VITE_API_URL}/members`, {
            Authorization: `${cookies.grantType} ${cookies.accessToken}`,
          })
        ).data;
        setInputValues(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    getMember();
  }, [cookies.accessToken, cookies.grantType]);

  const onChange = (e) => {
    const { value, name, type, checked } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const updateSelectedInterests = (value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      interests: prevInputValues.interests.includes(value)
        ? prevInputValues.interests.filter((id) => id != value)
        : [...prevInputValues.interests, value],
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = inputValues.imgUrl;
      if (imgFile) {
        imageUrl = await uploadImage(imgFile);
      }
      const updatedValues = { ...inputValues, imgUrl: imageUrl };
      await patchData(
        `${import.meta.env.VITE_API_URL}/members`,
        updatedValues,
        {
          Authorization: `${cookies.grantType} ${cookies.accessToken}`,
        }
      );
      alert("수정이 완료되었습니다");
      nav("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (file) => {
    try {
      const url = await (
        await postFormData(
          `${import.meta.env.VITE_API_URL}/image/upload`,
          file,
          {
            "Content-Type": "multipart/form-data",
            Authorization: `${cookies.grantType} ${cookies.accessToken}`,
          }
        )
      ).data;
      return url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="flex justify-center py-[20px]">
        <div className="w-[60%] mobile:w-[95%] max-w-[750px] tablet:min-w-[600px]">
          <h2 className="text-[30px] mobile:text-[20px] text-center font-bold">
            프로필 수정
          </h2>
          <div className="mt-[50px] mobile:mt-[25px] justify-center">
            <form onSubmit={onSubmit}>
              <Edit
                onChange={onChange}
                onSelected={updateSelectedInterests}
                values={inputValues}
                toggle={toggleExperienced}
                setImgFile={setImgFile}
              />
              <div className="flex justify-center gap-[20px] mt-[50px] mobile:mt-[25px] text-[14px] mobile:text-[12px]">
                <button
                  type="submit"
                  className="font-bold px-[30px] py-[10px] mobile:px-[15px] mobile:py-[5px] bg-gray_8 hover:bg-gray_9 rounded-full text-gray_0"
                >
                  저장하기
                </button>
                <button
                  type="button"
                  onClick={() => nav("/profile")}
                  className="font-bold px-[30px] py-[10px] mobile:px-[15px] mobile:py-[5px] bg-gray_1 rounded-full text-gray_8 hover:bg-gray_2"
                >
                  취소
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfileEdit;
