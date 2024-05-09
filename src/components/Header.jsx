import React from "react";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import search from "@/assets/icon/search.svg";

function Header() {
  return (
    <div className="flex items-center mx-24">
      <Link to="/">
        <h1>
          <img src={logo} alt="데브 메이트 바로가기" className="w-36" />
        </h1>
      </Link>

      <div className="relative">
        <label htmlFor="search">
          <img src={search} alt="검색" className="absolute" />
        </label>
        <input id="search" type="search" className="border rounded-full" />
      </div>
    </div>
  );
}

export default Header;
