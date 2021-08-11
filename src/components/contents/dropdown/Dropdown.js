import React from "react";
import "./style.css";
function Dropdown(props) {
  const values = [];
  props.songolt.forEach((element) => {
    if (element === "English") {
      values.push(<option value="1">{element}</option>);
    } else if (element === "Mongolian") {
      values.push(<option value="2">{element}</option>);
    } else {
      values.push(<option value={element}>{element}</option>);
    }
  });
  return (
    <div className="dropdown">
      <label>{props.placeholder}: </label>
      <select onChange={props.changed} id={props.id} name="gentoken">
        {values}
      </select>
    </div>
  );
}

export default Dropdown;
