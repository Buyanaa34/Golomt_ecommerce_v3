import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Button = (props) => {
  var towch;
  const towchdarah = () => {
    props.onclk();
  };
  const nehemjlel = () => {
    props.onclk_1();
  };
  const other_towchdarah = () => {
    window.open("https://ecommerce.golomtbank.com:8443/payment/mn/invoice");
    // window.open(
    //   "https://www.golomtbank.com/",
    //   "popUpWindow",
    //   "height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no"
    // );
    return false;
  };
  if (props.txt == "See more") {
    towch = (
      <button className="button" onClick={other_towchdarah}>
        <span id="button_txt">{props.txt}</span>
      </button>
    );
  } else if (props.txt == "Нэхэмжлэл дуудах") {
    towch = (
      <button className="button" onClick={nehemjlel}>
        <span id="button_txt">{props.txt}</span>
      </button>
    );
  } else if (props.txt == "Submit") {
    towch = (
      <button className="button" onClick={towchdarah}>
        <span id="button_txt">{props.txt}</span>
      </button>
    );
  } else {
    towch = (
      <Link to="/" className="row">
        <button className="button">
          <span id="button_txt">{props.txt}</span>
        </button>
      </Link>
    );
  }
  return <div>{towch}</div>;
};

export default Button;
