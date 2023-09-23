import React from "react";
import styled from "styled-components";
import RecordingBtn from "./RecordingBtn";

const Container = styled.div`
  display: flex;
  padding-bottom: 10vw;
  background: #000;
  width: 100%;
`;

const ContentBlock = styled.div`
  margin-left: 18.4vw;
`;

const Title = styled.div`
  margin-top: 8rem;
  color: #d6df22;
  font-family: Pretendard;
  font-size: 1.5vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 100% */
`;

const Titlecontent = styled.div`
  margin-top: 0.3rem;
  margin-bottom: 1rem;
  color: var(--1, #f2f6ff);
  font-family: Pretendard;
  font-size: 2.8vw;
  font-style: normal;
  font-weight: 600;
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
  font-size: 0.5vmax;
  font-style: normal;
  font-weight: 400;
`;

const AppBlock = styled.div`
  display: flex;
`;

const ImgBlock = styled.div`
  margin-top: 150px;
`;

const Backgroundimg = styled.img`
  display: flex;
  position: relative;
  width: 30vw;
  flex-shrink: 0;
  margin-left: 16vw;
  filter: brightness(150%);
  border-radius: 0.2rem;
  z-index: 0;
`;

const Backgroundsubimg = styled.img`
  position: absolute;
  width: 20vw;
  margin-top: 9vw;
  margin-left: 6rem;
  filter: brightness(500%);
  z-index: 1;
  border-radius: 0.625rem;
  border: 0.1px solid #fff;
`;

function Record() {
  return (
    <Container>
      <ContentBlock>
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
          <RecordingBtn />
        </AppBlock>
      </ContentBlock>
      <ImgBlock>
        <Backgroundsubimg src="assets/recording-bg.png"></Backgroundsubimg>
        <Backgroundimg src="assets/recording-bg.png" />
      </ImgBlock>
    </Container>
  );
}

export default Record;