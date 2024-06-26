import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { getGeocode } from "./../util/getGeocode";
import "./../style/Map.css";
import MarkerData from "./MarkerData";
import Records from "./Records";

const KakaoMap = ({ hospitals, searchQuery }) => {
  const [map, setMap] = useState(null); // 맵 인스턴스 상태 저장
  const [markers, setMarkers] = useState([]); // 새로 추가되거나 삭제될 마커 관리

  // 맵 초기 설정
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(37.366269, 127.10753),
      level: 6,
    };
    const initMap = new window.kakao.maps.Map(container, options);
    setMap(initMap); // 맵 인스턴스 설정
  }, []);

  // 검색어나 병원 데이터가 변경될 때 마커 업데이트
  useEffect(() => {
    const loadMarkers = async () => {
      if (map) {
        // 기존 마커를 지도에서 모두 제거하고 상태를 비웁니다.
        markers.forEach((marker) => marker.setMap(null));
        setMarkers([]); // 상태를 직접적으로 비우기

        // 검색어에 따라 필터링된 병원 데이터로 마커 생성
        const filteredHospitals = searchQuery ? hospitals.filter((hospital) => hospital.name.toLowerCase().includes(searchQuery.toLowerCase())) : hospitals;
        const coordsArray = await Promise.all(filteredHospitals.map((hospital) => getGeocode(hospital.address)));

        const newMarkers = coordsArray
          .map((coords, index) => {
            if (coords) {
              const { latitude, longitude } = coords;
              const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: markerPosition,
              });

              const markerContent = ReactDOMServer.renderToString(<MarkerData hospitals={filteredHospitals[index]} />);
              const infowindow = new window.kakao.maps.InfoWindow({
                content: markerContent,
              });

              // 마커 이벤트 리스너 설정
              window.kakao.maps.event.addListener(marker, "mouseover", () => {
                infowindow.open(map, marker);
              });
              window.kakao.maps.event.addListener(marker, "mouseout", () => {
                infowindow.close();
              });

              return marker;
            }
            return null;
          })
          .filter((marker) => marker !== null);

        // 새로운 마커 배열을 상태로 설정
        setMarkers(newMarkers);
      }
    };

    loadMarkers();
  }, [map, hospitals, searchQuery]);



  return (
    <>
      <div className="records_map">
        <Records />
      </div>
      <div id="map"></div>
    </>
  );
};
export default KakaoMap;
