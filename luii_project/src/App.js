import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [airData, setAirData] = useState([]);

  useEffect(() => {
    async function fetchAirData() {
      const response = await axios.get("http://localhost:8000");

      const { location, time, pm10, pm25, no2 } = response.data;

      setAirData({ location, time, pm10, pm25, no2 });
    }
    fetchAirData();
  }, []); // run the useEffect when the component is rendered first time only

  return (
    <ul>
      <li>위치: {airData.location}</li>
      <li>시각: {airData.time}</li>
      <li>pm10: {airData.pm10}</li>
      <li>pm25: {airData.pm25}</li>
      <li>no2: {airData.no2}</li>
    </ul>
  );
}

export default App;
