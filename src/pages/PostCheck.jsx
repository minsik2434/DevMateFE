import React from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import Error404 from "./Error404";

function PostCheck() {
  const { category } = useParams();
  const isValidCategory = ["qna", "community", "job", "review"].includes(
    category
  );
  return isValidCategory ? <Post /> : <Error404 />;
}

export default PostCheck;
