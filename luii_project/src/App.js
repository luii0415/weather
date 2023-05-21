import React, { useEffect } from "react";

function App() {
  const current = new Date();
  const date = `${current.getFullYear()}0${
    current.getMonth() + 1
  }${current.getDate()}`;
  const [data, setData] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";
      const serviceKey =
        "IEWoUlU0P1zQW3YrM7GJsaovDsQmJjd6u8gI1tS4Imz3SitbKQ7e0psu6c+mZHVzDPTINJEjwRk5XFNg6FvUcw==";
      const baseDate = date;
      const baseTime = "0500";
      const nx = "55";
      const ny = "127";

      const queryParams =
        `?serviceKey=${encodeURIComponent(serviceKey)}` +
        `&pageNo=${encodeURIComponent("1")}` +
        `&numOfRows=${encodeURIComponent("5")}` +
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

  return (
    <div>
      <li>
        기준 날짜 : {current.getFullYear()}년 {current.getMonth() + 1}월{" "}
        {current.getDate()}일
      </li>
      <li>기준 시간 : 오전 6시</li>
      {data && data.response && data.response.body && (
        <div>
          <h3>데이터:</h3>
          <ul>
            {data.response.body.items.item.map((item, index) => (
              <li key={index}>
                카테고리: {item.category === "TMP" ? "온도" : item.category},{" "}
                값: {item.fcstValue}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
