import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import { Map } from "./Map";

function App() {
  const [values, setValues] = useState({
    value1: 64,
    value2: 122,
    value3: "경기도 용인시 처인구 모현읍",
  }); // 지역 초기값 : 모현읍
  return (
    <div className="App">
      <div className="top">
        <img src="img/CodeBreakers_logo5.png" alt="logo" />
      </div>
      <div className="web-title">날씨 코드 break!</div>
      <div className="middle">
        {" "}
        <Map setValues={setValues} />
        <div className="space"></div>
        <Weather values={values} />
      </div>
      <div className="bottom">bottom section</div>
    </div>
  );
}

export default App;
