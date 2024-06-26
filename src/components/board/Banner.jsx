import React from "react";

function Banner({ heading, exp, style }) {
  return (
    <div className="desktop:max-w-[1240px] tablet:max-w-[768px] mobile:max-w-[320px] m-auto">
      <div
        className={`flex flex-col rounded font-medium px-8 py-4 mobile:px-4 mobile:py-2 desktop:mt-20 tablet:mt-12 mobile:mt-10 desktop:mb-10 ${style}`}
      >
        <span className="text-lg font-extrabold">{heading}</span>
        <p className="mobile:text-xs">{exp}</p>
      </div>
    </div>
  );
}

export default Banner;
