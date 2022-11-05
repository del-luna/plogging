import { useEffect, useRef } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const Canvas = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 15px;
`

const MyMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);
	
  return (
    <>
    	<Canvas ref={mapRef} />
    </>
  );
}

export default MyMap;