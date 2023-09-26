import React, { Component } from "react";
import styled from "styled-components";
import { Client } from "paho-mqtt";

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

class RecordingBtn extends Component {
  constructor(props) {
    super(props);

    // 초기 상태 설정
    this.state = {
      isRecording: false,
    };

    // MQTT 브로커 URL 및 포트 번호, 토픽 설정
    this.brokerUrl = "223.194.134.32"; // MQTT 브로커 주소
    this.topic = "record"; // MQTT 토픽 수정
    this.Subtopic = "post";
    this.port = 9001; // MQTT 브로커의 포트 번호

    // MQTT 클라이언트 초기화
    this.mqttClient = new Client(this.brokerUrl, Number(this.port), "/");

    // MQTT 연결 완료 시 실행되는 콜백
    this.mqttClient.onConnectionLost = this.onConnectionLost;
    this.mqttClient.onMessageArrived = this.onMessage;
  }

  // MQTT 연결 완료 시 실행되는 콜백
  onConnect = () => {
    console.log("Connected to MQTT broker");
    if (this.state.isRecording) {
      // "시작" 상태에서는 Publish
      this.mqttClient.publish(this.topic, "start");
    }
  };

  // MQTT 메시지 수신 시 실행되는 콜백
  onMessage = (message) => {
    console.log(`Received message: ${message.payloadString}`);
    const { onMessageReceived } = this.props;
    if (onMessageReceived) {
      onMessageReceived(message.payloadString);
    }
  };

  // MQTT 연결 끊김 시 실행되는 콜백
  onConnectionLost = (responseObject) => {
    if (responseObject.errorCode !== 0) {
      console.log(`Connection lost: ${responseObject.errorMessage}`);
    }
  };

  // 버튼 클릭 이벤트 핸들러
  toggleRecording = () => {
    this.setState(
      (prevState) => ({
        isRecording: !prevState.isRecording,
      }),
      () => {
        // 상태 변경 후 MQTT 통신 처리
        if (this.state.isRecording) {
          this.mqttClient.connect({ onSuccess: this.onConnect });
        } else {
          //this.mqttClient.disconnect();
          // "종료" 상태에서는 Subscribe
          this.mqttClient.publish(this.topic, "end");
          this.mqttClient.subscribe(this.Subtopic);
        }
      }
    );
  };

  // 컴포넌트가 마운트될 때 MQTT 클라이언트 연결
  // componentDidMount() {
  //   // MQTT 클라이언트 연결
  //   this.mqttClient.connect({ onSuccess: this.onConnect });
  // }

  // 컴포넌트가 언마운트될 때 MQTT 클라이언트 연결 해제
  // componentWillUnmount() {
  //   this.mqttClient.disconnect();
  // }

  render() {
    return (
      <StyledButton onClick={this.toggleRecording}>
        {this.state.isRecording ? "종료" : "시작"}
      </StyledButton>
    );
  }
}

export default RecordingBtn;
