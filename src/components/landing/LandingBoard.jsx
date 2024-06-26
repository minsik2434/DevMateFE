import React from "react";
import LandingList from "./LandingList";

function LandingBoard({ heading, style ,order}) {
  return (
    <div className={`${order}`}>
      <div>
        <h2 className={`text-[#121212] ${style} desktop:p-3 tablet:p-3 mobile:p-2 font-medium rounded-md`}>
          {heading}
        </h2>
        <LandingList/>
        <LandingList />
        <LandingList />
        <LandingList />
        <LandingList />
      </div>
    </div>
  );
}

export default LandingBoard;
