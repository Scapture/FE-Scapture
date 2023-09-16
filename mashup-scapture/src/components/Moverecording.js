import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // 라우팅을 위해 react-router-dom에서 Link 컴포넌트를 가져옴
import Button from "./Button";

const Container = styled.div`
  margin-left: 18.4vw;
`;

const Title = styled.div`
  margin-top: 20vh;
  color: #d6df22;
  font-family: Pretendard;
  font-size: 1.5vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 100% */
`;

const Titlecontent = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: var(--1, #f2f6ff);
  font-family: Pretendard;
  font-size: 2.5vw;
  font-style: normal;
  font-weight: 600;
  line-height: 2.5rem;
`;

const Titleline = styled.div`
  width: 26vw;
  height: 0.25rem;
  background: linear-gradient(90deg, #d6df22 0%, rgba(255, 255, 255, 0) 100%);
`;

const Titlesubcontent = styled.div`
  margin-top: 1rem;
  margin-bottom: 5vw;

  color: var(--1, #f2f6ff);
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
`;

const AppBlock = styled.div`
  display: flex;
`;

function Moverecording() {
  return (
    <Container>
      <Title>RECORD</Title>
      <Titlecontent>
        지금 바로 당신의
        <br />
        운동 영상을 녹화해보세요!
      </Titlecontent>
      <Titleline />
      <Titlesubcontent>
        SCAPTURE가 당신의 운동을 알아서 녹화하고 편집해줍니다!
        <br /> 당신만의 운동 영상을 녹화해보세요!
      </Titlesubcontent>
      <AppBlock>
        <Button>녹화하기</Button>
      </AppBlock>
    </Container>
  );
}

export default Moverecording;
