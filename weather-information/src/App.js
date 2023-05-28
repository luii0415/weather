import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import { Map } from "./Map";

function App() {
  const [values, setValues] = useState({ value1: 0, value2: 0 });
  return (
    <div className="App">
      <div className="top"> top section</div>
      <div className="middle">
        {" "}
        middle section
        {/* <Map setValues={setValues} /> */}
        <Weather values={values} />
      </div>
      <div className="bottom">bottom section</div>
    </div>
  );
}

export default App;
