import './App.css';
import React, {useEffect} from "react";

const {kakao} = window;

function App() {

  useEffect(() => {
    const staticMapContainer  = document.getElementById('staticMap'); //지도를 담을 영역의 DOM 레퍼런스
    const staticMapOption = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(35.95, 128.25), //지도의 중심좌표.
      level: 14 //지도의 레벨(확대, 축소 정도)
    };
    const staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption); //지도 생성 및 객체 리턴
    kakao.maps.event.addListener(staticMap, 'click', function(mouseEvent) {        
    
      // 클릭한 위도, 경도 정보를 가져옵니다 
      var latlng = mouseEvent.latLng; 
      var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
      message += '경도는 ' + latlng.getLng() + ' 입니다';
      
      var resultDiv = document.getElementById('clickLatlng'); 
      console.log(resultDiv, message);
    });

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src='img/CodeBreakers_logo.png'/>
        <p>날씨 정보 제공 웹사이트</p>
        <div id='staticMap' style={{
          width : '400px',
          height : '450px'
        }}></div>
      </header>
    </div>
  );
}

export {App};