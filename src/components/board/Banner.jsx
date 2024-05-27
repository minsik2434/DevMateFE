import React from "react";

function Banner({ heading, exp }) {
  return (
    <div className="desktop:max-w-[1240px] m-auto flex flex-col font-medium px-8 py-4 mt-20 mb-10 bg-gradient-to-t from-[#E6E6FA] to-[#EDEDED]">
      <span className="text-lg">{heading}</span>
      <p>{exp}</p>
    </div>
  );
}

export default Banner;
