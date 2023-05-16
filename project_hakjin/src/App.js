import './App.css';
import React, {useEffect} from "react";

const {kakao} = window;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='img/CodeBreakers_logo.png'/>
        <p>날씨 정보 제공 웹사이트</p>
        <p>
          여기에 지도가 들어갑니다.
        </p>
      </header>
    </div>
  );
}


function Kakao(){

  useEffect(() => {
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, [])
  
  return (
    <div id='map' style={{
      width : '500px',
      height : '500px'
    }}></div>
  )

}

export {App, Kakao};