import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Sidebaritem(props) {
  return (
    <li style={{ listStyle: "none" }} id={props.valz.id}>
      <Link to={props.valz.url} className="row" id={props.keyz}>
        <div id="icon">{props.valz.icon}</div>{" "}
        <div id="name">{props.valz.name}</div>
      </Link>
    </li>
  );
}

export default Sidebaritem;
