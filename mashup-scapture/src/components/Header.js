import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 스타일드 컴포넌트를 사용하여 Header 스타일링
const NavLink = styled.div`
  color: ${(props) => (props.isHovered ? "yellow" : "#eee")};
  transition: color 0.8s;
  &:hover {
    color: yellow;
    cursor: pointer;
  }
`;

const ColoredText = styled.span`
  color: #d6df22;
`;

const HeaderContainer = styled.div`
  background-size: 110vw;
  color: white;
  background-repeat: no-repeat;
  background-color: #000;
  background-attachment: fixed;
  background-image: url("/assets/scapture-main-bg.png");
  overflow: hidden; /* 내용이 화면을 넘어갈 경우 숨김 */
`;

const HeaderContent = styled.div`
  padding-top: 3vw;
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
    padding-left: 10px;

    li {
      a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-family: Pretendard;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
`;

const ContentWrap = styled.div`
  margin-top: 5rem;
  margin-left: 18.4vw;
  margin-bottom: 10vw;
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

function Header({ children }) {
  const [text, setText] = useState({
    스캡쳐: "스캡쳐",
    녹화: "녹화",
    커뮤니티: "커뮤니티",
  });

  const [isHovered, setIsHovered] = useState({
    스캡쳐: false,
    녹화: false,
    커뮤니티: false,
  });

  const handleMouseOver = (menu) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [menu]: true,
    }));
    setText((prevState) => ({
      ...prevState,
      [menu]:
        menu === "스캡쳐"
          ? "SCAPTURE"
          : menu === "녹화"
          ? "RECORD"
          : "COMMUNITY",
    }));
  };

  const handleMouseOut = (menu) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [menu]: false,
    }));
    setText((prevState) => ({
      ...prevState,
      [menu]: menu,
    }));
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src="/assets/scapture-logo.svg"></Logo>
        <Navigation>
          <ul>
            <li>
              <NavLink
                className={`nav-link ${isHovered["스캡쳐"] ? "hovered" : ""}`}
                to="/"
                onMouseOver={() => handleMouseOver("스캡쳐")}
                onMouseOut={() => handleMouseOut("스캡쳐")}
              >
                {text["스캡쳐"]}
              </NavLink>
            </li>
            <li>
              <Link to="/Recording">
                <NavLink
                  className={`nav-link ${isHovered["녹화"] ? "hovered" : ""}`}
                  to="/Recording"
                  onMouseOver={() => handleMouseOver("녹화")}
                  onMouseOut={() => handleMouseOut("녹화")}
                >
                  {text["녹화"]}
                </NavLink>
              </Link>
            </li>
            <li>
              <NavLink
                className={`nav-link ${isHovered["커뮤니티"] ? "hovered" : ""}`}
                to="/"
                onMouseOver={() => handleMouseOver("커뮤니티")}
                onMouseOut={() => handleMouseOut("커뮤니티")}
              >
                {text["커뮤니티"]}
              </NavLink>
            </li>
          </ul>
        </Navigation>
      </HeaderContent>
      <ContentWrap>
        <MainContent>
          {children}
          <br />
          SCAPTURE!
        </MainContent>
        <SubContent1>
          몸만 와서 운동만 하세요!
          <br />
          <ColoredText>촬영, 편집, 녹화</ColoredText> SCAPTURE가 해드릴게요!
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
