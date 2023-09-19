import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;

  color: var(--1, #959aa4);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3vmin; /* 125% */
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const footer = () => {
  return (
    <FooterContainer>
      <LeftContent>
        <div>(주)SCAPTURE</div>
        <div>사업자 등록번호: 000-00-00000</div>
      </LeftContent>
      <RightContent>
        <div>E-MAIL: info@example.com</div>
        <div>주소: 서울특별시 성북구 삼선교로 16길 116</div>
        <div>서비스 문의: 02-760-0000</div>
      </RightContent>
    </FooterContainer>
  );
};

export default footer;
