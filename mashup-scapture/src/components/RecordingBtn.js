import React, { useState } from "react";
import styled from "styled-components";
//import mqtt from "mqtt"; // MQTT 라이브러리 추가

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
  

function RecordingBtn() {
  const [isRecording, setIsRecording] = useState(false);
  
  // TODO: MQTT 브로커 URL을 설정합니다.
  //const mqttClient = mqtt.connect("mqtt://your-mqtt-broker-url"); // MQTT 브로커 연결

  const toggleRecording = () => {
    setIsRecording(!isRecording);

    // TODO: MQTT 토픽과 메시지 형식을 프로젝트에 맞게 수정필요.
    // if (mqttClient) {
    //   const topic = "your-topic"; // MQTT 토픽 수정
    //   const message = isRecording ? "녹화 종료" : "녹화 시작"; // 메시지 형식 수정
    //   mqttClient.publish(topic, message);
    // }
  };

  return (
    <StyledButton onClick={toggleRecording}>
      {isRecording ? "녹화 종료" : "녹화 시작"}
    </StyledButton>
  );
}

export default RecordingBtn;
