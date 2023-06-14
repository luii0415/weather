import React, { useEffect } from "react";
import "./Map.css";

const { kakao } = window;

function Map(props) {
  useEffect(() => {
    const mapContainer = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    const mapOption = {
      // 지도를 생성할 때 필요한 옵션
      center: new kakao.maps.LatLng(35.95, 128.05), // 지도의 중심좌표
      draggable: false, // 지도를 생성할때 지도 이동 및 확대/축소를 막으려면 draggable: false 옵션을 추가하세요
      level: 13, // 지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성 및 객체 리턴
    const handleMarkerClick = (position) => {
      const { coordinate } = position;
      console.log("Clicked Coordinate:", coordinate, position.title);
      props.setValues({
        value1: position.coordinate.x,
        value2: position.coordinate.y,
        value3: position.title,
      });
    };

    // 마커를 표시할 위치와 title 객체 배열입니다
    var positions = [
      {
        title: "서울",
        latlng: new kakao.maps.LatLng(37.56704941461455, 126.97844845091791),
        coordinate: { x: 60, y: 127 },
      },
      {
        title: "경기도",
        latlng: new kakao.maps.LatLng(37.395856954696164, 127.4529954533116),
        coordinate: { x: 60, y: 123 },
      },
      {
        title: "부산",
        latlng: new kakao.maps.LatLng(35.18265974967644, 129.07386888227154),
        coordinate: { x: 81, y: 75 },
      },
      {
        title: "인천",
        latlng: new kakao.maps.LatLng(37.458954911432535, 126.70331372219611),
        coordinate: { x: 55, y: 124 },
      },
      {
        title: "대구",
        latlng: new kakao.maps.LatLng(35.87771794342193, 128.59659836935032),
        coordinate: { x: 90, y: 91 },
      },
      {
        title: "울산",
        latlng: new kakao.maps.LatLng(35.54950363033224, 129.3409183292431),
        coordinate: { x: 92, y: 84 },
      },
      {
        title: "광주",
        latlng: new kakao.maps.LatLng(35.170646287285415, 126.84323524410567),
        coordinate: { x: 58, y: 75 },
      },
      {
        title: "세종",
        latlng: new kakao.maps.LatLng(36.48552550566817, 127.28487449390961),
        coordinate: { x: 66, y: 103 },
      },
      {
        title: "대전",
        latlng: new kakao.maps.LatLng(36.35317462132832, 127.38349978859107),
        coordinate: { x: 68, y: 101 },
      },
      {
        title: "강원도",
        latlng: new kakao.maps.LatLng(37.77394315040505, 128.2711341178054),
        coordinate: { x: 84, y: 132 },
      },
      {
        title: "제주도",
        latlng: new kakao.maps.LatLng(33.39031426313345, 126.54865624181927),
        coordinate: { x: 46, y: 35 },
      },
    ];

    // 마커 이미지의 이미지 주소입니다
    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기입니다
      var imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        clickable: true,
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        coordinate: positions[i].coordinate,
        image: markerImage, // 마커 이미지
      });
      // 마커 클릭 이벤트 리스너를 추가합니다.
      kakao.maps.event.addListener(
        marker,
        "click",
        (function (marker, i) {
          return function () {
            handleMarkerClick(positions[i]);
          };
        })(marker, i)
      );
    }
  }, []);

  return (
    <div className="MapContainer">
      <div
        id="map"
        style={{
          width: "680px",
          height: "620px",
        }}
      ></div>
    </div>
  );
}

export { Map };
