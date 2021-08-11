import React from "react";
import { SidebarData } from "./SidebarData";
import Sidebaritem from "./Sidebar_item";
import "./style.css";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList" id="Sidebar_List">
        {SidebarData.map((val, key) => {
          return <Sidebaritem valz={val} keyz={key}></Sidebaritem>;
        })}
        <li id="5">
          <img
            src="/g_bank.jpg"
            alt=""
            onClick={zuragclick}
            className="zurag"
          />
        </li>
      </ul>
      <div className="myinfo">Made with ❤️ by Buyanovic</div>
    </div>
  );
}

function zuragclick() {
  window.open("https://www.golomtbank.com/");
}
export default Sidebar;
