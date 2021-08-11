import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import { withRouter } from "react-router-dom";
import Lottie from "react-lottie";
import Dropdown from "../dropdown/Dropdown";
import * as loading from "../../../animations/35260-credit-card-fail.json";
import * as loading_success from "../../../animations/9917-success.json";
function Showdata(props) {
  let hasbody = true;
  const defaultOptions = {
    loop: false,
    autoplay: true,
    controls: false,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions_success = {
    loop: false,
    autoplay: true,
    controls: false,
    animationData: loading_success.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  var nehemjlel_array = [];
  nehemjlel_array[0] = "eng";
  nehemjlel_array[1] = "payment";

  const nehemjlel = () => {
    const myurl =
      "https://ecommerce.golomtbank.com:8443/" +
      nehemjlel_array[1] +
      "/" +
      nehemjlel_array[0] +
      "/" +
      props.location.invoice;
    window.open(myurl);
  };

  const changed_fnc = (event) => {
    if (event.target.id === "language_choices") {
      nehemjlel_array[0] = event.target.value;
    } else {
      nehemjlel_array[1] = event.target.value;
    }
  };

  //Response aldaatai bol
  if (props.location.status == "Error") {
    if (props.location.body_error == undefined) {
      hasbody = false;
    } else {
      hasbody = true;
    }
    var tailbar = "Error:" + props.location.message;
    const code_error = (
      <div>
        <section>
          <h1>RESPONSE FAILED FROM {props.location.ugugdul}</h1>
          <Lottie
            options={defaultOptions}
            height={"20%"}
            width={"20%"}
            speed="0.8"
          ></Lottie>
          <div className="show_results_mid">{tailbar}</div>
          {hasbody ? (
            <div className="body_of_response">
              <span className="title_response">RESPONSE</span>
              <div>
                <span>error:</span>
                {props.location.body_error}
              </div>
              <div>
                <span>message:</span>
                {props.location.body_message}
              </div>
              <div>
                <span>path:</span>
                {props.location.body_path}
              </div>
              <div>
                <span>status:</span>
                {props.location.body_status}
              </div>
              <div>
                <span>timestamp:</span>
                {props.location.body_timestamp}
              </div>
            </div>
          ) : (
            <div className="title_response">Response body not found</div>
          )}
          <Button txt="Back"></Button>
        </section>
      </div>
    );
    return <div className="pagez1">{code_error}</div>;
  } else {
    switch (props.location.ugugdul) {
      case "inquiry":
        const code_inquiry = (
          <div>
            <section>
              <h1>Results that came from Гүйлгээ шалгах</h1>
              <div className="show_results">
                <p>
                  <span className="description_holder">
                    Банкны дугаар/bankCode/:
                  </span>
                  {props.location.bankCode}
                </p>
                <p>
                  <span className="description_holder">Хэмжээ/amount/:</span>
                  {props.location.amount}
                </p>
                <p>
                  <span className="description_holder">
                    Алдааны дугаар/errorCode/:
                  </span>
                  {props.location.errorCode}
                </p>
                <p>
                  <span className="description_holder">
                    Алдааны тайлбар/errorDesc/:
                  </span>
                  {props.location.errorDesc}
                </p>
                <p>
                  <span className="description_holder">Checksum:</span>
                  {props.location.checksum}
                </p>
                <p>
                  <span className="description_holder">
                    Карт эзэмшигч/cardHolder/:
                  </span>
                  {props.location.cardHolder}
                </p>
                <p>
                  <span className="description_holder">
                    Гүйлгээний дугаар/TransactionId/:
                  </span>
                  {props.location.transactionId}
                </p>
                <p>
                  <span className="description_holder">
                    Картын дугаар/Card Number/:
                  </span>
                  {props.location.cardNumber}
                </p>
                <p>
                  <span className="description_holder">Status:</span>
                  {props.location.status}
                </p>
                <p>
                  <span className="description_holder">Token:</span>
                  {props.location.token}
                </p>
              </div>
              <Button txt="Back"></Button>
              <Lottie
                options={defaultOptions_success}
                height={"20%"}
                width={"20%"}
                speed="0.8"
              ></Lottie>
            </section>
          </div>
        );
        return <div className="pagez1">{code_inquiry}</div>;
      case "invoice":
        const lang = ["eng", "mn"];
        const method = ["payment", "socialpay"];
        const code_invoice = (
          <div>
            <section>
              <h1>Results that came from Нэхэмжлэл үүсгэх</h1>
              <div className="show_results">
                <p>
                  <span className="description_holder">Invoice:</span>
                  {props.location.invoice}
                </p>
                <p>
                  <span className="description_holder">
                    Гүйлгээний дугаар/TransactionId/:
                  </span>
                  {props.location.transactionId}
                </p>
                <p>
                  <span className="description_holder">Checksum:</span>
                  {props.location.checksum}
                </p>
              </div>
              <h1>Нэхэмжлэл дуудах</h1>
              <div className="dropdown_holder">
                <Dropdown
                  changed={changed_fnc}
                  id="language_choices"
                  songolt={lang}
                  placeholder="Language"
                ></Dropdown>
              </div>
              <div className="dropdown_holder">
                <Dropdown
                  changed={changed_fnc}
                  id="method_choices"
                  songolt={method}
                  placeholder="Төлбөрийн хэлбэр"
                ></Dropdown>
              </div>
              <Button txt="Нэхэмжлэл дуудах" onclk_1={nehemjlel}></Button>
              <Button txt="Back"></Button>
              <Lottie
                options={defaultOptions_success}
                height={"20%"}
                width={"20%"}
                speed="0.8"
              ></Lottie>
            </section>
          </div>
        );
        return <div className="pagez1">{code_invoice}</div>;
      case "tokens":
        const code_tokens = (
          <div>
            <section>
              <h1>Results that came from Токеноор гүйлгээ хийх</h1>
              <div className="show_results">
                <p>
                  <span className="description_holder">Хэмжээ/Amount/:</span>
                  {props.location.amount}
                </p>
                <p>
                  <span className="description_holder">
                    Тайлбар/errorDesc/:
                  </span>
                  {props.location.errorDesc}
                </p>
                <p>
                  <span className="description_holder">
                    Алдааны дугаар/errorCode/:
                  </span>
                  {props.location.errorCode}
                </p>
                <p>
                  <span className="description_holder">Checksum:</span>
                  {props.location.checksum}
                </p>
                <p>
                  <span className="description_holder">
                    Гүйлгээний дугаар/TransactionId/:
                  </span>
                  {props.location.transactionId}
                </p>
                <p>
                  <span className="description_holder">
                    Картын дугаар/Card Number/:
                  </span>
                  {props.location.cardNumber}
                </p>
              </div>
              <Button txt="Back"></Button>
              <Lottie
                options={defaultOptions_success}
                height={"20%"}
                width={"20%"}
                speed="0.8"
              ></Lottie>
            </section>
          </div>
        );
        return <div className="pagez1">{code_tokens}</div>;
      default:
        props.history.push("/");
        return <div></div>;
    }
  }
}

export default withRouter(Showdata);
