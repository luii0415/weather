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
      <div className="top"> top section</div>
      <div className="middle">
        {" "}
        middle section
        <Map setValues={setValues} />
        <Weather values={values} />
      </div>
      <div className="bottom">bottom section</div>
    </div>
  );
}

export default App;
