import React from "react";

function Traffic({ exDivCode, tcsType, carType, sumDate, trafficVolumn }) {
  return (
    <div className="traffic">
      <h3>일자별 교통량 현황</h3>
      <div className="date">측정일시:{sumDate}</div>
      <div className="exDivCode">집계주체구분:{exDivCode}</div>
      <div className="tcsType">하이패스/일반구분:{tcsType}</div>
      <div className="carType">차종구분:{carType}</div>
      <div className="trafficVolum">수량:{trafficVolumn}</div>
    </div>
  );
}
export default Traffic;
