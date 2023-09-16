import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 3.75rem;
  background: var(--, #2458ea);
  color: #F2F6FF;
  font-family: Pretendard;
  font-size: 1.5vw;
  font-style: normal;
  font-weight: 600;
  justify-content:center;
  align-items:center;

  /* 크기 */
  width: 20vw;
  height: 5vw;
  flex-shrink: 0;

  /* 색상 */
  background: #2458EA;
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

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
