import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import { Map } from "./Map";

function App() {
  // value1 : x좌표, value2 : y좌표, value3 : 지역명
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
      <div className="web-title">날씨 코드 Break!</div>
      <div className="middle">
        {" "}
        <Map setValues={setValues} />
        <div className="space"></div>
        <Weather values={values} />
      </div>
      <div className="bottom">
        <img className="inline" src="img/img_opentype01.png" />
        <div className="inline">
          <p className="p_top">
            본 저작물은 '기상청'에서 '2021'년 작성하여 공공누리 제 1유형으로
            개방한 '기상청_단기예보 ((구)_동네예보) 조회서비스'를 이용하였으며,
          </p>
          <p className="p_bottom">
            해당 저작물은 <a href="https://www.data.go.kr/">'공공데이터포털'</a>
            , 'https://www.data.go.kr/' 에서 무료로 다운받으실 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
