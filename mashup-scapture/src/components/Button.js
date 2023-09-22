import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 3.75rem;
  background: var(--, #2458ea);
  color: #f2f6ff;
  font-family: Pretendard;
  font-size: 1.5vw;
  font-style: normal;
  font-weight: 600;
  justify-content: center;
  align-items: center;

  /* 크기 */
  width: 20vw;
  height: 5vw;
  flex-shrink: 0;

  /* 색상 */
  background: #2458ea;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ to, children }) {
  // 현재 페이지의 위치를 가져옵니다.
  const location = useLocation();

  // 페이지가 로드될 때 스크롤을 맨 위로 이동시킵니다.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Link to={to}>
      <StyledButton>{children}</StyledButton>
    </Link>
  );
}

export default Button;
