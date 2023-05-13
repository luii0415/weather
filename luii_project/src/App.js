import React, { useState, useEffect } from "react";
import axios from "axios";
import Traffic from "./Traffic";

function App() {
  const [state, setState] = useState({
    isLoading: true,
    data: [],
  });

  function getTraffic() {
    const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst`;
    console.log(url);
    axios.get(url).then((Response) => {
      const data = Response.data.list;
      console.log(data);

      setState({
        isLoading: false,
        data: data,
      });
    });
  }

  useEffect(() => {
    getTraffic();
  }, []);

  const { isLoading, data } = state;

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
      ) : (
        <div className="trafficInfo">
          {data.map((d, cnt) => {
            return (
              <Traffic
                key={cnt}
                sumDate={data[cnt].sumDate}
                exDivCode={data[cnt].exDivCode}
                tcsType={data[cnt].tcsType}
                carType={data[cnt].carType}
                trafficVolumn={data[cnt].trafficVolumn}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default App;
