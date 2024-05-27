import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { getList } from '../apis/api/video';

const VideoGrid = styled.div`
  background-color: #000000;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열로 나열 */
  gap: 8px; /* 영상 간격 조절 */
`;

const VideoCard = styled.div`
  padding: 0.5rem;
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
  color: #eee;
`;

const Modal = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 검정 바탕 색상 */
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff; /* 모달 내부 색상 */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ModalCloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const VideoGridView = () => {
  const [videoData, setVideoData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getList();

        if(response.status === 200){
          
          setVideoData(response.data.data);
          // const videoList = response.data.url; // JSON 데이터
          // setVideoData(videoList);
          console.log(response.data);
        }
      
      } catch (error) {
        console.error('영상 데이터를 불러오는 중에 오류가 발생했습니다:', error);
      }
    };

    fetchData(); // async 함수를 호출
  }, []);

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <VideoGrid>
        {videoData.map((video) => (
          <VideoCard key={video.id} onClick={() => openModal(video)}>
            <Video src={video.url} controls />
            <VideoLink href={video.video} target="_blank" rel="noopener noreferrer">
              {video.id}
            </VideoLink>
          </VideoCard>
        ))}
      </VideoGrid>
      <Modal open={selectedVideo !== null} onClick={closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
          {selectedVideo && (
            <Video src={selectedVideo.url} controls />
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default VideoGridView;
