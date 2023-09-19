import React from "react";
import { Link } from "react-router-dom"; // 라우팅을 위해 react-router-dom에서 Link 컴포넌트를 가져옴
import styled from "styled-components";

// 스타일드 컴포넌트를 사용하여 Header 스타일링
const HeaderContainer = styled.div`
  color: white;
  padding-bottom: 13vmax;
`;

const HeaderContent = styled.div`
  padding-top: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40vw;

  font-size: 1.2vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.125rem;
`;

const Logo = styled.img`
  display: flex;
  align-items: center;
  width: 13.5vmin;
  flex-shrink: 0;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 2vw;

    li {
      a {
        text-decoration: none;
        color: white;
        font-weight: bold;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
`;

const ContentWrap = styled.div`
  margin-top: 13vh;
  margin-left: 18.4vw;
`;

const MainContent = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 900;
  line-height: normal;

  font-size: 8vw;
`;

const SubContent1 = styled.div`
  margin-top: 3vh;

  color: var(--1, #f2f6ff);
  font-family: Pretendard;
  font-size: 1.8vw;
  font-style: normal;
  font-weight: 600;
`;

const SubContent2 = styled.div`
  margin-top: 2vh;

  color: var(--1, #f2f6ff);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 400;
`;

function Header({children}) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src="/assets/scapture-logo.svg"></Logo>
        <Navigation>
          <ul>
            <li>
              <div to="/">스캡쳐</div>
            </li>
            <li>
              <div to="/about">녹화</div>
            </li>
            <li>
              <div to="/contact">커뮤니티</div>
            </li>
          </ul>
        </Navigation>
      </HeaderContent>
      <ContentWrap>
        <MainContent>
        {children}<br/>
          SCAPTURE!
        </MainContent>
        <SubContent1>
          몸만 와서 운동만 하세요!
          <br />
          촬영, 편집, 녹화 SCAPTURE가 해드릴게요!
        </SubContent1>
        <SubContent2>
          SCAPTURE는 ‘SPORTS + CAPTURE’의 합성어로 운동하는 모습을 포착한다는
          아이디어에서 시작되었습니다.
          <br /> 생활체육인 3000만 시대에 이제 개인 생활체육인들도 손쉽게
          자신만의 운동영상을 갖는 환경 조성이 필요합니다.
        </SubContent2>
      </ContentWrap>
    </HeaderContainer>
  );
}

export default Header;
