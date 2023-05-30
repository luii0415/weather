import React, { useEffect } from "react";

function Weather(props) {
  const current = new Date();
  const date = `${current.getFullYear()}0${
    current.getMonth() + 1
  }${current.getDate()}`;
  const [data, setData] = React.useState(null);
  //var { val_1, val_2 } = props; //수정해야할 부분
  //const val_x = `${val_1}`;
  //const val_y = `${val_2}`;

  //console.log(typeof val_x);
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";
      const serviceKey =
        "IEWoUlU0P1zQW3YrM7GJsaovDsQmJjd6u8gI1tS4Imz3SitbKQ7e0psu6c+mZHVzDPTINJEjwRk5XFNg6FvUcw==";
      const baseDate = date;
      const baseTime = "0800";
      const nx = "64";
      const ny = "122";

      const queryParams =
        `?serviceKey=${encodeURIComponent(serviceKey)}` +
        `&pageNo=${encodeURIComponent("1")}` +
        `&numOfRows=${encodeURIComponent("11")}` +
        `&dataType=${encodeURIComponent("JSON")}` +
        `&base_date=${encodeURIComponent(baseDate)}` +
        `&base_time=${encodeURIComponent(baseTime)}` +
        `&nx=${encodeURIComponent(nx)}` +
        `&ny=${encodeURIComponent(ny)}`;

      try {
        const response = await fetch(url + queryParams);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
          console.log(jsonData); // 출력
        } else {
          console.error("API 호출 실패");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  //prop 연결 성공 : value1,2

  return (
    <div>
      Value 1: {props.values.value1}
      Value 2: {props.values.value2}
      <li>
        기준 날짜 : {current.getFullYear()}년 {current.getMonth() + 1}월{" "}
        {current.getDate()}일
      </li>
      <li>기준 시간 : 오전 8시</li>
      <li>기준 지역(기본 지역) : 용인시 처인구 모현읍</li>
      {data && data.response && data.response.body && (
        <div>
          <h3>데이터:</h3>
          <ul>
            {data.response.body.items.item.map((item, index) => {
              const popValue = data.response.body.items.item.find(
                (i) => i.category === "POP"
              )?.fcstValue;
              if (
                (item.category === "PTY" || item.category === "PCP") &&
                popValue === "0"
              ) {
                return null;
              }
              if (
                item.category !== "WAV" &&
                item.category !== "VVV" &&
                item.category !== "UUU" &&
                item.category !== "VEC"
              ) {
                return (
                  <li key={index}>
                    카테고리 :{" "}
                    {(() => {
                      switch (item.category) {
                        case "TMP":
                          return "온도";
                        case "WSD":
                          return "풍속";
                        case "POP":
                          return "강수확률";
                        case "PCP":
                          return "1시간 강수량";
                        case "REH":
                          return "습도";
                        case "SKY":
                          return "하늘상태";
                        case "PTY":
                          return "강수형태";
                        default:
                          return item.category;
                      }
                    })()}
                    , 값:{" "}
                    {(() => {
                      if (item.category === "SKY") {
                        switch (item.fcstValue) {
                          case "1":
                            return "맑음";
                          case "3":
                            return "구름많음";
                          case "4":
                            return "흐림";
                          default:
                            return item.fcstValue;
                        }
                      } else if (item.category === "PTY") {
                        switch (item.fcstValue) {
                          case "0":
                            return "맑음";
                          case "1":
                            return "비";
                          case "2":
                            return "비 나 눈";
                          case "3":
                            return "소나기";
                          default:
                            return item.fcstValue;
                        }
                      } else {
                        return item.fcstValue;
                      }
                    })()}
                    {(() => {
                      if (!isNaN(item.fcstValue)) {
                        switch (item.category) {
                          case "TMP":
                            return "℃";
                          case "PCP":
                            return "mm";
                          case "POP":
                            return "%";
                          case "REH":
                            return "%";
                          case "WSD":
                            return "m/s";
                          default:
                            return "";
                        }
                      } else {
                        return "";
                      }
                    })()}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Weather;
