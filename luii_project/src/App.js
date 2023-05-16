import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst"; /*URL*/
      const serviceKey =
        "IEWoUlU0P1zQW3YrM7GJsaovDsQmJjd6u8gI1tS4Imz3SitbKQ7e0psu6c+mZHVzDPTINJEjwRk5XFNg6FvUcw==";
      const baseDate = "20230515";
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
          const data = await response.text();

          console.log(data); //출력
        } else {
          console.error("API 호출 실패");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  // 이후 return 부분에 날짜, 시간, 날씨 정보 출력되도록 작성해야 함.
  // 날짜는 오늘 날짜를 불러올 수 있는 확장프로그램? 헤더파일로 가져와야 할 것 같다.
  // 그리고, 출력될때, 데이터의 이름과 값은 따로 조건문 등으로 출력 될때 한글로 출력되고,
  // 단위에 맞추어서 출력되도록 작성 필요.
  return (
    <div className="App">
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
