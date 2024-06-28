import React, { useState, useEffect } from "react";
import like_full from "@/assets/icon/like_full.png";
import like_empty from "@/assets/icon/like_empty.png";
import { deleteData, getData, postData } from "@/util/Crud";
import useLoginInfoStore from "@/stores/loginInfo";
import useLike from "@/stores/useLike";
import { toast } from "react-hot-toast";

function LikeList() {
  const { likeState, likes, setLikes } = useLike();
  const { accessToken, grantType } = useLoginInfoStore();

  const handleIsLike = async () => {
    try {
      const response = await getData(
        `${import.meta.env.VITE_API_URL}/goods/${likeState.id}`,
        {
          Authorization: `${grantType} ${accessToken}`,
        }
      );
      setLikes({
        isLike: true,
        likeId: response.data["goodId"],
      });
    } catch (error) {
      if (!accessToken) {
        setLikes({ isLike: false, likeId: "" });
      }
      if (error.response["status"] === "400") {
        setLikes({ isLike: false, likeId: "" });
      }
    }
  };

  const handleClickLike = async (e) => {
    e.preventDefault();
    try {
      const response = await postData(
        `${import.meta.env.VITE_API_URL}/goods/${likeState.id}`,
        {},
        {
          Authorization: `${grantType} ${accessToken}`,
        }
      );
      setLikes({
        isLike: true,
        likeId: response.data["goodId"],
      });
    } catch (error) {
      // console.log(error);
      toast.error("로그인 후 이용해주세요", {
        icon: "🙏🏻",
        duration: 2000, // 2초 동안 토스트 메시지가 보여짐
      });
    }
  };

  const handleRemoveLike = async (e) => {
    e.preventDefault();
    try {
      await deleteData(
        `${import.meta.env.VITE_API_URL}/goods/${likes.likeId}`,
        {
          Authorization: `${grantType} ${accessToken}`,
        }
      );
      setLikes({
        isLike: false,
        likeId: "",
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    handleIsLike();
  }, [likeState.id, accessToken]);

  return (
    <div className="App">
      <button onClick={!likes.isLike ? handleClickLike : handleRemoveLike}>
        <img
          src={!likes.isLike ? like_empty : like_full}
          alt={!likes.isLike ? "Like" : "Unlike"}
        />
      </button>
    </div>
  );
}

export default LikeList;
