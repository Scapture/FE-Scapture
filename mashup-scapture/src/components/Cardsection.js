import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { Element } from "react-scroll";

const backgroundImageUrl = "/assets/scapture-bg-logo.svg";

const containerStyle = {
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "40vw",
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
  color: #f2f6ff;
  font-family: Pretendard;
  font-size: 2.5vw;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 0;
`;

const springAnimation = keyframes`
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const CardContent = styled.div`
  opacity: 0.9;
  animation: ${(props) =>
    props.animated
      ? css`
          ${springAnimation} 2s
        `
      : "none"};
`;

const LineContent = styled.div`
  background: linear-gradient(270deg, #d6df22 0%, #2458ea 51.39%, #d6df22 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LineContentWriting = styled.p`
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 600;
`;

function Cardsection() {
  const cardRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const cardElement = cardRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        } else {
          setAnimated(false);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => {
      observer.unobserve(cardElement);
    };
  }, []);

  return (
    <MainContainer>
      <MainContent>
        <MainContentWriting>
          몸만 와서 운동만 하세요!
          <br /> 촬영, 편집, 녹화 SCAPTURE가 해드릴게요!
        </MainContentWriting>
      </MainContent>
      <Element name="animationTrigger">
        <CardContent
          ref={cardRef}
          style={containerStyle}
          animated={animated}
        ></CardContent>
      </Element>
      <LineContent>
        <LineContentWriting>
          SCAPTURE는 당신을 기록하고 분석하며, 당신의 성장을 도울 수 있어요.
        </LineContentWriting>
      </LineContent>
    </MainContainer>
  );
}

export default Cardsection;
