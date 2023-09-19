import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열로 나열 */
  gap: 16px; /* 영상 간격 조절 */
`;

const VideoCard = styled.div`
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Video = styled.video`
  max-width: 100%;
  height: auto;
`;

const VideoLink = styled.a`
  text-decoration: none;
  color: #333;
`;

const VideoGridView = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    // 백엔드 API 호출
    axios.get('/api/videos')
      .then((response) => {
        setVideoData(response.data);
      })
      .catch((error) => {
        console.error('영상 데이터를 불러오는 중에 오류가 발생했습니다:', error);
      });
  }, []);

  return (
    <VideoGrid>
      {videoData.map((video) => (
        <VideoCard key={video.id}>
          <Video src={video.url} controls />
          <VideoLink href={video.url} target="_blank" rel="noopener noreferrer">
            {video.title}
          </VideoLink>
        </VideoCard>
      ))}
    </VideoGrid>
  );
};

export default VideoGridView;

