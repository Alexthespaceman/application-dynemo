import React from "react";

function Menu(props) {
  return (
    <div>
      <button className="button" onClick={props.slideMenu}></button>
      <div className="menu" id="menu">
        <div className="item-container">
          <div className="menu-item">item 1</div>
          <div className="menu-item">item 2</div>
          <div className="menu-item">item 3</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
