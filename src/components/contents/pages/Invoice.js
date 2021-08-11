import React from "react";
import Form from "../form/Form";
import Dropdown from "../dropdown/Dropdown";
import { withRouter } from "react-router-dom";
import Button from "../button/Button";
import "react-dropdown/style.css";
import axios from "axios";
var crypto = require("crypto");
const Invoice = (props) => {
  let isfilled = true;
  const massiv = []; //onchange event deer input field-d bga utgiig uurtuu hadgalah massiv
  massiv[6] = "N";
  massiv[7] = "GET";
  massiv[0] = "invoice";
  massiv.length = 8; //massiv-n urt
  const changed_fnc = (event) => {
    const re = /^[0-9\b]+$/; //only numbers
    if (event.target.id == "1") {
      //only num form bwl ?
      if (event.target.value === "" || re.test(event.target.value)) {
        massiv[event.target.id] = event.target.value; //massiv-n [id] dahi slot-d tuhain id-tai input-n value-g hiij bn]
      } else {
        window.alert("Уг input field-д зөвхөн number value олгоно");
      }
    } else {
      //eswel ?
      massiv[event.target.id] = event.target.value; //massiv-n [id] dahi slot-d tuhain id-tai input-n value-g hiij bn]
    } //massiv-n [id] dahi slot-d tuhain id-tai input-n value-g hiij bn
  };

  const clk = () => {
    var i = 1;
    for (i; i < massiv.length; i++) {
      //input-vvdig hooson baigaa esehiig shalgah heseg
      if (massiv[i] == null || massiv[i] === "") {
        //hooson baiwal dawtaltig zogsoono
        window.alert("Please fill all the boxes !");
        isfilled = false;
        break;
      }
      isfilled = true;
    }
    if (isfilled) {
      const options = {
        headers: {
          Authorization: "Bearer " + massiv[4], //eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQSEhfVEVTVCIsImlhdCI6MTYwMjgxNDc3MH0.VKNh4ItU5Eduq3tPhX_B3BoB6B2qM0ifGZxyhGlAJT4,
          "Content-Type": "application/json",
        },
      };
      var ts = massiv[3]; //Date.now()
      axios
        .post(
          "/api/invoice",
          {
            callback: massiv[2], //"https://google.mn",
            amount: massiv[1], //"0.01",
            checksum: crypto
              .createHmac("sha256", massiv[5])
              .update(ts + massiv[1] + massiv[7] + massiv[2])
              .digest("hex"),
            transactionId: ts,
            returnType: massiv[7], //"GET",
            genToken: massiv[6], // "Y",
          },
          options
        )
        .then((res) => {
          props.history.push({
            pathname: "/showdata",
            ugugdul: "invoice",
            invoice: res.data.invoice,
            checksum: res.data.checksum,
            transactionId: res.data.transactionId,
          });
        })
        .catch((error) => {
          // if (error.response) {
          //   console.log("Response bshde");
          // }
          props.history.push({
            pathname: "/showdata",
            ugugdul: "invoice",
            status: "Error",
            message: error.message,
            body_message: error.response.data.message,
            body_error: error.response.data.error,
            body_path: error.response.data.path,
            body_status: error.response.data.status,
            body_timestamp: error.response.data.timestamp,
          });
        });
    }
  };
  const returntype_options = ["GET", "POST", "MOBILE"];
  const gettoken_options = ["N", "Y"];
  return (
    <div className="pagez">
      <h1 className="welcoming">Нэхэмжлэл</h1>
      <div className="form_holder">
        <Form turul="num" changed={changed_fnc} placeholder="amount" id="1" />
        <Form turul="any" changed={changed_fnc} placeholder="callback" id="2" />
        <Form
          turul="any"
          changed={changed_fnc}
          placeholder="transactionId"
          id="3"
        />
        <Form
          turul="any"
          changed={changed_fnc}
          placeholder="Authorization"
          id="4"
        />
        <Form turul="any" changed={changed_fnc} placeholder="HMAC" id="5" />
        <Dropdown
          id="6"
          songolt={gettoken_options}
          changed={changed_fnc}
          placeholder="genToken"
        ></Dropdown>
        {/* <Form changed={changed_fnc} placeholder="genToken" id="4" /> */}
        <Dropdown
          changed={changed_fnc}
          id="7"
          songolt={returntype_options}
          placeholder="returnType"
        ></Dropdown>
        {/* <Form changed={changed_fnc} placeholder="checksum" id="5" /> */}
        {/* <Form changed={changed_fnc} placeholder="returnType" id="5" /> */}
      </div>
      <Button onclk={clk} whichcomp="invoice" txt="Submit"></Button>
    </div>
  );
};

export default withRouter(Invoice);
