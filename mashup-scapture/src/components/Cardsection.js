import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const backgroundImageUrl = "/assets/scapture-bg-logo.svg";

const containerStyle = {
  backgroundImage: `url(${backgroundImageUrl})`, // 이미지 경로를 백틱(`)을 사용하여 문자열 안에 삽입
  backgroundSize: "cover", // 이미지 크기를 컨테이너에 맞게 조절
  backgroundRepeat: "no-repeat", // 이미지 반복 없음
  //backgroundPosition: "center", // 이미지를 가운데 정렬
  backgroundPosition: "center", // 이미지를 가운데 정렬
  height: "40vw", // 화면 높이 전체를 차지하도록 설정
};

const MainContainer = styled.div``;

const MainContent = styled.div`
  opacity: 0.8;
  background: linear-gradient(
    180deg,
    rgba(214, 223, 34, 0.8) -7.92%,
    rgba(214, 223, 34, 0) 73.33%
  );
`;

const MainContentWriting = styled.p`
  margin-left: 18.4vw;
  padding-top: 3vw;
  padding-bottom: 3vw;
  color: var(--1, #f2f6ff);
  font-family: Pretendard;
  font-size: 2.5vw;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 0;
`;

// 스프링 모션을 위한 keyframes 정의
const springAnimation = keyframes`
  0% {
    transform: translateY(-20px); /* 시작 위치 조정 */
    opacity: 0; /* 시작 시 투명도 0 */
  }
  100% {
    transform: translateY(0); /* 스프링 모션 종료 위치 */
    opacity: 1; /* 끝날 때 투명도 1 */
  }
`;

const CardContent = styled.div`
  opacity: 0.9;
  animation: ${springAnimation} 2s; /* 2초 동안 스프링 모션 애니메이션 실행 */
  /* 나머지 스타일은 그대로 유지 */
`;

const LineContent = styled.div`
  background: linear-gradient(270deg, #d6df22 0%, #2458ea 51.39%, #d6df22 100%);
  color: #fff;
  display: flex;
  align-item: center;
  justify-content:center;
`;

const LineContentWriting = styled.p`
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 600;
`;

function Cardsection() {
  return (
    <MainContainer>
      <MainContent>
        <MainContentWriting>
          몸만 와서 운동만 하세요!
          <br /> 촬영, 편집, 녹화 SCAPTURE가 해드릴게요!
        </MainContentWriting>
      </MainContent>
      <CardContent style={containerStyle}></CardContent>
      <LineContent>
        <LineContentWriting>
          SCAPTURE는 당신을 기록하고 분석하며, 당신의 성장을 도울 수 있어요.
        </LineContentWriting>
      </LineContent>
    </MainContainer>
  );
}

export default Cardsection;
