import React from "react";
import Home from "../../contents/pages/Home";
import Invoice from "../../contents/pages/Invoice";
import Inquiry from "../../contents/pages/Inquiry";
import Tokens from "../../contents/pages/Tokens";
import Showdata from "../../contents/pages/Showdata";
import { Route } from "react-router-dom";
import "./style.css";
const Holder = (props) => {
  return (
    <div className="holder">
      <Route exact path="/" component={Home}></Route>
      <Route path="/invoice" component={Invoice}></Route>
      <Route path="/inquiry" component={Inquiry}></Route>
      <Route path="/pay" render={props} component={Tokens}></Route>
      <Route path="/showdata" component={Showdata}></Route>
    </div>
  );
};

export default Holder;
