import React from "react";
import Lottie from "react-lottie";
import * as loading from "../../../animations/67771-star-sine.json";
import "./style.css";
function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    controls: false,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="loader_container">
      <Lottie
        options={defaultOptions}
        loop
        autoplay
        height={"45%"}
        width={"45%"}
      ></Lottie>
    </div>
  );
}

export default Loading;
