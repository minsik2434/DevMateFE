import React from "react";

function Banner({ heading, exp, style }) {
  return (
    <div className="w-full max-w-[1240px]">
      <div
        className={`flex flex-col rounded font-medium px-8 py-4 mobile:px-4 mobile:py-2 desktop:mt-20 tablet:mt-12 mobile:mt-10 desktop:mb-10 mobile:mb-5 ${style}`}
      >
        <span className="text-lg mobile:text-[18px] font-extrabold">
          {heading}
        </span>
        <p className="mobile:text-xs">{exp}</p>
      </div>
    </div>
  );
}

export default Banner;
