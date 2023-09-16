import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // 라우팅을 위해 react-router-dom에서 Link 컴포넌트를 가져옴
import Button from "./Button";

const Title = styled.div`
  color: var(--, #d6df22);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 100% */
`;

const Titlecontent = styled.div`
  color: var(--1, #f2f6ff);
  font-family: Pretendard;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3.75rem; /* 150% */
`;

const Titlesubcontent = styled.div`
  color: var(--1, #f2f6ff);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem; /* 187.5% */
`;

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function Moverecording() {
  return (
    <>
      <Title>RECORD</Title>
      <Titlecontent>
        지금 바로 당신의
        <br />
        운동 영상을 녹화해보세요!
      </Titlecontent>
      <Titlesubcontent>
        SCAPTURE가 당신의 운동을 알아서 녹화하고 편집해줍니다!
        <br /> 당신만의 운동 영상을 녹화해보세요!
      </Titlesubcontent>
      <AppBlock>
        <Button>녹화하기</Button>
      </AppBlock>
    </>
  );
}

export default Moverecording;
