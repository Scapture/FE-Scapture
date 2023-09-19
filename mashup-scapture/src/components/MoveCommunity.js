import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ColoredText = styled.span`
  color: #2458EA;

`;

const Container = styled.div`
  display: flex;
  padding-bottom: 15vw;
  background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 350%);
  width: 100%;
  border-bottom: 0.5px solid #959AA4;
`;

const ContentBlock = styled.div`
  margin-left: 18.4vw;
  margin-right: 8vw;
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
  margin-top: 210px;
  display: flex;
`;

const Backgroundimg = styled.img`
  display: flex;
  width: 8vw;
  height: 8vw;
  margin-right: 15px;
`;

const Backgroundimg2 = styled.img`
  display: flex;
  width: 8vw;
  height: 8vw;
  margin-right: 15px;
`;

const Backgroundimg3 = styled.img`
  display: flex;
  width: 5vw;
  flex-shrink: 0;
`;

const Shareimgblock = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 8vw;
  height: 8vw;
  margin-right: 15px;
  border-radius: 2vw;
  background: var(--1, #F2F6FF);
`;

function MoveCommunity() {
  return (
    <Container>
      <ContentBlock>
        <Title>COMMUNITY</Title>
        <Titlecontent>
          지금 바로 당신의
          <br />
          운동 영상을 <ColoredText>공유</ColoredText>해보세요!
        </Titlecontent>
        <Titleline />
        <Titlesubcontent>
          SCAPTURE가 당신의 운동을 알아서 녹화하고 편집해줍니다!
          <br /> 당신만의 운동 영상을 공유해보세요!
        </Titlesubcontent>
        <AppBlock>
          <Button to="/Recording" children="공유하기"></Button>
        </AppBlock>
      </ContentBlock>
      <ImgBlock>
        <Backgroundimg src="assets/YoTubeicon.svg" />
        <Backgroundimg src="assets/Instaicon.svg" />
        <Backgroundimg2 src="assets/tictok.png" />
        <Shareimgblock>
          <Backgroundimg3 src="assets/shareicon.png" />
        </Shareimgblock>
      </ImgBlock>
    </Container>
  );
}

export default MoveCommunity;
