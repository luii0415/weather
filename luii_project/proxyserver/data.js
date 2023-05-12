const axios = require("axios");
const serviceKey = require(".env");
const apiUrl = require("./url.js");

const axdata = async (stationName, callback) => {
  // 공공데이터 포털의 api
  const url = apiUrl.weather_ulr;
  // 한국환경공단_에어코리아_대기오염정보 인증키
  // 주의: 이 예제에서와 같이 다른 파일에서 인증키를 불러 올 때는 반드시  decode를 해야 함.
  let ServiceKey = decodeURIComponent(serviceKey.publicPortalkey);

  // axios로 한국환경공단_에어코리아_대기오염정보 api에 연결하여 데이터를 불러옴.
  try {
    const response = await axios.get(url, {
      params: {
        dataTerm: "DAILY",
        stationName: stationName,
        pageNo: "1",
        numOfRows: "1",
        ver: "1.3",
        returnType: "json",
        ServiceKey: ServiceKey,
      },
    });
    // response.data가 어떤 구조로 되어 있는 지를 보기 위해 console 사용.
    // console.log(response.data)
    const { dataTime, pm10Value, pm25Value, no2Value } =
      response.data.response.body.items[0];
    // response.data.response.body 를  콘솔로 확인
    console.log(
      "response.data.response.body from axdata",
      response.data.response.body
    );
    const airquality = {
      location: stationName,
      time: dataTime,
      pm10: pm10Value,
      pm25: pm25Value,
      no2: no2Value,
    };

    callback(undefined, { airquality });
  } catch (error) {
    console.log("error broke out:  ", error);
  }
};

module.exports = axdata;
