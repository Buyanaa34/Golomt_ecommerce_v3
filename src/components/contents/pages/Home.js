import React from "react";
import { withRouter } from "react-router-dom";
import "./style.css";
function Home() {
  return (
    <div className="pagez">
      <h1 className="welcoming">Голомт банк интернет худалдаа тест хуудас</h1>
      <div className="home_holder">
        {/* <Lottie options={defaultOptions} speed="1.6"></Lottie> */}
        <img className="nvvr_pic" src="/bank.jpg" alt="" />
      </div>
    </div>
  );
}

export default withRouter(Home);
