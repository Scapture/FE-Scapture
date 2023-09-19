import React, { useState } from "react";
import styled from "styled-components";

function RecordingBtn() {
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

  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // 녹화 시작 또는 종료 로직을 여기에 추가
  };

  return (
    <StyledButton onClick={toggleRecording}>
      {isRecording ? "녹화 종료" : "녹화 시작"}
    </StyledButton>
  );
}

export default RecordingBtn;
