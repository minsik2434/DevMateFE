import React from "react";
import LandingList from "./LandingList";
import { useNavigate } from "react-router-dom";

function LandingBoard({ heading, style, order, data, type }) {
  const nav = useNavigate();
  return (
    <div className={`${order}`}>
      <div>
        <button
          className={`text-[#121212] ${style} w-full text-start desktop:p-3 tablet:p-3 mobile:p-2 font-medium rounded-md`}
          onClick={() => nav(`board/${type}`)}
        >
          {heading}
        </button>
        {data.length < 5
          ? data.map((post) => <LandingList key={post.id} post={post} />)
          : data
              .slice(0, 5)
              .map((post) => <LandingList key={post.id} post={post} />)}
      </div>
    </div>
  );
}

export default LandingBoard;
