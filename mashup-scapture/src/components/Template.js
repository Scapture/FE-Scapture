import React from "react";
import { styled } from "styled-components";

const Background = styled.div`
  background: linear-gradient(180deg, #000 0%, rgba(23, 24, 26, 0.8) 55.14%);
`;

function Template({ children }) {
  return <Background>{children}</Background>;
}

export default Template;
