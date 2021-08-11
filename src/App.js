import "./App.css";
import Sidebar from "./components/big_contents/sidebar/Sidebar";
import Holder from "./components/big_contents/holder/Holder";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "./components/contents/loading/Loading";

function App() {
  const [done, setdone] = useState(undefined);
  var html_code = "";
  useEffect(() => {
    settimerz();
  });
  const settimerz = () => {
    setTimeout(() => {
      setdone(true);
    }, 3000);
  };
  const returnfunc = () => {
    if (!done) {
      html_code = (
        <div className="App">
          <Loading />
        </div>
      );
    } else {
      html_code = (
        <BrowserRouter>
          <div className="App">
            <Sidebar></Sidebar>
            <Holder></Holder>
          </div>
        </BrowserRouter>
      );
    }
    return html_code;
  };

  return returnfunc();
}

export default App;
