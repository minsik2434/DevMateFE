import React from "react";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center">
      <Link to="/">
        <h1>
          <img src={logo} alt="데브 메이트 바로가기" className="w-28" />
        </h1>
      </Link>

      <input type="search" className="border rounded-full" />
    </div>
  );
}

export default Header;
