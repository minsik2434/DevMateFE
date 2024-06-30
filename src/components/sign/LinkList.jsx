import React from "react";
import { Link } from "react-router-dom";

function LinkList({ links }) {
  return (
    <div>
      <div className="flex flex-col gap-5 mobile:gap-[30px] mt-[17px] text-[14px] mobile:text-[10px]">
        {/* {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))} */}

        <div className="flex gap-2 justify-center font-bold">
          {links.slice(0, 1).map(
            (
              link // 첫 번째와 두 번째 링크를 하나의 div로 묶음
            ) => (
              <div key={link.to}>
                <Link to={link.to}>{link.text}</Link>
              </div>
            )
          )}
          <span>|</span>
          {links.slice(1, 2).map(
            (
              link // 첫 번째와 두 번째 링크를 하나의 div로 묶음
            ) => (
              <div key={link.to}>
                <Link to={link.to}>{link.text}</Link>
              </div>
            )
          )}
        </div>
        <div className="flex justify-center gap-2">
          <span className="text-gray_7">아직 계정이 없으신가요?</span>
          {links.slice(2, 3).map(
            (
              link // 세 번째 링크를 별도의 div로 묶음
            ) => (
              <div key={link.to} className="font-bold">
                <Link to={link.to}>{link.text}</Link>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default LinkList;
