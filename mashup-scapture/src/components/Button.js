import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

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

function Button({ to, label }) {
  return (
    //<Link to={to}>
      <StyledButton>{label}녹화하기</StyledButton>
    //</Link>
  );
}

export default Button;
