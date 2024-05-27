// src/components/SocialSharing.js
import React from "react";
import "./SocialSharing.css";

const SocialSharing = () => {
  return (
    <div className="community-section">
      <h2>지금 바로 당신의 운동 분석 영상을 공유해보세요!</h2>
      <div className="social-buttons">
        <button>유튜브</button>
        <button>인스타그램</button>
        <button>틱톡</button>
        <button>URL 공유</button>
      </div>
    </div>
  );
};

export default SocialSharing;
