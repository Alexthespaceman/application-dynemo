import React from "react";
import slideMenu from "../functions/slideMenuFunction";
import Menu from "./Menu";

function Header(props) {
  return (
    <div className="header">
      <Menu slideMenu={slideMenu} />
    </div>
  );
}

export default Header;
