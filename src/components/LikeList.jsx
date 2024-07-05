// import React, { useState, useEffect } from "react";
// import like_full from "@/assets/icon/like_full.png";
// import like_empty from "@/assets/icon/like_empty.png";
// import { deleteData, getData, postData } from "@/util/Crud";
// import useLoginInfoStore from "@/stores/loginInfo";
// import useLike from "@/stores/useLike";
// import { toast } from "react-hot-toast";

// function LikeList({postId}) {
//   const { likeState, likes, setLikes, reset } = useLike();
//   const { accessToken, grantType } = useLoginInfoStore();

//   const handleIsLike = async () => {
//     try {
//       // if (!likeState?.id) {
//       //   return;
//       // }

//       console.log(postId)
//       const response = await getData(
//         `${import.meta.env.VITE_API_URL}/goods/${likeState.id}`,
//         {
//           Authorization: `${grantType} ${accessToken}`,
//         }
//       );

//       console.log(response);
//       // setLikes({
//       //   isLike: true,
//       //   likeId: response.data["goodId"],
//       // });
//     } catch (error) {
//       if (!accessToken) {
//         setLikes({ isLike: false, likeId: "" });
//       }
//       if (error.response["status"] === "400") {
//         setLikes({ isLike: false, likeId: "" });
//       }
//     }
//   };

//   const handleClickLike = async (e) => {
//     e.preventDefault();

//     if (!likeState) {
//       return;
//     }

//     try {
//       const response = await postData(
//         `${import.meta.env.VITE_API_URL}/goods/${likeState.id}`,
//         {},
//         {
//           Authorization: `${grantType} ${accessToken}`,
//         }
//       );
//       setLikes({
//         isLike: true,
//         likeId: response.data["goodId"],
//       });
//     } catch (error) {
//       // console.log(error);
//       toast.error("로그인 후 이용해주세요", {
//         icon: "🙏🏻",
//         duration: 2000, // 2초 동안 토스트 메시지가 보여짐
//       });
//     }
//   };

//   const handleRemoveLike = async (e) => {
//     e.preventDefault();
//     try {
//       await deleteData(
//         `${import.meta.env.VITE_API_URL}/goods/${likes.likeId}`,
//         {
//           Authorization: `${grantType} ${accessToken}`,
//         }
//       );
//       setLikes({
//         isLike: false,
//         likeId: "",
//       });
//     } catch (error) {
//       console.log(error.response);
//     }
//   };

//   useEffect(() => {
//     if (postId) {
//       handleIsLike();
//     }
//     return () => {
//       reset();
//     };
//   }, [postId, accessToken]); // postId와 accessToken을 의존성 배열에 포함

//   return (
//     <div className="App">
//       <button onClick={!likes.isLike ? handleClickLike : handleRemoveLike}>
//         <img
//           src={!likes.isLike ? like_empty : like_full}
//           alt={!likes.isLike ? "Like" : "Unlike"}
//         />
//       </button>
//     </div>
//   );
// }

// export default LikeList;

import React, { useState, useEffect } from "react";
import like_full from "@/assets/icon/like_full.png";
import like_empty from "@/assets/icon/like_empty.png";
import { deleteData, getData, postData } from "@/util/Crud";
import useLoginInfoStore from "@/stores/loginInfo";
import useLike from "@/stores/useLike";
import { toast } from "react-hot-toast";

function LikeList() {
  const { likeState, likes, setLikes, reset } = useLike();
  const { accessToken, grantType } = useLoginInfoStore();

  const [postId, setPostId] = useState("");

  const handleIsLike = async () => {
    if (!likeState.id || !accessToken) {
      return;
    }
    try {
      const response = await getData(
        `${import.meta.env.VITE_API_URL}/goods/${likeState.id}`,
        {
          Authorization: `${grantType} ${accessToken}`,
        }
      );

      setPostId(likeState.id);

      setLikes({
        isLike: response.data["isGood"],
        likeId: response.data["goodId"],
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleClickLike = async (e) => {
    e.preventDefault();

    if (!postId || !accessToken) {
      return;
    }

    try {
      const response = await postData(
        `${import.meta.env.VITE_API_URL}/goods/${postId}`,
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
      toast.error("로그인 후 이용해주세요", {
        icon: "🙏🏻",
        duration: 2000,
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
    if (likeState.id && accessToken) {
      handleIsLike();
    }
    return () => {
      reset();
    };
  }, [likeState?.id, accessToken]); // postId와 accessToken을 의존성 배열에 포함

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
