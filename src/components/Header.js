import React from "react";
import { Link } from "react-router-dom";
import UserBox from "./user-box";

function Header() {
  return (
    <div className="header_comp">
      <div className="logo">
        <h1>MacBook.legenda</h1>
      </div>
      <ul>
        <li>
          <Link to={""}>Home</Link>
        </li>
        <li>
          <Link to={"about"}>About</Link>
        </li>
        <li>
          <Link to={"blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"contact"}>Contact</Link>
        </li>
      </ul>

      <UserBox />
    </div>
  );
}

export default Header;
