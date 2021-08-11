import React from "react";
import "./style.css";
function Form(props) {
  return (
    <div>
      <input
        className="orolt"
        type="text"
        placeholder={props.placeholder}
        id={props.id}
        onChange={props.changed}
      />
    </div>
  );
}
export default Form;
