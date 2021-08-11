import React from "react";
import Form from "../form/Form";
import { withRouter } from "react-router-dom";
import Button from "../button/Button";
import axios from "axios";
var crypto = require("crypto");
const Inquiry = (props) => {
  let isfilled = true;
  const massiv = []; //onchange event deer input field-d bga utgiig uurtuu hadgalah massiv
  massiv.length = 4; //massiv-n urt
  massiv[0] = "inquiry";
  const changed_fnc = (event) => {
    massiv[event.target.id] = event.target.value; //massiv-n [id] dahi slot-d tuhain id-tai input-n value-g hiij bn
  };
  const clk = () => {
    var i = 1;
    for (i; i < massiv.length; i++) {
      if (massiv[i] == null || massiv[i] === "") {
        window.alert("Please fill all the boxes !");
        isfilled = false;
        break;
      }
      isfilled = true;
    }
    if (isfilled) {
      const options = {
        headers: {
          Authorization: "Bearer " + massiv[2], //eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQSEhfVEVTVCIsImlhdCI6MTYwMjgxNDc3MH0.VKNh4ItU5Eduq3tPhX_B3BoB6B2qM0ifGZxyhGlAJT4,
          "Content-Type": "application/json",
        },
      };
      var ts = massiv[1]; //"1623826300587";
      axios
        .post(
          "/api/inquiry",
          {
            checksum: crypto
              .createHmac("sha256", massiv[3])
              .update(ts + ts)
              .digest("hex"),
            transactionId: ts,
          },
          options
        )
        .then((res) => {
          props.history.push({
            pathname: "/showdata",
            ugugdul: "inquiry",
            bankCode: res.data.bankCode,
            amount: res.data.amount,
            errorCode: res.data.errorCode,
            errorDesc: res.data.errorDesc,
            checksum: res.data.checksum,
            cardHolder: res.data.cardHolder,
            transactionId: res.data.transactionId,
            cardNumber: res.data.cardNumber,
            status: res.data.status,
            token: res.data.token,
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
          });
          console.log(error);
        });
    }
  };

  return (
    <div className="pagez">
      <h1 className="welcoming">Гүйлгээ</h1>
      <div className="form_holder">
        {/* <Form changed={changed_fnc} placeholder="checksum" id="1" /> */}
        <Form
          turul="any"
          changed={changed_fnc}
          placeholder="transaction_id"
          id="1"
        />
        <Form
          turul="any"
          changed={changed_fnc}
          placeholder="Authorization"
          id="2"
        />
        <Form turul="any" changed={changed_fnc} placeholder="HMAC" id="3" />
      </div>
      <Button onclk={clk} txt="Submit" whichcomp="inquiry"></Button>
    </div>
  );
};

export default withRouter(Inquiry);
