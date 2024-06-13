import React from "react";
import { useParams } from "react-router-dom";
import CategoryBoard from "./CategoryBoard";
import Error404 from "../Error404";

function CategoryBoardCheck() {
  const { category } = useParams();
  const isValidCategory = ["qna", "community", "job", "review"].includes(
    category
  );
  return isValidCategory ? <CategoryBoard /> : <Error404 />;
}

export default CategoryBoardCheck;
