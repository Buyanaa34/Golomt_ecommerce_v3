import React from "react";
import Form from "../form/Form";
import Button from "../button/Button";
import { withRouter } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import axios from "axios";
var crypto = require("crypto");
const Tokens = (props) => {
  const langz = ["English", "Mongolian"];
  let isfilled = true;
  const result_massiv = [];
  const massiv = []; //onchange event deer input field-d bga utgiig uurtuu hadgalah massiv
  massiv.length = 7; //massiv-n urt
  massiv[6] = "1";
  massiv[0] = "tokens";
  const changed_fnc = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.id == "1") {
      //only num form bwl ?
      if (event.target.value === "" || re.test(event.target.value)) {
        massiv[event.target.id] = event.target.value; //massiv-n [id] dahi slot-d tuhain id-tai input-n value-g hiij bn]
      } else {
        window.alert("Only numbers !!!");
      }
    } else {
      //eswel ?
      massiv[event.target.id] = event.target.value; //massiv-n [id] dahi slot-d tuhain id-tai input-n value-g hiij bn]
    }
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
    //sumbit button click hiih ued
    if (isfilled) {
      const options = {
        headers: {
          Authorization: "Bearer " + massiv[4], //eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQSEhfVEVTVCIsImlhdCI6MTYwMjgxNDc3MH0.VKNh4ItU5Eduq3tPhX_B3BoB6B2qM0ifGZxyhGlAJT4,
          "Content-Type": "application/json",
        },
      };
      var ts = massiv[2]; //Date.now();
      axios
        .post(
          "/api/pay",

          {
            callback: "https://google.mn",
            amount: massiv[1], //"29000",
            checksum: crypto
              .createHmac("sha256", massiv[5])
              .update(
                massiv[1] + ts + massiv[3]
                // "2d38f609c868c1b5f94b2320a9a9244897e0cf8176a01ec802e99ed418c3f97b"
              )
              .digest("hex"),
            transactionId: ts,
            token: massiv[3],
            // "2d38f609c868c1b5f94b2320a9a9244897e0cf8176a01ec802e99ed418c3f97b",
          },
          options
        )
        .then((res) => {
          props.history.push({
            pathname: "/showdata",
            ugugdul: "tokens",
            amount: res.data.amount,
            errorCode: res.data.errorCode,
            errorDesc: res.data.errorDesc,
            checksum: res.data.checksum,
            transactionId: res.data.transactionId,
            cardNumber: res.data.cardNumber,
          });
        })
        .catch((error) => {
          props.history.push({
            pathname: "/showdata",
            ugugdul: "tokens",
            status: "Error",
            message: error.message,
            body_message: error.response.data.message,
            body_error: error.response.data.error,
            body_path: error.response.data.path,
            body_status: error.response.data.status,
            body_timestamp: error.response.data.timestamp,
            // message: error,
          });
          console.log(error);
        });
    }
  };
  return (
    <div className="pagez">
      <h1 className="welcoming">Токеноор</h1>
      <div className="form_holder">
        <Form turul="num" changed={changed_fnc} placeholder="amount" id="1" />
        {/* <Form placeholder="checksum" id="2" /> */}
        <Form
          turul="any"
          changed={changed_fnc}
          placeholder="transactionId"
          id="2"
        />
        <Form turul="any" changed={changed_fnc} placeholder="token" id="3" />
        <Form
          turul="any"
          changed={changed_fnc}
          placeholder="Authorization"
          id="4"
        />
        <Form turul="any" changed={changed_fnc} placeholder="HMAC" id="5" />
        <Dropdown
          id="6"
          songolt={langz}
          changed={changed_fnc}
          placeholder="Language"
        ></Dropdown>
      </div>
      <Button txt="Submit" onclk={clk} whichcomp="tokens"></Button>
    </div>
  );
};

export default withRouter(Tokens);
